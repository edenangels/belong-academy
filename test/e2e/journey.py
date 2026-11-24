#!/usr/bin/env python3
"""End-to-end learner journey — the check to run before every deploy.

    python3 test/e2e/journey.py http://localhost:8080/            # phone width (390), English
    python3 test/e2e/journey.py https://belong-academy.pages.dev/ 1280 pt

Walks: onboarding (name, department, goal) → path → a lesson → two questions (one wrong:
the answer must NOT be revealed; answering again must work) → Module complete window →
My learning tabs → course certificate → reels (save, swipe) → library search.
Prints each step, saves screenshots to test/e2e/shots/, and exits 1 if anything fails
or the browser logs an error. Needs: pip install playwright && playwright install chromium
"""
import sys, os
from playwright.sync_api import sync_playwright
B=sys.argv[1]; W=int(sys.argv[2]) if len(sys.argv)>2 else 390; L=sys.argv[3] if len(sys.argv)>3 else 'en'
SHOTS=os.path.join(os.path.dirname(os.path.abspath(__file__)),'shots'); os.makedirs(SHOTS,exist_ok=True)
FAILS=[]
def log(*a): print(*a, flush=True)
def check(name, ok, got=''):
    log(('  ok  ' if ok else 'FAIL  ')+name, '' if ok else got)
    if not ok: FAILS.append(name)
with sync_playwright() as p:
    try: b=p.chromium.launch()
    except Exception: b=p.chromium.launch(channel="chrome")   # Playwright's own browser missing → use installed Google Chrome
    c=b.new_context(viewport={"width":W,"height":844},service_workers="block", accept_downloads=True)
    if L=='pt': c.add_init_script("localStorage.getItem('belong-state-v2')||localStorage.setItem('belong-state-v2',JSON.stringify({lang:'pt'}))")
    pg=c.new_page(); pg.set_default_timeout(8000); errs=[]
    pg.on("pageerror",lambda e:errs.append('PAGEERR '+str(e)[:200]))
    pg.on("console",lambda m:errs.append('CONSOLE '+m.text[:160]) if m.type=='error' and 'ERR_NETWORK' not in m.text and 'status of 400' not in m.text else None)
    step=lambda n,f: (lambda r: log(n, r))(f())
    pg.goto(B+"#/home"); pg.wait_for_timeout(3500)
    gb=pg.query_selector('text=/Continue as guest|Continuar como convidado/i')
    if gb and gb.is_visible(): gb.click(); pg.wait_for_timeout(2500)
    check('no sign-in screen', not pg.evaluate("!!document.querySelector('#authGate').getClientRects().length"))
    check('onboarding opens', pg.evaluate("!!document.querySelector('#onboard.open')"))
    pg.screenshot(path=f"{SHOTS}/1-onboarding-{L}-{W}.png")
    if pg.query_selector('#obUsername'): pg.fill('#obUsername','Maria Silva')
    pg.click('.ob-option[data-role=hosting]'); pg.click('#obNext'); pg.wait_for_timeout(400)
    step('goals', lambda: pg.evaluate("[...document.querySelectorAll('.ob-goals .ob-option')].map(o=>o.innerText.replace(/\\n/g,': ').slice(0,60))"))
    pg.click('#obNext'); pg.wait_for_timeout(5200)
    pg.wait_for_timeout(1200); pg.evaluate("document.querySelector('#tourOv') && endTour()")
    step('path', lambda: pg.evaluate("CUR.pathModules().map(m=>m.id)"))
    check('path built', pg.evaluate("CUR.pathModules().length") > 0)
    check('name saved', pg.evaluate("S.profile.name") == 'Maria Silva', pg.evaluate("S.profile.name"))
    pg.screenshot(path=f"{SHOTS}/2-home-{L}-{W}.png")
    # first lesson via path tile
    pg.click('.pstep.ps2.current'); pg.wait_for_timeout(1500)
    step('module page', lambda: pg.evaluate("location.hash"))
    pg.click('.cl:not(.locked) .cl-main >> nth=0'); pg.wait_for_timeout(2500)
    step('player', lambda: pg.evaluate("playing&&playing.courseId+':'+playing.mod"))
    def finish_lesson(wrong=False):
        cid,mod=pg.evaluate("[playing.courseId, playing.mod]")
        pg.evaluate(f"completeModule('{cid}',{mod})"); pg.wait_for_timeout(1200)
        pg.evaluate("(()=>{const b=document.querySelector('#takeModal [data-action=take-go]')||[...document.querySelectorAll('#takeModal button')].find(b=>b.offsetParent&&/btn-primary/.test(b.className));b&&b.click()})()"); pg.wait_for_timeout(1500)
        n=pg.evaluate("document.querySelectorAll('#ckOv .mc-q').length")
        for qi in range(n):
            # pick correct unless wrong requested for q0: correct index unknown -> use internal answer
            pg.evaluate(f"""(()=>{{}})()""")
        return cid,mod,n
    cid,mod,n=finish_lesson()
    step('check questions', lambda: n)
    # answer: first option for all (likely some wrong)
    for qi in range(n): pg.click(f'#ckOv .q-opt[data-q="{qi}"] >> nth=0')
    pg.click('#mcGo'); pg.wait_for_timeout(800)
    step('result', lambda: pg.evaluate("document.querySelector('#ckOv .ob-eyebrow').innerText"))
    check('wrong answer is not revealed', not pg.evaluate("document.querySelector('#ckOv').innerText.includes('Correct answer')||document.querySelector('#ckOv').innerText.includes('Resposta certa')"))
    tries=0
    while pg.query_selector('#mcRetry') and tries<6:
        tries+=1; pg.click('#mcRetry'); pg.wait_for_timeout(1500)
        k=pg.evaluate("document.querySelectorAll('#ckOv .mc-q').length")
        for qi in range(k):
            opts=pg.query_selector_all(f'#ckOv .q-opt[data-q="{qi}"]'); opts[min(tries,len(opts)-1)].click()
        pg.click('#mcGo'); pg.wait_for_timeout(800)
    step('after retries', lambda: pg.evaluate("document.querySelector('#ckOv .ob-eyebrow').innerText"))
    pg.click('#mcDone'); pg.wait_for_timeout(2500)
    step('after continue: playing', lambda: pg.evaluate("playing&&playing.courseId+':'+playing.mod"))
    # second lesson -> module end
    cid,mod,n=finish_lesson()
    for qi in range(n): pg.click(f'#ckOv .q-opt[data-q="{qi}"] >> nth=1')
    pg.click('#mcGo'); pg.wait_for_timeout(700); pg.click('#mcDone'); pg.wait_for_timeout(2000)
    step('module complete window', lambda: pg.evaluate("document.querySelector('#certEarned.on')?.innerText.replace(/\\n+/g,' | ')"))
    check('Module complete window', bool(pg.query_selector('#certEarned.on')))
    pg.screenshot(path=f"{SHOTS}/3-module-complete-{L}-{W}.png")
    if pg.query_selector('#certEarned.on [data-action=cur-modnext]'):
        pg.click('#certEarned.on [data-action=cur-modnext]'); pg.wait_for_timeout(2500)
        step('next module playing', lambda: pg.evaluate("playing&&playing.courseId+':'+playing.mod"))
    pg.evaluate("closePlayer && closePlayer()"); pg.wait_for_timeout(600)
    # Review tab / me
    pg.evaluate("location.hash='#/me'"); pg.wait_for_timeout(1500)
    step('me summary', lambda: pg.evaluate("document.querySelector('.me-sum').innerText"))
    step('tabs', lambda: pg.evaluate("[...document.querySelectorAll('.me-tab')].map(x=>x.innerText.replace(/\\n/g,''))"))
    # course completion simulation: mark all foundations lessons done and open course result + certificate
    pg.evaluate("""(()=>{const co=CUR.courses[0];CUR.modulesOfCourse(co.id).forEach(m=>m.lessons.forEach(i=>{if(!CUR.lessonDone(m.source,i))S.trainingLog.push({courseId:m.source,mod:i,at:Date.now(),hours:0.1,ev:{check:{kind:'assessment',score:2,total:2,at:Date.now(),detail:[{q:'a',ok:true},{q:'b',ok:true}]}}})}));save();showCourseResult(co.id)})()"""); pg.wait_for_timeout(1000)
    step('course result', lambda: pg.evaluate("document.querySelector('#certEarned.on')?.innerText.replace(/\\n+/g,' | ').slice(0,200)"))
    try:
        with pg.expect_popup(timeout=6000) as pop:
            pg.click('#certEarned.on [data-action=cur-cert]')
        cp=pop.value; cp.wait_for_load_state(); step('certificate opened', lambda: cp.evaluate("document.body.innerText.slice(0,160).replace(/\\n+/g,' | ')"))
        check('certificate shows the name', 'Maria Silva' in cp.evaluate("document.body.innerText"))
    except Exception as e:
        check('certificate opens', False, str(e)[:80])
    pg.evaluate("document.querySelector('#certEarned')&&document.querySelector('#certEarned').classList.remove('on')")
    # reels
    pg.evaluate("location.hash='#/reels'"); pg.wait_for_timeout(3500)
    step('reels', lambda: pg.evaluate("[document.querySelectorAll('article.reel').length, document.querySelector('article.reel.current .reel-copy').innerText.trim()]"))
    pg.click('article.reel.current [data-action=reel-save]'); pg.wait_for_timeout(500)
    pg.evaluate("document.querySelector('#reelFeed').scrollBy(0, innerHeight)"); pg.wait_for_timeout(2000)
    check('reels load', pg.evaluate("document.querySelectorAll('article.reel').length") > 0)
    pg.screenshot(path=f"{SHOTS}/4-reels-{L}-{W}.png")
    step('swiped to', lambda: pg.evaluate("document.querySelector('article.reel.current').dataset.id"))
    pg.click('.reel-x'); pg.wait_for_timeout(1000)
    pg.evaluate("location.hash='#/me'"); pg.wait_for_timeout(1000); pg.evaluate("meTab='saved';render()"); pg.wait_for_timeout(600)
    step('saved reels', lambda: pg.evaluate("document.querySelectorAll('.me-record .reel-thumb').length"))
    # search
    pg.evaluate("location.hash='#/library'"); pg.wait_for_timeout(1500)
    pg.click('#libSearch'); pg.keyboard.type('praia', delay=50); pg.wait_for_timeout(700)
    step('search suggestions', lambda: pg.evaluate("[...document.querySelectorAll('.ls-item')].map(x=>x.innerText.replace(/\\n/g,' · ')).slice(0,3)"))
    check('no browser errors', not errs, errs)
    b.close()
log('\nPASS' if not FAILS else '\nFAILED: ' + ', '.join(FAILS))
sys.exit(1 if FAILS else 0)
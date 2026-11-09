# Adding accounts later (optional)

Today the academy runs with **no login** (`backend: 'open'`). That is the simplest possible
setup, with nothing to run or pay for. The trade-off: progress stays on the device where
someone learns, and leaders have no shared team view.

When you want **accounts, progress across devices, and the leaders' Team view** (who is doing
what, progress per course, scores, hours toward the 40 a year), the code is already there.
It uses Google Firebase (free tier is enough). Nothing else in the app changes.

## What a person does (about 15 minutes, in the Firebase console)

1. Go to https://console.firebase.google.com, click **Add project** and name it
   (e.g. `belong-academy`).
2. **Project settings → Your apps → Web (`</>`)**: register an app and copy the
   `firebaseConfig` it shows.
3. **Authentication → Sign-in method:** enable **Email/Password**. Optionally enable
   **Google**.
4. **Authentication → Settings → Authorized domains:** add your academy domain, e.g.
   `academy.your-site.com`.
5. **Firestore Database → Create database:** production mode, EU region
   (`europe-west1`).

## What Claude does

1. In `brands/belong/brand.js`:
   - set `backend: 'firebase'`;
   - add `firebase: { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId }`
     from step 2;
   - add the admins' emails to `superadmins: [...]`.
2. Deploy the security rules: `npx firebase-tools login`, then
   `npx firebase-tools deploy --only firestore:rules --project <projectId>`, using
   `core/firestore.rules`. A `firebase.json` with `{ "firestore": { "rules": "core/firestore.rules" } }`
   is enough.
3. Update `privacy.html`: Firebase (EU region) becomes a sub-processor, and accounts store
   name and email.
4. Release (bump the version, see CLAUDE.md) and test sign-up, sign-in, the Team view and a
   second device.

The web `apiKey` is not a secret. Firebase web keys are public by design, and the security
rules are what protect the data.

Progress made in no-login mode stays on the device where it was made. Test on one device
whether it carries into a new account before announcing the switch to the team.

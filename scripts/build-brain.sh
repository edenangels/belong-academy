#!/usr/bin/env bash
# build-brain.sh — from transcripts to a searchable, quizzed, meaning-indexed brain.
#   scripts/build-brain.sh <course-id>      # quizzes (blind-gated) for that course, then the whole index
# Order matters: knowledge → vectors → graph → tags (graph reads vectors for 'similar' edges,
# tags read the graph's concepts). Pending reels stay out by design.
set -euo pipefail
cd "$(dirname "$0")/.."
COURSE=${1:?course id}
node scripts/generate-quizzes.mjs --course "$COURSE"
node scripts/verify-quizzes.mjs   --course "$COURSE"
node scripts/build-knowledge.mjs
node scripts/build-vectors.mjs
node scripts/build-graph.mjs
node scripts/build-tags.mjs
node test/run.mjs

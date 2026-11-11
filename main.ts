// ai-joke-02 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The gate takes
// UTF-8 text of 1 to 280 characters that is not only white space, and the
// judge reads exactly the bytes written, so no line end is written.
// The output is a fixed string: deterministic, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'I asked my AI agent to fix a bug. It fixed it, wrote a test, then filed a bug report against me for unclear requirements.');

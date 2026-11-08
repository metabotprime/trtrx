import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const file = '.seo/reviews/2026-11-08-guide-ctas.json';
const review = JSON.parse(fs.readFileSync(file, 'utf8'));
assert.equal(review.verdict, 'GO');
assert.equal(review.intakeEnabled, false);
assert.ok(review.founderAuthorization && review.reviewScope && review.evidence);
const changed = execFileSync('git', ['diff', '--name-only', review.baseCommit], { encoding: 'utf8' }).trim().split('\n').filter((name) => name && name !== file).sort();
assert.deepEqual(Object.keys(review.files).sort(), changed, 'Review must cover the exact diff');
assert.ok(changed.length > 0);
for (const [name, hash] of Object.entries(review.files)) {
  assert.equal(createHash('sha256').update(fs.readFileSync(name)).digest('hex'), hash, `Review stale: ${name}`);
}
console.log(`GO review verified against ${changed.length} files and base ${review.baseCommit}`);

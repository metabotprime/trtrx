import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const baseCommit = process.env.TRTRX_RELEASE_BASE;
assert.match(baseCommit ?? '', /^[0-9a-f]{40}$/, 'Set TRTRX_RELEASE_BASE to the base commit SHA');
execFileSync('git', ['merge-base', '--is-ancestor', baseCommit, 'HEAD']);
const diff = execFileSync('git', ['diff', '--name-status', '--no-renames', '-z', baseCommit, '--'], { encoding: 'utf8' });
const fields = diff.split('\0').slice(0, -1);
const changes = new Map();
for (let index = 0; index < fields.length; index += 2) {
  changes.set(fields[index + 1], fields[index]);
}
const reviews = [...changes.keys()].filter((name) => name.startsWith('.seo/reviews/'));
assert.equal(reviews.length, 1, 'The release must change exactly one review record');
const [file] = reviews;
assert.match(file, /^\.seo\/reviews\/[^/]+\.json$/, 'Review must be a JSON file in .seo/reviews');
assert.equal(changes.get(file), 'A', 'Each release must add a new record and preserve prior records');
changes.delete(file);

const review = JSON.parse(fs.readFileSync(file, 'utf8'));
assert.equal(review.baseCommit, baseCommit, 'Review must match the release base commit');
assert.equal(review.verdict, 'GO');
assert.equal(review.intakeEnabled, false);
assert.ok(review.founderAuthorization && review.reviewScope && review.evidence);
const changed = [...changes.keys()].sort();
assert.deepEqual(Object.keys(review.files).sort(), changed, 'Review must cover the exact diff');
assert.ok(changed.length > 0);
for (const [name, hash] of Object.entries(review.files)) {
  const actual = changes.get(name) === 'D' ? null : createHash('sha256').update(fs.readFileSync(name)).digest('hex');
  assert.equal(actual, hash, `Review stale: ${name}`);
}
console.log(`GO review verified against ${changed.length} files and base ${review.baseCommit}`);

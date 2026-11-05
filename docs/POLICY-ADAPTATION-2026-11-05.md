# TRTRx policy adaptation, November 5, 2026

Requested scope: use Trimi's Terms of Service and Refund Policy for TRTRx,
link them in the footer, and check which other Trimi pages should carry over.

## Source

Trimi `origin/main` at `b8f05301384a819668898bd56eeb0897b3dfea53`:

- `pages/terms-of-service.tsx` renders `src/pages/TermsOfService.tsx`.
- `pages/refund-policy.tsx` renders `src/pages/RefundPolicy.tsx`.
- `pages/code-of-conduct.tsx` renders `src/pages/CodeOfConduct.tsx`.
- `src/components/legal/PlanPriceChanges.tsx` supplies shared price-change rules.
- The live Terms and Refund Policy both showed October 13, 2026 versions.
- Patient-facing copy was checked against section 4 of Trimi's
  `docs/HANDOFF-EXTERNAL-SESSION.md` on `origin/main`.

## Published adaptation

| Area | TRTRx handling |
| --- | --- |
| General terms | Website use, intellectual property, prohibited conduct, warranty/liability language and future-service arbitration adapted to TRTRx. |
| Refunds | Pre-prescription cancellation, clinical ineligibility, clinician-directed discontinuation review, shipment problems, billing errors and original-method refunds retained. |
| Price changes | Agreed price stays in place for a purchased term; later promotions do not create a refund right. Both pages share one content constant. |
| Service availability | Intake, accounts, payments, prescriptions and support remain unavailable. Future-service provisions do not open them. |
| Plans | TRTRx keeps its planned monthly model. Trimi's quarterly, six-month and annual commitments were not copied. |
| Outcomes | Trimi's six-month weight-loss promise does not apply to TRT and was not copied or renamed. No new outcome or satisfaction promise was created. |
| Clinical and fulfillment facts | No BelieveRx affiliation, overnight shipping commitment or operating patient portal was inferred from Trimi. |
| Arbitration | Future-service clause retains the written 30-day opt-out structure; it does not start an opt-out clock while there is no working notices channel. |
| Legal entity | Christian confirmed TRTRX LLC on November 5, 2026. The terms identify that entity as the operator; TRYTRIMI LLC was not copied from Trimi. |

The Terms incorporate a Provider Code of Conduct, so `/code-of-conduct` was
also adapted and added. It sets expectations without claiming that automated
follow-ups, identity software, patient messaging or clinical operations are live.

Existing `/privacy`, `/accessibility`, `/medical-disclaimer`, `/editorial-policy`
and `/medical-review-policy` remain appropriate to TRTRx. Trimi's operational
privacy/HIPAA, anti-spam and email-system statements are not TRTRx data practices.
Clinical privacy notices and telehealth consent need the actual service
arrangements before intake opens. Separate shipping and cancellation pages are
unnecessary because those topics are covered by the refund policy.

## Verification

- Independent source review found no substantive policy inconsistencies.
- TypeScript check and production build passed after correcting unescaped JSX text.
- Esbuild parsed all changed TSX files.
- The build warned about existing outdated Browserslist data and webpack cache
  serialization; neither warning prevented compilation.

This records content provenance and implementation checks, not legal advice or
an assertion of clinical-service readiness.

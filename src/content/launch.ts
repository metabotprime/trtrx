/** Public information, clinical guidance and intake have separate release gates.
 * Enabling public indexing does not open intake or make a service available.
 */
export const PUBLIC_LAUNCH_ENABLED: boolean = true;
export const INTAKE_ENABLED: boolean = false;
/** Reviewed clinical content has its own release gate, separate from domain launch and intake. */
export const CLINICAL_CONTENT_RELEASED: boolean = false;
export const LAUNCH_PATH = "/launch";
export const PRIMARY_CTA_LABEL = "Launch status";
export const LAUNCH_MESSAGE =
  "TRTrx public information is live. Patient intake is not open yet.";
export const PLANNED_CARE_NOTICE =
  "Plans and service details are being finalized. No clinical services or prescriptions are currently available.";

export function isPublicIndexingAllowed(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/:\d+$/, "");
  return (
    PUBLIC_LAUNCH_ENABLED && (host === "trtrx.com" || host === "www.trtrx.com")
  );
}

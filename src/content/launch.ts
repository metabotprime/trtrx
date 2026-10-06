/** Public education launch and clinical intake are separate release decisions.
 * Keep both disabled until their respective launch reviews are complete.
 * Enabling public indexing does not open intake or make a service available.
 */
export const PUBLIC_LAUNCH_ENABLED: boolean = false;
export const INTAKE_ENABLED: boolean = false;
export const LAUNCH_PATH = "/launch";
export const PRIMARY_CTA_LABEL = "Launch status";
export const LAUNCH_MESSAGE =
  "TRTrx is preparing to launch. Patient intake is not open yet.";
export const PLANNED_CARE_NOTICE =
  "Plans and service details are being finalized. No clinical services or prescriptions are currently available.";

export function isPublicIndexingAllowed(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/:\d+$/, "");
  return (
    PUBLIC_LAUNCH_ENABLED && (host === "trtrx.com" || host === "www.trtrx.com")
  );
}

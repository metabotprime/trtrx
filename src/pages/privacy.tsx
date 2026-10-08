import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { PolicyContent } from "@/components/sections/PolicyContent";
import { PUBLIC_LAUNCH_ENABLED } from "@/content/launch";
export default function PolicyPage() {
  return (
    <PageShell>
      <SEOHead
        title={"Privacy policy"}
        description={
          "Privacy information for the TRTrx educational website. Intake, payments, accounts, support messages and email signup are not available."
        }
        path={"/privacy"}
      />
      <PolicyContent
        eyebrow="Website information"
        title={"Privacy policy"}
        lastUpdated="October 8, 2026"
        intro={[
          "TRTrx provides educational and planned-service information. There is no patient intake form, active account system, payment checkout, support messaging or email waitlist signup on this site. This notice describes the current website, not a future clinical service.",
        ]}
        sections={[
          {
            heading: "Forms and contact information",
            blocks: [
              {
                p: "The website does not provide a form or active support mailbox for sending personal information. Support contact details will be published before intake opens. Do not send medical records, laboratory results, identification documents or other sensitive health information to an unverified address.",
              },
            ],
          },
          {
            heading: "Website requests and analytics",
            blocks: [
              {
                p: "The hosting service processes technical information needed to deliver website requests, such as network and browser information. No clinical intake or payment information is requested by this website.",
              },
              {
                p: PUBLIC_LAUNCH_ENABLED
                  ? "The public website is configured to use Vercel Web Analytics to understand page visits. URL query strings and fragments are removed, and account, intake and portal routes are excluded. No clinical intake or payment data is collected through this analytics configuration. This notice must be revisited before future clinical data collection or additional tracking is enabled."
                  : "Public-site analytics are disabled during prelaunch. The planned public-site analytics configuration removes URL query strings and fragments and excludes account, intake and portal routes. This notice must be revisited before any future clinical data collection or additional tracking is enabled.",
              },
              {
                p: PUBLIC_LAUNCH_ENABLED
                  ? "Google Analytics 4 measures visits to selected public pages. It uses cookies and processes technical information such as browser, device and network information. Our configuration removes URL query strings and fragments, uses general page titles and excludes account, intake, portal and clinical-content routes. External referral information is limited to the referring website's origin. Advertising features and automatic tracking of clicks, searches, scrolling, forms and downloads are disabled. No form contents, clinical intake or payment information are sent through this configuration."
                  : "Google Analytics 4 is disabled before the public website is released.",
              },
              {
                p: <a href="https://policies.google.com/technologies/partner-sites" className="text-primary underline underline-offset-4">How Google uses information from sites or apps that use its services</a>,
              },
            ],
          },
          {
            heading: "Future clinical services",
            blocks: [
              {
                p: "Before patient intake opens, TRTrx will need to publish the privacy notices and consent information applicable to the actual clinical, pharmacy, laboratory and technology arrangements. Those arrangements are not represented as operational by this website.",
              },
            ],
          },
          {
            heading: "Your choices",
            blocks: [
              {
                p: "You can browse without creating an account or joining a mailing list. You can control cookies and similar storage through your browser settings. An active support channel and instructions for privacy requests will be published before intake opens; this website does not currently receive those requests.",
              },
            ],
          },
          {
            heading: "Updates",
            blocks: [
              {
                p: "The date above identifies this website notice. It will be updated when the actual data practices change.",
              },
            ],
          },
        ]}
        footnote={
          <>
            Support contact details will be published before intake opens. Check our{" "}
            <Link
              className="text-primary underline underline-offset-4"
              href="/contact"
            >
              contact status
            </Link>
            .
          </>
        }
      />
    </PageShell>
  );
}

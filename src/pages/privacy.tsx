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
          "Privacy information for the prelaunch TRTrx educational website. Intake, payments, accounts and email signup are not available."
        }
        path={"/privacy"}
      />
      <PolicyContent
        eyebrow="Website information"
        title={"Privacy policy"}
        lastUpdated="October 6, 2026"
        intro={[
          "TRTrx is a prelaunch educational website. There is no patient intake form, active account system, payment checkout or email waitlist signup on this site. This notice describes the current website, not a future clinical service.",
        ]}
        sections={[
          {
            heading: "Information you choose to send",
            blocks: [
              {
                p: "Contact links open your own email application. Sending an email is your choice; the website does not submit it for you. General email may include the address and information you provide. Do not send medical records, laboratory results, identification documents or other sensitive health information.",
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
                p: "You can browse without creating an account or joining a mailing list. You can control cookies and similar storage through your browser settings. For questions about information you voluntarily emailed, contact hello@trtrx.com without including additional sensitive information.",
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
          <p>
            General questions:{" "}
            <a
              className="text-primary underline underline-offset-4"
              href="mailto:hello@trtrx.com"
            >
              hello@trtrx.com
            </a>
            . Do not send sensitive medical information.
          </p>
        }
      />
    </PageShell>
  );
}

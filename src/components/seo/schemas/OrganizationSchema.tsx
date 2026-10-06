import { SITE_URL } from "@/lib/utils";
import { SITE_DESCRIPTION } from "@/lib/seo/site";

/**
 * Inline JSON-LD — never via Helmet (head-dedup collapses multiple LD tags).
 * Using `Organization` for v1 (marketing site, not yet operating as clinic).
 * Upgrade to `MedicalBusiness` when intake is live.
 */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "trtrx",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/api/og?variant=logo`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@trtrx.com",
      availableLanguage: ["en"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

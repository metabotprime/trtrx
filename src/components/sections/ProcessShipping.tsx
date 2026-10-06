import { Truck, Package, RotateCw, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FEATURES = [
  {
    Icon: Truck,
    title: "Shipping is planned",
    body: "Shipping is included in the planned price. Fulfilment timelines have not been confirmed.",
  },
  {
    Icon: Package,
    title: "Product details first",
    body: "A specific prescribed product and dispensing pharmacy would need to be confirmed before any shipment.",
  },
  {
    Icon: RotateCw,
    title: "Refills need oversight",
    body: "A prescription and appropriate follow-up would govern refills. No automatic refill service is currently active.",
  },
  {
    Icon: ShieldCheck,
    title: "Storage instructions",
    body: "Your pharmacist should explain storage and handling for the exact medication supplied.",
  },
];

export function ProcessShipping() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Four: Delivery"
          title="Delivery details, *before treatment.*"
          subtitle="Pharmacy and delivery arrangements are still being finalized. TRTrx is not currently dispensing or shipping prescriptions."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map(({ Icon, title, body }) => (
            <li key={title} className="flex flex-col">
              <Icon
                size={28}
                strokeWidth={1.5}
                className="text-accent-strong"
                aria-hidden
              />
              <h3
                className="mt-5 font-serif text-lg font-medium leading-tight text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

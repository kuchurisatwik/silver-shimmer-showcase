import { BadgeCheck, Sparkles, Crown, Truck, Lock } from "lucide-react";
import { SectionHeading } from "./ui";

const promises = [
  { icon: BadgeCheck, label: "Hallmarked 925" },
  { icon: Sparkles, label: "Hand-finished" },
  { icon: Crown, label: "Bridal Specialists" },
  { icon: Truck, label: "Pan-India Shipping" },
  { icon: Lock, label: "Secure Payments" },
];

export function WhyVSJ() {
  return (
    <section id="why-vsj" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="The Vineeth Promise"
          title="Why Vineeth"
          subtitle="Crafted with care, designed to be treasured"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-9 gap-x-6 mt-8 sm:mt-12">
          {promises.map((p) => (
            <div key={p.label} className="flex flex-col items-center text-center gap-4 reveal">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "68px",
                  height: "68px",
                  border: "1px solid var(--aa-hair)",
                  color: "var(--gold-accent)",
                }}
              >
                <p.icon className="w-6 h-6" strokeWidth={1.25} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  color: "var(--chocolate)",
                }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

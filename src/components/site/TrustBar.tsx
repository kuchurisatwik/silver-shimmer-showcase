import { Shield, Award, Lock, Truck } from "lucide-react";

const items = [
  { icon: Shield, label: "Hallmarked Silver" },
  { icon: Award, label: "Premium Craftsmanship" },
  { icon: Lock, label: "Secure Payments" },
  { icon: Truck, label: "Pan India Shipping" },
];

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__inner">
        {items.map((item) => (
          <div key={item.label} className="trust-bar__item">
            <item.icon className="trust-bar__icon" strokeWidth={1.5} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

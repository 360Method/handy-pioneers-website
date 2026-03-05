import { ShieldCheck, Star, Clock, Award } from "lucide-react";

const items = [
  { icon: Star, label: "5-Star Rated", sub: "Google & Facebook" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Up to $1M Coverage" },
  { icon: Award, label: "1-Year Guarantee", sub: "On All Labor" },
  { icon: Clock, label: "On-Time Service", sub: "Clear Timelines" },
];

export default function TrustBar() {
  return (
    <div
      className="w-full py-5 border-b"
      style={{
        backgroundColor: "oklch(0.32 0.07 160)",
        borderColor: "oklch(0.22 0.07 160)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(200,137,42,0.25)" }}
              >
                <Icon size={18} style={{ color: "oklch(0.80 0.10 65)" }} />
              </div>
              <div>
                <div
                  className="text-sm font-bold text-white leading-tight"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {label}
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

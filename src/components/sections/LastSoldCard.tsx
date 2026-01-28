import Card from "@/components/ui/Card";

export default function LastSoldCard() {
  return (
    <Card variant="light" className="!p-6">
      {/* Promo image tile */}
      <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
        {/* Replace with real image */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-teal-500" />

        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Top-left badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Last Sold
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute left-4 right-4 bottom-4">
          <div className="text-white font-semibold text-lg leading-tight">
            iPhone 17 Pro Max
          </div>

          <div className="mt-2 flex items-end justify-between">
            <div className="text-lime-200 font-bold text-xl">
              ₹14,999
            </div>
            <div className="text-white/70 text-sm line-through">
              ₹1,24,900
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

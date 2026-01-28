import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";

interface ProductCardProps {
  productName: string;
  price: string;
  currency?: string;
  category?: string;
  countdown?: string;
}

export default function ProductCard({
  productName,
  price,
  currency = "$",
  category,
  countdown = "23:59:59",
}: ProductCardProps) {
  return (
    <Card
      variant="light"
      padding={false}
      className="relative overflow-hidden rounded-[36px]"
    >
      {/* Image area with beige/gold background */}
      <div className="relative h-[240px] bg-[#b7b1a8]">
        {/* Bell icon - translucent white/light grey with light blue/grey icon */}
        <div className="absolute top-4 right-4 z-20">
          <IconButton
            size="sm"
            aria-label="Set alert"
            className="bg-white/80 hover:bg-white/90 backdrop-blur-sm"
          >
            <svg
              className="w-4 h-4 text-[#8fa3c7]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </IconButton>
        </div>

        {/* Phone silhouette - gold/beige colored, centered */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[120px] h-[170px] rounded-2xl bg-white/15 border border-black/10" />

        {/* Countdown overlay - positioned at bottom of image area */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-6 text-white">
          <div className="text-xs font-semibold tracking-widest opacity-90 mb-1">
            Starts In
          </div>
          <div className="text-3xl font-extrabold leading-none tracking-tight">
            {countdown}
          </div>
        </div>
      </div>

      {/* Bottom white section */}
      <div className="bg-white rounded-b-[36px] px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-lg font-semibold text-gray-900 leading-tight mb-2">
              {productName}
            </div>
            <div className="text-xl font-bold text-gray-900">
              {currency}
              {price}
            </div>
          </div>

          {category && (
            <Badge
              variant="category"
              className="!bg-gray-200 !text-gray-700 !px-3 !py-1.5 !rounded-full text-xs font-semibold uppercase shrink-0"
            >
              {category}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}

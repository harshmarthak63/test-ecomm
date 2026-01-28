import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
export default function NextDropHero() {
  return (
    <Card variant="dark" className="relative overflow-hidden !p-10 md:!p-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-black/0 to-blue-500/10" />
      </div>

      {/* Use 3-column layout on desktop so left area is wider */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[520px]">
        {/* LEFT (2/3 width on desktop) */}
        <div className="lg:col-span-2">
          {/* Live pill badge */}
          <div className="mb-8">
            <Badge
              variant="default"
              className="!bg-white/5 !text-white/80 !px-6 !py-3 !text-xs uppercase tracking-[0.35em] border border-white/10"
            >
              <span className="inline-flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                LIVE FLASH DROP INCOMING
              </span>
            </Badge>
          </div>

          {/* Countdown */}
          <p className="text-gray-400/70 text-xl uppercase tracking-widest mb-4">
            NEXT DROP IN
          </p>

          <div className="text-white font-bold leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl">
            02:14:33
          </div>

          {/* Info row */}
          <div className="mt-12">
            <div className="text-gray-300/70 text-lg leading-snug flex  gap-4">
       <Link to="/signup">
                  <Button
                    variant="primary"
                    size="md"
                    className="!rounded-xl !py-4  px-5"
                  >
                    {"Join Membership ->" }
                  </Button>
                </Link>
                <div>
              <div>Exclusive to members</div>
              <div className="text-gray-400/70">Limited to 1000 buyers</div>
              </div>
            </div>
          </div>

          {/* Avatars + count */}
          <div className="mt-14 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-white/10 border-2 border-faidaa-dark"
                />
              ))}
            </div>

            <div className="text-lg">
              <span className="text-white font-semibold">12.4k People</span>{" "}
              <span className="text-gray-400/70">waiting for the drop</span>
            </div>
          </div>
        </div>

        {/* RIGHT (1/3 width on desktop) */}
        <div className="lg:col-span-1 flex justify-end lg:justify-center">
          <div className="w-full max-w-[560px]">
            <div className="rounded-[28px] bg-white/5 border border-white/10 p-7">
              <div className="rounded-[22px] overflow-hidden bg-gradient-to-br from-black/60 to-blue-900/40 border border-white/10">
                {/* Replace this with <img /> */}
                <div className="aspect-[4/3] w-full bg-black/20 flex items-center justify-center text-white/35">
                 <img src="" />
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="h-12 rounded-2xl bg-white/10" />
                <div className="h-12 w-2/3 rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

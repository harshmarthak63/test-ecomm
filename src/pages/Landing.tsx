import NextDropHero from '@/components/sections/NextDropHero'
import MembershipUnlockedCard from '@/components/sections/MembershipUnlockedCard'
import LastSoldCard from '@/components/sections/LastSoldCard'
import UpcomingDropsGrid from '@/components/sections/UpcomingDropsGrid'
import TestimonialCard from '@/components/sections/TestimonialCard'
import LimitedSeatsCard from '@/components/sections/LimitedSeatsCard'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'

export default function Landing() {
  return (
    <PageShell>
      <main className="w-full">
        {/* Hero Section - Two Column Layout */}
        <section className="w-full py-10 md:py-12 bg-faidaa-light">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
              {/* Left Column - Next Drop Hero */}
              <div className="lg:col-span-2">
                <NextDropHero />
              </div>

              {/* Right Column - Membership & Last Sold */}
              <div className="flex flex-col gap-[22px]">
                <MembershipUnlockedCard />
                <LastSoldCard />
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Upcoming Drops */}
        <UpcomingDropsGrid />

        {/* Bottom Section - Testimonial & Limited Seats */}
        <section className="w-full py-10 md:py-12 bg-faidaa-light">
          <PageContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
              <TestimonialCard />
              <LimitedSeatsCard />
            </div>
          </PageContainer>
        </section>
      </main>
    </PageShell>
  )
}


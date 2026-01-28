import NextDropHero from '@/components/sections/NextDropHero'
import MembershipUnlockedCard from '@/components/sections/MembershipUnlockedCard'
import LastSoldCard from '@/components/sections/LastSoldCard'
import UpcomingDropsGrid from '@/components/sections/UpcomingDropsGrid'
import TestimonialCard from '@/components/sections/TestimonialCard'
import LimitedSeatsCard from '@/components/sections/LimitedSeatsCard'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PriceDisplay from '@/components/ui/PriceDisplay'

export default function Dashboard() {
  return (
    <PageShell headerVariant="app">
      {/* Main Content */}
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

        {/* Membership status + savings / quick access */}
        <section className="w-full py-10 md:py-12 bg-faidaa-light">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
              {/* Membership status card */}
              <Card variant="light" className="lg:col-span-2 bg-white rounded-b-[36px] !p-8 md:!p-10 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                  <div className="max-w-xl">
                    <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime-200 inline-block" />
                      Membership Status
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      Your Gold Zone Access is Active.
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Enjoy unlimited drops, early access to premium electronics, and 15% flat cashback on all orders.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Renews On</p>
                        <p className="text-sm font-semibold text-gray-900">12 Oct, 2024</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Monthly Plan</p>
                        <p className="text-sm font-semibold text-gray-900">$14.99/mo</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Member Since</p>
                        <p className="text-sm font-semibold text-gray-900">02 / 2023</p>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="!rounded-2xl !px-6 !py-3 w-full sm:w-auto"
                    >
                      Manage Subscription
                    </Button>
                  </div>

                  {/* Membership card visual */}
                  <div className="w-full max-w-sm mx-auto">
                    <div className="rounded-[32px] bg-gradient-to-br from-black to-gray-900 text-white p-6 shadow-xl relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-lime-200/10 rounded-full blur-3xl" />
                      <div className="flex items-center justify-between mb-8 relative">
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
                            FAIDAA GOLD
                          </p>
                          <p className="mt-2 text-sm text-gray-300">Member Since</p>
                          <p className="text-lg font-semibold">02 / 2023</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-lime-200/80" />
                      </div>
                      <p className="text-xs text-gray-400 mb-2">Member Name</p>
                      <p className="text-xl font-semibold mb-6">Ryman Alex</p>
                      <p className="text-xs text-gray-500">**** **** **** 5021</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Right column: savings + quick access + testimonial */}
              <div className="flex flex-col gap-[22px]">
                {/* Total savings */}
                <Card variant="dark" className=" !p-6">
                  <p className="text-sm text-gray-400 mb-2">Total Savings</p>
                  <div className="text-3xl font-bold text-white mb-1">
                    ₹ 1,240.50
                  </div>
                  <p className="text-xs text-gray-400 mb-4">
                    Reward points and vouchers combined.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <div>
                      <p className="font-semibold">Reward Points</p>
                      <p>4,850 pts</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Next Voucher In</p>
                      <p>150 pts</p>
                    </div>
                  </div>
                </Card>

                {/* Quick access */}
                <Card variant="light" className=" bg-white rounded-b-[36px] !p-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    Quick Access
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="!rounded-2xl !justify-start"
                    >
                      Shipping Addresses
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="!rounded-2xl !justify-start"
                    >
                      Order Tracking
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="!rounded-2xl !justify-start"
                    >
                      Payment Methods
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="!rounded-2xl !justify-start"
                    >
                      Support
                    </Button>
                  </div>
                </Card>

                {/* Referral highlight */}
                <Card variant="green" className="!p-6">
                  <p className="text-xs font-semibold text-gray-800 mb-1">
                    Refer a friend & get ₹20
                  </p>
                  <p className="text-sm text-gray-800 mb-4">
                    Both of you get credited instantly.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    className="!rounded-2xl !bg-black !text-white hover:!bg-gray-900"
                  >
                    Share Link
                  </Button>
                </Card>

                {/* Testimonial */}
                <TestimonialCard />
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Metrics + recent activity + limited seats */}
        <section className="w-full pb-12 bg-faidaa-light">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] mb-[22px]">
              {/* Metrics */}
              <Card variant="light" className="lg:col-span-2 !p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className='bg-white rounded-xl px-2 py-2'>
                    <p className="text-xs text-gray-500 mb-1">My Drops</p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                    <p className="text-xs text-green-600 mt-1">+12% vs last month</p>
                  </div>
                  <div className='bg-white rounded-xl px-2 py-2'>
                    <p className="text-xs text-gray-500 mb-1">Won</p>
                    <p className="text-2xl font-bold text-gray-900">03</p>
                    <p className="text-xs text-gray-500 mt-1">Successful claims</p>
                  </div>
                  <div className='bg-white rounded-xl px-2 py-2'>
                    <p className="text-xs text-gray-500 mb-1">Missed</p>
                    <p className="text-2xl font-bold text-gray-900">08</p>
                    <p className="text-xs text-blue-600 mt-1">Set alerts</p>
                  </div>
                </div>
              </Card>

              {/* Limited seats banner */}
              <LimitedSeatsCard />
            </div>

            {/* Recent activities */}
            <Card variant="light" className=" bg-white rounded-b-[36px] !p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Recent Activities
                </h3>
                <button className="text-sm text-blue-600 hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sequoia Pro Headphones
                    </p>
                    <p className="text-xs text-gray-500">
                      Claimed successfully
                    </p>
                  </div>
                  <div className="text-right">
                    <PriceDisplay currentPrice="0.00" currency="₹" size="sm" />
                    <p className="text-[11px] text-gray-500 mt-1">
                      Oct 15, 2:45 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Gen-X Bud Earbuds
                    </p>
                    <p className="text-xs text-gray-500">
                      Missed • Sold Out
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">₹0.00</p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Oct 05, 10:13 AM
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </PageContainer>
        </section>
      </main>
    </PageShell>
  )
}


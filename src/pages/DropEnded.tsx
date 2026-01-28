import { Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'

export default function DropEnded() {
  const upcomingDrops = [
    { name: 'X-Bud Gen 2', time: 'Drops in 2 days' },
    { name: 'Cine Lens Pro', time: 'Drops in 5 days' },
    { name: 'Midnight Mouse', time: 'Drops in 1 week' },
  ]

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <Card variant="dark" className="!p-8 md:!p-10 relative overflow-hidden">
                <Badge variant="live" className="mb-4">Flash Drop Ended</Badge>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Sequoia Inspiring Pro
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="default" className="!bg-red-500 !text-white !px-3 !py-1">
                        Sold Out
                      </Badge>
                      <PriceDisplay
                        currentPrice="299.00"
                        currency="$"
                        size="md"
                        className="!text-white line-through"
                      />
                    </div>
                    <p className="text-gray-300 mb-6">
                      This drop went faster than expected! You missed this one, but don't worry—the next one is coming.
                    </p>
                    <Link to="/notifications">
                      <Button
                        variant="primary"
                        size="lg"
                        className="!rounded-2xl !bg-black !text-white mb-4 flex items-center gap-2 w-full justify-center"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Notify Me for Next Drop
                      </Button>
                    </Link>
                    <p className="text-gray-400 text-sm">
                      Join 4,200+ people waiting for the restock
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gray-800/80 rounded-lg px-6 py-3 text-white font-bold text-xl">
                        Gone!
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 text-6xl font-bold text-white/10">
                      SOLD
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Time to Sell */}
              <Card variant="light" className="!p-6 text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">12 Minutes</div>
                <p className="text-sm text-gray-600">Time it took to sell Everything !!</p>
              </Card>

              {/* Upcoming Drops */}
              <Card variant="dark" className="!p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white mb-1">Upcoming Drops</h2>
                    <p className="text-sm text-gray-400">Don't miss the next one.</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="space-y-4 mb-6">
                  {upcomingDrops.map((drop, index) => (
                    <Link
                      key={index}
                      to={`/product/${index + 1}`}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg" />
                        <div>
                          <p className="text-white font-semibold text-sm">{drop.name}</p>
                          <p className="text-gray-400 text-xs">{drop.time}</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

                <Link to="/app">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full !rounded-2xl !bg-black !text-white"
                  >
                    View Full Drop Calendar
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

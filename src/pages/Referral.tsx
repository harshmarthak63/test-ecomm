import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function Referral() {
  const referralCode = 'FAIDAA2024'
  const milestones = [
    { id: 1, label: 'Invite 3 friends', reward: '1 Free Mystery Drop', completed: true },
    { id: 2, label: 'Invite 10 friends', reward: 'Early Access for 1 Year', completed: false },
  ]

  const leaderboard = [
    { rank: 1, name: 'alex_vault', reward: 'WON IPHONE 15 PRO', invites: 42, highlight: true },
    { rank: 2, name: 'tech_master', reward: 'WON AIRPODS PRO', invites: 38, highlight: false },
    { rank: 3, name: 'drop_king', reward: 'WON MACBOOK AIR', invites: 35, highlight: false },
    { rank: 4, name: 'flash_hunter', reward: 'WON SONY WH-1000XM5', invites: 32, highlight: false },
  ]

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Card */}
              <Card variant="light" className="!p-8 md:!p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Get Free Drops{' '}
                      <span className="text-lime-200">for Life</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                      Invite your inner circle to Faidaa and unlock exclusive flash-drops. Every successful referral brings you closer to legendary status.
                    </p>
                    <Button variant="primary" size="lg" className="!rounded-2xl">
                      Invite Now
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-full h-64 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl" />
                  </div>
                </div>
              </Card>

              {/* Milestone Tracker */}
              <Card variant="light" className="!p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Milestone Tracker</h2>
                    <p className="text-sm text-gray-600">2 of 10 friends joined</p>
                  </div>
                  <Badge variant="default" className="!bg-lime-200 !text-black !px-4 !py-2">
                    20% Complete
                  </Badge>
                </div>

                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            milestone.completed
                              ? 'bg-lime-200 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {milestone.completed ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className={`w-0.5 h-16 ${milestone.completed ? 'bg-lime-200' : 'bg-gray-200'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className="font-semibold text-gray-900">{milestone.label}</h3>
                        <p className="text-sm text-gray-600">Reward: {milestone.reward}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Referral Code */}
              <Card variant="light" className="!p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Referral Code</h2>
                <p className="text-sm text-gray-600 mb-4">Tap to copy and share with your network</p>
                
                <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 mb-6">
                  <span className="font-mono font-bold text-xl text-gray-900">{referralCode}</span>
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Share</h3>
                <div className="grid grid-cols-3 gap-3">
                  {['WHATSAPP', 'TELEGRAM', 'X/TWITTER'].map((platform) => (
                    <button
                      key={platform}
                      className="flex flex-col items-center gap-2 p-3 bg-lime-200 rounded-xl hover:bg-green-400 transition-colors"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                      <span className="text-xs font-semibold text-black">{platform}</span>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Live Leaderboard */}
              <Card variant="light" className="!p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h2 className="text-lg font-bold text-gray-900">Live Leaderboard</h2>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Top Referrers This Week</p>

                <div className="space-y-3 mb-4">
                  {leaderboard.map((entry) => (
                    <div
                      key={entry.rank}
                      className={`p-3 rounded-xl ${
                        entry.highlight ? 'bg-lime-200/20' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gray-900">{entry.rank}</span>
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm truncate">{entry.name}</p>
                          <p className="text-xs text-gray-600 truncate">{entry.reward}</p>
                        </div>
                        <span className="text-xs font-semibold text-gray-600">{entry.invites} Invites</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="secondary" size="md" className="w-full !rounded-2xl">
                  View Full Rankings
                </Button>
              </Card>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

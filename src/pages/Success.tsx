import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { useAppState } from '@/context/AppStateContext'



export default function Success() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { lastOrder, products } = useAppState()
  const orderId = params.get('orderId') ?? lastOrder?.id ?? 'FD-992-04X'
  const product = lastOrder
    ? products.find((p) => p.id === lastOrder.productId)
    : null

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card variant="light" className="!p-8">
                <Badge
                  variant="default"
                  className="!bg-lime-200 !text-black !px-4 !py-2 mb-4 w-fit flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drop Grabbed Successfully
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  You Got It!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  The flash drop was intense, but your reflexes were faster. Your{' '}
                  <strong>{product?.name ?? 'drop item'}</strong> is officially secured.
                </p>

                {/* Order Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Order ID</p>
                    <p className="font-mono font-bold text-gray-900">#{orderId}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                    <p className="font-bold text-gray-900 mb-2">2-3 Working Days</p>
                    <div className="flex gap-2">
                      <Badge variant="category" className="!px-2 !py-1 text-xs">Shiprocket</Badge>
                      <Badge variant="category" className="!px-2 !py-1 text-xs">Express Shipping</Badge>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1 !rounded-2xl !bg-black !text-white flex items-center justify-center gap-2"
                    onClick={()=>navigate("/referral")}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Your Win
                  </Button>
                  <Link to="/orders/FD-992-04X" className="flex-1">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full !rounded-2xl"
                    >
                      Track Order
                    </Button>
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">+14k</span> Join 14,000+ others who grabbed this drop
                  </p>
                </div>
              </Card>

              {/* Drop Details */}
              <Card variant="dark" className="!bg-blue-600 !text-white !p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Flash Price</span>
                    <span className="text-xl font-bold">
                      {lastOrder
                        ? `${lastOrder.currency}${lastOrder.total.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : '₹29.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retail Value</span>
                    <span className="text-xl font-bold">₹299.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>You Saved</span>
                    <span className="text-2xl font-bold">₹270.00</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* What's Next */}
              <Card variant="light" className="!p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">What's Next</h2>
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-3 text-white">
                    <p className="font-semibold mb-1">Playstation 5 Pro</p>
                    <p className="text-xs">Starts In <strong>02:45:12</strong></p>
                  </div>
                  <Badge variant="live" className="absolute top-4 left-4 !px-3 !py-1">
                    Next Drop
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Don't miss out! This next drop has 50% fewer units available than your previous win.
                </p>
                <Button variant="secondary" size="md" className="w-full !rounded-2xl flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Set Reminder
                </Button>
              </Card>

              {/* Flash Trivia */}
              <Card variant="green" className="!p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Flash Trivia!</h2>
                <p className="text-sm text-gray-700 mb-4">
                  Did you know? Only 0.4% of users successfully grabbed the Musico in today's drop. You're in the elite group!
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rank #124 globally</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 pt-4 border-t border-gray-300">
                  <span>Variant 6 of 10</span>
                  <span>Confirmed Phase</span>
                </div>
              </Card>

              {/* Need Help */}
              <Card variant="light" className="!p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Our priority support team is ready for any questions regarding your flash drop.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎧</span>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Flash Support</p>
                    <p className="text-xs text-gray-600">Average response: 5 mins</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

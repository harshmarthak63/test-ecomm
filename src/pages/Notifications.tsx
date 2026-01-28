import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function Notifications() {
  const allNotifications = [
    {
      type: 'shipped',
      icon: '🚚',
      title: 'Order Shipped',
      content: 'Order #FD-9921 has been shipped! Great news! Your "Off-White Industrial Belt" is on its way via Shiprocket. You can track your package using the link below.',
      tracking: 'SR12345678',
      time: '2 hours ago',
    },
    {
      type: 'renewal',
      icon: '✓',
      title: 'Membership Renewal Successful',
      content: 'Your Gold Membership has been successfully renewed for another year. Enjoy continued early access to all drops.',
      time: '5 hours ago',
    },
    {
      type: 'delivery',
      icon: '🚚',
      title: 'Package Out for Delivery',
      content: 'Your order #FD-9844 is out for delivery in your city. Please ensure someone is available at the shipping address.',
      time: 'Yesterday',
    },
    {
      type: 'price',
      icon: '🏷️',
      title: 'Price dropped on your wishlist item!',
      content: 'The "Yeezy Boost 350 V2" you were watching has just dropped by 15%. Buy it now before the price changes.',
      time: '2 days ago',
    },
  ] as const

  type FilterKey = 'all' | 'drop' | 'order' | 'account'

  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const notifications = allNotifications.filter((n) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'drop') return n.type === 'price'
    if (activeFilter === 'order') return n.type === 'shipped' || n.type === 'delivery'
    if (activeFilter === 'account') return n.type === 'renewal'
    return true
  })

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600 text-sm mb-6">Stay updated with your drops and orders.</p>

              <nav className="space-y-2">
                {[
                  { label: 'All Notifications', icon: '🖥️', key: 'all' as FilterKey, count: allNotifications.length },
                  { label: 'Drop Alerts', icon: '⚡', key: 'drop' as FilterKey },
                  { label: 'Order Updates', icon: '🚚', key: 'order' as FilterKey },
                  { label: 'Account', icon: '👤', key: 'account' as FilterKey },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${
                      activeFilter === item.key
                        ? 'bg-lime-200/20 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    type="button"
                    onClick={() => setActiveFilter(item.key)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.count && (
                      <Badge variant="default" className="!bg-lime-200 !text-black !px-2 !py-1 text-xs">
                        {item.count}
                      </Badge>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* High-Priority Drop */}
              <Card variant="light" className="!p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📢</span>
                  <h2 className="text-xl font-bold text-gray-900">High-Priority Drops</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl" />
                  <div>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="live" className="!px-3 !py-1">Live Now</Badge>
                      <Badge variant="category" className="!px-3 !py-1">Flash Drop • Member Exclusive</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Air Jordan 1 Retro High "Lucky Green" - Drop Live!
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our quarterly exclusive drop is now live for Gold Members. High demand expected. Sizes 7-13 available until stocks last.
                    </p>
                    <div className="mb-4">
                      <p className="text-xs text-gray-600 mb-1">Closes In</p>
                      <p className="text-3xl font-bold text-gray-900">14:52:03</p>
                    </div>
                    <Button variant="primary" size="md" className="!rounded-2xl">
                      JOIN DROP NOW
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Recent Activity */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                </div>

                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <Card key={index} variant="light" className="!p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white text-xl flex-shrink-0">
                          {notification.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{notification.content}</p>
                          {notification.tracking && (
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-mono text-blue-600">Track: {notification.tracking}</span>
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          )}
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-2 mx-auto">
                    Show older notifications
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

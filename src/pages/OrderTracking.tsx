import { useParams, Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import { useAppState } from '@/context/AppStateContext'

export default function OrderTracking() {
  const { orderId } = useParams()
  const { lastOrder, products } = useAppState()
  const product = lastOrder
    ? products.find((p) => p.id === lastOrder.productId)
    : null

  const steps = [
    { id: 1, label: 'Placed', completed: true },
    { id: 2, label: 'Shipped', completed: true },
    { id: 3, label: 'In Transit', completed: true },
    { id: 4, label: 'Out for Delivery', completed: false },
    { id: 5, label: 'Delivered', completed: false },
  ]

  const activities = [
    { time: 'Oct 25, 2023 • 04:30 PM', title: 'Departed Bengaluru Hub', desc: 'In Transit to Destination Delivery Center', active: true },
    { time: 'Oct 25, 2023 • 10:15 AM', title: 'Arrived at Bengaluru Hub', active: false },
    { time: 'Oct 24, 2023 • 11:20 PM', title: 'Shipped from Warehouse', desc: 'Mumbai FC, Maharashtra', active: false },
    { time: 'Oct 24, 2023 • 08:45 PM', title: 'Order Confirmed', active: false },
  ]

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Breadcrumbs */}
              <nav className="text-sm text-gray-600">
                <Link to="/app" className="hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">My Orders</span>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Order #{orderId}</span>
              </nav>

              <h1 className="text-3xl font-bold text-gray-900">Track Your Order</h1>
              <p className="text-gray-600">Order ID: {orderId} Placed on Oct 24, 2023</p>

              {/* Product Details */}
              <Card variant="light" className="!p-6">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <Badge variant="default" className="!bg-lime-200 !text-black !px-3 !py-1 mb-2 text-xs">
                      Flash Drop Purchase
                    </Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {product?.name ?? 'Drop Product'}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {product ? 'Member exclusive flash-drop' : 'Space Grey • 1TB SSD • 36GB RAM'}
                    </p>
                    {lastOrder && (
                      <>
                        <PriceDisplay
                          currentPrice={lastOrder.total.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          currency={lastOrder.currency}
                          size="lg"
                        />
                        <p className="text-gray-400 line-through text-sm mt-1">
                          MSRP data coming soon
                        </p>
                      </>
                    )}
                    <Badge variant="default" className="!bg-lime-200/20 !text-lime-200 !px-3 !py-1 mt-2 text-xs">
                      Member Savings: $800
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Shipping Status */}
              <Card variant="light" className="!p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Status</h2>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-6">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed
                              ? 'bg-lime-200 text-white'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step.completed ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-xs">{step.id}</span>
                          )}
                        </div>
                        <span className={`text-xs mt-2 ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.label}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 mx-2 ${
                            step.completed ? 'bg-lime-200' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-lime-200/10 border border-lime-200/20 rounded-lg p-4">
                  <p className="text-gray-600 text-sm mb-1">Estimated Delivery</p>
                  <p className="text-lg font-bold text-gray-900">Friday, Oct 27, 2023 by 8:00 PM</p>
                </div>
              </Card>

              {/* Activity Log */}
              <Card variant="light" className="!p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Activity Log</h2>
                <div className="space-y-6">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activity.active ? 'bg-lime-200' : 'bg-gray-300'
                          }`}
                        />
                        {index < activities.length - 1 && (
                          <div className={`w-0.5 h-16 ${activity.active ? 'bg-lime-200' : 'bg-gray-200'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className={`font-semibold ${activity.active ? 'text-gray-900' : 'text-gray-600'}`}>
                          {activity.title}
                        </h3>
                        {activity.desc && (
                          <p className="text-sm text-gray-600 mt-1">{activity.desc}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Courier Partner */}
              <Card variant="light" className="!p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Courier Partner</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    BD
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BlueDart Express</h3>
                    <p className="text-sm text-gray-600">via Shiprocket Premium</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-4">
                  <span className="font-mono font-bold text-gray-900">BD882710394IN</span>
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <Button variant="primary" size="md" className="w-full !rounded-2xl !bg-black !text-white">
                  Track on Carrier Site
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </Card>

              {/* Shipping Address */}
              <Card variant="light" className="!p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900 mb-1">Aditya Verma</p>
                    <p>402, Prestige Shantiniketan, Whitefield Main Rd</p>
                    <p>Bengaluru, Karnataka 560048</p>
                    <p className="mt-2">Ph: +91 98XXX XXXX1</p>
                  </div>
                </div>
              </Card>

              {/* Need Assistance */}
              <Card variant="green" className="!p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Need Assistance?</h2>
                <p className="text-gray-700 text-sm mb-6">
                  Our membership concierge is available 24/7 for flash drop inquiries.
                </p>
                <div className="space-y-3">
                  <Button variant="secondary" size="md" className="w-full !rounded-2xl !bg-black !text-white">
                    Live Chat Support
                  </Button>
                  <Button variant="primary" size="md" className="w-full !rounded-2xl">
                    Call Priority Line
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

import { useParams, useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import IconButton from '@/components/ui/IconButton'
import { useAppState } from '@/context/AppStateContext'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, setCartItem } = useAppState()
  const product = products.find((p) => p.id === id)

  const handleJoinDrop = () => {
    if (!product) return
    setCartItem({ productId: product.id, quantity: 1 })
    navigate('/address/add')
  }

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12 bg-faidaa-light">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* Left Column - Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative">
                <Badge variant="live" className="absolute top-4 left-4 z-10">
                  Live Drop Now
                </Badge>
                <div className="w-full h-[600px] bg-black rounded-[36px] flex items-center justify-center">
                  <div className="w-64 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl" />
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <IconButton size="md" className="!bg-white/80 hover:!bg-white">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </IconButton>
                  <IconButton size="md" className="!bg-white/80 hover:!bg-white">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </IconButton>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl ${
                      i === 4 ? 'bg-gray-200 relative' : 'bg-gray-300'
                    }`}
                  >
                    {i === 4 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 font-bold">+12</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product?.name ?? 'Drop Product'}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience zero latency with our proprietary sound-stage technology. Limited flash drop availability.
                </p>
              </div>

              {/* Countdown / stock */}
              <Card variant="light" className="!p-6 rounded-[28px]">
                <p className="text-sm text-gray-600 mb-2">Drop ends in</p>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  04 Hrs 21 Min 59 Sec
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Stock left</span>
                  <span className="text-red-500 font-bold">14/100</span>
                </div>
              </Card>

              {/* Price Comparison */}
              <Card variant="light" className="!p-6 rounded-[28px] border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Price Comparison</h3>
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-gray-600">Retail Market Price</span>
                  <PriceDisplay
                    currentPrice={(
                      product?.retailPrice ?? product?.price ?? 0
                    ).toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    currency={product?.currency ?? '₹'}
                    size="md"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-800 font-semibold">Faidaa Drop Price</span>
                  <div className="flex items-center gap-2">
                    <PriceDisplay
                      currentPrice={(product?.price ?? 0).toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      currency={product?.currency ?? '₹'}
                      size="lg"
                      className="!text-lime-200"
                    />
                    <Badge
                      variant="default"
                      className="!bg-lime-200 !text-black !px-3 !py-1 text-xs font-semibold"
                    >
                      -60% OFF
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Drop Rules */}
              <Card
                variant="light"
                className="!p-6 rounded-[28px] bg-orange-50 border border-orange-100"
              >
                <h3 className="font-semibold text-gray-900 mb-4">Drop Rules</h3>
                <ul className="space-y-2">
                  {[
                    'Strict 1-unit limit per household/account.',
                    'Orders must be completed within 10 minutes of cart addition.',
                    'Free priority shipping included.',
                  ].map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-orange-800">
                      <span className="mt-0.5 text-orange-500">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card variant="light" className="!p-4 rounded-[28px]">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Fast Delivery</p>
                      <p className="text-xs text-gray-600">Within 24-48 hours</p>
                    </div>
                  </div>
                </Card>
                <Card variant="light" className="!p-4 rounded-[28px]">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Official Warranty</p>
                      <p className="text-xs text-gray-600">2 Year brand warranty</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Engagement */}
              <Card variant="light" className="!p-4 rounded-[28px]">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">4.2k</span> joined Watching this drop
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Sticky Bottom Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
            <PageContainer>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-xl" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Buying {product?.name ?? 'Drop Product'}
                    </p>
                    {product && (
                      <PriceDisplay
                        currentPrice={product.price.toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        currency={product.currency}
                        size="sm"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="!rounded-2xl !bg-black !text-white hover:!bg-gray-900 !px-8 !py-4 flex items-center gap-2"
                    onClick={handleJoinDrop}
                  >
                    JOIN THE DROP
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </Button>
                  <IconButton size="lg" className="!bg-white !border-2 !border-gray-200">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </IconButton>
                </div>
              </div>
            </PageContainer>
          </div>

          <div className="h-24" /> {/* Spacer for sticky bar */}
        </PageContainer>
      </main>
    </PageShell>
  )
}

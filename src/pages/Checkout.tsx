import { Link, useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import { useAppState } from '@/context/AppStateContext'

export default function Checkout() {
  const navigate = useNavigate()
  const { cartItem, products, address, setLastOrder } = useAppState()
  const product = cartItem ? products.find((p) => p.id === cartItem.productId) : null

  const subtotal = product ? product.price * (cartItem?.quantity ?? 1) : 0
  const retail = product?.retailPrice ?? subtotal
  const discount = retail - subtotal

  const handlePay = () => {
    if (!product || !cartItem || !address) {
      // eslint-disable-next-line no-alert
      alert('Missing product or address. Please start from a drop and add your address.')
      return
    }
    const orderId = 'FD-' + Math.random().toString(36).slice(2, 8).toUpperCase()
    setLastOrder({
      id: orderId,
      productId: product.id,
      total: subtotal,
      currency: product.currency,
    })
    navigate(`/success?orderId=${encodeURIComponent(orderId)}`)
  }
  return (
    <PageShell  headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">Flash Drop Checkout</h1>
              
              {/* Countdown */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Limited inventory. Complete your order within</span>
                <div className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold">
                  04:59
                </div>
              </div>

              {/* Deliver To */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Deliver To</h2>
                <Badge variant="default" className="!bg-black !text-white !px-3 !py-1  text-xs  " >
                  Selected
                </Badge>
                <Card variant="light" className="!p-6 border border-black">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {address?.fullName ?? 'Ryman Alex'}
                      </h3>
                      <div className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div>
                          <p>{address?.line1 ?? '4521 Maple Street, Central District'}</p>
                          {address?.line2 && <p>{address.line2}</p>}
                          <p>
                            {address?.cityState ?? 'New York, NY'} {address?.pincode ?? '10001'}
                          </p>
                          <p className="mt-1">{address?.phone ?? '+1 (555) 012-3456'}</p>
                        </div>
                      </div>
                    </div>
                    <Link to="/address/add" className="text-blue-600 text-sm hover:underline">
                      Edit Address
                    </Link>
                  </div>
                </Card>
              </div>

              {/* Payment Method */}
              <div className='border shawdow-md rounded-4xl bg-white'>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 bg-white">Payment Method</h2>
                <Card variant="light" className="!p-6 bg-white">
                  <div className="flex items-center justify-between bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        RZP
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Razorpay Secure</h3>
                        <p className="text-sm text-gray-600">Cards, UPI, Netbanking</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-lime-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Card>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full !rounded-2xl !px-6 !py-4 !bg-black !text-white hover:!bg-gray-800 mt-4 flex items-center justify-between"
                  onClick={handlePay}
                >
                  <span>Pay with Razorpay</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  By clicking above, you agree to our terms of drop. All sales are final for flash releases.
                </p>
              </div>
            </div>

            {/* Right Column - Order Summary */}

            <div className="lg:col-span-1  ">
             <div className='border shawdow-md rounded-2xl bg-white p-6'>
              <h2 className="text-md font-semibold text-gray-300 mb-4 mt-5 ">Order Summary</h2>
              
              <Card variant="light" className="!p-6 mb-6 bg-white">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {product?.name ?? 'Selected Drop'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cartItem ? `Qty ${cartItem.quantity}` : 'Edition 01/100 • Blue'}
                    </p>
                    {product && (
                      <PriceDisplay
                        currentPrice={subtotal.toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        currency={product.currency}
                        size="md"
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Retail Price</span>
                    <span className="text-gray-900">
                      {product
                        ? `${product.currency}${retail.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : '₹699.00'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-lime-200 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Drop Discount</span>
                    <span className="text-gray-900">
                      {product
                        ? `- ${product.currency}${Math.max(
                            0,
                            discount,
                          ).toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : '- ₹200.00'}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Faidaa Price</div>
                  </div>
                  <div className="flex items-center gap-2">
                      {product && (
                        <PriceDisplay
                          currentPrice={subtotal.toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          currency={product.currency}
                          size="lg"
                        />
                      )}
                    <Badge variant="default" className="!bg-lime-200 !text-black !px-2 !py-1 text-xs">
                      Best Deal
                    </Badge>
                  </div>
                </div>
              </Card>
               </div>
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '✓', label: 'Authentic' },
                  { icon: '🛡️', label: 'Secure' },
                  { icon: '🚚', label: 'Priority' },
                ].map((badge, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <div className="text-xs text-gray-600">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '@/context/AppStateContext'

export default function AddAddress() {
  const [addressType, setAddressType] = useState<'home' | 'work'>('home')
  const [isDefault, setIsDefault] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [pincode, setPincode] = useState('')
  const [cityState, setCityState] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [landmark, setLandmark] = useState('')
  const navigate = useNavigate()
  const { setAddress } = useAppState()

  const isFormValid =
    fullName.trim() &&
    phone.trim() &&
    pincode.trim() &&
    cityState.trim() &&
    line1.trim()

  const handleSave = () => {
    // Minimal validation for demo
    if (!isFormValid) {
      // eslint-disable-next-line no-alert
      alert('Please fill the required fields to continue.')
      return
    }

    setAddress({
      fullName,
      phone,
      pincode,
      cityState,
      line1,
      line2,
      landmark,
      type: addressType,
      isDefault,
    })
    navigate('/checkout')
  }

  return (
    <PageShell headerVariant="app">
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="max-w-2xl mx-auto">
            <Card variant="light" className="!p-8 md:!p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Add Delivery Address
              </h1>
              <p className="text-gray-600 mb-8">
                Where should we deliver your drop?
              </p>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="00000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Pincode
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="6-digit Pincode"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <Badge variant="default" className="!bg-lime-200 !text-black !px-4 !py-3 flex items-center">
                      Verified
                    </Badge>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="Bengaluru, Karnataka"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Flat / House No. / Building
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 402, Skyview Tower"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Area / Street / Sector
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Koramangala 4th Block"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Landmark (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Near HDFC Bank"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-200"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>

                {/* Address Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Address Type
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setAddressType('home')}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 transition-colors ${
                        addressType === 'home'
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-white text-gray-700'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-medium">Home</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAddressType('work')}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 transition-colors ${
                        addressType === 'work'
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-white text-gray-700'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Work</span>
                    </button>
                  </div>
                </div>

                {/* Set as Default */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">Set as Default Address</p>
                    <p className="text-sm text-gray-600">Used for future express checkouts</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsDefault(!isDefault)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isDefault ? 'bg-lime-200' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        isDefault ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Save Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full !rounded-2xl !px-6 !py-4 mt-8 flex items-center justify-between disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={!isFormValid}
                onClick={handleSave}
              >
                <span>Save & Continue</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure 256-bit encrypted checkout
              </p>
            </Card>

            <div className="text-center mt-6">
              <Link to="/checkout" className="text-gray-600 hover:text-gray-900 text-sm">
                ← Back to Cart
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

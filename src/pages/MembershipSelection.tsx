import { useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import PriceDisplay from '@/components/ui/PriceDisplay'
import { useAppState } from '@/context/AppStateContext'

export default function MembershipSelection() {
  const navigate = useNavigate()
  const { membershipPlan, setMembershipPlan } = useAppState()

  return (
    <PageShell>
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choose Your Membership
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join our exclusive commerce community. Pay now, activate when you participate in your first drop (valid for 90 days).
              </p>
            </div>

            {/* Membership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Early Access Card */}
              <Card variant="light" className="!p-8 relative border shadow-md">
                <Badge
                  variant="default"
                  className="!bg-gray-200 !text-gray-700 !px-3 !py-1 absolute top-6 right-6 text-xs"
                >
                  Limited Offer
                </Badge>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Early Access</h2>
                
                <div className="mb-6">
                  <PriceDisplay
                    currentPrice="199"
                    originalPrice="499"
                    currency="₹"
                    size="lg"
                  />
                  <span className="text-gray-500 text-lg">/mo</span>
                </div>
                
                <p className="text-lime-600 text-sm font-semibold mb-6">
                  First 10,000 users only.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    { title: '1 Drop per month', desc: 'Access to one exclusive flash drop' },
                    { title: 'Standard Shipping', desc: 'Reliable delivery for every drop' },
                    { title: 'Community Access', desc: 'Join the Faidaa inner circle' },
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-lime-200 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={membershipPlan === 'early-access' ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full !rounded-2xl"
                  onClick={() => setMembershipPlan('early-access')}
                >
                  {membershipPlan === 'early-access' ? 'Selected Starter Tier' : 'Starter Tier'}
                </Button>
              </Card>

              {/* Pro Card */}
              <Card variant="light" className="!p-8 relative border shadow-md">
                <Badge
                  variant="default"
                  className="!bg-lime-200 !text-black !px-3 !py-1 absolute top-6 right-6 text-xs font-semibold"
                >
                  Recommended
                </Badge>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro</h2>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹999</span>
                  <span className="text-gray-500 text-lg">/mo</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    { title: '4 Drops per month', desc: 'Full access to all weekly drops' },
                    { title: 'Priority Early Access', desc: '2-hour window before anyone else' },
                    { title: 'Free Priority Shipping', desc: 'Express delivery on all orders' },
                    { title: 'Zero Markup Pricing', desc: 'Pay what we pay, direct from source' },
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-lime-200 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={membershipPlan === 'pro' ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full !rounded-2xl"
                  onClick={() => setMembershipPlan('pro')}
                >
                  {membershipPlan === 'pro' ? 'Selected Full Access' : 'Full Access'}
                </Button>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-8">
              <Button
                variant="primary"
                size="lg"
                className="!rounded-2xl !px-10 !py-4 flex items-center justify-between mx-auto w-full md:w-auto min-w-[300px]"
                onClick={() => navigate('/app')}
                disabled={!membershipPlan}
              >
                <span>{membershipPlan ? 'Continue to Dashboard' : 'Select a plan to continue'}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <p className="text-gray-500 text-sm mt-4  inline-flex px-3 py-2 flex-col  border shadow-md">
               <span> Pay now, activate when you participate in your first drop</span>
               <span> (valid for 90 days)</span> 
              </p>
            </div>

            {/* Payment Info */}
            <div className="flex flex-col md:flex-row justify-center  gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-grey-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secured by Razorpay</span>
              </div>
              <div className="flex items-center -space-x-1">
                <span className="font-semibold rounded-xl border bg-white px-2 py-1 ">VISA</span>
                <span className="font-semibold rounded-xl border bg-white px-2 py-1">MC</span>
                <span className="font-semibold rounded-xl border bg-white px-2 py-1 ">UPI</span>
                <span className="text-gray-400 px-3">|</span>
                <span>Cancel Anytime</span>
              </div>
            </div>

            <p className="text-center text-xs text-gray-300 mt-6">
              All prices are inclusive of GST. Activation window begins upon first checkout.
            </p>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

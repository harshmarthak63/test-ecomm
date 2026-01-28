import { useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function MembershipActivation() {
  const navigate = useNavigate()

  return (
    <PageShell>
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-center gap-2 mb-16">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-black font-semibold text-xl">faidaa.</span>
              </div>
              <h1 className="text-[48px] leading-[1.1] font-extrabold text-gray-900 mb-6">
                Unlock the <br />
                <span className="text-gray-400">Flash-Drop</span> Era.
              </h1>

              <p className="text-gray-600 text-lg mb-12 flex flex-col mt-6">
                <span>You're one step away from joining the most</span>
                <span> exclusive community in commerce.</span>
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-4  ">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${step === 3
                        ? 'bg-lime-200 text-black'
                        : 'bg-gray-900 text-white'
                        }`}
                    >
                      {step}
                    </div>
                    {/* {step < 3 && (
                      <div className="w-12 h-0.5 bg-gray-300" />
                    )} */}
                  </div>
                ))}
                <span className="text-gray-700 font-medium ml-10">Final Step</span>
              </div>
            </div>

            {/* Right Column - Membership Card */}
            <div className="lg:col-span-3 ">
              <Card
                variant="dark"
                className="!p-10 relative rounded-[36px] bg-gradient-to-br from-[#0B1220] via-[#0E1628] to-[#0B1220] shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
              >

                <Badge
                  variant="default"
                  className="!bg-lime-200 !text-black !px-4 !py-2 absolute top-6 left-6 text-xs font-semibold"
                >
                  Recommended
                </Badge>

                <h2 className="text-3xl font-bold text-white mb-6 mt-8">Pro Member</h2>

                <div className="text-right mb-6 ">
                  <div className="text-3xl font-bold text-white">₹199</div>
                  <div className="text-sm text-gray-400">/mo</div>
                  <div className="text-xs text-gray-500 mt-1">Billed Monthly</div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {[
                    { icon: '⚡', title: 'Exclusive Drop Access', desc: 'Get 2-hour early access to all limited flash drops.' },
                    { icon: '🏷️', title: 'Zero Markup Pricing', desc: 'Pay exactly what we pay. No hidden fees or margins.' },
                    { icon: '🚚', title: 'Free Priority Shipping', desc: 'Standard 2-day delivery on all domestic orders.' },
                    { icon: '🎧', title: 'Concierge Support', desc: '24/7 dedicated support line for all your needs.' },
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-xl">{benefit.icon}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{benefit.title}</div>
                        <div className="text-gray-400 text-xs">{benefit.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full !rounded-2xl !px-6 !py-4 mb-4 flex items-center justify-between"
                  onClick={() => navigate('/membership')}
                >
                  <span>Activate Membership</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-lime-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secured by Razorpay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">VISA</span>
                    <span className="font-semibold">MC</span>
                    <span className="text-gray-500">|</span>
                    <span>Cancel Anytime</span>
                  </div>
                </div>
              </Card>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By clicking "Activate Membership", you agree to Faidaa's Terms of Service and Privacy Policy. You will be charged ₹199 monthly until you cancel in your account settings.
              </p>
            </div>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

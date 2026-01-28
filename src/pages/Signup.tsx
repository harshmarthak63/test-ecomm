import { useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Signup() {
  const navigate = useNavigate()

  const handleGoogleSignup = () => {
    // Navigate directly to membership selection
    navigate('/membership')
  }
  const handleVerifyPhoneSignup = () => {
    // Navigate to phone verification page
    navigate('/verify-phone')
  }
  return (
    <PageShell>
      <main className="w-full py-10 md:py-12  " >
        <PageContainer>
          <div className="max-w-2xl mx-auto  ">
            <div className="flex items-center justify-center mb-14">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-black font-semibold text-xl">
                  faidaa.
                </span>
              </div>
            </div>

            <Card variant="light" className="!p-10 md:!p-12 bg-white border shadow-md">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 text-center">
                <span className="block">Join the</span>
                <span className="block ">Inner Circle</span>
              </h1>
              <p className="text-gray-600 mb-8 text-center">
                Step 1 of 4: Secure your spot.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full !rounded-3xl !px-6 !py-4 flex items-center justify-center gap-3 !bg-white border"
                  onClick={handleGoogleSignup}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full !rounded-3xl !px-6 !py-4 flex items-center justify-center gap-3 "
                  onClick={handleVerifyPhoneSignup}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Continue with Phone Number</span>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}

                  <div className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center border-2 border-white">
                    <span className="text-[10px] font-semibold leading-none">1.2M+</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">

                  <p className="text-sm text-gray-600">
                    Join 1.2M+ members securing tech at cost
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

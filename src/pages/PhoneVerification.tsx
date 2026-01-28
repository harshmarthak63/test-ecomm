import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function PhoneVerification() {
  const [code, setCode] = useState(['4', '8', '', ''])
  const navigate = useNavigate()

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleVerify = () => {
    // Demo behavior: accept whatever is entered and continue
    navigate('/membership/activate')
  }

  return (
    <PageShell>
      <main className="w-full py-10 md:py-12">
        <PageContainer>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-black font-semibold text-xl">faidaa.</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Step 2 of 4</span>

              <div className="flex gap-1">
                {[1, 2, 3, 4].map((step) => {
                  const isCurrent = step === 2
                  const isCompleted = step < 2

                  return (
                    <div
                      key={step}
                      className={`h-1 rounded-full transition-all duration-300 ${isCurrent
                          ? 'w-8 bg-gray-500'
                          : isCompleted
                            ? 'w-5 bg-gray-500'
                            : 'w-5 bg-gray-300'
                        }`}
                    />
                  )
                })}
              </div>
            </div>

          </div>

          <div className="max-w-lg mx-auto ">
            {/* Step indicator */}


            <Card variant="light" className="!p-8 md:!p-10 bg-white border shadow-md">
              {/* Secure Verification Badge */}
              <div className="mb-6">
                <Badge
                  variant="default"
                  className="!bg-gray-100 !text-gray-700 !px-4 !py-2 flex items-center gap-2 w-fit"
                >
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">Secure Verification</span>
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Verify your phone
              </h1>
              <p className="text-gray-600 mb-2">
                We've sent a 4-digit code to <strong>+1 (555) 000-8899</strong>
              </p>
              <Link to="#" className="text-blue-600 text-sm hover:underline">
                Change number
              </Link>

              {/* Code Input Fields */}
              <div className="flex gap-4 my-8">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className={`w-16 h-16 text-center text-2xl font-bold rounded-xl border-2 transition-colors ${index === 2
                      ? 'border-lime-400 bg-lime-50'
                      : digit
                        ? 'border-gray-300 bg-white'
                        : 'border-gray-200 bg-gray-50'
                      } focus:outline-none focus:ring-2 focus:ring-lime-400`}
                  />
                ))}
              </div>

              {/* Verify Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full !rounded-2xl !px-6 !py-4 mb-4 flex items-center justify-between"
                onClick={handleVerify}
              >
                <span>Verify and Continue</span>
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Button>

              {/* Resend Code */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Resend code in <strong className='text-black'>0:45</strong>
                </p>
              </div>
            </Card>

            <div className="flex justify-center gap-10 mt-10 mb-14 text-gray-500">
              {/* Encrypted */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <span className="text-sm">End-to-end Encrypted</span>
              </div>

              {/* Support */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
                    />
                  </svg>

                </div>

                <span className="text-sm">24/7 Support</span>
              </div>
            </div>

          </div>
        </PageContainer>
      </main>
    </PageShell>
  )
}

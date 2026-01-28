import Card from '@/components/ui/Card'

export default function MembershipUnlockedCard() {
  return (
    <Card variant="light" className="mb-6">
      <h3 className="text-xl font-bold mb-4">Membership Unlocked</h3>
      
      <ul className="space-y-3 mb-6">
        {[
          '90% Off Market Price',
          'Pan-India Express Delivery',
          'Authentic Brand Warranty',
        ].map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-black-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <div>
        <p className="text-gray-500 text-sm mb-2">Total Value Dropped</p>
        <p className="text-4xl font-bold text-gray-900">₹4.2 Cr+</p>
      </div>
    </Card>
  )
}

import Card from '@/components/ui/Card'

export default function TestimonialCard() {
  return (
    <Card variant="dark">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0" />
        
        {/* Content */}
        <div className="flex-1">
          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Quote */}
          <p className="text-gray-300 italic mb-3">
            "Got my Sony WH-1000XM5 for just ₹2,499! Unbelievable deal."
          </p>
          
          {/* Author */}
          <p className="text-gray-400 text-sm">Rahul S. — Bengaluru</p>
        </div>
      </div>
    </Card>
  )
}

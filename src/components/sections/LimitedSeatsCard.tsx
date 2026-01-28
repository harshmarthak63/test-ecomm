import Card from '@/components/ui/Card'

export default function LimitedSeatsCard() {
  const remaining = 142
  const total = 1000
  const percentage = ((total - remaining) / total) * 100

  return (
    <Card variant="green">
      <h3 className="text-2xl font-bold mb-4">Limited Seats Left</h3>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

      </div>

      {/* Remaining Text */}
      <p className="text-sm font-medium">
        Only {remaining} membership slots remaining for October.
      </p>
    </Card>
  )
}

import { useNavigate, useParams } from 'react-router-dom'

export default function CheckoutPage() {
  const { dropId } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Checkout for drop {dropId}</h1>
      <ul>
        <li>CTA: Pay with Razorpay (calls /checkout/:dropId/pay).</li>
        <li>
          <button onClick={() => navigate('/app/orders/FD-992-04X?justPaid=1')}>
            View Order
          </button>
        </li>
      </ul>
    </div>
  )
}


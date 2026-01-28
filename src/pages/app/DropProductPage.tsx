import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function DropProductPage() {
  const { dropId } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const returnTo = params.get('returnTo') ?? `/app/checkout/${dropId}`

  return (
    <div>
      <h1>Drop Product Page (drop {dropId})</h1>
      <ul>
        <li>
          <button
            onClick={() =>
              navigate(`/app/addresses/new?returnTo=${encodeURIComponent(returnTo)}`)
            }
          >
            Join Drop (no address yet)
          </button>
        </li>
        <li>
          <button onClick={() => navigate(`/app/checkout/${dropId}`)}>
            Join Drop (with default address)
          </button>
        </li>
      </ul>
    </div>
  )
}


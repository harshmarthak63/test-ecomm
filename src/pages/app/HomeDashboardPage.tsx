import { useNavigate } from 'react-router-dom'

export default function HomeDashboardPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Dashboard</h1>
      <p>Live drop countdown, upcoming drops, membership card, quick access.</p>
      <h2>CTAs</h2>
      <ul>
        <li>
          <button onClick={() => navigate('/app/drops')}>
            View Upcoming Drops
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/app/drops/1')}>
            View Drop #1
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/app/notifications')}>
            Open Notifications
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/app/invite')}>
            Invite Friends
          </button>
        </li>
      </ul>
    </div>
  )
}


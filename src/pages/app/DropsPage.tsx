import { useNavigate } from 'react-router-dom'

export default function DropsPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Drops</h1>
      <p>List of upcoming and live drops.</p>
      <button onClick={() => navigate('/app/drops/1')}>Open Drop #1</button>
    </div>
  )
}


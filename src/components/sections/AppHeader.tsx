import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
export default function AppHeader() {
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState(() => params.get('search') ?? '')

  const applySearch = () => {
    const trimmed = search.trim()
    const next = new URLSearchParams(params)
    if (trimmed) {
      next.set('search', trimmed)
    } else {
      next.delete('search')
    }
    navigate(`/app?${next.toString()}`)
    setParams(next)
  }

  return (
    <header className="w-full ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-4">
        <div className="relative w-full rounded-full 
                flex items-center px-4 sm:px-6 py-3">

          {/* LEFT: Logo */}
          <Link to="/app" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-faidaa-dark">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-black font-semibold text-xl">
              faidaa<span className="text-black/60">.</span>
            </span>
          </Link>

          {/* CENTER: Search (true center) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 border rounded-full bg-white">
            <div className="relative w-[460px]">
              <input
                className="w-full rounded-full bg-gray-100 px-6 py-2.5 text-sm
                   placeholder-gray-400 focus:outline-none
                   focus:ring-2 focus:ring-faidaa-green"
                placeholder="Search rewards, drops..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    applySearch()
                  }
                }}
              />
              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                onClick={applySearch}
                aria-label="Search drops"
              >
                🔍
              </button>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="ml-auto flex items-center gap-3 ">
            <button
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"
              onClick={() => navigate('/notifications')}
            >
              🔔
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 border hover:bg-gray-200"
              onClick={() => navigate('/app')}
            >
              <div className="h-7 w-7 rounded-full bg-gray-300" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs font-semibold text-gray-900">Ryman Alex</span>
                <span className="text-[10px] text-gray-500">Pro Member</span>
              </div>
            </button>
          </div>

        </div>

      </div>
    </header>
  )
}


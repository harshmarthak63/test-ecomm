import { Link } from 'react-router-dom'
import PageContainer from '@/components/layout/PageContainer'
import IconButton from '@/components/ui/IconButton'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            faidaa.com © 2026 Membership-Only Flash Drops
          </p>
          
          {/* Links and Icons */}
          <div className="flex items-center gap-6">
            <Link to="#" className="text-gray-600 hover:text-gray-900 text-sm">Safety & Security</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Drops</Link>
            
            <div className="flex items-center gap-2">
              <IconButton size="sm" className="text-gray-600 hover:text-gray-900" aria-label="Share">
                <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </IconButton>
              
              <Link to="/notifications">
                <IconButton size="sm" className="text-gray-600 hover:text-gray-900" aria-label="Notifications">
                  <svg className="w-5 h-5" fill="currentColor" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}

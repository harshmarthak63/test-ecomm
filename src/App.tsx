import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import PhoneVerification from './pages/PhoneVerification'
import MembershipSelection from './pages/MembershipSelection'
import MembershipActivation from './pages/MembershipActivation'
import Checkout from './pages/Checkout'
import OrderTracking from './pages/OrderTracking'
import AddAddress from './pages/AddAddress'
import Referral from './pages/Referral'
import Notifications from './pages/Notifications'
import Success from './pages/Success'
import DropEnded from './pages/DropEnded'
import ProductDetail from './pages/ProductDetail'
import { useAppState } from './context/AppStateContext'

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { membershipPlan } = useAppState()

  if (!membershipPlan) {
    return <Navigate to="/membership" replace />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pre-signin marketing home */}
        <Route path="/" element={<Landing />} />
        {/* Post-login member dashboard (protected) */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-phone" element={<PhoneVerification />} />
        <Route path="/membership" element={<MembershipSelection />} />
        <Route path="/membership/activate" element={<MembershipActivation />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <ProtectedRoute>
              <OrderTracking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address/add"
          element={
            <ProtectedRoute>
              <AddAddress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/referral"
          element={
            <ProtectedRoute>
              <Referral />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route
          path="/drop-ended"
          element={
            <ProtectedRoute>
              <DropEnded />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

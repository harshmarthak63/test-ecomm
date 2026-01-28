import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

export type MembershipPlan = 'early-access' | 'pro' | null

export interface Product {
  id: string
  name: string
  category: 'GAMING' | 'AUDIO' | 'LAPTOP' | 'ACCESSORY'
  price: number
  retailPrice?: number
  currency: '₹' | '$'
  isLiveDrop?: boolean
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface Address {
  fullName: string
  phone: string
  pincode: string
  cityState: string
  line1: string
  line2: string
  landmark?: string
  type: 'home' | 'work'
  isDefault: boolean
}

export interface OrderSummary {
  id: string
  productId: string
  total: number
  currency: '₹' | '$'
}

interface AppState {
  membershipPlan: MembershipPlan
  setMembershipPlan: (plan: MembershipPlan) => void

  hasVerifiedPhone: boolean
  setHasVerifiedPhone: (value: boolean) => void

  products: Product[]

  cartItem: CartItem | null
  setCartItem: (item: CartItem | null) => void

  address: Address | null
  setAddress: (address: Address | null) => void

  lastOrder: OrderSummary | null
  setLastOrder: (order: OrderSummary | null) => void
}

const AppStateContext = createContext<AppState | undefined>(undefined)

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vision VR Headset Pro',
    category: 'GAMING',
    price: 2499,
    retailPrice: 2999,
    currency: '$',
    isLiveDrop: false,
  },
  {
    id: '2',
    name: 'Sequoia Musico Gen 4 Wireless',
    category: 'AUDIO',
    price: 75000,
    retailPrice: 129499,
    currency: '₹',
    isLiveDrop: true,
  },
  {
    id: '3',
    name: 'MacBook Pro M3 Max',
    category: 'LAPTOP',
    price: 3199,
    retailPrice: 3999,
    currency: '$',
    isLiveDrop: false,
  },
  {
    id: '4',
    name: 'Gen-X Bud Earbuds',
    category: 'AUDIO',
    price: 199,
    retailPrice: 249,
    currency: '$',
    isLiveDrop: false,
  },
]

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [membershipPlan, setMembershipPlan] = useState<MembershipPlan>(null)
  const [hasVerifiedPhone, setHasVerifiedPhone] = useState(false)
  const [cartItem, setCartItem] = useState<CartItem | null>(null)
  const [address, setAddress] = useState<Address | null>(null)
  const [lastOrder, setLastOrder] = useState<OrderSummary | null>(null)

  const value: AppState = useMemo(
    () => ({
      membershipPlan,
      setMembershipPlan,
      hasVerifiedPhone,
      setHasVerifiedPhone,
      products: INITIAL_PRODUCTS,
      cartItem,
      setCartItem,
      address,
      setAddress,
      lastOrder,
      setLastOrder,
    }),
    [membershipPlan, cartItem, address, lastOrder],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (!ctx) {
    throw new Error('useAppState must be used within AppStateProvider')
  }
  return ctx
}



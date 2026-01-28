import { Link, useSearchParams } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import PageContainer from '@/components/layout/PageContainer'
import { useAppState } from '@/context/AppStateContext'
import Button from '@/components/ui/Button'

export default function UpcomingDropsGrid() {
  const { products } = useAppState()
  const [params, setParams] = useSearchParams()
  const [categoryFilter, setCategoryFilter] = useState<
    'ALL' | 'GAMING' | 'AUDIO' | 'LAPTOP' | 'ACCESSORY'
  >('ALL')

  const searchTerm = params.get('search')?.toLowerCase() ?? ''

  useEffect(() => {
    const cat = params.get('category')
    if (cat === 'GAMING' || cat === 'AUDIO' || cat === 'LAPTOP' || cat === 'ACCESSORY') {
      setCategoryFilter(cat)
    } else {
      setCategoryFilter('ALL')
    }
  }, [params])

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const categoryMatches = categoryFilter === 'ALL' ? true : p.category === categoryFilter
        const searchMatches = searchTerm
          ? p.name.toLowerCase().includes(searchTerm)
          : true
        return categoryMatches && searchMatches
      }),
    [products, categoryFilter, searchTerm],
  )

  const handleCategoryClick = (
    cat: 'ALL' | 'GAMING' | 'AUDIO' | 'LAPTOP' | 'ACCESSORY',
  ) => {
    setCategoryFilter(cat)
    const next = new URLSearchParams(params)
    if (cat === 'ALL') {
      next.delete('category')
    } else {
      next.set('category', cat)
    }
    setParams(next)
  }

  const clearFilters = () => {
    const next = new URLSearchParams(params)
    next.delete('category')
    next.delete('search')
    setParams(next)
    setCategoryFilter('ALL')
  }

  return (
    <section className="w-full py-10 md:py-12 bg-faidaa-light">
      <PageContainer>
        {/* Section Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Upcoming Drops
          </h2>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-gray-600 text-sm">
              Filter by category or search from the top bar.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {['ALL', 'GAMING', 'AUDIO', 'LAPTOP', 'ACCESSORY'].map((cat) => (
                <Button
                  key={cat}
                  variant={categoryFilter === cat ? 'primary' : 'secondary'}
                  size="sm"
                  className="!rounded-full text-xs"
                  onClick={() =>
                    handleCategoryClick(cat as typeof categoryFilter)
                  }
                >
                  {cat === 'ALL' ? 'All' : cat}
                </Button>
              ))}
              {(categoryFilter !== 'ALL' || searchTerm) && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="!rounded-full text-xs"
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {filtered.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard
                productName={product.name}
                price={product.price.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                currency={product.currency}
                category={product.category}
                countdown={product.isLiveDrop ? 'LIVE NOW' : '23:59:59'}
              />
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

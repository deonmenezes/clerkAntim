import ProductCard from '@/components/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'
import { generateBreadcrumbJsonLd } from '@/lib/utils/seo'
import Script from 'next/script'

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)
  
  // Generate breadcrumb data for JSON-LD
  const breadcrumbItems = [
    { name: 'Home', url: 'https://smoothtradings.com' },
    { name: 'Search', url: 'https://smoothtradings.com/search' },
    { name: `Results for "${decodedQuery}"`, url: `https://smoothtradings.com/search/${params.query}` }
  ]
  
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems)

  return (
    <div className='px-10 py-5'>
      {/* Add JSON-LD structured data */}
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      
      <h1 className='text-heading3-bold my-10'>Search results for {decodedQuery}</h1>
      {(!searchedProducts || searchedProducts.length === 0) && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage
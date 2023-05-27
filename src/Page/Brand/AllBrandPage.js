import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer' // Importing the BrandContainer component
import Pagination from '../../Components/Uitily/Pagination' // Importing the Pagination component
import AllBrandHook from '../../hook/brand/all-brand-page-hook' // Importing the custom hook AllBrandHook

const AllBrand = () => {
    const [brand, loading, pageCount, getPage] = AllBrandHook(); // Using the AllBrandHook custom hook to fetch brand data and pagination information

    return (
        <div style={{ minHeight: '670px' }}>
            {/* Rendering the BrandContainer component and passing the brand data and loading state */}
            <BrandContainer data={brand.data} loading={loading} />
            
            {/* Rendering the Pagination component and passing the pageCount and getPage function */}
            <Pagination pageCount={pageCount} onPress={getPage} />
        </div>
    )
}

export default AllBrand // Exporting the AllBrand component as the default export


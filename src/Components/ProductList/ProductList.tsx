import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts, Product } from '../../Services/ProductService'
import ProductBox from '../Product/ProductBox'

export default function ProductList() {
    const [products, setProducts] = useState<Array<Product>>([])
    useEffect(()=>{
        getProducts().then(productResult => setProducts(productResult))

    },[]);
    
    if (products.length === 0) return <div>Loading products...</div>
        
    return (
        <div className='product-list'>
        {
            products.map(product=><ProductBox product={product} /> )
        }    
        </div>
    )
}

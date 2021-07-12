import React, { useEffect, useState, useReducer } from 'react'
import { useQuery } from 'react-query'
import { getProducts, Product } from '../../Services/ProductService'
import ProductBox from '../Product/ProductBox'
import './ProductList.css';

export default function ProductList() {
    enum ActionTypes {
        SET,
        ADD,
        DELETE
    }
    interface Action {
        type:ActionTypes,
        products:Array<Product>
    }
    const productReducer = (currentProducts: Array<Product>, action:Action) => {
        switch (action.type) {
            case ActionTypes.SET:
                return action.products;
            case ActionTypes.ADD:
                return [...currentProducts, ...action.products];
            case ActionTypes.DELETE: {
                const productIdsToDelete = action.products.map(product=>product.id);
                return currentProducts.filter(product => !productIdsToDelete.includes(product.id));
            }
            default:
                throw new Error ('Invalid opration!')
                break;
        }
    }

    //const [products, setProducts] = useState<Array<Product>>([])
    const [products, dispatch] = useReducer(productReducer, [])
    useEffect(()=>{
        getProducts().then(productResult => dispatch({products:productResult, type:ActionTypes.SET}))

    },[]);

    const removeProduct = (products:Array<Product>) => {
        dispatch({type:ActionTypes.DELETE, products});
    }

    if (products.length === 0) return <div>Loading products...</div>;
        
    return (
        <div className='product-list'>
        {
            products.map(product=><ProductBox key={product.id} product={product} removeProduct={removeProduct}/> )
        }    
        </div>
    )
}

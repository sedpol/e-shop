import React from 'react'
import Product from '../../Components/Product/Product'

export default function LandingPage() {
    const colors = [
        {name:'rose', hexCode:'#F33A6A'},
        {name:'pastel green', hexCode:'#C1E1C1'},
        {name:'amber', hexCode:'#FFBF00'},
        {name:'bright blue', hexCode:'#0096FF'}
    ]
    return (
        <div>
            <Product availableColors={colors}></Product>
        </div>
    )
}

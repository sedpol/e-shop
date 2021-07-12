import React,{useState} from 'react';
import { Product } from '../../Services/ProductService';
import  './ProductBox.css';


export default function ProductBox(props:{product:Product, removeProduct:Function}) {
    const [borderColor, setBorderColor] = useState(props.product.availableColors[0].hexCode)
    const changeBorderColor =(event:React.MouseEvent<HTMLButtonElement, MouseEvent>, color:string)=>{
        setBorderColor(color)
    }
    const borderStyle ={border: `2px solid ${borderColor}`}
    return (
        <div className='product-container' >
            <span style={{cursor: 'pointer', color:'darkgrey', alignSelf:'flex-end'}} onClick={()=>{props.removeProduct([props.product])}}>✕</span>
            <strong className='product-title'>{props.product.title}</strong>
            <img style={borderStyle} className='product-img' src={props.product.imgUri} alt="product" />
            <div className='color-button-group'>
                {
                    props.product.availableColors.map(color=>
                        <button key={color.hexCode} className='product-color-button' style={{background:color.hexCode}}onClick={(event)=>changeBorderColor(event, color.hexCode)}></button>
                    )
                }
            </div>
        </div>
    )
}

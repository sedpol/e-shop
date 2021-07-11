import React,{useState} from 'react';
import { Product } from '../../Services/ProductService';
import  './ProductBox.css';


export default function ProductBox(props:{product:Product}) {
    const [borderColor, setBorderColor] = useState(props.product.availableColors[0].hexCode)
    const changeBorderColor =(event:React.MouseEvent<HTMLButtonElement, MouseEvent>, color:string)=>{
        setBorderColor(color)
    }
    const borderStyle ={border: `2px solid ${borderColor}`}
    return (
        <div className='product-container'>
            <div style={borderStyle}>
            <img src="../logo" alt="product" />

            </div>
            <div className='color-button-group'>
                {
                    props.product.availableColors.map(color=>
                        <button key={color.hexCode} onClick={(event)=>changeBorderColor(event, color.hexCode)}>{color.name}</button>
                    )
                }
            </div>
        </div>
    )
}

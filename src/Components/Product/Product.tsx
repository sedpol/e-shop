import React,{useState} from 'react'

export interface color {
    name:string
    hexCode:string
}
export default function Product(props:{availableColors:Array<color>}) {
    const [borderColor, setBorderColor] = useState(props.availableColors[0].hexCode)
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
                    props.availableColors.map(color=>
                        <button key={color.hexCode} onClick={(event)=>changeBorderColor(event, color.hexCode)}>{color.name}</button>
                    )
                }
            </div>
        </div>
    )
}

import { color } from "../Components/Product/Product";

interface Product {
    title:string
    imgUri:string
    inStock:boolean
    availableItemCount:number
    availableColors:Array<color>
}
export const getProducts = async():Promise<Array<Product>> =>{
    return [
            {
                title:'Extraorinary t-shirt',
                imgUri:'../src/img/etshirt.jpg',
                inStock:true,
                availableItemCount:3,
                availableColors:[
                    {name:'rose' ,  hexCode:'#F33A6A'}
                ]
            }
        ];
}
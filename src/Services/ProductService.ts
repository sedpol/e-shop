enum Size {
    XS,
    S,
    M,
    L,
    XL
}
interface color {
    name:string
    hexCode:string
}

export interface Product {
    title:string
    imgUri:string
    inStock:boolean
    availableItemCount:number
    availableSize:Array<Size>
    availableColors:Array<color>
}
export const getProducts = async():Promise<Array<Product>> =>{
    await new Promise(resolve => setTimeout(resolve, 350 + Math.random()*350));   
    return [
            {
                title:'Extraorinary t-shirt',
                imgUri:'../src/img/etshirt.jpg',
                inStock:true,
                availableItemCount:3,
                availableSize:[Size.XS, Size.S, Size.M, Size.XL],
                availableColors:[
                    {name:'rose' ,  hexCode:'#F33A6A'},
                    {name:'pastel green', hexCode:'#C1E1C1'},
                    {name:'amber', hexCode:'#FFBF00'},
                    {name:'bright blue', hexCode:'#0096FF'}
                ]
            },
            {
                title:'Common t-shirt',
                imgUri:'../src/img/etshirt.jpg',
                inStock:true,
                availableItemCount:120,
                availableSize:[Size.XS, Size.S, Size.M, Size.L, Size.XL],
                availableColors:[
                    {name:'rose' ,  hexCode:'#F33A6A'},
                    {name:'pastel green', hexCode:'#C1E1C1'},
                    {name:'amber', hexCode:'#FFBF00'},
                    {name:'bright blue', hexCode:'#0096FF'}
                ]
            },
            {
                title:'Rare Short',
                imgUri:'../src/img/etshirt.jpg',
                inStock:true,
                availableItemCount:1,
                availableSize:[Size.S],
                availableColors:[
                    {name:'pastel green', hexCode:'#C1E1C1'}
                ]
            },
            {
                title:'Rare shirt',
                imgUri:'../src/img/etshirt.jpg',
                inStock:false,
                availableItemCount:0,
                availableSize:[],
                availableColors:[
                    {name:'pastel green', hexCode:'#C1E1C1'},
                    {name:'amber', hexCode:'#FFBF00'},
                    {name:'bright blue', hexCode:'#0096FF'}
                ]
            }
        ];
}
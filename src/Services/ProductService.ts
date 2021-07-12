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
    id:string
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
                id:'1aasd231',
                title:'Extraorinary t-shirt',
                imgUri:'https://img.shopstyle-cdn.com/sim/14/8a/148a47a126fcb85b5bc9994087dd400f_best/imogen-boy-t-shirt.jpg',
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
                id:'1a009d231',
                title:'Rare Short',
                imgUri:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNvWkaB3lXk5HieTmmLLfoT10V5Jbf2cpr-rthfa36JzjUrJwDqbmsFbGQhw&usqp=CAE',
                inStock:true,
                availableItemCount:1,
                availableSize:[Size.S],
                availableColors:[
                    {name:'pastel green', hexCode:'#C1E1C1'}
                ]
            },
            {
                id:'89a7sd9',
                title:'Common t-shirt',
                imgUri:'https://cdn.shopify.com/s/files/1/1031/5803/products/TRESSATOP2_1024x1024.jpg?v=1600877298',
                inStock:true,
                availableItemCount:120,
                availableSize:[Size.XS, Size.S, Size.M, Size.L, Size.XL],
                availableColors:[
                    {name:'amber', hexCode:'#FFBF00'},
                    {name:'rose' ,  hexCode:'#F33A6A'},
                    {name:'pastel green', hexCode:'#C1E1C1'},
                    {name:'bright blue', hexCode:'#0096FF'}
                ]
            },
            {
                id:'sdas876',
                title:'Spring shirt',
                imgUri:'https://cdn.shopify.com/s/files/1/0274/0086/3853/products/GSFSSHRT1643LGRN_1_1024x1024.jpg',
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
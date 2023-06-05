class ProductManager{
    constructor() {
        this.products = [];
    }



getProducts() {
    const misProductos = this.products.map((product) => {return product;});
    return misProductos;
}

getNextID = () => {
    const count = this.products.length
    
    if (count > 0) {

        
        return this.products[count - 1].id + 1
    } else {
        return 1
    }
}
addProducts = (title, description, price,thumbnail,code,stock) => {
    const codigoUsado = this.products.some((product)=> product.code === code);
    const campoVacio = this.products.values((product)=> product.title === "" || product.description === "" || product.price === "" || product.thumbnail ==="" || product.code === "" || product.stock === "");
    if(campoVacio) {
        console.log("Por Favor complete todos los campos")
    }
    else if (codigoUsado){
        console.log(`el producto ${title} ya existe, revise su codigo`)
    }
    else{
        const productID = this.getNextID();
        const product = { id:productID, title, description, price,thumbnail,code,stock }
        this.products.push(product)  
    }
    
}
getProductsByID(id) {
    for(const productID of this.products ){
        if(productID.id == id){return productID}
        else{return console.log("not found")}
    }
}
}

const productos = new ProductManager()
productos.addProducts("zapatilla", "nike air", 150, "No thumbnail","a515", 15) 
productos.addProducts("nike air", 150, "No thumbnail","a515", ) 
productos.addProducts("remera","Camiseta Barcelona", 100,"No thumbnail","b45",30)
productos.addProducts("gorra","red bull team", 20,"No thumbnail","c12", 10)
productos.addProducts("pantalon", "sport", 70, "No thumbnail", "c12", 50)


console.log("Traer array de productos:    ", productos.getProducts()) 
console.log("-----------------------------------------------------")
console.log(productos.getProductsByID(1))
console.log("-----------------------------------------------------")
console.log(productos.getProductsByID(4))




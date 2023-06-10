const fs = require('fs')

class ProductManager{
    constructor(path) {
        this.path = path
        this.format = 'utf-8'
        
}
    
getNextID = async () => {
    const data = await this.getProduct()
    const count = await data.length
    
    if (count > 0) {

        
        return data[count - 1].id + 1
    } else {
        return 1
    }
    
}

addProducts = async (title, description, price, thumbnail, code, stock) => {
                const productID = await this.getNextID();
                const products = {id:productID, title, description, price, thumbnail, code, stock}
                const list = await this.getProduct()
                list.push(products)
                await fs.promises.writeFile(this.path, JSON.stringify(list))
}

getProduct = async () => {
    try {
        const data = await fs.promises.readFile(this.path, this.format)
        const dataObj = JSON.parse(data)
        return dataObj
    } catch (error) {
        console.log('No se encontro el archivo, se devuelve vacio')
        return []
    }
    }
   
}
async function run() {
    const product = new ProductManager('productos.json')
    await product.addProducts('zapatilla', 'adidas pro max', 150, 'no thumbnail', 'b314', ' 13')
    await product.addProducts('pantalon', 'nike barcelona', 50, 'no thumbnail', 'p304', ' 10')
    await product.addProducts('campera', 'puma redBullRacing', 30, 'no thumbnail', 'c704', ' 15')
    console.log(await product.getProduct())
}

run()

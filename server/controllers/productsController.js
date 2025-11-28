import { getDBConnection } from '../db/db.js'

const productsController = async (req, res) => {
  
    console.log('Query params:', req.query);
    
    try {
        const db = await getDBConnection()

        const { type, condition } = req.query;
        
        console.log('Type:', type);
        console.log('Condition:', condition);

        if(type || condition){
            const filtering = await db.get(
                `
                SELECT * FROM products WHERE type = ? AND condition = ?
                `
            , [type, condition])
            console.log(filtering)

        } else if (type){
            const filtering = await db.get(
                `SELECT * FROM products WHERE type = ?`,[type]
            , [type])
            console.log(filtering)

        } else if (condition){
            const filtering = await db.get(
                `SELECT * FROM products WHERE condition = ?`,[condition]
            , [condition])
            console.log(filtering)
        } else {
            const products = await db.all('SELECT * FROM products');

      
          const parsedProducts = products.map((product) => ({
            ...product,
            specs: JSON.parse(product.specs),
            secondarySpecs: JSON.parse(product.secondarySpecs),
            images: JSON.parse(product.images)
        }));

        await db.close();
        res.json(parsedProducts);

        }

        
        
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: error.message });
    }
};


export default productsController
import { getDBConnection } from '../db/db.js'

const productsController = async (req, res) => {
  
    
    
    try {
        const db = await getDBConnection()

        const { type, condition } = req.query;
        console.log(type,condition)
        
        console.log('Type:', type);
        console.log('Condition:', condition);

        if(type && condition){
            const filtering = await db.all(
                `
SELECT * FROM products WHERE LOWER(type) = LOWER(?) AND LOWER(condition) = LOWER(?)                `
            , [type, condition])
            console.log(filtering)

            const parsedFiltering = filtering.map((product) => {
                return {
                    ...product,
                    specs:JSON.parse(product.specs),
                    secondarySpecs:JSON.parse(product.secondarySpecs),
                    images:JSON.parse(product.images)
                }
            })
            


            return res.status(200).json(parsedFiltering)

        } else if (type){

            const filtering = await db.all(
                `SELECT * FROM products WHERE type = ?`,
                [type]
            )

            const parsedFiltering = filtering.map((product)=> {
                return {

                    ...product,
                    specs:JSON.parse(product.specs),
                    secondarySpecs:JSON.parse(product.secondarySpecs),
                    images:JSON.parse(product.images)
                }
            })
            console.log('type results:', parsedFiltering)

            return res.status(200).json(parsedFiltering)

        } else if (condition){
            const filtering = await db.all(
                `SELECT * FROM products WHERE LOWER(condition) = LOWER(?)`,
                [condition]
            )

                const parsedFiltering = filtering.map((product)=> {
                return {
                    ...product,
                    specs:JSON.parse(product.specs),
                    secondarySpecs:JSON.parse(product.secondarySpecs),
                    images:JSON.parse(product.images)
                }
            })
            console.log('condition results:', parsedFiltering)

            return res.status(200).json(parsedFiltering)

        } else {


        const products = await db.all('SELECT * FROM products');

          const parsedProducts = products.map((product) => ({
            ...product,
            specs: JSON.parse(product.specs),
            secondarySpecs: JSON.parse(product.secondarySpecs),
            images: JSON.parse(product.images)
        }));
        return res.status(200).json(parsedProducts);

        await db.close();
        

        }

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: error.message });
    }
};


export default productsController
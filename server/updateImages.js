import { getDBConnection } from './db/db.js';

async function updateImages() {
    const db = await getDBConnection();

    const newImages = [
        'https://ik.imagekit.io/irpk6rtbq/LaptopImages/Refurb%20Dell%2016%20Laptop%20FrontView.avif?updatedAt=1752217874987',
        'https://ik.imagekit.io/irpk6rtbq/LaptopImages/Dell%2016%20diagonal%20left%20Desktop.png',
        'https://ik.imagekit.io/irpk6rtbq/LaptopImages/dell%2016%20top%20view%20Desktop.png',
        'https://ik.imagekit.io/irpk6rtbq/LaptopImages/dell%2016%20diagonal%20Right%20Desktop.png'
    ];

    try {
       
        const product = await db.get('SELECT * FROM products WHERE name = ?', ['Dell 16']);
        
        if (!product) {
            console.log('Dell 16 product not found');
            return;
        }

        console.log('Current product:', product);
        console.log('Current images:', JSON.parse(product.images));

       
        await db.run(
            'UPDATE products SET images = ? WHERE name = ?',
            [JSON.stringify(newImages), 'Dell 16']
        );

        const updatedProduct = await db.get('SELECT * FROM products WHERE name = ?', ['Dell 16']);
        console.log('Updated images:', JSON.parse(updatedProduct.images));
        console.log('Dell 16 images updated successfully!');

    } catch (error) {
        console.error('Error updating images:', error);
    } finally {
        await db.close();
    }
}

updateImages();

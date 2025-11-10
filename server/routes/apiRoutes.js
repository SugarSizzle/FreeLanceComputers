import express from 'express';

import { servicesController } from '../controllers/servicesControll.js';
import { productsController } from '../controllers/productsController.js';

const apiRouter = express.Router();

apiRouter.get('/services', servicesController);
apiRouter.get('/products', productsController);

export default apiRouter;
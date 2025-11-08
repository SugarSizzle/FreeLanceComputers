import express from 'express';

import { servicesController } from '../controllers/servicesControll';
import { productsController } from '../controllers/productsController';

const apiRouter = express.Router();

apiRouter.get('/services', servicesController);
apiRouter.get('/products', productsController);
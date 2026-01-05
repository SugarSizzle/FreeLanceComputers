import express from 'express';

import { createServiceRequest } from '../controllers/createServiceRequestController.js';
import productsController from '../controllers/productsController.js';

const apiRouter = express.Router();

apiRouter.post('/services', createServiceRequest);
apiRouter.get('/products', productsController);


export default apiRouter;
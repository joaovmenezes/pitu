import {Router} from 'express';
import linksController from '../controllers/links';

// Creation of a new route
const router = Router();

// Configuration of the 3 routes
// Using http verbs get (get data from server) and post (send data from frontend to server)
// req - requisition , res - response
router.post('/links', linksController.postLink);

// The code of the short url (:code)
router.get('/links/:code', linksController.hitLink);

// Acces stats from given link
router.get('/links/:code/stats', linksController.getLink);

// Export the routes (via the router object created at the beginning)
export default router

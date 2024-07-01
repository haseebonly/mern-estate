import express from 'express';
import { test } from '../controllers/user.controllers.js';
import { updateUser } from '../controllers/user.controllers.js';
import { deleteUser } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';
// Create a router instance
const router = express.Router();

// Define routes
router.get('/test',test);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)


// Export the router instance
export default router;
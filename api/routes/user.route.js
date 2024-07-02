import express from 'express';
import { test,updateUser,deleteUser,getUserListings, getUser } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';
// Create a router instance
const router = express.Router();

// Define routes
router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)


// Export the router instance
export default router;
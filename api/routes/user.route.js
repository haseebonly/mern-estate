import express from 'express';
import { test } from '../controllers/user.controllers.js';

// Create a router instance
const router = express.Router();

// Define routes
router.get('/test',test);

// Export the router instance
export default router;
import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

// Root route to handle "/"
router.get('/', (req, res) => {
  res.send('Welcome to the file sharing app backend!');
});

// Upload and get image routes
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

// Handle 404 for undefined routes
router.use((req, res) => {
  res.status(404).send('Route not found');
});

export default router;

// Backend development library express
import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

// Function that creates a new express application
const app = express();
// Our app will need to interpret json
app.use(express.json());

// Utilizing cors (allows frontend - port 3000 - to communicate with backend - port 3001 - )
app.use(cors());

// Configuration of 3 routes
// 1) creation of new short url
// 2) return long url and count access
// 3) statistics of short url usage
app.use(linksRouter);

// Export the application
export default app;

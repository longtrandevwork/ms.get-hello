
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { rootController } from './src/controller/root.js';
import { authMiddleware } from './src/middleware/auth.js';

const app = express();
const port = 5037;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authMiddleware)

rootController(app)

app.listen(port, () => {
    console.log(`Our server is live on ${port}. Yay!`);
});

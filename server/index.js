import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { getConnection } from './config/mongodb.config.js'
import userRoute from './routes/userRoute.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
await getConnection();

app.use(express.json());
app.use(cors());

app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
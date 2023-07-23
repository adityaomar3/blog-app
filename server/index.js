import express from 'express';
// import connection from './database/db.js'
import Connection from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';

// var cors = require('cors')

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)

const PORT = 8000;

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD
Connection(USERNAME,PASSWORD)
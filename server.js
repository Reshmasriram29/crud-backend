const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();
const Route=require('./route/userRoutes');
const bodyParser = require('body-parser');

dotenv.config();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',Route);
app.use(express.json());



//db config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL).then(
    () => console.log("DB connected"),
    err => console.log("Error"+ err),
)

app.listen(3000, () =>
    console.log("server started"))
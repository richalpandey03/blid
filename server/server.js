const express = require('express');
const routes = require("./routes")
const cors = require('cors');

const app = express();

require('dotenv').config();
app.use(cors());
app.use('/', routes());

app.listen(process.env.PORT, ()=>{
    console.log("Server is up and running")
})

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();


// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds245218.mlab.com:45218/productstutorial';
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// var dbConfig = {
//     user:"sa",
//     password:"sa",
//     server:"localhost\\HARISHA",
//     driver: 'msnodesql',
//     database:"users",
//     port: 1433
// }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
})
app.use('/products', product);
let port = 8088;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
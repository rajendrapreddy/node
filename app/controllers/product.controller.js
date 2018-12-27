const Product = require('../models/product.model');
var sql = require('mssql');
var dbConfig = {
    user:"",
    password:"",
    server:"\\HARISH",
    driver: 'msnodesql',
    database:"users",
    port: 1433
}
// exports.product_create = function (req, res) {
//     let product = new Product(
//         {
//             name: req.body.name,
//             price: req.body.price
//         }
//     );
//     product.save(function (err) {
//         if (err) {
//             return next(err);

//         }
//         res.send('Product Created successfully')
//     })
// };
// exports.product_details = function(req,res){
//     Product.findById(req.params.id, function(err,product){
//         if(err)
//         return next(err);
//         res.send(product);
//     });
// };
// exports.product_update = function(req,res){
//     Product.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,product){
//         if(err)
//         return next(err);
//         res.send("product updated");
//     });
// };
// exports.Product_byname = function(req,res){
//     console.log(req.params.name);
//     Product.deleteOne(req.params.name,function(err){
//         if(err) throw(err);
//         res.send("deleted");
//     });
// };
// exports.product_delete = function(req,res){
//     Product.findByIdAndRemove(req.params.id, function(err){
//         if(err)
//         return next(err);
//         res.send("product Deleted");
//     });  
// };
exports.test = function(req,res){
    console.log("test");
    var query = "select * from [users]";
    executeQuery (res, query);
// res.send('greetings from controller');
}

var  executeQuery = function(res, query){
    sql.connect(dbConfig, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                     console.log("connecton is success");
                        // create Request object
                        var request = new sql.Request();
                        // query to the database
                        request.query(query, function (err, recordset) {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                     res.send(err);
                                    }
                                    else {
                                        console.log("DB connecton is success:",JSON.stringify(recordset));
                                      res.send(recordset);
                                           }
                                           sql.close();
                              });
                              
                      }
     });          
    }
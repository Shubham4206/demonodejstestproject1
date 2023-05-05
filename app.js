const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const sequelize=require('./connection/database');
const Count=require('./model/count.js');
const ejs=require('ejs');
const router=require('./route/routeadmin.js')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.set('view engine','ejs');
app.use(router);





sequelize.sync();
app.listen(3000);
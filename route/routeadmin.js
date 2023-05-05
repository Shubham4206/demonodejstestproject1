const express=require('express');

const router=express.Router();

const controller=require('../controller/admin.js')

router.get('/', controller.home);

router.post('/', controller.postData);

router.get('/reduce1', controller.reduce1);
router.get('/reduce2', controller.reduce2);
router.get('/reduce3', controller.reduce3);


module.exports=router;
const Count=require('../model/count.js');

exports.home=async(req,res,next)=>{
    let count= await Count.findAll()
     res.render('home',{test:count});
 }

 exports.postData=async(req,res)=>{
    const{name,description,price,quantity}=req.body;
   await Count.create({
    name:name,
    description:description,
    price:price,
    quantity:quantity
   })
   res.redirect('/');
}

exports.reduce1=async(req,res)=>{
    const noteid=req.query.id;
   const result= await Count.findOne({where:{
        id:noteid
    }});
    const quant=Number(result.quantity);
    if(quant<1){
        return res.send(`not sufficient quantity ${result.name}` )
     }
   await Count.update({
        quantity:quant-1
    },{where:{
        id:noteid
    }})
    res.redirect('/');
}
exports.reduce2=async(req,res)=>{
    const noteid=req.query.id;
   const result= await Count.findOne({where:{
        id:noteid
    }});
    const quant=(result.quantity);
    if(quant<2){
       return res.send(`not sufficient quantity of ${result.name}`)
    }
   await Count.update({
        quantity:quant-2
    },{where:{
        id:noteid
    }})
    res.redirect('/');
}

exports.reduce3=async(req,res)=>{
    const noteid=req.query.id;
   const result= await Count.findOne({where:{
        id:noteid
    }});
    const quant=(result.quantity);
    if(quant<3){
        return res.send(`not sufficient quantity ${result.name}`);
     }
   await Count.update({
        quantity:quant-3
    },{where:{
        id:noteid
    }})
    res.redirect('/');
}
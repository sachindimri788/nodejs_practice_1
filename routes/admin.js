const express=require('express');
const router=express.Router();

router.get('/add_product',(req,res,next)=>{
    res.send('<form action="/admin/add_product" method="POST"> NAME: <input type="text" name="title"> <br> Size: <input type="text" name="size"> <br> <input type="submit"> </form>')

  })
  
  router.post('/add_product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
  })

  module.exports=router;
const http = require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());

app.use('/add_product',(req,res,next)=>{
  res.send('<form action="/product" method="POST"> NAME: <input type="text" name="title"> <br> Size: <input type="text" name="size"> <br> <input type="submit"> </form>')
  next();
})

app.use('/product',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/add_product');
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

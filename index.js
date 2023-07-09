const http = require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
const adminRoutes=require('./routes/admin')
const shopRouter=require('./routes/shop')

app.use('/admin',adminRoutes);
app.use('/shop',shopRouter);

app.use('/',(req,res,next)=>{
   res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

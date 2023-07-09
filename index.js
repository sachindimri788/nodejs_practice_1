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

// Nodejs Basics
// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/home') {
//     res.write('Welcome home');
//     res.end();
//   } else if (req.url === '/about') {
//     res.write('Welcome to About Us page');
//     res.end();
//   } else if (req.url === '/node') {
//     res.write('Welcome to my Node.js project');
//     res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


//FILE IN NODEJS (READ AND WRITE)
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//  if (req.url === '/') {
//   let message = '';
//   if (fs.existsSync('message.txt')) {
//    message = fs.readFileSync('message.txt', 'utf8');
//   }
//   res.write(`
//    <body>
//     <h1>${message}</h1>
//     <form action="/message" method="POST">
//      <input type="text" name="data"> <br>
//      <input type="submit">
//     </form>
//    </body>
//   `);
//   res.end();
//  } else if (req.url === '/message' && req.method === 'POST') {
//   let body = '';
//   req.on('data', (chunk) => {
//    body += chunk;
//   });
//   req.on('end', () => {
//    const message = body.split('=')[1]; 
//    fs.writeFile('message.txt', message, (err) => {
//     if (err) {
//      console.error(err);
//     } else {
//      res.statusCode = 302;          
//      res.setHeader('Location', '/');
//     }
//     res.end();
//    });
//   });
//  }
// });
// server.listen(3000, () => {
//  console.log('Server is running on port 3000');
// });

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());

const fs=require('fs');

app.get('/login',(req,res)=>{
  res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST" > User Name: <input type="text" id="username" name="username"> <br> <input type="submit"> </form>')
})
app.post('/login',(req,res)=>{
  res.redirect('/');
})
app.get('/', (req, res) => {
  if (fs.existsSync('message.txt')) {
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        res.status(500);
        return;
      }
      res.send(`
      <h1>${data}</h1>
      <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
        Message: <input type="text" name="message"><br>
        <input id="username" name="username" type="hidden">
        <input type="submit" value="send">
      </form>
    `);
    });
  } else {
    res.send(`
    <h1></h1>
    <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
      Message: <input type="text" name="message"><br>
      <input id="username" name="username" type="hidden">
      <input type="submit" value="send">
    </form>
  `);
  }
});
app.post('/',(req,res)=>{
  const username=req.body.username;
  const message=req.body.message
  fs.appendFile('message.txt', username+":"+message +"<br>",'utf8', (err) => {
    if (err) {
      res.status(500);
      return;
    }
  });
res.redirect('/');
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

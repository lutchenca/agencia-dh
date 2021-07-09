const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html");
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
  
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data.js");
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache')



app.get('/', (req, res) => {

  res.render('main', data)
});

app.get('/users/:id',(req,res) => {
  let info = data.users[req.params.id - 1];
  res.render('user',info);
})

app.listen(3000, function(){
  console.log("This is going so well!");
});

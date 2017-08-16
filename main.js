const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
// let data = 'data.js';
import {users} from 'module.exports';
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// Listening on root
app.get('/users', function (req, res) {
  // TODO write your code here
  res.render('users', data)
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})

for (var i = 0; i < users.length; i++) {
document.getElementByClass('robots');
document.createElement(div);
let div = `
<img src={users.avatar}>
<h3> {users[i].name}</h3>
<p> {users.job}</p>
`;
robots.appendChild('div');
}

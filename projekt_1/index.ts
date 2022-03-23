const express = require('express')  
const app = express()  
app.get('/', function (req, res) {  
  res.send('Hello World')  
})  

app.get('/:operator/:num1/:num2', function (req, res) {
  
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let operator = req.params.operator;

  if(operator == 'add')
      res.send((num1+num2).toString());
  else if(operator =='substract')
      res.send((num1-num2).toString());
  else if(operator =='multiply')
      res.send((num1*num2).toString());
  else if(operator =='divide')
      res.send((num1/num2).toString());
  else
    res.send('Niepoprawna komenda!')
});

app.listen(3000) 

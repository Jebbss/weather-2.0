const express = require('express'); 
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server Started on port ${port}`);
  });

//public folder
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req, res) => res.send('I am a teapot'));

const apiV1 = require('./routes/apiV1');
app.use('/api/v1', apiV1);
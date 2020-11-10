const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const mongoose = require('mongoose')
const app = express();

//connect with mongoose
const url = 'mongodb://127.0.0.1:27017/Scrapproject'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connect success"))
.catch(err => console.log(err))

//MidlleWare
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//set static folder
app.use(express.static(path.join(__dirname,'public')));

//'passes route '/api/members' to router (it will view this as root '/')
//Members Api Routes
app.use('/api/members', require('./routes/api/members'));
app.use('/search', require('./routes/Search/search'));
app.use('/products', require('./routes/api/products'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

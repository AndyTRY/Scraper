const moment = require('moment');

//MidlleWare
//logger func takes in req,res,next
//ouputs url and date when accessed
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;
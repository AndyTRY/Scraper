const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const {spawn} = require('child_process');
const pythonshell = require('python-shell');
const MAmaProduct = require('../../MongoModels/Amaproduct')
const fs = require("fs");
const insertProducts = require('../../Scraped_data/AmazonMongo');
//root/search


router.post('/', (req,res)=>{
    const searchparam = req.body.search
    const Amaproducts = []
    const AmaScrap = spawn('python3',["./python_scripts/AmaScrap.py", searchparam]); 
    const NeweggScrap = spawn('python3',["./python_scripts/NeweggScrap.py", searchparam]); 

    
    AmaScrap.stdout.on('data', function (data) {
        //console.log('Pipe data from python script ...');
       });

    AmaScrap.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        //console.log(Amaproducts);
        insertProducts(Amaproducts);
        });
        

});


module.exports = router;

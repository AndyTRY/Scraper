const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const {spawn} = require('child_process');
const pythonshell = require('python-shell');
const MAmaProduct = require('../../MongoModels/Amaproduct')
//root/search


router.post('/', (req,res)=>{
    const searchparam = req.body.search
    const Amaproducts = []
    const AmaScrap = spawn('python3',["./python_scripts/AmaScrap.py", searchparam]); 
    const NeweggScrap = spawn('python3',["./python_scripts/NeweggScrap.py", searchparam]); 

    
    AmaScrap.stdout.on('data', function (data) {
        //console.log('Pipe data from python script ...');
        Arrproduct1 = new Buffer(data, 'utf-8').toString()
        Arrproduct = Arrproduct1.split('\n')
        console.log(Arrproduct);
        if (Arrproduct.length = 4){
            const Amaproduct = new MAmaProduct({
                title: Arrproduct[0],
                price: Arrproduct[1],
                rating: Arrproduct[2],
                reviewnum: Arrproduct[3]
             });

             Amaproducts.push(Amaproduct)
             Amaproduct.save()
        }
       });

    AmaScrap.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        console.log(Amaproducts);
        
        });
        

});

module.exports = router;

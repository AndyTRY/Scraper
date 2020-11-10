const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.post('/', (req, res) => {
    const searchparam = req.body.search
    const Amaproducts = []
    const AmaScrap = spawn('python3',["./python_scripts/AmaScrap.py", searchparam]); 
    //const NeweggScrap = spawn('python3',["./python_scripts/NeweggScrap.py", searchparam]); 

    
    AmaScrap.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        Arrproduct = data.toString().split('\n');
        console.log(Arrproduct);
        /*
        const Amaproduct = new MAmaProduct({
            title: Arrproduct[0],
            price: Arrproduct[1],
            rating: Arrproduct[2],
            reviewnum: Arrproduct[3]
        });
        Amaproduct.save();
        */
       });

    AmaScrap.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send();
        });
});

module.exports = router
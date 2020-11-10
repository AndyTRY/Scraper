
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const {spawn} = require('child_process');



router.get('/', (req,res)=> {
    //var pyt = spawn('python3',["./python_scripts/AmaScrap.py", "hero"]); 
    const AmaProducts = require('../../Scraped_data/Amazon')    
    res.json(AmaProducts);

})



//Create member (can use same route for diff methods (post vs get at '/'))
router.post('/', (req,res)=>{
 
    
});



module.exports = router;
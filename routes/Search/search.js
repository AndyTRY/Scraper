const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const {spawn} = require('child_process');
const pythonshell = require('python-shell');
const MAmaProduct = require('../../MongoModels/Amaproduct')
const fs = require("fs");
const insertProducts = require('../../Scraped_data/AmazonMongo');
//root/search


/**
 * Scrap Data
 * @path {POST} /search/products
 * @body {string} the search parameter
 */
async function ScrapData(req, res) {
    
    
    const searchparam = req.body.search;
    /*
    const Amaproducts = [];
    const AmaScrap = spawn('python3',["./python_scripts/AmaScrap.py", searchparam]); 
    const NeweggScrap = spawn('python3',["./python_scripts/NeweggScrap.py", searchparam]); 
    */

    await Promise.all([

        //Amazon Promise
        new Promise((resolve, reject) => {
            spawn('python3',["./python_scripts/AmaScrap.py", searchparam])
            .on('close', (code) =>{
                console.log(`child process close all stdio with code ${code}`);
                //code == 0 ? resolve:reject
                resolve()
                
            })
        }),

        //Neweggs Promise
        new Promise((resolve, reject) => {
            spawn('python3',["./python_scripts/NeweggScrap.py", searchparam])
            .on('close', (code) =>{
                console.log(`child process close all stdio with code ${code}`);
                //code == 0 ? resolve:reject
                resolve()
                
            })
        }),
    ])

    console.log("Promise Done");
    await res.sendStatus(200);
    
    
}



module.exports = ScrapData;

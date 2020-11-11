
const MAmaProduct = require('../MongoModels/Amaproduct')
const fs = require("fs");

async function InsertAmaMongo(){
    //when running index.js, remove ../ as selon index.js, it is seen form 'root'
    data = fs.readFileSync('public/ProductFiles/ProductAmazon.txt', 'utf8', (err,content) => {
        if(err) throw err;
    }) 

    //Arrproduct1 = new Buffer(data, 'utf-8').toString()
    dlist = data.split('\n')
    //console.log(Arrproduct);
   

    let n = dlist.length - 1;
    let index;
    for (index = 0; index < (n/5);index++){
        const Amaproduct = new MAmaProduct({
            title: "",
            price: "",
            rating: "",
            reviewnum: ""
            });
        Amaproduct.title = dlist.shift();
        console.log(  "title: "+ Amaproduct.title)
        Amaproduct.price = dlist.shift();
        console.log( "price: "+Amaproduct.price)
        Amaproduct.rating = dlist.shift();
        console.log( "rating: "+Amaproduct.rating)
        Amaproduct.reviewnum = dlist.shift();
        console.log( "reviewnum: "+Amaproduct.reviewnum)
        //Amaproducts.push(Amaproduct)
        Amaproduct.save()
        dlist.shift();
    }

    //console.log(AmaProducts);
}

module.exports = InsertAmaMongo;
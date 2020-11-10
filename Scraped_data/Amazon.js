const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { pbkdf2 } = require("crypto");
const { parseTwoDigitYear } = require("moment");

const fs = require("fs");
//when running index.js, remove ../ as selon index.js, it is seen form 'root'
data = fs.readFileSync('public/ProductFiles/ProductAmazon.txt', 'utf8', (err,content) => {
    if(err) throw err;
}) 

dlist = data.split('\n');
let n = dlist.length - 1;
let i = "s";
console.log(n);
let index;
const AmaProducts =[]
for (index = 0; index < (n/5);index++){
    let product = {
        Title: "",
        Price: "",
        Rating: "",
        ReviewNum: ""

    }
    product.Title = dlist.shift();
    product.Price = dlist.shift();
    product.Rating = dlist.shift();
    product.ReviewNum = dlist.shift();
    dlist.shift();
    AmaProducts.push(product);
    
}

console.log(AmaProducts);

module.exports = AmaProducts;



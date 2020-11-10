console.log("res");
//document.getElementById('getForm').addEventListener('submit',getName);
document.getElementById('button1').addEventListener('click',getAMA);
document.getElementById('Prosearch').addEventListener('submit',getAPI);

/*
function getName(e){
e.preventDefault();

var Name = document.getElementById('name1').value;
console.log("posted");
var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/members");
xhr.setRequestHeader("Content-Type", "application/json");  
xhr.send(JSON.stringify({name:Name, email: "rews@gmail.com", status:"active"}));


}
*/

function getAMA(){
        
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./ProductFiles/ProductAmazon.txt", true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr.send();


}

function getAPI(e){
    e.preventDefault();
    
    ///Scrap
    var search = document.getElementById('name2').value;
    console.log("postedProduc");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search", true);
    xhr.setRequestHeader("Content-Type", "application/json");  
    xhr.send(JSON.stringify({search:search})); 
    
    
    //Read (Timeout fixlater)
    setTimeout(()=>{
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "./ProductFiles/ProductAmazon.txt", true);
        xhr2.onload = function(){
            if(this.status == 200){
            console.log(this.responseText);
                }
            }
        xhr2.send();
    }, 8000)


    //Scrappost();
   
}




/*
async function Scrappost(){
    await Scrap();
    Post();
}

function Scrap(){
    var search = document.getElementById('name2').value;
    console.log("postedProduc");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search", true);
    xhr.setRequestHeader("Content-Type", "application/json");  
    xhr.send(JSON.stringify({search:search}));
}

function Post(){
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "./ProductFiles/ProductAmazon.txt", true);
    xhr2.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr2.send();
}
*/
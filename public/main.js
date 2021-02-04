
let inputButton = document.getElementById("inputButton");
inputButton.disabled = false;
let loaderGif = document.getElementById("loaderGif");

document.getElementById("Prosearch").addEventListener('submit',getAPI);

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
    //DisableButton();
    inputButton.disabled = true;
    loaderGif.style.visibility = "visible";
    
    e.preventDefault();
    
    ///Scrap
    var search = document.getElementById('name2').value;
    console.log("postedProduc");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search/products", true);
    xhr.setRequestHeader("Content-Type", "application/json");  

    xhr.onload = function(){
        console.log('done')
        if(this.status == 200){
                var xhr2 = new XMLHttpRequest();
                xhr2.open("GET", "./ProductFiles/ProductAmazon.txt", true);
                xhr2.onload = function(){
                    if(this.status == 200){
                    //console.log(this.responseText);
                    tableInsert("table2",this.responseText,4)
                        }
                    }
                xhr2.send();
                
                var xhr3 = new XMLHttpRequest();
                xhr3.open("GET", "./ProductFiles/NeweggProduct.txt", true);
                xhr3.onload = function(){
                    if(this.status == 200){
                    //console.log(this.responseText);
                    tableInsert("table1",this.responseText,7)
                        }
                    }
                xhr3.send();

                inputButton.disabled = false;
                loaderGif.style.visibility = "hidden";
            }
        }

    xhr.send(JSON.stringify({search:search})); 


    

    
    
   
}


function tableInsert(tableName,data,numFeatures) {

dlist = data.split('\n');
let n = dlist.length - 1;
let index;
var table = document.getElementById(tableName);
var tbody = document.getElementById(tableName).getElementsByTagName('tbody')[0];
tbody.innerHTML = '';
let itemNum = 1;

for (index = 0; index < (n/(numFeatures+1));index++){
    var row = tbody.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML =  `${itemNum}`;

    for (i =1; i< numFeatures + 1; i++){
        var cell = row.insertCell(i);
        cell.innerHTML = dlist.shift();
    }

    dlist.shift()
    itemNum++;
    }

}




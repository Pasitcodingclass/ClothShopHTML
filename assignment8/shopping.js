window.onload = pageLoad;

function pageLoad(){
	var xml = new XMLHttpRequest();
    xml.open("GET", "cloth.json");
    xml.onload = function(){
        var jsdata = JSON.parse(xhr.responseText);
        showData(jsdata);
    }
    xml.onerror = function() { alert("ERROR!"); }; 
    xml.send();
}

function showData(data){
	var keys = Object.keys(data);
    for(var i =0; i< keys.length; i++){
        var temp = document.getElementById("layer");
        var list = temp.querySelectorAll("div");
        var image = document.createElement("img");
        image.src = "pic/"+ data[keys[i]].pic;
        var brandname = document.createElement("p");
        brandname.innerText = data[keys[i]].brandname;
        var price = document.createElement("p");
        price.innerText = data[keys[i]].price;
        list[i].appendChild(image);
        list[i].appendChild(brandname);
        list[i].appendChild(price);
    }
}


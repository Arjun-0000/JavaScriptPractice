window.onload = init;

function init() {
	loadJSON();
}

function loadJSON(callback) {

	let xHR = new XMLHttpRequest;
	xHR.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let myObj = JSON.parse(this.responseText);
			alert("json file is ready to use");
		}
	}
	xHR.open('GET','http://myjson.dit.upm.es/api/bins/1fk1',true)
	xHR.send();
	console.log(xHR);
}
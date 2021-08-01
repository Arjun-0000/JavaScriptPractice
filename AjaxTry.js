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
	xHR.open('GET','../json1.json',true)
	xHR.send();
	console.log(xHR);
}

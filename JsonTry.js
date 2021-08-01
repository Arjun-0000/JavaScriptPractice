//get json string to json
let v_StringToJson = JSON.parse(data);
//populate table with json data
showList();
/* keeping event in the ADD button by queryselector */
let v_eventForButtonADD = document.querySelector('input[type="button"]');
v_eventForButtonADD.addEventListener('click',function(e){
	let v_a = document.querySelector('input[id="guestName"]');
	let v_b = document.querySelector('input[id="guestNum"]');
	v_StringToJson.push({
		name:v_a.value,
		guest:Number(v_b.value),
		status: false
	})
	messageOnUpdate();
	listNewAdd(v_StringToJson.length - 1);
	v_a.value = '';
	v_b.value = 0;
});
messageOnUpdate = () =>{
	alert("it had been added");
}
/* after input - add record */
listNewAdd = (b) =>{
	let a = v_StringToJson;
	let v_holdRepeatTr = document.getElementById('repeatNumberOfJson');
	v_holdRepeatTr.innerHTML += '<tr><td> ' + a[b].name + ' </td><td> ' + a[b].guest + ' </td><td> ' + a[b].status + ' </td></tr> ';

}
/* Initial table fill from json */
function showList() {
	let a = v_StringToJson;
	let v_holdRepeatTr = document.getElementById('repeatNumberOfJson');
	for( let i = 0; i<a.length; i++){
		v_holdRepeatTr.innerHTML += '<tr><td> ' + a[i].name + ' </td><td> ' + a[i].guest + ' </td><td> ' + a[i].status + ' </td></tr> ';
	}
};

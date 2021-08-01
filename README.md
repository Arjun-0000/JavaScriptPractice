# Json-Ajax
## Json And Ajax practise files with description


#### JSON only
:tada: [Website](https://arjun-0000.github.io/Json-Ajax/JsonTry.html) :tada:
<details><summary>To see the details below</summary>

1. Use of *JSONlint* (check json) and *myjson* (to create json in url)
2. JSON.parse use to parse Object
	- Create json.json file where data = '[{}]'; (only string store in json format)
	- Link to html by **script src="json.json"**
	- var = JSON.parse(data)
	- cosole.log var (shows json format file of json.json)
3. Show Json data in table and to add in the table if new input given
	- Input 2 field and Input button
	- and create event in the add button by queryselector
	- if add show message and can see added result in console
	- html - table create with data blank
	- script - fxn1 - initial populate first
	- if add next fxn to only add the same added record

</details>

#### AJAX first try
:tada: [Website](https://arjun-0000.github.io/Json-Ajax/AjaxTry.html) :tada:
<details><summary>To see ajax details</summary>

1. Initial connection
	- new XMLHttpRequest - console - all of the attr are null,"",0
	- **open('get','json.json',true)**
		- get/post, filename, sync/async
		- data = [{}] \(data = \) not needed for now
		-  Now **readystate = 1** other as it is
	- **send()** try to send but problem
		- Cross origin requests, protocol schemes
		- trying in local, so json.json not support, maybe works in gitub hosted, localhost, http, web
		- for now using myjson to generate url json http\://myjson.dit.upm.es/api/bins/1fk1
	- open('GET','http\://myjson.dit.upm.es/api/bins/1fk1',true)
	- open and send = **readystate: 4** **response & responseText** hold the JSON, **response url** : url , **Status: 200** , **statusText: "OK"**
	- **checking onreadystatechange**
		- xHR.onreadystatechange = function(){console.log(this.readyState);
			- blank in console
			- with xHR.open  = 1
			- with xHR.send  = 1(pause) 2 3 4
		- this.readyState, so can this.response or responseText
		- onreadystatechange = there if console shows lot of output with error
			- use of condition readystate 4 and status 200
		
</details>

var db=firebase.database();
// console.log("DB: ",db)

var table = document.getElementById('table');


db.ref().once('value').then((val) => {
	// console.log("V: ",val.val())
	var list = val.val()
	for(let l in list){
		// console.log("l: "+list[l])
		table.innerHTML += `<tr><td>`+ l +`</td><td>` + list[l] + `</td></tr>`
	}
})
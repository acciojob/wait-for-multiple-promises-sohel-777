//your JS code here. If required.
let rows=document.querySelector("#output");

	rows.innerHTML=
		`<tr id="loading">
		  <td colspan=2 >Loading...</td>
		  </tr>`;

let Promise1 = new Promise((resolve,reject)=>{
	let time1=Math.random()*2+1;
	setTimeout(()=>{
		resolve(time1);
	},time1*1000);
});

let Promise2 = new Promise((resolve,reject)=>{
	let time2=Math.random()*2+1;
	setTimeout(()=>{
		resolve(time2);
	},time2*1000);
});

let Promise3 = new Promise((resolve,reject)=>{
	let time3=Math.random()*2+1;
	setTimeout(()=>{
		resolve(time3);
	},time3*1000);
});

Promise.all([Promise1,Promise2,Promise3]).then((result)=>{
	let sum=0;
	rows.innerHTML="";
	for(var i=0;i<result.length;i++){
		sum +=result[i];
		rows.innerHTML +=
			`<tr>
			   <td>Promise ${i+1}</td>
				<td>${result[i]}</td>
			</tr>`;
		
	}
	rows.innerHTML +=
			`<tr>
			   <td>Total</td>
				<td>${sum}</td>
			</tr>`;
})
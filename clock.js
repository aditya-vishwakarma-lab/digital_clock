let date_object = new Date();
let time = date_object.toLocaleTimeString();
let date = date_object.toLocaleDateString();
document.getElementById('time').innerText = time;
document.getElementById('date').innerText = date;

setInterval(() => {
	date_object = new Date();
	time = date_object.toLocaleTimeString();
	date = date_object.toLocaleDateString();
	document.getElementById('time').innerText = time;
	document.getElementById('date').innerText = date;
}, 1000);
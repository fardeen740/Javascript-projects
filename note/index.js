const submit = document.querySelector("button");
let success = "Task Added successfully";

let notification = (message)=>{
	let note = document.createElement("div");
	note.classList = "notification";
	note.innerHTML = `<h3>${message}</h3>`;
	document.body.appendChild(note);

	setInterval(()=>{
			note.classList += " notificationSlideOut";
		setInterval(()=>{
			note.remove();
		},1000);
	
	},1800);

};

submit.addEventListener("click",()=>{
	notification(success);

});
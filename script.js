let name = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submit");
let existBtn = document.getElementById("existing");

submitBtn.addEventListener('click', () =>{
	let userName = name.value.trim();
	let userPass = password.value.trim();

	if(userName && userPass){
		
		if(!checkbox.checked){
			alert(`Logged in as ${userName}`);
			localStorage.clear();
			existBtn.style.display = "none";
		}else{
			localStorage.setItem("name", userName);
			localStorage.setItem("password", userPass);
			existBtn.style.display = "block";
		}
		
	}else{
		alert("Fill all the fields");
	}
	name.value = "";
	password.value = "";
});

existBtn.addEventListener('click', () =>{
	let storedName = localStorage.getItem("name");
	alert(`Login as existing user ${storedName}`);
})






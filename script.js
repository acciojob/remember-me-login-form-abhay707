let name = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submit");
let existBtn = document.getElementById("existing");

window.onload = function () {
  const hasSavedUser =
    localStorage.getItem("name") && localStorage.getItem("password");

  existingBtn.style.display = hasSavedUser ? "block" : "none";
});

submitBtn.addEventListener('click', function () {
	let userName = name.value.trim();
	let userPass = password.value.trim();

	if(!userName || !password){
		alert("Fill all the fields");
		return;
	}

	if(!checkbox.checked){
			localStorage.removeItem("name");
			localStorage.removeItem("password");
			existBtn.style.display = "none";
	}else{
			localStorage.setItem("name", userName);
			localStorage.setItem("password", userPass);
			existBtn.style.display = "block";
	}

	alert("Logged in as " + userName);
	name.value = "";
	password.value = "";
});

existBtn.addEventListener('click', () =>{
	let storedName = localStorage.getItem("name");
	alert(`Login in as existing user ${storedName}`);
})






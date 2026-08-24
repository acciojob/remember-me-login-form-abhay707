let name = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submit");
let existBtn = document.getElementById("existing");

window.onload = function () {
  const storedName = localStorage.getItem("name");
  const storedPassword = localStorage.getItem("password");

  if (storedName && storedPassword) {
    existBtn.style.display = "block";
  } else {
    existBtn.style.display = "none";
  }
};

submitBtn.addEventListener('click', function () {
	let userName = name.value.trim();
	let userPass = password.value.trim();

	if(!userName || !userPass){
		alert("Fill all the fields");
		return;
	}

	if(checkbox.checked){
			localStorage.setItem("name", userName);
			localStorage.setItem("password", userPass);
			existBtn.style.display = "block";
	}else{
		localStorage.removeItem("name");
			localStorage.removeItem("password");
			existBtn.style.display = "none";
			
	}

	alert("Logged in as " + userName);
	name.value = "";
	password.value = "";
});

existBtn.addEventListener('click', () =>{
	let storedName = localStorage.getItem("name");
	alert(`Login in as ${storedName}`);
})






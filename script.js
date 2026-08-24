let name = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submit");
let existBtn = document.getElementById("existing");

function toggleExistingButton() {
    const storedName = localStorage.getItem("name");
    const storedPassword = localStorage.getItem("password");

    existBtn.style.display =
        storedName && storedPassword ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", toggleExistingButton);

submitBtn.addEventListener('click', function (e) {
	e.preventDefault();
	let userName = name.value.trim();
	let userPass = password.value.trim();

	if(checkbox.checked){
			localStorage.setItem("name", userName);
			localStorage.setItem("password", userPass);
			existBtn.style.display = "block";
	}else{
		localStorage.removeItem("name");
			localStorage.removeItem("password");
			existBtn.style.display = "none";
			
	}
	toggleExistingButton();

	alert("Logged in as " + userName);
});

existBtn.addEventListener('click', () =>{
	let storedName = localStorage.getItem("name");
	alert(`Logged in as ${storedName}`);
})






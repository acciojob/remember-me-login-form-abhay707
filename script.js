let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submit");
let existBtn = document.getElementById("existing
const form = document.querySelector("form");

function toggleExistingButton() {
    const storedName = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    existBtn.style.display =
        storedName && storedPassword ? "block" : "none";
}

toggleExistingButton();

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let userName = username.value.trim();
	let userPass = password.value.trim();

	if(checkbox.checked){
			localStorage.setItem("username", userName);
			localStorage.setItem("password", userPass);
			existBtn.style.display = "block";
	}else{
		localStorage.removeItem("username");
			localStorage.removeItem("password");
			existBtn.style.display = "none";
			
	}
	toggleExistingButton();

	alert("Logged in as " + userName);
});

existBtn.addEventListener('click', () =>{
	let storedName = localStorage.getItem("username");
	alert(`Logged in as ${storedName}`);
})






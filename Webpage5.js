function checkUsername(){
	var message = document.getElementById("feedback");
	if (this.value.length < 5){
		message.textContent = "*Username must be at least 5 characters";
	}
	else{
		message.textContent = "";
	}
}

var username = document.getElementById("username");
username.onblur = checkUsername;

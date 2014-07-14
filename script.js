window.onload = function() {


	var boxes = document.getElementsByClassName("boxes");
	var taco = false;
	var display = document.getElementById("display");
	

	for(i=0; i < boxes.length; i++){
		display.innerHTML = "ITS PLAYER X'S TURN!"
		boxes[i].onclick = function () {
			if (taco === false && this.innerHTML === "") {
				this.innerHTML = "X";
				this.style.color = "red";
				taco = true;
				display.innerHTML = "ITS PLAYER O'S TURN!"
			} else if (taco === true && this.innerHTML === "") {
				this.innerHTML = "0";
				this.style.color = "blue";
				taco = false;
				display.innerHTML = "ITS PLAYER X'S TURN!"
			}
		}
	}

	var clear = document.getElementById("reset");

	clear.onclick = function() {
		taco = false;
		display.innerHTML = "ITS PLAYER X'S TURN!";
		for (i=0; i< boxes.length; i++){
			boxes[i].innerHTML = "";
		}
	}
}
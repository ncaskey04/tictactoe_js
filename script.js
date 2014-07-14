window.onload = function() {

	var boxes = document.getElementsByClassName("boxes");
	var turn = false;
	var display = document.getElementById("display");
	
	for(i=0; i < boxes.length; i++){
		display.innerHTML = "ITS PLAYER X'S TURN!"
		boxes[i].onclick = function () {
			if (turn === false && this.innerHTML === "") {
				this.innerHTML = "X";
				this.style.color = "red";
				turn = true;
				display.innerHTML = "ITS PLAYER O'S TURN!"
			} else if (turn === true && this.innerHTML === "") {
				this.innerHTML = "0";
				this.style.color = "blue";
				turn = false;
				display.innerHTML = "ITS PLAYER X'S TURN!"
			}
		}
	}

	var clear = document.getElementById("reset");

	clear.onclick = function() {
		turn = false;
		display.innerHTML = "ITS PLAYER X'S TURN!";
		for (i=0; i< boxes.length; i++){
			boxes[i].innerHTML = "";
		}
	}
}
window.onload = function() {
	document.getElementById("paste1").onkeyup = function() {
		countChars();
	}
}

function countChars() {
	//document.getElementById("count1").innerHTML=Date();
	var paste = document.getElementById("paste1").value;
	var count = paste.length;
	document.getElementById("count1").innerHTML=count;

}


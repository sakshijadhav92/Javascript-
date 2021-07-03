function Action() {
	var cmd = document.getElementById("input-box").value;
	var xhr = new XMLHttpRequest();
	if (cmd.includes("deployment") && (cmd.includes("create") || cmd.includes("launch"))) {
			var deployment = prompt("Enter Deployment Name: ");
			var image = prompt("Enter Image Name: ");
			xhr.open("GET","http://<Your IP>/cgi-bin/K8.py?cmd=" + cmd + "&y=" + deployment + "&z=" + image,true);
	}
	
	else if (cmd.includes("expose")) {
			var deployment = prompt("Enter Deployment Name: ");
			var port = prompt("Enter Port No.: ");
			xhr.open("GET","http://<Your IP>/cgi-bin/K8.py?cmd=" + cmd + "&y=" + deployment + "&z=" + port,true);
	}
	
	else if (cmd.includes("delete") && cmd.includes("deployment")) {
			var deployment = prompt("Enter Deployment Name: ");
			xhr.open("GET","http://<Your IP>/cgi-bin/K8.py?cmd=" + cmd + "&y=" + deployment,true);
	}

	else {
		xhr.open("GET","http://<Your IP>/cgi-bin/K8.py?cmd=" + cmd,true);
	}
	xhr.send();
	xhr.onload = function() {
		var output = xhr.responseText;
		document.getElementById("output").innerHTML=output;
	}
}

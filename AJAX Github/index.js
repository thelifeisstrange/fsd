const getUsers = () => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			document.getElementById("demo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "filename", true);
	xhttp.send();
};

const getRepos = () => {
	username = document.getElementById("username").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (
			this.readyState == 4 &&
			(this.status == 200 || this.status == 404)
		) {
			// Typical action to be performed when the document is ready:

			let repos = JSON.parse(xhttp.responseText);
			if (repos.message === "Not Found") {
				document.getElementById("root").innerHTML = "User not found!";
				return;
			}
			if (repos.length === 0) {
				document.getElementById("root").innerHTML =
					"NO REPOSITORIES !!!";
				return;
			}
			document.getElementById("root").innerHTML = "<ol>";

			for (let i = 0; i < repos.length; i++) {
				const element = repos[i];

				document.getElementById("root").innerHTML +=
					"<li>" + element.full_name + "</li>";
			}
			document.getElementById("root").innerHTML += "</ol>";
		}
	};
	xhttp.open("GET", `https://api.github.com/users/${username}/repos`, true);
	xhttp.send();
};

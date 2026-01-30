document.getElementById("facultyLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("facultyEmail").value;
  const password = document.getElementById("facultyPassword").value;

  // Demo Faculty Credentials
  if (email === "faculty@srit.ac.in" && password === "1234") {
    document.getElementById("welcomeFaculty").innerText =
      "Welcome Faculty ";
    document.getElementById("welcomeFaculty").style.color = "green";
    document.getElementById("facultyMsg").innerText = "";
  } else {
    document.getElementById("facultyMsg").innerText =
      "Invalid Faculty Credentials";
    document.getElementById("facultyMsg").style.color = "red";
    document.getElementById("welcomeFaculty").innerText = "";
  }
});
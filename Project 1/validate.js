var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "guest" && password == "1234") {
    alert("Login successfully");
    window.open("register.html"); // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

//user validation keys
function myFunction() {
  alert("[Username : guest ][Password : 1234]");
}
//User alert for registration process
function newFunction() {
  alert("You have been registered successfully ");
}

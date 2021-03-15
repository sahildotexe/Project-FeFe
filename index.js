// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Qaifi" && password == "qaifi"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }





$(document).ready(function(){
  // Login function
  const logIn = () => {
    if($("#username").val() === "" || $("#password").val() === "") {
      return
    }else{
      $.ajax({
        url:"https://604de6a22a808e00177845bb.mockapi.io/v1/login",
        type: "get",
        success: function (data) {
          let logged = false;
          for(let i = 0; i < data.length; i++) {
            $("#login-form").remove();
            $(".right-menu").show();
            localStorage.setItem("loggedIn", true);
            logged = true;
            alert("logged in successfully");
            location.replace("../HTML/orders.html")
            break;  
          }
        }
        if(logged === false) {
          alert("Invalid Credentials.");
      }
    }
      });
    }
  }
                  $("#signInbtn").click(function() {
  logIn();
});
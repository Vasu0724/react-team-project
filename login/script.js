
let email = document.getElementById("email");
let password = document.getElementById("password");

let loginForm = document.getElementById("loginForm");
let message = document.getElementById("message");

let showPassword = document.getElementById("showPassword");

// Login functionality

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue == "vasu@gmail.com" && passwordValue == "12345") {

        message.textContent = "Login Successful!";
        message.style.color = "green";

    }
    else {

        message.textContent = "Invalid Email or Password!";
        message.style.color = "red";

    }

});


// Show and Hide Password

showPassword.addEventListener("click", function() {

    if (password.type == "password") {

        password.type = "text";
        showPassword.textContent = "Hide";

    }
    else {

        password.type = "password";
        showPassword.textContent = "Show";

    }

});

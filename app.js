const nameElement = document.getElementById("name");
const passwordElement = document.getElementById("password");
const form = document.getElementById("form");

const errorElement = document.getElementById("error");

form.addEventListener("submit", function(e) {
    let messages = [];
    if (nameElement.value === "" || nameElement.value == null) {
        console.log(nameElement)
        messages.push("Name is required");
    }

    if(passwordElement.value.length <= 6) {
        messages.push("password must be 6 characters or longer");
    }

    if(passwordElement.value.length >= 20) {
        messages.push("password must be less than 20 characters");
    }

    if(passwordElement.value == "password") {
        messages.push("password cannot be password");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})
// 1st step

document.getElementById("submit-button").addEventListener('click', function () {
    const emailInputString = document.getElementById("email-input");
    // console.log(emailInputString.value);
    const passwordInputString = document.getElementById("password-input");
    // console.log(passwordInputString.value);
    if (emailInputString.value == "abc@gmail.com" && passwordInputString.value == 12345) {
        window.location.href = "./bank.html";
    }
    else {
        alert("Please provide valid info");
    }
    emailInputString.value = "";
    passwordInputString.value = "";
})



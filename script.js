const regexp = /\w+\@[A-Za-z0-9]+\.[A-Za-z0-9]/;

let subscriptionForm = document.querySelector("#subscription");

subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.querySelector("#email");
    let alertIcon = document.querySelector(".error-icon");
    let alertMessage = document.querySelector(".message");
    
    if(!regexp.test(email.value)){
        alertIcon.style.display = "block";
        alertMessage.style.display = "block";
    } else {
        alertIcon.style.display = "none";
        alertMessage.style.display = "none";   
    }

})
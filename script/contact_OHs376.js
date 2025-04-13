
function validate(form){
    let validName = validateName(form);
    let validEmail = validateEmail(form);
    let validMessage = validateMessage(form);

    let valid = validName && validEmail && validMessage ;
    return valid;
}

function validateName(form){
    let name=form.elements["name"];
    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name.");
        return false;
}
else{
    name.setCustomValidity("");
    return true;
}
}
function validateEmail(form){
    let email=form.elements["email"];
    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email.");
        return false;
}
else{
    email.setCustomValidity("");
    return true;
}
}
function validateMessage(form){
    let message=form.elements["message"];
    if(message.validity.valueMissing){
        message.setCustomValidity("Please enter your message.");
        return false;
}
else{
    message.setCustomValidity("");
    return true;
}
}
function sendMessage(form){
    if(!validate(form)){
        form.reportValidity();
        return false;

    }
    
    let name = form.elements["name"].value;
    let email = form.elements["email"].value;
    let message = form.elements["message"].value;

    let target = document.getElementById("output");
    target.innerText = "Message sent successfully!" + "\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message: " + message;

    return false; 
}

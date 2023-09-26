// form validation using javascript (customization according to the requirements)
const userName = document.getElementById("user-name");
const pass = document.getElementById("pass");

function validate() {
    if(userName.value.trim() == "" || pass.value.trim() == "")
    {
        alert("Empty field not allowed");
        return false;
    }
    else {
        true;
    }
}
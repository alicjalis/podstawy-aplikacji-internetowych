function isEmpty(length){
    if(length == 0){
        return true;
    }
    else{
        return false;
    }
}

function validate(form){
    let firstName = form.elements["f_imie"].value;

    if(isEmpty(firstName) == true || isWhiteSpaceOrEmpty(firstName) == true) {
        alert("Podaj imię!");
        return false;
    } else {
        return true;
    }
}

function isWhiteSpaceOrEmpty(str){
    return /^[\s\t\r\n]*$/.test(str);
}

function checkString(str, msg){
    let secondName = form.elements["f_nazwisko"].value;
    let maidenName = form.elements["f_nazwisko_p"].value;
    let email = form.elements["f_email"].value;
    let zipCode = form.elements["f_kod"].value;
    let street = form.elements["f_ulica"].value;
    let city = form.elements["f_miasto"].value;

    if(isEmpty(secondName) == true || isWhiteSpaceOrEmpty(secondName) == true) {
        alert("Podaj nazwisko!");
        return false;
    }
    if(isEmpty(maidenName) == true || isWhiteSpaceOrEmpty(maidenName) == true) {
        alert("Podaj nazwisko!");
        return false;
    }

}
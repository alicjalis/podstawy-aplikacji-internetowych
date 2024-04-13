function isEmpty(length){
    if(length == 0){
        return true;
    }
    else{
        return false;
    }
}

function checkString(str, msg) {
    if (isEmpty(str) || isWhiteSpaceOrEmpty(str)) {
        alert(msg);
        return false;
    }
    return true;
}

function isWhiteSpaceOrEmpty(str){
    return /^[\s\t\r\n]*$/.test(str);
}

function validate(form) {
    let firstName = form.elements["f_imie"];
    let secondName = form.elements["f_nazwisko"];
    let maidenName = form.elements["f_nazwisko_p"];
    let email = form.elements["f_email"];
    let zipCode = form.elements["f_kod"];
    let street = form.elements["f_ulica"];
    let city = form.elements["f_miasto"];

    if (!checkStringAndFocus(firstName, "Podaj imię!", isWhiteSpaceOrEmpty)) {
        return false;
    }

    if (!checkStringAndFocus(secondName, "Podaj nazwisko!", isWhiteSpaceOrEmpty)) {
        return false;
    }

    if (!checkStringAndFocus(maidenName, "Podaj nazwisko panieńskie!", isWhiteSpaceOrEmpty)) {
        return false;
    }

    if (!checkStringAndFocus(email, "Podaj poprawny adres email", isEmailInvalid)) {
        return false;
    }

    if (!checkStringAndFocus(zipCode, "Podaj poprawny kod pocztowy w formacie XX-XXX!", isWhiteSpaceOrEmpty)) {
        return false;
    }

    if (!checkStringAndFocus(street, "Podaj nazwę ulicy!", isWhiteSpaceOrEmpty)) {
        return false;
    }

    if (!checkStringAndFocus(city, "Podaj nazwę miasta!",isWhiteSpaceOrEmpty)) {
        return false;
    }

    return true;
}
    
function isEmailInvalid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
    return false;
    else {
    return true;
    }
}

    
function checkStringAndFocus(obj, msg, func) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (func(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}
    

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
    }
    function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
        if (e) {
            if (i % 2 == 1) {
                e.setAttribute("style", "background-color: Aqua;");
            }
            e = e.nextSibling;
            while (e && e.nodeType != 1) {
                e = e.nextSibling;
            }
            alterRows(++i, e);
        }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}

function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}

function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}
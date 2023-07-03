function validateForm() {
    if (!vorname()) return false
    if (!nachname()) return false
    if (!strasse()) return false
    if (!hausnummer()) return false
    if (!plz()) return false
    if (!ort()) return false
    if (!email()) return false
    if (!tel()) return false
    
}



function vorname() {
    let value = document.getElementById("vorname").value;
    if (value === "") {
        // fehlerfall
        event.preventDefault();
        setMessage1("B itte Vornamen eingeben");
        return false;
    }

    sessionStorage.setItem("vorname", value);

    return true; // korrekte Eingabe
}

function nachname() {
    let value = document.getElementById("nachname").value;
    if (value === "") {
        // fehlerfall
        setMessage2("Bitte Nachnamen eingeben");
        return false;
    }

    sessionStorage.setItem("nachname", value);

    return true; // korrekte Eingabe
}

function strasse() {
    let value = document.getElementById("strasse").value;
    if (value === "") {
        // fehlerfall
        setMessage3("Bitte Strasse eingeben");
        return false;
    }

    sessionStorage.setItem("strasse", value);

    return true; // korrekte Eingabe
}

function hausnummer() {
    let value = document.getElementById("hausnummer").value;
    if (value === "") {
        // fehlerfall
        setMessage4("Bitte Hausnummer eingeben");
        return false;
    }

    sessionStorage.setItem("hausnummer", value);

    return true; // korrekte Eingabe
}

function plz() {
    let value = document.getElementById("plz").value;
    if (value === "") {
        // fehlerfall
        setMessage5("Bitte Postleitzahl eingeben");
        return false;
    }

    sessionStorage.setItem("plz", value);

    return true; // korrekte Eingabe
}

function ort() {
    let value = document.getElementById("ort").value;
    if (value === "") {
        // fehlerfall
        setMessage6("Bitte Ort eingeben");
        return false;
    }

    sessionStorage.setItem("ort", value);

    return true; // korrekte Eingabe
}

function email() {
    let value = document.getElementById("email").value;
    if (value === "") {
        // fehlerfall
        setMessage7("Bitte Email eingeben");
        return false;
    }

    sessionStorage.setItem("email", value);

    return true; // korrekte Eingabe
}

function tel() {
    let value = document.getElementById("tel").value;
    if (value === "") {
        // fehlerfall
        setMessage8("Bitte Tel eingeben");
        return false;
    }

    sessionStorage.setItem("tel", value);

    return true; // korrekte Eingabe
}



function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}
function setMessage2(value) {
    document.getElementById("message-2").innerText = value;
}
function setMessage3(value) {
    document.getElementById("message-3").innerText = value;
}
function setMessage4(value) {
    document.getElementById("message-4").innerText = value;
}
function setMessage5(value) {
    document.getElementById("message-5").innerText = value;
}
function setMessage6(value) {
    document.getElementById("message-6").innerText = value;
}
function setMessage7(value) {
    document.getElementById("message-7").innerText = value;
}
function setMessage8(value) {
    document.getElementById("message-8").innerText = value;
}






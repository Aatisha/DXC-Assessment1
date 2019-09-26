
function validate() {
    var UserId = document.getElementById("user-id");
    var password = document.getElementById("pass");
    var cpass = document.getElementById("cpass");
    var name = document.getElementById("name");
    var addr = document.getElementById("address");
    var country = document.getElementById("country");
    var zip = document.getElementById("zip");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var about = document.getElementById("about");
    // var CountryUser = country.options[country.selectedIndex];
    var letters = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/; 
    var languageCheckBox = document.getElementsByName("language");


    if (UserId.value == "" || UserId.value.trim() === "") {
        alert("UserID should be filled");
        UserId.focus();
        return false;
    }
    if ((UserId.value.length < 5) || (UserId.value.length > 12)) {
        alert("User ID must be of length 5-12");
        UserId.focus();
        return false;
    }


    if ((password.value.length < 7) || (password.value.length > 12)) {
        alert("Password should be of length 7-12");
        password.focus();
        return false;
    }
    if (password.value != cpass.value) {
        alert("Passwords don't match");
        cpass.focus();
        return false;
    }


    if (!name.value.match(letters)) {
        alert("Name Format Error");
        name.focus();
        return false;
    }
    
    var age = getAge(dob.value);
    if (age < 18) {
        alert("Age must be more than 18");
        dob.focus();
        return false;
    }

    if (addr.value == "" || addr.trim() === "") {
        addr.focus();
        alert("Address cannot be empty");
        return false;
    }


    if (isNaN(zip.value)) {
        alert("ZIP Code should be a number")
        zip.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (!(document.getElementById("male").checked || document.getElementById("female").checked)) {
        alert("Sex needs to be selected");
        return false;
    }

    var isLanguageSelected = false;
    for (var i = 0, l = languageCheckBox.length; i < l; i++) {
        if (languageCheckBox[i].checked) {
            isLanguageSelected = true;
            break;
        }
    }
    if (!isLanguageSelected) {
        alert("Select Language");
        return false;
    }

    if (about.value == "" || about.trim() === "") {
        about.focus();
        alert("Address cannot be empty");
        return false;
    }
}
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function TDate() {
    var UserDate = document.getElementById("dob").value;
    var ToDate = new Date();

    if (new Date(UserDate).getTime() >= ToDate.getTime()) {
        alert("The Date must be less or Equal to today date");
        return false;
    }
    return true;
}

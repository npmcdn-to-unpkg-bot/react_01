/**
 * Created by Yearwood on 17.8.16.
 */
function validateTheForm() {
    var fname = document.forms["RegisterForm"]["firstname"].value;
    var lname = document.forms["RegisterForm"]["lastname"].value;

    if (fname == null || fname == "") {
        alert("Please complete the form where highlighted red");
        return false;
    }
}

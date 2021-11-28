function readData() {
    var a=[];
    // name
    let name = document.getElementById("name").value;
    let checkname = /^[a-zA-Z- ]{3,50}$/;
    if (!checkname.test(name)) {
        alert("The name must be between 3 and 50 characters ( not including spaces).")
        return false;
    }
    // email
    let mail = document.getElementById("email").value;
    let checkmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,3})$/;
    if (!checkmail.test(mail)) {
        alert("You entered the wrong Mail format !");
        return false;
    }
     
    a.push("Dubmitted successfully");
    alert(a.join("\n"));
}

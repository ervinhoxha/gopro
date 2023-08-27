function reg(){
    var fullname1 = document.getElementById("fullname1").value;
    var email1 = document.getElementById("email1").value;
    var phone1 = document.getElementById("phone1").value;
    var message1 = document.getElementById("message1").value;
 
    if (fullname1 != "" && email1 != "" && phone1 != "" && message1 != "") {
       window.open("../index.html");
       window.close();
    }else{
       alert("Fill all");
    }
 }
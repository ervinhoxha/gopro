function reg(){
   var fullname = document.getElementById("fullname").value;
   var username1 = document.getElementById("username1").value;
   var email = document.getElementById("email").value;
   var password1 = document.getElementById("password1").value;

   if (fullname != "" && username1 != "" && email != "" && password1 != "") {
      window.open("../index.html");
      window.close();
   }else{
      alert("Fill all");
   }
}

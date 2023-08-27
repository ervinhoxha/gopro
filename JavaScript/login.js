
function log(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "admin" && password == "admin") {
      window.open("index.html");
      window.close();
   }else{
      alert("Fill all");
   }
}

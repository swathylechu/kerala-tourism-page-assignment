var user   = document.getElementById("user");
var password  = document.getElementById("password");

function validate(){
 if(user.value.trim()==""||password.value.trim()==""){
     alert("fields cannot be empty");
     return false;
 }
 else{
     //alert("welcome back to your space");
     return true;
 }

}
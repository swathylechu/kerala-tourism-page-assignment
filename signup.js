var user   = document.getElementById("user");
var email  = document.getElementById("email");
var error1 = document.getElementById("error1")
var mobile  = document.getElementById("mobile");
var pwd    = document.getElementById("pwd");
var cnfpwd = document.getElementById("cnfpwd");
const strengthmeter = document.getElementsByClassName("strength-meter");
const reason =document.getElementsByClassName("reason");
pwd.addEventListener('input',() =>{const weakness= calculatepwdstrength(password)})
//console.log(weakness);




function validate(){
    let regex= /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8}?)$/
    let regex2=(/^([0-9]+)\-([0-9]+)-([0-9{4,4}])$/ )|| /^([0-9]+)\.([0-9]+)\.([0-9{4,4}])$/ ||  /^([0-9]+)([0-9]+)([0-9{4,4}])$/
   
if(user.value.trim()==""){
        document.getElementById("reason1").innerHTML="***fields cannot be empty";
        //return false;
        
    }
  else  if ((user.value.trim().length<=2) || (user.value.length>=15)){
        document.getElementById("reason1").innerHTML="***username should be between 5-15 characters";
       // return false;

    }
   else if (!isNaN(user.value.trim())){
        document.getElementById("reason1").innerHTML="***only characters are allowed";
      //  return false;
    }

else if(email.value.trim()==""){
        document.getElementById("reason2").innerHTML="***fields cannot be empty";
       // return false;
    }

else if(regex.test(email.value.trim())!=(email.value.trim())){

    document.getElementById("reason2").innerHTML="***invalid";
    //return false;
    }
//mobile checking

 else if(mobile.value.trim()==""){
        document.getElementById("reason3").innerHTML="***fields cannot be empty";
      //  return false;
    }

else if(mobile.value.trim()>=10){
    document.getElementById("reason4").innerHTML="***mobile number should be 10 digit";
       // return false;
    }
else if(regex2.test(mobile.value.trim())!=(mobile.value.trim())){
    document.getElementById("reason4").innerHTML="***mobile number should be 10 digit";
    //return false;
    
}
else{
    return true;
}
//password validation//

if(pwd.value==""){
        document.getElementById("reason4").innerHTML="***fields cannot be empty";
        return false;
    }

 if(cnfpwd.value==""){
        document.getElementById("reason5").innerHTML="***fields cannot be empty";
        return false;
    }
if(pwd.value!=cnfpwd){
    document.getElementById("reason5").innerHTML="***passwords doesnt match";

}
}


//sgtrength meter//

function calculatepwdstrength(password){
    let s = 0;
    if(password.length > 6){
      s++;
    }
    if(password.length > 10){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector(".pw-meter #password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type","text");
      el.classList.add("active");
    }
  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
    strength = Math.max(strength,1);
    passwordStrengthSpans[1].style.width = strength*20 + "%";
    if(strength < 2){
      passwordStrengthSpans[0].innerText = "Weak";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#d13636";
    } else if(strength >= 2 && strength <= 4){
      passwordStrengthSpans[0].innerText = "Medium";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#e6da44";
    } else {
      passwordStrengthSpans[0].innerText = "Strong";
      passwordStrengthSpans[0].style.color = "#fff";
      passwordStrengthSpans[1].style.background = "#20a820";
    };
  });
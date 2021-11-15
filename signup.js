var user   = document.getElementById("user");
var email  = document.getElementById("email");
var error1 = document.getElementById("error1")
var mobile  = document.getElementById("mobile");
var pwd    = document.getElementById("pwd");
var cnfpwd = document.getElementById("cnfpwd");
const strengthmeter = document.getElementsByClassName("strength-meter");
const reason =document.getElementsByClassName("reason");
pwd.addEventListener('input',() =>{const weakness= calculatepwdstrength()})
console.log(weakness);




function validate(){
    let regex= /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8}?)$/
    let regex2=(/^([0-9]+)\-([0-9]+)-([0-9{4,4}])$/ )|| /^([0-9]+)\.([0-9]+)\.([0-9{4,4}])$/ ||  /^([0-9]+)([0-9]+)([0-9{4,4}])$/
   
if(user.value==""){
        document.getElementById("reason1").innerHTML="***fields cannot be empty";
        return false
        
    }
    if ((user.value.length<=2) || (user.value.length>=15)){
        document.getElementById("reason1").innerHTML="***username should be between 5-15 characters";
        return false

    }
    if (!isNaN(user.value)){
        document.getElementById("reason1").innerHTML="***only characters are allowed";
        return false
    }

if(email.value==""){
        document.getElementById("reason2").innerHTML="***fields cannot be empty";
        return false
    }

if(regex.test(email.value)!=(email.value)){

    document.getElementById("reason2").innerHTML="***invalid";
    return false
    }


 if(mobile.value==""){
        document.getElementById("reason3").innerHTML="***fields cannot be empty";
        return false
    }

if(mobile.value>=10){
    document.getElementById("reason4").innerHTML="***mobile number should be 10 digit";
        return false
    }
if(regex2.test(mobile.value)!=(mobile.value)){
    document.getElementById("reason4").innerHTML="***mobile number should be 10 digit";
    return false
    
}
//password validation//

if(pwd.value==""){
        document.getElementById("reason4").innerHTML="***fields cannot be empty";
        return false
    }

 if(cnfpwd.value==""){
        document.getElementById("reason5").innerHTML="***fields cannot be empty";
        return false
    }
if(pwd.value!=cnfpwd){
    document.getElementById("reason5").innerHTML="***passwords doesnt match";

}
}
function generateOTP (){
    let generateOTP=Math.floor(1000+Math.random()*80000);
    // console.log(generateOTP) ;
    window.localStorage.setItem("otp",generateOTP); 
    alert("OTP Generat Sucessfully: ");
}  

function validOtp (){
let validOtp=document.querySelector("#validOtp").value ;
let otp=window.localStorage.getItem("otp");  
var changecolor=document.getElementById("changecolor");

if (validOtp==otp)
{
    changecolor.textContent="Login Sucessfully "
    changecolor.style.color="darkgreen";
}
else {
    changecolor.textContent="OTP Not Match ! ";
    changecolor.style.color='red';
 } 
}  


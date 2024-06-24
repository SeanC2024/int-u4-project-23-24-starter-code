// JavaScript goes here.
let q1ButtonYes = document.querySelector(".Q1-yes");
let q1ButtonNo = document.querySelector(".Q1-no");
let angry;
let q2ButtonYes = document.querySelector(".Q2-yes");
let q2ButtonNo = document.querySelector(".Q2-no");
let happy;
let results = document.querySelector(".results");
let message = document.querySelector(".message");
// let responce Div = document.querySelector(".")

q1ButtonYes.addEventListener("click",function(){
document.querySelector(".Q1").style.display = "none";
document.querySelector(".Q2").style.display = "block";
angry="yes";
console.log (angry)
})

q1ButtonNo.addEventListener("click",function(){
    document.querySelector(".Q1").style.display = "none";
    document.querySelector(".Q2").style.display = "block";
    angry="no";
    console.log (angry)
})
    
q2ButtonYes.addEventListener("click",function(){
document.querySelector(".Q1").style.display = "none";
document.querySelector(".Q2").style.display = "none";
happy="yes";
console.log (happy)
})

q2ButtonNo.addEventListener("click",function(){
    document.querySelector(".Q1").style.display = "none";
    document.querySelector(".Q2").style.display = "none";
    happy="no";
    console.log (happy)
})

results.addEventListener("click",function(){
 if (angry === "yes" && happy === "yes" ){
    message.innerHTML = "you a lot to be around";
 }

 else if (angry === "yes" && happy === "no" ){
    message.innerHTML = "You are a angry not happy person, and probably nobody wants to be around you.";
 }

 else if (angry === "no" && happy === "yes" ){
    message.innerHTML = "You are a happy not angry person, theres a chance people love being around you";
 }

 else {
    message.innerHTML = "you are a vary boring person";
 }


});
    

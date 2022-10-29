document.getElementById("plus").style.display="none";
document.getElementById("minus").style.display="none";
document.getElementById("milti").style.display="none";
document.getElementById("division").style.display="none";
document.getElementById("percent").style.display="none";
document.getElementById("plusButton").addEventListener("click", function(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("plus").style.display="flex";
    document.getElementById("minus").style.display="none";
    document.getElementById("milti").style.display="none";
    document.getElementById("division").style.display="none";
    document.getElementById("percent").style.display="none";
})
document.getElementById("minusButton").addEventListener("click", function(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="flex";
    document.getElementById("milti").style.display="none";
    document.getElementById("division").style.display="none";
    document.getElementById("percent").style.display="none";
})
document.getElementById("multiplayButton").addEventListener("click", function(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("milti").style.display="flex";
    document.getElementById("division").style.display="none";
    document.getElementById("percent").style.display="none";
})
document.getElementById("devisionButton").addEventListener("click", function(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("milti").style.display="none";
    document.getElementById("division").style.display="flex";
    document.getElementById("percent").style.display="none";
})
document.getElementById("persentButton").addEventListener("click", function(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("milti").style.display="none";
    document.getElementById("division").style.display="none";
    document.getElementById("percent").style.display="flex";
})
document.getElementById("plusBack").addEventListener("click", function(){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("plus").style.display="none";
})
document.getElementById("minusBack").addEventListener("click", function(){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("minus").style.display="none";
})
document.getElementById("miltiBack").addEventListener("click", function(){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("milti").style.display="none";
})
document.getElementById("divisionBack").addEventListener("click", function(){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("division").style.display="none";
})
document.getElementById("percentBack").addEventListener("click", function(){
    document.getElementById("buttons").style.display="flex";
    document.getElementById("percent").style.display="none";
})

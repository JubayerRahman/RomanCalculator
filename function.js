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
// the sum section

document.getElementById("plusSubmit").addEventListener("click", function(){
    let num1 = document.getElementById("PlusNum1").value;
    let num2 = document.getElementById("PlusNum2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(num1<=0 || num2<=0){
        document.getElementById("plusSubmit").style.display="none";
        return alert("Enter Valid numbers")
    }
    else{
    let plusresult = num1+ num2;
    document.getElementById("plusRsult").innerHTML = "Result: "+ plusresult;
    let romanResult = "";
    while(plusresult > 0){
        if(plusresult < 4){
            romanResult += "I";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1;
        }
        else if(plusresult == 4){
            romanResult +="IV";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=4;
        }
        else if(plusresult >= 5 && plusresult < 9){
            romanResult += "V";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=5;
        }
        else if (plusresult ==9){
            romanResult += "IX";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=9;
        }
        else if (plusresult >=10 && plusresult < 40){
            romanResult += "X";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=10;
        }
        else if (plusresult >=40 && plusresult < 50){
            romanResult += "XL";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=40;
        }
        else if (plusresult >=50 && plusresult < 90){
            romanResult += "L";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=50;
        }
        else if (plusresult >=90 && plusresult < 100){
            romanResult += "XC";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=90;
        }
        else if (plusresult >=100 && plusresult < 500){
            romanResult += "C";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=100;
        }
        else if (plusresult >=500 && plusresult < 900){
            romanResult += "D";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=900 && plusresult < 1000){
            romanResult += "CM";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=1000){
            romanResult += "M";
            document.getElementById("plusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1000;
        }
        else{
        plusresult -=1;
        }
    }
    return plusresult;
    }
})

document.getElementById("minusSubmit").addEventListener("click", function(){
    let num1 = document.getElementById("minusNum1").value;
    let num2 = document.getElementById("minusNum2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(num1<=0 || num1 < num2){
        return alert("Enter Valid numbers")
    }
    else{
    let plusresult = num1 - num2;
    document.getElementById("minusRsult").innerHTML = "Result: "+ plusresult;
    let romanResult = "";
    while(plusresult > 0){
        if(plusresult < 4){
            romanResult += "I";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1;
        }
        else if(plusresult == 4){
            romanResult +="IV";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=4;
        }
        else if(plusresult >= 5 && plusresult < 9){
            romanResult += "V";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=5;
        }
        else if (plusresult ==9){
            romanResult += "IX";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=9;
        }
        else if (plusresult >=10 && plusresult < 40){
            romanResult += "X";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=10;
        }
        else if (plusresult >=40 && plusresult < 50){
            romanResult += "XL";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=40;
        }
        else if (plusresult >=50 && plusresult < 90){
            romanResult += "L";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=50;
        }
        else if (plusresult >=90 && plusresult < 100){
            romanResult += "XC";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=90;
        }
        else if (plusresult >=100 && plusresult < 500){
            romanResult += "C";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=100;
        }
        else if (plusresult >=500 && plusresult < 900){
            romanResult += "D";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=900 && plusresult < 1000){
            romanResult += "CM";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=1000){
            romanResult += "M";
            document.getElementById("minusRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1000;
        }
        else{
        plusresult -=1;
        }
    }
    return plusresult;
    }
})

document.getElementById("miltiSubmit").addEventListener("click", function(){
    let num1 = document.getElementById("miltiNum1").value;
    let num2 = document.getElementById("miltiNum2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(num1<=0 && num2 <= 0){
        document.getElementById("miltiSubmit").style.display="none";
        return alert("Enter Valid numbers")
    }
    else{
    let plusresult = num1 * num2;
    document.getElementById("miltiRsult").innerHTML = "Result: "+ plusresult;
    let romanResult = "";
    while(plusresult > 0){
        if(plusresult < 4){
            romanResult += "I";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1;
        }
        else if(plusresult == 4){
            romanResult +="IV";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=4;
        }
        else if(plusresult >= 5 && plusresult < 9){
            romanResult += "V";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=5;
        }
        else if (plusresult ==9){
            romanResult += "IX";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=9;
        }
        else if (plusresult >=10 && plusresult < 40){
            romanResult += "X";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=10;
        }
        else if (plusresult >=40 && plusresult < 50){
            romanResult += "XL";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=40;
        }
        else if (plusresult >=50 && plusresult < 90){
            romanResult += "L";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=50;
        }
        else if (plusresult >=90 && plusresult < 100){
            romanResult += "XC";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=90;
        }
        else if (plusresult >=100 && plusresult < 500){
            romanResult += "C";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=100;
        }
        else if (plusresult >=500 && plusresult < 900){
            romanResult += "D";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=900 && plusresult < 1000){
            romanResult += "CM";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=1000){
            romanResult += "M";
            document.getElementById("miltiRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1000;
        }
        else{
        plusresult -=1;
        }
    }
    return plusresult;
    }
})

document.getElementById("divisionSubmit").addEventListener("click", function(){
    let num1 = document.getElementById("divisionNum1").value;
    let num2 = document.getElementById("divisionNum2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(num1<=0 ||num2<=0 || num1>num2){
        document.getElementById("divisionSubmit").style.display="none";
        return alert("Enter Valid numbers")
    }
    else{
    let plusresult = num1 / num2;
    document.getElementById("divisionRsult").innerHTML = "Result: "+ plusresult;
    let romanResult = "";
    while(plusresult > 0){
        if(plusresult < 4){
            romanResult += "I";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1;
        }
        else if(plusresult == 4){
            romanResult +="IV";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=4;
        }
        else if(plusresult >= 5 && plusresult < 9){
            romanResult += "V";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=5;
        }
        else if (plusresult ==9){
            romanResult += "IX";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=9;
        }
        else if (plusresult >=10 && plusresult < 40){
            romanResult += "X";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=10;
        }
        else if (plusresult >=40 && plusresult < 50){
            romanResult += "XL";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=40;
        }
        else if (plusresult >=50 && plusresult < 90){
            romanResult += "L";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=50;
        }
        else if (plusresult >=90 && plusresult < 100){
            romanResult += "XC";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=90;
        }
        else if (plusresult >=100 && plusresult < 500){
            romanResult += "C";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=100;
        }
        else if (plusresult >=500 && plusresult < 900){
            romanResult += "D";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=900 && plusresult < 1000){
            romanResult += "CM";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=1000){
            romanResult += "M";
            document.getElementById("divisionRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1000;
        }
        else{
        plusresult -=1;
        }
    }
    return plusresult;
    }
})

document.getElementById("percentSubmit").addEventListener("click", function(){
    let num1 = document.getElementById("percentNum1").value;
    let num2 = document.getElementById("percentNum2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(num1<=0 && num1 < num2 ){
        document.getElementById("percentSubmit").style.display="none";
        return alert("Enter Valid numbers")
    }
    else{
    let plusresult = (num1/100)*num2;
    document.getElementById("percentRsult").innerHTML = "Result: "+ plusresult;
    let romanResult = "";
    while(plusresult > 0){
        if(plusresult < 4){
            romanResult += "I";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1;
        }
        else if(plusresult == 4){
            romanResult +="IV";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=4;
        }
        else if(plusresult >= 5 && plusresult < 9){
            romanResult += "V";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=5;
        }
        else if (plusresult ==9){
            romanResult += "IX";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=9;
        }
        else if (plusresult >=10 && plusresult < 40){
            romanResult += "X";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=10;
        }
        else if (plusresult >=40 && plusresult < 50){
            romanResult += "XL";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=40;
        }
        else if (plusresult >=50 && plusresult < 90){
            romanResult += "L";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=50;
        }
        else if (plusresult >=90 && plusresult < 100){
            romanResult += "XC";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=90;
        }
        else if (plusresult >=100 && plusresult < 500){
            romanResult += "C";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=100;
        }
        else if (plusresult >=500 && plusresult < 900){
            romanResult += "D";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=900 && plusresult < 1000){
            romanResult += "CM";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=500;
        }
        else if (plusresult >=1000){
            romanResult += "M";
            document.getElementById("percentRomanRsult").innerHTML = "Roman Result: "+ romanResult;
            plusresult -=1000;
        }
        else{
        plusresult -=1;
        }
    }
    return plusresult;
    }
})

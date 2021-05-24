function compute() {
    
    //initializing variables in the function
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    
    // Converts 'No of years' into actual year
    var futureyear = parseInt(years) + 2020
    var result = document.getElementById("result");
    
    // Inner.HTML with breaks and highlights
    if(principal >0){
    result.innerHTML = "If you deposit <span class='highlight'>"+ principal + "</span> ,<br> at an interest rate of <span class='highlight'>" + rate + "</span>% <br> You will receive an amount of <span class='highlight'>" + interest + "</span>, <br> in the year <span class='highlight'>" + futureyear +"</span>" 
    }
    else{ 
    // Validation showing alert if input is either zero or a negative number
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    
      } 
    }
 // Changes the adjacent value as slider is dragged   
function setSlider() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rate + "%";
 }   
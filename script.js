function submit(){
    
    let rate=document.getElementById("rt").value 
    let time=document.getElementById("years").value 
    let princi=document.getElementById("principle").value 
    let dateNow = new Date();
    let yearNow = parseInt(dateNow.getFullYear()) + parseInt(time);
    
    if (princi<=0){
        alert("please enter positive number")
    }
    else if (princi==" "){
        alert("pleae enter positive number")
    }
    else {
        let simple=( rate * princi * time )/100
        var resultDisplay = document.getElementById("result");
        resultDisplay.innerHTML= "If you deposit:-" +'<mark>'  + princi + '</mark>'  +  "<br> at an interest rate of:-" + '<mark>' + rate + '</mark>' +",<br> for duration of:-"+'<mark>'+time+ '</mark>'+ "<br> You will receive an amount of:-" + '<mark>' + simple +"<br> in the year:" + '</mark>' + '<mark>'+ yearNow + '</mark>' ;


    }
    
}


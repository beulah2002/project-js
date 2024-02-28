function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid height and weight.";
        return;
    }

    var bmi = parseInt(weight / ((height / 100) ** 2));
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
   
    if(bmi <18.6){
         result.innerHTML='under weight: '+ bmi;
        }else if(bmi >=18.6 && bmi<24.9){
         result.innerHTML='normal:'+bmi;

        }else{
         result.innerHTML='over weight:'+ bmi;
    }
    
}
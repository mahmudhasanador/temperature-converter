const temperatureInput = document.getElementById('tempInput');
// console.log(temperatureInput);

const selectedConversion = document.getElementById('conversion-select');
// console.log(selectedConversion);

const convertButton = document.getElementById('convertBtn');
// console.log(convertButton);

const showResult = document.getElementById('result');
// console.log(showResult);


let tempValue;
let selectedConversionValue;
let C, F, K;
selectedConversionValue = selectedConversion.value;
// console.log(selectedConversionValue);


temperatureInput.addEventListener('keyup', function(e){
    tempValue = parseFloat(e.target.value);
    // console.log(tempValue);
})

selectedConversion.addEventListener('change',function(){
    selectedConversionValue = selectedConversion.value;
    // console.log(selectedConversionValue);
    
})

convertButton.addEventListener('click',function(){
    showResult.classList.remove('result1', 'result2');
if(isNaN(tempValue)){
    showResult.innerHTML = `Enter valid input`; 
    showResult.classList.add('result2');

}else{
    if(selectedConversionValue.startsWith("Celsius") && selectedConversionValue.endsWith("Fahrenheit")){
        C = tempValue;
        F = ((9*C)/5)+32;
        F = F.toFixed(2);
        // console.log(F);
        showResult.innerHTML = `${C} degree celsius is equivalent to ${F} degree Fahrenheit`;
        showResult.classList.add('result1');
    }
    else if(selectedConversionValue.startsWith("Celsius") && selectedConversionValue.endsWith("Kelvin")){
        C = tempValue;
        K = C+273;
        K = K.toFixed(2);
        // console.log(K);
        showResult.innerHTML = `${C} degree celsius is equivalent to ${K} Kelvin`;
        showResult.classList.add('result1');
    }
    else if(selectedConversionValue.startsWith("Fahrenheit") && selectedConversionValue.endsWith("Celsius")){
        F = tempValue;
        C = (5*(F-32))/9;
        C = C.toFixed(2);
        // console.log(C);
        showResult.innerHTML = `${F} degree Fahrenheit is equivalent to ${C} degree Celsius`;
        showResult.classList.add('result1');
    }
   else if(selectedConversionValue.startsWith("Fahrenheit") && selectedConversionValue.endsWith("Kelvin")){
        F = tempValue;
        K = ((5*(F-32))/9)+273;
        K = K.toFixed(2);
        // console.log(K);
        showResult.innerHTML = `${F} degree Fahrenheit is equivalent to ${K} Kelvin`;
        showResult.classList.add('result1');
    }
   else if(selectedConversionValue.startsWith("Kelvin") && selectedConversionValue.endsWith("Celsius")){
        K = tempValue;
        C = K-273;
        C = C.toFixed(2);
        // console.log(C);
        showResult.innerHTML = `${K} Kelvin is equivalent to ${C} degree Celsius`;
        showResult.classList.add('result1');
    }
    else if(selectedConversionValue.startsWith("Kelvin") && selectedConversionValue.endsWith("Fahrenheit")){
        K = tempValue;
        F = ((9*(K-273))/5)+32;
        F = F.toFixed(2);
        // console.log(F);
        showResult.innerHTML = `${K} Kelvin is equivalent to ${F} degree Fahrenheit`;
        showResult.classList.add('result1');
    }
   
}
})
const inputs = document.getElementById("input1")
let toFahrenheit = document.getElementById("toFahrenheit")
let tocelsius = document.getElementById('tocelsius')
let result =document.getElementById("result")
let temp;
function sub() {
    if (toFahrenheit.checked) {
       temp = Number(inputs.value)
       temp = temp * 9 / 5 + 32;
       result.innerHTML=temp.toFixed(1) + "°F"
    }else if(tocelsius.checked){
      temp = Number(inputs.value)
      temp = (temp - 32) *(5/9)
      result.innerHTML=temp.toFixed(1) + "°C"
    }else{
      result.innerHTML = "select a unit"
    }
}

    
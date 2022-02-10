let display = document.querySelector(".display")
let buttons = document.querySelectorAll(".btn")
let clear = document.querySelector(".btn-clear")
let equal = document.querySelector(".btn-equal")

buttons.forEach(function(button){
  button.addEventListener("click", function(e){
    let value = e.target.dataset.num
    display.value += value
  })
})

equal.addEventListener("click", function(e){
  if(display.value === ""){
    display.value = "Enter Number"
  }else{
    let result = calculator(display.value)
    display.value = result
  }
})

clear.addEventListener("click", function(e){
  display.value = ""
})

function calculator(string) {
  let calculation = string.split(/\b\s*([+\/*-])\s*/)
  const expression = calculation[1]
  switch(expression) {
      case "*":
          return parseInt(calculation[0])*parseInt(calculation[2])
          break;
      case "/":
          return parseInt(calculation[0])/parseInt(calculation[2])
          break;
      case "+":
          return parseInt(calculation[0])+parseInt(calculation[2])
          break;
      case "-":
          return parseInt(calculation[0])-parseInt(calculation[2])
          break;
      default:
          return (`Error ${string} contains an invalid operation.`)
  }
}
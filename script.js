const screen = document.getElementById("screen")
let firstNumber = 0
const plussBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const timesBtn = document.getElementById("times")
const divideBtn = document.getElementById("divide")
const numButtons = document.querySelectorAll(".num")
const clearBtn = document.getElementById("clear")
const equalsBtn = document.getElementById("equals") 
const rootBtn = document.getElementById("root")
const percentBtn = document.getElementById("percent")
const degreeBtn = document.getElementById("degree")
const dotBtn = document.getElementById("dot")
let operator = "";
plussBtn.addEventListener("click",() => operators("+"))
minusBtn.addEventListener("click", ()=>operators("-"))
timesBtn.addEventListener("click",() => operators("*"))
divideBtn.addEventListener("click",() => operators("/"))
rootBtn.addEventListener("click",() => squareRoot("√"))
degreeBtn.addEventListener("click",() => operators("n^"))
percentBtn.addEventListener("click",() => percentFn("%"))
dotBtn.addEventListener("click",() => pressNumber("."))
let called = false
const pressNumber = (num)=>{
    if(called){
    screen.textContent = num
    called = false
    return
}
    if(num ==="." && screen.textContent.includes(".")){
        return 
}if ( screen.textContent==="0" && num !== "."){
    screen.textContent = num
}else{
    screen.textContent += num
}
}
function clearScreen(){
    screen.textContent = '0'
    firstNumber = 0
    secondNumber = 0
    operator = ""
}
function operators(op){       
        firstNumber = Number(screen.textContent)
        operator = op
        screen.textContent = "0"
}
const squareRoot = () =>{
    const num = Number(screen.textContent)
    if(num<0){
        screen.textContent = "ошибка"
        called=true
        return
    }
    screen.textContent = Math.sqrt(num)
    called = true
}
const percentFn = () =>{
    const num = Number(screen.textContent)
    if(operator ==="+" || operator ==="-"){
        screen.textContent = firstNumber * num/100 
    }else{
        screen.textContent = num / 100
    }
    called = true
}
const calculate = () =>{
        const secondNumber = Number(screen.textContent)
        let result = 0
        if (operator===''){
            return
        }
        if(operator === "+"){
        result = firstNumber + secondNumber
    }else if(operator ==="-"){
        result = firstNumber - secondNumber
    }else if(operator ==="*"){
        result =firstNumber * secondNumber
    }else if(operator ==="/"){
        if(secondNumber=== 0 ){
            screen.textContent = 'ошибка'
            called= true
            return
        }
        result = firstNumber / secondNumber
    }else if(operator==="n^"){
        result = firstNumber **secondNumber
    }    
    screen.textContent = result
    called = true
}
numButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        const value =  button.getAttribute("data-val")
        pressNumber(value)
    })
});
equalsBtn.addEventListener("click",calculate)
clearBtn.addEventListener("click", clearScreen)
const random =(a,b) => Math.random() * (b-a) + a 
const sakura = document.getElementById('sakura')
for(let i = 0;i<30;i++){
    const petal = document.createElement('div')
    petal.classList.add("petal")
    petal.style.animationDuration= random(6,12) + "s"
    petal.style.animationDelay = random(0,10) + 's'
    petal.style.width = random(9,18) + "px"
    petal.style.height = random(9,18) + "px"
    petal.style.left = random(0,100) + "%"
    sakura.appendChild(petal)
}

const incrementar = document.querySelector(".incremento");
const decrementar = document.querySelector(".decremento");
const reset = document.querySelector(".reset");
var contador = document.querySelector(".contador");
var currentNumber = 0;

incrementar.addEventListener("click",()=>{
  currentNumber = currentNumber+1;
  contador.innerHTML = currentNumber
});

decrementar.addEventListener("click",()=>{
  currentNumber = currentNumber -1;
  contador.innerHTML = currentNumber
})

reset.addEventListener("click",()=>{
  contador.innerHTML=0
  currentNumber = 0;
})
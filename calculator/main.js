let number1 = ''
let number2 = ''
let operator = null

const n0 = document.querySelector('#zero')
const n1 = document.querySelector('#one')
const n2 = document.querySelector('#two')
const n3 = document.querySelector('#three')
const n4 = document.querySelector('#four')
const n5 = document.querySelector('#five')
const n6 = document.querySelector('#six')
const n7 = document.querySelector('#seven')
const n8 = document.querySelector('#eight')
const n9 = document.querySelector('#nine')

const display = document.querySelector('.display')

function handleNumberClick(event) {
  const number = event.target.value
  if (operator === null) {
    number1 += number
    display.textContent = number1
  } else {
    number2 += number
    display.textContent = number2
  }
}

function handleOperatorClick(event) {
  operator = event.target.value
}

function handleClearClick() {
  number1 = ''
  number2 = ''
  operator = null
  display.textContent = 'INSERT'
}

function handleEqualsClick() {
  let result
  const n1 = parseFloat(number1)
  const n2 = parseFloat(number2)
  switch (operator) {
    case '+':
      result = n1 + n2
      break
    case '-':
      result = n1 - n2
      break
    case '*':
      result = n1 * n2
      break
    case '/':
      result = n1 / n2
      break
  }
  display.textContent = result
  number1 = result.toString()
  number2 = ''
  operator = null
}

n0.addEventListener('click', handleNumberClick)
n1.addEventListener('click', handleNumberClick)
n2.addEventListener('click', handleNumberClick)
n3.addEventListener('click', handleNumberClick)
n4.addEventListener('click', handleNumberClick)
n5.addEventListener('click', handleNumberClick)
n6.addEventListener('click', handleNumberClick)
n7.addEventListener('click', handleNumberClick)
n8.addEventListener('click', handleNumberClick)
n9.addEventListener('click', handleNumberClick)
document.querySelector('#clr').addEventListener('click', handleClearClick)
document.querySelector('#sum').addEventListener('click', handleOperatorClick)
document.querySelector('#minus').addEventListener('click', handleOperatorClick)
document.querySelector('#plus').addEventListener('click', handleOperatorClick)
document.querySelector('#divided').addEventListener('click', handleOperatorClick)
document.querySelector('#equal').addEventListener('click', handleEqualsClick)

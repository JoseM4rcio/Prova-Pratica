const currencyOneEl = document.querySelector ('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector ('[data-js="currency-two"]')

const url = ' https://v6.exchangerate-api.com/v6/dba49a3b94ca7739dc08c65e/latest/USD'

const option = `<option>oi</option>`

currencyOneEl.innerHTML = option
currencyTwoEl.innerHTML = option

console.log()
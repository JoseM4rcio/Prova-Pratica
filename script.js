const valorReal = document.getElementById("valor_real");
const cambioDolar = document.getElementById("cambio_dolar");
const cambioEuro = document.getElementById("cambio_euro");
const cambioLibra = document.getElementById("cambio_libra");
const buttonConvert = document.getElementById("converter_btn");
let valorDolar = document.getElementById("valor_dolar");
let valorEuro = document.getElementById("valor_euro");
let valorLibra = document.getElementById("valor_libra");

function limpar () {
    valorDolar.style.display="none";
    valorDolar.innerHTML = ``;   
    valorEuro.style.display="none"; 
    valorEuro.innerHTML = ``; 
    valorLibra.style.display="none"; 
    valorLibra.innerHTML = ``;  
}

function converter() {
    const real = parseFloat(valorReal.value);
    const cotacao_dolar = parseFloat(cambioDolar.value);
    const cotacao_euro = parseFloat(cambioEuro.value);
    const cotacao_libra = parseFloat(cambioLibra.value);

    var dolar = real * cotacao_dolar;
    var euro = real * cotacao_euro;
    var libra = real * cotacao_libra;

    valorDolar.innerHTML = `<p> R$${real} é igual à US$${dolar}</p>`;   
    valorEuro.innerHTML = `<p> R$${real} é igual à €${euro}</p>`; 
    valorLibra.innerHTML = `<p> R$${real} é igual à €${libra}</p>`;  

}


buttonConvert.addEventListener("click", converter);
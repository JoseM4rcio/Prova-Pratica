
    brl.onchange=function(){
		if(brl.value == "Estados Unidos, Dollar (USD)")
			converte.value = eur
		else
			p2.value = "Estados Unidos, Dollar (USD)"
	}

	p2.onchange=function(){
		if(p2.value == "Brasil, Real (BRL)")
			p1.value = "Estados Unidos, Dollar (USD)"
		else
			p1.value = "Brasil, Real (BRL)"
	}

        function gerar() {
        var txt1 = window.document.querySelector('input#pequena')
        var res = window.document.querySelector('div#conversoJanela')  
        var tx = (txt1.value)
        var convert = tx * 5.52
        var dec = convert.toFixed(2)
        if(p1.value == "Estados Unidos, Dollar (USD)")
        conversoJanela.innerHTML =(`<strong> ${tx} USD = ${dec} BRL </strong>`)
        else
        var invert = tx * 0.18
        var dec = invert.toFixed(2)
        conversoJanela.innerHTML =(`<strong> ${tx} BRL = ${dec} USD </strong>`)

        }        

var timeee = window.document.querySelector('p#timee')  
// Obtém a data/hora atual
var data = new Date();
// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/0' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
//alert('Hoje é ' + str_data + ' às ' + str_hora);


var data = new Date();
var dias = new Array(
 'domingo','segunda','terça','quarta','quinta','sexta','sábado'
);
timeee.innerHTML = (`Hoje é ${dias[data.getDay()]} ${str_data} às ${str_hora}`)
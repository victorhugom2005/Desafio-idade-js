//Converter anos em dias 
calculo();

function calculo(dias){
    var dias = parseInt(prompt("Qual a sua idade?") * 365);
    if (Number.isNaN(dias)){
        alert("Isto não é um número");
        calculo();
    } else {
        alert(`${dias} dias`);
    }    
}

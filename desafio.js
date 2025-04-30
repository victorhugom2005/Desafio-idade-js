//Converter anos em dias 
let resultado = parseInt(prompt("Qual a sua idade?") * 365);
if (Number.isNaN(resultado)){
    alert("C é imbecil caraio?")
} else {
    alert(`${resultado} dias`);
}


function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
 }
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    console.log(resultado)
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
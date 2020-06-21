var primos = new Array;
//Valida que el número ingresado sea un número 
do{
    var numero = prompt("Escribe un número entero mayor a 1.");
    numero = parseInt(numero);
} while(isNaN(numero) == true || numero <= 1);
//Recorre los números hasta llegar al que se ingresó
for(var actual=2; actual <= numero; actual++){
    var ant = 2;
    var primito = true;
    //Checa si es primo o no y si no lo es, sale
    do{
        //Si i se divide entre el número anterior, no es primo
        if(actual%ant == 0 && actual != ant)
            primito = false;
        ant++;
    } while (ant < actual && primito == true)
    //Añade los factores primos al arreglo
    if(primito == true && numero%actual == 0)
        primos.push(actual);
}
alert("Los factores primos de "+ numero + " son " + primos + ".");
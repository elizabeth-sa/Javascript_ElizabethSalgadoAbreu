//Valida que los tres registros sean números
do{
    var gama = prompt("¿En qué piso se encuentra Gama?");
} while(isNaN(gama) == true);
do{
    var A = prompt("¿En qué piso está el elevador A?");
} while(isNaN(A) == true);
do{
    var B = prompt("¿En qué piso está el elevador B?");
} while(isNaN(B) == true);
//Realiza operaciones que revisan el elevador más cercano y lo indica
if(Math.abs(gama-A) > Math.abs(gama-B))
    alert("Gama, el elevador más cercano a ti es el B.");
else if(Math.abs(gama-A) < Math.abs(gama-B))
    alert("Gama, el elevador más cercano a ti es el A.");
else
    alert("Gama, ambos elevadores están a la misma distancia de ti.");
alert("La dinamica será la siguiente, si el numero es mayor o igual a 100 y menor o igual a 200, se imprimira el numero escrito en la consola y si es menor no sera impreso");

const numero = prompt("Ingrese un numero por favor");

if (numero==""){
    alert("El campo esta vacio");
} else if(numero >= 100 && numero<=200){
    console.log("El numero es igual a " +numero);
    alert("Muchas gracias, que tenga un buen día");
} else {
    console.log("El numero es menor a 100 o mayor a 200, por lo tanto no puede ser impreso");
    alert("Muchas gracias, que tenga un buen día");
}

let ingresoPrecio;
let sumaPrecios = 0;
let iva;
let resultado;

function ingresoPrecios(){
    ingresoPrecio = parseInt(prompt("Ingresa el precio del producto"))
    console.log(ingresoPrecio);
}

function sumaPrecio() {
    sumaPrecios = sumaPrecios + ingresoPrecio;
    console.log(sumaPrecios);
}

function sumaIva() {
    iva = sumaPrecios * 0.21;
    console.log(iva);
}

function total(){
    resultado = iva + sumaPrecios;
}

alert("Vamos a calcular el precio final de tus productos")
let cant = parseInt(prompt("Ingresa la cantidad de productos que deseas calcular"))

if (cant == 1) {
    ingresoPrecio();
    sumaPrecio();
    sumaIva();
    total();
    alert("El precio final del producto es: " + resultado)
    console.log(resultado);
} else if(cant > 1){
    for (let i = 0; i < cant; i++) {
        ingresoPrecios();
        sumaPrecio();
        sumaIva();
        total();
    }
    alert("El precio final de los productos es: " + resultado)
    console.log(resultado);
}
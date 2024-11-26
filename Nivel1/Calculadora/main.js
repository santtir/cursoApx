const operaciones= require("./operaciones");

function main(){
    const operacionParseada= parsearTerminos(porcess.argv[2]);
    const resultado=ejecutarOperacion(operacionParseada);

}

function ejecutarOperacion(objOperacion){
    const mapa ={
        "+":operaciones.sumar,
        "-":operaciones.restar,
        "/":operaciones.dividir,
        "*":operaciones.multiplicar,
    };
}


function parsearTerminos(texto){
    //mock
    return{
        primerTermino:12,
        segundoTermino:89,
        operacion:"+",
    };
}

main();

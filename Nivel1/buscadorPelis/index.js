const { getAllPelis, getPelisOrdenadas, buscarPeli, getPeliPorTag } = require('./pelis.js');

const args =process.argv.slice(2);


function procesarArgs() {
    if (args.length === 0) {
        
        console.log(getAllPelis());  
        return;
    }

    const accion = args[0];  
    const parametro = args[1];  


    if (accion === '--sort') {
        if (!parametro) {
            console.log('Por favor, ingresa el nombre de la propiedad para ordenar (por ejemplo, title o rating).');
            return;
        }
        const orden = (a, b) => a[parametro] > b[parametro] ? 1 : -1;
        console.table(getPelisOrdenadas(orden));  
        return;
    }

    
    if (accion === '--search') {
        if (!parametro) {
            console.log('Por favor, ingresa el texto para buscar en los títulos.');
            return;
        }
        console.log(buscarPeli(parametro));  
        return;
    }

    if (accion === '--tag') {
        if (!parametro) {
            console.log('Por favor, ingresa un tag para buscar.');
            return;
        }
        console.table(getPeliPorTag(parametro));
        return;
    }

    console.log('Acción no reconocida. Usa: --sort, --search o --tag.');
}

procesarArgs();

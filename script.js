let nOper = 0;
let sumaTotal = 0;
let gMayor = 0;
let gMenor = Infinity;
let repe ;
let precioFinal;
let precioIVA;


do {
    const precio = parseInt(window.prompt("Introduce el precio del producto: "));
    const unidad = parseInt(window.prompt("Introduce las unidades de producto: "));

    function calcularImporte() {

        precioFinal = precio * unidad;

        if (precioFinal >= 50 && precioFinal < 100) {
            precioFinal *= 0.95;
        } else if (precioFinal >= 100 && precioFinal < 200) {
            precioFinal *= 0.90;
        } else if (precioFinal >= 200) {
            precioFinal *= 0.85;
        }

        return precioFinal;
    }

    function calcularIVA() {

        precioFinal = calcularImporte();

        precioIVA = precioFinal + precioFinal * 0.21;

        return precioIVA;
    }

    if (precio >= 0 && unidad >= 0) {
        precioIVA = calcularIVA();

        sumaTotal = sumaTotal + precioIVA;

        if (precioIVA < gMenor) {
            gMenor = precioIVA;
        }
        if (precioIVA > gMayor) {
            gMayor = precioIVA;
        }

        nOper++;

        repe = window.confirm("Desea realizar otra operacion?");
    } else {
        console.log("Introduce valores validos");
        repe = true;
    }
} while (repe == true);



console.log(`Has realizado un total de ${nOper} operaciones: 
  <>  Gasto total: ${sumaTotal} € 
  <>  Gasto medio: ${sumaTotal / nOper} € 
  <>  Gasto mayor: ${gMayor} €
  <>  Gasto menor: ${gMenor} €`);
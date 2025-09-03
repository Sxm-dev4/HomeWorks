// Función regular
function esParOImparRegular(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

// Función flecha
const esParOImparFlecha = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
};

esParOImparFlecha(4); // "El número es par"
esParOImparRegular(7); // "El número es impar"
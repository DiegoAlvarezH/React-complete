
const nombre = 'Diego';
const apellido = 'Alvarez'

// const nombreCompleto = nombre + ' ' + apellido;
//backticks tambien toman los saltos de linea
const nombreCompleto = `Hola ${ nombre } ${ apellido } `

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(` Este es un texto: ${getSaludo(nombre)}`);
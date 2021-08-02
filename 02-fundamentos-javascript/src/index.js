// funciones en JS
const saludar = function(nombre) {
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

// saludar = 30;
console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));

const getUser = () => ({
    uid: 'A1223123312',
    username: 'Dieho'
});

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: '4243234234',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Alejandro');
console.log(usuarioActivo);
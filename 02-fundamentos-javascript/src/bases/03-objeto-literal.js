//las llaves siempre son un objeto
//__proto__ es el adn, propiedades que vienen por defecto
const persona = {
    nombre: 'tony',
    Apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 42234234234,
        lat: 14.3223232,
        lng: 12.21321
    }
};
//creando un nuevo objeto

//operador spreat
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
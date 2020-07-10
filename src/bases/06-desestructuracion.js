const persona = {
  nombre: "Fernando",
  edad: 27,
  clave: "iron Man",
};

console.log(persona.nombre);

const { nombre: nombre2 } = persona;

console.log(nombre2);

const persona1 = ({ edad, clave }) => {
  return {
    nombreClave: clave,
    anio: edad,
    latlng: {
      lat: 1234,
      lng: -1234,
    },
  };
};

console.log(persona1(persona));

const {
  nombreClave,
  anio,
  latlng: { lat, lng },
} = persona1(persona);

console.log(nombreClave, anio);
console.log(lat, lng);

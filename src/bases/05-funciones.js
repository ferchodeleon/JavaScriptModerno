const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

//Funciones de flecha o arrow function

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

//Forma de declarar una función con un objeto
const getUser = function () {
  return {
    uId: "abc123",
    userName: "El_pinta123",
  };
};

//Forma de declarar una función con un objeto pero arrowFunction
const getUser2 = () => ({
  uId: "user",
  userName: "nombre",
});

function getUsuarioActivo(nombre) {
  return {
    uId: "ABC567",
    nombre: nombre,
  };
}
const getUsuarioActivo2 = (nombre) => ({ uId: "ABC567", nombre: nombre });

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar3(30));
console.log(getUser());
console.log(getUser2());
const usuarioActivo = getUsuarioActivo("fernando");
console.log(usuarioActivo);
console.log(getUsuarioActivo2("Alberto"));
getUsuarioActivo2.nombre = "alberto";
console.log(getUsuarioActivo2.nombre);

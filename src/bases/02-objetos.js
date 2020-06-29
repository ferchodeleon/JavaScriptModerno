const nombre = "Fernando";
const apellido = "De Leon";

// const nombreCompleto = ` ${nombre} ${apellido} `;

const persona = {
  nombre: "Fernando",
  apellido: "De Leon",
};

const persona2 = { ...persona };

function getNombre(nombre) {
  return "Hola " + nombre;
}

persona2.nombre = "Alberto";

console.table({ persona });
console.table({ persona2 });

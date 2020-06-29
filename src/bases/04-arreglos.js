// Esto es un arreglo a style antiguo
// const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];

let arreglo3 = arreglo2.map(function (number) {
  return number * 2;
});

console.log(arreglo2);
console.log(arreglo3);

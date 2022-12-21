// Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.
// Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).
// Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.
// Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

function fitsInOneBox(boxes) {
  const sortB = boxes.sort((a,b) => {
    const {l: l1, w: w1, h: h1} = a;
    const {l: l2, w: w2, h: h2} = b;
    return l2*w2*h2-l1*w1*h1;
  });
  for (let i = 0; i<sortB.length-1; i++){
    if(boxes[i+1].l >= boxes[i].l || boxes[i+1].w >= boxes[i].w || boxes[i+1].h >= boxes[i].h){
      return false;
    }
  }
  return true;
}
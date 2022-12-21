// Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.
// Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.
// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
// Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

function checkPart(part) {
  if(part.length === 0){
    return false;
  }
  const newP = part.split(" ").join("").split("");
  const l = Math.floor(newP.length/2);
  const newPR = newP.join("").split("").reverse();
  if(newP.slice(0,l) === newPR.slice(0,l)){
    return true
  }
  let del = 0;
  let i = 0;
  while(i<l){
    if(newP[i] === newPR[i]){
      i+=1;
    } else {
      if(newP[i] === newPR[i+1]){
        newPR.splice(i+1,1);
        del+=1;
        i+=1;
      } else if(newP[i+1] === newPR[i]){
        newP.splice(i+1,1);
        del+=1;
        i+=1;
      } else {
        return false;
      }
    }
    if(del>1){
      return false;
    }
  }
  return true;
}
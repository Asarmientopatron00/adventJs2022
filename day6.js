// Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.
// El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.
// Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

function createCube(size) {
  const initialS = '/\\';
  const finalS = '\\/';
  const blockS = '_\\';
  const blockI = '_/';
  const scape = ' ';
  let cube = '';
  for(let i = 0; i < size; i++){
    cube+=scape.repeat(size-i-1)+initialS.repeat(i+1)+blockS.repeat(size)+'\n';
  }
  for(let j = 0; j < size; j++){
    cube+=scape.repeat(j)+finalS.repeat(size-j)+blockI.repeat(size);
    if(j!== size-1){
      cube+='\n';
    }
  }
  return cube;
}

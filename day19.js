// El día se acerca y Papá Noel tiene el almacén de juguetes hecho un desastre. Ayúdale a ordenar los juguetes en el almacén para que pueda encontrarlos más fácilmente.
// Para ello, nos dan dos arrays. El primero es un array de juguetes, y el segundo es un array de números que indican la posición de cada juguete en el almacén.
// Lo único a tener en cuenta es que las posiciones pueden no empezar en 0, aunque siempre serán números consecutivos y de forma ascendente.
// Tenemos que devolver un array donde cada juguete esté en la posición que le corresponde.

function sortToys(toys, positions) {
  return toys.reduce((resp, toy, i) => {
    const data = {
      pos: positions[i],
      toy: toy
    }
    resp.push(data);
    return resp;
  },[]).sort((a,b) => a.pos-b.pos).reduce((resp, data) =>{
    resp.push(data.toy);
    return resp;
  },[])
}
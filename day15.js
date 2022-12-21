// Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:
// Bolas de colores : B
// Regalos pequeños : R
// Piñas de pino : P
// El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.
// Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.
// Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:
// Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

function decorateTree(base) {
  const av = ['B', 'P', 'R'];
  const arr = base.split(" ");
  const reps = arr.length;
  const pair = (b) => {
    if(b.every((a) => a === b[0])) return b[0];
    const eq = av.reduce((result, a) => {
      if(!b.includes(a)){
        result = a;
      }
      return result;
    },'')
    return eq;
  }
  const res = [arr];
  for(let i = 0; i < reps-1; i++){
    let array = [];
    for (let j = 0; j < res[i].length - 1; j++){
      const p = pair([res[i][j], res[i][j+1]]);
      array.push(p);
    }
    res.push(array);
  }
  return res.reverse().map((data) => data.join(" "));
}
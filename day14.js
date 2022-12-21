// Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.
// Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.
// Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. Visualmente, la pirámide se ve así:

function getOptimalPath(path) {
  let arr = [];
  arr.push([path[0][0], 0, 0]);
  for (let i = 1; i < path.length; i++){
    for (let j = 0; j < path[i].length; j++){
       const filter = arr.filter((item) => [j, j-1].includes(item[1]) && item[2] === i-1);
       const cool = filter.reduce((res, data) => {
         res.push(data[0])
         return res
       },[]);
       const newP = Math.min(...cool);
       arr.push([newP+path[i][j], j, i]);
    }
  }
  const res = arr.filter((item) => item[2] === path.length-1).reduce((result, data) =>{
    result.push(data[0]);
    return result
  },[]);
  
  return Math.min(...res);
}
// ¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.
// Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.
// Los laberintos tienen las siguientes posiciones:
// W: Es una pared, no se puede pasar por ahí.
// S: Punto de entrada al almacén.
// E: Punto de salida del almacén.
// : Los espacios en blanco es por donde se puede pasar.
// Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

function canExit(maze) {
  let lastMove = '';
  let sAndE = {S: [0,0], E: [0,0]};
  const pos = maze.reduce((r, row, i) => {
    const av = row.reduce((rc, column, j) => {
      if(column === ' '){
        rc.push([(i+1),(j+1)])
      } else if(column === 'S' || column === 'E'){
        sAndE[column] = [(i+1), (j+1)]
      }
      return rc;
    }, [])
    r = [...r, ...av]
    return r;
  },[]);
  pos.push(sAndE.S);
  pos.push(sAndE.E);
  let currentPosition = sAndE.E;
  const countAvMoves = (last, prior) => {
    const u = upMove(currentPosition, pos);
    const d = downMove(currentPosition, pos);
    const l = leftMove(currentPosition, pos);
    const r = rightMove(currentPosition, pos);
    const count = [u, d, l, r].filter((m) => m).length;
    const res = {count: count};
    if(count === 1){
      res.np = u||r||d||l;
      res.dir = u?0:r?1:d?2:3;
      return res;
    }
    if(prior === 0){
      if(u && last !== 2){
        res.np = u;
        res.dir = 0;
        return res;
      }
      if(r && last !== 3){
        res.np = r;
        res.dir = 1;
        return res;
      }
      if(d && last !== 0){
        res.np = d;
        res.dir = 2;
        return res;
      }
      if(l && last !== 1){
        res.np = l;
        res.dir = 3;
        return res;
      }
    }
    if(prior === 1){
      if(r && last !== 3){
        res.np = r;
        res.dir = 1;
        return res;
      }
      if(d && last !== 0){
        res.np = d;
        res.dir = 2;
        return res;
      }
      if(l && last !== 1){
        res.np = l;
        res.dir = 3;
        return res;
      }
      if(u && last !== 2){
        res.np = u;
        res.dir = 0;
        return res;
      }
    }
    if(prior === 2){
      if(d && last !== 0){
        res.np = d;
        res.dir = 2;
        return res;
      }
      if(l && last !== 1){
        res.np = l;
        res.dir = 3;
        return res;
      }
      if(u && last !== 2){
        res.np = u;
        res.dir = 0;
        return res;
      }
      if(r && last !== 3){
        res.np = r;
        res.dir = 1;
        return res;
      }
    }
    if(prior === 3){
      if(l && last !== 1){
        res.np = l;
        res.dir = 3;
        return res;
      }
      if(u && last !== 2){
        res.np = u;
        res.dir = 0;
        return res;
      }
      if(r && last !== 3){
        res.np = r;
        res.dir = 1;
        return res;
      }
      if(d && last !== 0){
        res.np = d;
        res.dir = 2;
        return res;
      }
    }
    return res; 
  }
  let i = 0;
  let counter = [0, 0];
  while(true && i <=50){
    if(toJson(currentPosition) === toJson(sAndE.S)) return true;
    const c = countAvMoves(lastMove, counter[1]);
    if(c.count === 0) {
      return false
    };
    if(c.count === 1){
      lastMove = c.dir;
      const index = pos.findIndex((p) => toJson(p) === toJson(currentPosition));
      pos.splice(index,1);
      currentPosition = c.np;
    } else {
      lastMove = c.dir;
      currentPosition = c.np;
    }
    counter[0]++;
    if(counter[0] === 3){
      counter[1]++;
      if(counter[1] > 3){
        counter[1] = 0;
      }
      counter[0] = 0;
    }
    i++
  }
  function toJson(arr){
    return JSON.stringify(arr);
  }
  function upMove(cp, list){
    const np = [cp[0]-1, cp[1]];
    if(list.find((ls) => ls[0] === np[0] && ls[1] === np[1])){
       return np;
    }
    return false;
  }
  function downMove(cp, list){
    const np = [cp[0]+1, cp[1]];
    if(list.find((ls) => ls[0] === np[0] && ls[1] === np[1])){
      return np;
    }
    return false;
  }
  function rightMove(cp, list){
    const np = [cp[0], cp[1]+1];
    if(list.find((ls) => ls[0] === np[0] && ls[1] === np[1])){
      return np;
    }
    return false;
  }
  function leftMove(cp, list){
    const np = [cp[0], cp[1]-1];
    if(list.find((ls) => ls[0] === np[0] && ls[1] === np[1])){
      return np;
    }
    return false;
  }
  return false;
}
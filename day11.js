// Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.
// Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.
// Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.
// Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

function getCompleted(part, total) {
  const tAsS = total.split(':').reduce((res, data, i) => {
    res+=parseInt(data)*Math.pow(60,(2-i));
    return res;
  },0);
  const pAsS = part.split(':').reduce((res, data, i) => {
    res+=parseInt(data)*Math.pow(60,(2-i));
    return res;
  },0);
  function gcd(a,b){
    if(!b) return a;
    return gcd(b, a%b);
  }
  const div = gcd(pAsS, tAsS);
  return `${parseInt(pAsS/div)}/${parseInt(tAsS/div)}`;
}
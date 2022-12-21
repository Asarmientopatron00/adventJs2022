// Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.
// Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).
// Cada 7 segundos, los leds cambian de estado de esta forma:
// Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
// Si el led está encendido, se mantiene siempre encendido.
// Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. Por ejemplo:

function countTime(leds){
  const on = (it) => it === 1;
  if(leds.every(on)){
    return 0;
  }
  let tAr = [];
  for(let i = 0; i<leds.length; i++){
    if(on(leds[i])) continue;
    let j = i;
    let time = 0;
    while(i<20){
      j=j-1;
      if(j<0){
        j = leds.length-1;
      }
      time=time+7;
      if(on(leds[j])){
        tAr.push(time);
        break;
      }
    }
  }
  return Math.max(...tAr);
}
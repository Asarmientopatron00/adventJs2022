// Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.
// Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.
// Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).
// ¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.

function carryGifts(gifts, maxWeight) {
  if(gifts.length === 0){
    return [];
  }
  let res = [];
  let tRes = '';
  let i = 0;
  const len = gifts.length;
  while(true){
    if(gifts[i].length+tRes.length-Math.max(tRes.split(" ").length-1, 0) <= maxWeight){
      if(tRes.length === 0){
        tRes+=gifts[i];
      } else {
        tRes+=' '+gifts[i];
      }
    } else {
      if(tRes.length > 0){
        res.push(tRes);
      }
      tRes = '';
      if(gifts[i].length <= maxWeight){
        tRes+=gifts[i];
      }
    }
    if(i === len-1 && tRes.length>0){
      res.push(tRes);
    }
    i+=1;
    if(i >  len-1){
      break;
    }
  }
  return res;
}
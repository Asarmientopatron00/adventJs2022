// Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.
// Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.
// Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.
// Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const av = giftsCities.filter((i) => i <= maxGifts).sort((a,b) => b-a);
  let res = [];
  if(av.length === 1 || maxCities === 1){
    return Math.max(...av,0);
  }
  for(let i = 0; i < av.length;  i++){
    const ar = [...av].splice(i+1);
    let sum = av[i];
    let count = 1;
    let j = 0;
    while(true){
      if(ar.length === 0) break;
      if(sum+ar[j] <= maxGifts){
        if(sum+ar[j] === maxGifts) return sum+ar[j]
        sum+=ar[j];
        count++;
        j++;
      } else {
        if(count === 1){
          ar.splice(0,1);
          j=0;
        } else {
          j++;
        }
      }
      if(j === ar.length || count >= maxCities){
        res.push(sum);
        sum=av[i];
        count=1;
        j=0;
        ar.splice(0,1);
      }
    }
  }
  return Math.max(...res,0);
}
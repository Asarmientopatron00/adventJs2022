// Papá Noel se ha dado cuenta de que ni con la colaboración de todos los elfos va a poder entregar todos los regalos a tiempo. Por eso va a pedir ayuda a sus amigos de Autentia.
// Desde Autentia nos han indicado que necesitan un programa para saber qué equipo de renos enviar a cada país. Hay diferentes tipos de renos y cada uno de ellos puede llevar un peso de regalos. Por ejemplo:
// En el listado de regalos que tiene Papá Noel se expresa cuánto pesa cada regalo y cuál es su país destino. El peso de los regalos siempre es un número natural. Por ejemplo:

// const gifts = [
//   { country: 'Spain', weight: 30 },
//   { country: 'Spain', weight: 7 },
//   { country: 'France', weight: 17 }
// ]
// Autentia nos comenta que, para que el equipo de renos a enviar a cada país sea óptimo, deberíamos:

// Enviar el mayor número de renos posibles de mayor capacidad de carga
// Aprovechar al máximo el peso que cada reno puede soportar.
// Los renos tienen un comportamiento extraño y no admiten que en el equipo haya más renos de un tipo que renos del siguiente tipo por orden descendente de capacidad de carga.
// Por ejemplo. A Francia (17) no se mandarían diecisiete renos diésel (17 * 1). Hay renos con mayor capacidad de carga, pero tampoco se mandaría un reno nuclear (50), ya que se estaría desaprovechando su capacidad. Se mandaría un reno eléctrico (10), uno gasolina (5) y dos diésel (2 * 1).

// A España (37) no se podría mandar un equipo formado por tres eléctricos (3 * 10), uno gasolina (5) y dos diésel (2 * 1), ya que no puede haber más eléctricos que a gasolina. Tampoco dos eléctricos (2 * 10), tres gasolina (3 * 5) y dos diésel (2 * 1), pues no puede haber más a gasolina que a diésel. Habría que mandar dos eléctricos (2 * 10), dos a gasolina (2 * 5) y siete a diésel (7 * 1).

function howManyReindeers(reindeerTypes, gifts) {
  const rev = reindeerTypes.sort((a,b) => a.weightCapacity - b.weightCapacity);
  let r1 = [];
  for (let i of gifts){
    const r = {sum: 0, max: 0, arr: []};
    
    const res = rev.reduce((total, item) => {
      if(item.weightCapacity+total.sum <= i.weight){
        total.sum+=item.weightCapacity;
        total.max++;
        total.arr.push({num: 1, cap: item.weightCapacity})
      }
      return total
    },r);
    
    let m = 0;
    
    while(true){
      const total = res.arr.reduce((sum, it) => sum+it.num*it.cap, 0);
      
      if(total < i.weight){
        res.arr[m].num++;
        m++;
      } else if (total > i.weight){
        res.arr[m===0?res.max-1:m-1].num--;
        res.max = m-1;
        m = 0;
      } else {
        break;
      }
      if(m === res.max){
        m = 0;
      }
    }
    
    const reindeers = res.arr.reduce((r, item, index) => {
      const data = {
        type: rev[index].type,
        num: item.num
      }
      r.push(data);
      return r;
    },[]).reverse();
    
    const a = {
      country: i.country,
      reindeers: reindeers
    }
    
    r1.push(a);
  }
  return r1;
}
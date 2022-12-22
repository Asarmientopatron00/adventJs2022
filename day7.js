// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.
// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
// Por ejemplo, si tenemos los siguientes almacenes:

function getGiftsToRefill(a1, a2, a3) {
  const newArray = [a1, a2, a3];
  const uniques = newArray.reduce((result, data) => {
    const n = new Set(data)
    result.push(...n.values())
    return result;
  },[]);
  const res = uniques.reduce((result, data) => {
    if(uniques.filter((uniq) => uniq === data).length === 1){
      result.push(data);
    }
    return result;
  },[])
  return res;
}
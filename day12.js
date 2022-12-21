// Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que sólo tiene una batería de 20W.
// Nos dan un array de trineos, de peor a mejor, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: name y consumption.
// El campo consumption es un número que representa la cantidad de vatios (W) que consume el trineo para cada unidad de distancia. El campo name es una cadena de texto que representa el nombre del trineo.
// Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.

function selectSleigh(distance, sleighs) {
  return [...sleighs].reverse().reduce((res, data) => {
     if(distance*data.consumption <= 20 && !res){
       res=data.name
     }
    return res;
  },null);
}
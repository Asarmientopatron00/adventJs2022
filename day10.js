// Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.
// Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

function checkJump(heights) {
  let status = 'up';
  let goUp = [];
  for(let i = 1; i < heights.length; i++){
    if(heights[i-1] > heights[i]){
      status = 'down';
    }
    if(heights[i-1] < heights[i]){
      goUp.push(0);
    }
    if(i===1){
      if(heights[i-1] > heights[i]){
        return false;
      }
    } else {
      if((heights[i-1] > heights[i] && status === 'up') || (heights[i-1] < heights[i] && status === 'down')){
        return false;
      }
    }
  }
  if(status === 'up' || heights.length <= 2 || !goUp.includes(0)){
    return false
  }
  return true
}
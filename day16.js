// Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

// Eliminar espacios al inicio y al final
// Eliminar múltiples espacios en blanco y dejar sólo uno
// Dejar un espacio después de cada coma
// Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// La primera letra de cada oración debe estar en mayúscula
// Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
// Poner un punto al final de la frase si no tiene puntuación
// Las cartas las escriben inglés y aquí tenemos un ejemplo:

function fixLetter(letter) {
  letter = letter.trim();
  const chars = [" ", "?"];
  const points = [",", ".", "?", '!'];
  const ends = ["?", ".", "!"];
  let c = 0;
  const r = [...letter].reduce((res, a, i) => {
    c = 0;
    if(i === 0){
      res+=a.toUpperCase();
    } else {
      if(chars.includes(a) && [...letter][i] === [...letter][i-1]){
        c+=1;
      }
      if([','].includes(a) && [...letter][i+1] !== " "){
        res+=a+" ";
        c+=1;
      }
      if(points.includes(a) && [...letter][i-1] === ' '){
        res=res.substring(0, res.length-1)+a;
        c+=1;
      }
      if(c === 0){
        res+=a;
      }
    }
    return res;
  },'');
  let r1 = [...r].reduce((res, a, i) => {
     if([...r][i-2] !== undefined && ends.includes([...r][i-2])){
       res+=a.toUpperCase();
     } else {
       res+=a;
     }
    if(i === r.length-1 && !ends.includes(a)){
      res+='.'
    }
    return res
  }, '');
  r1 = r1.replaceAll('santa claus', 'Santa Claus');
  r1 = r1.replaceAll('Santa claus', 'Santa Claus');
  r1 = r1.replaceAll('santa Claus', 'Santa Claus');
  return r1
}
// Estamos probando una nueva CPU para el trineo de Papá Noel. Pero todavía tenemos que programar el software para que funcione.
// La CPU tiene 8 registros disponibles, que se llaman V00..V07. Al comienzo del programa, todos los registros contienen 0. La CPU admite las siguientes instrucciones:
// MOV Vxx,Vyy: copia el valor del registro Vxx al registro Vyy;
// MOV n,Vxx: asigna la constante numérica n al registro Vxx (sobrescribe si ya tiene un valor);
// ADD Vxx,Vyy: calcula (Vxx + Ryy) y almacena el resultado en Vxx;
// DEC Vxx: decrementa el valor de Vxx en 1.
// INC Vxx: incrementa el valor de Vxx en 1.
// JMP i: salta a la instrucción número i si V00 es diferente de 0. i está garantizado que sea un número de instrucción válido y 0 sería la primera instrucción.
// Como la CPU es de 8 bits, el número que podría representar va desde 0 hasta 255. Si incrementas el número 255 causa un desbordamiento y resulta en 0. Y si decrementas 0, resulta en 255. Ten en cuenta, entonces, que el número 280 sería 24 en la CPU.
// Después de que se haya ejecutado la última instrucción, debes devolver una matriz con el resultado para cada registro. De V00 a V07. Ejemplos:

function executeCommands(commands) {
  let initialValues = [0, 0, 0, 0, 0, 0, 0, 0];
  let i = 0;
  while(true){
    if(i >= commands.length) break;
    const copy = [...commands][i];
    let ins = '';
    let n = 0;
    let ini = 0;
    let fin = 0;
    switch (copy.substring(0,3)){
       case 'MOV':
         ins = copy.split(' ')[1].split(',');
         fin = parseInt(ins[1].substring(1));
         if(ins[0].startsWith('V')){
           ini = parseInt(ins[0].substring(1));
           initialValues[fin] = initialValues[ini];
           i++;
         } else {
           ini = parseInt(ins[0]);
           initialValues[fin] = ini;
           i++;
         }
         break;
       case 'DEC':
         ins = copy.split(' ')[1];
         n = parseInt(ins.substring(1));
         initialValues[n] = initialValues[n]===0 ? 255 : initialValues[n]-1;
         i++;
         break;
       case 'INC':
         ins = copy.split(' ')[1];
         n = parseInt(ins.substring(1));
         initialValues[n] = initialValues[n]===255 ? 0 : initialValues[n]+1;
         i++;
         break;
       case 'JMP':
         if(initialValues[0] !== 0){
           ins = copy.split(' ')[1];
           n = parseInt(ins);
           i=n;
         } else {
           i++;
         }
         break;
       case 'ADD':
        ins = copy.split(' ')[1].split(',');
        ini = parseInt(ins[0].substring(1));
        fin = parseInt(ins[1].substring(1));
        if(initialValues[ini]+initialValues[fin] > 255){
          initialValues[ini]=initialValues[ini]+initialValues[fin]-256;
        } else {
          initialValues[ini] = initialValues[ini]+initialValues[fin];
        }
        i++;
        break;
      default:
        break;
    }
  }
  return initialValues;      
}

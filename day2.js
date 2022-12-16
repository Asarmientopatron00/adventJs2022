// Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.
// Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.
// Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.
// Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

function countHours(year, holidays){
  const isLeap = (year%4 === 0 && year%100 !== 0) || year%400 === 0;
  const charY = year.toString();
  const weekendDays = [0, 6];
  const res = holidays.reduce((result, data) => {
    if(!isLeap && data == '02/29') return result;
    const date = data+'/'+charY;
    const dayOfWeek = new Date(date).getDay();
    if(!weekendDays.includes(dayOfWeek)){
      result +=1;
    }
    return result;
  },0);
  return res*2;
}
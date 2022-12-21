// Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

// Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

// printTable([
//   { name: 'Game', quantity: 2 },
//   { name: 'Bike', quantity: 1 },
//   { name: 'Book', quantity: 3 }
// ])
// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************
// Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

// printTable([
//   { name: 'PlayStation 5', quantity: 9234782374892 },
//   { name: 'Book Learn Web Dev', quantity: 23531 }
// ])
// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
// Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

// La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

// Ten en cuenta:

// Usa sólo el espacio que necesitas para dibujar la tabla.
// Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
// No hace falta que ordenes los resultados.
// La tabla no termina con salto de línea.

function printTable(gifts) {
  const headers = {
    game: 'Gift',
    quantity: 'Quantity'
  }
  const chars = {
    beg: '+',
    end: '*',
    latL: '| ',
    latR: ' |',
    med: ' | ',
    fill: ' ',
    div: '-'
  }
  const res = gifts.reduce((r, item) => {
    r.max1 = Math.max(item.name.length, r.max1);
    r.max2 = Math.max(item.quantity.toString().length, r.max2);
    return r
  },{max1: headers.game.length, max2: headers.quantity.length});
  const maxS = res.max1+res.max2+7;
  let string = chars.beg.repeat(maxS)+'\n';
  string+=chars.latL+headers.game+chars.fill.repeat(res.max1-headers.game.length)+chars.med;
  string+=headers.quantity+chars.fill.repeat(res.max2-headers.quantity.length)+chars.latR+'\n';
  string+=chars.latL+chars.div.repeat(res.max1)+chars.med+chars.div.repeat(res.max2)+chars.latR+'\n';
  for(let x of gifts){
    string+=chars.latL+x.name+chars.fill.repeat(res.max1-x.name.length)+chars.med+x.quantity+chars.fill.repeat(res.max2-x.quantity.toString().length)+chars.latR+'\n';
  }
  string+=chars.end.repeat(maxS);
  return string;
}
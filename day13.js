// Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.
// Por un lado, tenemos el timestamp de cuándo se hizo el último backup.
// También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene dos elementos: el id del archivo modificado y el timestamp de la modificación.\
// Tienes que crear un programa que devuelva un array con las id de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y ordenados de forma ascendente. Ejemplo:

function getFilesToBackup(lastBackup, changes) {
  return changes.reduce((res, data) => {
    if(data[1] > lastBackup && !res.includes(data[0])){
      res.push(data[0])
    }
    return res
  },[]).sort((a,b) => a-b)
}
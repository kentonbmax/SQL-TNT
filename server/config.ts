let server: string = ''
let port: number = process.env.SQL_PORT? process.env.SQL_PORT : 1433

try { 
  let str = process.env.SQL_SERVER 

  if(str && str.includes('\\')) {
    server = str.split('\\')
  } else{
    server = str
  }
} catch(exception) {
    console.log(exception)
}

module.exports = {
  connection : {
      "dialect": "mssql",
      "host": server.length === 2? server[0] : server,
      "port": port,
      "dialectOptions": {
        "instanceName": server.length === 2? server[1]: ''
      },
      "connectionTimeout": 0
  },
    // SQL
    server: server.length === 2? server[0] : server,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_USER,
    sqlPass: process.env.PWD
}


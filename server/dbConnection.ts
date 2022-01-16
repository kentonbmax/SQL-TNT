import { Sequelize } from 'sequelize'
const config = require('./config')

let connection = new Sequelize(config.database, config.user, config.sqlPass, config.connection);

function validateConnection(connection: Sequelize) {
  connection.authenticate()
    .then(function(error) {
      console.log('Database Connection Established.')
    })
    .catch(function (error) {
      console.log('Unable to connect to the database:', error)
    });
}

validateConnection(connection);

export default connection
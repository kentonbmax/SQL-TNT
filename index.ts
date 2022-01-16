require('dotenv').config({silent: true})
import connection from './server/dbConnection'
import {Nitro} from './server/models/nitro'
import {Prize} from './server/models/prize'
import * as prizeService from './server/services/prizeService'

const start = async function() {
    // load our models
    require('./server/models').loadRelationships()

    let prizes: Prize[] = await connection.models.prize.findAll()
    console.log(prizes)
   

    let nitros: Nitro[] = await connection.models.nitro.findAll()
    console.log(nitros)

    // spc call
    let prizeType: Prize[] = await prizeService.getPrizeTypebyName('Alfred');
    console.log(prizeType[0])

    // sequalize query
    prizeType = await prizeService.getPrizeTypebyName('Obama')
    console.log(prizeType)

    connection.close();
}

// run the queries. 
start()


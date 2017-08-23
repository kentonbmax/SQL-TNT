require('dotenv').config({silent: true})
import connection from './server/dbConnection'
import {INitro} from './server/models/nitro'
import {IPrize} from './server/models/prize'
import * as prizeService from './server/services/prizeService'

const start = async function() {
    // load our models
    require('./server/models').loadRelationships()

    connection.models.nitro.findAll().spread(function(results, metadata) {
        console.log('Spread' + results)
    })

    let prizes = await connection.models.prize.findAll()
    console.log(prizes)
   

    let nitros = await connection.models.nitro.findAll().all<INitro>()
    console.log(nitros)

    // spc call
    let prizeType:string = await prizeService.getPrizeTypebyName('Alfred')
    console.log(prizeType)

    // sequalize query
    prizeType = await prizeService.getPrizeTypebyName('Obama')
    console.log(prizeType)
}

start()


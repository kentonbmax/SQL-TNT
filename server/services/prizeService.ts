import dbConnection from '../dbConnection'
import { QueryTypes } from 'sequelize'
import { Prize } from '../models/prize'

// stored proc is faster!
export async function getPrizeTypebyName(name:string): Promise<Prize[]> {
    let result: Prize[] = await dbConnection.query('lookupPrizeTypeByName :name', 
    {replacements: {name: name},
    type: QueryTypes.SELECT})

    return result;
}

export async function getPrizeTypeByNameRawQuery(name:string) {
    return await dbConnection.models.prize.findAll({
        include: [{
            model: dbConnection.models.nitro,
            where: {name: name}
        }]
    })
}
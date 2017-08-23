import dbConnection from '../dbConnection'

// stored proc is faster!
export async function getPrizeTypebyName(name:string): Promise<string> {
   return dbConnection.query('lookupPrizeTypeByName :name', 
    {replacements: {name: name},
    type: dbConnection.QueryTypes.SELECT})
}

export async function getPrizeTypeByNameRawQuery(name:string) {
    return await dbConnection.models.prize.findAll({
        include: [{
            model: dbConnection.models.nitro,
            where: {name: name}
        }]
    })
}
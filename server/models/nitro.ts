import * as Sequelize from 'sequelize'
import connection from '../dbConnection'
let sequelize:Sequelize.Sequelize = connection

export interface INitro {
	Id: number,
	Name: string,
	Level: number
}

export class Nitro implements INitro {
	constructor(public Id: number,
		public Name: string,
		public Level: number) {
	}
}

export default sequelize.define<Nitro, INitro>('nitro', {
	id: {
		type: sequelize.Sequelize.BIGINT,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: sequelize.Sequelize.STRING,
		allowNull: false
	},
	level: {
		type: sequelize.Sequelize.INTEGER,
		allowNull: true
	}
	}, {
	tableName: 'Nitro',
	timestamps: false
})

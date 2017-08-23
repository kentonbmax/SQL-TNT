import * as Sequelize from 'sequelize'
import connection from '../dbConnection'
let sequelize:Sequelize.Sequelize = connection

export interface IPrize {
    Id: number,
    NitroId: number,
	Type: string,
	Reward: number
}

export class Prize implements IPrize {
    constructor(public Id: number,
        public NitroId: number,
		public Type: string,
		public Reward: number) {
	}
}

export default sequelize.define<Prize, IPrize>('prize', {
	id: {
		type: sequelize.Sequelize.BIGINT,
		allowNull: false,
		primaryKey: true
    },
    nitroId: {
        type: sequelize.Sequelize.BIGINT,
		allowNull: false
	},
	type: {
		type: sequelize.Sequelize.STRING,
		allowNull: false
	},
	reward: {
		type: sequelize.Sequelize.INTEGER,
		allowNull: true
	}
	}, {
	tableName: 'Prize',
	timestamps: false
})

import * as Sequelize from 'Sequelize'
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
	Id: {
		type: sequelize.Sequelize.BIGINT,
		allowNull: false,
		primaryKey: true
    },
    NitroId: {
        type: sequelize.Sequelize.BIGINT,
		allowNull: false
	},
	Type: {
		type: sequelize.Sequelize.STRING,
		allowNull: false
	},
	Reward: {
		type: sequelize.Sequelize.INTEGER,
		allowNull: true
	}
	}, {
	tableName: 'Prize',
	timestamps: false
})

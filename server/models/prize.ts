import { Sequelize, DataTypes, Model} from 'sequelize'
import connection from '../dbConnection'
let sequelize:Sequelize = connection


export class Prize extends Model {}

export default sequelize.define<Prize>('prize', {
	Id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true
    },
    NitroId: {
        type: DataTypes.BIGINT,
		allowNull: false
	},
	Type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Reward: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
	}, {
	tableName: 'Prize',
	timestamps: false
})

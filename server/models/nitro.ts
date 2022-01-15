import { Sequelize, DataTypes, Model} from 'sequelize'
import connection from '../dbConnection'
let sequelize:Sequelize = connection

export class Nitro extends Model{}


export default sequelize.define<Nitro>('nitro', {
	Id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true
	},
	Name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Level: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
	}, {
	tableName: 'Nitro',
	timestamps: false
})

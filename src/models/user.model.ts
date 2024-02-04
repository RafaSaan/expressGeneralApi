import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../db/index,';


const bcrypt = require('bcrypt');

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  name: string;
  lastName: string;
  userName: string;
  password: string;
}

const UserModel = sequelize.define<UserModel>('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  userName: {
    type: DataTypes.STRING,
    unique: {
      name: "username",
      msg: "username already in use"
    }
  },
  password: {
    type: DataTypes.STRING,
  },
});

UserModel.beforeCreate((user, options) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
});

UserModel.beforeUpdate((user, options) => {
  if (user.changed('password')) {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  }
});

async function doStuff() {
  const instance = await UserModel.findByPk(1, {
    rejectOnEmpty: true,
  });

  console.log(instance.id);
}

// UserModel.sync();

export default UserModel

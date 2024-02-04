import { Sequelize } from "sequelize";
import { config, dialect } from "./config";

const sequelize = new Sequelize({
  database: config.DB,
  username: config.USER,
  password: config.PASSWORD,
  host: config.HOST,
  dialect: dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  },
});

export default sequelize;
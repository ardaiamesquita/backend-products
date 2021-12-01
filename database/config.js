const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  "development":  {
    "username": process.env.DB_USERNAME,
    "password": 'root',
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",

    "define": {
			underscored: true,
		}
	},
}
// 读取 .env 文件的键值对
const dotenv = require('dotenv');

dotenv.config();

module.exports = process.env;

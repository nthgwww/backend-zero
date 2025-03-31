const connection = require("../config/database"); // Kết nối tới database

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Users");
  return results; // Trả về danh sách người dùng
}

module.exports = {
    getAllUsers
}
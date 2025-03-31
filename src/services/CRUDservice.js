const connection = require("../config/database"); // Kết nối tới database

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Users");
  return results; // Trả về danh sách người dùng
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        "SELECT * FROM Users WHERE id = ?",
        [userId]
      );
    
      let user = results && results.length > 0 ? results[0] : {}; // Lấy thông tin người dùng từ kết quả truy vấn
      // Lấy id từ params
      return user; // Trả về thông tin người dùng

  console.log(">>> check results", results); // In ra dữ liệu để kiểm tra
}

module.exports = {
    getAllUsers,
    getUserById
}
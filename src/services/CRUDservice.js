const connection = require("../config/database"); // Kết nối tới database

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Users");
  return results; // Trả về danh sách người dùng
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId]
  );

  let user = results && results.length > 0 ? results[0] : {}; // Lấy thông tin người dùng từ kết quả truy vấn
  // Lấy id từ params
  return user; // Trả về thông tin người dùng

  console.log(">>> check results", results); // In ra dữ liệu để kiểm tra
};

const updateUserById = async (email, name, city, userId) => {
  try {
    let [results] = await connection.query(
      `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
      [email, name, city, userId]
    );
    return results;
  } catch (err) {
    console.error(">>> Error in updateUserById:", err);
    throw err;
  }
};

const deleteUserById = async (userId) => {
  try {
    let [results] = await connection.query(`DELETE FROM Users WHERE id = ?`, [
      userId,
    ]);
    return results;
  } catch (err) {
    console.error(">>> Error in deleteUserById:", err);
    throw err;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

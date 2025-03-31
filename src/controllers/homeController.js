const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  let results = await getAllUsers(); // Lấy danh sách người dùng từ database
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Check ABC!");
};

const getTommy = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  try {
    await connection.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
      [email, name, city]
    );
    return res.render("home.ejs", {
      listUsers: await getAllUsers(),
      successMessage: "User created successfully!",
    });
  } catch (err) {
    console.error(">>> Error creating user:", err);
    return res.status(500).send("An error occurred while creating the user.");
  }
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId); // Lấy thông tin người dùng từ database
  return res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  try {
    await updateUserById(email, name, city, userId);
    return res.render("home.ejs", {
      listUsers: await getAllUsers(),
      successMessage: "User updated successfully!",
    });
  } catch (err) {
    console.error(">>> Error updating user:", err);
    return res.status(500).send("An error occurred while updating the user.");
  }
};

const postDeleteUser = async (req, res) => {
  const userId = req.body.userId;

  try {
    await deleteUserById(userId);
    return res.render("home.ejs", {
      listUsers: await getAllUsers(),
      successMessage: "User deleted successfully!",
    });
  } catch (err) {
    console.error(">>> Error deleting user:", err);
    return res.status(500).send("An error occurred while deleting the user.");
  }
};

module.exports = {
  getCreatePage,
  getHomepage,
  getABC,
  getTommy,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
};

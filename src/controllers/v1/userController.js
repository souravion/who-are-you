const User = require('../../models/v1/User');

async function getAllUsers(req, res) {
    console.log(req)
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Other controller functions for getUserById, createUser, updateUser, deleteUser

module.exports = {
  getAllUsers,
  // Other controller functions here
};

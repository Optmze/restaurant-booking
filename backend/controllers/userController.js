const User = require('../models/userModel');

// User login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by the username
    const user = await User.findOne({ username });

    // If the user is not found or the password doesn't match, return an error
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid login credentials' });
    }

    // Determine the user's role and redirect accordingly
    if (user.role === 'admin') {
      // Redirect the admin to the reservations list
      res.status(200).json({ message: 'Admin logged in', redirectPath: '/admin/reservations' });
    } else {
      // Redirect the user to the reservation page
      res.status(200).json({ message: 'User logged in', redirectPath: '/reservations' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addUser = async (req,res) => {
    const { username, password } = req.body;
    role = "user";
    try{
        const user = await User.create({username,password,role})
        res.status(200).json(user)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}
module.exports = { loginUser, addUser };
import bcryptjs from 'bcryptjs';
import User from '../modals/user.modal.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user instance
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json('User created successfully! Nice to Coder');
  } catch (error) {
    console.error('Error occurred during user creation:', error);

    // Send a detailed error response
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }

    if (error.code === 11000) {
      return res.status(400).json({ error: 'Duplicate field value entered' });
    }

    res.status(500).json({ error: 'Failed to create user' });
  }
};

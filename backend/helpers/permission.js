const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
  try {
    // Find the user by ID
    const user = await userModel.findById(userId);

    // Check if user is found and has a role
    if (user && user.role === 'ADMIN') {
      return true;
    }

    // If user is not found or not an admin, return false
    return false;
  } catch (error) {
    // Log the error and rethrow if necessary
    console.error('Error checking upload product permission:', error);
    throw new Error('Internal server error');
  }
};

module.exports = uploadProductPermission;

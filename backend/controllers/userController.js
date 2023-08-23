import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @ access Pubic
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});

// @desc Register user 
// @route Post /api/users
// @ access Pubic
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc Logout user / clear cookie
// @route Post /api/users
// @ access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc get user profile
// @route GET /api/users/profile
// @ access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc update user profile
// @route PUT /api/users/profile
// @ access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc Get users
// @route GET /api/users
// @ access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get user');
});

// @desc Get users by ID
// @route GET /api/users/:id
// @ access Private/Admin
const getUsersByID = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

// @desc Delete users
// @route DELETE /api/users/:id
// @ access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc update users
// @route PUT /api/users/:id
// @ access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser,
}


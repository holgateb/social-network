const router = require('express').Router();
// Routes from controller file

const {
    createUser,
    getUser,
    updateUser,
    getUsers,
    getSingleUser,
    addFriend,
    removeFriend,

} = require('../../controllers/user-controller')

// /api/user

// /api/user.:userID

// /api/users/:userId/friends/:friendId

modeule.exports = router;
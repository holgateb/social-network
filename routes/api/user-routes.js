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
router.route('/')
.get(getUsers)
.post(createUser);

// /api/user:userID
router.route('/:userID')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId

modeule.exports = router;
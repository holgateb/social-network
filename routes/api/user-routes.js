const router = require('express').Router();

// Routes from controller file

const {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getSingleUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller')

// /api/users

router.route('/')
.get(getUser)
.post(createUser);

// /api/users:userID

router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;
const router = require('express').Router();

// Routes from controller file

const {
    createUser,
    getUser,
    updateUser,
    getUser,
    getSingleUser,
    addFriend,
    removeFriend,

} = require('../../controllers/user-controller')

// /api/user

router.route('/')
.get(getUser)
.post(createUser);

// /api/user:userID

router.route('/:userID')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

modeule.exports = router;
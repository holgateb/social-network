const router = require('express'.).router();

const {
    createThought,
    updateTHought,
    deleteThought,
    getThought,
    getSingleThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');
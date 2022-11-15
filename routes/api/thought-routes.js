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

// /api/thoughts

// /api/thoughts/:thoughtId

// /api/thoughts/:thoughtId/reactions

// /api/thoughts/:thoughtId/reactionsId

module.exports = router;
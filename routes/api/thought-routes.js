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

router.route('/')
.get(getThoughts)
.post(createThought);

// /api/thoughts/:thoughtId

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateTHought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

// /api/thoughts/:thoughtId/reactionsId

module.exports = router;
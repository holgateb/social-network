const router = require('express').router();

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
.get(getThought)
.post(createThought);

// /api/thoughts/:thoughtId

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateTHought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions')
.put(addReaction)

// /api/thoughts/:thoughtId/reactionsId

router.route('/:thoughtId/reactionsId')
.delete(removeReaction)

module.exports = router;
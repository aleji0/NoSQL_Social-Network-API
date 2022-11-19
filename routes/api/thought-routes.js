// Require express router
const router = require('express').Router();

const { 
    getThoughts, 
    getThoughtById, 
    addThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought); 

router.route('/:userId')
    .post(addThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
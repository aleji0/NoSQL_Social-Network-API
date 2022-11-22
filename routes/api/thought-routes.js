// require express router
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

// api/thoughts/ GET
router.route('/')
  .get(getThoughts);

// api/thoughts/:thoughtId GET, PUT & DELETE
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought) 

// api/thoughts/:userId POST
router.route('/:userId')
  .post(addThought);

// api/thoughts/:thoughtId/reactions POST
router.route('/:thoughtId/reactions')
  .post(addReaction);

// api/thoughts/:thoughtId/reactions/reactionsId DELETE
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
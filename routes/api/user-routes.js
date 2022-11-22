// Require express router
const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');

// /api/users/ GET & POST
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:id GET, PUT & DELETE
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId POST & DELETE
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router; 
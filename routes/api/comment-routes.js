const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');
// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
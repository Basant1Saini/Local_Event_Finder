const express = require('express');
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', eventController.getEvents);
router.post('/', auth, eventController.createEvent);
router.get('/:id', eventController.getEvent);
router.put('/:id', auth, eventController.updateEvent);
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;
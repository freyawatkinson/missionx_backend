const { Router } = require('express');
const { get, getOne, update } = require('../controllers/project.controller');

const router = Router();

// GET /api/project + /
router.get('/', getOne);

// PATCH /api/project + /
router.patch('/', update);

// GET /api/project/ + :id/
router.get('/:id', getOne);

// GET /api/project/ + hello
router.get('/hello', getOne);


module.exports = router;
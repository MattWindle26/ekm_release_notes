const express = require('express')

const router = express.Router()

// GET all changes
router.get('/', (req, res) => {
  res.json({mssg: 'GET all changes'})
})

// GET a single change
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single change'})
})

// POST a new change
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new change'})
})

// DELETE a change
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a change'})
})

// UPDATE a change
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a change'})
})

module.exports = router
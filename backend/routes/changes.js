const express = require('express')
const Change = require('../models/changeModel')

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
router.post('/', async (req, res) => {
    
    const {title, changes} = req.body
    
    try {
        const change = await Change.create({title, changes})
        res.status(200).json(change)
    } catch (error) {
        res.status(400).json({error: error.error.message })
    }
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
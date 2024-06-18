const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); // Import your Event model

// Create a new event
router.post('/', async (req, res) => {
    try {
        const { name, date } = req.body;
        const newEvent = await Event.create({ name, date });
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific event by ID
router.get('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an event by ID
router.put('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete an event by ID
router.delete('/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await Event.findByIdAndDelete(eventId);
        if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
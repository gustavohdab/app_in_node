const knex = require('../database/knex');

const create = async (req, res) => {
  try {
    const { title, description, rating } = req.body;
    const user_id = req.params.user_id;

    if (!title || !description || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (rating < 0 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }

    const [id] = await knex('movies_notes').insert({
      title,
      description,
      rating,
      user_id
    });

    return res.status(201).json({ id, title, description, rating, user_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating movie note' });
  }
};

const getNotes = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const notes = await knex('movies_notes').where({ user_id });

    return res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting movie notes' });
  }
};

const getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const user_id = req.params.user_id;

    const note = await knex('movies_notes').where({ id }).first();
    if (!note) {
      return res.status(404).json({ error: 'Movie note not found' });
    }


    return res.status(200).json(note);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting movie note' });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, description, rating } = req.body;
    const id = req.params.id;
    const user_id = req.params.user_id;

    if (!title || !description || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (rating < 0 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 0 and 5' });
    }

    const note = await knex('movies_notes').where({ id }).first();
    if (!note) {
      return res.status(404).json({ error: 'Movie note not found' });
    }

    await knex('movies_notes').where({ id }).update({
      title,
      description,
      rating
    });

    return res.status(200).json({ id, title, description, rating, user_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error updating movie note' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const user_id = req.params.user_id;

    const note = await knex('movies_notes').where({ id }).first();
    if (!note) {
      return res.status(404).json({ error: 'Movie note not found' });
    }

    await knex('movies_notes').where({ id }).del();

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error deleting movie note' });
  }
};

module.exports = { create, getNotes, getNote, updateNote, deleteNote };

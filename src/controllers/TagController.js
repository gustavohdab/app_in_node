const knex = require('../database/knex');

const createTag = async (req, res) => {
  try {
    const { name, note_id } = req.body;
    const user_id = req.params.user_id;

    const [id] = await knex('movie_tags').insert({ name, note_id, user_id });

    return res.status(201).json({ id, name, note_id, user_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating movie tag' });
  }
};

const getTags = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const tags = await knex('movie_tags').where({ user_id });

    return res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting movie tags' });
  }
};

const getTag = async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await knex('movie_tags').where({ id }).first();

    if (!tag) {
      return res.status(404).json({ error: 'Movie tag not found' });
    }
    const user_id = req.params.user_id;

    return res.status(200).json(tag);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting movie tag' });
  }
};

const updateTag = async (req, res) => {
  try {
    const { name, note_id } = req.body;
    const id = req.params.id;
    const user_id = req.params.user_id;

    const tag = await knex('movie_tags').where({ id }).first();
    if (!tag) {
      return res.status(404).json({ error: 'Movie tag not found' });
    }

    await knex('movie_tags').where({ id }).update({ name, note_id, user_id });

    return res.status(200).json({ id, name, note_id, user_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error updating movie tag' });
  }
};

const deleteTag = async (req, res) => {
  try {
    const id = req.params.id;
    const user_id = req.params.user_id;

    const tag = await knex('movie_tags').where({ id }).first();
    if (!tag) {
      return res.status(404).json({ error: 'Movie tag not found' });
    }

    await knex('movie_tags').where({ id }).del();

    return res.status(204).json();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error deleting movie tag' });
  }
};

module.exports = { createTag, getTags, getTag, updateTag, deleteTag };


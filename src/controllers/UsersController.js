const knex = require('../database/knex');
const { hashPassword } = require('../utils/CryptPassword');

const create = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await knex('users').where({ email }).first();

    if (user) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const [id] = await knex('users').insert({
      email,
      password: await hashPassword(password),
      name
    });

    return res.status(201).json({ id, email, name });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating user' });
  }
};

const index = async (req, res) => {
  try {
    const users = await knex('users');

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting users' });
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await knex('users').where({ id }).first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error getting user' });
  }
};

module.exports = { create, index, show };

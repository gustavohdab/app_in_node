exports.up = function (knex) {
  return knex.schema.createTable('movies_notes', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('rating').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('movies_notes');
};

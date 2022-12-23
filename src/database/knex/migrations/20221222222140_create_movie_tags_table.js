exports.up = function (knex) {
  return knex.schema.createTable('movie_tags', table => {
    table.increments('id').primary();
    table
      .integer('note_id')
      .references('id')
      .inTable('movies_notes')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable();
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('movie_tags');
};

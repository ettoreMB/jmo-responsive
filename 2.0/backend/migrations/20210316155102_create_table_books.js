exports.up = function (knex) {
  return knex.schema.createTable('books', table => {
      table.increments('id').primary()
      table.string('title').notNull()
      table.string('author').notNull().unique()
      table.string('company').notNull()
      table.boolean('edition').notNull().defaultTo(false)
      table.timestamp('createdAt')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('books')
};

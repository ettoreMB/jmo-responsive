exports.up = function (knex) {
  return knex.schema.createTable('events', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('city').notNull().unique()
      table.string('state').notNull().unique()
      table.string('district').notNull()
      table.string('adress').notNull()
      table.string('description').notNull()
      table.integer('price').notNull()
      table.timestamp('date')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('events')
};
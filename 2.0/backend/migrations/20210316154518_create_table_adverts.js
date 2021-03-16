exports.up = function(knex) {
  return knex.schema.createTable('adverts', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('linkAdress').notNull()
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('adverts')
};

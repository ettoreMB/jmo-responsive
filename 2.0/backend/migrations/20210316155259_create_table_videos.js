exports.up = function (knex) {
  return knex.schema.createTable('videos', table => {
      table.increments('id').primary()
      table.string('title').notNull()
      table.string('description').notNull().unique()
      table.string('YoutubeURL').notNull()
      table.timestamp('publication')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('videos')
};

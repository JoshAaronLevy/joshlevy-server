exports.up = function (knex, Promise) {
  return knex.schema.createTable('skills', skills => {
    skills.increments();
    skills.string('name');
    skills.string('type');
    skills.string('experience', [500]);
    skills.string('img', [500]);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('skills');
};
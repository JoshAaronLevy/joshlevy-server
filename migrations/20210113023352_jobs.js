exports.up = function (knex, Promise) {
  return knex.schema.createTable('jobs', jobs => {
    jobs.increments();
    jobs.string('company');
    jobs.string('title');
    jobs.string('startDate');
    jobs.string('endDate');
    jobs.array('description');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('jobs');
};
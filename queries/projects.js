const database = require('../database-connection');

module.exports = {
  list() {
    return database('projects').select().orderBy('id', 'desc');
  },
  read(id) {
    return database('projects').select().where('id', id).first();
  },
  create(id) {
    return database('projects')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('projects')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('projects').delete().where('id', id);
  }
};
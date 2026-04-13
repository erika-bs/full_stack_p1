const repo = require('../repositories/albumRepository');

module.exports = {
  getAll:  ()       => repo.findAll(),
  getById: (id)     => repo.findById(id),
  create:  (data)   => repo.create(data),
  update:  (id, d)  => repo.update(id, d),
  remove:  (id)     => repo.remove(id),
};
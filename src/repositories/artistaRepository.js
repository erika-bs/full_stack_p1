const pool = require('../config/mysql');

module.exports = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Artistas');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM Artistas WHERE id = ?', [id]);
    return rows[0] || null;
  },

  create: async (data) => {
    const { nome, categoria, nacionalidade } = data;
    const [result] = await pool.query(
      'INSERT INTO Artistas (nome, categoria, nacionalidade) VALUES (?, ?, ?)',
      [nome, categoria, nacionalidade]
    );
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { nome, categoria, nacionalidade } = data;
    await pool.query(
      'UPDATE Artistas SET nome = ?, categoria = ?, nacionalidade = ? WHERE id = ?',
      [nome, categoria, nacionalidade, id]
    );
    return { id, ...data };
  },

  remove: async (id) => {
    await pool.query('DELETE FROM Artistas WHERE id = ?', [id]);
  },
};
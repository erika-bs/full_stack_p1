const pool = require('../config/mysql');

class Artista {
  constructor(id, nome, categoria, nacionalidade) {
    this.id            = id;
    this.nome          = nome;
    this.categoria     = categoria;
    this.nacionalidade = nacionalidade;
  }
}

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS Artistas (
      id            INT AUTO_INCREMENT PRIMARY KEY,
      nome          VARCHAR(255) NOT NULL,
      categoria     VARCHAR(100) NOT NULL,
      nacionalidade VARCHAR(100) NOT NULL,
      createdAt     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  console.log('Tabela Artistas criada!');
};

module.exports = { Artista, createTable };
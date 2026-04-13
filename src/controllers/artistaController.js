const artistaRepository = require('../repositories/artistaRepository');

async function listArtistas(req, res) {
  const artistas = await artistaRepository.findAll();
  res.json(artistas);
}

async function getArtista(req, res) {
  const artista = await artistaRepository.findById(req.params.id);
  if (!artista) {
    return res.status(404).json({ erro: 'Artista não encontrado!' });
  }
  res.json(artista);
}

async function newArtista(req, res) {
  if (!req.body.nome || !req.body.categoria || !req.body.nacionalidade) {
    return res.status(400).json({ erro: 'nome, categoria e nacionalidade são obrigatórios!' });
  }
  const artista = await artistaRepository.create(req.body);
  res.status(201).json(artista);
}

async function modifyArtista(req, res) {
  const artista = await artistaRepository.findById(req.params.id);
  if (!artista) {
    return res.status(404).json({ erro: 'Artista não encontrado!' });
  }
  const artistaAtualizado = await artistaRepository.update(req.params.id, req.body);
  res.status(200).json(artistaAtualizado);
}

async function deleteArtista(req, res) {
  const artista = await artistaRepository.findById(req.params.id);
  if (!artista) {
    return res.status(404).json({ erro: 'Artista não encontrado!' });
  }
  await artistaRepository.remove(req.params.id);
  res.status(204).json(artista);
}

module.exports = {
  listArtistas,
  getArtista,
  newArtista,
  modifyArtista,
  deleteArtista,
};
const albumRepository = require('../repositories/albumRepository');

async function listAlbums(req, res) {
  const albums = await albumRepository.findAll();
  res.json(albums);
}

async function getAlbum(req, res) {
  const album = await albumRepository.findById(req.params.id);
  if (!album) {
    return res.status(404).json({ erro: 'Album não encontrado!' });
  }
  res.json(album);
}

async function newAlbum(req, res) {
  if (!req.body.titulo || !req.body.artista || !req.body.descricao || !req.body.anoLancamento || !req.body.faixas) {
    return res.status(400).json({ erro: 'titulo, artista, descricao, anoLancamento e faixas são obrigatórios!' });
  }
  if (typeof req.body.faixas !== 'number' || req.body.faixas <= 0) {
    return res.status(400).json({ erro: 'faixas deve ser um número maior que zero!' });
  }
  const album = await albumRepository.create(req.body);
  res.status(201).json(album);
}

async function modifyAlbum(req, res) {
  const album = await albumRepository.findById(req.params.id);
  if (!album) {
    return res.status(404).json({ erro: 'Album não encontrado!' });
  }
  const albumAtualizado = await albumRepository.update(req.params.id, req.body);
  res.status(200).json(albumAtualizado);
}

async function deleteAlbum(req, res) {
  const album = await albumRepository.findById(req.params.id);
  if (!album) {
    return res.status(404).json({ erro: 'Album não encontrado!' });
  }
  await albumRepository.remove(req.params.id);
  res.status(204).json(album);
}

module.exports = {
  listAlbums,
  getAlbum,
  newAlbum,
  modifyAlbum,
  deleteAlbum,
};
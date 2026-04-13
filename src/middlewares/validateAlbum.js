const validateAlbum = (req, res, next) => {
  const { titulo, artista, descricao, anoLancamento, faixas } = req.body;
  if (!titulo || !artista || !descricao || !anoLancamento || !faixas) {
    return res.status(400).json({ erro: 'titulo, artista, descricao, anoLancamento e faixas são obrigatórios!' });
  }
  if (typeof faixas !== 'number' || faixas <= 0) {
    return res.status(400).json({ erro: 'faixas deve ser um número maior que zero!' });
  }
  next();
};

module.exports = validateAlbum;
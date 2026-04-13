const validateArtista = (req, res, next) => {
  const { nome, categoria, nacionalidade } = req.body;

  if (!nome || !categoria || !nacionalidade) {
    return res.status(400).json({
      message: 'Campos obrigatórios: nome, categoria, nacionalidade'
    });
  }

  next();
};

module.exports = validateArtista;
class Album {
  constructor(id, titulo,artista, descricao, anoLancamento, faixas) {
    this.id            = id;
    this.titulo        = titulo;
    this.artista       = artista;
    this.descricao     = descricao;
    this.anoLancamento = anoLancamento;
    this.faixas        = faixas;
  }
}

module.exports = Album;
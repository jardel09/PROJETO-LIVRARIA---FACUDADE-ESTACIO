const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: { type: banco.Schema.Types.ObjectId, auto: true },
    codEditora: { type: Number, required: true },
    titulo: { type: String, required: true },
    resumo: { type: String, required: true },
    autores: { type: [String], required: true }
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
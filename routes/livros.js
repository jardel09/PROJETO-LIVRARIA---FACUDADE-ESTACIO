const express = require('express');
const router = express.Router();
const Livro = require('../modelo/livro-schema');

router.get('/', async (req, res) => {
    const livros = await Livro.find({});
    res.json(livros);
});

router.post('/', async (req, res) => {
    await Livro.create(req.body);
    res.json({ mensagem: "Inclusão efetuada" });
});

router.delete('/:id', async (req, res) => {
    await Livro.deleteOne({ _id: req.params.id });
    res.json({ mensagem: "Exclusão efetuada" });
});

module.exports = router;
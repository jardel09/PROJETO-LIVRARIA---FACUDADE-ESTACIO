const mongoose = require('mongoose');

async function conectar() {
    try {
        await mongoose.connect('mongodb://localhost:27017/livraria');
        console.log('✅ Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    }
}

conectar();

module.exports = mongoose;
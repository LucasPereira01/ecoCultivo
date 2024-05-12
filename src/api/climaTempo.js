const axios = require('axios');
const data = require('../data.json');

async function getStatusCidade() {
    try {
        const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/4371/current?token=6fb01449a637457ea38b3f0d9aa9879f';
        const resposta = await axios.get(url);

        const { id, name, state, country, data } = resposta.data;
        console.log(resposta.data);
        

        // Verifique se o campo "name" corresponde corretamente ao campo "nome"
        return { id, nome: name, estado: state, pais: country, dados: data };
        
    } catch (erro) {
        // Lidar com erros
        console.error('Erro ao obter o estado do clima:', erro);
        return data; // Ou tratar o erro de outra forma
    }
}

// Aguardar a conclusão da função getStatusCidade() e acessar seu resultado
(async () => {
    const resultado = await getStatusCidade();
    console.log(resultado);
})();

module.exports = { getStatusCidade };

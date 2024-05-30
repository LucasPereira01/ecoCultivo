const SerialPort = require('serialport'); // Importa a biblioteca serialport

const porta = "COM3"; // Ou a porta serial que você está usando
const baudRate = 9600;

const arquivo = "logger.json";

const port = new SerialPort(porta, { baudRate: baudRate });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

console.log("Abrindo Serial");

parser.on('data', data => {
    console.log(data);
    
    if (data.includes("Temperatura") && data.includes("Umidade")) {
        const temperatura = parseFloat(data.split("Temperatura: ")[1].split(" °C")[0]);
        const umidade = parseFloat(data.split("Umidade: ")[1].split(" %")[0]);
        
        // Adicione mais atributos conforme necessário
        const registro = {
            temperatura: temperatura,
            umidade: umidade,
            umidade_solo: 'NA', // Exemplo de umidade do solo (fictícia)
            nivel_reservatorio: 'NA' // Exemplo de nível de reservatório de água (fictício)
        };
        
        // Escreve o registro no arquivo JSON
        fs.writeFileSync(arquivo, JSON.stringify(registro));
    }
});

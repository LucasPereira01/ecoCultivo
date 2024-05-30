import serial
import json

porta = "COM3"
baud = 9600
arquivo = "C:\\Users\\Lucas\\Desktop\\Nova pasta\\ecoCultivo\\src\\logger.json"

ser = serial.Serial(porta, baud)
ser.flushInput()
print("Abrindo Serial")

while True:
    data = ser.readline().decode("utf-8").strip()
    print(data)
    
    # Verifica se a linha contém os dados de temperatura e umidade
    if "Temperatura" in data and "Umidade" in data:
        # Extrai os valores de temperatura e umidade da linha
        temperatura = float(data.split("Temperatura: ")[1].split(" °C")[0])
        umidade = float(data.split("Umidade: ")[1].split(" %")[0])
        
        # Novos atributos fictícios (você pode adicionar mais conforme necessário)
        umidade_solo = 'NA'  # Exemplo de umidade do solo (fictícia)
        nivel_reservatorio = 'NA'  # Exemplo de nível de reservatório de água (fictício)
        
        # Cria um dicionário para armazenar os dados
        registro = {
            "temperatura": temperatura,
            "umidade": umidade,
            "umidade_solo": umidade_solo,
            "nivel_reservatorio": nivel_reservatorio
        }
        
        # Sobrescreve o arquivo JSON com o novo registro
        with open(arquivo, "w") as file:
            json.dump(registro, file)

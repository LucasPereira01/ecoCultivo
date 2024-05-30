#include <dht11.h>
#define DHT11PIN 4

dht11 DHT11;
// Define o pino do sensor YL-69
const int sensorPin = A0;
const int PINO_RELE = A1;


void setup() {
  Serial.begin(9600);
 
  pinMode(PINO_RELE, OUTPUT);
}

void loop() {
  int chk = DHT11.read(DHT11PIN);
  //float temperature = random(10, 40);   // Gera uma temperatura aleatória entre 10°C e 40°C
  //float humidity = random(30, 70);      // Gera uma umidade aleatória entre 30% e 70%
  
  float temperatura = DHT11.temperature;
  float humidade = DHT11.humidity;

  Serial.print("Temperatura: ");
  Serial.print((float)temperatura,2);
  Serial.print(" °C, Umidade: ");
  Serial.print((float)humidade,2);
  Serial.println(" %");

    // Lê o valor do sensor
  int sensorValue = analogRead(sensorPin);

  // Converte o valor lido para umidade em porcentagem
  //int humidity = map(sensorValue,  0, 1023, 255, 0);

  // Imprime o valor da umidade no monitor serial
  //Serial.print("Umidade do solo: ");
  //Serial.print(humidity);
  //Serial.println("%");

 // Verifica se a umidade está abaixo de um valor limite
  if (temperatura < 26) {
    // Liga o motor de irrigação
    digitalWrite(PINO_RELE, HIGH);
    Serial.println("Desligando o motor de irrigação...");
  } else {
    // Desliga o motor de irrigação
    digitalWrite(PINO_RELE, LOW);
    Serial.println("Ligando o motor de irrigação...");
  }
  
  delay(2000);  // Aguarda 2 segundos antes de enviar outro registro
}

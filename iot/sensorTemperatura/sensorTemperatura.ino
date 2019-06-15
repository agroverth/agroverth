#include "Thermistor.h"
  
THERMISTOR temp(2, 10000, 3950, 10000);
void setup() {
  //PORTA SERIAL
  Serial.begin(9600);
  //INTERVALO DE 1 SEGUNDO
  delay(1000); 
}

void loop() {
  int temperature = temp.read();
  Serial.print(temperature);
  Serial.println("*C");
  delay(1000);
}

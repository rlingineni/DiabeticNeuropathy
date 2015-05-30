/* 
Theoretically we can also do weight tracking and pressure distribution maps. 
Weight is measured using formula P = F/A. Where F = MG. In 
this case, Area is 0.00384048 metres^2. 
When there is 5 pounds of weight, there is about a force of 5820 PA. 
The sensor gives an averge of 3V when 5pounds of mass is distributed, thus
giving a linear multiplying constant 
of 1940 to convert between both. 

*/
int fsrPin1 = 0;     // the FSR and 10K pulldown are connected to a0
double fsrReadingRight;     // the analog reading from the FSR resistor divider
int fsrPin2 = 1;     // the FSR and 10K pulldown are connected to a0
int fsrReadingLeft;     // the analog reading from the FSR resistor divider
double area;
double weight; 
double mass;
double pressure;
 
void setup(void) {
  // We'll send debugging information via the Serial monitor
  Serial.begin(57600);   
}
 
void loop(void) {
  fsrReadingRight = analogRead(fsrPin1);  
   area = 0.00384048;
   pressure  = (1940 * fsrReadingRight);
   weight = pressure * area;
   mass = weight/9.8;
 
 
  Serial.print(fsrReadingRight);
  Serial.print("," );
  Serial.print(" mass=");
  Serial.print(mass);
  Serial.print("," );
  Serial.print(" pressure=");
  Serial.print(pressure);
  Serial.println();
  
  
  
  
  delay(1000);
} 



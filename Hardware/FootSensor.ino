<<<<<<< HEAD
/* FSR simple testing sketch.

Connect one end of FSR to power, the other end to Analog 0.
Then connect one end of a 10K resistor from Analog 0 to ground

For more information see www.ladyada.net/learn/sensors/fsr.html */

=======
/* FSR simple testing sketch.

Connect one end of FSR to power, the other end to Analog 0.
Then connect one end of a 10K resistor from Analog 0 to ground

For more information see www.ladyada.net/learn/sensors/fsr.html */

>>>>>>> origin/master
int fsrPin1 = 0;     // the FSR and 10K pulldown are connected to a0
int fsrReadingRight;     // the analog reading from the FSR resistor divider
int fsrPin2 = 1;     // the FSR and 10K pulldown are connected to a0
int fsrReadingLeft;     // the analog reading from the FSR resistor divider
<<<<<<< HEAD

void setup(void) {
  // We'll send debugging information via the Serial monitor
  Serial.begin(57600);
}

void loop(void) {
  fsrReadingRight = analogRead(fsrPin1);
  fsrReadingLeft = analogRead(fsrPin2);

=======

void setup(void) {
  // We'll send debugging information via the Serial monitor
  Serial.begin(57600);
}

void loop(void) {
  fsrReadingRight = analogRead(fsrPin1);
  fsrReadingLeft = analogRead(fsrPin2);

>>>>>>> origin/master
  Serial.print(fsrReadingRight);
  Serial.print("," );
  Serial.print(fsrReadingLeft);
  Serial.println();

<<<<<<< HEAD


  delay(1000);
}
=======


  delay(1000);
}
>>>>>>> origin/master



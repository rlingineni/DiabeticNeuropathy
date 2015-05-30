#Diabetic Neuropathy

A project created during the 2015 PACT Healthcare App Challenge.

---

Diabetic Neuropathy is a condition often found in diabetic patients. Patients suffering from neuropathy often lose sensation within their feet, and lower legs. This means that these patients are unaware of what they might be stepping on, and unaware of the amount of pressure they apply to each foot. This leads to more complications such as blisters and ulcers.

Our project aims to aid patients lessen the severe effects of DN (Diabetic Neuropathy) and improve the healing process for those with complications caused by DN (i.e. ulcers, blisters, abrasions). Our project does this by collecting real-time foot pressure data on various parts of the feet and offering haptic feedback to help a patient orient his weight differently to prevent  excessive pressure at any points. This approach will reduce the number of foot ulcers a DN patient may develop, in addition to helping the healing process.

The system consists of two vibrating motors, a spark core, and two force sensitive sensors on both sides of the foot arch, though more can easily be added, and a user interface (mobile/desktop website).

As a test case, we assumed a patient who has developed a foot ulcer in the anterior region of their left foot is using our product. The system can be setup to warn the patient when they place too much pressure near the ulcerous area. In order to warn the patient, the system will flash an alert on either the mobile or desktop interface. In addition, there are two vibration motors are worn on a wristband. The motors work independly of each other, one placed higher than the other, to denote posterior and anterior of the foot region. Based on where the pressure is placed, one of the motors will buzz to denote where the patient must shift his weight. Therefore the patient can reliably know how and where to apply pressure to his feet when walking in an effective manner. Thus helping him heal quicker and prevent future ulcers.

The graphic interface is a web implementation, designed to be scalable across multiple platforms. It can show the patient the amount of pressure they are putting on each position in their foot (in Pascals), along with a graphical representation of the current pressure (transparent green to opaque red). It also shows the average pressure, for the patient to monitor themselves over a period of time. Eventually, as data accumulates, the circular graph will make it more evident to ultimately know how evenly a user is distributing weight. The webpage can also flash alerts to notify users of an imbalance.

In the future, we plan on adding better and more accurate sensors to get greater precision when creating foot pressure maps. With some more backing, we could also integrate our DIY sensor technology into the sole of the shoe itself. With better sensors, we will also be able to perform accurate weight tracking (for which we already have an algorithm) of a patient by simply standing on the shoes.

___

Caution! A few values in the source code are calibrated specifically for these sensors, which were made using DIY materials for this particular project. The values given are good estimates and indicators of pressure change, but they are not comparable to the accuracy nor precision of more advanced hardware.

---

##Pictures, Diagrams:

<img src="https://raw.githubusercontent.com/rlingineni/DiabeticNeuropathy/gh-pages/readmeFiles/mobile.png">

<img src="https://raw.githubusercontent.com/rlingineni/DiabeticNeuropathy/gh-pages/readmeFiles/desktop.png" width=500>

<img src="https://raw.githubusercontent.com/rlingineni/DiabeticNeuropathy/gh-pages/readmeFiles/sensorSetup.jpg">

<img src="https://raw.githubusercontent.com/rlingineni/DiabeticNeuropathy/gh-pages/readmeFiles/sparkCore.jpg" width=500>


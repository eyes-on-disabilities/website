# Eye-Tracking: Was ist das, wie geht das?

![](/kosmonaut-with-eye-tracker-on-iss.jpg "Kosmonaut Sergei Krikaljow auf der ISS um 2005. Sergei hat einen tragbaren Eye-Tracker an seinem Kopf geschnallt. Der Eye-Tracker wirkt sehr klobig, aber stabil. Sergei schwebt in der Mitte des Raumes, umgeben von technischen Geräten.")
*Kosmonaut Sergei Krikaljow mit einem tragbaren Eye-Tracker auf der ISS, um 2005. Foto von Chronos Vision GmbH auf [Wikipedia](https://commons.wikimedia.org/wiki/File:Eye_Tracking_Device_003.jpg) unter [GPL](http://www.gnu.org/licenses/gpl.html).*

Das [Eye-Tracking](https://de.wikipedia.org/wiki/Eye-Tracking) – zu Deutsch "Blickerfassung" – bezeichnet das Aufzeichnen der Blickrichtung.
Dazu verwendete Kameras werden dabei auf den Kopf oder gar direkt auf das Auge ausgerichtet.
Mithilfe spezieller Software wird dann die Blickrichtung ausgewertet und zum Beispiel in eine Mausbewegung übersetzt.
Das Eye-Tracking ist eng mit dem Head-Tracking gekoppelt, also das Aufzeichnen der Kopfbewegung.
Auch das geschieht mit Kameras und spezieller Software.
Je nach Anwendung werden Eye- und Head-Tracking in Kombination eingesetzt, weil die Kopfbewegung einen großen Einfluss auf die Blickrichtung hat.

## Anwendungsgebiete

Das Eye-Tracking ist kein neues Verfahren.
Die Marktforschung setzt seit Jahren das Eye-Tracking ein, um den Blick der Testpersonen zu analysieren (Beispiel: [Pupil Labs](https://pupil-labs.com/)).
Im Gesundheitssektor werden Eye-Tracking-Systeme an Betroffenen von Motoneuron-Krankheiten gegeben, um ihnen die Kommunikation zu ermöglichen – dies leider jedoch zu hohen Preisen oder langen Wartezeiten (Beispiel: [Tobii Dynavox](https://de.tobiidynavox.com/)).
Neuerdings hat die Videospiel-Community das Eye- und Head-Tracking für sich entdeckt.
Für mehr Immersion können Spielerinnen und Spieler ihre Köpfe drehen, um sich in der virtuellen Welt umzusehen (Beispiel: [EyeTrackVR](https://docs.eyetrackvr.dev/)).

## Die drei Bereiche des Eye-Trackings: Aufzeichnung, Kalibrierung, Aktion {#areas-of-eye-tracking}

![](/3-areas.jpg "Eine Illustration zeigt die drei Bereiche des Eye-Trackings.")
*Die drei Bereiche des Eye-Trackings: 1. Aufzeichnung, 2. Kalibrierung, 3. Aktion. [© IFB-Stiftung](https://ifb-stiftung.de/)*

Wer sich mit Eye- und Head-Tracking beschäftigt, ist immer mit den folgenden drei Bereichen konfrontiert:

1. Aufzeichnung: Hier ist zu klären, wie das Auge oder der Kopf aufgezeichnet werden sollen.
  Wo befindet sich zum Beispiel die Kamera?
  Werden zusätzliche Geräte benötigt?
  Wie genau und fehleranfällig ist die Aufzeichnung?
  Welche Software-Anwendung kann die Aufzeichnung weiterverarbeiten?
2. Kalibrierung: Meistens muss ein Kalibrierungsschritt durchlaufen werden, damit die verwendete Software weiß, welcher Blickwinkel was bedeutet.
  Beliebt ist die Kalibierung mit Punkten, die auf dem Bildschirm angezeigt und mit dem Blick fokussiert werden sollen.
  Lediglich bei simplen Anwendungen, wo zum Beispiel nur die grobe Blickrichtung wie "links" und "rechts" geprüft wird, ist keine Kalibrierung notwendig.
3. Aktion: Sobald die Anwendung (nach einer Kalibierung) verstanden hat, welcher Blickwinkel was bedeutet, kann sie entsprechende Aktionen ausführen.
  Zum Beispiel kann sie auf Basis des Blickwinkels den Mauszeiger bewegen, oder eine Sprachausgabe anstoßen.

## Varianten der Aufzeichnung

Es gibt verschiedene Varianten, wie der Blick aufgezeichnet werden kann.
Es gibt zum Beispiel Geräte, die am Kopf befestigt werden und eine Kamera direkt vor das Auge platzieren.
Andere Geräte werden mit größerem Abstand befestigt und richten eine Kamera auf den gesamten Kopf, wodurch sowohl der Kopf als auch das Auge gleichzeitig aufgezeichnet werden kann.
Manche Geräte benutzen einfache Kameras, wie sie bereits in Laptops oder Smartphones verbaut sind.
Manche nutzen hingegen Infrarot-Kameras, um ein klareres Bild vom Auge zu erhalten.

All diese Varianten haben Vor- und Nachteile, die leider nicht nur auf Preis und Genauigkeit beschränkt sind.
Selbst teure Geräte können Schwierigkeiten mit schlechten Lichtverhältnissen haben, nicht jede Software kommt mit dem Tragen einer Alltagsbrille zurecht, und nicht jede Head-Tracking-Methode kann unkontrollierte Kopfbewegungen wie bei Muskelkrämpfen ausgleichen.
Deshalb müssen Betroffene und Angehörige viel experimentieren, welche Lösung für sie am Besten funktioniert.
Jedoch lässt sich auch mit schon wenigen Mitteln ein gutes Eye-Tracking-System aufbauen, und das mit Technik, die bereits vorhanden ist.
Das ausgediente Smartphone in der Schublade kann als hervorragende, leichtgewichtige Eye-Tracking-Lösung herhalten.
Ein Laptop mit Webcam kann zu einer vollwertigen Komplettlösung mit Sprachassistenten eingerichtet werden.
Und wenn das noch nicht reicht, können für wenig Geld speziellere Geräte dem System hinzugefügt werden.
Im Folgenden werden die verschiedenen Eye- und Head-Tracking-Verfahren mit ihren Vor- und Nachteilen beleuchtet.

### Tragbare Eye-Tracker {#wearable-based-eye-tracking}

![](/our-eye-tracking-glasses.jpg "Unser Eye-Tracking-Brillengestell in Nahaufnahme. Es handelt sich um ein Brillengestell mit einem 3D-gedruckten Ärmchen und einer Minikamera. Klebeband und Kabel lassen das Gestell wie einen Prototypen aussehen.")
*Ein Tragbarer Eye-Tracker: Unser Eye-Tracking-Brillengestell. [© IFB-Stiftung](https://ifb-stiftung.de/)*

Tragbare Eye-Tracker werden am Kopf befestigt und sind häufig Brillen mit eingebauten Kameras.
Die Kameras sind direkt vor dem Auge platziert und können somit sehr genaue Augenbewegungen aufnehmen.
Deshalb müssen die Kameras auch keine hohe Auflösung bieten: 0,5 Megapixel reichen bereits für ein gutes Ergebnis.
Lediglich eine große Brennweite sollten die Kamera aufweisen, um das gesamte Auge erfassen zu können.

![](/visible-and-ir-light.jpg "Ein zwei geteiltes Bild. Links zeigt ein Auge unter sichtbaren Licht. Rechts zeigt ein Auge unter Infrarotlicht.")
*Links ein Auge unter normalen Licht, rechts eins unter Infrarotlicht. [© IFB-Stiftung](https://ifb-stiftung.de/)*

Besonders beliebt ist die Nutzung von Infrarotkameras und -beleuchtung, mit welcher die Pupille deutlich klarer zu erkennen ist.
Auch können dadurch die Eye-Tracker im Dunkeln verwendet werden.
Jedoch ist Vorsicht geboten: Zu starke Infrarot-Strahlung kann das Auge schädigen.
Deshalb sollte die Art und Stärke der Infrarotbeleuchtung sowie der Abstand zum Auge wohlüberlegt sein.

Da tragbare Eye-Tracker nur das Auge aber nicht die Kopfbewegung aufzeichnen, können sie allein nur für manche Anwendungen eingesetzt werden.
Um zum Beispiel den Blick auf einen Bildschirm zu messen, muss entweder der Kopf still gehalten oder zusätzlich ein Head-Tracking-System eingesetzt werden.

### Externe, bildschirmbasierte Eye-Tracker {#screen-based-eye-tracking}

![](/eye-tracker-external-webcam.jpg "Eine Webcam ist an einem Laptop-Bildschirm geklemmt.")
*Eine Webcam kann als externes Eye-Tracking-Gerät ausreichen. Foto von Matheus Bertelli auf [Pexels](https://www.pexels.com/photo/modern-video-camera-hanging-on-display-of-laptop-7172701/)*

Externe beziehungsweise bildschirmbasierte Eye-Tracker sind Geräte, die zum Beispiel auf einem Stativ oder am Bildschirm befestigt werden.
Dabei muss das kein dazugekauftes Gerät sein: Die Webcam eines Laptops oder die Frontkamera des Smartphones kann bereits als externer Eye-Tracker dienen.
Aufgrund des Abstandes kann sowohl der Kopf als auch die Augen aufgezeichnet werden, wodurch sich ohne Extrakosten bereits ein Eye- und Head-Tracking-System aufsetzen lässt.
Der Abstand zwischen der Kamera und dem Auge wirkt sich jedoch negativ auf die Genauigkeit aus.
Auch haben schlechtere Lichtverhältnisse einen größeren Einfluss auf das Tracking-Ergebnis.
Deshalb bieten Firmen optimierte Kameras zum Kauf an, die am Bildschirm befestigt werden.
Die Kameras verfügen über eine höhere Auflösung und Infrarot-Leuchten, um auch bei schlechten Lichtverhältnissen ein gutes Tracking-Ergebnis zu erzielen.

### Head-Tracker {#head-tracking}

![](/head-tracking.jpg "Ein Screenshot von der Head-Tracking-Software 'AITrack'. Das AITrack-Fenster zeigt die Aufnahme einer Webcam. In der Aufnahme ist ein Gesicht zu sehen. Die Software scheint das Gesicht zu erkennen und entsprechende Markierungen zu platzieren.")
*AITrack ist eine Head-Tracking-Software, die mit lediglich mit einer Webcam funktioniert. [© IFB-Stiftung](https://ifb-stiftung.de/)*

Um die Kopfbewegung aufzuzeichnen gibt es mehrere Varianten.
In den meisten Fällen befindet sich eine Kamera auf einem Stativ oder an einem Bildschirm befestigt und schaut auf dem Kopf.
Für ein grobes Head-Tracking reicht schon die Laptop- oder Smartphone-Kamera.
Mittels Gesichtserkennungssoftware kann so, ohne weitere Geräte, die Kopfposition ermittelt werden.
Diese Software ist nicht sonderlich genau und benötigt etwas mehr Rechenleistung, bietet aber einen einfachen Einstieg.
Für ein noch besseres Tracking-Ergebnis können einfache Marker auf Papier gedruckt am Kopf platziert werden.
Eine Software erkennt diese Marker und berechnet die entsprechenden Winkel.
Firmen bieten auch hier spezielle Geräte an für das beste Tracking-Ergebnis.
So kommt bei einem Anbieter eine Infrarotkamera zusammen mit tragbaren Reflektoren zum Einsatz.

Neben der Variante, wo die Kamera vom Bildschirm aus auf den Kopf gerichtet ist, gibt es auch die, wo es umgekehrt ist: Die Kamera wird am Kopf getragen und ist nach vorne auf den Bildschirm gerichtet.
Marker werden dann am Bildschirm befestigt, oder werden gar vom Bildschirm selbst angezeigt.
Diese Variante wird jedoch eher seltener angewandt.

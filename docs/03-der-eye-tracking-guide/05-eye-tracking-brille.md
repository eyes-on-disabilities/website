# Eye-Tracking mit dem Eye-Tracking-Brillengestell

![](/our-eye-tracking-glasses.jpg "Unser Eye-Tracking-Brillengestell in Nahaufnahme. Es handelt sich um ein Brillengestell mit einem 3D-gedruckten Ärmchen und einer Minikamera. Klebeband und Kabel lassen das Gestell wie einen Prototypen aussehen.")
*Unser Eye-Tracking-Brillengestell. [© IFB-Stiftung](https://ifb-stiftung.de/)*

In diesem Kapitel stellen wir unser Eye-Tracking-Brillengestell vor, welche Vor- und Nachteile sie hat, und welche Möglichkeiten sich mit Dieser eröffnen.

::: warning Das Brillengestell ist noch in Entwicklung
Das Brillengestell befindet sich noch in Entwicklung.
Zwar ist es mit dem aktuellen Design bereits möglich, Eye-Tracking zu betreiben, jedoch gibt es Einschränkungen in Funktionalität und Tragekomfort.
Es ist mit gravierenden Änderungen in den nächsten Wochen und Monaten zu rechnen.
:::

## Funktionsweise

Das Eye-Tracking-Brillengestell wird wie eine normale Brille aufgesetzt.
Auf ein justierbares Ärmchen an der Seite befestigt ist eine kleine Kamera, die direkt auf das Auge gerichtet ist.
Die Kamera wird dann über ein USB-Kabel mit einem Computer verbunden, auf welchem dann die verarbeitende Software läuft.
Falls du noch keinen Laptop oder Computer hast, empfehlen wir dir, ein günstiges Gebrauchtgerät zuzulegen. Mehr dazu hier: [Ich habe noch keinen Laptop oder Computer mit Webcam](/03-der-eye-tracking-guide/04-webcam#buying-a-laptop) (Die Webcam brauchst du für dieses Kapitel nicht.)

Vorteile des Eye-Tracking-Brillengestells sind, dass durch die Nähe zum Auge der Blick sehr genau erfasst werden kann.
Auch handelt es sich um eine Infrarotkamera mit integrierter Beleuchtung, wodurch die Aufzeichnung noch besser wird und die Brille bei schlechten Lichtverhältnissen benutzt werden kann.
Nachteil ist leider, dass die Brille von sich aus nicht die Kopfbewegung aufzeichnet, weshalb entweder der Kopf bei der Benutzung still gehalten werden oder zusätzliches Head-Tracking angewandt werden muss.

::: info Kurzer Einschub: Wem wir das Designs zu verdanken haben
Die Brille basiert auf der Arbeit von _Pupil Labs GmbH_, _EyeTrackVR_ und _moserk_.
Dank deren quelloffenen Programmcodes und Hardware-Designs hatten wir eine starke Grundlage, auf die wir unser Gestell entwickeln konnten.
Vielen Dank.

Pupil Labs GmbH: https://docs.pupil-labs.com/core/

EyeTrackVR: https://docs.eyetrackvr.dev/

moserk: https://www.thingiverse.com/moserk/
:::

## Wie bekomme ich diese Brille?

Du hast zwei Möglichkeiten: Entweder du baust dir das Gestell selbst zusammen oder du kontaktierst uns und wir helfen dir dabei.
Aktuell haben wir leider noch keinen Shop.

Du brauchst:
- Eine Infrarotkamera, zum Beispiel diese: https://www.amazon.de/Mini-Kamera-Videomodul-USB-Kameramodul-GC0308-Chip-300-000-Werbemaschinen/dp/B08HM1P5SP
- Ein USB-A-Verlängerungskabel
- Ein Brillengestell (ohne Gläser am Besten)
- etwas, was die Kamera stabil am Gestell befestigt und vor dem Auge platziert.
  Das geht
    - selbstgebastelt mit dickem Draht und Klebeband, oder
    - mit diesem 3D-gedruckten Ärmchen: https://www.thingiverse.com/thing:893805

Bei der selbstgebastelten Variante befestigst du das eine Ende des Drahtes an der Seite der Brille und das andere Ende an der Kamera.
Die Kamera sollte grob auf dein Auge gerichtet sein.
Der Draht sollte im Nachhinein eine genauere Positionierung ermöglichen, nach einer Positionierung aber stabil bleiben.

Solltest du einen 3D-Drucker besitzen, kannst du dir auch dieses justierbare Ärmchen drucken und an dein Brillengestell befestigen: https://www.thingiverse.com/thing:893805.
Die `world_cam_mount.stl` kannst du beim Druck auslassen, weil wir sie nicht brauchen.
Zum Zusammenbauen empfehlen wir M3-Schrauben und -Muttern.

Bei beiden Varianten wird am Ende die Kamera mit dem Computer, wenn nötig mithilfe des USB-Verlängerungskabels.

## Eye-Tracking mit Pupil, Miranda und Optikey

::: info In Kürze
- **Art des Trackings:** [tragbares Eye-Tracking](/02-grundlagenwissen/02-eye-tracking-was-ist-das#wearable-based-eye-tracking)
- **Benötigte Geräte und Materialien:** Eye-Tracking-Brillengestell (~30€)
- **Aufzeichnung:** [Pupil (kostenlos)](/04-software-und-hardware-im-detail/pupil)
- **Kalibrierung:** [Miranda (kostenlos)](/04-software-und-hardware-im-detail/miranda)
- **Aktion:** [Optikey (kostenlos)](/04-software-und-hardware-im-detail/optikey)
- **Anforderungen:**
    - Die Kamera des Gestells muss das Auge klar erkennen können.
:::

In dieser Anleitung verwenden wir Pupil, Miranda und Optikey.
Pupil ist eine kostenlose Software, die das Auge aufzeichnet.
Die Software erlaubt eine extrem feine Einstellung der Aufzeichnung.
Jedoch ist sie auch sehr komplex und hat somit eine steile Lernkurve.
Miranda ist eine kostenlose Software, mit welcher Daten von Trackern in Bildschirmpositionen umgewandelt werden – also eine Kalibrierungssoftware.
Optikey ist eine kostenlose Bildschirmtastatur, die darauf ausgelegt ist, mit dem Blickrichtung oder der Kopfposition bedient zu werden.

Die Anleitung:
1. Setze das Eye-Tracking-Brillengestell auf und verbinde sie mit dem Computer.
2. Starte Pupil Capture. Drei Fenster sollten sich öffnen.
3. Wäre das Fenster "eye 0" aus.
4. Unter der Einstellung "Video Source" aktiviere "Enable Manual Camera Selection" und wähle die Kamera aus. Das Fenster sollte nun anzeigen, was die Kamera sieht.
5. Wähle nun den Bereich im Bild aus, in dem sich das Auge befindet.
   Unter der Einstellung "General Settings" setze dem Modus auf "ROI" (Range of Interest).
   Ziehe dann das Rechteck auf die Größe des Auges. Du solltest nun bereits sehen, dass Pupil deine Pupille erkennt.
6. Lass Pupil die Größe deines Auges berechnen.
   Unter der Einstellung "Pye3D Detector" klicke auf "Reset 3D model".
   Schaue nun für ungefähr 10 Sekunden mit dem Auge hin und her.
   Wenn alles gut funktioniert hat, sollte ein blauer Kreis angezeigt werden, der ungefähr die Größe deines Augapfels hat.
   Auch sollte deine Pupille immer korrekt mit einem orangenen Oval eingezeichnet werden.
3. Öffne Miranda und währe dort die Data Source "Pupil" aus. Der Haken "receive data from data source." sollte gesetzt sein.
5. Starte eine Kalibrierung durch den Druck des Knopfes "re-calibrate".
6. Führe die Kalibrierung durch, bis du zufrieden bist. Bestätige dann die Kalibrierung.
7. Öffne OptiKey. Stelle sicher, dass als Quelle die Mausposition eingestellt ist. Das tust du in Optikeys Management-Konsole (ALT+M). Ob es funktioniert hat kannst du testen, indem du mit der Maus über die Buchstaben fährst. Wenn Optikey auf deine Maus reagiert, hat es funktioniert.
8. In Miranda, wähle nun den Publisher "Mouse Position" aus. Dein Mauszeiger sollte nun deiner Kopfbewegung folgen. Du kannst nun mit deinem Kopf deine Maus bewegen.

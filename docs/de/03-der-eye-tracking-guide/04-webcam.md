# Eye-Tracking mit Laptop oder Computer mit Webcam

In diesem Kapitel wird gezeigt, welche Lösung bereits existieren, die nur einen Laptop oder einen Computer mit Webcam erfordern.

## Funktionsweise

Bei allen in diesem Kapitel genannten Lösungen handelt es sich um [externe Eye-Tracking-Lösungen](/de/02-grundlagenwissen/02-eye-tracking-was-ist-das#screen-based-eye-tracking) beziehungsweise [Head-Tracking](/de/02-grundlagenwissen/02-eye-tracking-was-ist-das#head-tracking): eine Webcam wird an einem Bildschirm oder auf einem Stativ befestigt und frontal auf Kopf oder auf das Gesicht gerichtet.
Der Vorteil dieser Lösungen ist der simple Aufbau, und dass viele Haushalte bereits die geforderten Geräte besitzen.
Der Nachteil ist, dass aufgrund der Entfernung zum Auge die Blickrichtung nur bedingt gut aufgezeichnet werden kann.
Auch sind die Lösungen anfällig für schlechte Lichtverhältnisse.

## Ich habe noch keinen Laptop oder Computer mit Webcam {#buying-a-laptop}

Sollte ein Laptop mit eingebauter Webcam oder ein Computer mit separater Webcam noch nicht vorhanden sein, können sie als Gebrauchtgeräte günstig erworden werden.
Ein gebrauchter Laptop oder Computer mit empfohlenen Anforderungen ist bereits für weniger als 200€ zu erwerben.

::: info Empfehlungen zum Laptop oder Computer

- **Prozessor:** Intel Core i5 7200U @ 2,5 GHz
- **Arbeitsspeicher:** 8GB
- **Freier Speicherplatz:** 8GB
- **Betriebssystem:** Windows 10
  :::

Zur Webcam haben wir keine gesonderten Anforderungen. Sollte nicht schon eine im Laptop verbaut sein ist eine 20€-Webcam vollkommen ausreichend.
Wir empfehlen für Käufe den https://www.afbshop.de/, auf welchem aufbereitete, gebrauchte Geräte mit Garantie weiterverkauft werden.
Der Shop zeichnet sich nicht nur dadurch aus, dass durch dessen Arbeit tausende Tonnen CO₂ und Elektroschrott eingespart wird, sondern auch, dass von den 660 Mitarbeitenden fast die Hälfte aus Menschen mit Behinderungen besteht.

## Head-Tracking mit AITrack, Miranda und Optikey

::: info In Kürze

- **Art des Trackings:** [Head-Tracking](/de/02-grundlagenwissen/02-eye-tracking-was-ist-das#head-tracking)
- **Benötigte Geräte und Materialien:** Webcam (20€)
- **Aufzeichnung:** [AITrack (kostenlos)](/de/04-software-und-hardware-im-detail/aitrack)
- **Kalibrierung:** [Miranda (kostenlos)](/de/04-software-und-hardware-im-detail/miranda)
- **Aktion:** [Optikey (kostenlos)](/de/04-software-und-hardware-im-detail/optikey)
- **Anforderungen:** - Eine Webcam muss vor dem Kopf platziert werden. - Der Kopf muss wissentlich bewegt werden können.
  :::

In dieser Anleitung verwenden wir AITrack, Miranda und Optikey.
AITrack ist eine kostenlose Software, die die Kopfbewegung aufzeichnet.
Diese Software benötigt keinerlei weitere Hilfsmittel und kommt auch mit schlechten Lichtverhältnissen zurecht.
Miranda ist eine kostenlose Software, mit welcher Daten von Trackern in Bildschirmpositionen umgewandelt werden – also eine Kalibrierungssoftware.
Optikey ist eine kostenlose Bildschirmtastatur, die darauf ausgelegt ist, mit dem Blickrichtung oder der Kopfposition bedient zu werden.

Die Anleitung:

1. Richte deine Webcam in Richtung deines Kopfes.
   Der Kopf soll gänzlich zu sehen sein.
2. Öffne AITrack und starte das Tracking. Das Programm sollte nun dein Gesicht zeigen.
3. Öffne Miranda und währe dort die Data Source "Opentrack" aus. Der Haken "receive data from data source." sollte gesetzt sein.
4. Starte eine Kalibrierung durch den Druck des Knopfes "re-calibrate".
5. Führe die Kalibrierung durch, bis du zufrieden bist. Bestätige dann die Kalibrierung.
6. Öffne OptiKey. Stelle sicher, dass als Quelle die Mausposition eingestellt ist. Das tust du in Optikeys Management-Konsole (ALT+M). Ob es funktioniert hat kannst du testen, indem du mit der Maus über die Buchstaben fährst. Wenn Optikey auf deine Maus reagiert, hat es funktioniert.
7. In Miranda, wähle nun den Publisher "Mouse Position" aus. Dein Mauszeiger sollte nun deiner Kopfbewegung folgen. Du kannst nun mit deinem Kopf deine Maus bewegen.

## Head-Tracking mit ArUco Markern in Opentrack, Miranda und Optikey

::: info In Kürze

- **Art des Trackings:** [Head-Tracking](/de/02-grundlagenwissen/02-eye-tracking-was-ist-das#head-tracking)
- **Benötigte Geräte und Materialien:** Webcam (20€), Drucker um Marker zu drucken
- **Aufzeichnung:** [Opentrack (kostenlos)](/de/04-software-und-hardware-im-detail/opentrack)
- **Kalibrierung:** [Miranda (kostenlos)](/de/04-software-und-hardware-im-detail/miranda)
- **Aktion:** [Optikey (kostenlos)](/de/04-software-und-hardware-im-detail/optikey)
- **Anforderungen:** - Eine Webcam muss vor dem Kopf platziert werden. - Es wird ein Drucker benötigt, um die ArUco Marker zu drucken. - Der Kopf muss wissentlich bewegt werden können.
  :::

In dieser Anleitung verwenden wir Opentrack, Miranda und Optikey.
Opentrack ist eine kostenlose Software, die Head- und Eye-Tracker-Daten aufnehmen, verändern und weitergeben kann.
Auch sind einige Head-Tracker bereits in Opentrack direkt enthalten, wie das Tracken via ArUco-Markern.
ArUco-Marker sind auf Papier gedrucke, maschinenlesbare Rasterbilder – ähnlich wie QR-Codes – und werden von Opentrack über die Webcam erkannt.
Miranda ist eine kostenlose Software, mit welcher Daten von Trackern in Bildschirmpositionen umgewandelt werden – also eine Kalibrierungssoftware.
Optikey ist eine kostenlose Bildschirmtastatur, die darauf ausgelegt ist, mit dem Blickrichtung oder der Kopfposition bedient zu werden.

Die Anleitung:

1. Drucke auf Papier einen ArUco-Marker. Die Größe DIN A6 ist ausreichend: https://raw.githubusercontent.com/opentrack/opentrack/refs/heads/unstable/contrib/aruco/test3.png
2. Befestige den Marker an deinem Kopf, zum Beispiel mit einem Tesafilm an der Brille oder mit einem Stirnband. (Stelle dich darauf ein, dass du den Marker im Nachhinein nochmal um 90 Grad rotieren musst.)
3. Richte deine Webcam in Richtung deines Kopfes.
   Der Marker muss jederzeit gänzlich von der Webcam sichtbar sein.
4. Öffne Opentrack, wähle "ArUco" als Quelle aus, und starte das Tracking. Schau, ob sich das Tintenfisch-Logo korrekt wie dein Kopf bewegt.
5. Öffne Miranda und währe dort die Data Source "Opentrack" aus. Der Haken "receive data from data source." sollte gesetzt sein.
6. Starte eine Kalibrierung durch den Druck des Knopfes "re-calibrate".
7. Führe die Kalibrierung durch, bis du zufrieden bist. Bestätige dann die Kalibrierung.
8. Öffne OptiKey. Stelle sicher, dass als Quelle die Mausposition eingestellt ist. Das tust du in Optikeys Management-Konsole (ALT+M). Ob es funktioniert hat kannst du testen, indem du mit der Maus über die Buchstaben fährst. Wenn Optikey auf deine Maus reagiert, hat es funktioniert.
9. In Miranda, wähle nun den Publisher "Mouse Position" aus. Dein Mauszeiger sollte nun deiner Kopfbewegung folgen. Du kannst nun mit deinem Kopf deine Maus bewegen.

## Eye-Tracking mit dem Beam Eye-Tracker und Optikey

::: info In Kürze

- **Art des Trackings:** [externes Eye-Tracking](/de/02-grundlagenwissen/02-eye-tracking-was-ist-das#screen-based-eye-tracking)
- **Benötigte Geräte und Materialien:** Webcam (20€)
- **Aufzeichnung:** [Beam Eye-Tracker (2 Stunden kostenlose Testversion, dann einmalig 30€)](/de/04-software-und-hardware-im-detail/beam)
- **Kalibrierung:** Im Beam Eye-Tracker enthalten
- **Aktion:** [Optikey (kostenlos)](/de/04-software-und-hardware-im-detail/optikey)
- **Anforderungen:** - Eine Webcam muss vor dem Gesicht platziert werden.
  Je klarer die Augen erkennbar sind, umso besser.
  :::

In dieser Anleitung verwenden wir den Beam Eye-Tracker und Optikey.
Beam ist eine kostenpflichtige Software, die mithilfe der Webcam die Augenbewegung aufzeichnet.
Die Kalibrierung der Augenbewegung an den Bildschirm wird ebenso über Beam gelöst.
Optikey ist eine kostenlose Bildschirmtastatur, die darauf ausgelegt ist, mit dem Blickrichtung oder der Kopfposition bedient zu werden.

Die Anleitung:

1. Richte deine Webcam auf dein Gesicht.
   Die Augen sollten klar erkennbar sein.
   Für ein noch besseres Tracking-Ergebnis bringe die Webcam näher an dein Gesicht.
2. Starte den Beam Eye-Tracker.
3. Führe eine Kalibrierung durch.
4. Aktiviere die _Gaming Extensions_, damit Optikey die Tracking-Daten empfangen kann.
5. Öffne Optikey. Stelle sicher, dass als Quelle "Beam-Plugin-Optikey" ausgewählt ist. Das tust du in Optikeys Management-Konsole (ALT+M). Solltest du das Plugin noch nicht installiert haben, kannst du das auch in dieser Konsole tun.
6. Wenn du alles richtig gemacht hast, solltest du nun mit dem Beam Eye-Tracker die Bildschirmtastatur benutzen können.

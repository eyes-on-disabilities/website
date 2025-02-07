# Sicherheit bei Infrarotstrahlen

![](/visible-and-ir-light.jpg "Ein zwei geteiltes Bild. Links zeigt ein Auge unter sichtbaren Licht. Rechts zeigt ein Auge unter Infrarotlicht. Unter Infrarotlicht ist die Pupille leichter von der Iris zu unterscheiden.")
*Abb. 1: Links ein Auge unter normalen Licht, rechts eins unter Infrarotlicht. [© IFB-Stiftung](https://ifb-stiftung.de/)*

Beim Eye- und Head-Tracking wird oft Infrarotstrahlung eingesetzt.
Diese Technologie bietet zahlreiche Vorteile: Sie ermöglicht eine präzisere Erkennung der Pupille und erlaubt die Nutzung der Tracker auch bei Dunkelheit (siehe _Abb. 1_).
Dennoch sind beim Design neuer Geräte und deren Anwendung wichtige Sicherheitsvorkehrungen zu beachten.
Dieses Kapitel gibt dir erste Impulse, um das nötige Wissen zu erwerben, mit dem du selbst Geräte gestalten und sicher nutzen kannst.

::: warning Hinterfrage unsere Ergebnisse
Wir legen größten Wert auf Transparenz und Sicherheit bei der Software und Hardware, die wir verbreiten.
Jedoch – so unschön es klingt – sind wir keine Fachleute für Elektrotechnik und Biologie.
Deshalb möchten wir dich dazu ermutigen, uns zu hinterfragen und dir ein eigenes Bild vom Risikopotenzial zu machen.
:::

## Infrarot, seine Einsatzmöglichkeiten und Risiken

![](/electromagnetic-spectrum-de.jpg "Das Bild zeigt das sichtbare Lichtspektrum (400–700 nm) als fließenden Verlauf. Links weist ein Pfeil auf „Ultraviolett“ (<400 nm), rechts auf „Infrarot“ (>700 nm). Beide deuten darauf hin, dass diese nicht Teil des sichtbaren Spektrums sind.")
*Abb. 2: Das sichtbare Lichtspektrum von 400–700 nm Wellenlänge. Ultraviolett bei <400 nm und infrarot bei >700 nm sind unsichtbar. Horst Frank, Jailbird & Phrood, CC BY-SA 3.0, [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=3726606)*

Infrarotstrahlung (IR-Strahlung) wird auch als Wärmestrahlung bezeichnet und ist Teil der optischen Strahlung.
Sie ist damit Teil des elektromagnetischen Spektrums.
Sie schließt sich in Richtung größerer Wellenlängen an das sichtbare Licht an (siehe _Abb. 2_).
Ihr Wellenlängenbereich reicht von 780 nm bis 1 mm.

Infrarotstrahlung wird nochmals unterteilt in

- die kurzwellige IR-A-Strahlung (auch _"NIR"_ für _"near-infrared"_) mit einem Wellenlängenbereich von 780 bis 1400 nm,
- die IR-B-Strahlung von 1400 bis 3000 nm und
- die IR-C-Strahlung von 3000 nm bis 1 mm. [^bfs-intro]

[^bfs-intro]: [Bundesamt für Strahlenschutz: Was ist Infrarot-Strahlung?](https://www.bfs.de/DE/themen/opt/ir/einfuehrung/einfuehrung.html) Abgerufen am 30. Januar 2025.

Infrarotstrahlung kann vielseitig verwendet werden.
Sie findet Anwendung in der Wärmebildtechnik, etwa bei Nachtsichtgeräten und Thermografie zur Gebäudedämmungsprüfung (siehe _Abb. 3_).
In der Medizin wird sie für Wärmebehandlungen und Physiotherapie genutzt.
Infrarot-Fernbedienungen ermöglichen die drahtlose Steuerung von Geräten, während Infrarot-Sensoren in der Industrie zur Qualitätskontrolle oder Materialanalyse dienen.
Auch in der Astronomie hilft Infrarot, Himmelskörper zu erforschen, die im sichtbaren Licht verborgen bleiben.
Zuletzt eignet sich Infrarotstrahlung natürlich sehr für die Pupillenerkennung beim Eye-Tracking.

![](/uninsulated-exterior-wall-in-ir.jpg "Eine Infrarotaufnahme einer ungedämmten Außenwand. Farbige Bereiche stellen Temperaturunterschiede dar: wärmere Zonen sind röter, kältere blauer. Deutlich erkennbar sind Wärmeverluste an der Wand."){width=100%}
_Abb. 3: Eine Infrarotaufnahme einer ungedämmten Außenwand. Lutz Weidner - Bauthermografie & Luftdichtheitsprüfung, CC BY-SA 3.0, [Wikimedia Commons](https://commons.wikimedia.org/w/index.php?curid=11996721)_

Obwohl Infrarotstrahlung in vielen Bereichen nützlich ist, kann es bei zu hohen Dosen auch gefährlich sein.
Das gilt fairerweise für Licht aller Wellenlängen: Ultraviolettstrahlung kann Hautkrebs verursachen, blaues Licht kann eine photochemische Schädigung der Netzhaut herbeiführen, Infrarotstrahlung kann die Hornhaut des Auges thermisch beschädigen, und mehr.
Deshalb sollten die Risiken bekannt und beim Designprozess neuer Produkte einbezogen werden.
Die Risiken bei Infrarotstrahlung speziell sind thermische Schädigungen an der Haut, der Netzhaut, der Hornhaut, und der Linse (woraus Linsentrübungen wir der Graue Star entstehen kann). [^lbl-leds]

[^lbl-leds]: [Lawrence Berkeley National Laboratory: Light-Emitting Diodes (LEDs)](https://ehs.lbl.gov/resource/light-emitting-diodes-leds/) Abgerufen am 30. Januar 2025.

## Berechnung der Sicherheit einer Infrarotstrahlungsquelle

In diesem Abschnitt werden das Verfahren und die Formeln vorgestellt, die zur Berechnung der Sicherheit einer Infrarotstrahlungsquelle verwendet werden können.

### Vorausgesetztes Wissen

Um die Formeln zu verstehen, sind Grundkenntnisse in Radiometrie und Elektrotechnik erforderlich.
Am Ende sollten geometrische Einheiten wie Winkel in Radianten und Raumwinkel in Steradianten, Leistungs- und Energieeinheiten wie Watt und Joule, sowie Radiometrische Größen wie Strahlungsfluss, Bestrahlungsstärke, Bestrahldichte und Strahlstärke verstanden sein.
Zum Thema Radiometrie gibt es Vorlesungen als PDF, zum Beispiel [von der Berkeley-Universität](https://cs184.eecs.berkeley.edu/public/sp19/lectures/lec-11-radiometry/lec-11-radiometry.pdf) oder [der Stanford-Universität](https://graphics.stanford.edu/courses/cs348b-03/lectures/radiometry-1.pdf).
In Videoform gibt es [eine Vorlesung der UC Davis Universität](https://www.youtube.com/watch?v=gLfYTP4F23g) oder [ein 8-minütiges Video](https://www.youtube.com/watch?v=tflz0loWhIY).

### IEC 62471 - Photobiologische Sicherheit von Lampen und Lampensystemen

Quelle unserer Formeln ist die Norm _IEC 62471 - Photobiologische Sicherheit von Lampen und Lampensystemen_.

### Über die IEC

- _International Electrotechnical Commission_: eine internationale Normungsorganisation für Normen im Bereich der Elektrotechnik und Elektronik, gegründet 1906.
- Wikipedia: https://de.wikipedia.org/wiki/International_Electrotechnical_Commission
- Webseite: https://iec.ch
- Webshop: https://webstore.iec.ch

### Über IEC 62471

- Norm für _Photobiologische Sicherheit von Lampen und Lampensystemen_
- Publikationen (aktuell 6 Teile): https://webstore.iec.ch/en/iec-search/result?q=62471

## ICNIRP
ICNIRP Statement Light-Emitting Diodes (LEDs): Implications for Safety
https://www.icnirp.org/cms/upload/publications/ICNIRPled2020.pdf
https://www.semanticscholar.org/paper/Light-Emitting-Diodes-(LEDS)%3A-Implications-for/2c5feae4a5ee37781347a2f36a05a339bf0a756d
- Zitate Semantic Scholar: 24
- Jahr: 2020

ICNIRP Guidelines on Limits of Exposure to Incoherent Visible and Infrared Radiation
https://www.icnirp.org/cms/upload/publications/ICNIRPVisible_Infrared2013.pdf
https://www.semanticscholar.org/paper/ICNIRP-Guidelines-on-Limits-of-Exposure-to-Visible/0d45d564b32572b33e42f2a9fe1475871008b4c2
- Zitate Semantic Scholar: 189
- Jahr: 2013

ICNIRP Statement on Far-Infrared Radiation Exposure
https://www.icnirp.org/cms/upload/publications/ICNIRPinfrared.pdf
https://www.semanticscholar.org/paper/ICNIRP-STATEMENT-ON-FAR-INFRARED-RADIATION-EXPOSURE-Ziegelberger/3aa8e818f8f7a287bfe81cc3d4804f96e28ffa31
- Zitate Semantic Scholar: 62
- Jahr: 2006

ICNIRP Statement on Light-Emitting Diodes and Laser Diodes: Implications for Hazard Assessment
https://www.icnirp.org/cms/upload/publications/ICNIRPLed.pdf
https://www.semanticscholar.org/paper/ICNIRP-STATEMENT-ON-FAR-INFRARED-RADIATION-EXPOSURE-Ziegelberger/3aa8e818f8f7a287bfe81cc3d4804f96e28ffa31
- Zitate Semantic Scholar: 39
- Jahr: 2000



## Summaries

### LUXEON IR Family Eye Safety Application Brief

- **Link**: [LUXEON IR Family Eye Safety Application Brief](https://otmm.lumileds.com/adaptivemedia/17897dc0449b31dfd49e3f49b465795f6d58285e)
- **Author**: Lumileds (2020)
- **Date**: June 30, 2020
- **Summary from ChatGPT**: This document explains the photobiological safety of high-power infrared LEDs, with a focus on eye and skin safety. It provides details on exposure limits for near-infrared radiation, based on the IEC-62471 standard, and categorizes infrared sources into risk groups. It emphasizes the importance of proper exposure limits and the classification of LED products for safe use.
- **IR Safety Relation from ChatGPT**: Directly relevant to IR safety, offering guidelines for handling and exposure limits for infrared LEDs, with calculations for risk group classification.
- based on IEC 62471

#### My Summary

A document which focusses on IR LED safety, based on IEC 62471. It focusses on IR-A (700nm-1000nm).

##### Exposure limit for the skin

$$ E*H = \sum*{\lambda=3}^{3000} \sum*{t} E*\lambda (\lambda, t) \cdot \Delta t \cdot \Delta \lambda \leq 20000 \cdot t^{-0.75} W \cdot m^{-2} (t \leq 10s)$$
Where _Eλ (λ,t)_ is the spectral irradiance in Wm<sup>-2</sup>nm<sup>-1</sup>, _Δλ_ is the bandwidth in nm, and _t_ is the exposure time in seconds.
The formula calculates how much infrared energy hits your skin during exposure, taking into account all the different wavelengths of the radiation, and the length of time you’re exposed.
In detail, the formula does the following:

1. The total energy exposure is calculated by summing up contributions from every small slice of wavelength (from 3 nm to 3000 nm, which covers a wide infrared range).
2. For each wavelength, the energy is also summed across small slices of time, up to a maximum exposure time of 10 seconds.
3. The energy contribution at each combination of wavelength and time is given by the spectral irradiance (how much energy the source emits at a specific wavelength), multiplied by the size of the wavelength slice and the time slice.
4. This total exposure must not exceed a safety limit, which decreases as exposure time increases. The safety limit is proportional to the time raised to the power of -0.75.

##### Exposure limit for the cornea

For short exposure times (up to 1000 seconds):

$$
E_{IR} = \sum_{\lambda=780}^{3000} E_\lambda \cdot \Delta \lambda \leq 18000 \cdot t^{-0.75} W \cdot m^{-2} (t \leq 1000s)
$$

For longer exposure times (greater than 1000 seconds):

$$
E_{IR} = \sum_{\lambda=780}^{3000} E_\lambda \cdot \Delta \lambda \leq 100 W \cdot m^{-2} (t \gt 1000s)
$$

1. The formula calculates the amount of infrared radiation hitting the cornea, based on the spectrum of light in the infrared range (from 780 nm to 3000 nm).
2. The energy at each wavelength is summed up across small slices of wavelength, each represented by a bandwidth in nanometers.
3. For shorter exposure times (up to 1000 seconds), the total infrared energy hitting the cornea must not exceed a safety limit. This safety limit depends on the exposure time and decreases as the exposure time increases. The longer the exposure, the lower the maximum allowable energy.
4. For longer exposures (greater than 1000 seconds), the formula provides a stricter limit of 100 watts per square meter. This helps protect the cornea from damage due to prolonged exposure to infrared radiation.

For target distances much larger than source size, the irradiance on the target can be calculated by:

$$
E= \frac{I}{d^2} W \cdot m^{-2}
$$

Where _E_ is the irradiance on the target in Wm<sup>-2</sup>, _I_ is the radiant intensity of the source (in the target direction) in W/sr, and _d_ is the target distance from source (d>>source size) in m. For lamp classification target distance, ‘d’ is fixed to 0.2m.

The document then gives an example calculation for the cornea.

##### Exposure limit for the retina

Parameters influencing the exposure limit are the pupil diameter, anguar subtense of the light source, exposure duration, wavelength and spectra of the radiation.

For pupil diameter _d_ the worst case of 7mm is assumed, since the pupil doesn react on infrared.

For angular subtense of the light source an _α_ value needs to be chosen. _a<sub>eff</sub>_, the actual angular subtense of the source, will be calculated as such:
$$ \alpha = \frac{(l+b)/2}{d}sr $$
Where l is the length, b is the breadth, and d is the viewing distance, all in meters. The lowest value _α<sub>min</sub>_ is 0,0017rad, because the eye is not perfect and even a perfect point of light will be slightly blurred, and the maximum value _α<sub>max</sub>_ is 0,1rad, because from then on the exposure limit will be independent of the source size. So, _α_ is either _α<sub>min</sub>_, _α<sub>max</sub>_ or something in between _α<sub>eff</sub>_.

For the exposure time

### ICNIRP Guidelines on Limits of Exposure to Incoherent Visible and Infrared Radiation

- **Link**: [ICNIRP Guidelines on Limits of Exposure to Incoherent Visible and Infrared Radiation](https://www.icnirp.org/cms/upload/publications/ICNIRPVisible_Infrared2013.pdf)
- **Authors**: International Commission on Non-Ionizing Radiation Protection (ICNIRP)
- **Date**: 2013
- **Summary from ChatGPT**: These guidelines establish maximum exposure limits to incoherent optical radiation (visible and infrared), with an emphasis on protecting the eyes and skin from potential harm. They address both thermal and photochemical risks, including retinal hazards from infrared radiation. The revised limits take into account new research on the thermal effects of retinal injury.
- **IR Safety Relation from ChatGPT**: Directly relevant, providing updated exposure limits and safety protocols for infrared radiation, particularly for eye protection.

### ICNIRP Broadband Guidelines

- **Link**: [ICNIRP Broadband Guidelines](https://www.icnirp.org/cms/upload/publications/ICNIRPbroadband.pdf)
- **Authors**: International Commission on Non-Ionizing Radiation Protection (ICNIRP)
- **Date**: 2009
- **Summary from ChatGPT**: These guidelines provide limits for exposure to broadband non-ionizing radiation, covering both visible and infrared radiation. It includes exposure recommendations for the general population and workers to avoid photobiological hazards, such as retinal injury or skin burns from infrared radiation.
- **IR Safety Relation from ChatGPT**: Focuses on safe exposure levels for infrared radiation, particularly related to eye and skin protection.

### AN002_Details on photobiological safety of LED light sources

- **Link**: [AN002_Details on photobiological safety of LED light sources](https://docs.eyetrackvr.dev/safety/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)
- **Authors**: Bartling, Hanna and Hilmes, Tobias at OSRAM Opto Semiconductors GmbH
- **Date**: September 12, 2018
- **Summary from ChatGPT**: This document discusses the photobiological safety of visible LED light sources, addressing potential eye hazards such as retinal thermal and blue light hazards. It classifies LEDs into risk groups according to international standards like IEC 62471, considering exposure time and radiance. The conclusion emphasizes that LEDs, when used properly, are safe, but caution is necessary for high-brightness sources.
- **IR Safety Relation from ChatGPT**: It mentions that infrared LEDs should be evaluated separately, referring to a different application note for IR safety.

### NIR Standards

- **Link**: [NIR Standards](https://global-uploads.webflow.com/5bcb43bd79f0443283c7f876/60887bb03d5b734a98f3c422_training-library_nir_stds_20021011.pdf)
- **Author**: Bob Curtis, OSHA Salt Lake Technical Center
- **Date**: October 2002
- **Summary from ChatGPT**: The document outlines OSHA standards for non-ionizing radiation (NIR), specifically regarding near-infrared (NIR) and RF exposure. It includes safe exposure limits and guidelines for workers, stressing the importance of safety programs to manage risks associated with NIR exposure, particularly in occupational settings.
- **IR Safety Relation from ChatGPT**: Directly relevant to IR safety, setting limits and precautions for exposure to IR and NIR radiation in various industrial environments.

### Effect of Infrared Radiation on the Lens

- **Link**: [Effect of Infrared Radiation on the Lens](https://pmc.ncbi.nlm.nih.gov/articles/PMC3116568/pdf/IJO-59-97.pdf)
- **Authors**: Eman Mohamed Aly, Eman Saad Mohamed
- **Date**: February 3, 2010; Revision accepted: September 3, 2010
- **Summary from ChatGPT**: This study investigates the effects of infrared radiation on the crystalline lens of rabbits. It finds that IR radiation alters protein structure in the lens, decreasing the enzyme activity of Na+-K+ ATPase and potentially leading to cataract formation. Longer exposures (10 minutes) cause more significant damage.
- **IR Safety Relation from ChatGPT**: The study emphasizes that infrared radiation, especially at certain intensities, can cause cataracts, highlighting the need for careful monitoring of IR exposure to protect eye health.

### IR Illumination and Eye Safety

- **Link**: [IR Illumination and Eye Safety](https://www.medium.com/@alex.kilpatrick/ir-illumination-and-eye-safety-f0804673ca7)
- **Author**: Alex Kilpatrick
- **Date**: January 22, 2020
- **Summary from ChatGPT**: The article discusses the potential hazards of infrared (IR) light used in floodlights and security cameras. It covers the different IR wavelengths, highlighting the safety concerns of prolonged exposure to concentrated IR light, particularly to the eyes. The author calculates potential risks for corneal and retinal damage but concludes that typical IR floodlights used in security systems pose minimal danger under standard use.
- **IR Safety Relation from ChatGPT**: Directly relevant, analyzing the safety of IR light from floodlights, especially concerning eye damage.

### Eye Safety Risk Assessment of Infrared Emitting Diodes

- **Link**: [Eye Safety Risk Assessment of Infrared Emitting Diodes](https://www.vishay.com/docs/81935/eyesafe.pdf)
- **Author**: Vishay Semiconductors
- **Date**: November 15, 2021
- **Summary from ChatGPT**: This document focuses on the risk assessment of infrared emitting diodes (IREDs) in compliance with IEC 62471. It covers the photobiological safety of IREDs used in various applications and their classification according to their potential eye hazards, such as thermal retinal damage. The paper discusses the requirements for assessing IR safety for LEDs and IREDs in consumer and industrial settings.
- **IR Safety Relation from ChatGPT**: Directly addresses infrared radiation safety, emphasizing classification and risk assessment of IREDs for eye safety.

### Thermal Effect of Visible Light and Infra-Red Radiation on the Eye: A Study of Infra-Red Cataract Based on a Model

- **Link**: [Thermal Effect of Visible Light and Infra-Red Radiation on the Eye: A Study of Infra-Red Cataract Based on a Model](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c8a3e229f04ac4241b81b6a5dfc2b35aec5f0f68)
- **Author**: Tsutomu Okuno
- **Date**: 1993
- **Summary from ChatGPT**: The study investigates how different wavelengths of infrared radiation and visible light contribute to cataract formation, specifically infrared cataracts, by modeling temperature rises in the eye. It suggests that infrared B and C radiation are the primary contributors to cataract development due to their absorption by the cornea, converting into heat.
- **IR Safety Relation from ChatGPT**: Directly relates to IR safety, as it identifies specific wavelengths of infrared radiation that pose a risk to eye health, leading to cataract formation.

### Light-Emitting Diodes (LEDs)

- **Link**: [Light-Emitting Diodes (LEDs)](https://ehs.lbl.gov/resource/light-emitting-diodes-leds/)
- **Author**: Candace Flores
- **Date**: May 14, 2020
- **Summary from ChatGPT**: The document outlines the health effects of LEDs, noting that visible and infrared LEDs generally pose no acute eye hazard, with the exception of high-powered LEDs used in specific applications. Thermal and blue-light injury to the retina, as well as UV-related skin damage, are highlighted. The risks are mitigated by proper exposure limits and standards.
- **IR Safety Relation from ChatGPT**: It mentions that infrared LEDs are typically safe for the eye, under current exposure standards, except in specialized lighting systems.

### Types of Lighting: Incandescent Bulbs

- **Link**: [Types of Lighting: Incandescent Bulbs](https://www.e-education.psu.edu/egee102/node/2035)
- **Author**: Dr. Sarma Pisupati, Penn State University
- **Date**: Summer 2022
- **Summary from ChatGPT**: This page provides an overview of different lighting types, focusing on incandescent bulbs. It explains the thermal radiation emitted by incandescent bulbs, with about 95% of their energy converted into heat, including infrared radiation. The risks of high heat and IR exposure in certain lighting systems are discussed.
- **IR Safety Relation from ChatGPT**: Though not focused on IR safety specifically, it highlights the significant infrared radiation emitted by incandescent bulbs, indicating potential thermal and IR-related hazards.

### Optical and Photobiological Safety of LED, CFL, and Other High Efficiency General Lighting Sources

- **Link**: [Optical and Photobiological Safety of LED, CFL, and Other High Efficiency General Lighting Sources](https://www.globallightingassociation.org/images/files/publications/20120226_Optical_Safety_of_LEDs_-_Long_Paper.pdf)
- **Authors**: Global Lighting Association
- **Date**: March 2012
- **Summary from ChatGPT**: This white paper addresses the optical and photobiological safety of LEDs, CFLs, and other lighting sources. It assesses blue light, UV, and infrared radiation risks. The paper concludes that LEDs and CFLs, when used appropriately, are safe, with infrared radiation posing minimal risk in standard lighting applications.
- **IR Safety Relation from ChatGPT**: Infrared radiation in common lighting sources is addressed, confirming that the risk of IR harm in general lighting is low and within acceptable safety standards.

### The Effects of Radiation on the Eye in Industrial Environments

- **Link**: [The Effects of Radiation on the Eye in Industrial Environments](https://imt.uoradea.ro/auo.fmte/files-2015-v2/BARBU%20Daniela%20Mariana%20-%20THE%20EFFECTS%20OF%20RADIATION%20ON%20THE%20EYE%20IN%20INDUSTRIAL%20ENVIRONMENTS.pdf)
- **Author**: Daniela Mariana Barbu
- **Date**: August 2015
- **Summary from ChatGPT**: The paper discusses how different forms of electromagnetic radiation (including infrared) affect the human eye, particularly in industrial environments. It emphasizes the need for protective measures against harmful radiation, including IR, and provides guidelines for optometrists to manage exposure risks.
- **IR Safety Relation from ChatGPT**: Directly relates to IR safety, highlighting risks of exposure and preventive measures for eye protection in industrial settings.

# Eye-Tracking: What is it, how does it work?

![](/kosmonaut-with-eye-tracker-on-iss.jpg "Cosmonaut Sergei Krikaljow on the ISS around 2005. Sergei has a portable eye-tracker strapped to his head. The eye tracker looks bulky but stable. Sergei is floating in the middle of the room surrounded by technical equipment.")
_Cosmonaut Sergei Krikaljow with a portable eye-tracker on the ISS, around 2005. Photo by Chronos Vision GmbH on [Wikipedia](https://commons.wikimedia.org/wiki/File:Eye_Tracking_Device_003.jpg) under [GPL](http://www.gnu.org/licenses/gpl.html)._

[Eye-Tracking](https://en.wikipedia.org/wiki/Eye_tracking) refers to the recording of the gaze direction.
Cameras used for this purpose are directed at the head or even directly at the eye.
Special software then analyzes the gaze direction and, for example, translates it into mouse movement.
Eye-tracking is closely linked to head-tracking, which records head movement.
This is also done with cameras and special software.
Depending on the application, eye- and head-tracking are used in combination because head movement has a significant impact on gaze direction.

## Applications

Eye-tracking is not a new method.
Market research has been using eye-tracking for years to analyze the gaze of test subjects (e.g., [Pupil Labs](https://pupil-labs.com/)).
In the healthcare sector, eye-tracking systems are provided to people with motor neuron diseases to enable communication—although, unfortunately, at high prices or with long waiting times (e.g., [Tobii Dynavox](https://de.tobiidynavox.com/)).
Recently, the video game community has discovered eye- and head-tracking.
For greater immersion, players can turn their heads to look around in the virtual world (e.g., [EyeTrackVR](https://docs.eyetrackvr.dev/)).

## The Three Areas of Eye-Tracking: Recording, Calibration, Action {#areas-of-eye-tracking}

![](/3-areas.jpg "An illustration shows the three areas of eye-tracking.")
_The three areas of eye-tracking: 1. Recording, 2. Calibration, 3. Action. [© IFB-Stiftung](https://ifb-stiftung.de/)_

Anyone working with eye- and head-tracking will always encounter the following three areas:

1. **Recording:** This is where you determine how to record the eye or head.
   For example, where is the camera located?
   Are additional devices needed?
   How accurate and error-prone is the recording?
   Which software can process the recorded data?
2. **Calibration:** Most of the time, a calibration step must be carried out so that the software understands what each gaze angle means.
   A popular method is calibration with points displayed on the screen that the user focuses on.
   Only for simple applications where, for example, only the rough gaze direction like "left" and "right" is checked, is no calibration necessary.
3. **Action:** Once the application (after calibration) understands what each gaze angle means, it can execute corresponding actions.
   For example, it can move the mouse pointer based on the gaze angle or trigger speech output.

## Types of Recording

There are various methods for recording the gaze.
For example, there are devices that are attached to the head with a camera placed directly in front of the eye.
Other devices are mounted further away and point a camera at the entire head, allowing both the head and the eyes to be recorded simultaneously.
Some devices use simple cameras, like those already installed in laptops or smartphones.
Others use infrared cameras for a clearer image of the eye.

All these variants have advantages and disadvantages, which unfortunately are not limited to price and accuracy.
Even expensive devices can have problems with poor lighting conditions, not all software works well with everyday glasses, and not every head-tracking method can compensate for uncontrolled head movements like those caused by muscle spasms.
Therefore, individuals and their families must experiment with different solutions to find the best one for them.
However, even with limited resources, a good eye-tracking system can be set up using existing technology.
The old smartphone in the drawer can serve as an excellent, lightweight eye-tracking solution.
A laptop with a webcam can be turned into a full-featured system with a speech assistant.
And if that’s not enough, specialized devices can be added to the system for a low cost.
The following sections explore various eye- and head-tracking methods, along with their pros and cons.

### Wearable Eye-Trackers {#wearable-based-eye-tracking}

![](/our-eye-tracking-glasses.jpg "Our eye-tracking glasses frame in close-up. It is a glasses frame with a 3D-printed arm and a mini camera. Tape and cables make the frame look like a prototype.")
_A wearable eye-tracker: Our eye-tracking glasses frame. [© IFB-Stiftung](https://ifb-stiftung.de/)_

Wearable eye-trackers are typically glasses with built-in cameras.
The cameras are placed directly in front of the eye, allowing for very precise tracking of eye movements.
Therefore, the cameras do not need to offer high resolution: 0.5 megapixels is sufficient for good results.
However, the camera should have a large focal length to capture the entire eye.

![](/visible-and-ir-light.jpg "A split image. On the left, an eye under visible light. On the right, an eye under infrared light.")
_On the left, an eye under normal light, and on the right, an eye under infrared light. [© IFB-Stiftung](https://ifb-stiftung.de/)_

The use of infrared cameras and lighting is particularly popular, as it makes the pupil much clearer.
It also allows eye-trackers to be used in the dark.
However, caution is necessary: too much infrared radiation can damage the eye.
Therefore, the type and intensity of the infrared lighting, as well as the distance to the eye, should be carefully considered.

Since wearable eye-trackers only record the eye and not head movement, they can only be used for certain applications on their own.
For example, to track the gaze on a screen, the head must either remain still or a head-tracking system must be used in addition.

### External, Screen-Based Eye-Trackers {#screen-based-eye-tracking}

![](/eye-tracker-external-webcam.jpg "A webcam is clipped to a laptop screen.")
_A webcam can serve as an external eye-tracking device. Photo by Matheus Bertelli on [Pexels](https://www.pexels.com/photo/modern-video-camera-hanging-on-display-of-laptop-7172701/)_

External or screen-based eye-trackers are devices that are mounted on a stand or attached to the screen.
This does not necessarily need to be a purchased device: The webcam of a laptop or the front camera of a smartphone can already serve as an external eye-tracker.
Due to the distance, both the head and eyes can be recorded, allowing an eye- and head-tracking system to be set up without additional costs.
However, the distance between the camera and the eye negatively affects the accuracy.
Poor lighting conditions also have a greater impact on the tracking result.
Therefore, companies offer optimized cameras for sale that can be mounted on the screen.
These cameras have higher resolution and infrared lights to provide good tracking results even in low light conditions.

### Head-Trackers {#head-tracking}

![](/head-tracking.jpg "A screenshot of the head-tracking software 'AITrack'. The AITrack window shows a webcam recording. In the recording, a face is visible. The software seems to recognize the face and place markers accordingly.")
_AITrack is head-tracking software that works with just a webcam. [© IFB-Stiftung](https://ifb-stiftung.de/)_

There are several methods for recording head movement.
In most cases, a camera is mounted on a stand or attached to a screen and points at the head.
For basic head-tracking, a laptop or smartphone camera is sufficient.
Using face recognition software, the head position can be determined without additional devices.
This software is not highly accurate and requires more processing power, but it provides an easy entry point.
For even better tracking results, simple markers can be printed on paper and placed on the head.
Software can recognize these markers and calculate the corresponding angles.
Companies also offer specialized devices for the best tracking results.
One provider uses an infrared camera in combination with portable reflectors.

In addition to the variant where the camera is pointed at the head from the screen, there is also the reverse method: The camera is worn on the head and pointed forward at the screen.
Markers are then attached to the screen, or even displayed on the screen itself.
However, this variant is less commonly used.

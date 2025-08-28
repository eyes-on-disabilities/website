# Tasks

The tasks are not yet ordered by priority.

## Backlog

* Miranda: Installation: Provide executables through apt, pacman, and as an exe
* Miranda: Usability: UI rework
* Miranda: Usability: Integrated onboarding
* Miranda: Usability: language support
* Miranda: Usability: Crash Reports
* Miranda: Usability: Info windows
* Miranda: Tracker integration: “EyeTracker” from JEOresearch
* Miranda: Tracker integration: AITrack and Opentrack
* Miranda: Tracker integration: EyeGestures
* Miranda: Tracker integration: Pupil
* Miranda: Head-movement-compensation
* Miranda: Tracking quality: Improve the calibration
* Miranda: Tracking quality: error correction and filter/smoothing system
* Miranda: Export methods: Simple UDP output, if one wants to write their own software using our output
* Miranda: Export methods: Mouse Movement
* Miranda: Export methods: OptiKey
* Miranda: Feature: View Directions to trigger actions.
* Miranda: Documentation for users
* Miranda: Documentation for developers
* Hardware: 3d Modelling
* Licensing
* Research and Writing: Building your own Eye-Tracking glasses
* Research and Writing: OptiKey
* Research and Writing: Beam Eye-Tracker
* Research and Writing: Infrared-Safety

## in Progress

nothing right now

## in Review

nothing right now

---

## Task Details

### Miranda: Installation: Provide executables through apt, pacman, and as an exe

The effort is to

* find solutions to build each of them (since we're not sure if we can use PyInstaller for all of them),
* setting up a build pipeline so we don't have to do the build management manually all the time, and
* being able to verify the authenticity of the provided code through code certification. This point produces the most head-aches in this section currently.

### Miranda: Usability: UI rework

The Tkinter code and the runtime loop is quite messy and hard to understand from a code perspective. The windows and elements are not properly sized and have a few bugs, like a occasional jitter on some desktop environments. Also I use non-standard, self-build UI elements, even when there are probably some frameworks which do it way smarter. So, the UI definitely needs attentions, not only from the way it looks, but also the way it works. Since usability is very important to use, we should give this the proper treatment.

### Miranda: Usability: Integrated onboarding

For first time users, we want an onboarding process. This means that we want to guide the user through each step of the input and calibration process. This is mostly a UI task.
This means we want to guide through the following process:

* select an input
* check if the input provides any data, and what it means ("no data" mostly means the program providing the input is not running or does not detect any eyes.).
* the calibration. while this step is already self-explainatory, it may help to explain why this is necessary.
* check if the calibration actually works. "Does the point roughly match with where you look at?"
* Select an output.

### Miranda: Usability: language support

We want multi-language support. We could probably do it in a cheap way ourselves, but its probably better to use a well-known framework for this, so its easier for others to add another language. We would like to add both english and german from the beginning. Manuals should also be provided in these languages, but more on that at the point "Documentation".

### Miranda: Usability: Crash Reports

We want users to be able to easily send a crash report to us, with options like "include stacktrace", "include configuration", or "include system info", all in an opt-in manner. Either we let them send it via the users e-mail or we let the user do it anonymously against a server we then have to set up.

### Miranda: Usability: Info windows

For each input, tracking approach, and output, we want to show optional help/info windows (little "?" probably) which give more information about the project behind it, where to download, how to troubleshoot them, etc. This is just for the functionality itself, and not the actual contents. This shall be done with "Documentation", too.

### Miranda: Tracker integration

A note about my wording:

* with "integrating" I mean that we are technically able to communicate with the eye-tracking software.
* with "embedding" I mean that this eye-tracking software is included in Miranda and will start automatically when selected, or will be downloaded and started when selected.

### Miranda: Tracker integration: “EyeTracker” from JEOresearch

This is a tracker software that is a great start. I would actually love to embed it into our project entirely, so you don't have to install even more software to have some simple eyetracking. Either we create a sub-module in our repository, or we make that our project is capable of downloading other trackers from git repositories on the fly, or we just get a copy of the current version. Eitherway, there are also some minor tweaks that need to be done on the tracker itself, that either we do or we have to ask Jason Orlosky (the maintainer) to do it. E.g. the eye-ball is currently slighty "moving around", because the code thinks it "fits better to the last pupil positions it received. This unfortunately messes up the calibration after a few minutes. Being able to just fix the eye-ball at some point would help. Also the project writes the current eye-vector to a file. Just being able to call a method and get the result would be easier and require less disk load. (even if it doesn't produce too much, too be fair. Again, just a tweak we would then do.)

### Miranda: Tracker integration: AITrack and Opentrack

Since they share a similar output method, they can be done at once. Even if they are not necessarily eye-tracking but more head-tracking, we would like to include them. Since these are not Python applications its probably not as straightforward to embed them into our project. So, at least for the beginning, they stay separate applications. But maybe we can build scripts that trigger the download of the applications and start them automatically once available. Also with these applications we always have to tweak things in Opentrack to apply movement filters or invert the recognized movement, so there is still something wrong with our calibration.

### Miranda: Tracker integration: EyeGestures

This one will be tricky, because other eye-tracking applications just do find the pupil or eye-ball and throw out positions or vectors in some way. EyeGestures instead also does some calibration choreographies itself. We would need to adjust our code, so we allow external applications to decice where to show a "calibration point" on the screen, and for how long. This will be a bigger change, but when we do the UI rework we can already keep that in mind, which may reduce the efforts. Peter Walace, the maintainer of the project, said he would benefit from us taking care of the UI and the outputs, so he can focus on the functionality of his code.

### Miranda: Tracker integration: Pupil

we want to give this one a lower priority, since Pupil is a very technical application with a too high learning curve. Integrating it may be easy (we already did it once, but we're not asking the user if they used the left or right eye), but embedding it entirely would be hard. However, since we're just relying on one eye, we could fork the project and reduce it to just a one-eye application. Why the effort? Because Pupil's algorithm seem to perform better so far than the "EyeTracker" from JEOresearch: It requires less CPU and is more acurate. Since we will see the folks from the Pupil team in a few weeks at the "ecvp2025", I want to ask them how easy it would be to get a simplified version.

### Miranda: Head-movement-compensation

This is the biggest task of them all: At some later point of the project we want to tackle head-tracking in combination with eye-tracking. With most eye-tracking approaches we know, keeping the head still is a hard requirement. Moving your head distords everything. Even for webcam approaches, head movements are a problem. Depending on the stage of the desease the people have, unexpected head movements through spasms can occur, which would then make the eye-tracking unusable.
Unfortunatelly, just adding AITrack and OpenTrack to the mix is very hard, as by themselves they are not accurate enough. Pupil might have a solution by adding more cameras and searching the display, and then counter the rotations of the head and the eye, but with our experients we were not able to get this running well. It could be that we're using the wrong camera modules or our Laptops are too weak, or Pupil is simply not made for this accurate applications. Again we hope to get some support from the Pupil team, but currently we don't have anything there. Maybe we need to use accellerometers for better head-tracking prediction, or use a similar approach than e.g. TrackIR, which is a commercial head-tracker using infrared emitters.
If other projects find a solution to that problem (we don't seem to be the only ones concerned about this issue) we would need to find a way to integrate this extra calibration process into Miranda.
Due to its unpredictable nature, we need to give this a very high estimate. But we also see a great value in solving it.

### Miranda: Tracking quality: Improve the calibration

Currently we collect data from the data sources (the "inputs"), check what the data is at the screens' corners, and build a perspective transformation matrix out of that. Speaking in math: We get four vectors to form a square and then transform it into another square, a.k.a. the screen. While this only requires for points to be calibrated, it is not very acurate. More calibration means more precision, since we then could e.g. compensate for the field of view of cameras, but we're not sure if a simple perspective transformation works with more than four points. So we need to find an alternative.

### Miranda: Tracking quality: error correction and filter/smoothing system

During calibration I'm always worried to blink, because it currently makes the calibration result worse. Would be nice to not worry about that and have some error correction in. Also we would like to have a filter system. Some commercial eye-tracking systems like Tobii have a nice filter, which both does some smoothing, but also allows me to look very slightly to the left and the right without actually moving my "gaze", so I can get a better sense of my surroundings.

### Miranda: Export methods: Simple UDP output, if one wants to write their own software using our output

### Miranda: Export methods: Mouse Movement

Also easy. However how we implemented that my actual mouse movements have a higher priority is not well implemented and also not configurable. That could be an improvement.

### Miranda: Export methods: OptiKey

From the Miranda side, there is not more to do that probably a UDP output. The OptiKey side is more difficult, since we're not familiar with C# and the .NET ecosystem. We know OptiKey has a plugin system, and we already tried to modify a dummy plugin, but we didn't got it properly working. As a workaround we used the mouse movement to use OptiKey, but that takes away the mouse for other uses. So getting the OptiKey plugin and working is needed.

### Miranda: Feature: View Directions to trigger actions.

Currently we want to take an input, calibrate it against the screen, and hand over the resulting pixel position to another application.
For the hospice, we instead want to check for rough directions, and then trigger certain actions. This would require the inputs to be treated and calibrated differently, as well as provide a different view to the user to select actions from. So the workflow starts the same as before – select an input method, and calibrate it – but from then on the workflow differs. As a first action the plan is to connect a DECT device and then trigger a call to the nurses.

### Miranda: Documentation for users

This is for the actual content of the documentation, not on how it is implemented in the application or the website.
We want it to be present as both on the website, as well as integrated into the application for offline use, as well as in help pipups for the various input and output methods. For the users we have to put in more effort than usual, since due to our target audience we can not rely on them having a well technical background. We also want to support multiple language; English and German for the beginning.

### Miranda: Documentation for developers

The usual documentation, probably presented in a wiki, with a focus on how to add more input and output methods.

### Hardware: 3d Modelling

While our current eye-tracking camera module is very cheap and easy to get, it has two flaws: First, the infrared lights are too close to the camera and cause a "red eye" effect just like with usual cameras, which messes up the tracking heavily, and second, it is not properly secured on the frame. So we would need to 3d model a case that we can print for that camera module which solves both of these issues. This involves getting to know both blender and KiCAD or Slicer software, as well 3d printing.

### Licensing

Thanks to some help from outside we have some good resource to read through. Still, we don't want to take this too lightly, and since we need to cover code, hardware design, text, and images, we have many things to choose from.

### Research and Writing: Building your own Eye-Tracking glasses

Writing a more profound step-by-step guide for building your own Eye-Tracking glasses.

### Research and Writing: OptiKey

Writing a more profound step-by-step guide on what OptiKey is, how its used, and how it can be configured.

### Research and Writing: Beam Eye-Tracker

Writing a more profound step-by-step guide on what the Beam Eye-Tracker is, how its used, and how it can be configured.

### Research and Writing: Infrared-Safety

We have some basic understanding of infrared-safety, but its not very profound. Getting more into the topic would be great to have.

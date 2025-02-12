# Eye-Tracking with the Eye-Tracking Glasses Frame

![](/our-eye-tracking-glasses.jpg "Our eye-tracking glasses frame in close-up. It consists of a glasses frame with a 3D-printed arm and a mini camera. Tape and cables give it a prototype look.")
_Our eye-tracking glasses frame. [© IFB-Stiftung](https://ifb-stiftung.de/)_

In this chapter, we introduce our eye-tracking glasses frame, discuss its advantages and disadvantages, and explore the possibilities it offers.

::: warning Note 1: The glasses frame is still under development
The glasses frame is still under development.
Although the current design already allows for eye-tracking, there are limitations in functionality and wearing comfort.
Significant changes are expected in the coming weeks and months.
:::

::: warning Note 2: Safety information on infrared radiation near the eyes
At the moment, we cannot precisely assess the risks of infrared radiation near the eyes.
We are currently conducting research and will publish the results as soon as possible.

With or without our findings, we encourage you to make your own assessment of the potential risks.
In the chapter [Safety with Infrared Radiation](/07-wiki/infrared-safety), you'll find the latest state of our research as well as all the sources we've used.
:::

## How It Works

The eye-tracking glasses frame is worn like regular glasses.
Attached to an adjustable arm on the side is a small camera that points directly at the eye.
The camera is connected to a computer via a USB cable, where the processing software is then run.
If you don’t have a laptop or computer yet, we recommend purchasing an inexpensive used device. More about this here: [I Don’t Have a Laptop or Computer with Webcam Yet](/03-the-eye-tracking-guide/04-webcam#buying-a-laptop) (You won't need the webcam for this chapter.)

Advantages of the eye-tracking glasses frame include the close proximity to the eye, allowing for very precise gaze tracking
It also uses an infrared camera with integrated illumination, enabling better tracking even under poor lighting conditions.
The downside is that the glasses do not track head movement by themselves, so either the head must be kept still during use, or additional head-tracking must be employed.

::: info Quick Note: Who We Owe the Design To
The glasses are based on the work of _Pupil Labs GmbH_, _EyeTrackVR_, and _moserk_.
Thanks to their open-source software and hardware designs, we had a solid foundation on which to develop our frame. Thank you.

- Pupil Labs GmbH: [https://docs.pupil-labs.com/core/](https://docs.pupil-labs.com/core/)
- EyeTrackVR: [https://docs.eyetrackvr.dev/](https://docs.eyetrackvr.dev/)
- moserk: [https://www.thingiverse.com/moserk/](https://www.thingiverse.com/moserk/)

:::

## How to Get These Glasses

You have two options: either build the frame yourself or contact us for assistance.
Currently, we do not have an online shop.

You will need:

- An infrared camera, e.g., this one: https://www.amazon.de/Mini-Kamera-Videomodul-USB-Kameramodul-GC0308-Chip-300-000-Werbemaschinen/dp/B08HM1P5SP
- A USB-A extension cable
- A glasses frame (preferably without lenses)
- Something to securely attach the camera to the frame in front of the eye, such as:
- DIY with thick wire and tape, or
- This 3D-printed arm: https://www.thingiverse.com/thing:893805

For the DIY version, attach one end of the wire to the side of the glasses and the other end to the camera.
The camera should be roughly aimed at your eye.
The wire should allow for precise positioning and stay stable after adjustment.

If you have access to a 3D printer, you can print this adjustable arm and attach it to your glasses frame: https://www.thingiverse.com/thing:893805.
You can skip printing the `world_cam_mount.stl` as it’s not needed.
For assembly, we recommend using M3 screws and nuts.

With both versions, the camera is finally connected to the computer, possibly using the USB extension cable.

## Eye-Tracking with Pupil, Miranda, and Optikey

::: info In Short

- **Type of Tracking:** [Wearable-based Eye-Tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#wearable-based-eye-tracking)
- **Required Devices and Materials:** Eye-tracking glasses frame (~30€)
- **Recording:** [Pupil (free)](/04-software-and-hardware-in-detail/pupil)
- **Calibration:** [Miranda (free)](/04-software-and-hardware-in-detail/miranda)
- **Action:** [Optikey (free)](/04-software-and-hardware-in-detail/optikey)
- **Requirements:**
- The camera on the frame must clearly recognize the eye.

:::

In this guide, we use Pupil, Miranda, and Optikey.
Pupil is a free software that records eye movements.
It allows for extremely fine-tuned recording but is also quite complex with a steep learning curve.
Miranda is free software that converts tracker data into screen positions, essentially acting as calibration software.
Optikey is a free on-screen keyboard designed to be operated using eye gaze or head position.

Steps:

1. Put on the eye-tracking glasses frame and connect it to the computer.
2. Start Pupil Capture. Three windows should open.
3. Select the "eye 0" window.
4. Under "Video Source," enable "Enable Manual Camera Selection" and select the camera. The window should now show the camera's view.
5. Select the area of the image where the eye is located.
 Under "General Settings," set the mode to "ROI" (Range of Interest).
 Adjust the rectangle to the size of the eye. You should now see Pupil detecting your pupil.
6. Let Pupil calculate the size of your eye.
 Under "Pye3D Detector," click on "Reset 3D model."
 Look around with your eye for about 10 seconds.
 If it works correctly, you should see a blue circle roughly representing your eyeball's size, with your pupil accurately marked by an orange oval.
7. Open Miranda and select "Pupil" as the Data Source. Ensure the checkbox "receive data from data source" is checked.
8. Start calibration by clicking the "re-calibrate" button.
9. Complete the calibration until satisfied, then confirm it.
10. Open OptiKey. Make sure "Mouse Position" is selected as the source in OptiKey's management console (ALT+M).
You can test it by moving the mouse over the letters. If OptiKey reacts, it worked.
11. In Miranda, select the "Mouse Position" publisher. Your mouse pointer should now follow your head movement.
You can now control your mouse using your head.

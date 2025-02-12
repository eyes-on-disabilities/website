# Eye-Tracking with Laptop or Computer with Webcam

This chapter shows which solutions already exist that only require a laptop or a computer with a webcam.

## How It Works

All solutions mentioned in this chapter are either [external eye-tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#screen-based-eye-tracking) or [head-tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#head-tracking) solutions: a webcam is mounted on a screen or on a tripod and directed towards the head or face.
The advantage of these solutions is their simple setup, and that many households already possess the required equipment.
The downside is that due to the distance to the eye, the gaze direction can only be recorded to a limited extent.
Additionally, these solutions are sensitive to poor lighting conditions.

## I Don’t Have a Laptop or Computer with Webcam Yet {#buying-a-laptop}

If a laptop with a built-in webcam or a computer with a separate webcam is not yet available, they can be purchased second-hand at a low cost.
A used laptop or computer meeting the recommended requirements can be bought for less than $200.

::: info Recommendations for Laptop or Computer

- **Processor:** Intel Core i5 7200U @ 2.5 GHz
- **RAM:** 8GB
- **Free Storage Space:** 8GB
- **Operating System:** Windows 10

:::

There are no specific requirements for the webcam. If one is not already built into the laptop, a $20 webcam is sufficient.
We recommend purchasing from https://www.afbshop.de/, where refurbished, used devices are sold with a warranty.
This shop is notable not only for saving thousands of tons of CO₂ and electronic waste but also because nearly half of its 660 employees are people with disabilities.

## Head-Tracking with AITrack, Miranda, and Optikey

::: info In Short

- **Type of Tracking:** [Head-Tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#head-tracking)
- **Required Devices and Materials:** Webcam ($20)
- **Recording:** [AITrack (free)](/04-software-and-hardware-in-detail/aitrack)
- **Calibration:** [Miranda (free)](/04-software-and-hardware-in-detail/miranda)
- **Action:** [Optikey (free)](/04-software-and-hardware-in-detail/optikey)
- **Requirements:**
  - A webcam must be placed in front of the head.
  - The head must be able to move consciously.

:::

This guide uses AITrack, Miranda, and Optikey.
AITrack is a free software that records head movement. It does not require any additional tools and works well even in poor lighting conditions.
Miranda is a free calibration software that converts tracker data into screen positions.
Optikey is a free on-screen keyboard designed to be controlled using gaze direction or head position.

### Instructions:

1. Point your webcam at your head. The entire head should be visible.
2. Open AITrack and start tracking. The program should now show your face.
3. Open Miranda and select the data source "Opentrack". Ensure that "receive data from data source" is checked.
4. Start calibration by clicking the "re-calibrate" button.
5. Perform the calibration until satisfied, then confirm the calibration.
6. Open Optikey. Make sure the source is set to mouse position in Optikey's Management Console (ALT+M). You can test it by hovering the mouse over letters; if Optikey responds, it is working.
7. In Miranda, select the publisher "Mouse Position". Your mouse cursor should now follow your head movement. You can now control your mouse with your head.

## Head-Tracking with ArUco Markers in Opentrack, Miranda, and Optikey

::: info In Short

- **Type of Tracking:** [Head-Tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#head-tracking)
- **Required Devices and Materials:** Webcam (€20), printer for markers
- **Recording:** [Opentrack (free)](/04-software-and-hardware-in-detail/opentrack)
- **Calibration:** [Miranda (free)](/04-software-and-hardware-in-detail/miranda)
- **Action:** [Optikey (free)](/04-software-and-hardware-in-detail/optikey)
- **Requirements:**
  - A webcam must be placed in front of the head.
  - A printer is needed to print the ArUco markers.
  - The head must be able to move consciously.

:::

This guide uses Opentrack, Miranda, and Optikey.
Opentrack is a free software that can record, modify, and transmit head and eye-tracker data. It supports various head trackers, including ArUco marker tracking.
ArUco markers are machine-readable grid images printed on paper – similar to QR codes – and are detected by Opentrack through the webcam.
Miranda is a free calibration software that converts tracker data into screen positions.
Optikey is a free on-screen keyboard designed to be controlled using gaze direction or head position.

### Instructions:

1. Print an ArUco marker on paper (DIN A6 size is sufficient): [https://raw.githubusercontent.com/opentrack/opentrack/refs/heads/unstable/contrib/aruco/test3.png](https://raw.githubusercontent.com/opentrack/opentrack/refs/heads/unstable/contrib/aruco/test3.png)
2. Attach the marker to your head, e.g., with tape on your glasses or with a headband (be prepared to rotate the marker by 90 degrees if needed).
3. Point your webcam at your head. The marker should always be fully visible.
4. Open Opentrack, select "ArUco" as the source, and start tracking. Check if the octopus logo moves correctly with your head.
5. Open Miranda and select the data source "Opentrack." Ensure that "receive data from data source" is checked.
6. Start calibration by clicking the "re-calibrate" button.
7. Perform the calibration until satisfied, then confirm the calibration.
8. Open Optikey. Make sure the source is set to "Mouse Position" in Optikey's Management Console (ALT+M). If Optikey reacts when you hover over letters, it is working.
9. In Miranda, select the publisher "Mouse Position". Your mouse cursor should now follow your head movement, allowing you to control the mouse with your head.

## Eye-Tracking with the Beam Eye-Tracker and Optikey

::: info In Short

- **Type of Tracking:** [External Eye-Tracking](/02-basic-knowledge/02-eye-tracking-what-is-this#screen-based-eye-tracking)
- **Required Devices and Materials:** Webcam ($20)
- **Recording:** [Beam Eye-Tracker (2-hour free trial, then one-time $30)](/04-software-and-hardware-in-detail/beam)
- **Calibration:** Included in the Beam Eye-Tracker
- **Action:** [Optikey (free)](/04-software-and-hardware-in-detail/optikey)
- **Requirements:**
  - A webcam must be placed in front of the face.
  - The clearer the eyes are visible, the better the tracking.

:::

This guide uses the Beam Eye-Tracker and Optikey.
Beam is a paid software that tracks eye movement using the webcam.
Calibration of eye movement to the screen is also handled within Beam.
Optikey is a free on-screen keyboard designed to be controlled using gaze direction or head position.

### Instructions:

1. Point your webcam at your face. The eyes should be clearly visible.
   For better tracking results, place the webcam closer to your face.
2. Start the Beam Eye-Tracker.
3. Perform a calibration.
4. Activate the _Gaming Extensions_ to allow Optikey to receive tracking data.
5. Open Optikey and select "Beam-Plugin-Optikey" as the source in Optikey's Management Console (ALT+M). If the plugin is not installed yet, it can be done in the same console.
6. If everything is set up correctly, you should now be able to use the on-screen keyboard with the Beam Eye-Tracker.

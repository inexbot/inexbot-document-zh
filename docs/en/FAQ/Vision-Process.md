# Vision Process FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 13 entries -->

## Q1: 3D camera eye-in-hand hand-eye calibration, the result error is too large; troubleshooting directions

1) The Euler angle selected in the software must be consistent with the robot Euler angle 2) Whether the calibration board set in the software matches the actual calibration board 3) Multiple different heights, directions, and angles should be covered 4) Robot body accuracy

## Q2: 3D camera eye-in-hand, with tool hand, inaccurate positioning issue

1) Check whether there are operation errors in hand-eye calibration 2) Check robot body accuracy issues 3) Whether the tool hand calibration error is too large

## Q3: 2D camera triggered photo template matching instability issue

1) Confirm whether the light source is stable 2) Whether the distance from camera to object when taking photos is consistent with the camera-to-plane distance at hand-eye calibration 3) Adjust template matching parameters, add binarization and other optimizations to the captured image data

## Q4: After the Hikrobot 2D camera vision software performs nine-point calibration, in the teach pendant vision process test photo, the point the robot reaches differs from the point sent by the Hikrobot vision

1. Check whether the calibration points of N-point calibration are correct 2. Take the pixel coordinates of the four corners of the nine-point rectangle and subtract them to see if there is an error 3. Check whether the camera is aligned with the center circle

## Q5: When the vision conveyor runs, only one of two workpieces is tracked

1. First check whether the vision software captured both 2. Check the distance between workpieces 3. Check the threshold configured in the filter items

## Q6: Running the vision process reports a format does not conform error

Pay attention to the Chinese/English format of the frame header, separator, and terminator symbols

## Q7: Large calibration error between camera and robot

Check the robot parameters and whether the camera Euler angle conversion method is consistent

## Q8: Vision 1 trigger timeout, camera no response

The camera or client needs to send data within the set timeout range

## Q9: Vision 1 device not connected

1. Check the network cable between the camera and controller 2. Check the vision parameter settings corresponding to this process number, and correctly fill in the IP, port number and other parameters

## Q10: Vision 1 reply data protocol error

Check the protocol format of the data sent by the camera

## Q11: Vision: please wait, taking photo...

With vision connected, click test photo repeatedly

## Q12: Vision 1 did not capture the target

Place the recognized object back in the capture range; check whether the sent data is valid

## Q13: Why is the angle of the point sent by vision wrong?

Confirm whether the C sent by vision is in radians or degrees. In Settings - Operation Parameters - Posture Value, change it to match the vision.

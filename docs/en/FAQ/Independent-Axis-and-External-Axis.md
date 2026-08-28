# Independent Axis and External Axis FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 8 entries -->

## Q1: After adding an axis with the independent axis function, running has no response

1. First confirm whether the servo model supports the mode being used; 2. Check whether the corresponding PDO is added in the xml file; refer to the servo manual for the PDO required by the corresponding mode

## Q2: When using the independent axis constant speed motion, the speed is abnormal

1. First confirm whether the independent axis reduction ratio, rated speed, and encoder bits are filled in correctly; 2. Confirm whether the corresponding PDO is correctly added; 3. Export the configuration file, modify the pvAndPpModeMaxVel parameter in the IndependentControlAxisConfig file to 2^32, and after modification, be sure to start testing the speed from a small value

## Q3: Point jump occurs during continuous motion of the independent axis

1. Use the servo host computer to check the current encoder position and whether it is at the encoder critical value; 2. Enter the independent axis screen and enable the multiturn value function, correctly fill in the encoder type and range according to the drive; 3. After resetting the zero point, running again past the encoder critical value position will not cause jumps

## Q4: When running independent axis instructions, the axis responds slowly, e.g., after enabling, single-step instructions, slow drive power-on, etc.

1. The servo can be adjusted via the servo host computer; 2. If adjusting the servo is inconvenient, increase the servo detection time in Settings/Operation Parameters for that servo's response time

## Q5: The independent axis cannot stop properly when stopping the axis run

1. Confirm whether the background job file contains axis-related instructions; 2. Use the jog screen to confirm whether the point of this axis jumps; 3. Confirm whether the number of the axis to stop is selected correctly

## Q6: After starting the palletizing host computer, error "the current robot has no external axis, external axis instructions cannot be used"

1. When using the palletizing host computer without a lifting axis, an external axis must still be set; the auto-generated program contains external axis instructions. 2. On the teach pendant, click Settings - Robot Parameters - Slave Configuration - Robot Parameters screen to set a virtual external axis.

## Q7: The independent axis can run instructions and home normally, but cannot be jogged

Check whether the servo supports CSV mode; if supported, the corresponding PDO must be configured

## Q8: When the axis moves independently, the single-axis positioner cannot be jogged

The 60ff PDO port needs to be added to the auto-generated eni

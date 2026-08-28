# System Configuration and Authorization FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 14 entries -->

## Q1: Opening a job file reports "robot type does not match the current robot type", and opening fails

Go to Slave Configuration - Robot Type to modify the robot type and save

## Q2: The process screen displays blank

1. Check whether the process permission is selected 2. Check whether the process is decrypted

## Q3: How to adapt a robot and ensure normal motion?

1. Check the current robot communication method and upgrade the corresponding program 2. Upload the library file to identify the robot slave stations, and upload SlaveTypeLib to read the corresponding servos 3. Ask the manufacturer for the corresponding robot parameters; the first time, you can move the six axes to ensure safety. 4. Check the motion direction of each robot joint and whether the xyz directions are correct.

## Q4: The palletizing host computer cannot switch to the PC teach pendant

Contact the manufacturer to remotely install the PC

## Q5: After the palletizing host computer switches to the PC teach pendant, it shows connection lost

Change the connection IP to 127.0.0.1

## Q6: The PC teach pendant shows "Starting" at the top left on first use

Go to the "Settings - System Settings - Modify Teach Pendant Configuration" screen, change the virtual controller to "No", then reopen the PC teach pendant

## Q7: The PC teach pendant always shows "Starting" on first use

In the teach pendant configuration, change the virtual teach pendant to No

## Q8: Configuration file read/write failed

Downgrading caused configuration read/write failure; factory reset is required, then re-enter the parameters

## Q9: The process screen displays blank

The process permission is not selected in the permissions

## Q10: Upgrading from the general version to a special version (e.g., stamping), power-on homing causes the controller connection to be lost

Because unlocking a special process requires decryption; check in the operation parameters whether the corresponding process is selectable; if it is empty, decrypt it before use

## Q11: Teach pendant error: "there is an unselected robot type"

Indicates the system currently has no robot type selected; on the Settings/Robot Parameters/Slave Configuration\Robot screen, select the corresponding robot type, then fill in the joint parameters\DH parameters\zero point

## Q12: "This controller is not authorized. Please contact the manufacturer or dealer!"

Re-authorize based on the controller ID

## Q13: Why does the version upgrade fail?

1. Confirm whether the controller and teach pendant are connected properly 2. Confirm the upgrade file name has no special characters 3. Check whether the zip upgrade file content is the two files Qt-tp and nrc.out

## Q14: Opening a job file reports robot type does not match the current robot type

Go to Slave Configuration - Robot Type to modify the robot type and save.

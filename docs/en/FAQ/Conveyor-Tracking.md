# Conveyor Tracking FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 6 entries -->

## Q1: When running the linear conveyor tracking program, "position unreachable" is reported

1. Check whether the points of the program instructions (linear instruction, tracking start instruction) are reachable 2. Check whether the conveyor coordinate system calibrated after conveyor calibration is correct 3. Recalibrate the conveyor

## Q2: With vision conveyor tracking, it only tracks but does not pick

1. This is generally caused by the running speed being too slow; increase the global speed and joint speed so that the end-effector linear velocity is greater than the workpiece movement speed on the conveyor.

## Q3: The encoder value exists in the conveyor parameters, but the conveyor speed does not change

The encoder direction is set reversed

## Q4: Running the conveyor tracking start instruction in operation mode reports "conveyor tracking target out of limit"

Check whether the XYZ direction of the tracking start point is greater than the range set on the conveyor tracking range page; if it is greater, reconfigure it

## Q5: The material passes the sensor but stops at the conveyor tracking start and does not move

Insert the conveyor material-waiting instruction and check the data

## Q6: The conveyor process encoder has no data

Check the encoder cable and whether the direction is selected incorrectly

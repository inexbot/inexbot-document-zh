# Hand Guiding and Dynamics FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 15 entries -->

## Q1: With the robot unloaded, axis drop still occurs during hand guiding after dynamics identification

1. The robot is unloaded both before and after dynamics identification; check whether the current tool hand load parameters do not match the actual situation; 2. Check the servo manual to see whether the torque target value in CST mode is 6071 or 60B2, refer to the slaveTypeLib file configuration tutorial to write one, requiring the paramIndex value of the drag field to be the queried torque target value 24689 (6071) or 24754 (60B2); if there is no servo manual, you can first try configuring it as 24689, and if it does not work, change it to 24754, upload the file and restart

## Q2: Which robot models does the INEXBOT system support for hand guiding?

Six-axis series ABBABC and six-axis collaborative CBBCBA

## Q3: After load identification, with load enable turned on, axis drop or lifting still occurs

1. Whether the load value is written and whether the tool hand selection is correct. 2. Whether the conversion ratio in Human-Robot Collaboration - Load Enable is filled in correctly and whether the switch is on.

## Q4: After system power-on the robot is in hand-guiding state, the hand guiding effect is normal, but it cannot be switched to teach mode

1. The external button drag teach IO trigger configuration is wrong; force the IO not to trigger in the IO status, and modify the configuration. 2. Check whether the drive motor mode switching is normal.

## Q5: Error "the current servo type does not support hand guiding"

1. Check whether the robot type supports hand guiding 2. Check whether drag is configured in slaveTypeLib

## Q6: How to hand guide

1. Confirm it is a model that supports hand guiding, and perform dynamics identification 2. For the first time, fill in smaller values for trajectory and speed; after ensuring safety, fill in a speed of 100 to complete the trajectory test. 3. Start dynamics identification; after identification is complete, configure the drag parameters through the slaveTypeLib file and eni 4. Enter hand-guiding mode via the hand-guiding toggle button at the bottom left of the teach pendant.

## Q7: After hand-guiding identification is complete, dragging is difficult or axes 4, 5, and 6 cannot be dragged (great force needed)

1. First check whether it is a mechanical jam; after the servo releases the brake, check whether it can be pulled by hand (check whether the same force is needed after the servo releases the brake). 2. Increase the identification trajectory range; a larger range increases the identified points. After identification with 80% trajectory range, it is generally easier to drag than with 50% range. 3. Debug the friction compensation coefficient. 4. After checking, you can debug the servo's maximum position allowable error parameter in the software.

## Q8: Alarm "missing 6077" during dynamics parameter identification

Prepare a laptop and network cable in advance, and contact technical personnel for adaptation

## Q9: Dynamics hand-guiding identification alarms "torque hand guiding does not currently support this servo type"

The slaveTypeLib file needs to be configured to add the corresponding PDO of the servo

## Q10: Zero-force hand guiding: the unloaded identification hand-guiding effect is good, but after filling in load parameters with load, the hand-guiding effect is poor

It is related to inaccurate load parameters; you can perform dynamics identification with load for hand-guiding testing

## Q11: Third-party servo cannot be hand guided

Add the drag field to the servo identification file

## Q12: With the robot unloaded, axis drop still occurs during hand guiding after dynamics identification

1. The robot is unloaded both before and after dynamics identification; check whether the current tool hand load parameters do not match the actual situation 2. Check whether the identification data is correct

## Q13: How to hand guide

1. Confirm it is a model that supports hand guiding 2. Perform dynamics identification 3. After identification is complete, hand guiding can be used

## Q14: After load identification, with load enable turned on, axis drop or lifting still occurs

1. Whether the load value is written 2. Whether the tool hand selection is correct

## Q15: After system power-on the robot is in hand-guiding state, the hand guiding effect is normal, but it cannot be switched to teach mode

1. The external button drag teach IO trigger configuration is wrong; force the IO not to trigger in the IO status, and modify the configuration 2. Check whether the drive motor mode switching is normal

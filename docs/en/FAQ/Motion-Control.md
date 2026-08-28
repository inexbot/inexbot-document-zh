# Motion Control FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 26 entries -->

## Q1: During program execution, the robot's posture swings too fast

Change the Cartesian parameter to pose; with pose selected, the robot ensures the posture axis rotation angle remains fixed. With position selected, the robot ensures the end linear velocity

## Q2: The robot runs slowly, but the axis speed does not reach the set axis maximum speed

1. Modify the acceleration and jerk in the Cartesian parameters 2. Modify the minimum acceleration time in the motion parameters

## Q3: At startup, the operation mode default speed of 5 is too slow

It can be modified in Settings/Operation Parameters: operation mode startup default speed

## Q4: Except for point-to-point instructions, the default maximum speed value of other motion instructions is small

Modify the maximum speed in Settings/Robot Parameters/Cartesian Parameters; the maximum can be changed to 5000mm/s

## Q5: How to control robot inching?

The global speed can be changed to fixed-distance movement; both joint inching and linear inching are supported

## Q6: Error/warning: "Robot 1 reverse order does not support homing"

Press F/B on the teach pendant.

## Q7: "Target position unreachable" error when running a job file

1. Check whether the program point joint parameters exceed the maximum joint limits. (Jog a single joint to see whether the tool hand can reach the point in the program) 2. Check whether the user coordinate system calibration is correct. (Switch to the user coordinate system and run xyz to see whether the running direction is consistent with the actual calibration)

## Q8: In the Cartesian coordinate system, holding the jog button, the robot cannot move continuously

1. Replace the teach pendant to confirm whether the teach pendant keys are normal. 2. Increase the slave station communication cycle to 4ms. If the above methods do not solve it, contact the manufacturer.

## Q9: "Dynamic tracking error too large" prompt during running

Click Settings - Robot Parameters - Following Error and change the maximum dynamic error to 20000000

## Q10: The robot feels too stiff during running

1. Increase the smoothing in the run instructions. 2. Optimize the motion trajectory.

## Q11: The program runs too slowly

1. Program running speed = instruction speed × status bar speed × SPEED instruction value percentage; 2. Check whether the speed in the instructions is very low; if so, increase the speed of all instructions; 3. Check whether the speed percentage in the top status bar is very low; if so, before the program starts in operation mode, press the "V+" button on the teach pendant to increase the speed;

## Q12: Welding takes a long time when changing posture

Settings - Robot Parameters - Cartesian Parameters - Speed Limiting Method, change pose to position

## Q13: Modifying the global speed during incremental instruction execution has no effect

Incremental instructions do not support dynamic acceleration/deceleration adjustment

## Q14: Keep the speed consistent between trajectory running with fixed posture and with changing posture

Try modifying the position and pose in the Cartesian parameter screen

## Q15: Robot dynamic tracking error over limit

Clear the servo encoder multiturn value and reset the zero point

## Q16: The robot pauses during running

Smoothing is not pulled to max; pauses at the pick-up standby point and placement standby point may be caused by unsatisfied signals; change the instruction smoothing to 5 in the program

## Q17: "Robot 1 is jogging, please stop and retry"

Do not click the reset or zero point buttons while the robot is jogging

## Q18: "Robot 1 is jogging, speed cannot be modified"

Modify the speed before jogging the robot

## Q19: Running Cartesian reports joint overrun or the speed/coordinate values change greatly

Check whether it passes through a singular point, and switch to joint coordinates to run. Six-axis singular points: wrist singularity axes 4/6 coaxial, elbow singularity axes 2/3 collinear, shoulder singularity when the TCP point is on the axis 1 rotation axis

## Q20: The teach pendant operates normally, but the robot body does not execute any motion instructions

First confirm whether it is in "manual mode" without enable, or in automatic mode without a start signal; check whether the safety circuit (such as emergency stop buttons, safety door switches) is triggered

## Q21: Joint over-limit alarm when running a program

Check whether the program points are in range; if not, re-teach the points

## Q22: When running a specific program, it always stops with an error at the same position

Single-step run to see which line the program stops at, and check whether the program point exceeds the soft limits

## Q23: Laser cutting: jog does not move

1. Switch between automatic mode and manual mode

## Q24: Why does axis 4 move faster than other axes?

Check whether axis 4 and axis 6 are coaxial in the Cartesian coordinate system; at this time the robot is at a singular point, so avoid this posture.

## Q25: Except for point-to-point instructions, the default maximum speed value of other motion instructions is small

Modify the maximum speed in Settings/Robot Parameters/Cartesian Parameters; the maximum can be changed to 5000mm/s.

## Q26: The robot runs slowly, but the axis speed does not reach the set axis maximum speed

Modify the acceleration and jerk in the Cartesian parameters.

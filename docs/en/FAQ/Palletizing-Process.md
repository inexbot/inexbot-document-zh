# Palletizing Process FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 15 entries -->

## Q1: After setting the recipe in the palletizing workstation, when running, it returns to the zero point directly after reaching the pick-up point

1. Check whether the pallet IO and gripper IO are turned on 2. Check whether the transition point position is reasonable 3. Check whether the pallet position is reasonable 4. Check whether the version is correct

## Q2: Palletizing shows "not in stacking"

1. The program is written incorrectly and was run; execute palletizing reset to fix it

## Q3: Palletizing shows "position unreachable"

1. The palletizing layer height is set such that the robot cannot move to it 2. Check whether the robot moves accurately in the Cartesian coordinate system. Standing in front of the robot, X+ moves toward you, Y+ moves right, Z+ moves up. There is a distance measurement in the monitor; test whether the actual distance matches the test distance in the monitor. 3. Check whether the user coordinate system calibration is correct, and determine whether the user coordinate system Z+ points upward

## Q4: Empty grip when palletizing picks up material

1. Check whether the incoming material detection sensor signal is normal; photoelectric sensors can be falsely triggered when dirty. 2. Check whether the pick-up logic in the program is correct.

## Q5: In palletizing host computer palletizing, the target position cannot be reached during palletizing

Add transition points during the robot's palletizing path so the robot goes to the transition point first and then to the target position

## Q6: Vacuum break detection failed

The program passed the placement point, the workpiece is still held by the suction cup, and the main suction cup vacuum signal has not been set to 0

## Q7: The palletizing host computer placement point is too low

1. Settings - Tool Hand - Tool Height: increasing this parameter raises the placement point; decreasing it lowers the placement point. 2. Settings - Palletizing Correction Point - Z: increasing this parameter raises the placement point; decreasing it lowers the placement point. 3. Recipe - Pallet Parameters - Pallet Height: increasing this parameter raises the placement point; decreasing it lowers the placement point

## Q8: The overall palletizing result of the palletizing host computer is slanted

Jog in Cartesian coordinates at the zero point position to a corner of the pallet and check whether it is parallel to the pallet; if not parallel, adjust the rotation axis zero point

## Q9: The palletizing host computer presses the box during placement

Adjust the pre-placement point setting in the recipe

## Q10: When tracking palletizing, it is normal unloaded, but with load the workpiece is thrown off due to excessive speed

While maintaining the speed cycle, the only option is to optimize the anti-slip performance of the gripper, e.g., add anti-slip pads

## Q11: Robot 1 stack 1 running error (stack not in progress)

Palletizing-related instructions were executed without executing the palletizing start instruction

## Q12: Robot 1 stack running error (stack completed)

The stack was completed but was not reset before the next palletizing; the stack must be reset after completion before palletizing again

## Q13: Complete palletizing shows layers stacking downward in sequence

User coordinate system calibration issue; check whether the Z direction of the selected user coordinate system points upward

## Q14: There is no pick-up point in the recipe

In the settings screen, go to the calibration screen and turn off the common pick-up point button.

## Q15: Palletizing workstation upgrade: after connecting to a PC and using the PC teach pendant to select the robot model, when connecting to the integrated display-control unit, it prompts that the model does not exist

Check whether the upgrade file contains the QT file for the integrated display-control unit.

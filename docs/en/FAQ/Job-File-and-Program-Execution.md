# Job File and Program Execution FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 22 entries -->

## Q1: Using a six-axis robot to generate a DXF TCP job file, the posture changes strangely when running the trajectory

You can manually teach and modify the ABC axis positions in Cartesian coordinates, then generate the job file again. The points generated from the DXF job file are related to the robot's current posture

## Q2: While running an external TCP job file generated from DXF, at a certain position the end rotation axis rapidly reverses and then runs normally again

Check whether the end axis at the reversing point is close to the limit; when generating the job file, pay attention to the end axis position coordinates at that time and regenerate the file

## Q3: "Position unreachable" error when running a DXF file

1. Check whether the DXF file size meets the robot arm reach requirement 2. Check whether the user coordinate system and tool hand of the job file are selected correctly 3. Check whether the user coordinate system calibration direction is correct

## Q4: Error "Robot 1 left/right hand system used incorrectly"

The left/right hand selection is wrong; change the instruction's left/right hand

## Q5: The off-line programmed job file fails to parse and fails to open

1. Check whether the job file content conforms to the specification; you can compare it with a job file that currently opens. 2. Re-copy the job file and import it again to avoid file corruption caused by file transfer.

## Q6: Error "missing welding end, palletizing end, end-if and other instructions"

These instructions need to be used in pairs with welding start, palletizing start, if, and other instructions

## Q7: "Missing instruction" error when running a program

According to the error prompt, insert the corresponding missing instruction

## Q8: Four-axis robot: using the point-change or full-point-change instruction to modify the end rotation angle is abnormal

The sixth group of data corresponds to the end axis rotation and should be modified; usually the fourth group of data is mistakenly modified the first time

## Q9: Robot 1 job file content is empty

The running job file has no instructions inserted; insert the required instructions into the running job file, then run it

## Q10: Robot job file parsing failed

Check whether the job file content conforms to the specification

## Q11: Cannot delete a file or program in the teach pendant

Check whether it is set to read-only, check whether the program is running, and delete again after restarting

## Q12: Running a program alarms that an axis exceeds limit or speed exceeds limit

For point-to-point instructions, check whether the current position exceeds the positive/negative limits in the joint parameters. For Cartesian coordinates, after checking the limits, check whether the current body position is a singular point or whether the current position passes through a singular point.

## Q13: Starting the palletizing program alarms "palletizing in progress, please do not start again"

The previous palletizing start was executed without running palletizing end; single-step execute palletizing end or perform a palletizing reset.

## Q14: The palletizing program is written, why does starting it alarm "palletizing not in progress"

The palletizing start instruction must be run first, then run palletizing instructions such as palletizing entry point, auxiliary point, and workpiece point.

## Q15: How to import a program

Put the program's robotJob folder in the root directory of a USB drive, then on the teach pendant go to Settings - System Settings - Import Program.

## Q16: How to import a program; it cannot be opened

Check whether it was imported from the same robot model and the same version.

## Q17: During remote mode operation, the program shows running but the machine stops and does not move

Check which line the program stopped at, and whether a signal condition is not satisfied.

## Q18: The program runs too slowly; how to adjust it?

Program running speed = instruction speed × status bar speed × SPEED instruction value percentage. Check whether any of these are set too low.

## Q19: How to make the robot run more smoothly?

1. Increase the smoothing in the run instructions 2. Optimize the motion trajectory

## Q20: Background program reports error 0x5100 parameter error, or the file contains unusable instructions

The job file does not match the version; regenerate it with the corresponding version or upgrade the system version.

## Q21: Robot instruction error, delay instruction time exceeds the range

The defined delay parameter is out of range. This problem may occur if the job file was manually modified after exporting; the defined variable value exceeds the maximum limit. Modify the defined variable value to within range.

## Q22: Remote IO triggers program start, and every restart requires clearing breakpoints and the program starts over

Turn off "remote IO power-off execution" and "remote IO current-line execution" switches in Settings/Operation Parameters on the teach pendant.

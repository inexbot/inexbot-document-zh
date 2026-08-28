# Robot Calibration and Accuracy FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 11 entries -->

## Q1: After calibration with the INEXBOT NexAutoCali automatic robot calibration system, an error is reported (Robot 1 axis 0/axis 1/axis 4/axis jog speed reached limit)

1. The version provided by INEXBOT does not support alpha; contact the manufacturer to confirm 2. A non-full-parameter model was calibrated for the Alpha parameter and written into the controller; write the original Alpha parameter back and power off and restart

## Q2: After calibration with the INEXBOT NexAutoCali automatic robot calibration system, the data differs greatly from the manufacturer-provided data (greater than 100mm)

1. The manufacturer-provided parameters are wrong 2. The robot did not move into position (case: at Shandong Desheng site, two calibrations under the same conditions produced very different data; before the second calibration the robot had moved for 40 minutes in advance, and the gap between the calibrated data and the original factory data was small)

## Q3: After calibration with the INEXBOT NexAutoCali automatic robot calibration system, Cartesian coordinates cannot move normally (it moved normally before calibration)

1. The controller cannot calculate points correctly at the current communication cycle; lengthen the communication cycle 2. Wrong parameter selection; try not selecting A4/A5 3. The Alpha parameter was calibrated on a non-full-parameter version (currently full parameters only support the 2403 version of six-axis series models)

## Q4: The INEXBOT NexAutoCali automatic robot calibration system calibration data never meets the standard; among the three parameters before and after calibration, one is always greater than "1"

1. The robot body itself is poor, with insufficient stiffness and severe jitter during movement 2. Consider whether the robot has backlash 3. Encoder abnormality, movement does not reach position

## Q5: What are the robot's "repeat positioning accuracy" and "absolute positioning accuracy"?

Repeat positioning accuracy: the maximum dispersion range among the actual arrival positions when the robot approaches the same point multiple times from the same direction. It mainly reflects the stability and backlash of the robot servo system and transmission mechanism. Absolute positioning accuracy: the average deviation between the position the robot actually arrives at and the theoretical position set by the program instructions. It depends on the accuracy of models such as robot geometric parameter calibration (DH parameters), link flexibility, and temperature compensation. Troubleshooting focus: for poor repeat accuracy, first check the mechanics and servo; for poor absolute accuracy, full-model calibration is required.

## Q6: After calibrating the tool hand, the point-around effect is poor

1. Check for robot accuracy errors. 2. Repeat the tool hand calibration several more times; if it still does not work, it is recommended to perform laser calibration on the robot

## Q7: After the robot is installed upside down, the tool hand calibration is inaccurate

Some robots have backlash after being installed upside down, and the DH parameters change. Laser calibration needs to be redone.

## Q8: A six-axis series robot cannot draw a circle

1. Check tool hand calibration accuracy 2. Check robot body accuracy 3. Check the robot body parameter entries 4. Check the posture when drawing; keep the points as much as possible in one posture 5. Optimize servo parameters

## Q9: The laser calibration data differs greatly from the manufacturer's data

Ensure the site environment has no interference (no fans, air conditioners, etc.), the software parameters are checked correctly, six-axis collaborative models do not check d4; for other special models, contact service personnel

## Q10: How to calibrate the tool hand on a 4-axis SCARA

Take two tips, mount one on the robot end and place the other on a flat surface; jog the robot to align with the tip, calibrate the first point, rotate 180 degrees, move the robot to align with the tip, and calibrate the second point

## Q11: Is there a function to alarm when out of area?

1. Set the interference zone; in Cartesian coordinates, the machine coordinates in the monitor can be viewed for specific data 2. There are two interference zone setting methods: "manual filling" and "calibration"

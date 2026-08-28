# Kinematics Parameters and Zero Point FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 30 entries -->

## Q1: General six-axis series robot: at the zero point position, jogging in Cartesian XYZ shows both direction and trajectory disorder

1. Check whether the DH link length parameters are correct; check whether the DH axis 5 direction is 90 degrees and whether axis 5 of the real robot zero point position definitely points downward; 2. Jog joints in the positive direction and check whether the motion direction matches the marked direction in the model diagram; if not, invert the model direction of the joint parameter, e.g., change -1 to 1

## Q2: A six-axis collaborative robot moves straight in x and z, but y is slightly crooked

1. Check the zero point, DH parameters, and joint parameters 2. Check whether the robot L7 parameter value is filled in reversed

## Q3: With a multiturn encoder, after power-off restart, the zero point positions of all joints are lost and zero point calibration needs to be redone.

1. Check the drive battery voltage: if the voltage is below the threshold (usually 3.6V), immediately replace the battery with the same model while powered on to prevent loss again. 2. Check the encoder feedback: with the motor enabled but the brake not released, manually turn the motor shaft slightly and observe whether the position value of that axis changes in the software. 3. Check for hardware faults: if the problem persists after battery replacement, or a specific axis frequently loses its zero point, the absolute encoder of that axis or its battery memory circuit may have a hardware fault; contact technical support for component-level diagnosis.

## Q4: A single-turn encoder robot shows a zero point change on one axis after restart

1. Check the current servo's clearing mode and clear the multiturn value

## Q5: Pressing the home button has no effect

1. Check whether disabling homing is enabled on the Settings - Operation Parameters page 2. Replace the teach pendant to verify whether the home button is damaged

## Q6: The posture value is in radians; how to change it to degrees

Check the Settings - Operation Parameters page and change the posture value to degrees; the default is radians

## Q7: Error "Robot 1 axes 2/3 dynamic limit overrun"

Check whether the J2+J3 maximum and J2+J3 minimum values in Settings - Robot Parameters - DH Parameters are correct

## Q8: Zero point lost after power-off

Contact the servo manufacturer to check whether the servo parameter is set to absolute mode

## Q9: The 5-axis zero point position differs on six-axis series robots; the corresponding option needs to be modified in the DH screen

Horizontal 0° and vertical 90°.

## Q10: After adapting a new machine, jogging in the Cartesian coordinate system does not move accurately, and it is not a straight line or correct xyz direction.

1. Check whether the DH parameters in the controller settings are accurate; generally there are no DH parameters that are all integers. 2. Check whether the scale lines at the zero point calibration position are aligned; if there are no scale lines, refer to the diagram on the teach pendant and check whether each joint corresponds accurately. 3. Check whether the joint parameter reduction ratio matches the actual (you can jog a single joint 90° and intuitively see whether it actually rotated 90°)

## Q11: The body moves straight normally, but the teach pendant monitor shows ABC is very small

Check the operation parameters to see whether the posture value is in radians or degrees

## Q12: When the limit is too large, position jumps occur during jogging

Correctly fill in the multiturn overflow value function (minimum is -2³¹, maximum is 2³¹-1)

## Q13: The robot has problems running in the Cartesian coordinate system

1. Confirm whether the zero point position is calibrated according to system requirements; 2. Confirm whether the robot parameters (DH, reduction ratio) are filled in accurately. 3. Confirm whether the model direction of each axis is correct

## Q14: The home position does not match the setting

1. Check whether the encoder battery has power; the encoder battery voltage cannot be lower than 3.6V; 2. Check whether the robot has been collided, etc.

## Q15: What does model direction mean? How to fill it in?

The model direction can be set with reference to the joint positive direction diagram on the zero point position screen; jogging the "+" key of each axis should be the same as the joint positive direction in the diagram. Same direction select 1, opposite select -1.

## Q16: The external axis reading clears to zero after exceeding a certain value

Use the encoder overflow function

## Q17: Prompt "home key" has been disabled; please go to the settings screen to enable it

Go to the "Settings - Operation Parameters" screen and turn off disable home key

## Q18: How to fill in the J2+J3 maximum and minimum values for a four-axis linkage palletizing model?

1. First calculate J2max/J3max, J2min/J3max, J2max/J3min, J2min/J3min for axes 2 and 3 of the four-axis linkage palletizing model separately, and record the values of the four cases to get the base values 2. Remove the highest and lowest of the four values; the remaining two are the J2+J3 minimum/maximum; verify them, then continue optimizing to get the ideal dynamic limits to fill in.

## Q19: Method for checking the reduction ratio of joint parameters

b=α×(β/θ), where b is the reduction ratio (conversion ratio) to fill in, α is the reduction ratio (conversion ratio) currently set in the system, β is the degrees (length) displayed in the system monitor, and θ is the actually measured degrees (length)

## Q20: Zero point lost after power-off restart

Check whether the servo multiturn value has changed; the system records the zero point by capturing a node of the servo encoder multiturn value and does not directly change the value on the servo side.

## Q21: After the robot is shut down, an error is reported that the zero point is lost

Check whether the robot's encoder battery still has power

## Q22: The robot does not move in a straight line in Cartesian coordinates

Check the robot DH parameters, joint parameters, and zero point

## Q23: On a 4-axis SCARA, jogging axis 3 or axis 4 alone causes the other axis to follow

The DH parameter 3/4 coupling ratio is not filled in correctly

## Q24: The integrated drive cabinet loses its zero point after power-off restart

Change pa18 to 1001 and check whether alarm 19 appears; change pa80 to 10 and reset the zero point

## Q25: When running the program, the points differ from before; every point is offset

1. Check whether the robot zero point is normal. 2. Check whether the tool hand and coordinate system are consistent with the program.

## Q26: The tool coordinate was modified on the teach pendant, but the resulting trajectory is wrong

Note: check whether the modified tool coordinate system is the one that is actually needed

## Q27: In the DH model of a 6-axis collaborative robot, what do l6 and l7 mean?

l6 is the horizontal distance between axis 1 and axis 2; l7 is the distance between axis 1 and axis 5.

## Q28: The robot does not move in a straight line in the Cartesian coordinate system

Caused by incorrect DH parameters or joint reduction ratio entries. Check and correct the DH parameters.

## Q29: Reduction ratio estimation method

b=a×(β/Θ), where a is the original reduction ratio, β is the rotation angle of axis A, and Θ is the rotation angle of axis B.

## Q30: Coupling ratio calculation method

When axis A rotates by β degrees, it causes axis B to rotate by Θ degrees; coupling ratio = β/Θ.

---
title: "External Axis User Manual"
description: "Detailed instructions for external axis functions, including calibration and usage"
author: "cui"
date: "2026-06-17"
tags: ["iNexBot", "External Axis", "Operation Manual"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# External Axis User Manual

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :---: | :---: | :---: |
| External Axis Point-to-Point | **√** | **×** | **×** |
| External Axis Linear | **√** | **×** | **×** |
| External Axis Arc | **√** | **×** | **×** |
| External Curve | **√** | **×** | **×** |

## External Axis Introduction

External axes refer to axes other than the robot body, added for work needs, such as ground rails, flip tables, and rotary tables. They are used in spraying, welding, cutting and other industries.

## External Axis Types

1. Linear Single Axis

Install the robot on a ground rail, and use the external axis function to control the ground rail sliding to achieve long-distance movement of the robot in a single direction, enabling large-range, multi-station work.

2. Linear Dual Axis

Install the robot on a ground rail, and use the external axis function to control the ground rail sliding to achieve simultaneous long-distance movement of the robot in two directions, enabling larger-range, multi-station work.

3. Linear Triple Axis

Install the robot on a ground rail, and use the external axis function to control the ground rail sliding to achieve simultaneous long-distance movement of the robot in three directions, enabling even larger-range, multi-station work. The installation structure is shown in the figure:

![](./assets/cbeifmcr5cdtrzsfadgza.png)

4. Rotary Single Axis

Can be divided into: **Flip Axis or Rotary Axis**

**Flip Axis**: The flip table is independent of the robot body, controlled by the external axis function to flip to a specific angle, more conducive to processing a specific face of the workpiece, mainly used in welding, cutting, spraying and other aspects. For example, in the spraying industry, flipping the table to spray the upper and lower surfaces of the workpiece.

**Rotary Axis**: The rotary table is independent of the robot body, controlled by the external axis function, during welding operations the workpiece is welded as the external axis rotates.

5. Rotary Dual Axis

Combines the rotary axis and flip axis for use.

# External Axis Configuration

1. Click Settings - External Axis Parameters, then click [External Axis Type] on this interface to enter the external axis configuration interface.

![](./assets/-ujmvvslhatjt7xhqs-no.png)

Number of External Axis Groups: Maximum support for 12, equivalent to external axis numbers.

1. Click [Modify] to set the number of external axis groups.

3. After setting the number of external axis groups, click the corresponding external axis number to set the external axis type.

4. After setting parameters in the external axis configuration interface, click [Save].

5. Click [Axis Group Combination] to enter the axis group combination configuration interface.

6. After setting parameters, click Save, external axis configuration is complete.

![](./assets/hzu7z8drt7ylzguoe6dbc.png)

External Axis Groups: Supports a total of three external axis groups, click the corresponding row to select the external axis group.

Axis Group: After selecting the external axis, the axis group column parameters can be selected. This column displays the external axis number + external axis type set in the external axis configuration interface, users select different axis group combinations according to the set parameters.

![](./assets/fr7py0nsdntyjgir8iyn5.png)

![](./assets/_tcddoeio3roge_kthwdz.png)

| ![](./assets/1r8gm92g9tk_qvlkppzj8.png) |
|:---|
| External axis groups only support 3 groups |
| Total external axis count only supports 7 |

**Example Description**

1. On the slave configuration page, confirm whether the servo used by the external axis is read. If recognized, the slave page will display, as shown in the figure:

![](./assets/dogkqd6rdbt_6bloqavzu.png)

2. On the external axis configuration page, select the servo according to the corresponding axis

![](./assets/7tvuas2wwcirxpq4escup.png)

3. On the axis group combination page, select the external axis group

![](./assets/h6r0dr1h76ydtvy9_bp19.png)

## External Axis Calibration

![](./assets/zjukxjqrzh91rij31pr_e.png)

After the external axis is connected successfully, external axis calibration can be performed.

Current Collaborative External Axis Group Number: Range 1-3, when the external axis type is rotary single axis or rotary dual axis, the collaborative group number needs to be set, otherwise external axis linear and external axis arc instructions cannot run. When the external axis type is linear axis, the collaborative group number does not need to be selected.

Calibration: Click the calibration button of the corresponding external axis group to enter the calibration interface.

### Rotary Dual Axis Calibration

![](./assets/fexx96tnwkxjkoeuurbuz.png)

The external axis calibration interface is shown in the figure.

Calibration Steps:

1. External axis returns to zero point, and find a point on the rotary table as reference point A;

2. P1: External axis 2 rotates about 100 degrees in the positive direction, at this time reference point A is at P1 as shown, move the robot tip to P1, click calibrate;

3. P2: External axis 2 rotates about 50 degrees in the negative direction, at this time reference point A is at P2 as shown, move the robot tip to P2, click calibrate;

4. P3: External axis returns to zero, at this time reference point A is at P3 as shown, move the robot tip to P3, calibrate P3;

5. P4: Rotate external axis 1 about 25 degrees in the positive direction, at this time reference point A is at P4 as shown, move the robot tip to P4, click calibrate;

6. P5: Rotate external axis 1 about 25 degrees in the positive direction again, at this time reference point A is at P5 as shown, move the robot tip to P5, click calibrate;

7. Click calculate.

![](./assets/4oslbwhojm4orkm8nau5c.png)

![](./assets/lygfnsoobelgtv9apftob.png)

### Rotary Single Axis Calibration

![](./assets/018l8zj15zwlprxy2noqm.png)

1. External axis returns to zero point, and find a point on the platform as reference point A;

2. Rotate the external axis 100 degrees in the positive direction, at this time A is at P1, move the robot tip to P1, calibrate P1;

3. Rotate the external axis 50 degrees in the negative direction, at this time A is at P2, move the robot tip to P2, calibrate P2;

4. External axis returns to zero, at this time A is at P3, move the robot tip to P3, calibrate P3;

5. Click calculate.

### Flip Single Axis Calibration

![](./assets/ypliz9vfqdvw9klvmor4y.png)

1. External axis returns to zero point, and find a point on the platform as reference point A;

2. Rotate the external axis 50 degrees in the positive direction, at this time A is at P1, move the robot tip to P1, calibrate P1;

3. Rotate the external axis 25 degrees in the negative direction, at this time A is at P2, move the robot tip to P2, calibrate P2;

4. External axis returns to zero, at this time A is at P3, move the robot tip to P3, calibrate P3;

5. Click calculate.

### Linear Single Axis Calibration

![](./assets/q_cmtulbwlsf2mtlnrhvq.png)

1. X-direction conversion ratio: Distance the linear single axis moves in X direction when the reducer output shaft rotates one revolution

Calculation method 1: First fill in the conversion ratio value as 1, then measure the distance the linear single axis moves in X direction when the reducer output shaft rotates one revolution, then fill in the measured value as the conversion ratio;

Calculation method 2: Distance the linear single axis moves in X direction (number of teeth * pitch), fill in the calculated value as the conversion ratio;

2. Y-direction conversion ratio: Distance the linear single axis moves in Y direction when the reducer output shaft rotates one revolution

Omitted, calculation method can refer to [X-direction conversion ratio]

3. Z-direction conversion ratio: Distance the linear single axis moves in Z direction when the reducer output shaft rotates one revolution

Omitted, calculation method can refer to [X-direction conversion ratio]

4. Axis direction: Movement direction of the linear single axis: X, Y, Z three directions, can only select one

5. After the axis direction is selected and the conversion ratio is modified, open the collaborative enable switch to consider it calibrated

### Linear Dual Axis Calibration

![](./assets/3a0q31dlj_iru-v4rdeez.png)

Omitted, can refer to linear single axis calibration

Note: Axis direction: Movement direction of the linear dual axis: X, Y, Z three directions, can only select two, and cannot be repeated

### Linear Triple Axis Calibration

![](./assets/owf_1oydajrcz3e0hwgav.png)

Omitted, can refer to linear single axis calibration

Note: Axis direction: Movement direction of the linear triple axis: X, Y, Z three directions, all are required

**Direction Calibration**

Due to installation errors when installing the ground rail and robot, there may be deviation between the ground rail direction and the robot Cartesian coordinate system direction. The direction can be calibrated using the proportion coefficient calculated from calibration

![](./assets/no4tjy5zjvc8m9gt7-ha-.png)

1. This function can only be used when [Collaborative] is selected

2. Calibrate the first point of axis 1: Place a calibration cone in space, align the robot tool tip with the calibration cone

3. Calibrate the second point of axis 1: Move the ground rail to be calibrated to the other end of the calibration cone, align the robot tool tip with the calibration cone

4. Click [Calculate] to calculate the proportion coefficients for X, Y, Z directions

5. Click [Save] to complete

Note: Linear single axis needs to calibrate one axis, linear dual axis needs to calibrate two axes, linear triple axis needs to calibrate three axes

## Zero Point Position

### Zero Point Calibration

![](./assets/94k4cwsjqbcockwobbvw0.png)

The zero point position setting is shown in the figure.

The position where all external axis points are zero, users can set the external axis zero point position themselves.

1. Set as Zero Point: Set the position of a selected axis as the zero point.

2. Set All Joints as Zero Point: Set the positions of all external axes as the zero point.

3. Move External Axis to Zero Point: In teach mode, enable, click [Move External Axis to Zero Point], the external axis moves to the zero point position.

### Zero Point Offset

Zero point offset can be used when users need to adjust the zero point, manually enter values, operation method is similar to zero point calibration.

![](./assets/em_pn50wncol_chl2ygs-.png)

The zero point offset setting options are shown in the figure.

1. Set as Zero Point: Adjust the zero point position of a specific external axis individually, select the external axis whose zero point position needs to be adjusted, manually enter the value, click [Set as Zero Point], then click [Return] on this interface to enter the zero point position interface, click [Set as Zero Point] for the corresponding axis to modify the zero point position.

2. Set All Offset Points as Zero Point: Adjust the zero point positions of all external axes, manually enter values then click [Set All Offset Points as Zero Point], then click [Return] on this interface to enter the zero point position interface, click [Set All Joints as Zero Point] to modify the zero point position.

3. Move External Axis to This Point: In teach mode, enable, click [Move External Axis to This Point], the external axis moves to the zero point position.

### Clear Multi-Turn Values

Multi-turn values are the number of revolutions of the servo motor.

![](./assets/s0gnjrobbb_y_z7ii2cqt.png)

As shown in the figure, there are several options in the clear multi-turn values interface, the options are explained as follows:

Clear: Clear the multi-turn value of a specific external axis.

Clear All Axis Multi-Turn Values: Clear the multi-turn values of all external axes.

| ![Risk Warning](./assets/kkw333xkx-pelwsfd74re.png)<br>Please operate with caution, this operation will cause the robot encoder values to be cleared, resulting in the zero point data saved by the original factory being cleared!<br><br>May cause the following problems:<br>• Robot loses accuracy;<br>• Robot cannot operate normally;<br>• Previously established points cannot be operated. |
|:---|

### Encoder Absolute Position

The encoder absolute position is the number of pulses obtained within one revolution based on resolution and rotation angle.

After modifying the value, click save to modify the angle value.

![](./assets/biqdtkcirx0eeyvncjkov.png)

| ![](./assets/cyud-lnrhrhg2xchfcchj.png) <br>Please operate with caution, this operation will cause the robot encoder values to be cleared, resulting in the zero point data saved by the original factory being cleared!<br><br>May cause the following problems:<br>• Robot loses accuracy;<br>• Robot cannot operate normally;<br>• Previously established points cannot be operated. |
|:---|

# External Axis Parameters

![](./assets/l0dnkujqyty0tqrpezqbc.png)

1. Joint Positive Limit: The angle or distance the robot rotates in the positive direction, exceeding the limit during movement will report an error (robot jog position reaches limit).

2. Joint Negative Limit: The angle or distance the robot rotates in the negative direction, exceeding the limit during movement will report an error (robot jog position reaches limit).

3. Joint Reduction Ratio: The reduction ratio of the reducer.

4. Encoder Bits: Fill in the number of encoder bits currently used, be careful not to fill in randomly, otherwise the robot may run away when jogging.

5. Rated Positive Speed: The speed the motor can operate in the positive direction.

6. Rated Negative Speed: The speed the motor can operate in the negative direction.

7. Maximum Positive Speed: For example, at 1x it takes 10 seconds to reach rated positive speed from 0 speed, then at 2x it takes 5 seconds to reach rated positive speed.

8. Maximum Negative Speed: For example, at 1x it takes 10 seconds to reach rated negative speed from 0 speed, then at 2x it takes 5 seconds to reach rated negative speed.

9. Joint Rated Positive Speed: Robot joint rated positive direction speed, calculation method: Rated positive speed * 360 / 60 / reduction ratio.

10. Joint Rated Negative Speed: Robot joint rated negative direction speed, calculation method: Rated negative speed * 360 / 60 / reduction ratio.

11. Maximum Acceleration: For example, at 1x it takes 10 seconds to reach maximum acceleration from 0 speed, then at 2x it takes 5 seconds to reach maximum acceleration.

12. Maximum Deceleration: For example, at 1x it takes 10 seconds to reach maximum deceleration from 0 speed, then at 2x it takes 5 seconds to reach maximum deceleration.

13. Model Direction: Model direction can be set according to the joint positive direction diagram on the zero point position interface. The "+" key for jogging each axis should be in the same direction as the joint positive direction diagram, select 1 for same direction, select -1 for opposite direction.

#### Multi-Turn Values

Click [Settings] - [External Axis Parameters] - [Joint Parameters] to enter the joint parameters interface, click [Multi-Turn Values] to modify the encoder range.

Encoder Multi-Turn Value Overflow Count Function: This function is used to eliminate the impact of jumps between encoder maximum/minimum values.

For example, the encoder multi-turn value range is [-2147483648,2147483647], the current encoder multi-turn value position is 2147483647, then rotating 1 unit in the positive direction will be -2147483648. If the system does not know the encoder multi-turn value range, it will think the robot suddenly jumped, and will not know that it actually only rotated 1 unit, at this time it is easy to have a runaway phenomenon.

| ![](./assets/55wrifnnmjgpffrqn88j-.png) <br>This parameter must be filled in, not filling it may cause the following problems:<br>1. Large jumps in points, for example suddenly changing from 4 degrees to 40 degrees;<br>2. Runaway.<br><br>If configuring a driven axis, the encoder maximum/minimum values of the driven axis must also be filled in! |
|:---|

## Jog Speed

![](./assets/qg5fs8itbmlev668rarnq.png)

As shown in the figure is the jog speed interface, the terms are explained as follows:

Maximum Joint Axis Jog Speed: Speed when jogging the external axis, when the external axis is a rotary axis the unit is °/s, when the external axis is a linear axis the unit is mm/s.

External Axis Jog Speed Calculation Method: Maximum joint axis jog speed * global speed (the global speed here represents the speed in the status bar at the top of the teach pendant).

![](./assets/mmt3uxc3oihrzu6yhtqxs.png)

Joint Axis Jog Acceleration: Omitted.

## External Axis Instructions

When modifying the speed of external axis instructions, the acceleration ratio and deceleration ratio will automatically display in a 1:1 ratio with the speed. If you need to modify the acceleration ratio or deceleration ratio, you can do it manually.

### External Axis Point-to-Point

Function: The robot moves to the teach position using joint interpolation, the external axis rotates while the robot moves on the external axis through the taught points.

![](./assets/sbzxyizfqjmjmznqj-wdz.png)

Parameters:

| Parameter | Description |
|:---|:---|
| **E** | Variable that records robot and external axis position data.<br>When the value is "New", inserting this instruction will create a new E variable and record the current positions of the robot and external axis to that E variable. |
| **VJ** | Joint interpolation speed, range [1, 100]. |
| **EVJ** | External axis speed, range [1, 100].<br>Adding this parameter is to improve overall running speed, by calculating which speed takes longer to run, that speed is adopted.<br>When it is in [Not Used] state, when the robot and external axis move simultaneously, one of them may move very slowly. |
| **PL** | Smoothing level, range [0, 5]. |
| **ACC** | Acceleration ratio, range [1, 100]. |
| **DEC** | Deceleration ratio, range [1, 100]. |
| **Pre-time** | Execute the next instruction early, unit is ms. |

1. Move robot to E/GE point: In teach mode, press the enable button, click [Move Robot to E/GE Point] the robot and external axis will move to the position of the currently selected variable.

2. Set current position as E/GE point: Write the current positions of the external axis and robot to the selected variable. If the current point is a joint point, the current joint point coordinates will be written to the target variable; if the current point is a Cartesian point, the current Cartesian point coordinates will be written to the target variable; if the current point is a tool point, the current tool point coordinates will be written to the target variable; if the current point is a user point, the current user point coordinates will be written to the target variable.

3. Manual modification: Users can manually edit and modify points.

Example:

![](./assets/kjsl5vktzbsw7aow1ngvs.png)

Example Description: The robot moves from E0001 to E0002, and the external axis rotates during the movement from E0001-E0002.

### External Axis Linear

Function: The robot moves to the teach position using linear interpolation, the external axis rotates while the robot moves in a linear trajectory on the external axis.

![](./assets/nbk1xotibr-kkqxycqihr.png)

Parameters:
| Parameter | Description |
|:---|:---|
| **E** | Variable that records robot and external axis position data. When the value is "New", inserting this instruction will create a new E variable and record the current positions of the robot and external axis to that E variable. |
| **V** | Linear interpolation speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range changes according to actual Cartesian parameters), unit is mm/s. |
| **EVJ** | External axis speed, range [1,100]. |
| **PL** | Smoothing level, range [0,5]. |
| **ACC** | Acceleration ratio, range [1,100]. |
| **DEC** | Deceleration ratio, range [1,100]. |
| **Pre-time** | Execute the next instruction early, unit ms. |
| **SYNC** | **SYNC positioner synchronization:**<br>• Open synchronization: Robot and external axis move linearly together<br>• Close synchronization: Robot moves linearly in space, external axis moves independently to target angle |

1. Move robot to E/GE point: In teach mode, press the enable button, click [Move Robot to E/GE Point] the robot and external axis will move to the position of the currently selected variable.

2. Set current position as E/GE point: Write the current positions of the external axis and robot to the selected variable. If the current point is a joint point, the current joint point coordinates will be written to the target variable; if the current point is a Cartesian point, the current Cartesian point coordinates will be written to the target variable; if the current point is a tool point, the current tool point coordinates will be written to the target variable; if the current point is a user point, the current user point coordinates will be written to the target variable.

3. Manual modification: Users can manually edit and modify points.

Notes: Before using the external axis linear instruction, you need to select the external axis group number on the external axis calibration interface, otherwise the program will report an error when running. When calibrating the external axis, accurate calibration is required, otherwise there will be synchronization issues between the robot and external axis when running the external axis linear instruction.

Example:

![](./assets/0foyhhnghlcvvwrfadscc.png)

Example Description: After the robot is at E0003, the robot and external axis collaborate to move in a linear trajectory to E0004

### External Axis Arc

Function: The robot and external axis move together, the robot moves to the teach position using arc interpolation, the external axis moves using joint interpolation.

![](./assets/moivh7935l2jshhztcpol.png)

As shown in the figure is the parameter setting interface.

Parameters:

| Parameter | Description |
|:---|:---|
| **E** | Variable that records robot and external axis position data. When the value is "New", inserting this instruction will create a new E variable and record the current positions of the robot and external axis to that E variable. |
| **V** | Linear interpolation speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range changes according to actual Cartesian parameters), unit is mm/s. |
| **EVJ** | External axis speed, range [1,100]. |
| **PL** | Smoothing level, range [0,5]. |
| **ACC** | Acceleration ratio, range [1,100]. |
| **DEC** | Deceleration ratio, range [1,100]. |
| **Pre-time** | Execute the next instruction early. Unit ms. |
| **SYNC** | **SYNC positioner synchronization:**<br>• Open synchronization: Robot and external axis move linearly together<br>• Close synchronization: Robot moves linearly in space, external axis moves independently to target angle |

1. Move robot to E/GE point: In teach mode, press the enable button, click [Move Robot to E/GE Point] the robot and external axis will move to the position of the currently selected variable.

2. Set current position as E/GE point: Write the current positions of the external axis and robot to the selected variable. If the current point is a joint point, the current joint point coordinates will be written to the target variable; if the current point is a Cartesian point, the current Cartesian point coordinates will be written to the target variable; if the current point is a tool point, the current tool point coordinates will be written to the target variable; if the current point is a user point, the current user point coordinates will be written to the target variable.

3. Manual modification: Users can manually edit and modify points.

Notes: Before using the external axis arc instruction, you need to select the external axis group number on the external axis calibration interface, otherwise the program will report an error when running. When calibrating the external axis, accurate calibration is required, otherwise there will be synchronization issues between the robot and external axis when running the external axis arc instruction.

Example:

![](./assets/dz-xkqlawxi6iuyzfbxxi.png)

Example Description: The robot moves from the current position to P0001, from P0001 to the arc start point E0005, after reaching E0005 moves to the arc midpoint E0006, completes the entire external axis arc trajectory at E0007. During the movement from E0005-E0007, the robot and external axis collaborate to move in an arc, while the robot moves to the taught target point, the external axis also rotates synchronously.

### External Axis Curve

Function: The robot moves to the teach position using curve interpolation, the external axis moves using curve interpolation. The robot end-effector moves from E0002-E0005 in a curve trajectory, and the external axis rotates while moving in the curve trajectory.

![](./assets/h7bwqtuebbptvrkj_0iva.png)

Parameters:

| Parameter | Description |
|:---|:---|
| **E** | Variable that records robot and external axis position data. When the value is "New", inserting this instruction will create a new E variable and record the current positions of the robot and external axis to that variable. |
| **V** | Linear interpolation speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range changes according to actual Cartesian parameters), unit is mm/s. |
| **EVJ** | External axis speed, range [1,100]. |
| **PL** | Smoothing level, range [0,5]. |
| **ACC** | Acceleration ratio, range [1,100]. |
| **DEC** | Deceleration ratio, range [1,100]. |
| **Pre-time** | Execute the next instruction early. Unit ms. |
| **SYNC** | **SYNC positioner synchronization:**<br>• Open synchronization: Robot and external axis move in curve together<br>• Close synchronization: Robot moves in curve in space, external axis moves independently to target position |

Notes: Before using the external axis curve instruction, you need to select the external axis group number on the external axis calibration interface, otherwise the program will report an error when running. When calibrating the external axis, accurate calibration is required, otherwise there will be synchronization issues between the robot and external axis when running the external axis curve instruction.

Example:

![](./assets/nraueczecxv0gcw-t1cml.png)

Example Description: The robot moves from the current position to P0001, from P0001 to the curve start point E0008, after reaching E0008 moves to the curve transition point E0009, completes the entire external axis curve trajectory at E0011. During the movement from E0008-E0011, the robot and external axis collaborate to move in a curve, while the robot moves to the taught target point, the external axis also rotates synchronously.

## External Axis Notes

1. When setting multiple external axis groups, the robot can only collaborate with one external axis group at a time. You can switch the current collaborative external axis group by inserting the collaborative external axis instruction, as shown in the figure:

![](./assets/q9vlzjvztaysv27qtef96.png)

2. External axis linear and external axis arc instructions cannot enable synchronous running when the external axis is not calibrated or the collaborative group number is not selected.

3. When the external axis type is linear single axis, linear dual axis, or linear triple axis, the collaborative external axis group number does not need to be selected.

## External Axis Usage

In welding processes, the external axis of the welding robot mainly assists the robot in completing welding actions while improving efficiency and accuracy. The robot and positioner perform coordinated movement, when the robot completes welding one side, the positioner automatically flips to the other side for welding operations.

Operation Steps:

1. External axis calibration, set external axis parameters;

2. Set welding parameters in the welding process interface;

3. Teach points (welding trajectory).

### Welding

![](./assets/ix3tlefgyvcoxmujs7si3.png)

1. Safety point;

2. Starting point of the welding trajectory;

3. Welding start;

4. End point of the welding trajectory;

5. Welding end.

### External Axis Fixed Point Weaving

![](./assets/ozihbxecqs1w0exft7wzg.png)

Notes:

1. Position variable E contains the robot position data and external axis position data, the external axis point determines the external axis rotation direction, the robot point determines the weaving trajectory.

2. When calibrating E1 and E2 for the external axis, both the robot and external axis need to move.

---

## Q&A for Retrieval

**Q: What are the types of external axes?**

A: External axis types include: linear single axis, linear dual axis, linear triple axis, rotary single axis, rotary dual axis.

**Q: What are the steps for external axis calibration?**

A: The steps for external axis calibration vary by axis type:
- Rotary dual axis: Return to zero point to find reference point A, calibrate P1, P2, P3, P4, P5 points respectively, then click calculate
- Rotary single axis: Return to zero point to find reference point A, calibrate P1, P2, P3 points respectively, then click calculate
- Flip single axis: Return to zero point to find reference point A, calibrate P1, P2, P3 points respectively, then click calculate
- Linear axis: Set conversion ratio and axis direction, open collaborative enable switch

**Q: What types of external axis instructions are there?**

A: External axis instructions include: external axis point-to-point, external axis linear, external axis arc.

**Q: How to set the external axis zero point position?**

A: You can set the external axis zero point position in the following ways:
- Set as Zero Point: Set the position of a selected axis as the zero point
- Set All Joints as Zero Point: Set the positions of all external axes as the zero point
- Zero Point Offset: Manually enter values to adjust the zero point position

**Q: What should be noted when using external axes?**

A: When using external axes, note:
- When setting multiple external axis groups, the robot can only collaborate with one external axis group at a time
- External axis linear and external axis arc instructions cannot enable synchronous running when the external axis is not calibrated or the collaborative group number is not selected
- Linear axis types do not need to select the collaborative external axis group number

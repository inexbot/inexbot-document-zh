---
title: "DXF Process"
description: "How to use the DXF process, detailed function operation manual"
author: "Luoy-i"
date: "2026-04-15"
tags: ["INEXBOT","DXF Process","24.03","User Manual","DXF File Format"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# DXF Function User Manual

## Operation Procedure

![](assets/k5gb6xdbmhhgrtarvckey.png)

1. The DXF function is built on the user coordinate system. The origin of the user coordinate corresponds to the origin of the graphics in the DXF file.
2. The workpiece and DXF file must be reproduced at 1:1 scale. The workpiece origin position must correspond to the graphics origin in the DXF file.
3. DXF files need to be drawn using CAD software. When exporting the file, use **.dxf format** (QCAD drawing software is recommended).
4. The DXF function supports reading line, arc, polyline, spline, and full circle entities. Other entities are not currently supported.
5. Please delete unnecessary graphics from the DXF file. Keep it as simple as possible, and the graphics should ideally be a single complete continuous trajectory. If there are other messy graphics or the graphics are drawn in segments, it may affect the robot's motion trajectory.

**Note:** The origin and XY axes of the graphics in the DXF file are the origin and XY axes in the CAD software.

![](assets/n15kwq-ghddmriqgul_gf.png)

## DXF Function

### Graphic Interface

Operation path: [Process-DXF]

![](assets/nmq2vgyf_z_zqmwmawf5x.png)

Click to enter DXF

![](assets/zh83t-yg_eswijzm5hx8m.png)

| Function | Description |
| --- | --- |
| Back | Return to the [Process] interface. |
| Teach Start Point | When using external TCP, mark the workpiece start point to calibrate the workpiece position. |
| Teach End Point | When using external TCP, mark the workpiece end point to calibrate the workpiece position. |
| Drag | Turn on the switch to drag the canvas position. |
| Discrete Points | Before opening the DXF file (spline), you need to fill in the discrete points first. The higher the discrete points, the more points in the generated job file (except for splines, other supported entities do not need to modify discrete points, use the default discrete points, discrete point values are invalid for them). |
| Open | A USB drive is required. The default open directory is the controller directory. Place the DXF file in the root directory of the USB drive. |
| Speed Planning | Used to plan the speed of the trajectory in the graphic. |
| ![](assets/tkyjunzsbnlw2in4agi4c.png) | Used to zoom in the canvas size. |
| ![](assets/-xaomskexjqiciupvgmc1.png) | Used to zoom out the canvas size. |
| ![](assets/ca-qrcjjen1tzdi7fwcu2.png) | Used to reset the canvas position. |

## Opening DXF File

**Old Version**

![](assets/skpnxpxepn8qey2rkgnn7.png)

Steps: Insert USB drive into the teach pendant, ① Fill in the required [Discrete Points] → ② Click [Open] → ③
Select the USB drive folder → ④ Select the corresponding DXF file → ⑤ Click [Open] to open the file.

Notes:

1. After opening the DXF file, if you change the discrete points, please reload the DXF file after the change for it to take effect.
2. Discrete points only apply to splines. The points of other supported entities generated are related to the points that exist during drawing.
3. Currently the maximum supported discrete point value is 5000. The filled value should be reasonable. Do not fill too many discrete points in DXF files with too many splines. The product of the number of splines and discrete points must be less than 9999. Too many discrete points on a short trajectory will cause the program to fail, which is related to the robot's absolute position accuracy.
4. When opening the DXF file, click open until the DXF file to be selected. During the process, please note! Do not drag any folders!!!

**New Version**

![](assets/gprvrbgl5g-cx-mdjynmc.png)

Steps: Insert USB drive into the teach pendant, ① Fill in the required [Discrete Points] → ② Click [Open] → ③
Select the corresponding DXF file → ④ Click [OK] to open the file.

After opening, the preview is as follows

![](assets/omya8_zy9cyt28w-fjvkg.png)

The points connected to the origin by dashed lines in the graphic represent the starting point of each trajectory segment in the DXF file. X represents the positive direction of the X-axis, and Y represents the positive direction of the Y-axis.

### Speed Planning Parameter Interface

Operation: [Process]-[DXF]-[Speed Planning]

![](assets/fpoemcrolloo3fsada4e4.png)

| Function | Description |
| -------------- | -------------------------------- |
| Start Point | The starting point of a certain trajectory segment |
| End Point | The ending point of a certain trajectory segment |
| Speed | The Cartesian speed of this trajectory segment |
| Offset Angle (External TCP only) | The offset angle of this trajectory segment relative to the tangential motion direction of the external TCP (gradual offset) |
| Delete | Delete this point trajectory segment and merge it into the previous trajectory segment |

Note:

1. By default, it is from the first point to the last point of the entire trajectory. Modify the end point parameter to set partial trajectory segments. The remaining points are automatically divided into new trajectory segments. When selected, the corresponding points will be displayed as red trajectories in the graphic.
2. This part of the points already includes lifting points.

### Program Parameter Interface

Operation: [Process]-[DXF]-[Speed Planning]-[Program Parameters]

![](assets/sgjpl-qwpagsaygjxesxx.png)

| Function | Description |
| ------- | ---------------------------------------------------------|
| Program Name | Job file name starting with a letter or Chinese character. |
| Instruction Type | Can choose TCP or External TCP. |
| Tool | Used to select the tool coordinate to use. (When a user loads a tool on the robot end-effector, the tool center point often does not coincide with the robot flange center. At this time, tool coordinate calibration is required. Refer to INEXBOT's official robot calibration method. This document does not focus on this. If the user does not perform tool calibration, the actual trajectory will have a large deviation from the imported graphic trajectory. The farther the tool center is from the flange center, the greater the deviation.) |
| User Coordinate System | Used to select the user coordinate number to use. If using a tool, calibrate the tool coordinate first, then calibrate the user coordinate with the tool. |
| PL | The smoothing level of the robot motion instruction. Increasing the smoothing level makes motion between instructions smoother, but also produces smoothing errors at the connection points between instructions (range 0-5). |
| ACC | Acceleration of the generated motion instruction (range 1-100). |
| DEC | Deceleration of the generated motion instruction (range 1-100). |
| Lift Height | The lift height before running each trajectory segment and after ending each trajectory segment (if the user coordinate system Z-axis positive direction is negative after calibration, i.e., Z-axis points down, the lift height direction will be negative). |
| Lift Speed | The running speed when executing the lift instruction. |
| Insert Lift Points | Can choose whether to insert lift points. If the switch is on, lift points will be inserted before running each trajectory segment and after ending each trajectory segment. If the switch is off, even if "Lift Height" and "Lift Speed" are filled in, lift point instructions will not be generated. |
| Back | Return to the DXF interface. |
| Generate | After filling in the parameters, generate the corresponding job file. |

### Running Program

![](assets/7zirmhy8xnahaw_mczvth.png)

After the program is generated, it will automatically jump to the generated job file. You can also select the generated program in [Project] and open it. Switch the teach pendant to run mode and press the [Start] button.

**Note:**

If you want to run this program in a loop, you can add a joint coordinate point-to-point instruction as a safety point in the first or last line of the program. After setting the safety point, you need to run it to see if the trajectory is correct. If the safety point is set unreasonably, it will cause joint limit exceeded and abnormal motion trajectory.

## Usage Examples

### Example 1: Generate External TCP

**Using a four-axis SCARA robot as an example:**

1. First, place the DXF file in the USB drive and insert the USB drive into the teach pendant (FAT32 type USB drive is recommended).

![](assets/edrbpbysrak_9n00tqq1o.png)

1. Click [**Process]-[DXF]** on the teach pendant.

![](assets/o616tu2wjoiugcbxpgdmo.png)

1. First enter the required value in [Discrete Points] (only applies to splines. The larger the value, the more points in the generated job file. The value should be reasonable. Too many will cause the trajectory to run unsmoothly).

![](assets/em2mcs0ttgy5sdzgc3zzi.png)

1. ①Click the [Open] button, ②In the pop-up window, select the mnt folder and then enter the udisk folder. This folder contains the files on the USB drive. Find and open the DXF file, as shown below.

![](assets/4hyd_8ncwczvad3fgvomx.png)

1. Calibrate the tool to determine the flange center.

Step 1, click [Settings]-[Tool Calibration]

![](assets/ld-b7rmcby4d50tff8f2m.png)

Step 2, click [Tool Calibration] in the **No Tool** state.

![](assets/nuyvepkx7njs1a9wbdjft.png)

Step 3, use the 2-point method for four-axis SCARA robot tool calibration.

![](assets/bxnqznqwkjzfdwkqqblrm.png)

Step 4, TC1 is any point in space. Align the tool tip with the external tool tip point and click **Calibrate**.

Step 5, TC2 is based on TC1 with the U-axis of the Cartesian coordinate system jogged to 180° (you need to modify the **attitude value** to degree value in [Operation Parameters] to see degrees). Then move the XYZ axes to align the tool tip with the external tool tip point and click **Calibrate**.

Step 6, after two-point calibration, click **Calculate**.

Step 7, select the calibrated tool.

1. Calibrate the user coordinate system.

If using a tool, when calibrating the user coordinate, you need to select the tool and calibrate the user coordinate with the tool (the calibrated user coordinates must be on the same horizontal plane, i.e., Z values must be consistent).

When calibrating the user coordinate system, pay attention to the calibration direction. It is recommended to set the robot coordinate system to user coordinate after calibration, and jog UZ to check the lift direction. Sometimes the calibration direction is reversed, causing the lift direction to be negative.

Step 1, click [Settings]-[User Coordinate Calibration]

![](assets/u8j4tnirudlo4cczhrqmp.png)

Step 2, select the user coordinate number to calibrate.

Step 3, click [User Calibration]

![](assets/bndkbgeoryelsklbi5kyp.png)

Step 4, calibrate the user coordinate origin and XY axis direction (the calibrated user coordinates must be on the same horizontal plane, i.e., Z values must be consistent. If the Z-axis is inconsistent after clicking mark, you can click **Modify** to manually fill in the same Z value).

![](assets/7kuzf6oxuo6shbjsndyhy.png)

Step 5, click **Calculate**.

1. Place the workpiece. The workpiece can be placed in any position. After placement, before generating the job file, you need to teach the start point and end point.

![](assets/0o-5gm5n3cvzxfr4ytigw.png)

| Function | Description |
| --- | --- |
| Teach Start Point | The start point of the workpiece. Run the robot to align the trajectory start point with the external tool tip (if using a tool, select the tool number used; if not, select "No Tool"). After alignment, click "**Teach Start Point**". |
| Teach End Point | The end point of the workpiece. Run the robot to align the trajectory end point with the external tool tip (if using a tool, select the tool number used; if not, select "No Tool"). After alignment, click "**Teach End Point**". |

1. Click **Program Parameters**, enter the program name, select the instruction type as **External TCP**, select the tool number as the calibrated tool, select the user coordinate system as the calibrated user coordinate system. Fill in the correct speed, smoothness, acceleration, deceleration, lift height, and lift speed to use (if using lift height, you need to turn on the "Insert Lift Points" switch).

![](assets/rbj3gypdbftuwgk8cl8zr.png)

1. Click **Generate**. The generated job file is stored in **Project**. Open the job file and run it.

**The generated job file point hand system is consistent with the hand system used when calibrating the user coordinate system.** That is, when using the left hand to calibrate the user coordinate, the point hand system in the job file is the left hand; when using the right hand to calibrate the user coordinate, the point hand system in the job file is the right hand.

When running the job file in a loop, you need to manually insert a joint coordinate point-to-point instruction in the first or last line of the program to return to a safe position (after setting the safety point, you need to run it to check if the trajectory is correct. If the safety point is set unreasonably, it will cause joint limit exceeded and abnormal motion trajectory).

![](assets/lnob_f5vglg8zubcari_y.png)

### Example 2: Generate TCP

**Using a four-axis SCARA robot as an example:**

1. First, place the DXF file in the USB drive and insert the USB drive into the teach pendant (FAT32 type USB drive is recommended).

![](assets/6obgjpyyofrk0od1l5thd.png)

1. Click [Process]-[DXF] on the teach pendant.

![](assets/4gvy0otrpkqb2dwifirsx.png)

1. First enter the required value in [Discrete Points] (only applies to splines. The larger the value, the more points in the generated job file. The value should be reasonable. Too many will cause the trajectory to run unsmoothly).

![](assets/xw_ok0ehqyed39pgrh2ou.png)

1. ①Click the [Open] button, ②In the pop-up window, select the mnt folder and then enter the udisk folder. This folder contains the files on the USB drive. Find and open the DXF file, as shown below.

![](assets/lh3x8hmx8ibgyzs_omnpx.png)

1. Calibrate the tool to determine the flange center.

Step 1, click [Settings]-[Tool Calibration]

![](assets/cuterzdlb5xvpno5pcwhh.png)

Step 2, click [Tool Calibration] in the **No Tool** state.

![](assets/j63wftpykra8qvoydjer4.png)

Step 3, use the 2-point method for four-axis SCARA robot tool calibration.

![](assets/fhkwcbldly3fmsapf4baj.png)

Step 4, TC1 is any point in space. Align the tool tip with the external tool tip point and click **Calibrate**.

Step 5, TC2 is based on TC1 with the U-axis of the Cartesian coordinate system jogged to 180° (you need to modify the **attitude value** to degree value in [Operation Parameters] to see degrees). Then move the XYZ axes to align the tool tip with the external tool tip point and click **Calibrate**.

Step 6, after two-point calibration, click **Calculate**.

Step 7, select the calibrated tool.

1. Calibrate the user coordinate system.

If using a tool, when calibrating the user coordinate, you need to select the tool and calibrate the user coordinate with the tool (the calibrated user coordinates must be on the same horizontal plane, i.e., Z values must be consistent).

When calibrating the user coordinate system, pay attention to the calibration direction. It is recommended to set the robot coordinate system to user coordinate after calibration, and jog UZ to check the lift direction. Sometimes the calibration direction is reversed, causing the lift direction to be negative.

Step 1, click [Settings]-[User Coordinate Calibration]

![](assets/nuoihv6q7q8b-1s3ktwb0.png)

Step 2, select the user coordinate number to calibrate.

Step 3, click [User Calibration]

![](assets/17xahsnn08f63rhemavqm.png)

Step 4, calibrate the user coordinate origin and XY axis direction (the calibrated user coordinates must be on the same horizontal plane, i.e., Z values must be consistent. If the Z-axis is inconsistent after clicking mark, you can click **Modify** to manually fill in the same Z value).

![](assets/y7jzk2yg6jkfuehefonxr.png)

Step 5, click **Calculate**.

1. Click **Program Parameters**, enter the program name, select the instruction type as **TCP**, select the tool number as the calibrated tool, select the user coordinate system as the calibrated user coordinate system. Fill in the correct speed, smoothness, acceleration, deceleration, lift height, and lift speed to use (if using lift height, you need to turn on the "Insert Lift Points" switch).

![](assets/me4vjyeuar74a4k1xsjr9.png)

1. Click **Generate**. The generated job file is stored in **Project**. Open the job file and run it.

**The generated job file point hand system is consistent with the hand system used when calibrating the user coordinate system.** That is, when using the left hand to calibrate the user coordinate, the point hand system in the job file is the left hand; when using the right hand to calibrate the user coordinate, the point hand system in the job file is the right hand.

When running the job file in a loop, you need to manually insert a joint coordinate point-to-point instruction in the first or last line of the program to return to a safe position (after setting the safety point, you need to run it to check if the trajectory is correct. If the safety point is set unreasonably, it will cause joint limit exceeded and abnormal motion trajectory).

![](assets/xxfvlp11hbmlnyadlgoti.png)

**Note:**

When generating a TCP job file, during runtime the flange center (tool center) moves along the DXF trajectory; when generating an external TCP file, during runtime every point in the workpiece (DXF trajectory) passes through the user coordinate origin.

When using **External TCP** to generate a full circle trajectory, the end point of the trajectory is the position of the start point symmetrically centered about the circle center, as shown below.

![](assets/_mogz8hhesleldjmbnq4u.png)

When using **External TCP** to generate full circle or arc trajectories, due to small movement distance and large attitude change, the running speed will be too fast, and you need to manually modify the instruction speed. When generating arc trajectories, if a dynamic limit exceeded error occurs, you can manually modify the user coordinate to joint coordinate in [Variables], as shown below.

![](assets/r202uoz1pmxhyqa81jx-8.png)

![](assets/1uberqk5rls8yp9rvrzjw.png)

If the DXF graphic drawn in CAD has right angles, it is recommended to insert points close together on both sides of the right angle, as shown below.

![](assets/ll7lhtkjfbo7pdmc7j65u.png)

## CAD Usage Notes

1. After drawing with CAD, you must save in dxf format.
2. When drawing with CAD, you can use line, arc, polyline, spline, full circle and other entities, but try to use the same entity to draw **one** complete trajectory in a single file.
3. If drawn in segments, it will affect the robot's motion trajectory (when drawn in segments, the robot runs each segment in the order the graphics are drawn in the DXF file).

![](assets/snitva3wsax__drnlhqb6.png)

![](assets/nrtfxdaqjpqr3sieh2-o5.png)

As shown above, if a lift height is filled in when generating the job file, the robot will first lift-run line ①-lift again-run arc ②-lift again-run polyline ③-lift again-run arc ④.

1. If multiple entities are used to draw, the robot will not be smooth at the junction of two entities. When generating the job file, if a lift height is filled in, each trajectory segment will produce a lift; if no lift height is filled in, there will also be stuttering at the trajectory junction. It is recommended to fill in a smoothing value for smooth operation.
2. <br />
   1. If multiple entities are needed to draw one graphic, the direction of the start point and end point of each trajectory segment must be consistent, i.e., the beginning of the next trajectory segment must be connected to the end of the previous trajectory segment.
3. <br />
   1. In QCAD, when using arc or circle entities, both arc and circle trajectories run counterclockwise. When using multiple entities, pay attention to the start point of each trajectory segment. The end point of the previous trajectory segment should be the same point as the start point of the next trajectory segment. The start point of an arc is the counterclockwise starting point of that arc trajectory.

![](assets/eteoiou725fjypio4utqi.png)

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What entity types does the DXF function support?**

A: The DXF function supports reading line, arc, polyline, spline, and full circle entities. Other entities are not currently supported.

**Q: How to correctly prepare a DXF file?**

A:

- Draw using CAD software and export in .dxf format (QCAD drawing software is recommended)
- The workpiece and DXF file must be reproduced at 1:1 scale, and the workpiece origin must correspond to the graphics origin in the DXF file
- Delete unnecessary graphics, keep it as simple as possible, and the graphics should be a single complete continuous trajectory
- Try to use the same entity to draw one complete trajectory in a single file

**Q: What is the function of the discrete point parameter?**

A: Discrete points only apply to splines. The higher the discrete points, the more points in the generated job file. Other supported entities do not need to modify discrete points, use the default discrete points, discrete point values are invalid for them. Currently the maximum supported discrete point value is 5000.

**Q: How to open a DXF file?**

A:

- Insert USB drive into the teach pendant (FAT32 type USB drive is recommended)
- Fill in the required discrete points (only applies to splines)
- Click the [Open] button
- Select the corresponding DXF file in the pop-up window
- Click [OK]

**Q: What is the difference between TCP and External TCP?**

A:

- Generate TCP job file: During runtime the flange center (tool center) moves along the DXF trajectory
- Generate External TCP file: During runtime every point in the workpiece (DXF trajectory) passes through the user coordinate origin

**Q: What should I pay attention to when using External TCP?**

A:

- When using External TCP to generate a full circle trajectory, the end point of the trajectory is the position of the start point symmetrically centered about the circle center
- When using External TCP to generate full circle or arc trajectories, due to small movement distance and large attitude change, the running speed will be too fast, and you need to manually modify the instruction speed
- When generating arc trajectories, if a dynamic limit exceeded error occurs, you can manually modify the user coordinate to joint coordinate in [Variables]

**Q: How to correctly calibrate the tool and user coordinate system?**

A:

- Tool calibration: Click [Tool Calibration] in the No Tool state, use the 2-point method for calibration, and finally click [Calculate]
- User coordinate system calibration: If using a tool, select the tool and calibrate the user coordinate with the tool. The calibrated user coordinates must be on the same horizontal plane (Z values must be consistent)

**Q: How to run the generated program in a loop?**

A: You can add a joint coordinate point-to-point instruction as a safety point in the first or last line of the program. After setting the safety point, you need to run it to check if the trajectory is correct. If the safety point is set unreasonably, it will cause joint limit exceeded and abnormal motion trajectory.

**Q: Why does the generated job file trajectory not match expectations?**

A: Possible reasons include:

- Tool not correctly calibrated
- User coordinate system not correctly calibrated
- DXF file contains messy graphics or segmented drawing
- Discrete points set unreasonably
- Lift height set improperly

**Q: What should I pay attention to when using multiple entities?**

A:

- The direction of the start point and end point of each trajectory segment must be consistent, i.e., the beginning of the next trajectory segment must be connected to the end of the previous trajectory segment
- In QCAD, when using arc or circle entities, both arc and circle trajectories run counterclockwise
- When using multiple entities, pay attention to the start point of each trajectory segment. The end point of the previous trajectory segment should be the same point as the start point of the next trajectory segment
- If a lift height is filled in when generating the job file, the robot will lift before and after each trajectory segment
- If no lift height is filled in, there may be stuttering at the trajectory junction. It is recommended to fill in a smoothing value for smooth operation

## Related Resources

- [External Point TCP](外部点TCP.md)

- [User Coordinate Calibration](用户坐标标定手册.md)

- [Tool Calibration Manual](工具手标定手册.md)

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-15 | Initial version | Luoy-i |

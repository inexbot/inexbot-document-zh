---
title: "User Coordinate Calibration Manual"
description: "Introduces the user coordinate system calibration operation method to help users quickly complete coordinate system setup and debugging."
author: "iNexBot"
date: "2026-04-16"
tags: ["User Coordinate System", "Coordinate Calibration", "Workpiece Debugging", "Teach Pendant Settings"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# User Coordinate System

By default, the user coordinate system User0 coincides with the rectangular coordinate system. All new user coordinate systems are derived from transformations of the default user coordinate system.

Think about it: We know that the user coordinate system is a reference object during motion, but what role does it actually play in the actual debugging process?

![](assets/47ennyq_-czec33olfn7i.png)

![](assets/xdoad8_s-_gpmktxrovo1.png)

![](assets/jc2_thnqx7cu5jbvtisbb.png)

Inference: As can be seen from the figures, if the default user coordinate system User 0 or the rectangular coordinate system is used, it will be very difficult to debug each workpiece position. However, if there is a coordinate system whose two directions happen to be parallel to the worktable surface, it will be much more convenient.

## The Role of the User Coordinate System

1.  Determine the reference coordinate system.

2.  Determine the direction of motion on the worktable, making debugging easier.

## Characteristics of the User Coordinate System

A new user coordinate system is derived from a transformation of the default user coordinate system User 0. The position and orientation of the new user coordinate system do not change relative to space.

## User Coordinate Parameters

Click Settings - User Coordinate Calibration to enter the user coordinate calibration screen, as shown below:

![](assets/ecnxcs1tvpbuzufrllubn.png)

User coordinate parameters:

  -------- --------------------------------------------- --------------------
     Axis                         Offset                              Unit

     X      Offset of the user coordinate origin relative to the robot base origin in the X-axis direction        Millimeter (mm)

     Y      Offset of the user coordinate origin relative to the robot base origin in the Y-axis direction        Millimeter (mm)

     Z      Offset of the user coordinate origin relative to the robot base origin in the Z-axis direction        Millimeter (mm)

     A       Rotation angle of the user coordinate system about the X-axis relative to the rectangular coordinate system      Degree/Radian (°/rad)

     B       Rotation angle of the user coordinate system about the Y-axis relative to the rectangular coordinate system      Degree/Radian (°/rad)

     C       Rotation angle of the user coordinate system about the Z-axis relative to the rectangular coordinate system      Degree/Radian (°/rad)
  -------- --------------------------------------------- --------------------

## User Coordinate System Calibration

Click the [User Calibration] button at the bottom of the "User Coordinate Calibration" screen to enter the "User Calibration" screen, as shown:

![](assets/8ktf5dfn7v3b7ixuxmxuv.png)

Calibration steps:

1.  Move the robot end to the desired user coordinate system origin position, then click the "Calibrate Origin" button.

2.  Move the robot any distance from the user coordinate system origin toward the positive X-axis direction of the desired user coordinate system, then click the "Calibrate X-Axis" button.

3.  Move the robot any distance from the user coordinate system origin toward the positive Y-axis direction of the desired user coordinate system, then click the "Calibrate Y-Axis" button.

[Calculate] After the three-point calibration is complete, click Calculate. Once a success message is shown, the user coordinate system calibration is complete.

[Return] Return to the previous screen.

[Modify] Modify the calibrated points. After modification, click [Save], then click Calculate. The user coordinate system is updated.

# QA

**Q: What is a user coordinate system?**

A: A user coordinate system is a coordinate system derived from the transformation of the default user coordinate system User0. It is used to determine the reference coordinate system and the direction of motion on the worktable, making debugging easier.

**Q: What is the role of the user coordinate system?**

A: 1. Determine the reference coordinate system; 2. Determine the direction of motion on the worktable, making debugging easier.

**Q: What are the characteristics of the user coordinate system?**

A: A new user coordinate system is derived from the transformation of the default user coordinate system User0, and its position and orientation do not change relative to space.

**Q: What are the steps for user coordinate system calibration?**

A: 1. Move the robot end to the desired user coordinate system origin position, then click the "Calibrate Origin" button; 2. Move the robot any distance toward the positive X-axis direction of the desired user coordinate system, then click the "Calibrate X-Axis" button; 3. Move the robot any distance toward the positive Y-axis direction of the desired user coordinate system, then click the "Calibrate Y-Axis" button; finally click Calculate.

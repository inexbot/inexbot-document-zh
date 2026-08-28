---
title: "Trough-Type Robot Manual"
description: "Operation guide and precautions for the four-axis trough-type robot, covering motion control, center marking and exception handling."
author: "iNexBot"
date: "2026-04-16"
tags: ["Robot Operation", "Four-Axis Control", "Rectangular Coordinates", "Center Marking", "Trajectory Offset"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---


## 1. Basic Robot Characteristics

### 1.1 Configuration Description
> **Summary**: Although the trough-type robot is a four-axis model, it has special features in its configuration design.

- **Model classification**: Four-axis robot
- **Configuration characteristics**: 
  - It cannot maintain the orientation angle U when moving in XY
  - Changes in U during XY motion are normal
- **Operation limitation**: There is no jog-U button in rectangular coordinates

---

## 2. Motion Control Core Rules

### 2.1 Basic Requirements for XYZ Motion
> **Summary**: XYZ motion can only be solved properly at a specific center position.

- **Core condition**: When the robot needs to move in XYZ, the three axes must be positioned directly above the center
- **Operation requirement**: The center position must be marked during actual operation
- **Abnormal situations**: 
  - If the center condition is not met, it will cause a solving exception
  - The system will report a joint speed limit exceeded error

### 2.2 Center Marking Mechanism
> **Summary**: Since when the three axes are directly above the center, the position of axis 1 (sliding axis) is not necessarily 0, a "Mark Center" function was added to the DH parameter screen.

---

## 3. Center Marking Procedures

### 3.1 Two Situations for Marking the Center

#### Situation 1: When marking the center, all joints are at the zero position

**Operation steps:**
1. The robot is at the zero position
2. Click "Mark Center" on the DH parameter screen
3. XYZ motion can then be performed normally

**Operation rules:**
- **Normal operation**: If joint 1 or joint 2 is not jogged while jogging the robot, the robot will not deviate from the center, and no return-to-center operation is required
- **Abnormal situation**: Jogging joint 1 or joint 2 while jogging the robot will cause the robot to deviate from the center, making jogging in rectangular coordinates impossible

**Return-to-center operation:**
- Open the Monitor - Shortcut Keys screen
- Click "Return to Safe Point"
- The XYZ coordinates remain unchanged before and after the robot returns to the safe point
- The three axes return to the center position

#### Situation 2: When marking the center, axis 1 is not at the zero position, and the other axes are at the zero position

**Operation rules:**
- **Normal operation**: If joint 1 or joint 2 is not jogged while jogging the robot, the robot will not deviate from the center, and no return-to-center operation is required
- **Abnormal situation**: Jogging joint 1 or joint 2 while jogging the robot will cause the robot to deviate from the center, making jogging in rectangular coordinates impossible

**Return-to-center operation:**
- Open the Monitor - Shortcut Keys screen
- Click "Return to Safe Point"
- The XYZ coordinates remain unchanged before and after the robot returns to the safe point
- The three axes return to the center position

### 3.2 Job File Operation Precautions
> **Summary**: Key precautions when inserting points.

- **Important reminder**: Do not jog axes 1 and 2 in joint coordinates when inserting points
- **Consequence**: Doing so will cause the robot to deviate from the center, and an error will be reported when running points created in rectangular coordinates

---

## 4. DH Parameter Settings

### 4.1 Lead Parameter Definitions
> **Summary**: The meaning of the key lead parameters in the DH parameters.

- **Sliding electric cylinder lead**: Refers to the lead of axis 1
- **Lifting electric cylinder lead**: Refers to the electric cylinder lead of axis 2

### 4.2 Units and Display Conventions
- **Axes involved**: The limits, current positions, and jog position screen speeds of axes 1 and 2
- **Display unit**: Uniformly displayed in mm

---

## 5. Trajectory Offset Limitations

### 5.1 Axis Offset Limitations
> **Summary**: Limiting conditions when inserting a trajectory offset instruction in a job file.

- **Offset limitation**: If a trajectory offset instruction is inserted in the job file, only the Z axis can have an offset value
- **Error consequence**: If offset values are set for other axes, the offset position will be incorrect
- **Operation suggestion**: Strictly follow the rule that only the Z axis performs trajectory offset

---

## Q&A

**Q: Why does the orientation angle U change when the trough-type robot moves in XY?**

A: This is normal. Although the trough-type robot is a four-axis model, its configuration cannot maintain the orientation angle U when moving in XY, so changes in U during XY motion are normal.

**Q: When is it necessary to mark the center? How is it done?**

A: The center must be marked when XYZ motion is required. The operation steps are: ensure the three axes are directly above the center, then click "Mark Center" on the DH parameter screen. The center can be marked when all joints are at the zero position or when axis 1 is not at the zero position.

**Q: If the robot deviates from the center, how do you return to the center?**

A: Open the Monitor - Shortcut Keys screen and click "Return to Safe Point". The XYZ coordinates remain unchanged before and after the robot returns to the safe point, and the three axes return to the center position.

**Q: Under what circumstances will the robot deviate from the center?**

A: Jogging joint 1 or joint 2 while jogging the robot will cause the robot to deviate from the center. At this time, jogging in rectangular coordinates is impossible, and a return-to-center operation is required.

**Q: What should be noted when inserting points?**

A: Do not jog axes 1 and 2 in joint coordinates. Doing so will cause the robot to deviate from the center, and an error will be reported when running points created in rectangular coordinates.

**Q: What do the sliding electric cylinder lead and the lifting electric cylinder lead in the DH parameters refer to?**

A: The sliding electric cylinder lead refers to the lead of axis 1, and the lifting electric cylinder lead refers to the electric cylinder lead of axis 2.

**Q: What unit is used to display the limits, current positions, and jog position screen speeds of axes 1 and 2?**

A: They are uniformly displayed in mm.

**Q: What is the limitation when inserting a trajectory offset instruction in a job file?**

A: Only the Z axis can have an offset value. If offset values are set for other axes, the offset position will be incorrect.

**Q: Why is there no jog-U button in rectangular coordinates for the trough-type robot?**

A: Because this model cannot maintain the orientation angle U when moving in XY, changes in U are normal. Therefore, no jog-U button is provided in rectangular coordinates.

**Q: Is it necessary to mark the center if XYZ motion is not performed?**

A: According to the documentation, the center must be marked only when XYZ motion is required, ensuring the three axes are directly above the center for proper solving. Otherwise, a joint speed limit exceeded error will be reported.

---

## 7. Operation Safety Notes

### 7.1 Key Operation Checklist
- [ ] Before XYZ motion, confirm the three axes are directly above the center
- [ ] Center marking completed
- [ ] Avoid jogging axes 1 and 2 in joint coordinates when inserting points
- [ ] Set trajectory offset on the Z axis only
- [ ] Pay attention to the motion state of joints 1 and 2 during jogging

### 7.2 Exception Handling Flow
1. **Joint speed limit exceeded error** → Check whether the three axes are directly above the center → Re-mark the center
2. **Rectangular-coordinate jog cannot be executed** → Check whether the robot has deviated from the center → Perform the return-to-center operation
3. **Incorrect offset position** → Check whether an offset was set on a non-Z axis → Correct the trajectory offset parameters

---

## 8. Technical Support Suggestions

### 8.1 Training Points
- Understand the special configuration of the trough-type robot
- Master center marking and return-to-center operations
- Clarify the difference between joint coordinates and rectangular coordinates
- Understand the limiting conditions of trajectory offset

### 8.2 Troubleshooting Checklist
1. Confirm the model configuration and DH parameter settings
2. Check whether the center marking is correct
3. Verify the point insertion method in the job file
4. Check the trajectory offset parameter settings
5. Review the joint speed limit settings

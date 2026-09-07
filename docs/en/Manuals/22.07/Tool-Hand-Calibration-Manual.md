---
title: "Tool Hand Calibration Manual"
description: "Robot tool coordinate system calibration and TCP calibration guide, applicable for tool changes, TCP setting, and zero-point calibration."
author: "iNexBot"
date: "2026-04-16"
tags: ["Tool Hand Calibration", "TCP Calibration", "Tool Coordinate System", "Robot Calibration", "Zero-Point Calibration"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---


# 1 Tool Coordinate System Definition

## > 1.1 Flange Coordinate System

**Definition**: The center of the flange is the origin of the default tool coordinate system

**Coordinate Axis Directions**:
- The direction from the flange center to the flange positioning hole is the +X direction
- Perpendicular to the flange, pointing outward, is the +Z direction
- The Y direction can be determined by the right-hand rule

![Flange](assets-ToolHand/image3.png)

**Coordinate System Relationship**: The new tool coordinate system is derived from changes relative to the default tool coordinate system

![Coordinate System Relationship](assets-ToolHand/image4.jpeg)


## > 1.2 TCP (Tool Center Point)

**Definition**: TCP (TOOL CENTER POINT) is the tool center point

**Application Position**: TCP is generally set at the center of the gripper, the tip of the welding wire, the front end of the spot welding stationary arm, etc.

**Trajectory and Speed**:
- Robot trajectory: refers to the trajectory of the TCP point
- Robot speed: refers to the speed of the TCP point

**Industrial Robot TCP Definition**: Industrial robots generally have a pre-defined TCP. The XY plane of the TCP is bound to the flange plane of the robot's sixth axis, and the origin of the TCP coincides with the center of the flange. Obviously, the TCP is at the center of the flange.

**Terminology Across Manufacturers**:
- ABB robots: TCP is called tool0
- REIS robots: TCP is called _tnull

**Practical Application**: Although the default TCP can be used directly, in actual use, such as welding, users typically define the TCP point to the tip of the welding wire (in fact, the pose of the welding gun tool coordinate system relative to the tool0 coordinate system). Then the positions recorded in the program are the positions of the welding wire tip, and the recorded orientations are the orientations of the welding gun rotating around the welding wire tip.

![](assets-ToolHand/image5.jpeg)

---

# 2 Tool Coordinate System Characteristics

## > 2.1 Coordinate System Transformation Relationship

**Basic Characteristics**: The new tool coordinate system is derived from changes relative to the default tool coordinate system. The position and orientation of the new tool coordinate system always maintain an absolute position and orientation relationship with the flange, but continuously change in space.

![](assets-ToolHand/image6.jpeg)

```
Flange Coordinate System (Default TCP)
    ↓
Tool Hand Transformation
    ↓
New Tool Coordinate System (TCP)
```

**Characteristic Description**:
- Fixed relative relationship with the flange
- Spatial position changes with robot motion
- Orientation relationship remains constant

## > 2.2 Tool Hand Calibration Application Scenarios

### 2.2.1 Scenarios Requiring Tool Hand Parameters

**Judgment Criteria**: When rotation around X, Y, Z axes is needed

**Typical Applications**:
- Welding processes (multi-direction welding)
- Assembly processes (multi-angle assembly)
- Gluing processes (complex path gluing)
- Polishing/grinding processes (multi-surface machining)



### 2.2.2 Scenarios Not Requiring Tool Hand Parameters

**Judgment Criteria**: When the robot itself only performs Z-axis orientation rotation, and the tool tip is located on the extension line of the robot's 6th axis flange center

**Typical Applications**:
- Simple vertical handling
- Single-direction dispensing
- Vertical drilling
- Simple loading/unloading

**Advantage**: In this case, tool hand parameters can be omitted, simplifying configuration

### 2.2.3 Tool Hand Calibration Definition

**Definition**: Tool hand calibration is the process of aligning the tool hand tip to a fixed point in space, selecting a certain number of points to calculate tool dimensions and orientation.

**Calibration Principle**:
1. Align the tool hand tip to a fixed point in space
2. Select multiple calibration points with different orientations
3. Calculate tool dimensions and orientation parameters through computation

## > 2.3 Calibration Condition Requirements

### 2.3.1 Robot Type Requirements

**Applicable Types**:
- Six-axis serial multi-joint robots
- Six-axis collaborative robots

**Non-applicable Types**: Not applicable to robots with fewer than 6 axes

### 2.3.2 Tool Feature Requirements

**Basic Requirements**: The tool tip must have a feature that can align with the calibration cone: a pointed tool hand

**Example Tools**:
- Tip welding gun
- Pen-shaped tool
- Tip gripper
- Probe-type tool

### 2.3.3 Special Case Handling

**Tool Without Tip**:
- For tools without a tip that cannot align with the calibration cone
- Use the gripper to hold a specific pointed object
- Calibration can still be performed
- Calibration accuracy depends on:
  - How the pointed object is placed
  - Whether the robot body parameters are accurate

**Operation Recommendations**:
- Place the pointed object as close to the gripper center as possible
- Ensure stable clamping with no wobble
- Verify that calibration accuracy meets requirements

![](assets-ToolHand/image7.png)

---

# 3 Calibration Method Selection

## > 3.1 Calibration Method Comparison

| Calibration Method | Function | Applicable Conditions | Accuracy Characteristics |
| :--- | :--- | :--- | :--- |
| 6-Point Calibration | Calibrate tool hand dimensions<br/>Calibrate tool hand tip orientation | When robot parameters are accurate: calibrate tool hand dimensions + orientation | Better C-axis rotation accuracy |
| 7-Point Calibration | Calibrate tool hand dimensions<br/>Calibrate tool hand tip orientation | When robot parameters are accurate: calibrate tool hand dimensions + orientation | Better A, B-axis rotation accuracy |
| 12-Point Calibration | Correct zero point for axes 2, 3, 4, 5<br/>Calibrate tool hand dimensions | Calibrate zero point + calibrate tool dimensions | Calibrate zero point + calibrate tool dimensions |
| 15-Point Calibration | Correct zero point for axes 2, 3, 4, 5<br/>Calibrate tool hand dimensions<br/>Calibrate tool hand tip orientation | Calibrate zero point + calibrate tool dimensions + calibrate tool orientation | Comprehensive calibration solution |
| 20-Point Calibration | Correct zero point for axes 2, 3, 4, 5<br/>Calibrate tool hand dimensions | First use calibration cone to calibrate 20 points for zero point, then use tool hand to calibrate 6 or 7 points | Most accurate zero-point calibration |

## > 3.2 Typical Application Scenario Recommendations

### Scenario 1: Robot has undergone laser calibration + uses welding gun

**Recommended Method**: Use 6-point calibration for the tool hand

**Operation Steps**:
1. Perform 6-point calibration
2. Verify robot calibration results after completion

**Applicable Reason**: Robot parameters are already accurate, 6-point calibration meets accuracy requirements

### Scenario 2: Robot has not undergone laser calibration + uses welding gun

**Recommended Method**: Use 12-point calibration for the tool hand

**Operation Steps**:
1. Perform 12-point calibration
2. Verify robot calibration results after completion

**Applicable Reason**: Need to calibrate both zero point and tool parameters simultaneously

### Scenario 3: Calibrating palletizing gripper

**Recommended Method**: Preferably fill in tool dimensions directly; use 6-point calibration only when dimensions are unknown

**Preparation**:
1. Prepare a pointed object that can be gripped by the gripper
2. Place the object as close to the gripper center as possible

**Operation Steps**:
1. Use 6-point calibration for the tool hand
2. Verify robot calibration results after completion

**Advantage**: Directly filling in dimensions is faster and more accurate; 6-point calibration serves as an alternative

### Scenario 4: Robot zero point lost, zero point position calibrated by alignment holes has deviation

**Recommended Method**: Use 20-point calibration

**Preparation**:
1. Prepare calibration tool
2. The tool tip should be as close as possible to the extension line of the 6th axis flange center
3. Tool dimensions should be small

**Operation Steps**:
1. Use 20-point calibration to calibrate zero point
2. After 20-point calibration, switch to the actual tool hand to be used
3. Perform 6-point calibration
4. Verify robot calibration results after completion

**Advantage**: 20-point calibration can precisely calibrate the zero point

### Scenario 5: After 6-point calibration, A, B-axis rotation error is large and cannot meet usage requirements

**Recommended Method**: Switch to 7-point calibration

**Operation Steps**:
1. Perform 7-point calibration again
2. Verify robot calibration results after completion

**Applicable Reason**: 7-point calibration has higher accuracy for A, B-axis rotation

### > 3.3 Calibration Accuracy Verification Method

**Verification Steps**:

1. **Switch to Teach Mode**

2. **Align the calibrated tool hand tip to the calibration cone**
   - Ensure the tip accurately aligns with the calibration cone tip

3. **Select the calibrated tool hand parameters**

4. **Switch Coordinate System**
   - Switch the jog coordinate system to Cartesian coordinate system

5. **Rotation Test**
   - Jog A, B, C axes
   - Observe whether the tip is aligned
   - Measure the deviation in mm

6. **Accuracy Judgment**
   - If the deviation is within the allowable range, calibration is successful
   - If the deviation exceeds the allowable range, recalibration is needed

**Allowable Deviation Range**: Determined according to actual process requirements, generally recommended to be less than 1mm

### > 3.4 How to Fill in Gripper Dimensions

### 3.4.1 Preparation

1. Prepare the gripper's length, width, and height parameters
2. Measure or obtain the offset of the gripper center relative to the flange center

### 3.4.2 Filling Method

| Parameter | Filling Content | Notes |
| :--- | :--- | :--- |
| X-axis direction offset | Offset of the gripper tip on the X-axis | If the tip is in the positive direction of the Cartesian X-axis, enter a positive value |
| Y-axis direction offset | Offset of the gripper tip on the Y-axis | If the tip is in the positive direction of the Cartesian Y-axis, enter a negative value |
| Z-axis direction offset | Offset of the gripper tip on the Z-axis | If the tip is in the positive direction of the Cartesian Z-axis, enter a negative value |

### 3.4.3 Filling Rules

**X-axis Offset**:
- Positive direction offset: enter positive value
- Negative direction offset: enter negative value

**Y-axis Offset**:
- Positive direction offset: enter negative value (Note: opposite to X-axis)
- Negative direction offset: enter positive value

**Z-axis Offset**:
- Positive direction offset: enter negative value (Note: upward is positive)
- Negative direction offset: enter positive value

### 3.4.4 Verification Steps

1. After saving, verify the tool hand rotation accuracy for A, B, C axes
2. Perform accuracy verification according to the method in Section 3.3
3. Ensure it meets process requirements

## > 3.5 Detailed Calibration Process

### 3.5.1 6-Point Calibration

#### 3.5.1.1 Enter Calibration Interface


![](assets-ToolHand/image8.jpeg)

**Path**: Settings - Tool Hand Calibration Interface - 6-Point Calibration

**Interface Description**:

| Item | Description |
| :--- | :--- |
| Tool Number | Current calibration tool number |
| Calibration Method | 6-point calibration |
| Position | TC1-TC6 six calibration points |
| Tool Status | Pending calibration / Calibrated |
| Operation | Calibrate / Cancel calibration |

#### 3.5.1.2 Calibration Steps

**First Point**: Robot 5th axis vertically downward

![](assets-ToolHand/image9.png)

```
Pose: J5 vertically downward
Requirement: Tool end points vertically downward
```

**Second Point**: Robot rotates C-axis 180° from the first point

![](assets-ToolHand/image10.png)

```
Operation: From the first point, rotate C-axis 180°
Requirement: Keep tool end position unchanged
```

**Third Point**: Robot B-axis angle at 35° from the first point

![](assets-ToolHand/image11.png)

```
Operation: From the first point, rotate B-axis to 35°
Requirement: Keep tool end position unchanged
```

**Fourth Point**: Robot returns to zero point, then tool hand tip is vertical

![](assets-ToolHand/image12.jpeg)

```
Operation:
1. Robot returns to zero point
2. Adjust pose to make tool hand tip vertical
Requirement: Tool end points vertically downward
```

**Fifth Point**: Robot moves X- from the fourth point

![](assets-ToolHand/image13.jpeg)

```
Operation: From the fourth point, move in negative X-axis direction
Requirement: Move a certain distance, keep pose unchanged
```

**Sixth Point**: Robot moves Y+ from the fifth point

![](assets-ToolHand/image14.png)

```
Operation: From the fifth point, move in positive Y-axis direction
Requirement: Move a certain distance, keep pose unchanged
```

#### 3.5.1.3 Complete Calibration

**Operation Steps**:

1. Select any calibrated point

2. Click [Move to This Point] to check if calibration is accurate

3. Click [Calculate] button, calibration is successful

4. Click the [Back] button at the bottom to return to the "Tool Hand Calibration" interface

5. Rotating around A, B, C can verify whether the calibrated points are correct

**Notes**:
- If unsatisfied with a calibrated point during the process, click the [Cancel Calibration] button for that row
- After canceling, recalibrate that point

### 3.5.2 7-Point Calibration

#### 3.5.2.1 Enter Calibration Interface

![](assets-ToolHand/image15.png)

**Path**: Click the [7-Point Calibration] button at the bottom

**Interface Description**:

| Item | Description |
| :--- | :--- |
| Tool Number | Current calibration tool number |
| Calibration Method | 7-point calibration |
| Position | TC1-TC7 seven calibration points |
| Tool Status | Pending calibration / Calibrated |
| Operation | Calibrate / Cancel calibration |

#### 3.5.2.2 Pre-calibration Preparation

**Condition**: If detailed tool parameters are not available, TCP calibration can be performed to automatically calculate tool dimension parameters

**Preparation**:
1. Prepare a reference point (pen tip or fixed point)
2. Ensure the reference point is fixed and immovable

#### 3.5.2.3 Calibration Steps

**TC1 Calibration**:
- Align the tool end vertically and directly facing the reference point
- Click the [Calibrate] button corresponding to "TC1" on the interface

![](assets-ToolHand/image16.jpeg)

**TC2 Calibration**:
- Switch the robot to a different pose
- Align the end directly facing the reference point
- Click the [Calibrate] button for that row

![](assets-ToolHand/image17.jpeg)

**TC3 Calibration**:
- Switch the robot to a different pose
- Align the end directly facing the reference point
- Click the [Calibrate] button for that row

![](assets-ToolHand/image18.jpeg)

**TC4 Calibration**:
- Switch the robot to a different pose
- Align the end directly facing the reference point
- Click the [Calibrate] button for that row

![](assets-ToolHand/image19.jpeg)

**TC5 Calibration**:
- Align the tool end vertically and directly facing the reference point (same as TC1)
- Click the [Calibrate] button for that row

![](assets-ToolHand/image20.jpeg)

**TC6 Calibration**:
- From TC5
- Move any distance in the negative X-axis direction of the Cartesian coordinate system
- Click the [Calibrate] button for that row

![](assets-ToolHand/image21.jpeg)

**TC7 Calibration**:
- From TC6
- Move any distance in the positive Y-axis direction of the Cartesian coordinate system
- Click the [Calibrate] button for that row

![](assets-ToolHand/image22.jpeg)

![](assets-ToolHand/image23.jpeg)

#### 3.5.2.4 Complete Calibration

**Operation Steps**:

1. Click [Move to This Point] to check if calibration is accurate

2. Click [Calculate] button, calibration is successful

3. If unsatisfied with a point after calibration, click the [Cancel Calibration] button for that row

4. Click the [Demo] button at the bottom to open the "Demo" interface, explaining how to perform tool calibration

5. Click the [Back] button at the bottom to return to the "Tool Hand Calibration" interface

### 3.5.3 12/15-Point Calibration

#### 3.5.3.1 Calibration Method Description

![](assets-ToolHand/image24.jpeg)

**12-point/15-point/20-point calibration**: Share the same calibration interface

**12-point calibration**: 15-point calibration without the last three points (13-15), calibration results only show XYZ axis direction offsets of the tool hand, without ABC rotation values

**15-point calibration**: Calibrate the first 15 points, including zero-point calibration + tool dimension calibration

##### 3.5.3.2 Enter Calibration Interface

**Path**: Click the [20-Point Calibration] button at the bottom of the "Tool Hand Calibration" interface

##### 3.5.3.3 Calibration Preparation

**Preparation**: Find a reference point (calibration cone tip as reference point), and ensure this reference point is fixed

**Calibration Method**: Start inserting position points, click [Mark This Point] for each point inserted, insert fifteen points

##### 3.5.3.4 Calibration Steps

**First Point**: Robot returns to zero point, align the robot tip with the calibration cone tip through Cartesian coordinates, calibrate the first point

![](assets-ToolHand/image25.png)

**Second Point**: From the first point, rotate C by 180 degrees through Cartesian coordinates; align the tip to calibrate the second point



**Third Point**: Robot returns to zero point, align the robot tip with the calibration cone tip through Cartesian coordinates; calibrate the third point (same as the first point)



**Fourth Point**: From the third point, perform B- through Cartesian coordinates, angle between 30°-60°, align the tip to calibrate the fourth point

![](assets-ToolHand/image26.png)

**Fifth Point**: From the fourth point, perform B+ through Cartesian coordinates, J5>-90°, align the robot tip with the calibration cone tip, calibrate the fifth point

![](assets-ToolHand/image27.png)

**Sixth Point**: Select the first point and move the robot to the first point. From the first point, perform B+ through Cartesian coordinates, J5>-90°, align the tip to calibrate the sixth point

![](assets-ToolHand/image28.jpeg)

**Seventh Point**: From the first point, perform B- through Cartesian coordinates, J5>-90°, align the tip to calibrate the seventh point

![](assets-ToolHand/image29.jpeg)

**Eighth Point**: From the seventh point, perform A+ through Cartesian coordinates, rotate 90°, J5>-90°, align the tip to calibrate the eighth point

![](assets-ToolHand/image30.jpeg)

**Ninth Point**: From the seventh point, perform A- through Cartesian coordinates, rotate 90°, J5>-90°, align the tip to calibrate the ninth point

![](assets-ToolHand/image31.jpeg)

**Tenth Point**: Robot returns to the first point, jog the fifth axis through joint coordinates to make the fifth axis point upward, J5<-90°, align the tip, calibrate the tenth point

![](assets-ToolHand/image32.jpeg)

**Eleventh Point**: From the tenth point, perform A+ through Cartesian coordinates, rotate 90°, J5<-90°, align the tip to calibrate the eleventh point

![](assets-ToolHand/image33.jpeg)

**Twelfth Point**: From the tenth point, perform A- through Cartesian coordinates, rotate 90°, J5<-90°, align the tip to calibrate the twelfth point

![](assets-ToolHand/image34.jpeg)

**Thirteenth Point** (15-point calibration only): Robot returns to zero position, adjust robot pose to make the end-effector tool tip point vertically downward, align the calibration tip with the calibration cone, calibrate the thirteenth point



**Fourteenth Point** (15-point calibration only): From the thirteenth point, perform X- through Cartesian coordinates, robot moves a certain distance, directly click to calibrate the fourteenth point

**Fifteenth Point** (15-point calibration only): From the fourteenth point, perform Y+ through Cartesian coordinates, robot moves a certain distance, directly click to calibrate the fifteenth point

##### 3.5.3.5 Complete Calibration

**Operation Steps**:

1. After completing the marking, click [Calculate]

2. Button function description:

| Button | Function |
| :--- | :--- |
| Cancel Calibration | If unsatisfied with a point after calibration, cancel and recalibrate |
| Move to This Point | Click after each calibration point, the robot will move to that point |
| Mark Result Position as Zero Point | Set the calibrated compensated position as the current robot zero point |
| Clear All Calibration Points | Calibration points are saved to the controller; calibration results are only cleared when clicking Cancel Calibration, Clear All Calibration Points, or entering the calibration interface after switching tool hands |

3. Click the [Back] button at the bottom to return to the "Tool Hand Calibration" interface

##### 3.5.3.6 Notes

| Note | Description |
| :--- | :--- |
| Pose Selection | For the pose of each point, try to take poses in any direction. If the pose rotates in a certain direction, accuracy may sometimes be inaccurate |
| Reference Point Fixed | Keep the reference point fixed during calibration, otherwise calibration error increases |

#### 3.5.4 20-Point Calibration

##### 3.5.4.1 Calibration Method Description

**20-point calibration**: 12-point/15-point/20-point calibration share the same calibration interface; calibrating all 20 points is the 20-point calibration method

##### 3.5.4.2 Calibration Preparation

**Preparation**: Find a reference point (pen tip as reference point), and ensure this reference point is fixed

##### 3.5.4.3 Calibration Steps

**Calibration Method**: Start inserting position points, click [Mark This Point] for each point inserted, insert 20 points; the greater the pose difference between each point, the better.

**Manufacturer's Recommended Calibration Steps**:

1. First point: tool hand pose vertically downward
2. Second point: move A+ axis
3. Third point: move A+
4. Fourth point: move A+
5. Fifth point: move A-
6. Sixth point: move A-
7. Seventh point: move A-
8. Eighth point: move B+
9. Ninth point: move B+
10. Tenth point: move B+
11. Eleventh point: move B-
12. Twelfth point: move B-
13. Thirteenth point: move B-
14. Fourteenth point: mainly move C-axis
15. Fifteenth point: mainly move C-axis
16. Remaining points: mainly move C-axis in a star-shaped arrangement for calibration

**After completing 20-point marking, click [Calculate]**

##### 3.5.4.4 Button Function Description

| Button | Function |
| :--- | :--- |
| Cancel Calibration | If unsatisfied with a point after calibration, cancel and recalibrate |
| Move to This Point | Click after each calibration point, the robot will move to that point |
| Mark Result Position as Zero Point | Set the calibrated compensated position as the current robot zero point |
| Clear All Calibration Points | Calibration points are saved to the controller; calibration results are only cleared when clicking Cancel Calibration, Clear All Calibration Points, or entering the calibration interface after switching tool hands |
| 20-Point No Zero Calibration | When enabled, the 20 points only calibrate dimensions + orientation without zero point; Move to Calculation Result Position is always grayed out, and Mark Result Position as Zero Point becomes "Save Calculation Result" |

**20-Point No Zero Calibration Function Description**:

- **Enabled State**:
  - Calibration method: first point tool hand perpendicular to calibration rod
  - Last two points calibrated as X- and Y+
  - Other points calibrated according to the original 20-point calibration method
  - Only calibrate dimensions + orientation
  - Move to Calculation Result Position is always grayed out
  - Mark Result Position as Zero Point becomes "Save Calculation Result"

- **Disabled State**:
  - Mark 20 points according to the original 20-point calibration method
  - Can mark result position as zero point

##### 3.5.4.5 Notes

| Note | Description |
| :--- | :--- |
| Pose Selection | For the pose of each point, try to take poses in any direction. If the pose rotates in a certain direction, accuracy may sometimes be inaccurate |
| Reference Point Fixed | Keep the reference point fixed during calibration, otherwise calibration error increases |

---

## 4. Common Calibration Issues

### 4.1 Calibration Accuracy Issues

| Problem | Possible Cause | Solution |
| :--- | :--- | :--- |
| Large A, B-axis rotation error | Using 6-point calibration | Switch to 7-point calibration |
| Large C-axis rotation error | Using 7-point calibration | Switch to 6-point calibration |
| Deviation after calibration | Reference point moved | Ensure reference point is fixed |
| Unstable accuracy | Inaccurate robot parameters | Perform zero-point calibration |

### 4.2 Calibration Condition Issues

| Problem | Possible Cause | Solution |
| :--- | :--- | :--- |
| Cannot align with calibration cone | Tool has no tip | Use gripper to hold a pointed object |
| Calibration points inaccurate | Small pose differences | Increase pose differences |
| Calculation failed | Insufficient calibration points | Add more calibration points |

### 4.3 Operation Notes

1. **Pre-calibration Check**: Confirm robot type and tool features meet requirements

2. **Reference Point Fixed**: Strictly prohibit moving the reference point during calibration

3. **Pose Diversity**: Try to take poses in any direction for each point, avoid single-direction rotation

4. **Accuracy Verification**: Always perform accuracy verification after calibration

5. **Data Backup**: Calibration results are saved to the controller, remember to back up

---

## 5. Q&A

**Q: What is tool hand calibration?**

A: Tool hand calibration is the process of aligning the tool hand tip to a fixed point in space, selecting a certain number of points to calculate tool dimensions and orientation. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: When do I need to use tool hand parameters?**

A: When rotation around X, Y, Z axes is needed, tool hand calibration is required. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: When do I not need to use tool hand parameters?**

A: When the robot itself only performs Z-axis orientation rotation, and the tool tip is located on the extension line of the robot's 6th axis flange center; in this case, tool hand parameters can be omitted. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What conditions must be met for tool hand calibration?**

A: Tool hand calibration requires: 1. Robot type: six-axis serial multi-joint or six-axis collaborative; 2. Tool tip has a feature that can align with the calibration cone: a pointed tool hand. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate if the tool has no tip?**

A: For tools without a tip that cannot align with the calibration cone, use the gripper to hold a specific pointed object. Calibration can still be performed, and accuracy depends on how the pointed object is placed and whether the robot body parameters are accurate. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What are the characteristics of 6-point calibration?**

A: 6-point calibration can calibrate tool hand dimensions and tool hand tip orientation. When robot parameters are accurate, the calibration result has better C-axis rotation accuracy. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What are the characteristics of 7-point calibration?**

A: 7-point calibration can calibrate tool hand dimensions and tool hand tip orientation. When robot parameters are accurate, the calibration result has better A, B-axis rotation accuracy. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is the function of 12-point calibration?**

A: 12-point calibration can correct the zero point for axes 2, 3, 4, 5 and calibrate tool hand dimensions, achieving zero-point calibration + tool dimension calibration. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is the function of 15-point calibration?**

A: 15-point calibration can correct the zero point for axes 2, 3, 4, 5, calibrate tool hand dimensions, and calibrate tool hand tip orientation, achieving zero-point calibration + tool dimension calibration + tool orientation calibration. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is the function of 20-point calibration?**

A: 20-point calibration can correct the zero point for axes 2, 3, 4, 5 and calibrate tool hand dimensions. First use the calibration cone to calibrate 20 points for zero point, then use tool hand to calibrate 6 or 7 points. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to verify calibration accuracy?**

A: In teach mode, align the calibrated tool hand tip to the calibration cone. With the tip aligned, select the calibrated tool hand parameters, switch the jog coordinate system to Cartesian, jog A, B, C axes, and observe whether the tip is aligned and how many mm it deviates. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to fill in the X-axis direction offset for gripper dimensions?**

A: Enter the gripper tip offset on the X-axis in "X-axis direction offset". Note: if the tip is in the positive direction of the Cartesian X-axis, enter a positive value. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to fill in the Y-axis direction offset for gripper dimensions?**

A: Enter the gripper tip offset on the Y-axis in "Y-axis direction offset". Note: if the tip is in the positive direction of the Cartesian Y-axis, enter a negative value. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to fill in the Z-axis direction offset for gripper dimensions?**

A: Enter the gripper tip offset on the Z-axis in "Z-axis direction offset". Note: if the tip is in the positive direction of the Cartesian Z-axis, enter a negative value. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the first point of 6-point calibration?**

A: First point of 6-point calibration: robot 5th axis vertically downward. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the second point of 6-point calibration?**

A: Second point of 6-point calibration: robot rotates C-axis 180° from the first point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the third point of 6-point calibration?**

A: Third point of 6-point calibration: robot B-axis angle at 35° from the first point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the fourth point of 6-point calibration?**

A: Fourth point of 6-point calibration: robot returns to zero point, then tool hand tip is vertical. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the fifth point of 6-point calibration?**

A: Fifth point of 6-point calibration: robot moves X- from the fourth point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the sixth point of 6-point calibration?**

A: Sixth point of 6-point calibration: robot moves Y+ from the fifth point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate TC1 for 7-point calibration?**

A: TC1 of 7-point calibration: align the tool end vertically and directly facing the reference point, click the [Calibrate] button corresponding to "TC1" on the interface. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate TC5 for 7-point calibration?**

A: TC5 of 7-point calibration: align the tool end vertically and directly facing the reference point (same as TC1), click the [Calibrate] button for that row. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate TC6 for 7-point calibration?**

A: TC6 of 7-point calibration: from TC5, move any distance in the negative X-axis direction of the Cartesian coordinate system, click the [Calibrate] button for that row. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate TC7 for 7-point calibration?**

A: TC7 of 7-point calibration: from TC6, move any distance in the positive Y-axis direction of the Cartesian coordinate system, click the [Calibrate] button for that row. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is the difference between 12-point and 15-point calibration?**

A: 12-point calibration is 15-point calibration without the last three points (13-15). The calibration results only show XYZ axis direction offsets of the tool hand, without ABC rotation values. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What are the manufacturer's recommended steps for 20-point calibration?**

A: Manufacturer's recommended calibration steps: first point tool hand pose vertically downward, second point move A+ axis, third point move A+, fourth point move A+, fifth point move A-, sixth point move A-, seventh point move A-, eighth point move B+, ninth point move B+, tenth point move B+, eleventh point move B-, twelfth point move B-, thirteenth point move B-, remaining points mainly move C-axis in a star-shaped arrangement. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to select the pose for each point during calibration?**

A: For the pose of each point, try to take poses in any direction. If the pose rotates in a certain direction, accuracy may sometimes be inaccurate. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What should I pay attention to regarding the reference point during calibration?**

A: Keep the reference point fixed during calibration, otherwise calibration error increases. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What method is recommended for calibrating palletizing grippers?**

A: For calibrating palletizing grippers, recommended: preferably fill in tool dimensions directly; use 6-point calibration only when dimensions are unknown. Prepare a pointed object that can be gripped, place it as close to the gripper center as possible. Use 6-point calibration for the tool hand. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What calibration method is recommended when the robot has undergone laser calibration and uses a welding gun?**

A: When the robot has undergone laser calibration and uses a welding gun, recommended: use 6-point calibration for the tool hand, verify robot calibration results after completion. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What calibration method is recommended when the robot has not undergone laser calibration and uses a welding gun?**

A: When the robot has not undergone laser calibration and uses a welding gun, recommended: use 12-point calibration for the tool hand, verify robot calibration results after completion. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What calibration method is recommended when the robot zero point is lost and the zero point position calibrated by alignment holes has deviation?**

A: When the robot zero point is lost and the zero point position calibrated by alignment holes has deviation, recommended: prepare a calibration tool with the tip as close as possible to the extension line of the 6th axis flange center, with small tool dimensions. Use 20-point calibration to calibrate the zero point. After 20-point calibration, switch to the actual tool hand and perform 6-point calibration. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What should I do if the A, B-axis rotation error is large after 6-point calibration and cannot meet usage requirements?**

A: If the A, B-axis rotation error is large after 6-point calibration and cannot meet usage requirements, recommended: switch to 7-point calibration. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is TCP?**

A: TCP (TOOL CENTER POINT) is the tool center point. Robot trajectory and speed refer to the trajectory and speed of the TCP point. TCP is generally set at the center of the gripper, the tip of the welding wire, the front end of the spot welding stationary arm, etc. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: Where is the default TCP?**

A: Industrial robots generally have a pre-defined TCP. The XY plane of the TCP is bound to the flange plane of the robot's sixth axis, and the origin of the TCP coincides with the center of the flange. Obviously, the TCP is at the center of the flange. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How do ABB robots and REIS robots refer to the default TCP?**

A: ABB robots call the TCP tool0, REIS robots call it _tnull. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What is the relationship between the new tool coordinate system and the flange?**

A: The new tool coordinate system is derived from changes relative to the default tool coordinate system. The position and orientation of the new tool coordinate system always maintain an absolute position and orientation relationship with the flange, but continuously change in space. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What interface do 12-point/15-point/20-point calibrations share?**

A: 12-point/15-point/20-point calibrations share the same calibration interface; calibrating the first 15 points is the 15-point calibration method. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What does the "Mark Result Position as Zero Point" button do?**

A: The "Mark Result Position as Zero Point" button sets the calibrated compensated position as the current robot zero point position. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What does the "Clear All Calibration Points" button do?**

A: The "Clear All Calibration Points" button: calibration points are saved to the controller; calibration results are only cleared when clicking Cancel Calibration, Clear All Calibration Points, or entering the calibration interface after switching tool hands. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: What does the "20-Point No Zero Calibration" button do?**

A: The "20-Point No Zero Calibration" button: when enabled, the 20 points only calibrate dimensions + orientation without zero point; Move to Calculation Result Position is always grayed out, and Mark Result Position as Zero Point becomes "Save Calculation Result". [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How is the X-axis direction of the flange coordinate system defined?**

A: The direction from the flange center to the flange positioning hole is the +X direction. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How is the Z-axis direction of the flange coordinate system defined?**

A: Perpendicular to the flange, pointing outward, is the +Z direction. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How is the Y-axis direction of the flange coordinate system defined?**

A: The Y direction can be determined by the right-hand rule. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the thirteenth point of 15-point calibration?**

A: Thirteenth point of 15-point calibration: robot returns to zero position, adjust robot pose to make the end-effector tool tip point vertically downward, align the calibration tip with the calibration cone, calibrate the thirteenth point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the fourteenth point of 15-point calibration?**

A: Fourteenth point of 15-point calibration: from the thirteenth point, perform X- through Cartesian coordinates, robot moves a certain distance, directly click to calibrate the fourteenth point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

**Q: How to calibrate the fifteenth point of 15-point calibration?**

A: Fifteenth point of 15-point calibration: from the fourteenth point, perform Y+ through Cartesian coordinates, robot moves a certain distance, directly click to calibrate the fifteenth point. [Source: 2207 Tool Hand Calibration Manual][User Uploaded File]

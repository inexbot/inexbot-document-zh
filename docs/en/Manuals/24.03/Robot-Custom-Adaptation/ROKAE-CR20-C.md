---
title: "ROKAE CR20-C Custom Adaptation"
description: "Custom adaptation instructions for ROKAE CR20-C robot, including parameter settings, debugging methods, and precautions"
author: "tongmengyuan123"
date: "2026-04-07"
tags: ["INEXBOT", "ROKAE CR20-C", "Custom Adaptation"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# ROKAE CR20-C Custom Adaptation

## 1 Robot Overview

The ROKAE CR20-C is a six-axis collaborative robot with high precision, high flexibility, and safety, suitable for various industrial scenarios.

## 2 Adaptation Parameters

### 2.1 Axis Parameters

| Axis | Type | Range | Speed | Acceleration |
| :--- | :--- | :--- | :--- | :--- |
| Axis 1 | Rotation | -180°~180° | 180°/s | 360°/s² |
| Axis 2 | Rotation | -90°~90° | 150°/s | 300°/s² |
| Axis 3 | Rotation | -90°~90° | 150°/s | 300°/s² |
| Axis 4 | Rotation | -180°~180° | 200°/s | 400°/s² |
| Axis 5 | Rotation | -90°~90° | 200°/s | 400°/s² |
| Axis 6 | Rotation | -180°~180° | 250°/s | 500°/s² |

### 2.2 Mechanical Parameters

| Parameter | Value | Unit |
| :--- | :--- | :--- |
| Working Radius | 1850 | mm |
| Repeatability | ±0.05 | mm |
| Maximum Payload | 20 | kg |
| Body Weight | 120 | kg |

## 3 Configuration Method

### 3.1 Import Configuration File

1. Enter Settings > Robot Parameters > Slave Configuration
2. Click [Import], select the ROKAE CR20-C configuration file
3. Click [Save], restart the system

### 3.2 Parameter Adjustment

1. Enter Settings > Robot Parameters > Motion Parameters
2. Adjust each axis's speed, acceleration, and other parameters according to actual needs
3. Click [Save], restart the system

## 4 Debugging Steps

### 4.1 Joint Jog Test

1. Enter teach mode
2. Select joint coordinate system
3. Jog each axis individually, check if motion is normal
4. Record each axis's limit positions

### 4.2 Linear Motion Test

1. Teach multiple points
2. Connect these points using MOVL instructions
3. Run the program, check if linear motion is smooth

### 4.3 Payload Test

1. Install rated payload at the end
2. Run typical trajectory program
3. Check if robot operation is stable and joint temperature is normal

## 5 Precautions

1. The ROKAE CR20-C robot has a large working radius. Ensure there are no obstacles in the working space.
2. Use low speed mode during initial debugging, gradually increase speed.
3. Regularly check joint lubrication to ensure normal robot operation.
4. If mechanical structure needs modification, re-calibrate parameters.
5. When collaborating with humans, ensure safety measures are in place.

---

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What is the working radius of the ROKAE CR20-C?**

A: The working radius of the ROKAE CR20-C is 1850mm.

**Q: What is the maximum payload of the ROKAE CR20-C?**

A: The maximum payload of the ROKAE CR20-C is 20kg.

**Q: How to import the ROKAE CR20-C configuration file?**

A: Enter Settings > Robot Parameters > Slave Configuration, click [Import], select the ROKAE CR20-C configuration file, click [Save], and restart the system.

**Q: How to perform a joint jog test?**

A: Enter teach mode, select joint coordinate system, jog each axis individually, check if motion is normal, and record each axis's limit positions.

**Q: What is the repeatability of the ROKAE CR20-C?**

A: The repeatability of the ROKAE CR20-C is ±0.05mm.

**Q: What should be noted during debugging?**

A: 1. The ROKAE CR20-C robot has a large working radius. Ensure there are no obstacles in the working space.
2. Use low speed mode during initial debugging, gradually increase speed.
3. Regularly check joint lubrication to ensure normal robot operation.
4. If mechanical structure needs modification, re-calibrate parameters.
5. When collaborating with humans, ensure safety measures are in place.

**Q: How to adjust robot parameters?**

A: Enter Settings > Robot Parameters > Motion Parameters, adjust each axis's speed, acceleration, and other parameters according to actual needs, click [Save], and restart the system.

**Q: How to perform a payload test?**

A: Install rated payload at the end, run typical trajectory program, check if robot operation is stable and joint temperature is normal.

---

## Related Resources

- [System Function Debugging Manual](../系统功能调试手册.md)
- [Motion Control Instructions](../运动控制类指令.md)
- [Human-Machine Collaboration](../人机协作.md)

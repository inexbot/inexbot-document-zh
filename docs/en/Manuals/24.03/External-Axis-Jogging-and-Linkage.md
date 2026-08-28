---
title: "External Axis Jogging/Linkage"
description: "External axis jogging/linkage functionality"
author: "cui"
date: "2026-04-07"
tags: ["teach pendant", "monitoring", "external axis"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# External Axis Jogging/Linkage

## Function Introduction

The external axis jogging/linkage function allows users to switch the external axis motion mode in the monitoring interface, enabling coordinated control between the robot and the external axis.

![Image](assets/xxir93lv7pf2xn1rz18pld.png)

## Operation Method

### Mode Switching

In the monitoring interface, you can switch between external axis independent/linkage modes. The prerequisite is that the external axis to be linked must be calibrated.

### Mode Description

- **Linkage Mode**: When jogging the external axis, the robot can follow with relative movement; when jogging the robot, the external axis does not move.
- **Jog Mode**: When jogging the robot, the external axis remains stationary; when jogging the external axis, the robot remains stationary.

![Image](assets/sp8actsyr2d6amyuvq86a5.png)

## Precautions

1. Before using the external axis linkage function, the external axis calibration must be completed first.
2. Ensure that the motion range of the external axis does not interfere with the robot.
3. In linkage mode, pay attention to the robot's follow-up motion when jogging the external axis to ensure safety.
4. When switching modes, it is recommended to stop all motion first to ensure the system is in a stable state.

---

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: How to switch the external axis jogging/linkage mode?**

A: Find the external axis independent/linkage switching option in the monitoring interface and click to switch modes.

**Q: What is the prerequisite for the external axis linkage function?**

A: The external axis that needs to be linked must be calibrated first, ensuring the relative position relationship between the external axis and the robot is correct.

**Q: In linkage mode, how does the robot move when jogging the external axis?**

A: In linkage mode, when jogging the external axis, the robot will follow the external axis with relative movement, maintaining the relative position relationship between the two.

**Q: What is the motion relationship between the robot and external axis in jog mode?**

A: In jog mode, when jogging the robot, the external axis remains stationary; when jogging the external axis, the robot remains stationary. The two move independently.

**Q: What should be noted when using the external axis linkage function?**

A: Ensure that the motion range of the external axis does not interfere with the robot; in linkage mode, pay attention to the robot's follow-up motion when jogging the external axis to ensure safety; when switching modes, it is recommended to stop all motion first to ensure the system is in a stable state.

---

## Related Resources

- [System Function Debugging Manual](System-Function-Debugging-Manual.md)
- [External Axis User Manual](External-Axis-User-Manual.md)

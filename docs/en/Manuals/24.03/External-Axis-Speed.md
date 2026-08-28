---
title: "External Axis Speed Description"
description: "External axis speed description"
author: "wlh"
date: "2026-04-10"
tags: ["Controller", "External Axis", "Speed"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# External Axis Speed Description

The EVJ (external axis speed specification) parameter has been added to the three instructions MOVJEXT, MOVLEXT, and MOVCEXT. The default value is "not used," the unit is percentage, and the range is 1–100.

External axis speed is set in **Variables > Global Values > Float D**, with a range of (0, 100].

**Effect**: When both the external axis speed and instruction speed are specified, the external axis and robot actually run at the lower of the two values.

When two or more external-axis point-to-point instructions are inserted into the program, the effect is as shown in the table below:

1. The calculation methods for both external axis speed and robot speed are related to the VJ value on the teach pendant. Whether running at external axis speed or robot speed, increasing or decreasing the speed on the teach pendant will correspondingly increase or decrease the speeds of both the external axis and the robot.

2. Since only the external-axis point-to-point function was implemented at the time, only external-axis point-to-point instructions were used. The teach pendant program was not implemented at that time, so modifying the external axis speed may need to be set in the instruction.

| External Axis Speed | Instruction Speed |
| :--- | :--- |
| Set external axis speed to maximum (Float D = 100) | Adjust the instruction speed range and acceleration/deceleration; the external axis and robot speeds will change according to the instruction speed |
| Set external axis speed to minimum (Float D = 1) | When the instruction speed value is not less than the external axis speed value, adjusting the instruction speed range and acceleration/deceleration will not change the external axis and robot speeds (both use the external axis speed value) |
| Modify the external axis speed value; the external axis and robot speeds will change according to the external axis speed value | Set instruction speed to maximum (VJ, ACC, DEC all set to 100) |
| When the external axis speed value is greater than or equal to the instruction speed value, modifying the external axis speed value will not change the external axis and robot speeds (both use the instruction speed value) | Set instruction speed to minimum (VJ, ACC, DEC all set to 1) |

![](assets/gF1sU5gX5zG0qK6aX6gT.png)

---

## Q&A for Retrieval

**Q: Which instructions have the EVJ parameter been added to?**

A: The EVJ parameter has been added to the three instructions MOVJEXT, MOVLEXT, and MOVCEXT.

**Q: When both external axis speed and instruction speed are set, what speed do the external axis and robot actually run at?**

A: They run at the lower of the two values.

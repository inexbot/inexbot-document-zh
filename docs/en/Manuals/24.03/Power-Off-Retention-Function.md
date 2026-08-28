---
title: "Power-Off Retention Function"
description: "Introduction to the power-off retention function and how to enable it"
author: "wlh"
date: "2026-04-08"
tags: ["Power-Off Retention", "Controller Configuration"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---
# Power-Off Retention Function

**Main Purpose**: In the event of a sudden power outage or other external power disconnection, the controller immediately saves the current robot position, program status, variable values, etc. after the external power is disconnected. When the external power is restored, the system can return to the pre-power-off state. (This function requires a controller with built-in UPS hardware support or an external hardware UPS connected to the controller.)

**Power-Off Retention Activation Message**: After the external power is reconnected, if this function is active, a message "Power-off retention has taken effect" will be displayed after startup.

**Power-Off Retention Switch**: Located in Settings > Operation Parameters (this switch must be enabled for the power-off retention function to take effect).

![Image](assets/50zqwq3hezc988z1hcy6xv.png)

**Filter Time**: The waiting time after the controller determines that the external power has been disconnected before executing the save. If the specified time period is exceeded, the power-off save is executed. If the external power is restored within this time, the save is not executed.

**Modifying the Filter Time**: In milliseconds.

File path:

![Image](assets/zmfp993k13ftrje74p1kq9.png)

File content:

![Image](assets/3htaso522wp8ry2byf07vp.png)

**Power-Off Retention Process**: External power disconnected → Controller continues running for the filter time → Controller enters power-off save state (disconnects from the teach pendant) → Controller completely powers off (indicator lights turn off)

**Data Recovered After Power-Off Retention Is Triggered**:

1. Robot position, external axis position (virtual servo will not be restored)
2. I, D, B, S, GI, GD, GB, GS numeric variables
3. IO forced input/output
4. Program run position (current line, last run line, breakpoint run), assignments executed before program instructions, IO status
5. Global background, local background tasks
6. Modbus values, variables

## Q&A for Retrieval

**Q: Power-off retention function is not working**

A: 1. Check whether the power-off retention switch is enabled. 2. Check whether the controller hardware has UPS functionality. 3. Check whether the hardware firmware version supports this feature.

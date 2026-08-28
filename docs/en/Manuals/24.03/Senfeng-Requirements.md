---
title: "Modifying Cutting Parameters During Laser Cutting"
description: "Laser cutting instruction function description"
author: "lidandan"
---
# Senfeng Requirements

## LASER_SET Instruction — Laser Settings

**Function**: This instruction supports real-time modification of laser processing parameters (gas pressure, power, frequency, duty cycle) during the cutting process. The cutting process does not need to pause during modification, enabling dynamic parameter adjustment.

![](assets/asenfeng-1.png)

### Parameter Interface Description

| Parameter | Value | Notes |
| :--- | :--- | :--- |
| Process No. | Enter the process number to use | 0–500 |
| Use Temporary Process Parameters | Choose whether to use temporary parameters | |
| Gas pressure | Gas pressure required for laser cutting, can be bound to a variable | [1–99999] kPa |
| Power | Laser power, can be bound to a variable | [0–100]% |
| Frequency | Laser frequency, can be bound to a variable | [1–99999] Hz |
| Duty cycle | Laser duty cycle, can be bound to a variable | [0–100]% |

### Usage Example

In the laser cutting program, insert the LASER_SET instruction before the cutting motion instruction. Set the required process parameters. During cutting, the parameters will be applied in real time.

### Notes

- Modifying parameters during cutting will not cause the cutting process to pause.
- Parameters can be bound to variables for dynamic adjustment.
- Gas pressure unit is kPa.

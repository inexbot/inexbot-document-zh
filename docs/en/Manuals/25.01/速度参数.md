---
title: "Speed Parameters"
description: "Detailed explanation of each speed parameter."
author: "qiuzegai"
date: "2026-06-24"
tags: ["Teach Pendant", "Speed Parameters"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---


# Speed Parameters

Note: "Global Speed" refers to the speed displayed in the status bar on the teach pendant interface.

![](./assets/xmzzspl1paxled6menuzv.png)

| Parameter | Description |
| :--- | :--- |
| Joint Jog Speed | Maximum joint-axis jog speed × Global Speed |
| Cartesian Jog Speed | Maximum Cartesian-axis jog speed × Global Speed |
| Step Joint Speed | Global Speed × Instruction Speed × Joint Rated Forward Speed<br>Maximum speed limit: Joint Rated Speed × 30% |
| Step Cartesian Speed | Global Speed × Instruction Speed<br>Maximum limit: 300mm/s |
| Dynamic Acceleration/Deceleration | Only supports point-to-point and linear motion; speed cannot increase further once rated speed is reached |
| Dynamic Acceleration/Deceleration Practical Application | Modifying speed during an instruction that does not support dynamic acceleration/deceleration — the modified speed will be applied to the next motion instruction |
| Trial Run Speed | Same as step instruction speed |
| Reverse Speed | Same as step instruction speed |
| Run Mode | Point-to-point: Maximum axis speed = Rated Forward Speed × Instruction Speed × Global Speed<br>Linear: Maximum linear speed = Instruction Speed × Global Speed<br>Curved: Track speed follows the first curve's speed |

## AI Q&A for Retrieval

**Q: What is Global Speed?**

A: Global Speed refers to the speed displayed in the status bar on the teach pendant interface.

**Q: How is Joint Jog Speed calculated?**

A: Joint Jog Speed = Maximum joint-axis jog speed × Global Speed.

**Q: How is Cartesian Jog Speed calculated?**

A: Cartesian Jog Speed = Maximum Cartesian-axis jog speed × Global Speed.

**Q: How is Step Joint Speed calculated?**

A: Step Joint Speed = Global Speed × Instruction Speed × Joint Rated Forward Speed. The maximum speed limit is 30% of the joint rated speed.

**Q: How is Step Cartesian Speed calculated?**

A: Step Cartesian Speed = Global Speed × Instruction Speed. The maximum speed limit is 300mm/s.

**Q: Which motion modes support Dynamic Acceleration/Deceleration?**

A: Dynamic Acceleration/Deceleration only supports point-to-point and linear motion modes. Speed cannot increase further once rated speed is reached.

**Q: How is Dynamic Acceleration/Deceleration applied in practice?**

A: Modifying speed during an instruction that does not support dynamic acceleration/deceleration — the modified speed will be applied to the next motion instruction.

**Q: What speed is Trial Run Speed the same as?**

A: Trial Run Speed is the same as step instruction speed.

**Q: What speed is Reverse Speed the same as?**

A: Reverse Speed is the same as step instruction speed.

**Q: How is the maximum axis speed calculated in point-to-point mode?**

A: In point-to-point mode, maximum axis speed = Rated Forward Speed × Instruction Speed × Global Speed.

**Q: How is the maximum linear speed calculated in linear mode?**

A: In linear mode, maximum linear speed = Instruction Speed × Global Speed.

**Q: How is the track speed determined in curved mode?**

A: In curved mode, the track speed follows the first curve's speed.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-24 | Initial version | qiuzegai |

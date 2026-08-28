---
title: "Rarely Used Functions"
description: "Introduction to some rarely used functions"
author: "wlh"
date: "2026-04-13"
tags: ["Functions", "Rarely Used"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Rarely Used Functions

## Absolute Position Resolution

Absolute Position Resolution Function Description

![Image](assets/plipdlqxmey63c9n7oezdt.png)

Settings - Robot Parameters - Motion Parameters - Absolute Position Resolution.

Function: When running points, if two points differ by less than or equal to the resolution, they are treated as one point. This is an important performance indicator that determines the accuracy and precision of the positioning system.

Range: [0.0001,0.1].

## Jog Sensitivity

Jog Sensitivity Function Description

![Image](assets/6tgppj6ea4hmq1gvvwir9a.png)

Settings - Robot Parameters - Jog Parameters - Jog Sensitivity.

Jog Sensitivity is an important function setting that determines the response speed and accuracy of the robot during jog operations.

Function: After power-on, when the robot vibration range exceeds the jog sensitivity, the jog operation is invalid. Because the robot's vibration may exceed the minimum change that the system can recognize, the system cannot correctly determine the robot's actual position and posture.

Range: [0.0001,1].

## Joint Space Speed Limit

Joint Space Speed Limit

![Image](assets/t5b0avgyna0w1uh6y7xfxl.png)

Settings - Human-Robot Collaboration - Hand-Guiding Teaching - Torque Parameter Settings - Joint Space Speed Limit.

Joint Space Speed Limit refers to the speed limit range of the robot's joint during joint motion. It can better protect the robot and the surrounding environment.

Function: Maximum speed during dragging. When exceeding the limit, the robot will power off and stop.

Range: [0,+\infty].

## Joint Friction Compensation Correction Parameters

Joint Friction Compensation Correction Parameters

![Image](assets/4zrz2yre85nm67tjo8mati.png)

Settings - Human-Robot Collaboration - Hand-Guiding Teaching - Torque Parameter Settings - Joint Friction Compensation Correction Parameters.

Joint friction compensation correction coefficient is an important parameter that can significantly affect the robot's joint flexibility, motion performance, adaptive control, joint protection, and system integration performance. Through reasonable setting and adjustment of this parameter, the robot's overall performance and work efficiency can be improved.

Function: The closer the parameter is to 5, the more flexible the joint.

Range: [0,5].

## Run Delay Time

Run Delay Time

![Image](assets/8eu2klfw9w0qharg43jtta.png)

Settings - Robot Parameters - Motion Parameters - Run Delay Time.

Run delay time is an important performance indicator that reflects the execution efficiency of the program or system. Calculation formula: Run Delay Time = Execution Time + Wait Time.

Function: Run delay when the program starts.

Range: [500,20000] milliseconds.

## Pause Time

Pause Time

![Image](assets/3mnlex7uxthyu48xzbsn1a.png)

Settings - Robot Parameters - Motion Parameters - Pause Time.

For some critical tasks and real-time systems, pause time control is particularly important, requiring the program's response speed and execution efficiency to be guaranteed.

Function: When switching mode to stop, switching mode to pause, remote stop, or remote pause during program running, the time from running to stopping.

Range: [240,2000].

## NP Parameters

NP Parameters

![Image](assets/uspigumqx9x63vu5766gil.png)

Settings - Operation Settings - Enable NP Parameters, then Settings - Robot Parameters - NP Settings.

Hand-guiding teaching and collision detection are important robot functions that enable the robot to interact with humans more efficiently and safely.

Function: Hand-guiding teaching and collision detection for collaborative robots.

## Backlash

[Home](https://ones.inexbot.com/wiki/?/team/RnqpQ1Yp/page/PyaUeBy7)

1: In Settings/Operation Parameters interface, turn on [Show Motor Coordinate Position and Calibration Button]

![Image](assets/zlfok3uhq47s0iflgyurut.png)

At this time, in the Monitor/Machine Coordinate interface, you can see an additional motor position coordinate.

![Image](assets/fl7t0mxpigzm7u5ig8cuur.png)

In Settings/Robot Parameters/Zero Position interface, an additional [Mark No-Backlash Direction] button appears.

![Image](assets/8y2nkjo05dugpw2w5rnojj.png)

2: Using the robot's axis 1 as an example.

In Settings/Robot Parameters/Joint Parameters/Other Parameters interface, set a value for [Gear Backlash] (e.g., fill in: 10).

![Image](assets/gq6zji0zsi6ex9wk309nf8.png)

When gear backlash has a value, an error will appear because calibration has not been performed.

3: At this time, go to the zero position interface to mark the no-backlash direction.

Calibration method is as follows:

a: Move axis 1 positive direction. Since the gear backlash value is 10, the motor position must be greater than 10 during the movement of axis 1.

b: When it exceeds 10, click [Mark No-Backlash Direction Button]. A message indicating successful marking will appear.

![Image](assets/grm5zhilcatt7uvpc8nnpg.png)

![Image](assets/hjfecowg96mrhblle6k57d.png)

4: Verify if it is effective

After successful marking, check if the robot coordinate and motor position coordinate for axis 1 are the same.

![Image](assets/j2iu0g3uleesypx4az06gz.png)

After powering on, jog robot axis 1. When jogging axis 1 in the positive direction, the robot coordinate and motor position coordinate are consistent.

When jogging axis 1 in the reverse direction, the robot coordinate and motor position coordinate differ by 10, which is the gear backlash value.

![Image](assets/335ve1ur2hjtehmytpglmv.png)

![Image](assets/9boycjerz450gth2b20yz4.png)

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: Robot powers on slowly, running program will alarm**

A: Modify Settings - Robot Parameters - Motion Parameters - Run Delay Time to set the run delay when the program starts.

---
title: "Teach Pendant Function Key Manual"
description: "Detailed description of teach pendant function keys"
author: "qiuzegai"
date: "2026-06-25"
tags: ["Teach Pendant", "Function Keys", "Safety Operation"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Teach Pendant Function Key Manual

## Safety Operation Precautions

Robot owners and operators must be responsible for their own safety. INEXBOT is not responsible for robot usage safety issues. INEXBOT reminds users that they must pay attention to safety equipment when using robots and must comply with safety regulations.

Situations where robots cannot be used:

1. Combustion environments;
2. Environments with explosion risk;
3. Radio interference environments;
4. In water or other liquids;
5. Transporting people or animals;
6. Climbing or other situations.

Safety Operation Procedures:

1. Do not wear gloves when operating the teach pendant and operation panel;
2. Use lower speed multiplier when jogging the robot to increase control opportunities;
3. Consider the robot's motion trend before pressing the jog key on the teach pendant;
4. Pre-plan the robot's motion trajectory avoidance and confirm the route is not obstructed;
5. The area around the robot must be clean, free of oil, water, and impurities.

Production Operation:

1. Before startup, must know all tasks the robot will execute according to the programmed program.
2. Must know the position and status of all switches, sensors, and control signals that affect robot movement.
3. Must know the position of emergency stop buttons on the robot control cabinet and peripheral control equipment, prepare to use these buttons in emergency situations.

||
| :---- |
| **Warning**<br>![](./assets/en5npohpt2vgh-k-uasyc.png)<br>- Do not enter the robot work area when the robot is running!<br>- The robot not moving does not mean the program has finished executing, because the robot is likely waiting for a signal to continue moving. Entering the work area at this time will threaten the operator's personal safety. |

### Product Assembly

#### Teach Pendant Installation

The connector at the end of the teach pendant cable is shown in the figure, connected to the connector below the control cabinet as shown:

![](./assets/pi4ksh27ckjzug2wsklsn.png)

#### Control Cabinet Installation

Installation Environment:

1. Ambient temperature has a great impact on controller lifespan. Do not allow the controller's operating environment temperature to exceed the allowed temperature range (-10°C~50°C);
2. Install the controller vertically on the flame-retardant surface inside the installation cabinet, with sufficient space around for heat dissipation;
3. Install in a place that is not easily vibrated. Vibration should not exceed 0.6G. Pay special attention to staying away from equipment such as punch presses;
4. Avoid installing in places with direct sunlight, moisture, or water droplets;
5. Avoid installing in places with corrosive, flammable, or explosive gases in the air;
6. Avoid installing in places with oil stains or dust. Installation site pollution level is PD2;
7. NRC series products are in-cabinet installation products, need to be installed in the final system for use. The final system should provide corresponding fireproof shell, electrical protection shell, and mechanical protection shell, etc., and comply with local laws and regulations and relevant IEC standard requirements, as shown in the figure:

![](./assets/1imjsyj3ls6ngueg5q3vs.png)

Installation Location:

1. Control cabinet should be installed outside the robot's motion range (outside the safety fence);
2. Control cabinet should be installed in a position where the robot's motion can be seen;
3. Control cabinet should be installed in a position convenient for opening the door for inspection;
4. Control cabinet should be at least 500mm from the wall to maintain unobstructed maintenance channels.

Robot related range is shown in the figure below:

![](./assets/nuagfjap_xq_jil-gpsv4.png)

Cable Classification:

Level 1: Sensitive signals (low voltage analog signals, high-speed encoder signals, high-speed communication signals, plus/minus 10V analog signals, low-speed 422, 485 signals, digital input/output signals).

Level 2: Interference signals (low voltage power supply, contactor control lines, motor lines with wave recorder, high voltage AC power lines, motor lines without wave recorder).

1. Cable selection: Input/output main circuit cables recommend using symmetrical shielded cables. Compared with four-core cables, using symmetrical shielded cables can reduce the electromagnetic radiation of the entire conduction system.
2. Recommended power cable type - symmetrical shielded cable.
3. Recommended signal cable type - twisted pair shielded cable.

Cable schematic is as follows:

![](./assets/8hmd_2v0bwiknm00uh90n.png)

Note: Digital signal lines recommend using twisted pair shielded cables.

Recommended communication cable type - shielded communication cable, as shown in the figure:

![](./assets/obvegaejo16vb-ucvk-80.png)

Shielded communication cable schematic

Note: The crystal head used must have a shielded metal shell. The communication cable's shield layer is crimped together with the crystal head's shielded iron shell, as shown in the figure:

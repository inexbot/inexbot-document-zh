---
title: "Teach Pendant Function Key Manual"
description: "All function key descriptions in the teach pendant, including physical keys"
author: "MUZI165"
date: "2026-04-07"
tags: ["Teach Pendant", "Function", "Keys", "Interface"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Teach Pendant Function Key Manual

## Safety Operation Precautions

The robot owner and operator must be responsible for their own safety. INEXBOT is not responsible for the safety of robot usage. INEXBOT reminds users that safety devices must be used and safety regulations must be followed when using the robot.

**Situations where the robot must NOT be used:**

1. Combustible environments;
2. Environments with explosion risk;
3. Environments with radio interference;
4. In water or other liquids;
5. Transporting people or animals;
6. Climbing on or other inappropriate situations.

**Safety Operation Procedures:**

1. Do not operate the teach pendant and control panel with gloves;
2. Use a low speed multiplier when jogging the robot to increase control;
3. Before pressing jog keys on the teach pendant, consider the robot's motion trend;
4. Plan the robot's motion path in advance and confirm the path is clear of interference;
5. The area around the robot must be clean, free of oil, water, and debris.

**Production Operation:**

1. Before startup, know all tasks the robot will execute according to the programmed program.
2. Know the position and status of all switches, sensors, and control signals that affect robot movement.
3. Know the location of emergency stop buttons on the robot control cabinet and peripheral control devices, and be prepared to use them in emergencies.

**Warning** </br> ![](assets/gwe6jdznk69sudzutk29h.png) </br>  - Do NOT enter the robot work area while the robot is running! </br>  - The robot not moving does not mean the program has finished executing. The robot may be waiting for a signal to continue movement. Entering the work area at this time threatens operator safety.

---

## Product Assembly

### Teach Pendant Installation

The connector at the end of the teach pendant cable is shown below, connecting to the port below the control cabinet:

![Teach Pendant Installation](assets/uqayg81ggehn0ekruzaap.png)

### Control Cabinet Installation

**Installation Environment:**

1. Ambient temperature significantly affects controller lifespan. The operating temperature must not exceed the allowed range (-10°C~50°C);
2. Install the controller vertically on a flame-retardant surface inside the installation cabinet, with sufficient space for heat dissipation;
3. Install in a location with minimal vibration. Vibration should not exceed 0.6G. Keep away from punch presses and similar equipment;
4. Avoid direct sunlight, moisture, and locations with water droplets;
5. Avoid locations with corrosive, flammable, or explosive gases in the air;
6. Avoid locations with oil contamination and dust. Installation pollution level is PD2;
7. NRC series products are in-cabinet installation products that need to be installed in the final system. The final system should provide appropriate fire protection enclosure, electrical protection enclosure, and mechanical protection enclosure, complying with local regulations and relevant IEC standards:

![](assets/blgqyxgnzehus-ydj7okq.png)

**Installation Location:**

1. The control cabinet should be installed outside the robot's motion range (outside safety barriers);
2. The control cabinet should be installed where the robot's motion can be clearly observed;
3. The control cabinet should be installed where the door can be easily opened for inspection;
4. The control cabinet should be at least 500mm from the wall to maintain maintenance access.

**Robot-related range shown below:**

![](assets/xjypqom7keh1wthmsytg0.png)

- Cable Classification:

Level 1: Sensitive signals (low-voltage analog signals, high-speed encoder signals, high-speed communication signals, ±10V analog signals, low-speed 422/485 signals, digital input/output signals).

Level 2: Interference signals (low-voltage power supply, contactor control lines, motor lines with line filters, high-voltage AC power lines, motor lines without line filters).

1. Input/output main circuit cables are recommended to use symmetrical shielded cables. Compared to four-core cables, symmetrical shielded cables can reduce electromagnetic radiation of the entire conduction system.

2. Recommended power cable type: Symmetrical shielded cable.

3. Recommended signal cable type: Twisted pair shielded cable.

Cable diagram:

![](assets/phhnrlotfjzef4yfx0fol.png)

**Note:** Digital signal lines are recommended to use twisted pair shielded cables.

Recommended communication cable type: Shielded communication cable, as shown:

![](assets/qdxfkdhtwtmkxm_kcxej-.png)

Shielded communication cable diagram

**Note:** The RJ45 connector must have a shielded metal shell. The communication cable's shield layer must be crimped with the RJ45's shielded iron shell, as shown:

![](assets/hw8ykwfm9te96yk3twj02.png)

Shielded metal shell RJ45 connector diagram

- Wiring Requirements:

1. Power cables should be routed away from all signal cables.

2. Motor cables, input power lines, and control circuit cables should not be routed in the same cable tray.

3. Avoid electromagnetic interference from coupling when motor cables and control circuits run in parallel for long distances.

4. Maintain at least 100mm spacing between different level cables in the same cable tray.

**Note:**

1. Different level cables should be routed separately. When running cables in the same direction for long distances, maintain at least 100mm spacing between different level cables.

2. Use a conductor as a backplane (uncoated zinc plate) and connect the controller's metal parts directly to the backplane.

3. Maintain cable separation by level. If different level cables must cross, they should cross at 90°.

- Grounding Requirements:

**Warning** </br> ![](assets/vcxo-ekcrzgvdc3wnw4_j.png) </br> - Be sure to ground the grounding terminal, otherwise there is a risk of electric shock or malfunction due to interference!

1. Power line grounding requirements, as shown:

![](assets/5pyqtpkmzxua5ju9wvvrt.png)

2. Differential signal lines (CAN/RS485/RS422) use twisted pair shielded cables. The shield layer must be connected to 0V at both ends of the cable, as shown:

![](assets/3sq92jgrnsnjcv-0eaxpm.png)

**Wiring Precautions:**

1. Personnel participating in wiring and inspection must be qualified technical professionals.

2. The product must be reliably grounded with grounding resistance less than 4 ohms. Do not use the neutral wire instead of the ground wire.

3. Wiring must be correct and secure to avoid product failure or unexpected consequences.

4. Surge absorption diodes connected to the product must be connected in the specified direction, otherwise the product will be damaged.

5. Before plugging/unplugging connectors or opening the product chassis, the product power must be cut off.

6. Avoid routing signal lines and power lines through the same conduit. Maintain at least 30mm distance.

7. Signal lines and encoder (PG) feedback lines should use multi-strand twisted wires and multi-core twisted shielded wires.
For wiring length: command input lines maximum 3m, PG feedback lines maximum 20m. Encoder signal wires are one set of twisted pairs, power wires are one set of twisted pairs, battery wires are one set of twisted pairs.

8. Do not frequently turn power ON/OFF. When repeated ON/OFF is needed, limit to less than 1 time per minute. The servo unit's power section contains capacitors. Frequent ON/OFF will cause degradation of the main circuit components inside the servo unit.

9. Confirm the control system power supply switching power supply power and voltage. Ensure the controller, teach pendant, and IO module power is not less than 50W. Specific power depends on IO module load.

10. It is recommended to use separate switching power supplies for the servo and controller system to prevent servo interference with the control system.

**Note:**

1. The network cable connecting the control system and servo must use Category 6A shielded cable.

2. If one axis corresponds to one servo, the network cables must be connected in axis order.

3. Wire in the order: Controller --- Servo --- IO Board.

---

## Teach Pendant Adapter Box Wiring Diagram

![](assets/g7gmtqnom1vvbamk7orlw.png)

---

## T30 Teach Pendant Key Description

![](assets/ntyhbq0lyoth37s0dn-94.png)
| Key | Key Description |
| :--- | :--- |
| ![](assets/tbkcss2lhqvb_tndojum-.png) | Click [Servo] to switch servo status (Stop, Ready) </br> ![](assets/h7na80-onk7tru2uvx70v.png) </br> ![](assets/lyhhfdzyzdcbvtqetjvuu.png) |
| ![](assets/mj1soabiyapvxeiksgrld.png) | Click [Robot] to switch current robot (only available in multi-robot mode) |
| ![](assets/vjqhvfc1qkwdozftgbq6b.png) | Click [External Axis] to switch between external axis and robot when connected (only available with external axis) </br> External Axis: Select external axis to jog the currently connected external axis </br> ![](assets/tfvjq18ic02h4fyc0sr_u.png) </br> Robot: Select robot to perform jog and other operations on the current robot </br> ![](assets/rs0qybqs8lydihoxg1toy.png) |
| ![](assets/fao3txbxilsulnbuqnnrb.png) | Click [Zero Point] to return the robot to zero position |
| ![](assets/ff0ro1rawqdbixhw0ytry.png) | Click [Reset] to move the robot to the recorded reset point position |
| ![](assets/vndxdwh-fnzgqgv-ki4zj.png) | Click [Clear Error] when error messages appear to clear error notifications |
| ![](assets/ii8fnw5yqg-_ptpu64m_a.png) | Click [⭕] to enter drag mode. Drag the robot to reach target points </br> Note: Robot can only be dragged after successful identification |
| ![](assets/kbhbqjxecp9o3-k5hdyl9.png) | Click [F/B] to select forward or reverse execution during single-step program execution </br> Forward: Instructions run from top to bottom </br> ![](assets/uoebklk0xzchnod_mgrfz.png) </br> Reverse: Instructions run from bottom to top </br> ![](assets/nnpelx5vliuagehozgbxb.png) |
| ![](assets/yjoyqxw383vl5kbkd-ed1.png) | Click [Single Step] during program execution. In teach mode, click [Single Step] to run the first line. After completion, click [Single Step] to continue to the second line, and so on until the entire job file completes </br> ![](assets/mgaymzec0fnctqrhiezjq.png) |
| ![](assets/u2zwrbcdqyiftv5slqusq.png) | [V-] Decrease global speed by 5% per click </br> ![](assets/cxqou78ghkzvytippkfex.png) |
| ![](assets/dkmpt9etfpo6-llz0w4q0.png) | [V+] Increase global speed by 5% per click </br> ![](assets/yqx704l6bolza1yc_ezuf.png) |
| ![](assets/-q1wvslg6nyuqj0zaolom.png) | [Tool] Switch tool </br> ![](assets/y8qobvjhr5ppw1levwzuz.png) |
| ![](assets/acyifmugd6izgdd4exfbf.png) | [Coordinate] Switch coordinates: joint, Cartesian, tool, and user coordinates </br> ![](assets/g2ssr2btwty52kbxyk5bz.png) |
| ![](assets/cto9bz74ecjjffjb4pibo.png) | [Switch Operation Mode] Knob left = Teach mode, center = Run mode, right = Remote mode |
| ![](assets/9fqgs1_rnfjzagm8n8ser.png) | [Emergency Stop Button] Press during collision or runaway to stop robot motion |
| ![](assets/y87d-ilbf_2cg-spxqf2g.png) | [Start] In run mode, click [Start] to begin program execution |
| ![](assets/vwjwsllouxfu07ulfcmu6.png) | [Stop] In run mode, click [Stop] to pause the running program |
| ![](assets/woek5xz3pzsxlm0dy13ox.png) | [-] Jog corresponding axis in negative direction during teach |
| ![](assets/z_2p0morp9khymmdg5hx6.png) | [+] Jog corresponding axis in positive direction during teach |
| ![](assets/jbwailexm8rpl-65bzjda.png) | Program interface rotate to switch to previous/next line |
| ![](assets/gmianpuojodcnd6hth0if.png) | Press halfway to power on robot, press fully to power off, release to power off |

---

## Teach Pendant Function Key Operation Guide

| Function Key | Function Description |
| :--- | :--- |
| ![](assets/hi4dhthu8z_iajohzal2l.png) | Click [Operator] to set Operator, Technician, Manager, Manufacturer user permissions. Different users have different permissions. Only Manufacturer users can modify robot parameters. </br> ![](assets/ivvgk3fwqo_kqsyehsp7q.png) </br> 1. User-defined permission operations: </br> 2. In Manufacturer/Manager permission, click [Permission Settings] to enter permission settings interface </br> 3. Click [New] to define username, password, and permissions </br> 4. Click [OK] </br> 5. Click [Save] to complete user permission customization |
| ![](assets/-qyjwe4zmcjwlquesapgg.png) | Click [Settings] to open robot function settings interface </br> ![](assets/-p_xq_p31arowjai_jyqa.png) |
| ![](assets/8ewcffrkceajhsgkejrzz.png) | Click [Process] to open process selection interface </br> Process types: Laser Cutting, Spraying, Polishing, Position-Search Tracking, Welding, Palletizing, Vision, Conveyor, Special Process, etc. </br> ![](assets/6vmvcd4awglfoxym9ufd_.png) |
| ![](assets/vcpflej8vkkvsjjkpzyii.png) | Click [Variable] to open the variable interface. View and set global position variable point information and global numeric variable assignments </br> ![](assets/sujuibrjt6wtjnvbpdc_k.png) |
| ![](assets/y-vgyt41kvuljryhoxf4k.png) | Click [Status] to open the status operation interface </br> ![](assets/zlkzqry8r8aatcjpcdojw.png) |
| ![](assets/unlfpf4ozu442gxrooojo.png) | Click [Project] to open the project operation interface. Programs shown are project files created in the project interface </br> ![](assets/c4kr5koypu-vup_fcvtkw.png) |
| ![](assets/xp67wudfwhh2cr4rqfctf.png) | Click [Program] to enter the program interface </br> ![](assets/pigt6b5_fjoaj3cfnibik.png) |
| ![](assets/twf6ggnz_dpqhnr8_k5v_.png) | Click [Log] to open the log interface. View current errors, historical logs, log timestamps, log types (All, Message, Operation, Warning, Notification) </br> ![](assets/xtfzvibhmrueqdu_j_tef.png) |
| ![](assets/b-qcf7tlg3-bdpbk9xkib.png) | Click [Monitor] to open the monitor popup interface </br> ![](assets/nbmvobnmq7g9loulostgf.png) |
| ![](assets/7afvyxg08igfr_dhqngbh.png) | Date and time display |

---

## Monitor Interface Parameter Description

![Monitor Interface Parameter Description](assets/d0lnds2bw8rmth0y3-kh_.png)

### Shortcut Keys

![Shortcut Keys](assets/-z2nrqssk6jphbuapthu0.png)

1. [Return to Zero] Press power enable, click return to zero and the robot moves to zero position.

Zero position description: Every coordinate system has a point where all axes are 0, called the coordinate system origin. For the joint coordinate system, this point is called the zero position (all axes 1-6 of the robot have joint coordinates of 0).

2. [External Axis] Used to switch between the current robot and external axis.

3. [Return to Safety Point] Press power enable, click return to safety point and the robot moves to the set safety point.

The point in Settings - Reset Point Settings interface is the set safety point.

4. [Teach Method Jog (Single)] Can switch between robot jog mode and drag mode.

![Teach Method Jog (Single)](assets/kcizhg-nbvf516hpspx1r.png)

Drag description: After successful identification, select the drag method to switch to drag mode.

5. [Unplug Teach Pendant] After unplugging, the controller and teach pendant connection is disconnected.

6. [Shutdown/Restart] Click to show the following prompt. Users can select Shutdown, Restart, or Cancel. Shutdown closes the controller and teach pendant. Restart restarts both. Cancel closes the prompt.

![Shutdown/Restart](assets/-br23kzerlzoaobuosqgs.png)

7. External Axis Single/Linkage: In the monitor, you can switch external axis single/linkage mode. Prerequisite: the external axis for linkage must be calibrated.

Linkage: When jogging the external axis, the robot can follow with relative movement. When jogging the robot, the external axis does not move.

Single: When jogging the robot, the external axis stays still. When jogging the external axis, the robot stays still.

### Program Execution

![Program Execution](assets/mtu1vwyyl1fsgha2od4ak.png)

1. Main Program: During program execution, view the run mode (Teach, Run, Remote), run status (Paused, Stopped, Running), run count, and run time.

2. Global Background: Monitor the running global background job file during global background program execution.

### Machine Coordinates

1. Monitor the robot's joint coordinates, Cartesian coordinates, tool coordinates, and user coordinates during motion.

2. Detection Distance: Detect the distance the robot moves from one point to another.

### Historical Instructions

![Historical Instructions](assets/k74rik7k6uhqpe40ooiuc.png)

- Sequence: The order when the program executes the current line instruction. Sorted by time in descending order (earliest at bottom, latest at top).

- File Name: The currently running job file name.

- Line Number: The line number of the current instruction in the job file.

### Following Error (Unit: 1/10000)

Following error: The difference between the position command and actual position during motor movement, i.e., the difference between target position and actual position.

View the error values during robot operation on this interface.

### Motor Status

Each joint axis has a motor. During robot motion, view each axis's motor torque, motor speed, motor load, encoder position, and motor current parameters.

- Motor Torque: The rotational force output by the motor, describing the torque magnitude or strength.

- Motor Speed: RPM (rotations per minute), indicating how fast the motor rotates.

- Motor Load: The force or torque the motor bears during operation.

- Encoder Position: The actual position records the current encoder value. The target position records the target encoder value.

- Motor Current: View motor current parameters. Add motor current parameter units in operation parameters. Units: A or ‰.

### IO Status

When signal parameters are set during job file execution, monitor digital and analog signals on this interface.

As shown:

![IO Status](assets/x-kujxievku6xqhhxheou.png)

### Numeric Variables

When executing arithmetic instructions, the robot stores calculation results in target variables. View calculation results in Monitor - Numeric Variables:

![Numeric Variables](assets/qmn7hyx_bnkkwb1weyt6j.png)

**Note:** Storing calculation results in local numeric variables will clear them to 0 after the entire job file completes!

![Numeric Variables](assets/cy_xlm7vgp2ajvlayayqk.png)

![Numeric Variables](assets/djwq7kbejowfjfhrgs3jv.png)

![Numeric Variables](assets/qfdlbaavas3do6nv8hj6-.png)

Example: Figure 1 shows the job file (TEST101) instructions still running, variable values remain as calculated. When all instructions in job file (TEST101) complete, local variable values are cleared, as shown in Figure 2.

### Axis Speed

During robot movement, based on the set instruction speed and global speed parameters, monitor current speed and maximum speed in Monitor - Axis Speed:

![Axis Speed](assets/qzhpmsxnbppkhbpsjljgg.png)

![Axis Speed](assets/l-_u4ih-z3kcy4pna-utk.png)

### Trajectory Playback

After successful identification, the robot can be dragged.

1. Sampling Interval: The interval between each point. For example, if set to 0.03 seconds, the interval between the first and second point is 0.03;

2. Maximum Sampling Points: Divide a drag trajectory into the set number of points. For example, 300 points divides the entire trajectory into 300 points;

3. Start: Power on, click Start, then drag the robot;

4. Stop: After dragging, click Stop. The drag trajectory is recorded;

5. Playback: Playback the recorded drag trajectory;

6. Clear: Clear the recorded drag trajectory;

7. Trajectory Name: The drag trajectory name. After dragging, the trajectory is recorded. Set the recorded trajectory name here. Later, select the recorded trajectory name in Settings - Human-Robot Collaboration - Hand-Guiding interface and click Playback;

8. Save: Save the drag trajectory. Saved trajectories are recorded in Settings - Human-Robot Collaboration - Hand-Guiding interface.

![Trajectory Playback](assets/bciswhso02wnh8hcgo5pw.png)

### Position Variables

During robot operation, read target point information (coordinates, configuration, tool number, user number, posture values) and current program name:

![Position Variables](assets/j8g3swzv5cdzlq7dnnlm8.png)

Note: Local position variables.

![Position Variables](assets/k7uqmgomrapvodw2ldsiq.png)

Program description:

1. Assume P0001 joint coordinates (10, 20, 30, -10, -20, -30). Monitor - Position Variables shows P0001 joint coordinates as (10, 20, 30, -10, -20, -30);

2. When the program runs to line 2, P0001 in Monitor - Position Variables - Joint shows: (30, 20, 30, -10, -20, -30);

3. After job file (TEST2) completes, P0001 in Monitor - Position Variables - Joint shows: (0, 0, 0, 0, 0, 0);

4. Re-running the program powers on P0001 (10, 20, 30, -10, -20, -30).

**Note:** The P0001 point in instruction 1 is the initial point of the target position. The value added in instruction 2 is an additional value. Values modified through addition, subtraction, etc. can be understood as additional values.

For example: P0001 joint J1 axis add 20 (this 20 is the additional value). The monitor displays initial value | additional value. In [Program] - [Variable] interface, the target variable point always shows the initial point. After all instructions in the job file complete, P0001 coordinates return to the initial coordinates.

### Calculator

Perform addition, subtraction, multiplication, and division operations.

![Calculator](assets/pgcagxpp668l36bf6eotu.png)

---

## Status Bar Introduction

![Status Bar](assets/cir37wvv_x1jkdrdkchou.png)

- Operation Mode

Teach pendant knob switches mode (Teach Mode, Run Mode, Remote Mode)

- Servo Status

1. Stop, Ready:

Click the servo function key on the left to switch servo between Stop or Ready state.

2. Running:

In teach mode, press the "Enable" button, servo status switches to "Running".

In run mode, press the "Start" button, servo status switches to "Running".

In remote mode, switch servo status through MODBUS address code or remote signal.

3. Alarm:

Press the "Emergency Stop" button on the control cabinet/teach pendant, servo status switches to "Alarm".

Note: When emergency stop is connected to the servo, pressing the "Emergency Stop" button switches servo status to "Alarm".

- Program Status

1. Running

In teach mode, press "Enable", click "Single Step" button, program status switches to running.

In run mode, press "Start" button, program starts running, program status switches to "Running".

In remote mode, through MODBUS address code or remote start signal, program starts running, program status switches to "Running".

2. Stop

3. Paused

In run mode, after program starts running, press "Stop" button, program status changes to "Paused".

In remote mode, through MODBUS address code or remote signal.

- Speed Status

1. Jog

Speed range: [1%, 100%]

Press [V+], [V-] at the bottom of the teach pendant to increase or decrease speed by 5% each time.

Click [+], [-] as shown below to increase or decrease speed by 1% each time.

![Jog Speed](assets/wo-t7ek207h0s_tr4fjhp.png)

2. Fixed Distance Movement: After setting speed and distance, jog the robot. The robot will run the set angle or distance and stop.

Note: If stopped during jogging, re-jogging will run the set distance again, not the remaining distance.

Default values for fixed distance movement: Joint coordinates 0.1°, Cartesian coordinates 0.1mm.

When switching from jog to fixed distance movement, speed changes to default 10%.

For example: Jog speed is 50%, switching to fixed distance movement changes speed to 10%.

Jog/Fixed Distance Movement can only be switched in teach mode. Other modes show grayed out.

- Robot Status

1. Robot: Robot 1, Robot 2, Robot 3, Robot 4

This system supports up to four robots.

Switch current robot by pressing the [Robot] button on the left of the teach pendant.

2. External Axis: O1, O2, O3, O4, O5

This system supports up to five external axes.

Press the [External Axis] button on the left of the teach pendant to switch to external axis.

- Tool Status

Switch tools by pressing the [Tool] button at the bottom of the teach pendant.

---

## Q&A for Retrieval

**Q: What is the function of the [Servo] button on the teach pendant?**

A: Click [Servo] to switch servo status (Stop, Ready).

**Q: When can the [External Axis] button be used?**

A: Only when an external axis is connected is the [External Axis] button available, used to switch between external axis and robot.

**Q: What is the robot's drag mode? How to enter?**

A: Drag mode allows directly dragging the robot to target points after enabling. Click [⭕] to enter drag mode. However, dragging is only possible after successful robot identification, selecting the appropriate drag method, and the slaveType file supporting it.

**Q: What is the function of the [F/B] button?**

A: Click [F/B] to select forward or reverse execution during single-step program execution. Forward runs instructions top to bottom, reverse runs bottom to top.

**Q: How to adjust the robot's running speed?**

A: Click [V-] to decrease global speed by 5% per click; click [V+] to increase global speed by 5% per click. Or drag the speed slider at the top of the teach pendant.

**Q: What is the function of the [Tool] button?**

A: Click [Tool] to switch tools.

**Q: How to switch between different coordinate systems?**

A: Click [Coordinate] to cycle through joint, Cartesian, tool, and user coordinates.

**Q: What does the operation mode knob on the teach pendant do?**

A: Knob left = Teach mode, center = Run mode, right = Remote mode.

**Q: How to start and stop programs?**

A: In run mode, click [Start] to begin program execution. Click [Stop] to pause the running program.

**Q: What are the [-] and [+] buttons for?**

A: [-] jogs the corresponding axis in the negative direction. [+] jogs in the positive direction.

**Q: How to set user permissions?**

A: In the user interface, modify Operator, Technician, Manager, Manufacturer user login. In Manufacturer/Manager permission, click [Permission Settings], click [New], define username, password, permissions, click [OK] and [Save].

**Q: What is the function of the [Monitor] button?**

A: Click [Monitor] to open the monitor popup, viewing robot status, signal monitoring, numeric variables, axis speed, and other information.

---

## Related Resources
- [Teach Pendant Image Replacement](示教器换图.md)
- [Teach Pendant Theme Color Modification Tutorial](示教器修改主题颜色功能教程.md)
- [Human-Robot Collaboration](人机协作.md)
- [External Axis User Manual](外部轴使用手册.md)
- [System Function Debugging Manual](系统功能调试手册.md)

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-07 | Initial version | MUZI165 |

---
title: "Industrial Robot Controller C1102"
description: "Introduction to the INEXBOT C1102 EtherCAT industrial robot control system: IPC+RTOS design, Intel X86 platform, up to 64-axis synchronized motion, compatible with multiple robot configurations."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT Controller", "C1102", "Industrial Robot", "EtherCAT", "Motion Control", "IPC+RTOS"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# Industrial Robot Controller C1102

## Product Introduction

The INEXBOT C1102 EtherCAT industrial robot control system adopts an IPC+RTOS design and supports the X86 computing platform with various real-time operating systems. The control algorithms independently developed by INEXBOT support standard-configuration robots such as serial multi-joint, parallel multi-joint, SCARA, Cartesian coordinate, and linkage structures, and can also custom-develop special-structure multi-joint robots.

Thanks to INEXBOT's excellent hardware platform and algorithm capabilities, the NRC series control system supports heterogeneous multi-robot collaboration, or synchronized motion and interpolation computation for up to 64 axes.

INEXBOT currently offers a wide range of general-purpose processes including arc welding, TIG welding, laser welding, resistance welding (spot welding), laser cutting, spraying, dispensing, palletizing, and conveyor tracking, and can develop custom processes per user requirements.

Using the NexDroid OpenAPI interface, users can also design and develop their own process systems and human-machine interfaces, and can even implement their own dedicated robot forward/inverse kinematics and trajectory planning algorithms.

INEXBOT control systems have been validated on tens of thousands of industrial robot installations, and their reliability and stability are trusted by customers.

## Product Features

- **IPC+RTOS architecture**: Intel X86 platform combined with a real-time operating system, delivering strong performance and stable operation
- **Up to 64 synchronized axes**: Supports synchronized interpolation motion of up to 64 axes, meeting the needs of large automation systems
- **Multi-robot collaboration**: One controller can control 4 industrial robots simultaneously, with independent programs and parameters for each robot
- **Rich process packages**: Built-in general-purpose processes including arc welding, TIG welding, laser welding, resistance welding, laser cutting, spraying, dispensing, palletizing, and conveyor tracking
- **Multi-protocol support**: Supports EtherCAT, Profinet, Ethernet/IP, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU and other industrial communication protocols
- **Flexible programming**: Supports teach programming, offline programming, drag teaching and other programming methods

## Technical Architecture

### Bus-Based Architecture with Excellent Scalability

NRC series robot controllers use EtherCAT and CANopen buses for servo master/slave station connections, supporting synchronized motion of up to 64 axes and widely applied in robot and CNC equipment control. Compared with traditional pulse-control solutions, this greatly reduces system wiring and maintenance costs and offers outstanding scalability.

### Trajectory Optimization, Multi-Robot Collaboration and Secondary Development Support

NRC supports multi-robot collaboration, enabling coordinated control of 4 industrial robots simultaneously, and supports customer secondary development.

## Product Advantages

### Truly Multi-Robot

Supports one controller controlling 4 robots simultaneously, with each robot's parameters and programs fully independent. In run and remote modes, all robots can be started and stopped synchronously; besides one-to-many support, each robot can be paired with any type of external axis, including floor rails, positioners, and gantries. It also supports a dual-robot collaboration mode that fully synchronizes the start/stop of two robots.

### Built-In General-Purpose Processes

The system has built-in general-purpose processes such as loading/unloading, palletizing, welding, seam tracking, vision, laser cutting, conveyor tracking, collision detection, and drag teaching, and can be customized per user requirements. By using the built-in general-purpose process functions, users can quickly and conveniently implement their required processes.

### Flexible Programming

In addition to traditional teach pendant programming, PC-based teaching software and configuration-software-style touchscreen programming modes are also available.

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| CPU | Intel Celeron J1900 2.0GHz |
| Memory | 4G |
| Power Supply | 24V (±10%) |
| Operating System | Linux RT |
| Ethernet Ports | 1×EtherCAT, 1×Ethernet |
| USB | 1×USB 3.0, 3×USB 2.0 |
| Serial Ports | 1×RS232, 1×RS485 |
| Teach Pendant | (Optional) T30 robot-dedicated teach pendant: 8-inch TFT full touchscreen, Linux+QT |
| Controlled Axes | 64-axis synchronized interpolation motion / serial 6-axis robot + floor rail + 2-axis positioner × 2 |
| Communication Protocols | EtherCAT, Profinet, Ethernet/IP, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU |
| Operating Modes | Teach mode, playback mode, remote mode |
| Programming Methods | Teach programming, offline programming, drag teaching |
| Motion Functions | Point-to-point, linear, circular arc, spline curve, linear weaving, FLYBY |
| Instruction System | Motion instructions, logic instructions, input/output instructions, arithmetic instructions |
| Position Control Methods | Point-to-point control, continuous trajectory control |
| Coordinate Systems | Joint coordinate system, robot coordinate system, tool coordinate system, user coordinate system |
| Configuration Algorithms | 20+ configurations including 6-axis serial robots |
| Applications | Arc welding, TIG welding, laser welding, resistance welding (spot welding), stamping, loading/unloading, laser cutting, spraying, dispensing, palletizing, conveyor tracking, etc. |

## Product Appearance

Please refer to the following figure for the product appearance:

![C1102 Product Image](assets/C1102宣传图.png)

## Dimension Drawing

![C1102 Dimension Drawing](assets/C1102尺寸图.png)

## Q&A

**Q: How many axes can the C1102 control at most?**

A: The C1102 supports synchronized interpolation motion of up to 64 axes, meeting the control needs of large automated production lines and multi-robot coordinated systems.

**Q: Can the C1102 control multiple robots simultaneously?**

A: Yes. The C1102 supports one controller controlling up to 4 industrial robots simultaneously, with independent parameters and programs for each robot. It also supports a dual-robot collaboration mode that fully synchronizes the start/stop of two robots.

**Q: Which robot configurations does the C1102 support?**

A: The C1102 supports various standard-configuration robots including serial multi-joint, parallel multi-joint, SCARA, Cartesian coordinate, and linkage structures, and can also custom-develop special-structure multi-joint robots per user requirements.

**Q: Which process packages are built into the C1102?**

A: The C1102 has built-in general-purpose processes including arc welding, TIG welding, laser welding, resistance welding (spot welding), laser cutting, spraying, dispensing, palletizing, conveyor tracking, seam tracking, vision, collision detection, and drag teaching, and supports custom process development.

**Q: Which communication protocols does the C1102 support?**

A: The C1102 supports EtherCAT, Profinet, Ethernet/IP, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU and other industrial communication protocols, offering strong compatibility and easy integration.

**Q: What is the difference between the C1102 and the C1201?**

A: The C1102 uses an Intel Celeron J1900 processor (X86 architecture) and is positioned for the mid-range market, supporting synchronized motion of up to 64 axes. The C1201 also uses the X86 architecture but differs slightly in memory configuration and interfaces. Both products satisfy mid-range industrial robot control needs, with the C1102 having an advantage in axis-count support.

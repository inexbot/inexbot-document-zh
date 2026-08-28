---
title: "Industrial Robot Controller C1201"
description: "Introduction to the INEXBOT C1201 EtherCAT industrial robot control system: X86 computing platform, Linux RT real-time system, up to 64 synchronized axes, supercapacitor 10s power-loss protection."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT Controller", "C1201", "Industrial Robot", "EtherCAT", "Motion Control", "IPC+RTOS"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# Industrial Robot Controller C1201

## Product Introduction

The INEXBOT C1201 industrial robot control system adopts an IPC+RTOS design, using an X86 computing platform with the Linux RT real-time operating system.

The C1201 controller has built-in multiple network ports, digital input/output ports, RS485/232 COM interfaces, and CAN interfaces for convenient connection with user equipment. The C1201 adds a supercapacitor + management IC that provides 10s of power supply after external power loss.

The control algorithms independently developed by INEXBOT support standard-configuration robots such as serial multi-joint, parallel multi-joint, SCARA, Cartesian coordinate, and linkage structures, and can also custom-develop special-structure multi-joint robots.

Thanks to INEXBOT's excellent hardware platform and algorithm capabilities, the NRC series control system supports heterogeneous multi-robot collaboration, or synchronized motion and interpolation computation for up to 64 axes.

INEXBOT currently offers a wide range of general-purpose processes including arc welding, TIG welding, laser welding, resistance welding (spot welding), laser cutting, spraying, dispensing, palletizing, and conveyor tracking, and can develop custom processes per user requirements.

Using the NexDroid OpenAPI interface, users can also design and develop their own process systems and human-machine interfaces, and can even implement their own dedicated robot forward/inverse kinematics and trajectory planning algorithms.

INEXBOT control systems have been quality-validated on tens of thousands of industrial robot installations, and their reliability and stability are trusted by customers.

## Product Features

- **X86 computing platform**: Intel X86 architecture processor, strong performance and stable operation
- **Linux RT real-time system**: Runs the Linux RT real-time operating system, ensuring the determinism and real-time performance of motion control
- **Supercapacitor protection**: Provides 10s of power supply after external power loss, preventing data loss
- **Up to 64 synchronized axes**: Supports synchronized interpolation motion of up to 64 axes, meeting the needs of large automation systems
- **Multi-robot collaboration**: One controller can control 4 industrial robots simultaneously, with independent programs and parameters
- **Rich interfaces**: Multiple network ports, 16 DI, 16 DO, RS485/RS232, CAN and other interface configurations
- **Multi-protocol support**: Supports EtherCAT, Profinet, Ethernet/IP, CAN, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU

## Technical Architecture

### Bus-Based Architecture with Excellent Scalability

NRC series robot controllers use EtherCAT and CANopen buses for servo master/slave station connections, supporting synchronized motion of up to 64 axes and widely applied in robot and CNC equipment control. Compared with traditional pulse-control solutions, this greatly reduces system wiring and maintenance costs and offers outstanding scalability.

### Trajectory Optimization, Multi-Robot Collaboration and Secondary Development Support

NRC supports multi-robot collaboration, enabling coordinated control of 4 industrial robots simultaneously, and supports customer secondary development.

## Product Advantages

### Rich Interfaces

The C1201 controller has built-in multiple network ports, digital input/output ports, RS485/232 COM interfaces, and CAN interfaces for convenient connection with user equipment.

### Truly Multi-Robot

Supports one controller controlling 4 robots simultaneously, with each robot's parameters and programs fully independent. In run and remote modes, all robots can be started and stopped synchronously; besides one-to-many support, each robot can be paired with any type of external axis, including floor rails, positioners, and gantries. It also supports a dual-robot collaboration mode that fully synchronizes the start/stop of two robots.

### Built-In General-Purpose Processes

The system has built-in general-purpose processes such as loading/unloading, palletizing, welding, seam tracking, vision, laser cutting, conveyor tracking, collision detection, and drag teaching, and can be customized per user requirements. By using the built-in general-purpose process functions, users can quickly and conveniently implement their required processes.

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| Model | C1201 |
| CPU | Intel Celeron J6412 2.0GHz |
| Memory | 4G |
| Power Supply | 24V (±10%), with supercapacitor + management IC, provides 10s of power after external power loss |
| Operating System | Linux RT |
| Ethernet Ports | 1×EtherCAT, 3×Ethernet |
| USB | 2×USB 3.0 |
| Serial Ports | 1×RS232, 1×RS485, isolated |
| I/O | 16×isolated DI, 16×isolated DO |
| CAN | 2×CAN |
| Encoder | A/B phase differential input, 5V power output, 32-bit signed count, 2 channels |
| PWM | 2-channel output, single-ended, duty cycle 0-100% adjustable, voltage 5V or 24V, frequency up to 2MHz |
| Teach Pendant | (Optional) T30 robot-dedicated teach pendant: 8-inch TFT full touchscreen, Linux+QT |
| Controlled Axes | 64-axis synchronized interpolation motion / serial 6-axis robot + floor rail + 2-axis positioner × 2 |
| Communication Protocols | EtherCAT, Profinet, Ethernet/IP, CAN, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU |
| Operating Modes | Teach mode, playback mode, remote mode |
| Programming Methods | Teach programming, offline programming, drag teaching |
| Motion Functions | Point-to-point, linear, circular arc, spline curve, linear weaving, FLYBY |
| Instruction System | Motion instructions, logic instructions, input/output instructions, arithmetic instructions |
| Position Control Methods | Point-to-point control, continuous trajectory control |
| Coordinate Systems | Joint coordinate system, robot coordinate system, tool coordinate system, user coordinate system |
| Configuration Algorithms | 20+ configurations including 6-axis serial robots |
| Applications | Arc welding, TIG welding, laser welding, resistance welding (spot welding), stamping, loading/unloading, laser cutting, spraying, dispensing, palletizing, conveyor tracking, etc. |

## Product Appearance

![C1201 Product Image](assets/1.png)

![C1201 Product Image 2](assets/2.png)

![C1201 Product Image 3](assets/3.png)

## Dimension Drawing

![C1201 Dimension Drawing](assets/C12011_chicun.png)

## Q&A

**Q: How many axes can the C1201 control at most?**

A: The C1201 supports synchronized interpolation motion of up to 64 axes, meeting the control needs of large automated production lines and multi-robot coordinated systems.

**Q: What is the difference between the C1201 and the C1102?**

A: The C1201 uses an Intel Celeron J6412 processor (X86 architecture), while the C1102 uses an Intel Celeron J1900. Both support synchronized motion of up to 64 axes, but the C1201 has richer interfaces (3 Ethernet vs 1, 2 CAN vs 1) and adds supercapacitor 10s power-loss protection plus encoder and PWM interfaces.

**Q: What is the purpose of the C1201's power-loss protection?**

A: The C1201 has a built-in supercapacitor and management IC. When the external power supply is suddenly interrupted, it can provide up to 10 seconds of backup power, ensuring the control system completes data saving and a safe shutdown, preventing data loss and equipment damage caused by sudden power failure.

**Q: Which robot configurations does the C1201 support?**

A: The C1201 supports various standard-configuration robots including serial multi-joint, parallel multi-joint, SCARA, Cartesian coordinate, and linkage structures, and can also custom-develop special-structure multi-joint robots per user requirements.

**Q: Which process packages are built into the C1201?**

A: The C1201 has built-in general-purpose processes including arc welding, TIG welding, laser welding, resistance welding (spot welding), laser cutting, spraying, dispensing, palletizing, conveyor tracking, seam tracking, vision, collision detection, and drag teaching, and supports custom process development.

**Q: Can the C1201 control multiple robots simultaneously?**

A: Yes. The C1201 supports one controller controlling up to 4 industrial robots simultaneously, with independent parameters and programs for each robot. It also supports a dual-robot collaboration mode that fully synchronizes the start/stop of two robots.

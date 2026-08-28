---
title: "X01 Collaborative Control Cabinet"
description: "Introduction to the INEXBOT X01 collaborative control cabinet: Intel J6412 platform, Linux RT system, selectable 1500W/3000W power consumption, supports 5/6/7-axis collaborative robots."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT", "X01", "Collaborative Control Cabinet", "Collaborative Robot", "Dynamics", "Motion Control"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# X01 Collaborative Control Cabinet

## Product Introduction

The X01 collaborative control cabinet is a high-performance control cabinet launched by INEXBOT for collaborative robot applications. Powered by an Intel J6412 processor and combined with INEXBOT's self-developed control algorithms and dynamics technology, it provides collaborative robots with precise control and smooth drag teaching functionality.

## Product Advantages

### Dynamics Technology

The X01 collaborative control cabinet integrates INEXBOT's self-developed dynamics technology, supporting dynamics-based collision detection and dynamics feedforward functions. Without additional sensors, it achieves millisecond-level collision detection response and significantly improves drag smoothness and trajectory accuracy when the robot operates under load.

### Drag Teaching and Trajectory Replay

Supports drag teaching: operators can directly drag the robot to record motion trajectories, and the system automatically replays them, with smooth trajectory optimization supported — greatly improving teaching efficiency.

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| CPU | Intel Celeron J6412, 2.6 GHz |
| Memory | 4G |
| Power Input | 220V 10A |
| Power Output | 48V |
| Power Consumption | 1500W / 3000W (optional) |
| System | Linux RT |
| Ethernet Ports | 1×EtherCAT, 3×Ethernet |
| USB | 2×USB 3.0 |
| COM | 1×RS232, 1×RS485, isolated |
| I/O | 16×isolated DI, 16×isolated DO, 2AI (0-10V), 2AO (0-10V) |
| CAN | 2×CAN |
| Indicator LEDs | 1×PowerLED, 1×HDDLED, 1×RUNLED, 1×ERR LED |
| Display | 1×HDMI, resolution to 4096×2160@30Hz |
| Mounting Method | Desk-Mount |
| Dimensions | 307mm × 297.20mm × 96.20mm |
| Encoder | A/B phase differential input, 5V power output; 32-bit signed count, 2 channels |
| PWM | 2-channel output, single-ended, duty cycle 0-100% adjustable; voltage 5V or 24V, frequency up to 1MHz |
| WIFI | (Optional) 2.4G WiFi module |
| Teach Pendant | (Optional) T30-X collaborative robot dedicated teach pendant: 8-inch TFT full touchscreen, Linux+QT |
| Communication Protocols | EtherCAT, Profinet, Ethernet/IP, CAN, OPC-UA, FinsTCP, TCP/IP, ModbusTCP, ModbusRTU |
| Operating Modes | Teach mode, playback mode, remote mode |
| Programming Methods | Teach programming, offline programming, drag teaching |
| Coordinate Systems | Joint coordinate system, robot coordinate system, tool coordinate system, user coordinate system |
| Configuration Algorithms | 5/6/7-axis collaborative robots |
| Applications | Arc welding, TIG welding, laser welding, resistance welding (spot welding), stamping, loading/unloading, laser cutting, spraying, dispensing, palletizing, conveyor tracking, etc. |
| Operating Temperature | 0℃ ~ 50℃ (SSD) |
| Storage Temperature | -40 ~ 85℃ |
| Humidity | 5% ~ 95%, non-condensing |
| Vibration | SSD: 5~500Hz, 1.5Grms operation |
| Mechanical Shock | Operation: 10G@11ms; Non-operation: 30G@11ms |
| Net Weight | 6.92Kg |

## Product Interface Diagram

| No. | Content |
| :--- | :--- |
| 1 | Power input interface |
| 2 | Robot aviation connector |
| 3 | DIO |
| 4 | Serial ports, encoder, PWM, analog, CAN |
| 5 | Teach pendant interface |
| 6 | HDMI |
| 7 | Ethernet interface |
| 8 | USB |
| 9 | Status indicator LEDs |

## Dimension Drawings

![X01 Collaborative Control Cabinet Front View](assets/X01正面.png)

![X01 Interface Definition Diagram](assets/未标题-1-01.png)

![X01 Dimension Drawing](assets/尺寸图.png)

## Q&A

**Q: How many axes of robots does the X01 collaborative control cabinet support?**

A: The X01 supports 5-axis, 6-axis, and 7-axis collaborative robots.

**Q: Which power consumption versions are available for the X01?**

A: The X01 offers two power consumption versions — 1500W and 3000W — to meet the needs of different loads and application scenarios.

**Q: What are the communication interfaces of the X01?**

A: The X01 is equipped with 1×EtherCAT, 3×Ethernet, 2×USB 3.0, 1×RS232, 1×RS485 (isolated), 2×CAN, plus 16×isolated DI, 16×isolated DO, 2×AI, and 2×AO.

**Q: Does the X01 support WiFi?**

A: WiFi is optional, supporting a 2.4G WiFi module.

**Q: What is the difference between the X01 and the X01-D02?**

A: The X01 uses an Intel J6412 processor (X86 architecture) at 2.6GHz, with selectable 1500W/3000W power consumption, larger dimensions (307×297×96mm), and a net weight of 6.92kg. The X01-D02 uses a T507 ARM processor, focusing on dynamics technology and low-power design, making it more suitable for collaborative robot scenarios.

**Q: Can a teach pendant be configured with the X01?**

A: Yes. The X01 supports the optional T30-X collaborative robot dedicated teach pendant, featuring an 8-inch TFT full touchscreen running a Linux+QT system.

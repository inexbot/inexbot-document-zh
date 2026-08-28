---
title: "Industrial Robot Controller C2200 Series"
description: "Introduction to the INEXBOT C2200 series industrial robot controllers: integrated self-developed motion control algorithms, supports EtherCAT/CANopen, compatible with multi-brand multi-axis robots."
author: "iNexBot"
date: "2026-03-18"
tags: ["INEXBOT Controller", "C2200", "Industrial Robot", "EtherCAT", "Motion Control"]
category: "Products"
version: "1.0.0"
language: "en-US"
---

# Industrial Robot Controller C2200 Series

## Product Introduction

The INEXBOT C2200 series industrial robot controller is a high-performance motion control unit built on a mature design and development solution, offering rich interfaces and strong anti-interference capability.

The controller integrates INEXBOT's self-developed motion control algorithms, is compatible with robots of multiple brands and models, and offers strong customizability to meet various production needs of enterprises. Its chipset uses an automotive-grade design, providing stable operation and powerful computing capability, making it an ideal choice for industrial applications.

## Product Image

![C2200 Product Image](assets/C2200产品图.png)

## Product Features

- **Self-developed motion control algorithms**: Built-in INEXBOT's self-developed motion control algorithms, compatible with robots of multiple brands and models
- **Automotive-grade chip**: Uses the Allwinner T507 chip (quad-core 1.5GHz), stable and reliable operation
- **Rich interfaces**: 36 IO channels, 8 analog channels, EtherCAT, CANopen, USB, serial ports and more
- **Graphics processing**: Equipped with a G31 GPU, supporting advanced graphics processing capability
- **Power-loss protection**: 3-second UPS power-loss protection prevents data loss
- **Multi-axis synchronization**: Supports synchronized motion control of up to 64 axes

## Product Advantages

### Rich Interfaces

The C2200 controller provides up to 36 digital IO channels, 8 analog channels (4 AI + 4 AO), 2 USB 2.0 ports, 1 CAN 2.0 port, 1 RS485 serial port, and 1 RS232 serial port. It supports multiple communication protocols, meeting external connection needs of different devices with strong scalability.

In addition, it supports high-speed bus interfaces such as EtherCAT and CANopen, enabling servo master/slave station connections and synchronized motion control of up to 64 axes.

The variety and quantity of interfaces allow the C2200 to easily handle various complex industrial automation application scenarios.

### New IO Layout

Compared with traditional competitors in the market, the C2200 optimizes the IO layout, making wiring more intuitive and easier to understand, greatly reducing the difficulty of operation and wiring.

### Powerful Performance

- **Main control chip**: Allwinner T507, 4 cores at 1.5GHz
- **GPU**: G31 graphics processing chip
- **Memory**: 2GB
- **Storage**: 8GB eMMC Flash
- **Operating System**: RT-Linux real-time operating system

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| CPU | Allwinner T507, 4 cores at 1.5GHz |
| GPU | G31 |
| Memory | 2GB |
| Onboard Storage | eMMC Flash 8GB |
| Operating System | RT-Linux |
| Gigabit Ethernet Port | 1 (RTL8211) |
| 100M Ethernet Ports | 2 (RTL8152, IP101GR) |
| USB Interfaces | 2×USB 2.0 |
| Serial Ports | 1×RS232, 1×RS485 |
| Digital Input (DI) | 18 channels, optically isolated |
| Digital Output (DO) | 18 channels, optically isolated |
| Analog Input (AI) | 4 channels (0-10V), 12-bit resolution |
| Analog Output (AO) | 4 channels (0-10V), 12-bit resolution |
| CAN | 1×CAN 2.0 |
| EtherCAT | Supported (high-speed bus) |
| CANopen | Supported (high-speed bus) |
| Power Supply | DC 24V |
| Power Consumption | 4W (excluding external circuits) |
| Power-Loss Protection | 3s UPS power-loss protection |
| Operating Temperature | -10 ~ 60℃ |
| Storage Temperature | -40 ~ 85℃ |

## Product Dimensions

Please refer to the following figure for product dimensions:

![C2200 Product Dimension Drawing](assets/C2200尺寸图.png)

---

## Q&A

**Q: Which motion control instructions does the C2200 controller support?**

A: The C2200 supports MOVJ (point-to-point), MOVL (linear), MOVC (circular arc), MOVCA (full circle), MOVS (curve interpolation), IMOV (incremental), SAMOV (fixed-point move), MOVARCH (gantry motion) and other motion control instructions, and supports linking motion instructions with IO, Modbus and other functions.

**Q: How many axes can the C2200 control?**

A: Through the EtherCAT bus, the C2200 can achieve synchronized motion control of up to 64 axes, supporting multi-robot coordinated operation.

**Q: Which robot types does the C2200 support?**

A: The C2200 supports six-axis serial multi-joint robots, four-axis SCARA robots, parallel robots and other robot types, and provides customized adaptation solutions. For specific supported robot models, please refer to the "Supported Robot Types" document in the technical documentation.

**Q: What is the IO interface configuration of the C2200?**

A: The C2200 comes standard with 18 digital inputs (DI) + 18 digital outputs (DO, optically isolated), plus 4 analog inputs (AI, 0-10V) + 4 analog outputs (AO, 0-10V) with 12-bit resolution.

**Q: Which network communication interfaces does the C2200 controller have?**

A: The C2200 is equipped with 1 Gigabit Ethernet port (RTL8211) and 2 100M Ethernet ports (RTL8152, IP101GR), supporting TCP/IP, Modbus, EtherNet/IP, EtherCAT, CANopen and other industrial communication protocols.

**Q: Which external axis types does the C2200 controller support?**

A: The C2200 supports rotation axes (O1-O5), linear axes (L1-L3) and other external axis types, and supports external axis jog, coordinated motion, speed control, electronic gearing, and following functions. For specific configuration methods, please refer to the "External Axis User Manual".

---
title: "R4C EtherCAT IO Module"
description: "Introduction to the INEXBOT R4C EtherCAT IO module: 16 DI + 16 DO, integrated analog and encoder interfaces, reserved CAN&485 expansion interfaces, multifunctional and customizable."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT", "R4C", "EtherCAT", "IO Module", "Fieldbus", "Customizable"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# R4C EtherCAT IO Module

## Product Introduction

R4C — multifunctional and customizable. The R4C is a high-performance EtherCAT fieldbus distributed IO module launched by INEXBOT, measuring 122×200mm. It supports a 100Mbps bus rate and distributed clock functionality, integrates digital, analog, and encoder interfaces, reserves CAN&485 expansion interfaces, and can be functionally customized per user requirements.

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| Dimensions | 122 × 200mm |
| Bus Rate | 100Mbps |
| Distributed Clock | Supported |
| Power Supply | 24V DC |
| Digital Inputs | 16 inputs, polarity configurable |
| Digital Outputs | 16 outputs (4 relay, 12 MOSFET) |
| Analog Inputs | 2 channels, 0~10V |
| Analog Outputs | 2 channels, 0~10V |
| Encoder | AB-phase counting (differential signal interface) |
| Expansion Interface | Reserved CAN&485 |
| Operating Temperature | 0~60°C |
| Relative Humidity | 95%, non-condensing |
| Communication Cycle | 200us minimum |

## Product Advantages

### Multifunctional

The R4C integrates digital input/output, analog input/output, and encoder interface functions in a single module, satisfying the connectivity needs of various signal types at industrial sites, reducing device variety and simplifying system configuration.

### Customizable

The R4C supports functional customization per user requirements, flexibly adapting to the specific needs of different application scenarios.

### Expandable

The R4C reserves CAN&485 expansion interfaces, making it convenient to connect more external devices via the bus later for system function expansion.

### Reliable Quality

The R4C uses an industrial-grade design, supports 24V DC power, an operating temperature range of 0~60°C, and withstands 95% relative humidity (non-condensing), adapting to complex industrial environments. With a 100Mbps bus rate and a minimum communication cycle of 200us, it ensures high-speed, stable data transmission.

## Product Appearance

![R4C EtherCAT IO Module Product Image](assets/R4io.png)

## Q&A

**Q: What is the difference between the R4C and the R4D?**

A: The R4C and R4D have the same dimensions (122×200mm) and identical digital input/output and analog interface configurations. The main difference is the expansion interface: the R4C reserves a CAN&485 interface (in reserved status), while the R4D is equipped with a formal CAN expansion interface.

**Q: What does the reserved CAN&485 interface on the R4C mean?**

A: The R4C has built-in hardware resources for both CAN and RS485 interfaces, but these two interfaces are not yet fully enabled at the firmware level. Users who need them can contact INEXBOT for custom development. The R4D, on the other hand, has the CAN interface enabled and can be used directly.

**Q: Which EtherCAT functions does the R4C support?**

A: The R4C supports a 100Mbps bus rate and distributed clock (DC) functionality, with a minimum communication cycle of 200us. It can connect with INEXBOT controllers and master station devices that support the standard EtherCAT protocol.

**Q: Which encoder types does the R4C interface support?**

A: The R4C supports AB-phase incremental encoder input using a differential signal interface.

**Q: What are the advantages of the R4C's relay output?**

A: The R4C provides 4 relay outputs. Relays can handle higher load current and voltage than MOSFETs, making them suitable for driving inductive loads such as contactors and solenoid valves.

**Q: What is the operating temperature range of the R4C?**

A: The R4C operating temperature range is 0~60°C, with an even wider storage temperature range, making it suitable for industrial site deployment.

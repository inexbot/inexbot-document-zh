---
title: "R4D EtherCAT IO Module"
description: "Introduction to the INEXBOT R4D EtherCAT IO module: 16 DI + 16 DO, integrated analog, encoder, and CAN expansion interfaces, multifunctional and customizable."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT", "R4D", "EtherCAT", "IO Module", "Fieldbus", "Customizable"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# R4D EtherCAT IO Module

## Product Introduction

R4D — multifunctional and customizable. The R4D is a high-performance EtherCAT fieldbus distributed IO module launched by INEXBOT, measuring 122×200mm. It supports a 100Mbps bus rate and distributed clock functionality, integrates digital, analog, encoder, and CAN expansion interfaces, and can be functionally customized per user requirements.

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
| Expansion Interface | CAN |
| Operating Temperature | 0~60°C |
| Relative Humidity | 95%, non-condensing |
| Communication Cycle | 200us minimum |

## Product Advantages

### Multifunctional

The R4D integrates digital input/output, analog input/output, and encoder interface functions in a single module, satisfying the connectivity needs of various signal types at industrial sites, reducing device variety and simplifying system configuration.

### PWM Interface Added

The R4D supports PWM output, which can be used in applications such as speed control and dimming, expanding the module's application range.

### Customizable

The R4D supports functional customization per user requirements, flexibly adapting to the specific needs of different application scenarios.

### Expandable

The R4D has a built-in CAN expansion interface, supporting connection of more external devices via the CAN bus for system function expansion.

### Reliable Quality

The R4D uses an industrial-grade design, supports 24V DC power, an operating temperature range of 0~60°C, and withstands 95% relative humidity (non-condensing), adapting to complex industrial environments. With a 100Mbps bus rate and a minimum communication cycle of 200us, it ensures high-speed, stable data transmission.

## Product Appearance

![R4D EtherCAT IO Module Product Image](assets/R4D IO板 官网图1.png)

## Q&A

**Q: What is the difference between the R4D and the R4C?**

A: The R4D and R4C have the same dimensions (122×200mm) and identical digital input/output and analog interface configurations. The main difference is the expansion interface: the R4D is equipped with a CAN expansion interface, while the R4C has a reserved CAN&485 interface (the R4C's interfaces are in reserved status, while the R4D's CAN interface is a formal function).

**Q: Which EtherCAT functions does the R4D support?**

A: The R4D supports a 100Mbps bus rate and distributed clock (DC) functionality, with a minimum communication cycle of 200us. It can connect with INEXBOT controllers and master station devices that support the standard EtherCAT protocol.

**Q: Which encoder types does the R4D interface support?**

A: The R4D supports AB-phase incremental encoder input using a differential signal interface.

**Q: Does the R4D support PWM output?**

A: Yes. The R4D has a built-in PWM output interface, which can be used in applications such as speed control and dimming.

**Q: What is the operating temperature range of the R4D?**

A: The R4D operating temperature range is 0~60°C, with an even wider storage temperature range, making it suitable for industrial site deployment.

**Q: Which devices can connect to the R4D's CAN expansion interface?**

A: The R4D's CAN expansion interface can connect to devices supporting CANopen or custom CAN protocols, such as sensors, remote IO expansion modules, and drives.

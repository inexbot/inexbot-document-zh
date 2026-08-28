---
title: "R5B EtherCAT IO Module"
description: "Introduction to the INEXBOT R5B EtherCAT IO module: 16 DI + 20 DO, integrated analog and encoder interfaces, suitable for laser welding and other application scenarios."
author: "iNexBot"
date: "2026-04-27"
tags: ["INEXBOT", "R5B", "EtherCAT", "IO Module", "Fieldbus", "Distributed IO"]
category: "Products"
version: "2.0.0"
language: "en-US"
---

# R5B EtherCAT IO Module

## Product Introduction

The R5B is a high-performance EtherCAT fieldbus distributed IO module launched by INEXBOT. It supports a 100Mbps bus rate and distributed clock functionality, seamlessly connects with INEXBOT controllers and mainstream EtherCAT masters, and delivers high-speed acquisition and output of digital, analog, and encoder signals.

## Product Specifications

| Item | Parameter |
| :--- | :--- |
| Dimensions | 116 × 210.9mm |
| Bus Rate | 100Mbps |
| Distributed Clock | Supported |
| Power Supply | 24V DC |
| Digital Inputs | 16 inputs, polarity configurable |
| Digital Outputs | 20 outputs (16 transistor + 4 relay) |
| Analog Inputs | 2 channels, 0~10V |
| Analog Outputs | 2 channels, 0~10V |
| Encoder | AB-phase counting (differential signal interface) |
| Operating Temperature | 0~60°C |
| Relative Humidity | 90%, non-condensing |
| Communication Cycle | 200us minimum |

## Product Advantages

### Function Partitioning

The R5B uses a modular functional design that independently implements digital input, digital output, analog input, analog output, and encoder interfaces, allowing users to flexibly configure them based on actual requirements.

### Powerful Functionality

The R5B is equipped with 16 digital inputs, 20 digital outputs (4 of which are relay outputs capable of handling higher loads), 2 analog inputs, 2 analog outputs, and an AB-phase encoder interface — comprehensive functionality to meet a wide range of industrial site needs.

### High Stability

The R5B uses an industrial-grade design, supports 24V DC power, an operating temperature range of 0~60°C, and withstands 90% relative humidity (non-condensing), adapting to complex industrial environments. With a 100Mbps bus rate and a minimum communication cycle of 200us, it ensures high-speed, stable data transmission.

## Product Appearance

![R5B EtherCAT IO Module Product Image](assets/R5B.png)

## Q&A

**Q: What is the difference between the R5B and the R4D/R4C?**

A: The R5B has 20 digital outputs (16 transistor + 4 relay), while the R4D/R4C have 16 (4 relay + 12 MOSFET). The R5B measures 116×210.9mm, slightly larger than the R4D/R4C (122×200mm). The R5B is particularly suitable for application scenarios requiring more digital output channels, such as laser welding.

**Q: Which EtherCAT functions does the R5B support?**

A: The R5B supports a 100Mbps bus rate and distributed clock (DC) functionality, with a minimum communication cycle of 200us. It can connect with INEXBOT controllers and master station devices that support the standard EtherCAT protocol.

**Q: Which encoder types does the R5B interface support?**

A: The R5B supports AB-phase incremental encoder input using a differential signal interface.

**Q: What are the advantages of the R5B's relay output?**

A: The R5B provides 4 relay outputs. Compared with transistor and MOSFET outputs, relays can handle higher load current and voltage, making them suitable for driving inductive loads such as contactors and solenoid valves.

**Q: What is the operating temperature range of the R5B?**

A: The R5B operating temperature range is 0~60°C, with an even wider storage temperature range, making it suitable for industrial site deployment.

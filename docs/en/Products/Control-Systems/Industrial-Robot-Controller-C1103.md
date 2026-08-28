---
title: "Industrial Robot Controller C1103"
description: "Introduction to the INEXBOT C1103 industrial robot controller: Intel J1900 quad-core processor, EtherCAT real-time bus, E-BUS modular IO expansion, built-in UPS power-loss protection, DIN rail mounting, designed for complex industrial scenarios."
author: "iNexBot"
date: "2026-06-12"
tags: ["INEXBOT Controller", "C1103", "Industrial Robot", "EtherCAT", "Motion Control", "DIN Rail"]
category: "Products"
version: "1.1.0"
language: "en-US"
---

# INEXBOT C1103 Industrial Robot Controller

# INEXBOT C1103 Industrial Robot Controller

## I. Product Introduction

![C1103 and Module Architecture Diagram](https://api.inexbot.com/uploads/C1103_208ed09e91.png)

The C1103 is a high-performance embedded robot controller developed by INEXBOT for complex industrial scenarios. Within a compact body of 103×97×74.5mm, it integrates an Intel J1900 quad-core processor, an independent EtherCAT real-time bus, and an E-BUS modular IO expansion architecture. A single controller supports synchronized motion of up to 64 axes, can independently control 4 robots, and supports external axes such as floor rails and positioners.

The controller comes with the INEXBOT control system pre-installed, with multiple mature process packages preconfigured at the factory, covering core industrial scenarios such as new energy manufacturing, automotive parts, 3C electronics assembly, and smart logistics.

**Positioning in one sentence:** The C1103 is the upgraded successor to the C1102 — the same X86 computing platform, but with more interfaces, a smaller footprint, stronger expansion, and built-in UPS power-loss protection.

---

## II. Five Core Advantages

### 2.1 E-BUS Modular IO Expansion

The most differentiated hardware feature of the C1103 is its E-BUS expansion capability. Through the E-BUS interface, the controller can seamlessly expand with INEXBOT's AL series IO modules, covering digital IO, analog IO, encoder interfaces, and more. Users can flexibly configure IO combinations based on actual production line needs without replacing controller hardware, greatly reducing deployment and inventory costs.

### 2.2 Built-In UPS · Power-Loss Protection

With a built-in supercapacitor module, it provides **≥5 seconds** of backup power at full load. In the event of an unexpected power failure, the system has time to save critical data and execute a safe shutdown procedure, eliminating data loss and equipment damage. During a sudden power outage, current process parameters, program state, and critical data are automatically saved, and operation can resume from the breakpoint after power is restored, eliminating the risk of scrapped workpieces and production line downtime.

### 2.3 4 Ethernet Ports · Doubled Interface Density

3 Gigabit Ethernet ports + 1 dedicated EtherCAT OUT port (independent RJ45 physical interface) — twice the network connectivity of the C1102. Supports multi-subnet isolated deployment without the need for an additional switch. The EtherCAT uses an independent hardware port that does not occupy a standard network port; the Intel i210 guarantees real-time performance, and dual-master-station solutions are supported.

### 2.4 46% Smaller Volume

Dimensions of only **103×97×74.5mm** (C1102: 230×120×50mm), with a volume of approximately 0.74L vs 1.38L, allowing flexible deployment in cramped control cabinets. Standard DIN-Rail mounting for easy installation and removal. With its palm-sized dimensions, it ranks as compact among products with equivalent computing power.

### 2.5 Optional Interfaces · Flexible Customization

Memory (DDR3L 2/4/8GB), M.2 storage (64G~1TB), and 4G/5G wireless modules can all be configured as needed. The M.2 expansion slot supports WiFi/3G/4G/5G modules, meeting networking and remote O&M requirements.

---

## III. Detailed Technical Specifications

| Category | Parameter | Description and Advantages |
|:---|:---|:---|
| Processor | Intel Celeron J1900, 2.0GHz, 4 cores 4 threads, 2MB L2 Cache, TDP 10W | X86 architecture, fanless design, low power consumption with high performance. Same platform as the C1102, minimal software/firmware changes |
| Memory | DDR3L 4GB (standard), SO-DIMM slot, supports up to 8GB | 4GB standard meets the vast majority of motion control applications. Expandable to 8GB later for complex tasks |
| Storage | eMMC 64GB (onboard) + M.2 2242 SATA expansion | Onboard eMMC has better vibration resistance than mSATA; the M.2 slot can accommodate 128G~1TB storage or 4G/5G modules (SIM card supported) |
| Ethernet | LAN1: EtherCAT OUT (independent RJ45), LAN2: Intel i210-AT Gigabit, LAN3/4: RTL8111H Gigabit | EtherCAT uses an independent hardware port that does not occupy standard network ports. Intel i210 guarantees real-time performance, dual-master-station solutions supported |
| Serial Ports | 2×RS485 (COM1/COM2), 2×RS232 (COM3/COM4), up to 115.2kbit/s | 4 serial ports, double the interfaces of the C1102 (2 serial ports). Supports simultaneous connection of HMI, VFDs, barcode scanners, sensors, etc. |
| E-BUS | E-BUS high-speed expansion bus, expandable with AL series IO modules (13 models) | Supports digital I/O, analog I/O, temperature acquisition, and encoder input. Hot-swappable plug-and-play, modular assembly saves cabinet space |
| Display | HDMI, 1920×1080@60Hz | HDMI digital interface delivers better image quality than the C1102's VGA analog interface. Direct connection to mainstream industrial displays/touchscreens |
| USB | 3×USB 2.0 | Meets connectivity needs for conventional USB peripherals such as keyboards, mice, USB drives, and dongles |
| Power | DC 24V (-15%/+20%), overcurrent/overvoltage/reverse-polarity protection, built-in UPS supercapacitor (≥5s at full load) | Comprehensive industrial-grade power protection; the UPS supercapacitor is a core differentiating feature not available on the C1102 |
| Mechanical | 103×97×74.5mm, 1.5kg, DIN-Rail IEC 60715 mounting | Palm-sized dimensions, compact among products with equivalent computing power. Standard rail mounting, compatible with mainstream control cabinets |
| Environment | Operating: -20℃~60℃, Storage: -40℃~80℃, 95% humidity, 3Grms vibration, 30G shock | Wide temperature range covers extreme cold and heat environments, with reliability metrics comparable to military-grade. CE/FCC Class A certified |
| Operating System | Windows 7/10, Ubuntu, Debian | Full coverage of mainstream operating systems. Fully compatible with the C1102 software ecosystem, extremely low migration cost |

---

## IV. Additional Modules

| Model      | Category    | Description                                |
| ------- | ----- | --------------------------------- |
| AL-1219 | Digital Input  | 16\*DI,24V DC,PNP/NPN,3ms filter       |
| AL-1229 | Digital Input  | 16\*DI,24V DC,PNP/NPN,10us filter      |
| AL-2019 | Digital Output  | 16\*DO,24V DC,PNP,0.5A            |
| AL-2319 | Digital Output  | 16\*DO,24V DC,NPN,0.5A            |
| AL-3238 | Analog Input  | 8\*AI,±10V,16bit,differential signal             |
| AL-3438 | Analog Input  | 8\*AI,0-20mA,16bit,differential signal           |
| AL-3538 | Analog Input  | 8\*AI,4-20mA,16bit,differential signal           |
| AL-3608 | Temperature Input  | 8\*Analog Input,TC,16bit,2-wire      |
| AL-3614 | Temperature Input  | 4\*Analog Input,RTD,16bit,4-wire     |
| AL-4228 | Analog Output  | 8\*AO, ±10V, 16bit, single-ended output          |
| AL-4428 | Analog Output  | 8\*AO, 0-20mA, 16bit, single-ended output        |
| AL-4528 | Analog Output  | 8\*AO, 4-20mA, 16bit, single-ended output        |
| AL-5002 | Encoder Input | 2\*ENC, Inc(A/B/Z), RS422, differential encoder signals |

---

## V. Dimension Drawing

![C1103 Dimension Drawing](https://www.inexbot.com/api/cms-assets/uploads/C1103_2_D_V1_0_0_00_0c8aeea54c.png)

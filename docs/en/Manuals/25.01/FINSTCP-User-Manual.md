---
title: "FINSTCP User Manual"
description: "FINSTCP function user manual, including FINSTCP instructions, parameter settings, function usage and other detailed descriptions."
author: "jmz-09"
date: "2026-06-24"
tags: ["Teach Pendant", "FINSTCP", "Communication", "PLC"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# FINSTCP User Manual

## FINSTCP Instructions

### FINSTCP_OPEN - Open FINSTCP Connection

This instruction is used to open a FINSTCP communication connection in run mode. The process number binding is the FINSTCP parameter process number.

![](./assets/nqfqxxlwtttbwahtwwoyl.png)

### FINSTCP_CLOSE - Disconnect FINSTCP Connection

This instruction is used to disconnect the FINSTCP communication connection in run mode. The process number binding is the FINSTCP parameter process number.

![](./assets/xocpjhqf3k61xqa-8gq7u.png)

### FINSTCP_CONNECTION_STATUS - Get FINSTCP Connection Status

This instruction stores the FINSTCP connection status in a BOOL/GBOOL variable. The FINSTCP connection status is determined by reading the variable value. The status is retrieved each time this instruction is executed.

![](./assets/fisulobq8ahhht9dds-gd.png)

## FINSTCP Parameters

![](./assets/ymm4uh2umf_q8ofhyk5py.png)

| Parameter | Description |
| :--- | :--- |
| Process Number | A total of 9 process numbers are available. (The process numbers within this function are not usable; regardless of which process number is selected, only one set of filled parameters takes effect) |
| Connection | After FINSTCP setup is complete, the connection button needs to be turned on. This connection button can also be opened and closed through the FINSTCP_OPEN and FINSTCP_CLOSE instructions. The connection status can be viewed in the communication status on the right side. |
| IP | PLC device IP address |
| Port | PLC device port |
| PLC Write Address | PLC write address, used by PLC to read data from the controller |
| PLC Read Address | PLC read address, used by the controller to read data written by the PLC |
| Controller Write Address | Data read by PLC from the controller and written into the PLC. This value can be modified on the teach pendant. |
| Controller Read Address | The controller reads data written by the PLC and stores it in the controller's global Boolean variables and global integer variables. This value cannot be modified through the teach pendant; it can be written via CX-Programmer software. |

Note: The PLC write address and read address values cannot be set to the same value. Similarly, the variables in the controller's write address and read address cannot be the same.

## FINSTCP Function Usage

FINSTCP function overview: The FINSTCP function enables data exchange between the controller and the PLC.

Note: This function is only compatible with Omron PLCs.

### Usage Flow

Example description:

1. Connect PLC, controller, and computer — set FINSTCP parameters — open CX-Programmer software for write and read operations

2. Connect PLC, controller, and computer. Use an Ethernet cable to connect the PLC, controller, and computer. The computer needs to have CX-Programmer software installed.

3. Set FINSTCP parameters in "Settings — Modbus Settings — FINSTCP Parameters".

Enter the PLC address 192.168.1.10 for the IP address, enter the PLC port 9600 for the port, enter 1000 in the PLC memory of CX-Programmer software for the write address, enter 2000 in the PLC memory of CX-Programmer software for the read address. Set GB001 and GI001 for the write address, set GB500 and GI500 for the read address.

![](./assets/qn_wueqlhzez8dyp5ebiu.png)

### FINSTCP Parameter Description

| Parameter | Description |
| :--- | :--- |
| Connection | After FINSTCP setup is complete, the connection button needs to be turned on. This connection button can also be opened and closed through the FINSTCP_OPEN and FINSTCP_CLOSE instructions. The connection status can be viewed in the communication status on the right side. |
| IP | PLC device IP address |
| Port | PLC device port number |
| Write Address | PLC memory 1000 of CX-Programmer software. Starting from GB001, sub-units are written sequentially from CX-Programmer software. The first 16 Boolean variables are filled by reading the controller's status. Starting from GI001, units are written sequentially from CX-Programmer software. The first 6 integer variables are the robot's current Cartesian coordinate values, and the remaining values are the controller's own values. All these values are obtained by CX-Programmer software from the controller. |
| Read Address | PLC memory 2000 of CX-Programmer software. Starting from GB500, the variable values are written by CX-Programmer software. The first 16 variables are written to control the controller. Starting from GI500, the values are written by CX-Programmer software. These values can only be written via CX-Programmer software. |

Note: One unit = 16 sub-units. Sub-units are written into Boolean variables, and units are written into integer variables.

### CX-Programmer Software Operation

Open CX-Programmer software, click File, select New. The popup content does not need to be modified — click OK. Double-click Memory to open the memory interface, then double-click D to open a table interface. Click the Monitor button and the table will display values. Enter 1000 for the start address, click Binary, and the table values represent sub-unit values. After the controller and PLC are connected, the values under 9 in the table will continuously toggle between 1 and 0. Click Signed Decimal and the table values represent unit values. When writing from CX-Programmer software, you need to turn off the Read-Only button on the new interface, then you can write values from the software.

### Controller Write Address and Read Address Value Description

#### Global Boolean Variables in Controller Write Address

| Variable Range | Description |
| :--- | :--- |
| First 128 variables | Values read by the PLC from the controller |
| Variables 1–16 | Values obtained based on the controller's status, as follows: <br>- Variable 2: 1 when the controller is in run mode, otherwise 0 <br>- Variable 3: 1 when the controller is in remote mode, otherwise 0 <br>- Variable 4: 1 when the controller servo is ready, otherwise 0 <br>- Variable 6: 1 when the controller is in emergency stop, otherwise 0 <br>- Variable 8: 1 when a program is running in the controller, otherwise 0 <br>- Variable 9: 1 when a program is paused in the controller, otherwise 0 <br>- Variable 10: Toggles between 1 and 0 after the controller establishes communication with the PLC (indicating successful connection) <br>- Variable 11: 1 when the controller is connected to the PLC (does not change) <br>- Variable 12: 1 when the controller is in teach mode, otherwise 0 |
| Variables 16–128 | Values of the controller's own global Boolean variables, also read by the PLC. These variable values can be directly modified and filled via the teach pendant. |

#### Global Integer Variables in Controller Write Address

| Variable Range | Description |
| :--- | :--- |
| Variables 1–6 | Represent the robot's coordinate position values |
| Variables 6–40 | Display the controller's global integer variable values. These variable values can be modified and filled via the teach pendant. |

#### Global Boolean Variables in Controller Read Address

| Variable Range | Description |
| :--- | :--- |
| First 128 variables | Values written by the PLC |
| Variable 2 | When the PLC writes 1, the controller servo becomes ready (if this value is not changed back to 0, the controller will remain in servo-ready state) |
| Variable 4 | When the PLC writes 1, the controller's main program starts running (the controller must be in run mode) |
| Variable 5 | When the PLC writes 1, the controller's main program run is paused (the controller must be in run mode) |
| Variable 7 | When the PLC writes 1, the controller's alarm bar is cleared, with the same effect as the clear error button |

#### Global Integer Variables in Controller Read Address

| Variable Range | Description |
| :--- | :--- |
| First 81 variables | Values written by the PLC. These values need to be modified and filled via the PLC. |

## Q&A for Retrieval

**Q: What is the function of the FINSTCP_OPEN instruction?**

A: The FINSTCP_OPEN instruction is used to open a FINSTCP communication connection in run mode. The process number binding is the FINSTCP parameter process number.

**Q: What is the function of the FINSTCP_CLOSE instruction?**

A: The FINSTCP_CLOSE instruction is used to disconnect the FINSTCP communication connection in run mode. The process number binding is the FINSTCP parameter process number.

**Q: What is the function of the FINSTCP_CONNECTION_STATUS instruction?**

A: The FINSTCP_CONNECTION_STATUS instruction stores the FINSTCP connection status in a BOOL/GBOOL variable. The FINSTCP connection status is determined by reading the variable value. The status is retrieved each time this instruction is executed.

**Q: Which PLC is the FINSTCP function compatible with?**

A: The FINSTCP function is only compatible with Omron PLCs.

**Q: How many process numbers are available for FINSTCP?**

A: A total of 9 process numbers are available. However, the process numbers within this function are not usable; regardless of which process number is selected, only one set of filled parameters takes effect.

**Q: What is the difference between the PLC write address and read address?**

A: The PLC write address is used by the PLC to read data from the controller; the PLC read address is used by the controller to read data written by the PLC. The two values cannot be set to the same.

**Q: What is the difference between the controller write address and read address?**

A: The controller write address stores data read by the PLC from the controller and written into the PLC — this value can be modified on the teach pendant. The controller read address is used by the controller to read data written by the PLC, storing it in the controller's global Boolean and integer variables — this value cannot be modified through the teach pendant.

**Q: How many sub-units equal one unit?**

A: One unit = 16 sub-units. Sub-units are written into Boolean variables, and units are written into integer variables.

**Q: What do the first 16 global Boolean variables in the controller write address represent?**

A: The first 16 global Boolean variables in the controller write address obtain values based on the controller's status, including run mode, remote mode, servo ready, emergency stop, program running, program paused, communication connection status, teach mode, and other states.

**Q: What is the function of the 2nd global Boolean variable in the controller read address?**

A: When the PLC writes 1 to the 2nd global Boolean variable in the controller read address, the controller servo becomes ready. If this value is not changed back to 0, the controller will remain in servo-ready state.

**Q: What is the function of the 4th global Boolean variable in the controller read address?**

A: When the PLC writes 1 to the 4th global Boolean variable in the controller read address, the controller's main program starts running (the controller must be in run mode).

**Q: What is the function of the 5th global Boolean variable in the controller read address?**

A: When the PLC writes 1 to the 5th global Boolean variable in the controller read address, the controller's main program run is paused (the controller must be in run mode).

**Q: What is the function of the 7th global Boolean variable in the controller read address?**

A: When the PLC writes 1 to the 7th global Boolean variable in the controller read address, the controller's alarm bar is cleared, with the same effect as the clear error button.

**Q: What do the first 6 global integer variables in the controller write address represent?**

A: The first 6 global integer variables in the controller write address represent the robot's coordinate position values.

**Q: How do I use CX-Programmer software for write operations?**

A: Open CX-Programmer software, click File and select New. Double-click Memory to open the memory interface, double-click D to open the table interface, click the Monitor button, turn off the Read-Only button on the new interface, then you can write values from the software.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-24 | Initial version | jmz-09 |

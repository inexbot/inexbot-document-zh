---
title: "EIP Function Operation Guide"
description: "EtherNet/IP function operation guide, including EIP main interface parameters, settings interface, custom port configuration, and other detailed instructions."
author: "jmz-09"
date: "2026-07-01"
tags: ["Teach Pendant", "EIP", "EtherNet/IP", "Communication", "PLC"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# EIP Function Operation Guide

## EIP Main Interface

![](./assets/g-22c-htb45a_tom9uzcl.png)

| Parameter | Description |
| :--- | :--- |
| Connection Switch | When enabled, the controller can be detected by the PLC |
| Communication Status | Based on whether the controller and PLC are connected, status is either Connected or Disconnected |
| Write Length | Maximum 256 bits, minimum 16 bits (the first 16 ports have specific functions; see EIP.xlsx for details) |
| Read Length | Maximum 256 bits, minimum 16 bits (the first 16 ports have specific functions; see EIP.xlsx for details) |
| Scan Cycle | Controller scan interval; should be less than the RIP set on the PLC side |
| Timeout Cycle | Range: 100–1000ms |
| Local IP | Controller IP address, automatically detected, cannot be manually entered |
| Network Port | Selects the network port for EIP communication. For multi-port devices (two or more ports), it is recommended to separate EIP communication from the teach pendant network port |
| Local Write | Writes certain local statuses to the PLC. Data is stored sequentially in global Boolean variables starting from GB001. The starting variable can be customized, but the variable length must be greater than or equal to the write length |
| Local Read | PLC writes to the controller, stored sequentially in global Boolean variables starting from GB257. The starting variable can be customized, but the variable length must be greater than or equal to the write length |

![](./assets/rknqj074clf_ptvvzl97s.png)

![](./assets/ey50rwntqwbvt1lka9niy.png)

> Note: Local read and write variables cannot overlap, and variable numbers must be greater than the write length or read length.

## Settings Interface

### Settings Interface — Output Interface

![](./assets/6rdi8btfcqlyejruuntr_.png)

**Output Interface:** Writes values to the PLC, corresponding to the Input Data section in AutoShop software.

![](./assets/3vu7maeth2xh3guxjqnwj.png)

| Parameter | Description |
| :--- | :--- |
| Sequence Number | Currently only 10 groups |
| Group Type | Currently includes 1-channel output, 4-channel output, 8-channel output, 12-channel output, 16-channel output |
| Value Storage | Stores the value portion into global integer variables and global floating-point variables |
| Enable | The function only takes effect when the switch is on; otherwise, it does not take effect |

#### Output Group Type Details

| Group Type | Grouping Description | Total Groups | Group Number Start | Value Range |
| :--- | :--- | :--- | :--- | :--- |
| 1-channel output | One port per group | 256 groups | Starting from 17 (first 16 ports have functions) | 0 or 1 |
| 4-channel output | 4 ports per group | 64 groups | Starting from 5 (first 16 ports have functions) | 0–15 |
| 8-channel output | 8 ports per group | 32 groups | Starting from 3 (first 16 ports have functions) | 0–255 |
| 12-channel output | 12 ports per group | ~22 groups | Starting from 2 (first 16 ports have functions) | 0–4095 |
| 16-channel output | 16 ports per group | 16 groups | Starting from 2 (first 16 ports have functions) | 0–65535 |

> Note: Ports occupied by each output channel must not be the same; otherwise, the value of the lower sequence number will be overwritten by the higher sequence number.

### Settings Interface — Input Interface

![](./assets/0aki9wbynrkaevabu9wks.png)

**Input Interface:** Written from the PLC to the controller, corresponding to the Output Data section in AutoShop software.

![](./assets/j1pwxjmgpysrdee9ye5qx.png)

| Parameter | Description |
| :--- | :--- |
| Sequence Number | Currently only 10 groups |
| Group Type | Currently includes 1-channel input, 4-channel input, 8-channel input, 12-channel input, 16-channel input |
| Value Storage | Stores the value portion into global integer variables or global floating-point variables |
| Enable | The function only takes effect when the switch is on; otherwise, it does not take effect |

#### Input Group Type Details

| Group Type | Grouping Description | Total Groups | Group Number Start | Value Range |
| :--- | :--- | :--- | :--- | :--- |
| 1-channel input | One port per group | 256 groups | Starting from 17 (first 16 ports have functions) | 0 or 1 |
| 4-channel input | 4 ports per group | 64 groups | Starting from 5 (first 16 ports have functions) | 0–15 |
| 8-channel input | 8 ports per group | 32 groups | Starting from 3 (first 16 ports have functions) | 0–255 |
| 12-channel input | 12 ports per group | ~21 groups | Starting from 2 (first 16 ports have functions) | 0–4095 |
| 16-channel input | 16 ports per group | 16 groups | Starting from 2 (first 16 ports have functions) | 0–65535 |

> Note: For value storage on the input and output interfaces, variables must not be the same to avoid data being overwritten.

## Custom First 16 Ports Configuration

The first 16 ports can be customized by modifying the EthernetIP-IOset.json file in the config folder under the robot directory in the backend.

![](./assets/f64fofd0oylp0p3jyof5q.png)

The number after the code represents the port.

### Input Port Functions (PLC → Controller)

| Function Name | Port Number | Description |
| :--- | :--- | :--- |
| start1 | 1 | Start 1 |
| start2 | 2 | Start 2 |
| pause | 3 | Pause |
| stop | 4 | Stop |
| emergency stop1 | 5 | Emergency Stop 1 |
| emergency stop2 | 6 | Emergency Stop 2 |
| clean error | 7 | Clear Error |
| safety curtain1 | 8 | Safety Light Curtain 1 |
| safety curtain2 | 9 | Safety Light Curtain 2 |
| clean breakpoints | 10 | Clear Breakpoints |
| programselect1 | 12 | Program 1 |
| programselect2 | 13 | Program 2 |
| programselect3 | 14 | Program 3 |
| programselect4 | 15 | Program 4 |
| programselect5 | 16 | Program 5 |

### Output Port Functions (Controller → PLC)

| Function Name | Port Number | Description |
| :--- | :--- | :--- |
| power state | 1 | Power State |
| robot run | 2 | Robot Running State |
| robot pause | 3 | Robot Stopped State |
| robot stop | 4 | Robot Paused State |
| emergency stop1 state | 5 | Emergency Stop 1 State |
| emergency stop2 state | 6 | Emergency Stop 2 State |
| error state | 7 | Error Notification |
| program state1 | 12 | Program 1 Output |
| program state2 | 13 | Program 2 Output |
| program state3 | 14 | Program 3 Output |
| program state4 | 15 | Program 4 Output |
| program state5 | 16 | Program 5 Output |

## AI Q&A for Retrieval

**Q: What is the purpose of the connection switch in the EIP function?**

A: When the connection switch is enabled, the controller can be detected by the PLC.

**Q: What are the EIP communication status types?**

A: Based on whether the controller and PLC are connected, communication status is either Connected or Disconnected.

**Q: What is the range of EIP write length and read length?**

A: Write length maximum is 256 bits, minimum 16 bits; read length maximum is 256 bits, minimum 16 bits. The first 16 ports have specific functions.

**Q: What should I pay attention to when setting the EIP scan cycle?**

A: The scan cycle is the controller's scan interval and should be less than the RIP set on the PLC side.

**Q: What is the range of the EIP timeout cycle?**

A: The timeout cycle range is 100–1000ms.

**Q: How do I set the EIP local IP?**

A: The local IP is the controller's IP address, automatically detected, and cannot be manually entered.

**Q: What should I pay attention to when setting the network port on multi-port EIP devices?**

A: For multi-port devices (two or more ports), it is recommended to separate EIP communication from the teach pendant network port.

**Q: What are the starting positions for EIP local write and local read variables?**

A: Local write data is stored sequentially in global Boolean variables starting from GB001; local read starts from GB257. The starting variable can be customized, but the variable length must be greater than or equal to the write length.

**Q: What should I pay attention to regarding EIP local read/write variables?**

A: Local read and write variables cannot overlap, and variable numbers must be greater than the write length or read length.

**Q: What is the purpose of the EIP settings interface output section?**

A: The output section writes values to the PLC, corresponding to the Input Data section in AutoShop software.

**Q: What is the purpose of the EIP settings interface input section?**

A: The input section is written from the PLC to the controller, corresponding to the Output Data section in AutoShop software.

**Q: What group types are available on the EIP output interface?**

A: Currently there are 5 group types: 1-channel, 4-channel, 8-channel, 12-channel, and 16-channel output.

**Q: What should I pay attention to regarding port occupation for each EIP output channel?**

A: Ports occupied by each output channel must not be the same; otherwise, the value of the lower sequence number will be overwritten by the higher sequence number.

**Q: What should I pay attention to regarding value storage variables on the EIP input/output interfaces?**

A: For value storage on the input and output interfaces, variables must not be the same to avoid data being overwritten.

**Q: How do I customize the first 16 EIP ports?**

A: The first 16 ports can be customized by modifying the EthernetIP-IOset.json file in the config folder under the robot directory in the backend.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-07-01 | Initial version | jmz-09 |

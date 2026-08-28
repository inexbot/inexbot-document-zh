---
title: "Communication Protocols and Address Codes"
description: "Description of the communication protocols supported by INEXBOT controllers, covering configuration methods for Modbus, TCP/IP, EtherCAT, CANopen, OPC-UA, and other protocols, plus common register address mappings."
author: "iNexBot"
date: "2026-03-18"
tags: ["INEXBOT Controller", "Communication Protocol", "Modbus", "TCP", "EtherCAT", "CANopen", "Address Code", "Register"]
category: "Technical"
version: "1.0.0"
language: "en-US"
---

# Communication Protocols and Address Codes

## Overview

INEXBOT C2200 series controllers support a variety of industrial communication protocols, facilitating integration with PLCs, vision systems, host computers, and other devices. The controller has built-in standard protocol stacks, and device interconnection can be quickly achieved through configuration.

## Supported Communication Protocols

### Modbus RTU / Modbus TCP

Modbus is one of the most widely used communication protocols in industry. INEXBOT controllers support both Modbus RTU (serial) and Modbus TCP (Ethernet).

**Typical application scenarios:**

- Communication with PLCs (reading IO status, writing control commands)
- Communication with VFDs (speed reference, operating status)
- Communication with sensors (data acquisition)

**Common register addresses:**

| Address | Function | Read/Write |
| :--- | :--- | :--- |
| 0x0000~0x001F | Digital input DI status (one DI per bit) | Read-only |
| 0x0100~0x011F | Digital output DO status (one DO per bit) | Read/Write |
| 0x0200~0x02FF | Analog input AI values | Read-only |
| 0x0300~0x03FF | Analog output AO values | Read/Write |
| 0x1000~0x100F | Global variables GI001~GI016 | Read/Write |
| 0x1100~0x110F | Global variables GD001~GD016 | Read/Write |
| 0x2000~0x200F | Robot running status (running=1/stopped=0) | Read-only |
| 0x2001 | Alarm status (no alarm=0/alarm present>0) | Read-only |

> **Note**: The above addresses are representative. For the specific address mapping, please refer to the Modbus address mapping table shipped with the controller. Addresses may differ across software versions.

### TCP/IP Custom Protocol

INEXBOT controllers support TCP/IP communication, enabling data exchange with any TCP-capable device through instructions such as SENDMSG and PARSEMSG.

**Communication configuration:**

1. Configure the TCP process ID in "Settings" - "Network Settings".
2. Set the IP address, port number, and communication parameters.
3. Use the OPENMSG instruction to establish a connection and the CLOSEMSG instruction to close it.

**Common instructions:**

| Instruction | Function |
| :--- | :--- |
| OPENMSG | Opens a TCP connection |
| CLOSEMSG | Closes a TCP connection |
| SENDMSG | Sends string data, supports variable insertion |
| PARSEMSG | Parses received data and stores it in variables |
| READCOMM | Reads point data into position variables |

**Data format:**

Send format: `$variable name$` represents a variable value, `$$` represents the character `$`.

Example: `SENDMSG ID=1 #$D001#` sends the value of variable D001.

### EtherCAT

EtherCAT is a high-speed real-time industrial Ethernet bus used for motion control communication between the controller and servo drives.

- **Communication rate**: 100Mbps (high-speed real-time)
- **Synchronization accuracy**: < 1µs
- **Axis support**: Up to 64 axes

### CANopen

CANopen is a standard communication protocol based on the CAN bus, suitable for medium-speed motion control scenarios.

- **Communication rate**: Up to 1Mbps
- **Protocol standard**: CiA 402 (motion control)

### EtherNet/IP

EtherNet/IP is a general-purpose industrial Ethernet protocol that facilitates integration with mainstream PLC systems such as Allen-Bradley and Siemens.

- **Adapter mode**: The controller acts as an EtherNet/IP slave
- **Explicit messaging**: Supports standard CIP explicit message communication
- **Configuration method**: Configured via EDS files

### OPC-UA

OPC-UA (Open Platform Communications Unified Architecture) is a new-generation industrial communication standard supporting cross-platform, secure, and reliable data exchange.

INEXBOT controllers support OPC-UA server mode, allowing external devices to read controller status and write control commands via OPC-UA.

## Communication Configuration Steps

### Modbus TCP Configuration

1. Add a Modbus TCP process ID in the teach pendant under "Settings" - "Network Settings".
2. Configure the IP address and port number (default 502).
3. Set the communication timeout parameters.
4. Test the connection to confirm read/write operations work properly.

### TCP Custom Protocol Configuration

1. Add a TCP process ID in the teach pendant under "Settings" - "Network Settings".
2. Configure the target device's IP address and port.
3. Write a program using OPENMSG to establish the connection.
4. Use SENDMSG/PARSEMSG for data exchange.

## Common Issues

1. **Modbus communication failure**: Check that the IP address and port are correct; confirm the firewall is not blocking communication; check the network cable connection.
2. **Unstable TCP connection**: Add a heartbeat mechanism to periodically send data and keep the connection alive; handle connection timeouts and disconnections.
3. **Data parsing errors**: Confirm that the data format on the sending and receiving ends is consistent (string/binary/delimiter).

---

## Q&A

**Q: Which communication protocols do INEXBOT controllers support?**

A: They support Modbus RTU (serial), Modbus TCP (Ethernet), TCP/IP custom protocol, EtherCAT (high-speed motion control), CANopen, EtherNet/IP, and OPC-UA, among other industrial communication protocols.

**Q: How do I read the robot's running status via Modbus?**

A: Read the specific register address via Modbus TCP. The robot running status (running/stopped) is typically at address 0x2000, and the alarm status at 0x2001. For the specific address mapping, please refer to the Modbus address mapping table shipped with the controller.

**Q: Does the controller act as a TCP server or client?**

A: By default, it acts as a client (actively connecting to the target device). It can also be configured in server mode to wait for external devices to connect.

**Q: What is the difference between EtherCAT and regular Ethernet?**

A: EtherCAT is a real-time industrial Ethernet designed specifically for motion control, with a communication rate of 100Mbps and synchronization accuracy of < 1µs, supporting high-speed synchronized control of up to 64 axes. Regular Ethernet (such as TCP/IP) is used for non-real-time data exchange and has lower priority than EtherCAT communication.

**Q: How do I implement data exchange between the controller and a vision system?**

A: Communication with the vision system can be achieved via the TCP custom protocol or Modbus TCP. After the vision system identifies the target position, it sends the point coordinates via TCP; the controller receives them and uses POSSET-type instructions to update the target position, enabling vision-guided grasping.

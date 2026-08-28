---
title: "TCP Communication Function Manual"
description: "TCP communication function user manual, including TCP communication parameter settings, network communication instructions, external transfer points and other detailed descriptions."
author: "jmz-09"
date: "2026-06-24"
tags: ["Teach Pendant", "TCP Communication", "Network Communication", "Instructions"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# TCP Communication Function Manual

## TCP Communication

### TCP Communication Parameters

When communicating with external devices, you can choose TCP communication. Click "Settings — External Communication — TCP Communication Settings" to enter the communication parameter settings interface.

![](./assets/euiiyuwubvrfl-3mfvfoe.png)

| Parameter | Description |
| :--- | :--- |
| Process Number | Supports 9 process numbers |
| Connection Switch | For client: gray means disconnected, green means connected. For server: gray means connection closed, green means connection open. |
| Mode | Controller acts as server or client. When the controller is client or server, different process numbers can be used to communicate and send/receive data with multiple external devices. <br><br> Note: When the controller is a client connecting multiple process numbers to multiple server devices, the IP and port between process numbers cannot be the same. When the controller is a server connecting multiple process numbers to multiple client devices, the ports cannot be the same. |
| IP | When the connection mode is server, this is the controller IP and does not need to be modified. When the connection mode is client, the controller acts as client and this IP is the external communication device's IP. |
| Port | When the mode is server, this is the local listening port for client connections. When the mode is client, this is the server port to connect to. |
| Frame Header | During data communication, the frame header when the controller receives messages from external devices. Can be modified. |
| Separator | During data communication, the separator when the controller receives messages from external devices. Can be modified. |
| End Character | During data communication, the end character when the controller receives messages from external devices. Can be modified. |
| Base | Parse incoming decimal or hexadecimal data as decimal for output. |
| Send Data | Send data to the other party. |
| Receive Data | Display received data. |

Note: When hexadecimal is selected, after executing the parse instruction, data is parsed as decimal into the selected variable. For example, if the external communication device sends data (@,123,100,120,!) with three data values, they are parsed as decimal (291, 256, 288) for output.

![](./assets/ad1c7yz8ukzmufrvztbea.png)

Note: When establishing a TCP connection, first set the controller IP and external device IP to the same subnet, e.g. 192.168.1.xxx. If the controller is set as client, the external device is the server. Then set the IP and port in the network settings to match the IP and port in the external device's network debugging software. Turn on the connection switch and a connection success message will appear.

## Network Communication Instructions

### SENDMSG - Send Data

![](./assets/wiv1_tphzrezxt3au-tfe.png)

Format: `SENDMSG [Instruction Name] ID=1 [Process Number] #DATA# [Data to Send]`

Function: This instruction is used to send data to a connected external device. By selecting the corresponding process number, strings and variables can be sent. Strings and variables can be sent in combination. When sending messages to external devices through this instruction, the frame header, separator, and end character set in the "Settings — TCP Communication Settings" interface must be used.

Note: If you want to send a variable, add `$` before the variable.

| Parameter | Description |
| :--- | :--- |
| ID | Process number for TCP communication connection |
| Send Character | Send data to the connected network device. Can send string-format data or variable values. <br><br> To send a variable, add a `$` symbol before the target variable. For example: SENDMSG ID = 1 #$D001#. If the target variable D001 has a value, the network side receives the variable value when the send instruction is executed. If the target variable D001 has no value, the network side receives 0. |

Example:

```
1. NOP
2. OPENMSG ID= 1
3. SET D001 = 12.23
4. SENDMSG ID = 1 #$D001#
5. CLOSEMSG ID = 1
6. END
```

Example description: After TCP communication is successful, send the variable value of D001 to the external communication device.

### PARSEMSG - Parse Data

![](./assets/xbmutzvuk-0lqicfjipw0.png)

Format: `PARSEMSG [Instruction Name] ID=1 [Process Number] I001 [First Variable for Data Storage] CLEARCACHE=0 [Clear Cache: "0" no, "1" yes] 0 [Extract Data Count: "0" don't record, "1" record]`

Function: This instruction parses a set of data received from an external device and stores the data into multiple variables.

| Parameter | Description |
| :--- | :--- |
| ID | Process number for TCP communication connection |
| First Variable for Data Storage | Store the queried data into variables. Supported variable types: integer, float, string. <br><br> For example: If TCP receives multi-digit values A, B, C and the first variable is set to GI001, then A is stored in GI001, B in GI002, C in GI003. |
| Clear Cache After Parse | No: The cache is not cleared after parsing. When the external device has not sent new data, the parsed data remains the cached values. After the external device sends new data, the new data can be parsed. <br><br> Yes: The cache is cleared after parsing. When the external device has not sent new data, no data can be parsed. After the external device sends new data, the new data can be parsed. <br><br> For example: External device sends data: @,12,23,34,!. The first stored variable is GI001, so GI001=12, GI002=23, GI003=34. <br><br> Clear cache = No: If we assign GI001=10 via an assignment instruction, then run parse data, when the external device hasn't sent new data, it still parses the cached data 12 and assigns it to GI001, showing GI001=12. <br><br> Clear cache = Yes: If we assign GI001=10, then run parse data, when the external device hasn't sent new data, the cache has no data so GI001 remains 10, showing GI001=10. |
| Data Count | Record the number of data sent. <br><br> Variable: Store the number of data sent into the selected variable. For example: If TCP receives 3 digits and the data storage variable is GI001, executing the parse instruction gives GI001=3. <br><br> Don't use: Don't record the number of data sent. When "Don't use" is selected, the input box is grayed out. |

Example:

```
1. NOP
2. OPENMSG ID= 1
3. PARSEMSG ID = 1 I001 CLEARCACHE = 0 GI001
4. CLOSEMSG ID = 1
5. END
```

Example description: After network communication is successful, execute the parse instruction. Data sent by the external device is stored starting from the first variable I001, continuing sequentially. The data count is stored in variable GI001.

### READCOMM - Read Data

![](./assets/vo7gvkmeqn93ydrermplw.png)

Format: `READCOMM [Instruction Name] ID=1 [Process Number] ETHERENT, MODBUS [Communication Method] P/GP [Position Storage Variable] I001 [Position Storage Count]`

Function: Read positions sent via Ethernet or Modbus communication and store them into variables.

| Parameter | Description |
| :--- | :--- |
| Process Number | Process number for TCP communication connection |
| Communication Method | Ethernet communication, Modbus communication |
| First Variable for Position Storage | Store sent positions into the selected position variable (P, GP) |
| Position Storage Count | Use a variable (INT/GINT) to record the number of positions sent |

Notes: When selecting different communication methods for sending positions, pay attention to the format, otherwise position data cannot be written to variables.

Ethernet communication: When sending positions, refer to the "INEXBOT Read Instruction Ethernet Position Communication Protocol".

Modbus communication: Position settings can be referenced in the external transfer point — communication method section.

Example:

```
1. NOP
2. OPENMSG ID= 1
3. READCOMM ID = 1 ETHERENT TO GP001 I001
4. CLOSEMSG ID = 1
5. END
```

Example description: Send positions according to the "INEXBOT Read Instruction ETHERENT Position Communication Protocol". After network communication is successful, the read position instruction saves the sent position data to variable GP0001, and the position count is stored in variable I001.

### OPENMSG - Open Data

![](./assets/6ttpvfygwnma8v1z3qlnj.png)

Format: `OPENMSG [Instruction Name] ID = 1 [Process Number]`

Function: Open network communication.

| Parameter | Description |
| :--- | :--- |
| ID | Process number for TCP communication connection, range [1,9] |

Example:

```
1. NOP
2. OPENMSG ID= 1
3. SENDMSG ID = 1 #TEST#
4. CLOSEMSG ID = 1
5. END
```

Example description: Execute the open data instruction. After the controller establishes communication with the external device, data can be sent and received.

### CLOSEMSG - Close Data

![](./assets/e1rdsd2nfsw4kba-n1equ.png)

Format: `CLOSEMSG [Instruction Name] ID = 1 [Process Number]`

Function: Close network communication.

| Parameter | Description |
| :--- | :--- |
| ID | Process number for TCP communication close, range [1,9] |

Example:

```
1. NOP
2. OPENMSG ID= 1
3. SENDMSG ID = 1 #TEST#
4. CLOSEMSG ID = 1
5. END
```

Example description: Execute the close data instruction. Communication between the controller and external device is disconnected.

### PRINTMSG - Print Message

![](./assets/q26uqic2bvcjytbj4moko.png)

Format: `PRINTMSG [Instruction Name] 0, 1, 2 [Type: Message, Warning, Error] #Input Content# [Output Character]`

Function: Output defined message content through a notification bar.

| Parameter | Description |
| :--- | :--- |
| Type | Message: Displays a white notification bar on the teach pendant. <br><br> Warning: Displays a yellow warning bar on the teach pendant. <br><br> Error: Displays a red error bar on the teach pendant, and the servo powers off. |
| Output Character | Content displayed on the teach pendant notification bar. To print a variable, add `$` before the variable, e.g. $GD001. When executing the instruction, the notification bar prints the variable's value. |

Example:

```
1. NOP
2. PRINTMSG 0 #This is a message#
3. PRINTMSG 1 #This is a warning#
4. PRINTMSG 2 #This is an error#
5. END
```

Example description: Execute the instruction. The teach pendant displays a white message notification, a yellow warning notification, and a red error notification respectively.

### MSG_CONNECTION_STATUS - Get Message Connection Status

![](./assets/4ehv6kxout5xegm5b2ig7.png)

Format: `MSG_CONNECTION_STATUS [Instruction Name] 1 [Process Number] GB001 [Connection Status: "0" not connected, "1" connected]`

Function: Get the connection status of a process number in network settings.

| Parameter | Description |
| :--- | :--- |
| Process Number | Process number selected in the TCP communication settings interface |
| Status Variable Name | The current connection status of the process number is represented by a variable (BOOL, GBOOL) |

Example:

```
1. NOP
2. OPENMSG ID= 1
3. MSG_CONNECTION_ST I GB001
4. CLOSEMSG ID = 1
5. END
```

Example description: Execute the open data instruction. If the controller successfully communicates with the external device, GB001=1. If communication fails, GB001=0.

### Example Description

External communication device: Network debugging assistant.

![](./assets/0elvpnewfomgtpjzssdyh.png)

![](./assets/ywkhlku6bb9hw2kvicd2e.png)

1. Execute instruction 1 to connect the controller with the external communication device.

2. Execute instruction 2. If the controller successfully communicates with the external device, variable GI001=1. If communication fails, GI001=0.

3. Execute instruction 3 to send data to the external device. Send the values of variables GI006, GI007, GI008 to the external device.

![](./assets/j1rwso46dmnz833w6260q.png)

4. Execute instruction 4. After the external device sends data, parse the data. Based on the selected first variable, the parsed data is stored sequentially into variables.

5. Execute instruction 5 to store position data sent by the external device into position variables. Based on the selected first variable, data is stored sequentially.

![](./assets/xbr7z2re6uyvq2vpzkwg6.png)

6. Execute instruction 6 to close the connection between the controller and the external communication device.

### Notes

| No. | Description |
| :--- | :--- |
| 1 | When the external device sends positions, it must follow the "INEXBOT Read Instruction Ethernet Position Communication Protocol" |
| 2 | When sending data, the frame header, separator, and end character must be consistent with the TCP communication settings interface |

### Ethernet Position Communication Protocol

| No. | Meaning | Value |
| :--- | :--- | :--- |
| 1 | Number of positions | - |
| 2 | Coordinate system | 0-joint; 1-Cartesian; 2-tool; 3-user |
| 3 | Angle unit | 0-degrees; 1-radians |
| 4 | Left/right hand | 0-none; 1-left-handed; 2-right-handed |
| 5 | Tool number | 0-none; 1-999 |
| 6 | User coordinate number | 0-none; 1-999 |
| 7 | Reserved | - |
| 8 | Reserved | - |
| 9 | Coordinate 1 | - |
| 10 | Coordinate 2 | - |
| 11 | Coordinate 3 | - |
| 12 | Coordinate 4 | - |
| 13 | Coordinate 5 | - |
| 14 | Coordinate 6 | - |
| 15 | Coordinate 7 | - |

## External Transfer Points

### Parameter Settings

External communication can use Modbus. Set parameters in "Settings — External Communication — Modbus Settings — Modbus Parameters" interface (also refer to the Modbus-related manual).

![](./assets/asa5n2-gsiyvaipunlu_3.png)

| Parameter | Description |
| :--- | :--- |
| Connection | Modbus switch. After opening, Modbus signals are detected. |
| Heartbeat Detection | After opening, used to detect the send/receive frequency between Modbus and the controller. After disconnecting the Modbus connection, heartbeat detection shows data send/receive is closed. |
| Modbus | Displays the connection status between Modbus and the controller. |
| On Communication Disconnect | Don't stop: When the Modbus slave disconnects or communication is lost, the system does not stop running or power off. <br><br> Stop: When the Modbus slave disconnects or communication is lost, the system stops running or powers off. |
| Scan Cycle | The frequency at which the system scans data within the Modbus range. |

On this interface, you can set whether Modbus connects, the protocol used for Modbus connection, whether this controller is a Modbus master/slave, and various parameters for the connection.

### Communication Method

Due to address code limitations, positions that exceed the limit need to be sent in multiple batches, with a maximum of 30 positions per batch.

As long as the controller is connected to the PLC, positions can be sent. The controller will automatically store them.

| Purpose | Address Code | Process |
| :--- | :--- | :--- |
| All Positions Send Flag | 1001 | PLC sets to 1 when sending positions, sets to 2 when sending is complete. Controller sets to 0 after receiving all. |
| Single Send Flag | 1002 | PLC sets to 1 when sending positions. Controller sets to 0 after receiving. PLC sets to 1 again for the next send. |
| Positions Per Send | 1003 | Number of positions sent by PLC in one batch, maximum 30. |
| Position Storage Data | Based on count | Detailed below. |
| Frame Number Per Send | 1004 | The frame number must be changed for each position send and cannot be the same as the previous one. |
| Clear Controller Position Queue Flag | 1005 | To discard the position queue already sent to the controller, PLC sets to 1. Controller sets to 0 after clearing. |

#### Position Storage Data

One position data contains 1 coordinate system and 6 axis values (for a 4-axis robot, it contains 1 coordinate system and 4 axis values).

| i-th Position | Address Code | Note |
| :--- | :--- | :--- |
| Coordinate System | 1010+20*(i-1) | 1≤i≤32 |
| In Use | 1011+20*(i-1) | 1≤i≤32; send 0 to use, send 1 to not use |
| j-th Axis Value | 1010+2+20*(i-1)+2*(j-1) | 1≤i≤32, 1≤j≤9. Axis values use float type, so they occupy 2 addresses. |

### Example

Need to send 88 positions. Since only 32 can be sent per batch, it needs to be split into 3 batches: 32, 32, and 24.

Process:

1. PLC sets 1003 to 32, sets the values for each address code used for position storage data, sets 1001 to 1, sets 1002 to 1.

2. Controller detects 1002 is 1 and 1001 is 1, retrieves position storage address code data based on the value of 1003, then sets 1002 to 0.

3. PLC detects 1002 is 0, sets 1003 to 32, sets position storage address code data, then sets 1002 to 1.

4. Controller detects 1002 is 1 and 1001 is 1, retrieves position storage address code data based on the value of 1003, then sets 1002 to 0.

5. PLC detects 1002 is 0, sets 1003 to 24, sets position storage address code data, sets 1001 to 2, sets 1002 to 1.

6. Controller detects 1002 is 1 and 1001 is 2, retrieves position storage address code data based on the value of 1003, then sets 1002 to 0 and sets 1001 to 0.

## Q&A for Retrieval

**Q: How many process numbers are supported in TCP communication parameters?**

A: TCP communication parameters support 9 process numbers.

**Q: What do the connection switch colors mean in TCP communication?**

A: For client: gray means disconnected, green means connected. For server: gray means connection closed, green means connection open.

**Q: What are the two TCP communication modes?**

A: TCP communication has two modes: server and client. The controller can act as either.

**Q: What does the IP parameter mean in TCP communication?**

A: When the connection mode is server, the IP is the controller IP and does not need to be modified. When the connection mode is client, the IP is the external communication device's IP.

**Q: What does the port parameter mean in TCP communication?**

A: When the mode is server, this is the local listening port for client connections. When the mode is client, this is the server port to connect to.

**Q: What is the function of the SENDMSG instruction?**

A: The SENDMSG instruction is used to send data to a connected external device. By selecting the corresponding process number, strings and variables can be sent.

**Q: What should I pay attention to when sending variables?**

A: If you want to send a variable, add a `$` symbol before the variable. For example: SENDMSG ID = 1 #$D001#.

**Q: What is the function of the PARSEMSG instruction?**

A: The PARSEMSG instruction parses a set of data received from an external device and stores the data into multiple variables.

**Q: What is the CLEARCACHE parameter used for?**

A: The CLEARCACHE parameter sets whether to clear the cache. "0" means don't clear, "1" means clear.

**Q: What is the function of the READCOMM instruction?**

A: The READCOMM instruction reads positions sent via Ethernet or Modbus communication and stores them into variables.

**Q: What is the function of the OPENMSG instruction?**

A: The OPENMSG instruction is used to open network communication.

**Q: What is the function of the CLOSEMSG instruction?**

A: The CLOSEMSG instruction is used to close network communication.

**Q: What types does the PRINTMSG instruction support?**

A: The PRINTMSG instruction supports three types: 0-message (white), 1-warning (yellow), 2-error (red, and servo powers off).

**Q: What is the function of the MSG_CONNECTION_STATUS instruction?**

A: The MSG_CONNECTION_STATUS instruction is used to get the connection status of a process number in network settings.

**Q: How many points can be sent per batch for external transfer points?**

A: Due to address code limitations, a maximum of 30 points can be sent per batch.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-24 | Initial version | jmz-09 |

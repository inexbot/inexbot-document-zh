---
title: "FINSTCP Communication Protocol Configuration and Usage Manual"
description: "FINSTCP instruction and Fins TCP communication protocol application guide, covering PLC integration, data read/write, connection configuration, and industrial automation control."
author: "iNexBot"
date: "2026-04-16"
tags: ["FINSTCP", "Fins TCP", "PLC Communication", "Omron PLC", "Data Interaction"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---


## 1 FINSTCP Instruction Overview

The FINSTCP instruction is used to manage FINSTCP communication connections in run mode, enabling Fins TCP protocol communication between the controller and PLC.

![FINSTCP instruction overview](assets-FINSTCP/image1.jpeg)

### > 1.1 Open FINSTCP Connection

**Instruction Function**: Open the FINSTCP communication connection in run mode

**Parameter Description**:

| Parameter | Description |
| :--- | :--- |
| Process Number | Bind FINSTCP parameter process number |

**Usage Scenarios**:
- Establish communication connection when the program starts
- Reconnect after communication is disconnected

### > 1.2 Disconnect FINSTCP Connection

**Instruction Function**: Disconnect the FINSTCP communication connection in run mode

**Parameter Description**:

| Parameter | Description |
| :--- | :--- |
| Process Number | Bind FINSTCP parameter process number |

**Usage Scenarios**:
- Close communication connection when the program ends
- Disconnect current connection when switching to a different PLC

### > 1.3 Get FINSTCP Connection Status

**Instruction Function**: Store the FINSTCP connection status in a BOOL/GBOOL variable

**Usage Method**:
- Determine the FINSTCP connection status by reading the variable value
- Status is obtained each time the instruction is executed
- Typically placed below "Open FINSTCP Connection"

**Usage Example**:

```plaintext
// Example code
GET_FINSTCP_STATUS GB010  // Store connection status in GB010
IF GB010 == 1 THEN
    // Connection successful, execute subsequent operations
    ...
ELSE
    // Connection failed, execute error handling
    ...
ENDIF
```

---

## 2 FINSTCP Parameter Configuration

### > 2.1 Parameter Description

The FINSTCP parameter configuration interface contains the following parameters:

| Parameter | Example Value | Description |
| :--- | :--- | :--- |
| Process Number | 1 | A total of 9 process numbers are available; this process number has no actual significance |
| Connection | Parameter/Connect button | After FinsTCP setup is complete, the connect button must be opened; this connect button can also be opened and closed via Open FINSTCP Connection and Disconnect FINSTCP Connection instructions |
| Communication Status | Connected/Disconnected | The communication status on the right side shows the connection status |
| Protocol | Fins TCP | Communication protocol type |
| IP | 192.168.1.10 | PLC device IP address |
| Port | 9600 | PLC device port number |
| Write Address | 1000 | PLC write address (PLC start address) |
| Read Address | 2000 | PLC read address (PLC start address) |
| Write Address | GB001, GI001 | Controller write address (local start address); PLC reads data from the controller and writes it to PLC; this value can be modified on the teach pendant |
| Read Address | GB500, GI500 | Controller read address (local start address); controller reads data written by PLC and stores it in the controller's global Boolean and global integer variables; this value cannot be modified via the teach pendant, but can be written via CX-Programmer software |

**Important Notes**:

> The PLC write address and read address values must not be set to the same value. Additionally, the variables in the controller's write address and read address must not be the same variables.

### > 2.2 Parameter Setting Example

**Typical Configuration Example**:

| Parameter | Value | Description |
| :--- | :--- | :--- |
| Process Number | 1 | Use process number 1 |
| IP | 192.168.1.10 | PLC IP address |
| Port | 9600 | PLC port number |
| Write Address (PLC) | 1000 | PLC memory address 1000 in CX-Programmer software |
| Read Address (PLC) | 2000 | PLC memory address 2000 in CX-Programmer software |
| Write Address (Controller) | GB001, GI001 | Controller global Boolean and integer variable start address |
| Read Address (Controller) | GB500, GI500 | Controller global Boolean and integer variable start address |

---

## 3 Fins TCP Usage Workflow

![Fins TCP usage workflow](assets-FINSTCP/image3.jpeg)

### > 3.1 Fins TCP Function Overview

**Function Description**: The Fins TCP function enables data interaction between the controller and PLC

**Supported Protocol**: Fins TCP

**Scope of Application**: This function only applies to Omron PLCs

**Usage Workflow**:

```
Connect PLC, controller, and computer -> Set FINSTCP parameters -> Open CX-Programmer software for read/write operations
```

### > 3.2 Hardware Connection

**Step**: Connect the PLC, controller, and computer using network cables

**Software Preparation**: CX-Programmer software must be installed on the computer

**Connection Topology**:

```
┌─────────────┐
│   Computer   │
│ (CX-Programmer)
└──────┬──────┘
       │
       │ Network cable
       │
┌──────┴──────┐
│  Controller  │
│ (iNexBot)   │
└──────┬──────┘
       │
       │ Network cable
       │
┌──────┴──────┐
│ Omron PLC   │
└─────────────┘
```

### > 3.3 Parameter Settings

**Setting Path**: [Settings] -> [Modbus Settings] -> [FINSTCP Parameters]

**Setting Steps**:

1. Enter the teach pendant [Settings] menu

2. Select [Modbus Settings]

3. Click [FINSTCP Parameters]

4. Set the relevant parameters:
   - IP Address: Enter the PLC address `192.168.1.10`
   - Port: Enter the PLC port `9600`
   - Write Address: Enter the PLC memory address `1000` from CX-Programmer software
   - Read Address: Enter the PLC memory address `2000` from CX-Programmer software
   - Write Address (Controller): Enter `GB001` and `GI001`
   - Read Address (Controller): Enter `GB500` and `GI500`

**FINSTCP Parameter Details**:

| Parameter | Description |
| :--- | :--- |
| Connection | After FinsTCP setup is complete, the connect button must be opened; this connect button can also be opened and closed via Open FINSTCP Connection and Disconnect FINSTCP Connection instructions; the communication status on the right side shows the connection status |
| IP | PLC device IP address |
| Port | PLC device port number |
| Write Address (PLC) | PLC memory address 1000 in CX-Programmer software |
| Read Address (PLC) | PLC memory address 2000 in CX-Programmer software |
| Write Address (Controller) | Starting from GB001, sub-units from CX-Programmer software are written sequentially; the first 16 Boolean variables are filled by obtaining the controller status (see appendix table). Starting from GI001, units from CX-Programmer software are written sequentially; the first 6 integer variables are the robot's current Cartesian coordinates, and the remaining values are the controller's own values (see appendix table). All values above are obtained by CX-Programmer software from the controller; refer to the appendix table for specific meanings |
| Read Address (Controller) | Starting from GB500, variable values are written by CX-Programmer software; the first 16 variables are written to control the controller (see appendix table for specific functions). Starting from GI500, values are written by CX-Programmer software. All values above can only be written via CX-Programmer software |

**Important Note**:

> One unit = 16 sub-units. Sub-units are written to Boolean variables, and units are written to integer variables.

### > 3.4 CX-Programmer Operations

**Operation Steps**:

1. **Open Software**: Open CX-Programmer software

2. **Create New Project**:
   - Click [File]
   - Select [New]
   - Click [OK] without modifying the popup content

3. **Open Memory Interface**:
   - Double-click [Memory]
   - Open the memory interface

4. **Open Table Interface**:
   - Double-click [D]
   - Open a table interface

5. **Monitor Data**:
   - Click the [Monitor] button
   - Values will appear in the table interface
   - Enter `1000` as the start address
   - Click [Binary]
   - The values in the table are sub-unit values

6. **Connection Verification**:
   - After the controller and PLC are connected
   - The value below 9 in the table will continuously toggle between 1 and 0

7. **View Unit Values**:
   - Click [Signed Decimal]
   - The values in the table are unit values

8. **Write Operations**:
   - When writing from CX-Programmer software
   - The [Read-only] button in the new interface must be turned off
   - Then values can be written from the software

---

## 4 Controller Address Mapping Details

This chapter provides detailed explanations of the values in the controller's write addresses and read addresses.

### > 4.1 Global Boolean Variables in Controller Write Address

**Variable Range**: First 128 global Boolean variables

**Data Source**: The values of these 128 variables are obtained by the PLC reading the controller

#### 4.1.1 First 16 Status Variables

The values of the first 16 variables are obtained based on the controller's status.

| Variable Number | Meaning | Condition for Value 1 | Condition for Value 0 |
| :--- | :--- | :--- | :--- |
| 1st | Reserved | - | - |
| 2nd | Run Mode Status | Controller is in run mode | Controller is not in run mode |
| 3rd | Remote Mode Status | Controller is in remote mode | Controller is not in remote mode |
| 4th | Servo Ready Status | Controller servo is ready | Controller servo is not ready |
| 5th | Reserved | - | - |
| 6th | Emergency Stop Status | Controller emergency stop activated | Controller emergency stop not activated |
| 7th | Reserved | - | - |
| 8th | Program Running Status | Program is running in controller | Program is not running in controller |
| 9th | Program Paused Status | Program is paused in controller | Program is not paused in controller |
| 10th | Communication Heartbeat | Controller and PLC communication connected | Controller and PLC communication disconnected |
| 11th | Communication Connection Status | Controller and PLC communication status connected | Controller and PLC communication status not connected |
| 12th | Teach Mode Status | Controller is in teach mode | Controller is not in teach mode |
| 13th-16th | Reserved | - | - |

**Variable Description**:

- **2nd variable (Run Mode)**: Value is 1 when the controller is in run mode, otherwise 0
- **3rd variable (Remote Mode)**: Value is 1 when the controller is in remote mode, otherwise 0
- **4th variable (Servo Ready)**: Value is 1 when the controller servo is ready, otherwise 0
- **6th variable (Emergency Stop)**: Value is 1 when the controller emergency stop is activated, otherwise 0
- **8th variable (Program Running)**: Value is 1 when a program is running in the controller, otherwise 0
- **9th variable (Program Paused)**: Value is 1 when a program is paused in the controller, otherwise 0
- **10th variable (Communication Heartbeat)**: After the controller and PLC communication is connected, this value toggles continuously between 1 and 0. (When this value is toggling continuously, it indicates that the controller and PLC are connected successfully.)
- **11th variable (Communication Connection)**: Value is 1 when the controller and PLC communication status is connected; this value does not change
- **12th variable (Teach Mode)**: Value is 1 when the controller is in teach mode, otherwise 0

#### 4.1.2 User Variables 16-128

**Description**: The values of variables 16 to 128 in the global Boolean variables are the controller's own global Boolean variable values, which are also the values read by the PLC

**Modifiability**: These variable values can be directly modified and filled in via the teach pendant

### > 4.2 Global Integer Variables in Controller Write Address

#### 4.2.1 First 6 Coordinate Variables

**Description**: The values of the first 6 global integer variables in the controller's write address represent the robot's coordinate position values

**Coordinate Variables**:

| Variable Number | Coordinate Meaning |
| :--- | :--- |
| 1st | X-axis coordinate |
| 2nd | Y-axis coordinate |
| 3rd | Z-axis coordinate |
| 4th | Rx-axis coordinate |
| 5th | Ry-axis coordinate |
| 6th | Rz-axis coordinate |

#### 4.2.2 Global Integer Variables 6-40

**Description**: Variables 6 through 40 display the values of the controller's global integer variables

**Modifiability**: These variable values can be modified and filled in via the teach pendant

### > 4.3 Global Boolean Variables in Controller Read Address

**Variable Range**: First 128 global Boolean variables in the read address

**Data Source**: Values written by the PLC

#### 4.3.1 Control Signal Variables

| Variable Number | Function Description | Activation Effect |
| :--- | :--- | :--- |
| 1st | Reserved | - |
| 2nd | Servo Ready Control | When PLC writes value 1, the controller servo is ready (if this value is not changed to 0, the controller will remain in servo ready state) |
| 3rd | Reserved | - |
| 4th | Program Start Control | When PLC writes value 1, the controller main program starts running (controller must be in run mode) |
| 5th | Program Pause Control | When PLC writes value 1, the controller main program pauses (controller must be in run mode) |
| 6th | Reserved | - |
| 7th | Alarm Clear Control | When PLC writes value 1, the controller's alarm bar is cleared, with the same effect as the clear error button |
| 8th-128th | User-defined | User-defined functions |

**Variable Description**:

- **2nd variable (Servo Ready)**: When PLC writes value 1, the controller servo is ready (if this value is not changed to 0, the controller will remain in servo ready state)
- **4th variable (Program Start)**: When PLC writes value 1, the controller main program starts running (controller must be in run mode)
- **5th variable (Program Pause)**: When PLC writes value 1, the controller main program pauses (controller must be in run mode)
- **7th variable (Alarm Clear)**: When PLC writes value 1, the controller's alarm bar is cleared, with the same effect as the clear error button

### > 4.4 Global Integer Variables in Controller Read Address

**Variable Range**: First 81 integer variables bound to the read address

**Data Source**: Values written by the PLC

**Modifiability**: These values must be modified and filled in via the PLC

---

## 5 Important Notes

### 5.1 Address Configuration Notes

| Note | Description |
| :--- | :--- |
| Address Uniqueness | The PLC write address and read address values must not be set to the same value |
| Variable Uniqueness | The variables in the controller's write address and read address must not be the same variables |
| Address Range | Ensure the address range is within the valid range to avoid address conflicts |

### 5.2 Communication Connection Notes

| Note | Description |
| :--- | :--- |
| Protocol Support | This function only applies to Omron PLCs |
| Network Connection | Ensure the PLC, controller, and computer are properly connected via network cables |
| IP Address Configuration | Ensure the IP addresses are in the same network segment |
| Port Configuration | Ensure the port number is correct; the default is 9600 |

### 5.3 CX-Programmer Operation Notes

| Note | Description |
| :--- | :--- |
| Read-only Mode | The read-only button must be turned off before write operations |
| Monitor Mode | Data changes can be viewed in real-time in monitor mode |
| Heartbeat Detection | After successful communication, the heartbeat variable will toggle continuously |
| Data Format | Binary displays sub-unit values; signed decimal displays unit values |

### 5.4 Variable Operation Notes

| Note | Description |
| :--- | :--- |
| Status Variables | The first 16 Boolean variables are system status, read-only |
| User Variables | Boolean variables 16-128 are read/write |
| Coordinate Variables | The first 6 integer variables are robot coordinates |
| Global Variables | Variables that can be modified via the teach pendant |

---

## 6 Typical Application Scenarios

### 6.1 PLC Controls Robot Start/Stop

**Scenario Description**: Control the start and pause of the robot's main program via PLC

**Implementation Method**:

1. Configure FINSTCP parameters
2. Write 1 to the 4th variable of the controller's read address via CX-Programmer software to start the robot's main program
3. Write 1 to the 5th variable of the controller's read address via CX-Programmer software to pause the robot's main program

**Control Flow**:

```
PLC writes GB504 (4th variable) = 1 -> Robot main program starts running
PLC writes GB505 (5th variable) = 1 -> Robot main program pauses
```

### 6.2 Robot Status Monitoring

**Scenario Description**: PLC monitors robot running status in real-time

**Implementation Method**:

1. Configure FINSTCP parameters
2. Read the first 16 variables of the controller's write address via CX-Programmer software
3. Parse the status information of each variable

**Status Monitoring**:

| Robot Status | Corresponding Variable | Condition for Value 1 |
| :--- | :--- | :--- |
| Run Mode | GB002 | Controller is in run mode |
| Remote Mode | GB003 | Controller is in remote mode |
| Servo Ready | GB004 | Controller servo is ready |
| Emergency Stop | GB006 | Controller emergency stop activated |
| Program Running | GB008 | Program is running in controller |
| Program Paused | GB009 | Program is paused in controller |
| Communication Heartbeat | GB010 | Controller and PLC communication connected |
| Communication Connection | GB011 | Controller and PLC communication status connected |
| Teach Mode | GB012 | Controller is in teach mode |

### 6.3 Coordinate Data Interaction

**Scenario Description**: PLC reads the robot's current coordinate position

**Implementation Method**:

1. Configure FINSTCP parameters
2. Read the first 6 integer variables (GI001-GI006) of the controller's write address via CX-Programmer software
3. Parse the coordinate values

**Coordinate Variables**:

| Variable Number | Variable Name | Coordinate Meaning |
| :--- | :--- | :--- |
| 1st | GI001 | X-axis coordinate |
| 2nd | GI002 | Y-axis coordinate |
| 3rd | GI003 | Z-axis coordinate |
| 4th | GI004 | Rx-axis coordinate |
| 5th | GI005 | Ry-axis coordinate |
| 6th | GI006 | Rz-axis coordinate |

---

## 7 Troubleshooting

### 7.1 Common Issues

| Fault Symptom | Possible Cause | Solution |
| :--- | :--- | :--- |
| Cannot connect to PLC | IP address configuration error | Check if the IP address is in the same network segment |
| Cannot connect to PLC | Port number configuration error | Check if the port number is 9600 |
| Cannot connect to PLC | Network cable connection abnormal | Check if the network cable connection is normal |
| Communication status shows disconnected | Connect button not clicked | Click the connect button or use the Open FINSTCP Connection instruction |
| Heartbeat variable not toggling | Communication not established | Check network connection and configuration parameters |
| Cannot write data | Read-only mode not turned off | Turn off the read-only button in CX-Programmer software |
| Cannot start program | Controller not in run mode | Switch the controller to run mode |
| Cannot pause program | Controller not in run mode | Switch the controller to run mode |

### 7.2 Connection Status Determination

**Normal Connection Status**:

- Communication status shows "Connected"
- 10th variable (GB010) value toggles continuously between 1 and 0
- 11th variable (GB011) value is 1

**Abnormal Connection Status**:

- Communication status shows "Disconnected"
- 10th variable (GB010) value does not toggle
- 11th variable (GB011) value is 0

### 7.3 Heartbeat Detection Description

**Heartbeat Variable**: 10th variable (GB010)

**Normal State**: After the controller and PLC communication is connected, this value toggles continuously between 1 and 0

**Determination Standard**: When this value is toggling continuously, it indicates that the controller and PLC are connected successfully

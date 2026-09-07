---
title: "Wafer Process"
description: "Wafer process function user manual, including wafer cassette configuration, pick-and-place control, communication settings, auto homing, host commands, TCH teaching steps and error codes."
author: "jmz-09"
date: "2026-06-24"
tags: ["Teach Pendant", "Wafer Process"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Wafer Process

![](./assets/qwhthqv3alzlyw_mk-xqa.png)

## 1. Process Introduction

The wafer process is mainly used to enable wafer robots to transport wafer substrates in semiconductor processing equipment. Its content mainly includes three modules: wafer cassette parameter configuration, manipulator control actions, and host computer control communication settings.

Under the wafer process, there are three interfaces: wafer cassette configuration interface, control interface, and communication settings interface. As shown:

![](./assets/etbyn9bfvt5_bya79upjb.png)

| Module | Description |
| :--- | :--- |
| Wafer Cassette Configuration | Configure the number, type, size, capacity, and position-related parameters of wafer cassettes (FOUP, Front Opening Unified Pod). Additionally, parameters related to pick-and-place operations in the wafer cassette (such as motion trajectories, speed, and signal detection) are also configured in this module |
| Control | The control module is mainly used to operate the manipulator and manually debug wafer process logic |
| Communication Settings | This module mainly configures communication parameters related to host computer control of the manipulator |

Below are the three interfaces and their corresponding functions:

### 1. Wafer Cassette Configuration Interface

#### 1.1 Global Configuration Interface

Configure wafer cassette, blade total count and blade model, set HOM position coordinates.

![](./assets/jll3gdk8vsvzzr5w8mlll.png)

| Parameter | Range/Options | Description |
| :--- | :--- | :--- |
| Total Wafer Cassette Count | [1, 99], default 25 | When modifying the total wafer cassette count, the "Current Station" dropdown options in the wafer cassette configuration interface will increase or decrease accordingly. Newly added cassettes are named in box_xx format |
| Total Blade Count | [1, 4], generally default 4 | When modifying the total blade count, the "Current Blade" dropdown options in the blade configuration interface will also increase or decrease accordingly, and the selectable blade count in the control interface will also change |
| Blade Model | Gripper / Suction | Select the blade type |
| HOM Setting (Joint Coordinates) | J1, J2, J4, J5, J6, J7: [-20000, 20000] mm; J3: [-500, 5000] degrees | HOM point is the robot's safe starting position. After completing a task, the robot usually returns to the HOM point to prepare for the next task |

> Note: In this document, home, HOME are equivalent to HOM

#### 1.2 TCH Teaching Interface

Mark wafer cassette position coordinates.

![](./assets/gqosdshf8iqk4b0pnzyo_.png)

| Parameter | Description |
| :--- | :--- |
| Station Number | The number of selectable wafer cassettes matches the total cassette count, and names are consistent. Each station saves the corresponding TCH coordinate parameters |
| TCH Current Mark Status | Divided into "Unmarked" and "Marked". By clicking the "Modify" button, then clicking "Save" or "Mark Current Point" button, status can be changed from "Unmarked" to "Marked" |
| Joint Coordinates | Range: J1, J2, J4, J5, J6, J7 are [-20000, 20000] mm; J3 is [-20000, 20000] degrees. Operation: Can be manually entered or obtained via "Mark Current Point" button |
| Cartesian Coordinates | Range: X, Y, Z, H are [-20000, 20000] mm; U is [-3.14, 3.14] rad. Operation: Can be manually entered or obtained via "Mark Current Point" button |
| Mark Current Point | Under a station number, clicking blade 1 mark current point will write the robot's current machine coordinate value to the station's blade 1 and mark it |
| Move to TCH | In servo ready state, after powering on, click "Move to TCH" button. Robot will move to the previously marked TCH point |

#### 1.3 Wafer Cassette Configuration Interface

> Configure wafer cassette type, capacity, interlock detection IO parameters.

![](./assets/ppkhqsdzlo0sde2ndafzb.png)

| Parameter | Range/Options | Description |
| :--- | :--- | :--- |
| Current Station | Matches total wafer cassette count, default box_xx | Can remove unnecessary stations via delete button at bottom of interface, but must retain at least one station. System reports error when deleting the last station |
| Station Type | PA (Process Application) / Cassette | Station type |
| Station Setting (Station Name) | Must start with letter, only letters, numbers, underscores allowed | Default named in box_xx format. Note station names cannot be duplicated. After modification and save, current station name changes accordingly |
| Inner Layers | [1, 99] layers, default 1 layer | Number of layers inside wafer cassette |
| Layer Spacing | [1, 1000] mm, default 10mm | Distance between each layer |
| Interlock Function | Enable / Disable | When enabled, system reads specific IO signals to determine if workstation is in interlock state. Detecting interlock triggers alarm blockage, and outputs release signal after clearing |
| Interlock IO_DIN | 1-1 ~ 1-16 / None | Select input IO signal for determining workstation interlock state |
| IO_DIN Enable Method | 1: High enable / 0: Low enable | High enable means DIN signal is 1 (high level) when workstation is interlocked |
| Interlock IO_OUT | 1-1 ~ 1-16 / None | Select output IO signal for determining workstation interlock state |
| IO_OUT Enable Method | 1: High enable / 0: Low enable | High enable means DOUT signal is 1 (high level) when workstation is interlocked |

> Notes: Ensure station name is unique; set appropriate layer count and layer spacing; recommend enabling interlock function for enhanced safety; select appropriate IO signal and enable method.

#### 1.4 Blade Configuration Interface

> Configure various sensor parameters on multi-blade.

![](./assets/wwbhmba8_rg_dan0peq3y.png)

| Parameter | Range/Options | Description |
| :--- | :--- | :--- |
| Blade Number | 1, 2, 3, 4 (matches global configuration) | Select blade to configure |
| Gripper Control IO_DOUT | 1-1 ~ 1-16 / None | Enable method: High enable (1) or Low enable (0). When gripper detects wafer presence, system outputs this IO_DOUT signal |
| Detect Wafer Presence | Enable / Disable | When enabled, system detects if wafer is present in gripper |
| Detection IO_DIN | 1-1 ~ 1-16 / None | Enable method: High enable (1) or Low enable (0). Select input signal for detecting wafer presence |
| Detect Wafer Protrusion | Enable / Disable | When enabled, system detects if wafer is protruding (correctly placed in gripper) |
| Protrusion Detection IO Count | - | Select number of input signals for detecting wafer protrusion |
| Protrusion Detection IO_DIN_1 ~ 4 | 1-1 ~ 1-16 / None | Enable method: High enable (1) or Low enable (0). Correspond to 1st~4th IO input signals for detecting wafer protrusion |
| Use Mapping Sense | Enable / Disable | Pre-research function (not yet implemented). When enabled, determines wafer position and state based on preset mapping rules, improving pick-and-place accuracy and safety |

#### 1.5 Point Offset Interface

> Configure trajectory point offset parameters for pick-and-place from this wafer cassette.

![](./assets/ttwmre7vubcaj0kea3tz0.png)

| Parameter | English Full Name | Range | Description |
| :--- | :--- | :--- | :--- |
| Current Cassette Station | - | - | Currently operated wafer cassette number. Selected via dropdown, displays corresponding cassette parameters after selection |
| UOFF | Upper Offset | [0, 15] mm | Z-axis distance from teach position to upper path. Upper offset for adjusting position deviation of cassette top relative to robot |
| LOFF | Lower Offset | [0, 15] mm | Z-axis distance from teach position to lower path. Lower offset for adjusting position deviation of cassette bottom relative to robot |
| GCNF | Global Configuration Offset | [0, 15] mm | Tool coordinate Y-axis distance from teach position to rising path. Global configuration offset for adjusting overall cassette position relative to robot |
| GOFF | Global Offset | [0, 15] mm | Tool coordinate Y-axis distance from teach position to wafer holding position. Global offset for adjusting overall cassette position relative to robot |
| PADJ | Position Adjustment | [0, 15] mm | Tool coordinate Y-axis distance from teach position to wafer holding position. Position adjustment for fine-tuning cassette position relative to robot |
| POFF | Position Offset | [0, 15] mm | Y-axis distance from wafer placement position to lower path end position. Position offset for adjusting cassette position relative to robot |
| PCNF | Position Configuration | [0, 15] mm | Tool coordinate Y-axis distance from wafer placement position to holding position. Position configuration for configuring cassette position parameters relative to robot |

> The above offsets have a default initial value of 3mm, adjustable in positive or negative direction to ensure robot can accurately pick and place wafers.

Manipulator states at each Location position during GETS action are shown below:

![](./assets/xk2s9j6chrqhocofejsxz.png)

GETS action parameters are shown below:

![](./assets/zgipbo8pw6nxa5bkaoxey.png)

Manipulator states at each Location position during PUTS action are shown below:

![](./assets/nqqe3gdx5x3isuigvd6sa.png)

PUTS action parameters are shown below:

![](./assets/czgiibedblsjqpl8-_sje.png)

#### 1.6 Joint Motion Interface

> Configure maximum speed for each joint under various working conditions.

![](./assets/wtc5dwrfadoh19vpkq2-i.png)

In this interface, J1-J7's 7 buttons can select different joints. Modify/save speed parameters for each joint under the following working conditions:

- Host computer control mode: No-wafer speed, with-wafer speed, low speed, return HOM speed, low-speed area speed
- Teach pendant control mode: Low speed, with-wafer speed, return HOM speed, low-speed area speed

| Parameter | Range | Description |
| :--- | :--- | :--- |
| J1, J2, J4, J5, J6, J7 Speed | (0, 1000] mm/s | Maximum speed for corresponding joint under various working conditions |
| J3 Speed | (0, 1000] °/s | Maximum angular speed for J3 joint under various working conditions |
| No-Wafer Speed | - | Robot motion speed when not carrying wafer, suitable for moving between stations |
| With-Wafer Speed | - | Robot motion speed when carrying wafer, suitable for moving between stations |
| Low Speed | - | Speed for moving to clamping position after picking wafer |
| Return Home Speed | - | Robot axes motion speed when returning to HOM position |
| Low-Speed Area Speed | - | Speed for lifting or lowering during pick-and-place process |

#### 1.7 Linear Motion Interface (Linear motion currently only has jog speed and inch speed active)

> Configure maximum end-effector linear speed under various working conditions in linear motion.

![](./assets/jqoho2uhp_iio8nbaqt_q.png)

In this interface, you can modify/save the system's linear motion speed, including:

- Host computer control mode: No-wafer speed, with-wafer speed, low speed, return HOM speed, low-speed area speed
- Teach pendant control mode: No-wafer speed, with-wafer speed, low speed, return HOM speed, low-speed area speed, teach pendant jog speed, inch speed

| Parameter | Range | Description |
| :--- | :--- | :--- |
| No-Wafer Speed (except jog/inch) | [1, 5000] mm/s | Robot motion speed when not carrying wafer, mainly for blade extending or retracting during pick-and-place |
| With-Wafer Speed | [1, 5000] mm/s | Robot motion speed when carrying wafer, mainly for blade extending or retracting during pick-and-place |
| Low Speed | [1, 5000] mm/s | Speed for moving to clamping position after picking wafer |
| Return Home Speed | [1, 5000] mm/s | Robot motion speed when returning to HOM position; since return HOM uses joint motion, this parameter is inactive |
| Low-Speed Area Speed | [1, 5000] mm/s | Speed for lifting or lowering during pick-and-place process |
| Teach Pendant Jog Speed | [1, 100] % | Global speed percentage limit when using teach pendant for jog operations |
| Teach Pendant Inch Speed | [0.001, 10] mm/s | Maximum speed limit for robot inch (micro) operations |

### 2. Control Interface

#### 2.1 Pick-and-Place Interface

> Operate manipulator to pick/place wafer from selected wafer cassette.

![](./assets/npizxur5119g0ofjnzowj.png)

| Parameter/Control | Range/Options | Description |
| :--- | :--- | :--- |
| Wafer Cassette Selection | Matches total wafer cassette count | Each station saves corresponding TCH coordinate parameters and point offset parameters |
| Wafer Layer | Matches inner layers of corresponding station | Example: When box_03 inner layers is set to 20, layers 1~20 can be selected |
| Action | GETS / PUTS / MOVP | GETS: Pick a wafer from cassette; PUTS: Place a wafer into cassette; MOVP: Move wafer without pick-and-place action, for simple movement between positions |
| MOVP Target Position | GETS: GBH / PUTS: PBH | Only selectable when action is MOVP. Target position dropdown matches action |
| Blade Selection | Matches total blade count | Can select one or more blades for pick-and-place. Example: When 3 blades configured, only blades 1~3 are selectable |
| MOVE Button | - | In servo ready state, after powering on, click to execute corresponding operation based on selected action |

**Usage Flow:**

1. Select wafer cassette station
2. Select wafer layer (within the station's inner layer range)
3. Select action: GETS / PUTS / MOVP (if MOVP, also select target position)
4. Select blade
5. After servo ready and powered on, click MOVE button to execute

#### 2.2 Return HOM Interface

> Operate manipulator to return to HOM position.

![](./assets/4i5pijtyaqlipoz5q6a_m.png)

| Parameter/Control | Options | Description |
| :--- | :--- | :--- |
| Return HOM Axis Group | ALL / Blade | ALL: All joints and blades are checked by default, entire robot returns to HOM; Blade: Checked count matches total blade count, only checked blades return to HOM |
| BACK Button | - | After servo ready and powered on, click to execute return HOM based on selected return HOM group |

**Usage Flow:**

1. Select return HOM group: ALL or Blade (if Blade, check specific blades)
2. After servo ready and powered on, click BACK button to execute return HOM

### 3. Communication Settings Interface

> Configure communication parameters related to host computer control of manipulator.

![](./assets/20f4uufuu36z31y7jwjbe.png)

| Parameter | Range | Description |
| :--- | :--- | :--- |
| IP | - | Current controller IP address, identifies controller position in network, usually fixed and cannot be changed arbitrarily |
| Port Number | [1, 65535] | Port used for communication between controller and external systems, adjustable based on actual communication needs |
| Timeout Detection T1 | [1, 1000000] ms | Timeout detection time for communication phase, can be used for receiving data packet time limit |
| Timeout Detection T2 | [1, 1000000] ms | Timeout detection time for communication phase, can be used for response time after sending commands |
| Timeout Detection T3 | [1, 1000000] ms | Timeout detection time for communication phase, can be used for maximum wait time of entire communication cycle |

> Usage scenario: Port number is usually used for establishing TCP/IP connection with host computer; timeout detection ensures communication stability and reliability.

> Notes: Ensure port number doesn't conflict with other services; compatible with external systems; set reasonable timeout to improve communication efficiency.

### 4. Auto Homing Configuration Interface

Robot zero point is the reference point of the robot coordinate system, an important position that needs to be located and recorded during robot motion. Due to environmental factors (temperature, humidity, air pressure, etc.) or external interference, robot may have errors or offsets. Through homing operation, there is no need to change the stored station TCH point coordinates. Just ensure the zero point IO sensor position is fixed (core principle: offset between zero point and TCH point in space remains consistent) to ensure robot position accuracy.

#### 4.1 Auto Homing Function Interface and Logic Introduction

![](./assets/1bcg5iuxgmxatweshxw4w.png)

| Control/Status | Description |
| :--- | :--- |
| Value | Current joint coordinate of the axis. After clicking [Homing] or [One-Key Homing], value briefly becomes "0" (no actual meaning). After successful homing, current position is marked as "0.000" |
| Individual Return Zero | To return a specific axis to zero, first power on the robot then click "Return Zero" |
| Individual Homing | No power needed, only servo ready required. Click homing to execute homing for single axis |
| Homing Status | "Incomplete" for unhomed or failed homing, "Homing Complete" for successful homing |

**Homing Logic (Two Retractions, Two Homings):**

| Step | Action | Description |
| :--- | :--- | :--- |
| 1 | Switch Servo Mode | Click homing, servo mode changes from CSP (Cyclic Synchronous Position mode) to PV (Profile Velocity mode) |
| 2 | First Retraction | Axis moves in reverse direction of homing direction for a retraction distance |
| 3 | First Homing | After retraction completes, moves toward homing direction until homing IO signal is triggered |
| 4 | Second Retraction | After triggering IO signal, turns back and retraces in reverse homing direction, distance same as retraction distance |
| 5 | Second Homing | After retraction completes, moves toward homing direction again. When IO signal is triggered, marks current encoder position as zero point. Servo mode returns from PV to CSP |
| 6 | Stop Motion | Robot immediately stops moving |

> Note: Homing function requires servo status to be in "Ready" state.

#### 4.2 Return Zero Configuration Page

![](./assets/wqkmgufad3wyccqe2u7dq.png)

| Parameter | Description |
| :--- | :--- |
| Homing Direction | Direction where sensor is placed on the axis. If sensor faces positive direction of axis, fill "Positive Limit", otherwise fill "Negative Limit". Positive direction of each axis can be viewed in Settings - Robot Parameters - DH Parameters |
| Return Zero Order (Priority) | Used for one-key homing and sequential return zero. Robot executes homing in order of filled priority. If you want J4-J7 to start homing simultaneously, set these 4 axes to same priority |
| Retraction Distance | Retraction distance to execute when axis performs homing (unit mm or degrees), retraction direction is opposite to homing direction |
| Trigger IO | IO port number where the axis IO sensor is connected |
| Enable Method | High enable or low enable. Example: When J1 moves toward homing direction and triggers sensor, IO changes from 0→1 (low to high), it is high enable |
| Homing Wait Time | Maximum time limit for entire homing process, preventing unlimited homing operation |

> Note: To avoid blade staying at HOM position when robot body moves, it is recommended that J1, J2, J3 priorities are higher than J4-J7.

#### 4.3 One-Key Homing, Pause Homing and Sequential Return Zero

| Control | Description |
| :--- | :--- |
| One-Key Homing | Same logic as single axis homing, but places all 7 axes into homing queue at once, homing in priority order, saving homing time and improving efficiency |
| Pause Homing | During homing, if emergency occurs, click pause homing to immediately end homing task and stop motion |
| Sequential Return Zero | Requires servo powered on to execute, returns to zero point in order of each axis priority |

#### 4.4 Homing Function Notes

| Serial | Notes |
| :--- | :--- |
| 1 | After homing task starts, keep hand on emergency stop button. Press immediately in emergency for safety |
| 2 | Homing preset speed: First homing 15mm/s, second homing 5mm/s, retraction speed 10mm/s. If speed is too slow causing timeout, adjust homing wait time |
| 3 | Safety speed limit: Homing speed cannot exceed 70% of servo pulse. If exceeded, moves at 70% |
| 4 | After successful homing, use zero point offset function to fill -305 degrees in J3 (specific offset depends on sensor position), click J3's [Set as Zero Point] to ensure 3-axis blade direction matches model diagram (facing X-axis positive direction) |

![](./assets/a3fwlpaprnshlgn6uvuji.png)

## 2. Pick-and-Place Logic Introduction

### 1. GETS Action (Pick)

![](./assets/sowvpbywlgyv0jbyhqrlm.png)

| Point Name | English Meaning | Description |
| :--- | :--- | :--- |
| TCH | Teach Position | Teaching position |
| GBH | Get Before Hold | Standby position before wafer pickup |
| GBX | Get Before eXtended | Extended position before wafer pickup |
| GWX | Get Wafer eXtended | Extended position at wafer pickup height (pick wafer here) |
| GAX | Get After eXtended | Extended position after wafer pickup |
| GAC | Get After Carry | Wafer holding position |
| GAH | Get After Hold | Standby position after wafer pickup |

#### Pick Logic (Speed reference sections 1.6, 1.7)

| Step | Action | Speed | Description (Purpose) |
| :--- | :--- | :--- | :--- |
| 1 | Return to TCH and HOM points | J1~J3: Joint motion [No-wafer speed]; J4~J7: Joint motion [Return home speed] | Ensure robot returns to known safe position before picking |
| 2 | Move to GBH point | Joint motion [No-wafer speed] | Prepare to enter pick process |
| 3 | Check blade has wafer IO | - | Detect if tool hand already has wafer; if yes, report error and stop, ensure no wafer on tool hand before picking |
| 4 | Check workstation interlock IO | - | If workstation is interlocked, report error and stop; otherwise allow entering GBX point, ensure safety conditions |
| 5 | Move to GBX point (output interlock signal first) | Linear motion [No-wafer speed] | Extend blade to front of wafer cassette ready for pickup |
| 6 | Move to GWX point | Linear motion [Low-speed area speed] | Lower to pickup height, pick wafer at GWX point |
| 7 | Check blade protrusion IO | - | Only check when blade is at HOM position, ensure wafer correctly placed during station movement |
| 8 | Move to GAX point | Linear motion [Low-speed area speed] | Lift wafer out of card slot |
| 9 | Move to GAC→GAH points | Linear motion [With-wafer speed] | Retract blade and extract wafer |
| 10 | Check wafer presence after reaching GAH point | - | If no wafer on tool hand, report pick failure, confirm pick success |
| 11 | Release workstation interlock output | - | Pick operation complete, this workstation allows other machines to enter |

### 2. PUTS Action (Place)

![](./assets/awj3pw8vm9dwatmnr704k.png)

| Point Name | English Meaning | Description |
| :--- | :--- | :--- |
| PBH | Put Before Hold | Standby position before wafer placement |
| PBX | Put Before eXtended | Extended position before wafer placement |
| PWX | Put Wafer eXtended | Extended position at wafer placement height (place wafer here) |
| PAX | Put After eXtended | Extended position after wafer placement |
| PAC | Put After Carry | Wafer holding position |
| PAH | Put After Hold | Standby position after wafer placement |

#### Place Logic (Speed reference sections 1.6, 1.7)

| Step | Action | Speed | Description (Purpose) |
| :--- | :--- | :--- | :--- |
| 1 | Return to TCH and HOM points | J1~J3: Joint motion [With-wafer speed]; J4~J7: Joint motion [Return home speed] | Ensure robot returns to known safe position before placing |
| 2 | Move to PBH point | Joint motion [With-wafer speed] | Prepare to enter place process |
| 3 | Check blade has wafer IO | - | If no wafer on tool hand, report error and stop, ensure wafer present before placing |
| 4 | Check workstation interlock IO | - | If workstation is interlocked, report error and stop; otherwise allow entering PBX point |
| 5 | Check blade protrusion IO | - | Only check when blade is at HOM position, ensure wafer correctly placed during station movement |
| 6 | Move to PBX point | Linear motion [Low-speed area speed] | Extend blade to front of wafer cassette ready for placement |
| 7 | Move to PWX point | Linear motion [Low-speed area speed] | Lower to placement height, place wafer at PWX point |
| 8 | Move to PAX point | Linear motion [Low-speed area speed] | Move blade down then retract |
| 9 | Move to PAC→PAH points | Linear motion [No-wafer speed] | Retract blade and return to standby position |
| 10 | Check wafer presence after reaching PAH point | - | If wafer still on tool hand, report place failure, confirm place success |
| 11 | Release workstation interlock output | - | Place operation complete, this workstation allows other machines to enter |

## 3. Host Computer Control

### 1. Preparation for Host Computer Control

#### Step 1: Wafer Cassette Configuration

Set wafer-related parameters in teach pendant's wafer cassette configuration interface:

| Configuration Item | Description |
| :--- | :--- |
| Wafer Cassette Parameters | Set basic information such as cassette type, size, etc. |
| Blade Parameters | Configure blade position, size and other parameters related to wafer gripping |
| Point Offset Parameters | Set offset values for different positions inside cassette to ensure robot can accurately locate each wafer |
| TCH Point | Define reference point when contacting wafer, ensuring stability during processing |
| HOM Point | Set robot's initial or safe position for returning during startup or reset |
| Joint and Linear Motion Speed | Set robot joint movement speed and linear motion speed, ensuring operation is both fast and smooth |

#### Step 2: Teach Pendant Communication Settings

Set communication-related parameters in teach pendant's communication settings interface:

| Configuration Item | Description |
| :--- | :--- |
| Controller IP Address | Confirm the IP address displayed on teach pendant is correct |
| Port Number | Default is 12800 (if cannot be modified, ensure host computer software matches this port) |
| Timeout Detection Time | Set based on actual communication needs to ensure data transmission reliability |

#### Step 3: Host Computer Software Settings

| Configuration Item | Description |
| :--- | :--- |
| Install Software | Ensure host computer software for wafer processing robot is installed |
| IP Address | Fill in controller IP address |
| Port Number | Fill in 12800 or other port matching host computer |
| Other Parameters | Configure other communication parameters as needed |
| Connection Test | Try to establish connection with controller, ensure communication is normal |
| Command Configuration | Write or call control commands based on actual needs (move to specified position, read status, etc.) |

#### Step 4: Communication Debugging

| Step | Description |
| :--- | :--- |
| Switch Mode | Switch teach pendant to "Run Mode" |
| Host Command Sending | Enter commands in host computer software for debugging, can write scripts to automatically send loop commands |
| Monitor Feedback | Observe controller response, check if working as expected |

### 2. Host Computer Supported Commands

#### 2.1 Command Sequence

| Type | Symbol/Description | Description |
| :--- | :--- | :--- |
| Command Delimiter (Primary Message) | `<` | Information flow start mark |
| Command Delimiter | `>` | Information flow end mark |
| Command Delimiter | `,` (comma) | Parameter separator |
| Command Delimiter | CRLF (Carriage Return + Line Feed) | Command message end mark |
| Ack (Secondary Message) | Sent after syntax check | Robot sends Ack after receiving command, confirmation contains same MesID as command |
| Ack Error Status | Busy | Robot is busy executing previous command |
| Ack Error Status | Checksum Error | Checksum is incorrect |

- If command syntax is incorrect, returns illegal command or invalid parameter error.

- If unexpected "LF" is detected in command, returns illegal format error.

**Note: Ack Code Command List**

![](./assets/slvdxc7r2la9fxs32ezo4.png)

**3. Response: Completion Message (sent after command execution completes)**

- Returns immediately after command ends.

- Completion message MesID is the same as the running command's MesID:

- If command executes successfully, returns <MesID,Success> or <MesID,Success,ResultData> in completion message

- If command execution fails, returns <MesID,Error,Error#,DeviceCode,ErrorMessage> in completion message

#### 2.2 Command Syntax

##### 2.2.1 Terminology List

| Parameter Name | Parameter Data | Description |
| :--- | :--- | :--- |
| RobotCode | R1 | Robot 1 |
| | R2 | Robot 2 |
| HandCode | H1 | Tool Hand 1 |
| | H2 | Tool Hand 2 |
| | H3 | H1-F: Uses hexadecimal to determine which tool hand to use, e.g., H3,3 = 0011, selects tool hand 1 and 2 |
| JointCode | J1 | First axis |
| | J2 | Second axis |
| | ... | ... |
| | J7 | Seventh axis |
| ModeCode | REAL | Confirm wafer presence during action (normal action) |
| | SIMU | Don't confirm wafer presence during action (test action) |
| SenseCode | 0 | No wafer |
| | 1 | Wafer present |
| | U | Wafer presence unknown |
| | E | Error state |
| Slot# | 1 | Slot 1 |
| | 2 | Slot 2 |
| | N | Slot N (N max=50) |
| Station Code | P1 | Station 1 |
| | P2 | Station 2 |
| | Pn | Station N |
| StatusCode | Rdy | Ready (servo on) state |
| | Bsy | Busy (robot action in progress) state |
| | Off | Servo disconnected state |
| | Err | Error state |
| | Tch | Teach mode |
| LocationCode | GBH...GAH | Action positions during pickup |
| | PBH...PAH | Action positions during placement |
| ErrorCount | 1 to 10 | Error history number |

##### 2.2.2 Command Format (Partial)

**CSTA**: Report Composite Status

- Function: Report current composite status.

- Syntax: "CSTA, DeviceCode"

DeviceCode: "R1" = Robot 1;

- Ack "Ack"

- Response "Success,CombinedAlignerResponse" (Robot)

"Success,R1, StatusCode, H1, ChuckCode, SenseCode, H2.ChuckCode,
SenseCode" (If manipulator 2 does not exist, no data after "H2".)

**GETS**: Pick Wafer

- Function: Pick wafer from specified slot of specified station.

- Syntax: "GETS, RobotCode, HandCode, StationCode, Slot#" Command

RobotCode: "R1" = Robot 1, "R2" = Robot 2

HandCode: "H1" = Manipulator 1, "H2" = Manipulator 2

StationCode: "P1"-"P25" = Station 1 to 25

- Ack "Ack"

- Response

"Success" (Normal end)

"Success, CombinedRobotResponse" (When CSTARESPONSE is ON)

"Error" (Error)

**PUTS**: Place Wafer

- Function: Place wafer into specified slot of specified station.

- Syntax: "PUTS, RobotCode, HandCode, StationCode, Slot#"

- Ack "Ack"

- Response

"Success" (Normal end)

"Success, CombinedRobotResponse" (When CSTARESPONSE is ON)

"Error" (Error)

**HOMH**: Move Manipulator and Joint Axes to Origin Position

- Function: Move manipulator and joint axes to origin position. Z-axis does not move to origin position.

- Syntax: "HOMH, RobotCode"

- Ack "Ack"

- Response

"Success" (Normal end)

"Success, CombinedRobotResponse" (When CSTARESPONSE is ON)

"Error" (Error)

**HOMA**: Move All Axes to Origin Position

- Function: Move all axes to origin position.

Robot: After moving manipulator and joint axes to origin position, move axes to specified origin position.

Calibrator: Move rotation axis to 0 degree position.

- Syntax: "HOMA, DeviceCode"

DeviceCode: "R1" = Robot 1, "R2" = Robot 2, "A1" = Calibrator 1

- Ack: "Ack" (Confirmation)

- Response: "Success" (Normal end)

"Success,CombinedRobotResponse" or

"Success, CombinedAlignerResponse" (When CSTARESPONSE is ON)

"Error" (Error)

**SENS**: Report Wafer Presence

- Function: Report wafer presence on specified device.

- Syntax: "SENS, RobotCode, HandCode", "SENS, AlignerCode" (For calibrator)

- Ack "Ack"

- Response: "Success, SenseCode"

SenseCode: "0" = No wafer, "1" = Wafer present, "U" = Wafer presence unknown, "E" = Error state (Sensor abnormality etc.)

**STAT**: Report Specified Device Status

- Function: Report specified device status.

- Syntax: "STAT, DeviceCode"

- Ack "Ack"

- Response: "Success, StatusCode"

StatusCode: "Rdy" = Ready state, "Bsy" = Busy (robot action in progress) state, "Off" = Servo disconnected state, "Er" = Error occurring, "Tch" = Operating with teach pendant

**SERV**: Enable Servo

- Function: Enable servo of specified device.

- Syntax: "SERV, DeviceCode"

- Ack "Ack"

- Response: "Success" (Normal end), "Error" (Error)

**STOP**: Disconnect Servo

- Function: Decelerate stop when specified device is in action, and disconnect servo.

- Syntax: "STOP, DeviceCode"

- Ack "Ack"

- Response "Success"

**SSPD**: Set Robot Action Speed

- Function: Set robot action speed.

- Syntax: "SSPD, DeviceCode, SpeedData"

SpeedData Unit: %, Range: 1.00 to 100.00

- Ack "Ack"

- Response "Success"

**RSPD**: Report Robot Action Speed Setting

- Function: Report robot action speed setting.

- Syntax: "RSPD, DeviceCode"

- Ack "Ack"

- Response "Success, SpeedData"

SpeedData Unit: %, Range: 1.00 to 100.00

**TCHP**: Teach Position

- Function: Perform position teaching on specified station's slot.

Register current position as the specified station and slot's teaching position.

Teaching position is saved in controller memory.

- Syntax: "TCHP, RobotCode, HandCode, StationCode, Slot#"

- Ack "Ack"

- Response "Success" (Normal end), "Error" (Error)

**SMOD**: Set Mode

- Function: Set wafer presence confirmation mode.

- Syntax: "SMOD, ModeCode"

ModeCode: "Real" = Execute wafer presence confirmation. "Simu" = Don't execute wafer presence confirmation. "Simu" is used for confirming robot action.

- Ack "Ack"

- Response: "Success" (Normal end), "Error" (Error)

**RMOD**: Report Mode Setting

- Function: Report current wafer presence confirmation mode setting status.

- Syntax: "RMOD"

- Ack: "Ack"

- Response "Success, ModeCode"

**MOVP**: Move to Specified Position

- Function: Move to specified position.

- Syntax: "MOVP, RobotCode, HandCode, StationCode, Slot#, LocationCode"

- Ack "Ack"

- Response "Success" (Normal end),
  "Success,CombinedRobotResponse" (When CSTARESPONSE is ON), "Error" (Error)

**MOVA**: Move to Absolute Position

- Function: Move a specific axis to absolute position.

- Syntax: "MOVA, RobotCode, JointCode, JointData"

- Ack "Ack"

- Response "Success" (Normal end),
  "Success,CombinedRobotResponse" (When CSTARESPONSE is ON), "Error" (Error)

**HOLD**: Hold Wafer or Enable Suction

- Function: Hold wafer or enable suction.

- Syntax: "HOLD, RobotCode, HandCode"

- Ack "Ack"

- Response "Success" (Normal end)

**RELS**: Release Wafer or Disable Suction

- Function: Release wafer or disable suction.

- Syntax: "RELS, RobotCode, HandCode"

- Ack "Ack"

- Response "Success" (Normal end)

**RPOS**: Report Current Coordinate Position

- Function: Report current joint coordinate position.

- Syntax: "RPOS, RobotCode"

- Ack "Ack"

- Response "Success,J1Data, J2Data, J3Data, J4Data, J5Data, J6Data, J7Data" (Normal end)

**RXYZ**: Report Current Coordinate Position

- Function: Report current Cartesian coordinate position.

- Syntax: "RXYZ, RobotCode"

- Ack "Ack"

- Response "Success,XData, YData, ZData, J4Data, J5Data, J6Data, J7Data" (Normal end)

**STCH**: Set Teaching Position

- Function: Set teaching position (joint) for specified station and tool hand.

- Syntax: "STCH, RobotCode, HandCode, StationCode, J1Data, J2Data, J3Data, J4Data, J5Data, J6Data, J7Data"

- Ack "Ack"

- Response "Success" (Normal end) / "Error" (Error)

**RTCH**: Report Teaching Position

- Function: Report teaching position (joint) for specified station and tool hand.

- Syntax: "RTCH, RobotCode, HandCode, StationCode"

- Ack "Ack"

- Response "Success,J1Data, J2Data, J3Data, J4Data, J5Data, J6Data, J7Data" (Normal end)

**CTCH**: Clear Teaching Position

- Function: Clear teaching position for specified station and tool hand.

- Syntax: "CTCH, RobotCode, HandCode, StationCode"

- Ack "Ack"

- Response "Success" (Normal end) / "Error" (Error)

**STXY**: Set Teaching Position

- Function: Set teaching position for specified station and tool hand.

- Syntax: "STXY, RobotCode, HandCode, StationCode, XData, YData, ZData, UData, HData"

- Ack "Ack"

- Response "Success" (Normal end)

**RTXY**: Report Teaching Position

- Function: Report teaching position for specified station and tool hand.

- Syntax: "RTXY, RobotCode, HandCode, StationCode"

- Ack "Ack"

- Response "Success,XData, YData, ZData, UData, HData" (Normal end)

**RNST**: Report Nearest Station

- Function: Report teaching position for specified station and tool hand.

- Syntax: "RNST, RobotCode, HandCode, StationCode"

- Ack "Ack"

- Response "Success, StationCode, Slot#, ExtendCode" (Normal end)

**CERR**: Clear Error

- Function: Clear all errors

- Syntax: "CERR, RobotCode"

- Ack "Ack"

- Response
  "Success" (Normal end), "Error,..." (Still has errors after clearing, needs further inspection)

### 3. Supported Command List

#### 3.1 Motion Commands

| Command | Meaning | Instruction Type | Special Description |
| :--- | :--- | :--- | :--- |
| PUTS,R1,H2,P5,1 | Place wafer | Motion | R1: Robot 1; H1-F uses hexadecimal to determine tool hand (e.g., H3,3=0011 means tool hand 1 and 2); P5: Wafer cassette station name; 1: Inner layer |
| GETS,R1,H1,P5,21 | Pick wafer | Motion | Same as above |
| HOMA,R1 | Full return HOM | Motion | First return blade J4567, then return body J123. After returning to HOM, release interlock signal and clear all errors |
| HOMH,R1 | Return HOM except Z-axis | Motion | Same as above |
| MOVP,R1,H1,P3,11,GBH | Move to point | Motion | Supports GBH, PBH. After reaching start point, pick-and-place commands don't need to return to HOM, continue directly from first point |
| MOVA,R1,J1,100 | Move axis to specified position | Motion | - |
| HOLD,R1,HD | Output specified blade clamp enable | Motion | - |
| RELS,R1,H4 | Output specified blade clamp disable | Motion | - |

#### 3.2 Non-Motion Commands

| Command | Meaning | Instruction Type | Individual Description |
| :--- | :--- | :--- | :--- |
| STAT,R1 | Report device status | Non-Motion | - |
| SERV,R1 | Enable servo | Non-Motion | - |
| CSTA,R1 | Query status | Non-Motion | Only supports R1 |
| SSPD,R1,50 | Set speed | Non-Motion | Third speed parameter range 1-100, cannot adjust speed during motion |
| RSPD,R1 | Get speed | Non-Motion | - |
| TCHP,R1,H1,P5,1 | Mark teach point | Non-Motion | Layer compensates to height. After setting, switch to teach pendant to view TCH point |
| RPOS,R1 | Query current joint position | Non-Motion | - |
| SMOD,REAL | Set mode | Non-Motion | Set four blades' wafer detection switch. After setting, switch teach pendant to view or check config file |
| RMOD | Read set mode | Non-Motion | Read blade wafer detection switch. If all enabled, reply REAL, otherwise reply SIMU |
| RXYZ,R1,H5 | Report current position XYZUH | Non-Motion | - |
| RTXY,R1,P5 | Report station TCH point XYZUH | Non-Motion | - |
| STXY,R1,H1,P5,0,0,0,0,0 | Set station TCH point XYZUH | Non-Motion | During motion, reply Error forbids modification. Switch teach pendant to view or check config file, synchronously update joint coordinates |
| RTCH,R1,H1,P5 | Report station TCH point J1-7 | Non-Motion | - |
| STCH,R1,H1,P5,0,0,0,0,0,0,0 | Set station TCH point J1-7 | Non-Motion | During motion, reply Error forbids modification. Switch teach pendant to view or check config file, synchronously update Cartesian coordinates |
| CTCH, R1, H1, P5 | Clear station TCH point | Non-Motion | - |
| RNST,R1,H1 | Report nearest station | Non-Motion | - |
| SENS,R1,H1 | Query blade wafer status | Non-Motion | - |
| STOP,R1 | Stop motion | Non-Motion | - |

## Appendix 1: System Operation and Running

### 1. T30 Teach Pendant Button Description

![](./assets/bjjk68j_jppf1xz15y2hd.png)

| Button Icon | Description |
| :--- | :--- |
| ![](./assets/0xwickog9jpf0-g8h0ud-.png) | Click [Servo] to switch servo state (Stop, Ready) |
| Supplement Icon | ![](./assets/qsyszzucwogexgyz9mvkz.png) ![](./assets/kowijfu_bcqhkpipzjyof.png) |
| ![](./assets/3iqe5uijlj_ogjr5bev-d.png) | Click [Robot] to switch current robot (only available in multi-robot mode) |
| ![](./assets/8zclgmjjjqdumbiiigily.png) | Click [External Axis] to switch between external axis and robot when connected (only available with external axis). Select external axis to jog current connected external axis, select robot to jog current robot |
| External Axis Supplement | ![](./assets/4zfq2opqtlk9dy9av5xqy.png) ![](./assets/vz7zbkl50pwtnthdwarse.png) |
| ![](./assets/bew3ftoov_2luskx6zinz.png) | Click [Zero] to return robot to zero position |
| ![](./assets/lo4qkw3via9apes_wuzcj.png) | Click [Reset] to move robot to recorded reset point position |
| ![](./assets/g2hwhuaixa6w-guhotns6.png) | Click [Clear Error] to clear error prompt when robot shows error |
| ![](./assets/_7dqsic5_gjxeqw011u7m.png) | Click [Circle] to enter drag mode, drag robot to target position. Note: Robot can only drag after successful recognition |
| ![](./assets/1tuhkeggyfkyt7gs2ozqt.png) | Click [F/B] to select forward or reverse during single step. Forward: Run from top to bottom; Reverse: Run from bottom to top |
| Forward/Reverse Icon | ![](./assets/nmtkxrp_2zg1dv_frj-il.png) (Forward) ![](./assets/jgq8fbcctwlnphcnee_bi.png) (Reverse) |
| ![](./assets/tamwi2htstmmycnkvftcu.png) | Click [Single Step] to run program in teach mode. Click [Single Step] to run first line, after completion click again to continue next line until entire job file completes |
| Single Step Icon | ![](./assets/tyudn5unzccgwahbm0o8e.png) |
| ![](./assets/zagzca2xkuamjzyw2au_t.png) | [V-] Decrease global speed, each click decreases 5% |
| V- Icon | ![](./assets/dxopj3pccrkuz5tx4edpe.png) |
| ![](./assets/0agzxm2gv_ccuhe4uplha.png) | [V+] Increase global speed, each click increases 5% |
| V+ Icon | ![](./assets/moi047vcjfam2dgwkpxwj.png) |
| ![](./assets/-6kg6v20n3jfr5rkcgjhk.png) | [Tool] Switch tool hand |
| Tool Switch Icon | ![](./assets/-jbaks9itvrmoujpabmp0.png) |
| ![](./assets/ixg_7d6zvlh2eez6vkbsb.png) | [Coordinate] Switch coordinates. Click coordinate button to cycle through joint, Cartesian, tool and user coordinates |
| Coordinate Switch Icon | ![](./assets/abkyjmja7xd-lu6twlje1.png) |
| ![](./assets/nkecbwtlyygopwbyiekbs.png) | [Switch Operation Mode] Knob left = Teach mode, center = Run mode, right = Remote mode |
| ![](./assets/eljs9iqwcyr0efgzyee-3.png) | [Emergency Stop Button] Press emergency stop during collision or runaway during program execution, robot stops |
| ![](./assets/kfbfykqcteev9u0aoaiyd.png) | [Start] Used to start program in run mode, click [Start] to begin program execution |
| ![](./assets/vqsgsez-xcwexibbnd_fb.png) | [Stop] Used to pause program in run mode, click [Stop] to pause running program |
| ![](./assets/cljjrnhhqvs_n1ykib99h.png) | [-] Negative direction of corresponding axis during teaching |
| ![](./assets/csi1qvyegqgsgy2m8clp-.png) | [+] Positive direction of corresponding axis during teaching |
| ![](./assets/ds_acil9t6b_ujnwgp7yb.png) | Rotate to switch previous/next line in program interface |
| ![](./assets/_m4t67c6ouxftnwehmpmo.png) | Button behind teach pendant grip: Press to middle to power on robot (servo); Press to bottom to power off servo; Release button to power off servo |

### 2. Monitor Interface Parameter Description

![](./assets/itoxxhdo0l6r7uzp67ljv.png)

[Shortcut Keys]

![](./assets/krrsiuaz0faue8cg-xh9e.png)

1. [Return Zero] Press power enable, click return zero to move robot to zero position.

Zero position description: Each coordinate system has a point where all axes are 0, called the coordinate system origin. For joint coordinate system, this point is called the zero position (position where robot's 1-7 axes joint coordinates are all 0).

2. [External Axis] Can be used to switch between current robot and external axis.

3. [Return Safety Point] Press power enable, click return safety point to move robot to set safety point position.

Settings - Reset Point Settings interface position is the set safety point.

4. [Teach Method Jog (Single)] Can switch between robot jog mode and drag mode.

![](./assets/djrogeucxos8zcykll0kg.png)

Drag description: After successful recognition, select drag method to switch to drag mode.

5. [Remove Teach Pendant] After removing teach pendant, controller and teach pendant connection is disconnected.

6. [Shutdown/Restart] Click to show the following prompt window. Users can select shutdown, restart, or cancel. Select shutdown to turn off controller and teach pendant, select restart to restart, select cancel to close prompt window.

![](./assets/v2pehevue_tdgj_zhydyx.png)

7. External Axis Single/Linked: In monitor, can switch external axis single/linked mode. Prerequisite: Calibrated external axis needed for linking.

Linked: When jogging external axis, robot can follow relative movement. When jogging robot, external axis doesn't move.

Single: When jogging robot, external axis stays still. When jogging external axis, robot stays still.

[Machine Coordinates]

1. Monitor robot's joint coordinates, Cartesian coordinates, tool coordinates, user coordinates during motion.

2. Detection distance: Detect distance from one point to another.

[IO Status]

If signal parameters are set during job file execution, digital and analog signals can be monitored in this interface.

As shown:

![](./assets/rb5t9ta8w6crqlkmczd4k.png)

[Axis Speed]

Based on set instruction speed and global speed parameters during robot movement, current speed and maximum speed can be monitored in Monitor - Axis Speed interface. As shown:

![](./assets/ny1ld2jcmj0vrumoy-pxv.png)

![](./assets/5hukovztsjb6iahnox2yq.png)

### 3. Status Bar Introduction

![](./assets/b88p24wtkskxtxvv7qppk.png)

### 4. Operation Modes

| Operation Mode | Description |
| :--- | :--- |
| Teach Mode / Run Mode / Remote Mode | Switch mode via teach pendant knob |

### 5. Servo Status

| Servo Status | Description |
| :--- | :--- |
| Stop, Ready | Click left servo function button to switch servo between stop and ready state |
| Running (Teach Mode) | Press "Enable Key", servo status switches to "Running" |
| Running (Run Mode) | Press "Start" button, servo status switches to "Running" |
| Alarm | Press "Emergency Stop Button" on control cabinet/teach pendant, servo status switches to "Alarm" |

### 6. Speed Status

| Speed Status | Description |
| :--- | :--- |
| Jog (Speed Range) | Speed range: [1%, 100%] |
| Jog (V+/V- Adjustment) | Press [V+], [V-] at bottom of teach pendant, speed increases or decreases 5% each time |
| Jog (Fine Adjustment) | Click [+], [-] shown below, speed increases or decreases 1% each time |
| Jog Fine Adjustment Icon | ![](./assets/rmldsec2qwy4xy9rlh8rt.png) |
| Fixed Distance Move (Function) | After setting speed and distance, jog robot. Robot will run set angle or distance then stop |
| Fixed Distance Move (Note) | If stopped during jog, re-jog will re-run set distance, not remaining distance |
| Fixed Distance Move (Default) | Default 0.1° under joint coordinates, 0.1mm under Cartesian coordinates |
| Fixed Distance Move (Speed Switch) | When switching from jog to fixed distance move, speed changes to default 10% (e.g., jog speed 50%, switching to fixed distance, speed changes to 10%) |
| Fixed Distance Move (Mode Limit) | Jog/fixed distance move can only be switched in teach mode, grayed out in other modes |

### 7. System Operation

#### 7.1 Teach Mode

**Function:**
1. Jog robot to move to desired position. For example, when teaching positions, need to jog each axis to TCH point;
2. After TCH calibration, can reduce speed to execute GETS, PUTS, return HOM and other commands to confirm if calibrated TCH point achieves expected trajectory and if pick-and-place trajectory is safe. If trajectory is safe, then host computer executing pick-and-place for this station will also be expected and safe.

**Operation Steps:**
1. Rotate operation mode knob to "Teach".

![](./assets/9gd60bzg2pg8uyqibssik.png)

2. First check servo [Ready State], need to switch servo state to "Ready".

![](./assets/m2xo0isclvo-_l_8r_zvg.png)

3. Confirm speed. Recommend using 5% speed first, low speed for safety confirmation, slowly adjust to appropriate speed.
4. Press power enable button.

![](./assets/3bjiksir5zqxqycbcqyzb.png)

5. Press J1+-, J2+-... on right side of teach pendant (J1-J7 correspond to axes 1-7). With person standing on robot lift axis side facing robot, axis correspondence is as follows:

| Axis | J1 | J2 | J3 | J4 | J5 | J6 | J7 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Represented Axis | Travel Axis | Lift Axis | Rotation Axis | Blade 1 | Blade 2 | Blade 3 | Blade 4 |
| Positive Direction | Left Hand | Up | Counterclockwise | Extend Forward | Extend Forward | Extend Forward | Extend Forward |

#### 7.2 Run Mode

**Function:** Switch mode for host computer to control robot.

After position teaching is complete, switch to run mode, then host computer can send commands to robot.

## Appendix 2: Teaching Steps

### 1. Set Station Count

Set [Total Wafer Cassette Count] in global configuration interface.

### 2. Set Configuration for a Station

In [Wafer Cassette Configuration] interface, select a station from current station dropdown. Can set station name, inner layers, layer spacing and IO configuration info. Click save after setting.

![](./assets/okpuubyyjhx_xe-tqyuka.png)

### 3. Enter TCH Calibration Interface

Enter TCH calibration interface, select the station just set.

Initially, TCH current mark status is "Unmarked".

![](./assets/ecnbtfsefeq0c_s5jsexv.png)

4. In teach mode, jog robot axes (operation steps in Appendix 1 Section 7). Note: Use low speed for safety confirmation. Use inch speed for fine adjustment.

Jog axis order:

> First jog J1, J2, J3 to move robot body close to wafer cassette;
>
> Jog J4 (blade 1) to extend slightly for alignment with cassette first layer. During this, adjust axis 2 (Z-axis lift) height to appropriate position, generally about 4mm lower than cassette first layer to ensure blade can safely extend;
>
> While jogging J4, observe if J1, J2 positions are reasonable;
>
> Use inch speed to fine-tune until blade card slot can just fit wafer position;
>
> Jog J2+ to make wafer bottom surface just touch blade top surface;
>
> Click Modify -- [Mark Current Point]
>
> Use 5% jog speed, enter Control - Pick-and-Place interface, use first layer, blade 1 for multiple pick-and-place to confirm TCH position accuracy.
>
> Use 5% jog speed, enter Control - Pick-and-Place interface, use any layer, any blade for multiple pick-and-place to confirm TCH position accuracy.

5. TCH position ideal is as follows:

As shown, yellow line is blade, dashed line is cassette first layer. J4 (blade 1) bottom surface should just contact wafer bottom surface.

![](./assets/btjgu3upmalanctxwhh3v.png)

## Appendix 3: Point-to-Point Motion Safety Obstacle Avoidance

When robot performs any point-to-point motion, it will first retract blade to HOM point, then move robot body (J1, J2, J3). Examples: return HOM, return zero, move to TCH point, MOVP.

## Appendix 4: Host Computer Emergency Stop Safety Obstacle Avoidance

When robot is executing pick-and-place task, if emergency occurs requiring pause or stop, using HOMA or HOMH commands can retract blade to safe position. However, if robot stops at pick-and-place lift position, directly retracting blade to HOM may damage wafer due to insufficient height. For this we have the following obstacle avoidance solution:

![](./assets/hdcrxwzgioaybxaoaamdy.png)

![](./assets/zuasfd1vap1r8p4sw6wwg.png)

## Appendix 5: Pick-and-Place Layer Height Obstacle Avoidance

As shown, if a station's maximum layer is 5, using blades 1 and 2 to layer 4 can normally pick and place. However, using blades 1 and 2 simultaneously to layer 5 will exceed maximum layer height. System will automatically calculate and report error to stop.

![](./assets/i_hc4cc1ebcpkmrpjoluf.png)

## Appendix 6: Host Computer Error Code List

| errorCode | Message | NoteText | Trigger Condition | Use or Not (Default check) |
| :--- | :--- | :--- | :--- | :--- |
| 1001 | {Stop Robot run failed, push quick stop button!} | Stop robot motion failed, press emergency stop | - | check |
| 1002 | {Turn TEACH/RUN/REMOTE switch on the operation panel to RUN.} | Need to switch to run mode | Sending command in non-run mode | check |
| 2001 | {The Last act command is running, please waiting.} | Wait for previous motion command to finish | Sending another motion command while first is executing | check |
| 2002 | {This command's checked sum is error, please check it.} | Command checksum error | - | check |
| 2003 | {This command's parameter is error, please check it.} | Command parameter error | - | check |
| 2004 | {This command is not exist, please check it.} | Command does not exist | - | check |
| 2005 | {This command's format is error, please check it.} | Command format error | - | check |
| 2006 | {Teachbox has uncleaned error, please check teachbox.} | Teach pendant has uncleared error, needs clearing | Error not cleared in run mode | check |
| 2007 | {Go HOM operation exist error, but cleaned already. Please check it.} | Return HOM operation still has error after clearing | No steps, theoretically one clear is enough | check |
| 3001 | {At absence check, unexpected wafer is detected. Check Hand_1 and sensor.} | Blade 1 should not have wafer | Pick-and-place first step detection trigger. Pick: check hand should be empty; Place: check hand should have wafer | check |
| 3002 | {At absence check, expected wafer is not detected. Check Hand_1 and sensor.} | Blade 1 should have wafer | Pick-and-place wafer detection abnormal | check |
| 3003 | {At absence check, unexpected wafer is detected. Check Hand_2 and sensor.} | Blade 2 should not have wafer | Pick-and-place wafer detection abnormal | check |
| 3004 | {At absence check, expected wafer is not detected. Check Hand_2 and sensor.} | Blade 2 should have wafer | Pick-and-place wafer detection abnormal | check |
| 3005 | {At absence check, unexpected wafer is detected. Check Hand_3 and sensor.} | Blade 3 should not have wafer | Pick-and-place wafer detection abnormal | check |
| 3006 | {At absence check, expected wafer is not detected. Check Hand_3 and sensor.} | Blade 3 should have wafer | Pick-and-place wafer detection abnormal | check |
| 3007 | {At absence check, unexpected wafer is detected. Check Hand_4 and sensor.} | Blade 4 should not have wafer | Pick-and-place wafer detection abnormal | check |
| 3008 | {At absence check, expected wafer is not detected. Check Hand_4 and sensor.} | Blade 4 should have wafer | Pick-and-place wafer detection abnormal | check |
| 3009 | {Destination Location Code [%s] set by [MOVP] command is not permitted from current location.} | MOVP target position unreachable | Triggered based on MOVP command info | x |
| 3010 | {The destination position is out of range by [MOVA] command.} | MOVA target exceeds limits | Axis exceeds limits in MOVA command | check |
| 3011 | {The destination position is out of range by [MOVR] command.} | MOVR target exceeds limits | Axis exceeds limits in MOVR command | x |
| 3012 | {Station's TCH position is not taught. Teach the position.} | Station TCH point not taught, needs teaching first | Station TCH point not taught | check |
| 3013 | {Robot is running act command, do not modify correlation parameter.} | Robot in motion, cannot modify parameters | Modifying parameters with non-motion command during motion command execution | check |
| 3014 | {Station interlock abnormal status. Check station interlock.} | Station interlock status abnormal | Interlock signal triggered during pick operation | check |
| 3015 | {Teach position Error. Current or specified position is out of AREA.} | TCHP/STCH/STXY command calibrated TCH point exceeds limits | - | x |
| 3016 | {The wafer.json not exist or create failed.} | wafer.json config file does not exist or creation failed, needs check | Triggered when wafer.json does not exist during non-motion command parameter write | check |
| 3017 | {Some position calculate forward solution failed. Check it.} | Position forward calculation failed, please check | Host command set position conversion failed | check |
| 3018 | {Some position calculate inverse solution failed. Check it.} | Position inverse calculation failed, please check | Host command set position conversion failed | check |
| 3019 | {The original position beyond axis limit. Please check TeachBox.} | Motion start point exceeds joint axis limit, please check teach pendant | Before motion command, check if current position exceeds limit | check |
| 4001 | {Moving to HOM position unexpected stop by [GETS] command. Check it.} | Pick step 1 reaching HOM point, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4002 | {Moving to Ready position unexpected stop by [GETS] command. Check it.} | Pick step 2 reaching Ready point, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4003 | {Moving to other position unexpected stop by [GETS] command. Check it.} | Pick step 3 running entire trajectory, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4004 | {Moving to HOM position unexpected stop by [PUTS] command. Check it.} | Place step 1 reaching HOM point, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4005 | {Moving to Ready position unexpected stop by [PUTS] command. Check it.} | Place step 2 reaching Ready point, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4006 | {Moving to other position unexpected stop by [PUTS] command. Check it.} | Place step 3 running entire trajectory, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4007 | {Moving to position unexpected stop by [MOVP] command. Check it.} | MOVP motion didn't reach target, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4008 | {Moving to position unexpected stop by [MOVA] command. Check it.} | MOVA motion didn't reach target, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4009 | {Moving to position unexpected stop by [HOMA] command. Check it.} | HOMA motion didn't reach target, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4010 | {Moving to position unexpected stop by [HOMH] command. Check it.} | HOMH motion didn't reach target, error stop | Emergency stop/limit exceeded etc. stopping motion | check |
| 4011 | {Teach position Error. Current or specified position is out of AREA.} | Teach point error, position exceeds limits | TCHP/STCH/STXY TCH point exceeds limits | check |
| 4012 | {Serial id beyond max records by [QERR] command.} | QERR command serial number exceeds max records | - | check |
| 4013 | {Pause running command failed. Please check it.} | Pause motion command failed, please check teach pendant | Internal interface call error, not easily triggered | check |
| 4014 | {Restart running command failed. Please check it.} | Restart motion command failed, please check teach pendant | Internal interface call error, not easily triggered | check |
| 4015 | {Exist error after clearing command. Please check teach box.} | Still has error after clear command, please check teach pendant | During CERR command, emergency stop or continuous error will trigger | check |
| 7100 | {GBX position is not created because of calculation error. Please check specified position or [GOFF] parameter.} | Cannot create GBX due to calculation error, related to GOFF offset | - | x |
| 7101 | {GBX position is not created because of limit error. Please check specified position or [GOFF] parameter.} | Cannot create GBX due to limit exceedance | - | x |
| 7102 | {GAC position is not created because of calculation error. Please check specified position or [GCNF] parameter.} | Cannot create GAC due to calculation error, related to GCNF parameter | - | x |
| 7103 | {GAC position is not created because of limit error. Please check specified position or [GCNF] parameter.} | Cannot create GAC due to limit exceedance | - | x |
| 7104 | {PBX position is not created because of calculation error. Please check specified position or [PADJ] parameter.} | Cannot create PBX due to calculation error, related to PADJ parameter | - | x |
| 7105 | {PBX position is not created because of limit error. Please check specified position or [PADJ] parameter.} | Cannot create PBX due to limit exceedance | - | x |
| 7106 | {PAX position is not created because of calculation error. Please check specified position or [POFF,PADJ] parameter.} | Cannot create PAX due to calculation error, related to POFF, PADJ parameters | - | x |
| 7107 | {PAX position is not created because of limit error. Please check specified position or [POFF,PADJ] parameter.} | Cannot create PAX due to limit exceedance | - | x |
| 7108 | {PAC position is not created because of calculation error. Please check specified position or [PCNF,PADJ] parameter.} | Cannot create PAC due to calculation error, related to PCNF, PADJ parameters | - | x |
| 7109 | {PAC position is not created because of limit error. Please check specified position or [PCNF,PADJ] parameter.} | Cannot create PAC due to limit exceedance | - | x |

## Appendix 7: Process Configuration File Parameter List (wafer.json)

| Module / Identifier Key | Parameter Name | Meaning |
| :--- | :--- | :--- |
| **TCP Communication Parameters Tcp_Comm_Params** | chars_time_out | Timeout detection |
| | port | TCP communication port |
| | protocol_time_out | Invalid parameter |
| | response_time_out | Invalid parameter |
| **Controller ID controllerID** | controllerID | Controller ID |
| **IO Protrusion Error epsilon** | epsilon | Protrusion detection threshold, 0.3 means HOM coordinate plus/minus 0.3mm stops protrusion detection |
| **Forward/Reverse Grip grip_type** | grip_type | 0: Forward grip, 1: Reverse grip |
| **Tool Hand Configuration hand_config** | check_is_exist_wafer_enable | Wafer detection enable |
| | check_wafer_exist_din | Wafer detection input signal (16 channels per group: 1=1-1, 2=1-2, 17=2-1, same below) |
| | check_wafer_exist_din_2 | Second group wafer detection input signal |
| | check_wafer_exist_din_trigger_type | Wafer detection DIN trigger type: 0=low enable has wafer, 1=high enable has wafer |
| | check_wafer_exist_din_trigger_type_2 | Second group wafer detection DIN trigger type |
| | check_wafer_protrusion_din | Wafer protrusion check Din list |
| | check_wafer_protrusion_din_type | Wafer protrusion enable type: 0=low enable protrusion, 1=high enable protrusion |
| | check_wafer_protrusion_enable | Wafer protrusion check enable |
| | hand_control_dout | Gripper output IO |
| | hand_control_dout_trigger_type | Gripper IO output high/low enable: 0=low enable close gripper, 1=high enable close gripper |
| | mapping_sensor_config | Mapping sensor configuration |
| | using_mapping_sensor | Whether to use mapping sensor |
| **Tool Hand Total Count hand_sum** | hand_sum | Total tool hand count |
| **Tool Hand Type hand_type** | hand_type | 0: Gripper, 1: Suction |
| **HOM Point Coordinates home_position** | home_position | HOM point joint coordinates |
| **Current Blade Number inquireHand** | inquireHand | Current tool hand: 0=none, 1=blade 1, 2=blade 2, 3=blade 3, 4=blade 4 |
| **Joint Speed Parameters joint_speed_params** | go_home_speed_for_host_ | Host control return zero speed |
| | go_home_speed_for_teach_ | Teach pendant control return zero speed |
| | low_speed_for_host_ | Host control low speed |
| | low_speed_for_teach_ | Teach pendant control low speed |
| | speed_for_host_with_wafer_ | Host control with-wafer speed |
| | speed_for_host_without_wafer_ | Host control no-wafer speed |
| | speed_for_teach_with_wafer_ | Teach pendant control with-wafer speed |
| | speed_for_teach_without_wafer_ | Teach pendant control no-wafer speed |
| | speed_in_low_area_for_teach_ | Teach pendant control low-speed area speed |
| | speed_of_low_area_for_host_ | Host control low-speed area speed |
| **Linear Speed Parameters line_speed_params** | go_home_speed_for_host_ | Host control return zero speed |
| | go_home_speed_for_teach_ | Teach pendant control return zero speed |
| | inch_speed_for_teach_ | Teach pendant inch speed |
| | jog_speed_for_teach_ | Global speed percentage maximum limit |
| | low_speed_for_host_ | Host control low speed |
| | low_speed_for_teach_ | Teach pendant control low speed |
| | speed_for_host_with_wafer_ | Host control with-wafer speed |
| | speed_for_host_without_wafer_ | Host control no-wafer speed |
| | speed_for_teach_with_wafer_ | Teach pendant control with-wafer speed |
| | speed_for_teach_without_wafer_ | Teach pendant control no-wafer speed |
| | speed_in_low_area_for_teach_ | Teach pendant control low-speed area speed |
| | speed_of_low_area_for_host_ | Host control low-speed area speed |
| **Homing Speed pv_speed** | liner_return_speed | Linear return speed |
| | first_search_speed | First homing speed |
| | return_speed | Retraction speed |
| | second_search_speed | Second homing speed |
| | wait_time_s | Homing wait time (seconds, must complete within 50 seconds or error) |
| **Homing Parameters search_zero_params_** | go_zero_order | Homing order |
| | io_trigger_type | IO trigger type: 1=high enable trigger, 0=low enable trigger |
| | return_distance | Retraction distance |
| | search_direction | Homing direction: 0=negative limit direction, 1=positive limit direction |
| | trigger_din | Trigger IO: 0=none, 1=1-1, 17=2-1 |
| **Station Configuration station_config (Each station)** | TeachParam | TCH point parameter set |
| | Mcs_position | Cartesian coordinates |
| | Tch_is_calibration | TCH calibrated or not |
| | joint_position | Joint coordinates |
| | inner_layers | Layer count |
| | interlock_din | Interlock signal Din (17=2-1) |
| | interlock_din_type | Interlock Din type: 0=low enable interlock, 1=high enable interlock |
| | interlock_dout | Interlock signal Dout (21=2-5) |
| | interlock_dout_type | Interlock Dout type: 0=low enable interlock, 1=high enable interlock |
| | interlock_enable | Interlock enable: 0=disable interlock detection, 1=enable interlock detection |
| | inverse_grip_gets_offset_group | Reverse grip pick offset |
| | inverse_grip_puts_offset_group | Reverse grip place offset |
| | layers_pinch | Layer height |
| | offset_group | Forward grip offset |
| | station_type | Station type |
| **Station Total Count station_sum** | station_sum | Station total count |
| **Config File Version Number version** | version | Config file version |

---

## AI Search Q&A

| Serial | Question | Answer |
| :--- | :--- | :--- |
| 1 | What main content does the wafer process document include? | Includes wafer cassette configuration, TCH teaching, blade configuration, pick-and-place control interface, communication settings, auto homing, GETS/PUTS pick-and-place action steps, host command protocol (motion/non-motion), TCH teaching steps, safety obstacle avoidance, error code list, process config file parameter table, etc. |
| 2 | Why do image paths show as `./assets/xxx.png`? | All images are organized in the same directory `assets` folder, paths have been unified to remove `media` subdirectory, ensuring documents and resources correspond one-to-one |
| 3 | How to set wafer cassette station total count? | Enter [Global Configuration] interface, set in "Total Wafer Cassette Count" parameter, restart after save to take effect |
| 4 | How to jog axes during TCH calibration? | In order: First jog J1 (travel axis), J2 (lift axis), J3 (rotation axis) to move body close to cassette; then jog J4-J7 (blade 1-4) to extend and align; recommend starting from 5% low speed, use inch speed for fine adjustment |
| 5 | What are the steps for GETS (pick) action? | Step 1 return HOM; Step 2 to Ready start point (Ready->BHD->ACD->TCH->TCHH->TCH); Step 3 to HOM complete pick, total 3-step action sequence |
| 6 | What is the difference between PUTS (place) and GETS? | Place steps are same but direction reversed; no-wafer detection checks hand has wafer first; lift action is TCH->PBH->PBG->PBD; error code range is 4004-4006 (pick is 4001-4003) |
| 7 | What are the default parameters for host-robot communication? | Mode: TCP Server; Local port: 23; IP: 192.168.5.10; Baud rate 115200; Need to send `CMD_IDX` header followed by CR-ending command |
| 8 | What motion commands does host support? | PUTS (place), GETS (pick), HOMA (full return HOM), HOMH (return HOM except Z-axis), MOVP (move to point), MOVA (single axis move), HOLD (clamp enable), RELS (clamp disable) total 8 commands |
| 9 | What do error codes 3001 and 3002 represent? | 3001 = Blade 1 should not have wafer but detected (hand should be empty during pick); 3002 = Blade 1 should have wafer but not detected; 3003-3008 correspond to same conditions for blades 2, 3, 4 |
| 10 | How to handle error code 1002? | 1002 = Need to switch to run mode. Rotate teach pendant operation mode knob to center "RUN" position, allowing host to send motion commands |
| 11 | How to perform auto homing? | Enter [General Parameter Settings] - [Auto Homing], click corresponding axis to start homing. Process: First fast homing->hit limit->retract->second slow homing->offset compensation |
| 12 | What is the difference between forward and reverse grip? | Forward grip (grip_type=0): Blade inserts from below wafer and supports; Reverse grip (grip_type=1): Blade presses from above wafer to grip. Need to separately set `offset_group` and `inverse_grip_*_offset_group` offset parameters |
| 13 | What is the difference between HOMA and HOMH? | HOMA = Full return HOM (all J1-J7); HOMH = Return HOM except Z-axis (J2 lift doesn't move, only retract blade and other body axes), commonly used for maintaining height emergency retraction |
| 14 | What are GBH/PBH in MOVP command? | GBH = GETS start height point; PBH = PUTS start height point. After MOVP to this point, subsequent GETS/PUTS don't return to HOM, continue directly from start point, improving cycle time |
| 15 | How to set station interlock signal? | Set interlock Din/Dout and type in [Wafer Cassette Configuration]. interlock_din=17 means Din2-1; type=0 low enable/1 high enable; enable=1 enables interlock detection |
| 16 | How to switch teach pendant teach mode? How to adjust speed? | Rotate knob left=teach mode; V+/V- each step plus/minus 5%; interface plus/minus fine adjustment plus/minus 1%; recommend first TCH use 5%; inch fine adjustment 0.1 degree/0.1mm; switching to fixed distance move automatically reduces to default 10% |
| 17 | How to recover after emergency stop? | Unscrew emergency stop button->switch back to teach mode->click [Clear Error] button->click [Servo] to switch to ready state->execute HOMA to return to HOM->switch back to run mode |
| 18 | What is the safety obstacle avoidance mechanism for point-to-point motion? | Any point-to-point (MOVP/HOMA/zero/move to TCH) will first retract blade J4-J7 to HOM position, then move body J1-J2-J3, avoiding blade collision with cassette or machine when extended |
| 19 | How does layer height obstacle avoidance work? | If blade number x layer number combination exceeds maximum allowed height (e.g., double blades simultaneously to layer 5 top), system automatically reports error to stop, preventing interference with cassette top or machine |
| 20 | How to avoid obstacles when blade height is insufficient after emergency stop? | Host emergency stop strategy: If stopped at intermediate lift height, first raise J2 to safe height then retract blade; prevent wafer edge hitting cassette wall due to insufficient height during direct retraction |
| 21 | What is the process config file wafer.json path and modification notes? | Config file read by system, parameters written in non-motion commands. Save after modification; if not exist or creation failed triggers error code 3016. Cannot modify during motion (error code 3013) |
| 22 | How to verify TCH calibration accuracy? | Teach mode low speed (5%)->control interface->GETS/PUTS first layer single tool hand verification->any layer any blade multiple verification->confirm card slot fits and no collision before switching to run mode |
| 23 | What device status does STAT command return? | STAT,R1 returns device status (ready/running/alarm/interlock abnormal); CSTA queries more detailed status; motion commands need interval use with non-motion commands |
| 24 | What is the meaning of character timeout (chars_time_out) during communication? | If character interval within same frame command exceeds timeout threshold, determined as broken frame; combined with protocol/response timeout ensures TCP command completeness |
| 25 | What happens when homing wait time wait_time_s exceeds 50 seconds? | Triggers homing timeout alarm, need to check limit trigger direction, trigger Din type, retraction distance/speed are reasonable; confirm search_direction matches io_trigger_type |

---

## Version History

| Version | Date | Author | Changes |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-07-01 | jmz-09 | Initial version. Completed wafer process manual structuring: Added frontmatter, unified image paths (assets directory), converted all ASCII tables to standard Markdown tables (Global Configuration/TCH/Cassette Configuration/Blade Configuration/Point Offset/Joint Speed/Linear Speed/Pick-and-Place Command Table/Error Code List/Process Config Parameter Table); Added 25 AI search Q&A pairs; Added version history |
| | | | |

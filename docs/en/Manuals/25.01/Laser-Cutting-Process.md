---
title: "Laser Cutting Process"
description: "Guidance instructions for laser cutting process"
author: "qiuzegai"
date: "2026-06-30"
tags: ["INEXBOT", "Laser Cutting", "Cutting Parameters"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Laser Cutting Process

## Process Introduction

The laser cutting process is divided into two parts: piercing and cutting. The cutting process performs piercing first. Piercing-related parameters and cutting mode parameters are set in the global variables, while cutting gas pressure and power parameters are set in the cutting variables. Cutting and piercing are physically identical; the distinction is made to achieve better cutting results. Piercing ensures the material is fully penetrated at non-edge positions, preventing incomplete cuts, and allows reducing laser efficiency in subsequent cutting to save energy.

During the cutting process, continuous gas blowing is maintained, serving two purposes: first, to blow away residue generated during cutting, ensuring smooth and clean cut surfaces; second, to improve cutting efficiency — the oxygen concentration of the blown gas affects cutting efficiency, and within a safe range, higher concentration yields higher efficiency.

Combined with offline programming, complex trajectory cutting can be achieved.

## Global Parameters

Open the teach pendant, enter the "Process" interface, select "Laser Cutting Process", and enter the "Global Parameters" interface.

![](./assets/p4mjqqb83puf3ghzc7xym.png)

### Global Parameter Description

1. Piercing Settings:

- Laser Power: Laser source power during piercing, measured in W. Higher power increases piercing efficiency but also makes the cut surface rougher.

- Gas Pressure: Gas pressure output level. Gas pressure controls cleaning residue on the back of the cut, ensuring smooth and clean cut surfaces.

- Laser Frequency: Number of laser pulses emitted per second.

- Piercing Time: Duration of piercing after the laser starts. The duration must ensure the current workpiece is fully penetrated.

- Laser Duty Cycle: Proportion of laser operation within a unit of time. For example, 66% means the laser operates for 0.66 seconds within one second.

2. Cutting Mode:

- Position Cutting: Run the cutting trajectory after piercing reaches position.

- Direct Cutting: Run the cutting trajectory directly without piercing.

3. Gas Off Mode:

- Delayed Gas Off: Close gas blowing after laser cutting ends.

- Early Gas Off: Close gas before laser cutting ends.

Gas Off Time: Based on the set gas off mode, the time to close gas early or delay.

Early Gas Feed Time: How much time before laser cutting starts to begin feeding gas.

Wait for Lift Time: How long to wait after laser cutting is complete before lifting.

Wait for Follow Time: Maximum time to wait for the follow-in-position signal after sending the follow signal.

Retract Distance: Retract distance when laser cutting resumes after interruption.

Note: After receiving the follow-in-position signal, the robot immediately starts running along the cutting trajectory. If the follow-in-position signal is not received within this time, the system will report a laser cutting follow-in-position timeout error.

## Cutting Parameters

### Cutting Parameter Description

Open the teach pendant, enter the "Process" interface, select "Laser Cutting Process", and enter the "Cutting Parameters" interface.

![](./assets/cjietfkndbjzu5j1tzcrn.png)

Process Number: Save multiple parameter sets that can be called in instructions.

Gas Pressure: Gas pressure during cutting.

Laser Power: Laser source power during cutting.

Laser Frequency: Number of laser pulses emitted per second.

Laser Duty Cycle: Proportion of laser operation within a unit of time. For example, 66% means the laser operates for 0.66 seconds within one second.

Data Source:

## Analog Matching

Enter the "Process" interface, select "Laser Cutting Process", and enter the "Analog Matching" interface.

![](./assets/5ybatggppledukjuz6gov.png)

Usage is the same as welding current/voltage matching. The system calculates a ratio coefficient based on the set voltage value, actual power value, and actual gas pressure value.

## IO Settings

Divided into 4 parts: Control Operations, Status Indicators, Power & Gas Pressure, and PWM. The specific interface for each part is shown in the figures below.

### Control Operations:

![](./assets/zmcfvnka2c8hnmb46m4ya.png)

Home Signal: After the corresponding signal is output, the laser returns to home.

Lift Signal: After the corresponding signal is output, the laser lifts up.

Follow Signal: After the corresponding signal is output, the laser starts following.

Shutter Enable: After the corresponding signal is output, the shutter opens.

Gas Blow Enable: After the corresponding signal is output, gas blowing starts.

Capacitance Calibration: After the corresponding signal is output, it checks whether a return signal indicates successful calibration.

### Status Indicators

![](./assets/opdb5p6tyt8hpdo0vwb0l.png)

Dock Position: After the height adjuster stops at position, the corresponding port will have an input signal.

Home Position: After the height adjuster returns to home position, the corresponding port will have an input signal.

Follow Position: After the height adjuster reaches follow position, the corresponding port will have an input signal.

Piercing Position: After laser cutting piercing reaches position, the corresponding port will have an input signal.

Laser Fault: When a laser fault occurs, the corresponding port has an input signal and reports an error to stop.

Height Adjuster Fault: When a height adjuster fault occurs, the corresponding port has an input signal and reports an error to stop.

Water Chiller Fault: When a water chiller fault occurs, the corresponding port has an input signal and reports an error to stop.

Gas Pressure Fault: When a gas pressure fault occurs, the corresponding port has an input signal and reports an error to stop.

Capacitance Calibration: After the height adjuster returns the corresponding signal, calibration is successful.

### Power & Gas Pressure

![](./assets/ndrw3cakgve_bkuvzmkae.png)

Laser Power: Analog port controlling laser power. Controls actual output based on analog output.

Gas Pressure: Analog port controlling gas pressure. Controls actual output based on analog output.

### PWM

![](./assets/3uen3zigpdv8wylz16wer.png)

Laser Frequency Duty Cycle: Can be switched between two ports based on the R4 PWMIO board. Only boards with PWMIO can select ports.

## Manual Operations

### Laser Source

![](./assets/n_ewutpeyivls9algho6i.png)

Shutter Switch: Similar to welding enable. Must be opened to emit light. The shutter switch must be manually opened; it will not open automatically.

Pulse Power: Laser source power during pulsing.

Pulse Time: Single pulse duration.

Pulse Gas Pressure: Gas pressure during pulsing.

Gas Check Time: Single gas check duration. Repeated checks within this time will prompt a notification.

Pulse Frequency: Number of laser pulses emitted per second during pulsing.

Pulse Button: Used for debugging laser parameters. After setting the corresponding IO, click to emit light for adjustment.

Gas Check: Used for debugging laser parameters. After setting the corresponding IO, gas pressure checks can be performed for adjustment.

### Height Following System

![](./assets/uyo7te7ahvo_tchyo76ez.png)

The Lift, Home, and Follow buttons control the laser source respectively. They require IO binding before use. The status indicator turns green when in position.

Capacitance Calibration: New capacitance calibration added. Calibration requires the IO input/output to be set up and the height adjuster to return input normally. The status indicator turns green after successful calibration.

### Alarm Masking

![](./assets/affqslyh1qojanifpyjdx.png)

When a corresponding fault is triggered, the robot stops. The alarm masking enable can only be opened after the corresponding alarm is triggered. Set the alarm masking time as needed. During this time, move the robot to clear the alarm. After the masking time expires, if the alarm signal still exists, it will report the error and power off again.

## Instruction Description

### Laser Start

![](./assets/ddqixpdpuadfbfezzpfc2.png)

Format: LASER_ON [Instruction Name] ID=1 [Process Number] Height adjuster: follow at start, don't follow at end [Height Adjuster Follow Option].

Function: Start cutting after reaching the cutting start point.

Parameters:

| Parameter | Description |
| :--: | :-- |
| ID | Laser cutting process number, range (1,500) |
| Height Adjuster | **Follow at start, don't follow at end** <br> Must receive follow-in-position signal to continue. Must be paired with End Follow in the laser end instruction. If the laser end's height adjuster option is set to Continue Follow Without Light, a mismatch warning will appear and End Follow will be used by default. <br> At start, sends follow signal and opens gas blow enable. After receiving follow-in-position signal, runs the next instruction. At end, closes follow signal and gas blow enable. |
| Height Adjuster | **Follow only, no light or gas** <br> Must receive follow-in-position signal to continue. Must be paired with End Follow in the laser end instruction. If the laser end's height adjuster option is set to Continue Follow Without Light, a mismatch warning will appear and End Follow will be used by default. <br> At start, sends follow signal and closes gas blow enable and shutter enable. After receiving follow-in-position signal, runs the next instruction. At end, closes follow signal. |
| Height Adjuster | **No follow, with light and gas** <br> Does not need to receive follow-in-position signal to continue. Must be paired with End Follow in the laser end instruction. If the laser end's height adjuster option is set to Continue Follow Without Light, a mismatch warning will appear and End Follow will be used by default. <br> At start, masks follow-in-position signal and does not send follow signal. However, when the shutter switch is on, light is emitted normally and gas blow enable is also opened. |
| Height Adjuster | **Continue follow at end** <br> Must receive follow-in-position signal to continue. Must be paired with Continue Follow Without Light in the laser end instruction. If the laser end's height adjuster option is set to End Follow, a mismatch warning will appear and End Follow will be used by default. <br> At start, sends follow signal and opens gas blow enable. After receiving follow-in-position signal, runs the next instruction. At end, closes shutter enable and gas blow enable but does not close follow signal. |

Signal processing at different connection points:

Follow-to-Follow (first laser start instruction should have lift signal, second laser start only has follow signal).

Continue Follow - Continue Follow.

Continue Follow - Follow Without Light or Gas.

Continue Follow - Start Follow.

Follow-to-No Follow (no follow at start masks follow signal; continues even without receiving any signal).

Continue Follow - No Follow With Light and Gas.

No Follow-to-Follow (laser end needs lift signal, laser start needs follow signal).

Start Follow - Continue Follow.

Start Follow - Start Follow.

Start Follow - Follow Only Without Light or Gas.

No Follow With Light and Gas - Continue Follow.

No Follow With Light and Gas - Start Follow.

No Follow With Light and Gas - Follow Only Without Light or Gas.

Follow Only Without Light or Gas - Continue Follow.

Follow Only Without Light or Gas - Start Follow.

Follow Only Without Light or Gas - Follow Only Without Light or Gas.

No Follow-to-No Follow (laser end has lift signal, laser start masks follow signal).

Start Follow - No Follow With Light and Gas.

No Follow With Light and Gas - No Follow With Light and Gas.

Follow Only Without Light or Gas - No Follow With Light and Gas.

### Laser End

![](./assets/u1v4idvs8g3azduxr7gzi.png)

Format: LASER_OFF [Instruction Name] ID=1 [Process Number] Height Adjuster = End Follow [Height Adjuster Follow Option].

Function: Stop cutting after reaching the cutting end point.

Parameters:

| Parameter | Description |
| :--: | :-- |
| ID | Laser cutting process number, range (1,500) |
| Height Adjuster | **End Follow** <br> Height adjuster resets and stops running. |
| Height Adjuster | **Continue Follow Without Light** <br> At cutting end, closes shutter enable and gas blow enable while continuously sending follow signal. After receiving follow-in-position signal, continues running. |

### Cut Circle

![](./assets/k_wngc5jwj-f6ipbl_tet.png)

Format: LASER_CIRCLE [Instruction Name] P/GP [Center Point] R [Radius] V [Maximum Speed] ACC [Acceleration Ratio] DEC [Deceleration Ratio] M [Compensation] TIME [Early Execution Time, displays 0 if not set].

Function: Set cut circle parameters. When this instruction is reached, run the cut circle trajectory.

Parameters:

| Parameter | Description |
| :--: | :-- |
| Center Point | Center point of the cut circle trajectory. Uses local position variable (P) or global position variable (GP). |
| Radius (r) | Joint interpolation speed, range [1,3000]. |
| Maximum Speed | Instruction speed during circle cutting, range [1,999]. |
| Acceleration | Acceleration ratio during circle cutting, range [1,100]. |
| Deceleration | Deceleration ratio during circle cutting, range [1,100]. |
| Compensation | After completing the full circle, continue running the circle trajectory by the compensation distance, range [0,500]. |
| TIME | Early execution time. Same as motion control instructions' early execution time — the time for the next non-motion instruction to execute early. Unit: ms. |

### Laser Setting

![](./assets/k3p-4qnhps9ek4c1qgrzb.png)

Format: LASER_SET [Instruction Name] ID [Process Number] TEMP [Use Temporary Process Parameters] (PRESS [Gas Pressure] P [Power] FREQ [Frequency] DUTY [Duty Cycle] (Temporary Process Parameters))

Function: This instruction can modify gas pressure, power, frequency, and duty cycle during cutting via instructions, without pausing.

Parameters:

| Parameter | Description |
| :--: | :-- |
| Process Number | Laser cutting process number, range [1,500]. Can bind variables. |
| Use Temporary Process Parameters | If the temporary parameter switch is not enabled, gas pressure, laser power, laser frequency, and laser duty cycle use values set in the process parameter interface. When enabled, the user can modify gas pressure, laser power, laser frequency, laser duty cycle, and other parameters at any time based on the environment. |
| Gas Pressure | Gas pressure for laser cutting, range [1-99999] kPa. Can bind variables. |
| Laser Power | Laser power for laser cutting, range [1-99999] W. Can bind variables. |
| Laser Frequency | Number of laser pulses emitted per second, range [1-99999] Hz. Can bind variables. |
| Laser Duty Cycle | Proportion of laser output signal duty time, range [0,100]%. Can bind variables. |

**Example:**

![](./assets/nhtpmdhtp_6z1ccg-yakz.png)

Laser instructions support straight lines, arcs, full circles, and curves. Usage is straightforward.

Cut circle is special — it needs to run based on the previous point. If the previous motion instruction's point is P0001, the cut circle's center point must also be set to P0001.

## Q&A for Retrieval

**Q: What are the two parts of the laser cutting process?**

A: The laser cutting process is divided into piercing and cutting. The cutting process performs piercing first. Piercing-related parameters and cutting mode parameters are set in the global variables, while cutting gas pressure and power parameters are set in the cutting variables.

**Q: What is the purpose of gas blowing during laser cutting?**

A: Gas blowing during laser cutting serves two purposes: first, to blow away residue generated during cutting, ensuring smooth and clean cut surfaces; second, to improve cutting efficiency — the oxygen concentration of the blown gas affects cutting efficiency, and within a safe range, higher concentration yields higher efficiency.

**Q: What is piercing setting?**

A: Piercing setting is the parameter configuration for penetrating the material at non-edge positions before laser cutting. It includes laser power, gas pressure, laser frequency, piercing time, and laser duty cycle, ensuring the material is fully penetrated.

**Q: How does laser power affect piercing?**

A: Laser power is the laser source power during piercing, measured in W. Higher power increases piercing efficiency but also makes the cut surface rougher.

**Q: What are the laser cutting modes?**

A: Laser cutting modes include position cutting and direct cutting. Position cutting runs the cutting trajectory after piercing reaches position. Direct cutting runs the cutting trajectory directly without piercing.

**Q: What are the gas off modes?**

A: Gas off modes include delayed gas off and early gas off. Delayed gas off closes gas blowing after laser cutting ends. Early gas off closes gas before laser cutting ends.

**Q: What are cutting parameters?**

A: Cutting parameters are used during the cutting process, including process number, gas pressure, laser power, laser frequency, and laser duty cycle. Multiple parameter sets can be saved and called in instructions.

**Q: What is analog matching?**

A: The analog matching function is similar to welding current/voltage matching. The system calculates a ratio coefficient based on the set voltage value, actual power value, and actual gas pressure value.

**Q: How many parts does IO settings have?**

A: IO settings are divided into 4 parts: Control Operations, Status Indicators, Power & Gas Pressure, and PWM.

**Q: What signals are included in Control Operations?**

A: Control Operations include home signal, lift signal, follow signal, shutter enable, gas blow enable, and capacitance calibration signals.

**Q: What signals are included in Status Indicators?**

A: Status Indicators include dock position, home position, follow position, piercing position, laser fault, height adjuster fault, water chiller fault, gas pressure fault, and capacitance calibration signals.

**Q: What is the function of the shutter switch?**

A: The shutter switch is similar to welding enable. It must be opened to emit light. The shutter switch must be manually opened; it will not open automatically.

**Q: What operations does the height following system include?**

A: The height following system includes Lift, Home, and Follow buttons that control the laser source respectively. They require IO binding before use. The status indicator turns green when in position. It also includes the capacitance calibration function.

**Q: What is the alarm masking function?**

A: The alarm masking function allows setting a masking time after a corresponding fault is triggered. During this time, move the robot to clear the alarm. After the masking time expires, if the alarm signal still exists, it will report the error and power off again.

**Q: What is the LASER_START instruction used for?**

A: The LASER_START instruction is used to start laser cutting, supporting straight lines, arcs, full circles, and curve trajectories.

**Q: What is the LASER_SET instruction used for?**

A: The LASER_SET instruction can modify gas pressure, power, frequency, and duty cycle during cutting via instructions, without pausing. It can use process parameters or temporary process parameters.

## Version History

| Version | Date | Changes | Author |
| :---- | :--------- | :--- | :------- |
| 1.0.0 | 2026-06-30 | Initial version | qiuzegai |

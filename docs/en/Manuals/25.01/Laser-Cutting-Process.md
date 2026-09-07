---
title: "Laser Cutting Process"
description: "Guidance instructions for laser cutting process"
author: "qiuzegai"
date: "2026-06-30"
tags: ["iNexBot", "Laser Cutting", "Cutting Parameters"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Laser Cutting Process

## Process Introduction

The laser cutting process is divided into two parts: piercing and cutting. The cutting process will first perform piercing, set piercing related parameters and cutting mode parameters in global variables, and set cutting gas pressure power parameters in cutting variables. Piercing and cutting have no physical difference, they are only distinguished for better cutting results. Piercing is to ensure that the material can be penetrated at non-edge positions to avoid incomplete cutting, and to reduce laser efficiency in subsequent cutting processes to achieve energy saving goals.

During the cutting process, gas blowing will be continuously performed, which has two purposes: one is to blow away the residue generated during the cutting process to ensure smooth and beautiful cut surfaces; the other is to improve cutting efficiency, the oxygen concentration of the blown gas will affect cutting efficiency, within a safe range, the higher the concentration, the higher the cutting efficiency.

Combined with offline programming, complex trajectory cutting can be achieved.

## Global Parameters

Open the teach pendant, enter the "Process" interface, select "Laser Cutting Process", enter the "Global Parameters" interface.

![](./assets/p4mjqqb83puf3ghzc7xym.png)

### Global Parameter Description

1. Piercing Settings:

- Laser Power: Laser power during piercing, unit is W. The higher the power, the higher the piercing efficiency, but it will also make the cut surface rougher.

- Gas Pressure: Gas pressure output size, gas pressure controls cleaning of residue on the back of the cut to ensure smooth and clean cut surfaces.

- Laser Frequency: Number of laser pulses per second.

- Piercing Time: Duration of piercing after laser starts, the duration must ensure that the current workpiece is penetrated.

- Laser Duty Cycle: Proportion of laser operation within unit time, for example 66% means laser operates for 0.66s in one second.

2. Cutting Mode:

- Position Cutting: Pierce to position then run the cutting trajectory.

- Direct Cutting: No piercing, directly run the cutting trajectory.

3. Gas Off Mode:

- Delayed Gas Off: Turn off gas blowing after laser cutting ends.

- Early Gas Off: Turn off gas before laser cutting ends.

Gas Off Time: According to the set gas off mode, the time to turn off gas early or delay.

Early Gas Feed Time: How much time before laser cutting starts to begin gas feeding.

Wait Lift Time: How long to wait after laser cutting completes before lifting.

Wait Follow Time: After sending the follow signal, the maximum time to wait for the follow position signal.

Retreat Distance: After laser cutting interruption, continue running the retreat distance.

Note: After receiving the follow position signal, the robot immediately starts running according to the cutting trajectory. If the follow position signal is not received within the specified time, the system will issue a laser cutting follow position timeout error.

## Cutting Parameters

### Cutting Parameter Description

Open the teach pendant, enter the "Process" interface, select "Laser Cutting Process", enter the "Cutting Parameters" interface.

![](./assets/cjietfkndbjzu5j1tzcrn.png)

Process Number: Save multiple parameters that can be called in instructions.

Gas Pressure: Gas pressure during cutting.

Laser Power: Laser power during cutting.

Laser Frequency: Number of laser pulses per second.

Laser Duty Cycle: Proportion of laser operation within unit time, for example 66% means laser operates for 0.66s in one second.

Data Source:

## Analog Matching

Enter the "Process" interface, select "Laser Cutting Process", enter the "Analog Matching" interface.

![](./assets/5ybatggppledukjuz6gov.png)

Usage is the same as welding current and voltage matching, the system will calculate the proportion coefficient based on the set voltage value and actual power value, actual gas pressure value.

## IO Settings

Divided into 4 parts: Control Operations, Status Indicators, Power Gas Pressure, PWM. See the figures below for specific interfaces of each part.

### Control Operations:

![](./assets/zmcfvnka2c8hnmb46m4ya.png)

Return to Center Signal: After the corresponding signal is output, the laser returns to center.

Lift Signal: After the corresponding signal is output, the laser lifts.

Follow Signal: After the corresponding signal is output, the laser starts to follow.

Shutter Enable: After the corresponding signal is output, the shutter is opened.

Gas Blow Enable: After the corresponding signal is output, gas blowing starts.

Capacitance Calibration: After the corresponding signal is output, check if there is a return signal for successful calibration.

### Status Indicators

![](./assets/opdb5p6tyt8hpdo0vwb0l.png)

Docking Position: After the height adjuster stops at position, the corresponding port will have an input signal.

Return to Center Position: After the height adjuster returns to center position, the corresponding port will have an input signal.

Follow Position: After the height adjuster follows to position, the corresponding port will have an input signal.

Piercing Position: After laser cutting piercing reaches position, the corresponding port will have an input signal.

Laser Fault: After a laser fault occurs, the corresponding port has an input signal and reports error and stops.

Height Adjuster Fault: After a height adjuster fault occurs, the corresponding port has an input signal and reports error and stops.

Water Cooler Fault: After a water cooler fault occurs, the corresponding port has an input signal and reports error and stops.

Gas Pressure Fault: After a gas pressure fault occurs, the corresponding port has an input signal and reports error and stops.

Capacitance Calibration: After the height adjuster returns the corresponding signal, calibration is successful.

### Power Gas Pressure

![](./assets/ndrw3cakgve_bkuvzmkae.png)

Laser Power: Analog port controlling laser power, controls actual output based on analog output.

Gas Pressure: Analog port controlling gas pressure, controls actual output based on analog output.

### PWM

![](./assets/3uen3zigpdv8wylz16wer.png)

Laser Frequency Duty Cycle: Can be switched between two ports according to R4PWMIO board, only ports with PWMIO can be selected.

## Manual Operations

### Laser

![](./assets/n_ewutpeyivls9algho6i.png)

Shutter Switch: Similar to welding enable, must be opened before light can be emitted. Need to manually open the shutter switch, otherwise it will not open automatically.

Shot Power: Laser power during shot.

Shot Time: Single shot time.

Shot Gas Pressure: Gas pressure during shot.

Gas Check Time: Single gas check time, repeated checks within this time will prompt.

Shot Frequency: Number of laser pulses per second during shot.

Shot Button: Used for debugging laser parameters, after setting the corresponding IO, click to emit light for adjustment.

Gas Check: Used for debugging laser parameters, after setting the corresponding IO, gas pressure check can be performed for adjustment.

### Follow-up System

![](./assets/uyo7te7ahvo_tchyo76ez.png)

Lift, Return to Center, Follow three buttons control the laser respectively, need to bind IO before use, after reaching position the status indicator will turn green.

Capacitance Calibration: New capacitance calibration added, calibration needs to set the previous IO input/output and the height adjuster can return input normally, after successful calibration the status indicator will turn green.

### Shield Error

![](./assets/affqslyh1qojanifpyjdx.png)

After triggering the corresponding fault, the robot will stop, and only after the corresponding error is triggered can the shield error enable be opened. Set the shield error time as needed, move the robot to clear the error within that time. After the set shield time ends, if the error signal still exists, it will error and power off again.

## Instruction Description

### Laser Start

![](./assets/ddqixpdpuadfbfezzpfc2.png)

Format: LASER_ON [Instruction Name] ID=1 [Process Number] Height Adjuster Follow at Start Don't Follow at End [Height Adjuster Follow Option].

Function: Start cutting after reaching the cutting start point.

Parameters:

| Parameter | Description |
| :--: | :-- |
| ID | Laser cutting process number, range (1,500) |
| Height Adjuster | **Follow at Start Don't Follow at End**<br>Need to receive follow position signal to continue running, need to match with end follow in laser end, if laser end height adjuster option selects continue follow no light, it will prompt mismatch and default to end follow.<br>This method will send follow signal and open gas blow enable when starting to run, after receiving follow position signal it will run the next instruction, at end it will close follow signal and gas blow enable. |
| Height Adjuster | **Only Follow No Light No Gas**<br>Need to receive follow position signal to continue running, need to match with end follow in laser end, if laser end height adjuster option selects continue follow no light, it will prompt mismatch and default to end follow.<br>This method will send follow signal and close gas blow enable and shutter enable when starting to run, after receiving follow position signal it will run the next instruction, at end it will close follow signal. |
| Height Adjuster | **No Follow Light Gas**<br>Don't need to receive follow position signal to continue running, need to match with end follow in laser end, if laser end height adjuster option selects continue follow no light, it will prompt mismatch and default to end follow.<br>This method will shield follow position signal when starting to run, and will not send follow signal, but when the shutter switch is open it will emit light normally, gas blow enable will also open. |
| Height Adjuster | **Continue Follow at End**<br>Need to receive follow position signal to continue running, need to match with continue follow no light in laser end, if laser end height adjuster option selects end follow, it will prompt mismatch and default to end follow.<br>This method will send follow signal and open gas blow enable when starting to run, after receiving follow position signal it will run the next instruction, at end it will close shutter enable and gas blow enable but will not close follow signal. |

Explanation of signal processing at different connection points:

Follow to Follow (First laser start instruction should have lift signal, second laser start only has follow signal).

Continue Follow - Continue Follow.

Continue Follow - Follow No Light No Gas.

Continue Follow - Start Follow.

Follow to No Follow (No follow will shield follow signal when starting, even if no signal is received it will continue running).

Continue Follow - No Follow Light Gas.

No Follow to Follow (Laser end needs lift signal, laser start needs follow signal).

Start Follow - Continue Follow.

Start Follow - Start Follow.

Start Follow - Only Follow No Light No Gas.

No Follow Light Gas - Continue Follow.

No Follow Light Gas - Start Follow.

No Follow Light Gas - Only Follow No Light No Gas.

Only Follow No Light No Gas - Continue Follow.

Only Follow No Light No Gas - Start Follow.

Only Follow No Light No Gas - Only Follow No Light No Gas.

No Follow to No Follow (Laser end has lift signal, laser start shields follow signal).

Start Follow - No Follow Light Gas.

No Follow Light Gas - No Follow Light Gas.

Only Follow No Light No Gas - No Follow Light Gas.

### Laser End

![](./assets/u1v4idvs8g3azduxr7gzi.png)

Format: LASER_OFF [Instruction Name] ID=1 [Process Number] Height Adjuster=End Follow [Height Adjuster Follow Option].

Function: Stop cutting after reaching the cutting end point.

Parameters:

| Parameter | Description |
| :--: | :-- |
| ID | Laser cutting process number, range (1,500) |
| Height Adjuster | **End Follow**<br>Height adjuster resets, stops running. |
| Height Adjuster | **Continue Follow No Light**<br>Close shutter enable and gas blow enable at cutting end and continue sending follow signal, after receiving follow position signal it will continue running. |

### Cut Circle

![](./assets/k_wngc5jwj-f6ipbl_tet.png)

Format: LASER_CIRCLE [Instruction Name] P/GP [Center Point] R [Radius] V [Maximum Speed] ACC [Acceleration Ratio] DEC [Deceleration Ratio] M [Compensation] TIME [Pre-execute Time, if not set displays as 0].

Function: Set the parameters for cutting circle, run the cutting circle trajectory when reaching this instruction.

Parameters:

| Parameter | Description |
| :--: | :-- |
| Center Point | Center point of the cutting circle trajectory. Use local position variable (P) or global position variable (GP). |
| Radius(r) | Joint interpolation speed, range [1,3000]. |
| Maximum Speed | Instruction speed during cutting circle, range [1,999]. |
| Acceleration | Acceleration ratio during cutting circle, range [1,100]. |
| Deceleration | Deceleration ratio during cutting circle, range [1,100]. |
| Compensation | After completing the full circle, continue running the circle trajectory distance based on the compensation distance, range [0,500]. |
| TIME | Pre-execute time, same as the pre-execute time of motion control instructions, is the time for the next non-motion instruction to execute early. Unit ms |

### Laser Setting

![](./assets/k3p-4qnhps9ek4c1qgrzb.png)

Format: LASER_SET [Instruction Name] ID [Process Number] TEMP [Use Temporary Process Parameters] (PRESS [Gas Pressure] P [Power] FREQ [Frequency] DUTY [Duty Cycle] (Temporary Process Parameters))

Function: This instruction can modify gas pressure, power, frequency, duty cycle through instructions during the cutting process without stopping.

Parameters:

| Parameter | Description |
| :--: | :-- |
| Process Number | Laser cutting process number, range (1,500), range [1,500], can bind variables |
| Use Temporary Process Parameters | If the temporary parameter switch is not opened, gas pressure, laser power, laser frequency, laser duty cycle are the values set in the process parameter interface<br>Open the use temporary parameter switch, users can modify gas pressure, laser power, laser frequency, laser duty cycle and other parameters at any time according to the environment |
| Gas Pressure | Gas pressure for laser cutting, range [1-99999]Kpa, can bind variables |
| Laser Power | Power for laser cutting, range [1-99999]W, can bind variables |
| Laser Frequency | Number of laser pulses per second, range [1-99999]Hz, can bind variables |
| Laser Duty Cycle | Proportion of laser output signal duty time, range [0,100]%, can bind variables |

**Example:**

![](./assets/nhtpmdhtp_6z1ccg-yakz.png)

Laser instructions support straight lines, arcs, full circles and curves, usage is relatively simple.

Cut circle is special, cut circle needs to run based on the previous point, if the previous motion instruction point is P0001, then the center point of the cut circle must also be set to P0001 to run.

## Q&A for Retrieval

**Q: What are the two parts of the laser cutting process?**

A: The laser cutting process is divided into two parts: piercing and cutting. The cutting process will first perform piercing, set piercing related parameters and cutting mode parameters in global variables, and set cutting gas pressure power parameters in cutting variables.

**Q: What is the purpose of gas blowing during laser cutting?**

A: Gas blowing during laser cutting has two purposes: one is to blow away the residue generated during the cutting process to ensure smooth and beautiful cut surfaces; the other is to improve cutting efficiency, the oxygen concentration of the blown gas will affect cutting efficiency, within a safe range, the higher the concentration, the higher the cutting efficiency.

**Q: What is piercing setting?**

A: Piercing setting is the parameter setting for penetrating the material at non-edge positions before laser cutting, including laser power, gas pressure, laser frequency, piercing time and laser duty cycle, to ensure the material is completely penetrated.

**Q: What is the effect of laser power on piercing?**

A: Laser power is the laser power during piercing, unit is W. The higher the power, the higher the piercing efficiency, but it will also make the cut surface rougher.

**Q: What are the laser cutting modes?**

A: Laser cutting modes are divided into position cutting and direct cutting. Position cutting is to pierce to position then run the cutting trajectory; direct cutting is no piercing, directly run the cutting trajectory.

**Q: What are the gas off modes?**

A: Gas off modes are divided into delayed gas off and early gas off. Delayed gas off is to turn off gas blowing after laser cutting ends; early gas off is to turn off gas before laser cutting ends.

**Q: What are cutting parameters?**

A: Cutting parameters are parameters used during the cutting process, including process number, gas pressure, laser power, laser frequency, laser duty cycle, etc., can save multiple parameters that can be called in instructions.

**Q: What is analog matching?**

A: Analog matching function is similar to welding current and voltage matching, the system will calculate the proportion coefficient based on the set voltage value and actual power value, actual gas pressure value.

**Q: How many parts does IO setting have?**

A: IO setting is divided into 4 parts: Control Operations, Status Indicators, Power Gas Pressure, PWM.

**Q: What signals does Control Operations contain?**

A: Control Operations contains return to center signal, lift signal, follow signal, shutter enable, gas blow enable, capacitance calibration and other signals.

**Q: What signals does Status Indicators contain?**

A: Status Indicators contains docking position, return to center position, follow position, piercing position, laser fault, height adjuster fault, water cooler fault, gas pressure fault, capacitance calibration and other signals.

**Q: What is the function of the shutter switch?**

A: The shutter switch is similar to welding enable, must be opened before light can be emitted. Need to manually open the shutter switch, otherwise it will not open automatically.

**Q: What operations does the follow-up system contain?**

A: The follow-up system contains lift, return to center, follow three buttons that control the laser respectively, need to bind IO before use, after reaching position the status indicator will turn green; also contains capacitance calibration function.

**Q: What is the shield error function?**

A: The shield error function allows setting shield time after triggering the corresponding fault, move the robot to clear the error within that time. After the set shield time ends, if the error signal still exists, it will error and power off again.

**Q: What is the function of the LASER_START instruction?**

A: The LASER_START instruction is used to start laser cutting, supports straight lines, arcs, full circles and curve trajectories.

**Q: What is the function of the LASER_SET instruction?**

A: The LASER_SET instruction can modify gas pressure, power, frequency, duty cycle through instructions during the cutting process without stopping, can use process parameters or temporary process parameters.

## Version History

| Version | Date | Changes | Author |
| :---- | :--------- | :--- | :------- |

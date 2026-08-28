---
title: "New Conveyor Tracking Process Manual"
description: "Introduction to new conveyor tracking process manual parameter settings"
author: "tongmengyuan123"
date: "2026-04-15"
tags: ["sensor", "vision", "circular", "conveyor", "linear"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

| Instruction Type | Instruction | Step | Reverse | Test Run | Early Execution | Be Early Executed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Conveyor | Conveyor Workpiece Detection Start | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |
| Conveyor | Conveyor Workpiece Detection End | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |
| Conveyor | Conveyor Tracking Start | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |
| Conveyor | Conveyor Tracking End | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |
| Conveyor | Get Conveyor Tracking Position | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |
| Conveyor | Get Conveyor Tracking Target | Not Supported | To First Motion Instruction | Not Supported | Not Supported | |

---

# New Conveyor Tracking Process Manual

## Conveyor Process Introduction

Conveyor tracking refers to the robot using user-input material point positions and the corresponding encoder values at those positions to calculate material point positions in real-time, tracking materials through motion.

Click [Process]-[Conveyor Tracking Process] to enter the conveyor tracking process parameter setting interface.

![Conveyor Tracking Process Parameter Setting Interface](assets/3amqyjbuqhy3twku7hyyv.png)

Clear Parameters: Clear parameters of the currently selected process number.

Copy Parameters: Copy all parameters of this process number to another process number.

![Copy Parameters Interface](assets/dl6nfjdh8qhl3oz6crqjl.png)

## Basic Parameters

Before setting all parameters, please select a process number in the "Conveyor Tracking Process Parameter Setting Interface". Each process number saves all parameters. These basic parameters are for basic conveyor settings.

![Basic Information Interface](assets/ulkjmghhtwenccvvve-um.png)

![Conveyor Position Mode Setting Interface](assets/5fjjgdwj4z3ezcskehcbk.png)

**Conveyor Type**

Conveyor types are divided into linear conveyor and circular conveyor.

**Conveyor Position Mode**

- Select Encoder Value: Normal conveyor calibration.
- Select Constant Speed Setting: Constant speed setting is independent of encoder. Conveyor speed can be manually filled in (after manually modifying speed, recalibrate sensor).
  - Note: When setting constant speed, sensor position calibration calculation has error. Error factor: Conveyor motion time interval counted during calibration is too large. Solution: Robot tool hand stops on workpiece following path. When workpiece passes tool hand, directly calibrate to reduce error.
- Select Encoder Speed: Use smoothed conveyor speed calculation. Note: No longer supports conveyor dynamic speed adjustment dynamic synchronization.

**Conveyor Speed**: Current conveyor speed, read-only.

- Select Linear: Unit is mm/s.
- Select Circular: Unit is °/s.

**Workpiece Grasping Parameters**

- Grasping Point Linear Height: When robot lifts, Z moves to this set length before moving X, Y coordinates (this value cannot be greater than gate height).
- Description: This gate type is when robot receives grasping coordinates, robot needs to move to workpiece point position, grasping in gate type manner.
- Gate Type UZ Axis Maximum: Maximum height of Z axis when robot moves in gate type manner.

**Encoder Port**: Encoder connection port.

**Encoder Value**:

After encoder connection is successful, automatically identify the currently connected encoder value. This number can only be read, cannot be modified.

When encoder value cannot be read successfully, it is generally divided into two situations: encoder interface wiring method is incorrect; encoder is connected to wrong port position on IO board.

Port position on IO board can refer to corresponding IO board definition diagram; encoder port wiring method can refer to corresponding encoder definition diagram.

**Encoder Count Maximum Minimum**:

The maximum value that the encoder data processing module can count is based on the IO board used as the encoder data processing module. Current ranges are as follows:

- Drive-control integrated version: 0-65535;
- Nuodajia firmware below version 18: 0-1024.
- Nuodajia firmware version 18: -2147483648 to 2147483647;
- R4C version: -2147483648 to 2147483647.
- 2200-A01 version: 0-4294967295.

**Encoder Resolution**:

Unit pulse emitted by encoder when conveyor moves 1mm. This value is calibration result.

**Encoder Direction**:

Open conveyor, observe whether encoder value changes with conveyor movement. If no change, encoder is not identified. If it changes with conveyor motion, select corresponding direction here. Note: Encoder value increasing is positive direction, decreasing is negative direction.

## Parameter Identification

![Parameter Identification Interface](assets/mznfipobw_qbs-la69is4.png)

### Tracking Method

#### Vision Tracking

Connect controller and camera communication. Camera takes photo and sends workpiece coordinates. Wait for workpiece to enter tracking area. Robot will track in real-time based on [Vision-sent position coordinates].

![Vision Tracking Setting Interface](assets/et-04oriskvexd6-agk1-.png)

**Vision Process Number**: 1-9, select corresponding process number for camera data reception.

**Vision Latch Encoder Value Method**:

- Trigger Latch: Immediately latch current conveyor encoder value when vision triggers photo. There may be cases where photo is triggered and encoder value is latched but data is not received. Therefore, need to use with "Vision Trigger Filter" function. Each time vision is triggered, note: if previous workpiece trigger did not receive vision data, discard the previously latched conveyor encoder data.
- Data Received Latch: Latch encoder value when receiving camera-sent data.

**Vision Trigger Filter**: Encoder value and vision data should have corresponding relationship. This parameter is used to determine whether to filter out the previous encoder latch value that did not receive data when vision triggers latch of new encoder value.

#### Sensor Tracking

Connect sensor signal to IO board. Signal source selects corresponding IO port. When workpiece passes sensor, system obtains signal and latches conveyor encoder value. Wait for workpiece to enter tracking area. Robot will track in real-time based on [Sensor-calibrated position coordinates].

![Sensor Tracking Setting Interface](assets/lmsx5df_rutejxe76to7f.png)

**Signal Source Parameter**: Detect conveyor workpiece through IO. Signal source parameter can select sensor-corresponding IO port.

**Sensor Trigger Method**: IO rising edge or falling edge trigger. (Rising edge: IO signal changes from 0 to 1 edge trigger. Falling edge: IO signal changes from 1 to 0 edge trigger.)

**Safe Trigger Interval**: Sensor IO trigger needs to wait set time before it can take effect again.

#### Sensor + Vision

Connect sensor signal to IO board and camera hardwired connection. Signal source selects corresponding IO port. When workpiece passes sensor, camera triggers photo through hardwired connection. Wait for workpiece to enter tracking area. Robot will track in real-time based on [Sensor-calibrated position coordinates].

![Sensor + Vision Tracking Setting Interface](assets/pnzkkggoxnxsguxbjinsf.png)

**Signal Source Parameter**: Detect conveyor workpiece through IO. Signal source parameter can select sensor-corresponding IO port.

**Vision Process Number**: 1-9, select corresponding process number for camera data reception.

**Sensor Trigger Method**: IO rising edge or falling edge trigger. (Rising edge: IO signal changes from 0 to 1 edge trigger. Falling edge: IO signal changes from 1 to 0 edge trigger.)

**Vision IO Signal Filter**:

- Trigger Filter: When first workpiece triggers sensor signal, and at second workpiece trigger sensor signal, vision still has not returned data, discard first workpiece's triggered sensor signal, then record second workpiece's sensor signal. First workpiece robot will not grasp. When first workpiece triggers sensor signal, and at second workpiece trigger sensor signal, vision returns data, robot grasps normally.
- Signal Disappear Filter: When first workpiece triggers sensor signal, and at second workpiece trigger sensor signal disappearance, vision still has not returned data, discard first workpiece's triggered sensor signal, then record second workpiece's sensor signal. First workpiece robot will not grasp. When first workpiece triggers sensor signal, and at second workpiece trigger sensor signal disappearance, vision returns data, robot grasps normally.

**Vision Latch Encoder Value Method**: When robot is running, using sensor with vision to grasp workpiece. At this time, workpiece passes sensor, vision takes photo and calculates workpiece position. During instruction execution, there are many uncertain factors, camera processing speed is slow. So there is a latch function.

- Trigger Latch: Immediately latch current conveyor encoder value when vision triggers photo. There may be cases where photo is triggered and encoder value is latched but data is not received. Therefore, need to use with "Vision Trigger Filter" function. Each time vision is triggered, note: if previous workpiece trigger did not receive vision data, discard the previously latched conveyor encoder data.
- Data Received Latch: Latch encoder value when receiving camera-sent data.

**Safe Trigger Time Interval**: Sensor IO trigger needs to wait set time before it can take effect again.

**Vision Trigger Filter**: Encoder value and vision data should have corresponding relationship. This parameter is used to determine whether to filter out the previous encoder latch value that did not receive data when vision triggers latch of new encoder value.

#### Global Variable + Modbus

By monitoring global variables. When variable is 1, latch encoder value and consider workpiece has arrived. Wait for workpiece to enter tracking area. Robot tracks in real-time based on [modbus] address-sent coordinates. Note: modbus address is 2 digits per coordinate - X(1012-1013) Y(1014-1015) Z(1016-1017).

![Global Variable + Modbus Tracking Setting Interface](assets/13dv5ffnpel252lxyi-7p.png)

**Signal Source Parameter**: Global variable GB001---990 (1 for latch encoder value then modbus sends point through address code, 0 for no tracking).

#### Global Variable + Vision

Signal source selects corresponding variable. When global variable changes, latch conveyor encoder value. Camera triggers photo: Wait for workpiece to enter tracking area. Robot will track in real-time based on [Vision-sent position coordinates].

![Global Variable + Vision Tracking Setting Interface](assets/avryso9n1mortu1ihdfi4.png)

**Signal Source Parameter**: Global variable GB001---990 (1 for latch encoder value).

**Vision Process Number**: 1-9, select corresponding process number for camera data reception.

**Vision Latch Encoder Value Method**:

    Trigger Latch: Immediately latch current conveyor encoder value when vision triggers photo. There may be cases where photo is triggered and encoder value is latched but data is not received. Therefore, need to use with "Vision Trigger Filter" function. Each time vision is triggered, note: if previous workpiece trigger did not receive vision data, discard the previously latched conveyor encoder data.

    Data Received Latch: Latch encoder value when receiving camera-sent data.

**Vision Trigger Filter**: Encoder value and vision data should have corresponding relationship. This parameter is used to determine whether to filter out the previous encoder latch value that did not receive data when vision triggers latch of new encoder value.

#### Filter Parameters

Applicable to vision-received front and back coordinates converted to user coordinates. Back coordinate needs to add conveyor movement distance during the interval between front and back coordinate photos.

![Filter Parameter Setting Interface](assets/jchfsag27py4nqpudw3sm.png)

**Angle Filter**: Whether to filter UA, UB, UC.

**Function Description**: If the difference of UX, UY, UZ, UA, UB, UC between two points is within absolute threshold range, it will be filtered. Otherwise, it will not be filtered.

**Comparison Process**: Receive first point coordinate, then receive second point coordinate. Second point coordinate will be compared with first point coordinate (Note: comparison process needs to add conveyor movement distance between two point coordinates). Whether the difference exceeds threshold. If second point exceeds, discard. Then receive third value, still compare with first point, and so on.

## Calibration Function

Conveyor user coordinate system selects the user coordinate system to be calibrated (currently supports 1-9).

![Calibration Function Interface](assets/hsd2je3gt2kcsrmqli-ah.png)

### Linear Conveyor Vision Type (Vision, Sensor+Vision, Global Variable+Vision) Calibration Steps

Note:

For controller calibration, please select conveyor pixel coordinate or conveyor robot coordinate in vision process.

Camera coordinate system XY plane and conveyor plane need to be basically parallel.

Camera coordinate X direction and conveyor motion direction need to be consistent. If not consistent, calibration will be inaccurate. If needed, adjust camera XY vision direction.

![Vision Type Calibration Step 1 Interface](assets/fpqbh8fbriv-azebb-yc2.png)

![Vision Type Calibration Step 2 Interface](assets/2oxhgvm6zk1vwnkngyp1h.png)

![Vision Type Calibration Step 3 Interface](assets/fi-jrnuz5iwae_r8c6xj4.png)

![Vision Type Calibration Step 4 Interface](assets/6iobv-tixgigrz3vu9oq7.png)

![Vision Type Calibration Step 5 Interface](assets/6wgyshscr_nskan5qpoln.png)

![Vision Type Calibration Step 6 Interface](assets/6abxdlzrgr5um5uqs_i5r.png)

Step 1: Place workpiece at A1 position in camera field of view, near one side edge of conveyor. Click calibrate. (Need to be powered on and normally receive camera return coordinate data.)

Step 2: Continue moving conveyor to move workpiece to A2 position within robot range. Align tool hand with workpiece, click calibrate.

Step 3: Start conveyor again to move workpiece a certain distance to A3 (still within robot range). Align tool hand with workpiece, click calibrate.

Step 4: Re-place workpiece in camera field of view, near the other side edge of conveyor B1 (different from step 1). Click calibrate.

Step 5: Continue moving conveyor to move workpiece to B2 position within robot range. Align tool hand with workpiece, click calibrate.

Step 6: Move a certain distance away from conveyor to determine reference user coordinate system Z-axis direction. Click calibrate.

Step 7: After above steps, click calculate.

### Circular Conveyor Vision Calibration

The conveyor coordinate system value is calculated after conveyor calibration is complete.

![Circular Vision Calibration Interface 1](assets/owlj_bpazfydcdcsb2lxy.png)

Conveyor calibration calculates the conveyor's user coordinate system by calibrating 6 workpiece position points. Click [Modify], [Start Calibration] button to enter calibration interface.

![Circular Vision Calibration Interface 1](assets/x0jgl2v--p32imdnvujyg.png)

![Circular Vision Calibration Interface 2](assets/bnyqziawvvazxiwijpchs.png)

![Circular Vision Calibration Interface 3](assets/i8louujyuqmx8xf65kr4j.png)

![Circular Vision Calibration Interface 4](assets/b2ylef7g2cleylwn5rukd.png)

![Circular Vision Calibration Interface 5](assets/p_bsjkkgzy4hme6ippetj.png)

![Circular Vision Calibration Interface 6](assets/lav7oizkhm4wbnwnnkyqe.png)

![Circular Vision Calibration Interface 7](assets/eojvnmcvtdfm6y3ty2lbd.png)

Step 1: Place workpiece at A1 position in camera field of view, near one side edge of conveyor. Click calibrate.

Step 2: Continue moving conveyor to move workpiece to A2 position within robot range. Align tool hand with workpiece, click calibrate.

Step 3: Start conveyor again to move workpiece a certain distance to A3 (still within robot range). Align tool hand with workpiece, click calibrate.   

Step 4: Start conveyor again to move workpiece a certain distance to A4 (still within robot range). Align tool hand with workpiece, click calibrate. 

Step 5: Re-place workpiece in camera field of view, near the other side edge of conveyor B1 (different from step 1). Click calibrate.

Step 6: Continue moving conveyor to move workpiece to B2 position within robot range. Align tool hand with workpiece, click calibrate.

Step 7: Move a certain distance away from conveyor to determine reference user coordinate system Z-axis direction.      

### Linear Conveyor Sensor Calibration

![Sensor Calibration Interface 1](assets/qmxntgql5yv6-kgm2wt7c.png)

![Sensor Calibration Interface 2](assets/rmgg8zgbztdzvtw0bysyz.png)

![Sensor Calibration Interface 3](assets/ns43bjkio4b2se6gzwgu8.png)

![Sensor Calibration Interface 4](assets/zwtqgsq1o1qww6hzj9qdr.png)

Step 1: Place workpiece on conveyor, make workpiece pass and trigger sensor. When reaching robot range, stop moving conveyor. Align tool hand with workpiece and calibrate.

Step 2: Continue starting conveyor to move workpiece a certain distance. Be careful not to exceed robot range. Align tool hand end with workpiece and calibrate.

Step 3: Place workpiece at any position within robot range on conveyor Y-axis. Displacement should be as large as possible. Align tool hand with workpiece and calibrate.        

Step 4: Move a certain distance away from conveyor to determine reference user coordinate system Z-axis direction.

Step 5: After above steps, click calculate.

### Circular Conveyor Sensor Calibration  

When workpiece identification method selects sensor, sensor needs to be calibrated at this interface. Click [Modify]-[Start Calibration] button to enter calibration interface, as shown below.

![Circular Sensor Calibration Interface 1](assets/4s2f7y2txlf4z8uhq8t9n.png)

![Circular Sensor Calibration Interface 2](assets/81r1r-ofyyobbi7lwyyjg.png)

![Circular Sensor Calibration Interface 3](assets/v4zfi9f6cvuzmwx-m8hqv.png)

![Circular Sensor Calibration Interface 4](assets/-rgm_z1ovnycdwm4gamoc.png)

![Circular Sensor Calibration Interface 5](assets/tu58usow3xz7n7peqyowo.png)  

Step 1: Place workpiece on conveyor, make workpiece pass and trigger sensor. When reaching robot range, stop conveyor. Align tool hand with workpiece and calibrate.

Step 2: Continue starting conveyor to move workpiece a certain distance. Be careful not to exceed robot range. Align tool hand end with workpiece and calibrate.

Step 3: Continue starting conveyor to move workpiece a certain distance. Be careful not to exceed robot range. Align tool hand end with workpiece and calibrate.

Step 4: Move a certain distance away from conveyor to determine reference user coordinate system Z-axis direction.

### Modbus Conveyor Calibration

![Modbus Conveyor Calibration Interface 1](assets/wjtsokwwxwwp2xn2sy2n9.png)

![Modbus Conveyor Calibration Interface 2](assets/q7593jvre483saexlbgca.png)

![Modbus Conveyor Calibration Interface 3](assets/aj73oupe2bfzqcrizcthx.png)

![Modbus Conveyor Calibration Interface 4](assets/ofmyjx6t6gflnmw8khime.png)

Step 1: Move conveyor to move workpiece to A2 position within robot range. Align tool hand with workpiece, click calibrate.

Step 2: Start conveyor again to move workpiece a certain distance to A3 (still within robot range). Align tool hand with workpiece, click calibrate.

Step 3: Continue moving conveyor to move workpiece to B2 position within robot range. Align tool hand with workpiece, click calibrate.   

Step 4: Move a certain distance away from conveyor to determine reference user coordinate system Z-axis direction. Click calibrate.

Step 5: After above steps, click calculate.

### Linear Conveyor Tracking Range Setting

This interface is used to set some key positions and tracking ranges during robot tracking, as shown below.

![Tracking Range Setting Interface](assets/imfperopc5sxn2lk673xv.png)

Note: Use user coordinate system after conveyor calibration for calibration.

- Tracking Start X Point

This parameter only records the value of conveyor coordinate X-axis (conveyor motion direction). Each tracking, only when workpiece exceeds this position will the robot track.

- Latest Reception Position

Latest reception position of workpiece on conveyor X-axis (conveyor motion direction). If workpiece exceeds this position before being tracked, robot will not track this workpiece.

Note: If the calibrated range is found to be unreasonable, please re-confirm the user coordinate system calibration and check if the selected user coordinate system direction is reasonable.

- Tracking Range X Maximum

Maximum position of tracking range on conveyor X-axis (conveyor motion direction). Regardless of whether workpiece is being tracked, as long as it exceeds this position, robot will abandon tracking and give warning.

### Circular Conveyor Tracking Range Setting

This interface is used to set some key positions and tracking ranges during robot tracking, as shown below.

Note: Use user coordinate system after conveyor calibration for calibration.

![Tracking Range Setting Interface](assets/aluzontpays-l2i8jc_cp.png)

- Tracking Start X Point

When workpiece on conveyor moves to this coordinate position with conveyor motion, robot controller receives signal, starts calculation and executes catching action, switching from static state to conveyor synchronization running state.

- Latest Reception Position

If workpiece exceeds this position before being tracked, robot will not track this workpiece.

- Tracking Range X Maximum

Maximum position of tracking range on conveyor X. Regardless of whether workpiece is being tracked, as long as it exceeds this position, robot will abandon tracking and give warning.

Note: If the calibrated range is found to be unreasonable, please re-confirm the user coordinate system calibration and check if the selected user coordinate system direction is reasonable.

### Advanced Parameters

#### Synchronization Parameters

![Synchronization Parameter Setting Interface](assets/k4n7ybbpctpsgzaxgmqjl.png)

- **Synchronization Start Segment Acceleration Multiplier**

> Maximum speed (max_vel) of the start tracking segment is calculated from conveyor speed, while maximum acceleration (max_acc) is obtained by multiplying max_vel by this multiplier parameter, default 20 times. This parameter directly affects how fast catching up synchronization is. Range recommended 10-20. Too slow causes tracking cycle to be very slow, too fast easily causes jitter or overload.

- **Synchronization End Segment Acceleration Multiplier**  
> Used for calculating maximum deceleration of the tracking stop segment. Calculation method is robot speed at stop time multiplied by this multiplier parameter, default 20 times. This parameter directly affects stop segment length. Range recommended 10-20, default 20 times.

- **Deviation Compensation Segment Acceleration Multiplier**
> Used for acceleration calculation of real-time deviation compensation during encoder speed mode synchronization. Calculation method is conveyor speed multiplied by this multiplier parameter.

- **Single Compensation Maximum Distance**
> Used for distance of real-time deviation compensation during encoder speed mode synchronization. Prevent single compensation distance from being too large which may cause: 1) Superimposed instantaneous speed exceeding limit; 2) Abnormal deviation compensation causing collision.

- **Synchronization PID Proportional Coefficient**   
> Applied to position PID adjustment in encoder position mode synchronization. Default 0.4, recommended range 0.1-1. When following synchronization cannot catch up with workpiece and lag distance increases, increase this parameter. When synchronization around target position in conveyor motion direction is sometimes fast sometimes slow, decrease this parameter.

- **Synchronization PID Integral Coefficient**   
> Applied to position PID adjustment in encoder position mode synchronization, correcting cumulative error. Default 0.05.

a.  If real-time deviation slightly fluctuates at 0 (mostly within 0.1mm), parameters are normal;

b.  If real-time deviation always slightly fluctuates at a fixed value, indicating cumulative error, increase integral coefficient;

c.  If real-time deviation periodically fluctuates largely at 0, decrease integral coefficient.

- **Synchronization PID Derivative Coefficient**
> Applied to position PID adjustment in encoder position mode synchronization. Default 0.05, recommended not to modify casually. If encountering synchronization vibration, can set to 0.

- **Synchronization PID Limiting**
> Applied to output limiting of position PID regulator in encoder position mode synchronization. Prevent single adjustment from being too large.

- **Synchronization PID Output Acceleration Multiplier**
> Applied to output smoothing of position PID regulator in encoder position mode synchronization. Prevent acceleration sudden change causing current impact.

- **Alarm and Abandon Synchronization Speed Threshold Multiplier**
> Applied to tracking speed safety protection. If during tracking synchronization, superimposed axis speed reaches joint parameter axis maximum speed threshold, alarm and abandon this synchronization. But job program does not stop, continues.
>
> Note: If this alarm occurs occasionally, can continue running. If frequency is high, consider reducing synchronization tracking instruction speed parameter or synchronization acceleration multiplier.

- **Smooth Start Tracking**
> Default off. If on, tracking start motion will smoothly connect with previous motion.

- **Encoder Filter Coefficient**
> Low-pass filter coefficient for encoder value. Larger value means lower filter capability. Default 0.99.

#### Other Parameters 

![Other Parameter Setting Interface](assets/fede2tnfk1dllppodwmak.png)

- **Tracking Compensation Time**
> Used for compensation in following situations:

a.  Workpiece movement distance calculation compensation during sensor calibration in constant speed mode.

b.  Workpiece displacement calculation compensation during synchronization tracking in encoder position/speed/constant speed modes.

c.  In one-line multi-machine tracking, when front machine virtual camera assigns workpiece to rear machine, need to convert current workpiece robot coordinate to camera coordinate system coordinate. Current workpiece robot coordinate calculation compensation.

- **Tracking Compensation Encoder Value**
> Used for compensation in following situations:

a.  Workpiece displacement calculation compensation during synchronization tracking in encoder position/speed/constant speed modes.

b.  In one-line multi-machine tracking, when front machine virtual camera assigns workpiece to rear machine, need to convert current workpiece robot coordinate to camera coordinate system coordinate. Current workpiece robot coordinate calculation compensation.

c.  In vision position debugging, offset position calculation compensation.

- **Tracking Compensation Distance**
> Used for compensation in following situations:

a.  Workpiece displacement calculation compensation during synchronization tracking in encoder position/speed/constant speed modes.

b.  In one-line multi-machine tracking, when front machine virtual camera assigns workpiece to rear machine, need to convert current workpiece robot coordinate to camera coordinate system coordinate. Current workpiece robot coordinate calculation compensation.

c.  In vision position debugging, offset position calculation compensation.

- **Conveyor Speed Calculation Period**
> Conveyor speed calculation method: Read encoder value once every time period (this parameter), then calculate conveyor movement distance d through encoder value change and calibrated resolution, finally use distance d divided by time to get conveyor speed. Also added sliding average filter.
>
> Smaller this period, larger calculation result fluctuation, more accurate response to conveyor speed change. Conversely, smaller calculation result fluctuation, more lag response to conveyor speed change.

#### One-Line Multi-Machine

> One vision, one conveyor, two or more robots for coordinated tracking grasping.

![One-Line Multi-Machine Setting Interface](assets/ojnplnjxj9cdjs_jrf23x.png)

- **Tracking Object Distribution Ratio**

> If robot ratio value is less than 100%, it means this machine is not the last machine. **Will automatically start virtual camera server** (write a separate module, IP is local address, port is current vision process number + 3000), for robot vision process connection, send object coordinates. Data format is default multi-target data format.
>
> Necessity of this parameter: In multi-machine coordinated tracking palletizing boxing production line, if incoming material line and boxing line direction are the same, need to ensure the last robot has sufficient incoming material, ensuring its box fills first and flows away. If not distributed by ratio, front robot's box may fill first, but because rear box is not full, blocking the production line. **If other scenarios don't need this, default ratio 100% is fine.**

- **Target Data Format**
> This column displays the received data sent by vision party. Format is related to connection parameter setting in vision process-parameter setting interface. Displayed data format changes according to connection parameter changes.

- **Communication Test Button**

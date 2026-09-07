---

title: "Positioning and Tracking Manual"

description: "Introduces the setting and debugging methods for laser positioning and arc tracking technologies, supporting industrial applications such as welding, laser cutting, and grinding."

author: "iNexBot"

date: "2026-04-16"

tags: ["Positioning and Tracking", "Laser Positioning", "Arc Tracking", "Weld Seam Tracking", "Industrial Applications"]

category: "Operation Manual"

version: "1.0.0"

language: "en-US"

---

# Laser Tracking Process

## Laser Device Settings

Parameter Settings: Enter "Craft/Positioning and Tracking Process" to set parameters. File number corresponds to the file number in the instruction. Laser device is selected based on actual usage. As shown:

![](assets-PositioningTrackingManual/image1.png)

Enter "Laser Device Settings/Laser Device Configuration/" to set communication between laser device and controller. As shown below:

![](assets-PositioningTrackingManual/image2.png)

**Parameter Introduction** (illustration below)

**Laser Device Manufacturer**: Select the corresponding laser device name.

**Device Number**: Corresponding host computer device.

**Communication Method Introduction**: Through Modbus communication or network communication.

**IP**: Connected host computer IP. Need to ensure controller, host computer, and teach pendant are in the same network segment for connection.

**Port Number**: Teach pendant and host computer port numbers need to be consistent.

**Communication Status**: Shows "Connected" when laser device is opened.

**Read/Write Timeout**: How many seconds after laser device read/write before timeout if no data received.

**Read/Write Cycle**: How many milliseconds the host computer reads/writes data each time.

**Laser Device Return Value Scale Factor**: Ratio of actual coordinate value to laser device returned coordinate value.

**Response Timeout**: In laser device communication, timeout between robot query command and laser device response command.

**Weld Seam Style Task Number**: Corresponds to host computer weld seam task number (only for laser calibration)

![](assets-PositioningTrackingManual/image3.png)

Enter "Laser Device Settings/Laser Device Calibration" to calibrate the laser device. According to the illustration, calibrate seven points. When entering, a small white bar will pop up in the lower right corner indicating laser device connection successful. If it shows initialization failed or connection failed, check if the manufacturer, IP, and port number in laser device configuration are set correctly.

During calibration, ensure the weld seam surface is parallel to the laser device, and the laser must be perpendicular to the weld seam. During calibration, maintain attitude unchanged. Also confirm that each calibration point can be seen in the corresponding manufacturer's debugging software as the intersection of weld seam and laser device without jitter. After calibrating seven points, can move to this point for inspection. After confirming correct, click calculate. If positioning process shows inaccurate points, need to recalibrate laser device or tool hand. Specific interface as shown:

![](assets-PositioningTrackingManual/image4.png)

# Positioning Process

Enter "Positioning/[Line Laser] Positioning Parameters" for parameter settings, as shown:

![](assets-PositioningTrackingManual/image5.png)

## Line Laser Positioning Parameter Description

![](assets-PositioningTrackingManual/image6.png)

**Parameter Table Number**: Similar to other processes' craft number. Can save different users' parameters. Can be selected in instructions.

**Laser Device Task Number**: Corresponds to previous device number.

**Positioning Type**:

Reference positioning: After calibrating positioning points, robot converts positioned points to variables through instruction insertion and moves to those points.

Correction positioning: Based on reference positioning, according to workpiece or weld seam requirements, select 1-4 point method for reference positioning. Based on different point counts, weld seam can be translated left-right or rotated on the plane, and robot tool hand can still find and follow the weld seam. Usually used for welding large quantities of identical workpieces in the same batch.

**Compensation Coordinate System**: Selectable coordinate system when compensation is needed. Tool coordinates, Cartesian coordinates.

**X Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Y Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Z Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Dynamic Positioning Distance**: Robot dynamic positioning distance. Need to visually estimate how far to reach the weld seam, otherwise cannot find the weld seam.

**Dynamic Positioning Speed**: Speed during dynamic positioning.

**Dynamic Positioning Point Selection**: Based on read/write cycle and dynamic positioning distance, calculate how many points the laser device will read within that distance. Also, when laser device first contacts the weld seam, there may be height errors or interference from non-weld seam gaps in other directions. These points need to be filtered out for dynamic positioning to accurately find the weld seam.

## Laser Positioning Tracking

### Single Point Positioning

Single point positioning (two-point, three-point, four-point positioning inserts the corresponding number of static positioning instructions between positioning start and end, ensuring each static positioning has a motion point before it and the laser can find the weld seam on the host computer). Single point positioning function is mainly used after robot and laser device calibration to detect calibration accuracy. Implementation method: take points with laser and give data to robot, then robot goes to the point. As shown:

![](assets-PositioningTrackingManual/image7.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Linear**: Run to the previously positioned point.

![](assets-PositioningTrackingManual/image8.png)

### Two-Point Positioning

Two-point positioning function is mainly used for intermittent welding, straight weld seam application scenarios. Take two points with laser and give point data to robot. Robot moves through two points forming a straight line. Instruction needs two static positioning points. Diagram as shown:

![](assets-PositioningTrackingManual/image9.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Linear**: Run to the previously positioned point.

Two-point positioning variable attitude function:

Two-point positioning variable attitude refers to positioning with one attitude and welding with another attitude. Mainly used when positioning attitude interferes with workpiece during welding. Solved by changing attitude. Instruction is the same as two-point positioning, only robot attitude is different during positioning, or run through custom attitude. As shown:

![](assets-PositioningTrackingManual/image10.png)

![](assets-PositioningTrackingManual/image11.png)

Description: Robot attitude change path: Variables > Global Position Variables > Find your set global position variable parameter GP003 > Adjust to desired attitude > Click write current position. The global position used here does not conflict with positioning points. Extract GP0003's ABC attitude values and assign to running points GP0001 or GP0002, as shown above.

### Three-Point Arc Function

Refers to laser positioning three points on an arc, then using arc instruction to form an arc from three points. Mainly used for arc workpiece welding scenarios. Diagram as shown:

![](assets-PositioningTrackingManual/image12.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Arc**: Substitute the three previously positioned points saved in variables into arc instruction, making robot follow the positioned points to form an arc. As shown above.

![](assets-PositioningTrackingManual/image13.png)

![](assets-PositioningTrackingManual/image14.png)

### Three-Point Positioning Calculate Coordinate System

Three-point positioning takes three points on two intersecting edges of the workpiece. Through these three points, calculate the user coordinate system. This method is used for most welding situations. If the calculated user coordinate system differs from the original, then the original user coordinate system's points or weld seams become the calculated user coordinate system's points or weld seams. Three-point offset supports one-point, two-point offset functions and rotation offset.

Below is the three-point positioning diagram:

![](assets-PositioningTrackingManual/image15.png)

**Instruction Content Introduction** (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 3-point calculate user coordinate system. Use previously positioned three variables to calculate user coordinate system 1.

![](assets-PositioningTrackingManual/image16.png)

### Four-Point Positioning Calculate Coordinate System

Four-point positioning function refers to taking four points on the workpiece. Any edge takes two points. Through calculation, obtain user coordinates. Thus every four-point positioning produces a new user coordinate, but the trajectory within the user coordinate does not change. During four-point positioning, if every two points are not on the same plane of the workpiece, then the overall workpiece size can be calculated, and then the overall workpiece user coordinate system can be calculated.

Below is the four-point positioning diagram:

![](assets-PositioningTrackingManual/image17.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 4-point calculate user coordinate system. Use previously positioned four variables to calculate user coordinate system 2.

![](assets-PositioningTrackingManual/image18.png)

![](assets-PositioningTrackingManual/image19.png)

### Four-Point Determine Two Lines Calculate Intersection

Four-point determine two lines calculate intersection takes four points on two intersecting edges of the workpiece. Two points on one edge determine one line, and the other edge determines another line. Calculate the perpendicular values of the two lines and record in global variables.

Diagram as shown:

![](assets-PositioningTrackingManual/image20.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 4-point determine two lines calculate intersection. Through GP0001, GP0002, GP0003, GP0004 point data, calculate projection point GP0005.

**Linear**: Run to the calculated intersection point.

![](assets-PositioningTrackingManual/image21.png)

![](assets-PositioningTrackingManual/image22.png)

### Three-Point Calculate Projection Point

Three-point calculate projection point takes three points on two intersecting edges of the workpiece. Two points on one edge determine one line. Through the projection point of the other edge's point on the line, determine perpendicularity. Values recorded in global variables.

Diagram as shown:

![](assets-PositioningTrackingManual/image23.png)

**Instruction Content Introduction**: (instruction interface below)

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 3-point calculate projection point. Through GP0001, GP0002, GP0003 point data, calculate projection point GP0004.

**Linear**: Run to the calculated projection point.

![](assets-PositioningTrackingManual/image24.png)

![](assets-PositioningTrackingManual/image25.png)

### Vector Calculation

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select vector calculation. Select 10mm in the direction from GP0001 to GP0002 to calculate GP0003.

**Linear**: Run to the calculated vector point.

![](assets-PositioningTrackingManual/image26.png)

### Four-Point Calculate Plane User Coordinate System

**Test Purpose and Effect**: Through the object's shadow reflected on the plane, calculate a new user coordinate based on the shadow.

**Test Process**:
1. First find a fixed plane and calibrate a basic user coordinate 1, as shown.

![](assets-PositioningTrackingManual/image27.png)

2. Find two adjacent and intersecting edges on the workpiece, and calibrate two points on each edge using laser, totaling four points a1, b1, c1, d1 (use laser single point positioning to calibrate each point), as shown below. After four-point calibration, calculate to obtain user coordinate 2. Need to find a weld seam L1 on the current workpiece for calibration (use linear).

![](assets-PositioningTrackingManual/image28.png)

3. After the above 2 points are complete, offset or rotate the workpiece. Perform second calibration on the four previously calibrated points a2, b2, c2, d2. Calculate user coordinate 3.

![](assets-PositioningTrackingManual/image29.png)

**Description**: The above operations must be performed with tool hand.

**Test Instruction Application**:

The following shows the instruction insertion process for user coordinate 2.

![](assets-PositioningTrackingManual/image30.png)

![](assets-PositioningTrackingManual/image31.png)

![](assets-PositioningTrackingManual/image32.png)

The following shows the instruction writing process for user coordinate 3.

![](assets-PositioningTrackingManual/image33.png)

![](assets-PositioningTrackingManual/image34.png)

## Positioning Offset

Description: All offsets require first reference positioning then correction positioning.

### One-Dimensional Offset

Use Case: After single point positioning, workpiece can only move in one direction. Positioning direction must be the same as offset direction.

![](assets-PositioningTrackingManual/image35.png)

![](assets-PositioningTrackingManual/image36.png)

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select the number of dimensions for offset based on positioning points and actual situation. Offset G001, offset amount is G002.

**Positioning Offset**: Offset is used in large quantity workpiece welding to compensate errors. Single-point to four-point offset have different usages based on actual situation. Use calculated GP0002 offset amount to calculate GP0001's offset position. GP0001 can be replaced with the needed weld seam.

### Two-Dimensional Offset

After two-point positioning, when workpiece does not rotate, only XY direction offset occurs.

![](assets-PositioningTrackingManual/image37.png)

![](assets-PositioningTrackingManual/image38.png)

![](assets-PositioningTrackingManual/image39.png)

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select the number of dimensions for offset based on positioning points and actual situation. Offset GP0001, offset amount is GP0003.

**Positioning Offset**: Offset is used in large quantity workpiece welding to compensate errors. Single-point to four-point offset have different usages based on actual situation. Use calculated GP0003 offset amount to calculate GP0001's offset position. GP0001 can be replaced with the needed weld seam.

### Two-Dimensional Offset + Rotation

After three-point positioning, workpiece can rotate overall and offset in both XY directions. First perform reference positioning, then perform correction positioning when offset occurs.

![](assets-PositioningTrackingManual/image40.png)

![](assets-PositioningTrackingManual/image41.png)

![](assets-PositioningTrackingManual/image42.png)

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 2-dimensional offset + rotation. Offset P0005, three-point calculate user coordinate.

Switch to user coordinate system 2: Switch to the calculated user coordinate system.

**Linear**: At this time, P0005 is the pre-taught user point position. It will offset based on the different user coordinates calculated each time. P0005 can be replaced with the needed weld seam.

### Three-Dimensional Offset (Preserve Reference User Coordinate System)

After three-point or four-point positioning, workpiece can rotate overall and offset in both XY directions. Requires two job files.

![](assets-PositioningTrackingManual/image43.png)

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Positioning Calculation**: Select 3-point calculate user coordinate system. Output user coordinate system 2.

Program modification method:

![](assets-PositioningTrackingManual/image44.png)

At this time, the second job file is needed because the previous job file is the basic user coordinate system. The next job file is the calculated offset user coordinate system. Can copy the file and add the following instructions.

![](assets-PositioningTrackingManual/image45.png)

In the second job file, must calculate the new user coordinate system and switch to the new user coordinate system before offsetting based on the difference between user coordinate systems. P0005 must be taught under user coordinate system 3 calculated after the first run. Must be a user point. P0005 can be replaced with the needed weld seam. After this, no matter how the workpiece rotates, as long as the laser can position 3 points, the offset P0005 can be calculated. After completion, need to restore to initial coordinate system 2 to avoid affecting subsequent user points.

## Arc Positioning

Enter "Craft/Positioning and Tracking/Positioning/[Touch] Positioning Parameters" for positioning parameter settings, as shown:

![](assets-PositioningTrackingManual/image46.png)

![](assets-PositioningTrackingManual/image47.png)

**Parameter Introduction**:

**Positioning File Number**: Corresponds to instruction file number.

**Reference Positioning**: Perform first positioning.

**Secondary Positioning**: Used when reference positioning is not accurate enough in some cases or when some manufacturers' reference positioning is too fast.

**Positioning Distance**: Distance traveled from instruction positioning start point.

**Speed**: Speed during positioning.

**Auto Return**: Return after welding torch touches positioning point.

**Auto Return Distance**: Distance to walk back from touching the workpiece.

**Whether to Change Attitude**: Turn on when performing two-point simple touch positioning calculation.

**Motion Vector Compensation**: When performing two-point simple touch positioning calculation, reverse compensate 0~5mm to prevent welding wire from poking into weld seam.

**Arc Positioning Point Introduction:**

![](assets-PositioningTrackingManual/image48.png)

As shown: Point a is dynamic positioning preparation point; Point b is dynamic positioning start point. Robot moves along vector ab direction for positioning. Welding wire touching workpiece immediately stops indicating position found. Positioning distance (b point as start point), speed are set in process parameters.

If auto return is required after positioning, robot will automatically return from c to d (return distance, speed set in parameters). Select in arc positioning process parameters: reference positioning, configure other parameters. Run program, program will stop at positioning calculation instruction (normal). Close reference positioning switch in parameters. Run program again.

## Arc Positioning Usage Types and Examples

### Plane Two-Point Calculate New User Coordinate System

![](assets-PositioningTrackingManual/image49.png)

**Operation Process**:

Perform user calibration before workpiece offset.

Use vision photography. Before workpiece offset, save two points as reference points to variables.

After offset, take photos again for a total of 4 points. Calculate new user coordinate system from these 4 points.

Select points based on workpiece as shown. Specific points adjusted based on actual situation.

**Instructions as shown**:

![](assets-PositioningTrackingManual/image50.png)

First record reference points and save to global position variables.

![](assets-PositioningTrackingManual/image51.png)

![](assets-PositioningTrackingManual/image52.png)

Second time after workpiece offset, record the same two points and save to different global position variables. Then calculate new user coordinate system from the four saved points.

### 2-Point Simple Touch Positioning

Operation Process: First dynamic positioning touch point G001 in the direction perpendicular to one side of the fillet weld, then dynamic positioning touch point G002 in the direction perpendicular to the other side of the fillet weld. Then use positioning calculation instruction through GP001, GP002 two points to calculate weld seam point GP003. Weld seam point attitude is consistent with GP001.

![](assets-PositioningTrackingManual/image53.png)

![](assets-PositioningTrackingManual/image54.png)

**Instruction Parameter Introduction**:

**Positioning Start**: Turn on arc signal.

**Dynamic Positioning**: Save the point found by arc to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off arc signal. File number must be the same as start.

**Positioning Calculation**: Save GP001, GP002 positioned points to scalar GP003 and finally calculate fillet weld seam point GP003.

### 3-Dimensional Offset + Rotation

Operation Process: Need to touch positioning on one plane to get three points, then touch positioning along the edge according to actual user coordinate system needed. Total six points as shown:

![](assets-PositioningTrackingManual/image55.png)

![](assets-PositioningTrackingManual/image56.png)

![](assets-PositioningTrackingManual/image57.png)

Need to add point-to-point or linear as path auxiliary points based on actual situation. Through positioning calculation 3-dimensional offset + rotation instruction, obtain user coordinate system from six dynamically positioned points. If offset is needed, the subsequent method is the same as four-point positioning. Create another identical job file and teach the weld seam, then offset by switching user coordinate system.

# Laser Tracking Process

Parameter Settings: Enter "Craft/Positioning and Tracking" to set parameters. File number corresponds to the file number in the instruction. Laser device is selected based on actual usage.

![](assets-PositioningTrackingManual/image58.png)

Enter "Positioning and Tracking/Laser Device Settings/Laser Device Configuration" to set communication between laser device and controller.

![](assets-PositioningTrackingManual/image59.png)

**Laser Device Manufacturer**: Select manufacturer based on laser device model.

**Device Number**: Corresponding host computer device.

**IP**: Connected host computer IP. Need to ensure controller, host computer, and teach pendant are in the same network segment for connection.

**Port Number**: Teach pendant and host computer port numbers need to be consistent.

**Communication Status**: Shows "Connected" when laser device is opened.

**Read/Write Timeout**: How many seconds after laser device read/write before timeout if no data received.

**Read/Write Cycle**: How many milliseconds the host computer reads/writes data each time.

**Laser Device Return Value Scale Factor**: Ratio of actual coordinate value to laser device returned coordinate value.

**Response Timeout**: In laser device communication, timeout between robot query command and laser device response command.

Enter "Positioning and Tracking/Laser Device Settings/Laser Device Calibration" to calibrate the laser device.

![](assets-PositioningTrackingManual/image60.png)

According to the illustration, calibrate seven points. During calibration, ensure the weld seam surface is parallel to the laser device, and the laser must be perpendicular to the weld seam. During calibration, maintain attitude unchanged. Also confirm that each calibration point can be seen in the corresponding manufacturer's debugging software as the intersection of weld seam and laser device without jitter. After calibrating seven points, can move to this point for inspection. After confirming correct, click calculate. If positioning process shows inaccurate points, need to recalibrate laser device or tool hand.

Enter "Positioning and Tracking/Tracking/Line Laser Tracking Parameters" for parameter settings, as shown:

![](assets-PositioningTrackingManual/image61.png)

![](assets-PositioningTrackingManual/image62.png)

## Line Laser Parameter Introduction

**Parameter Table Number**: Similar to other processes' craft number. Can save different users' parameters. Can be selected in instructions.

**Laser Device Task Number**: Corresponds to previous device number.

**Tracking Mode**: Divided into three types.

Absolute: Precise tracking. In the case of known weld seam, through positioning start point or directly moving near the weld seam for precise tracking. Precise tracking ensures that during tracking, if weld seam shifts or tool hand changes attitude, as long as laser device can identify the weld seam, tool hand can accurately move along the weld seam (currently only supports linear movement).

Fixed-point incremental: Welding torch stops above workpiece weld seam. External control rotates workpiece one revolution to complete circumferential seam welding. During this process, real-time correction based on laser scanning data.

Walking incremental: Welding torch moves along taught welding trajectory to complete welding. During this process, scan deviation is calculated and compensated to the original motion trajectory in real-time.

**Sensitivity**: Laser device sensitivity during incremental tracking.

**X Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Y Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Z Direction Compensation**: Compensate a certain length in tool coordinate system at weld seam position identified by laser device.

**Positioning Hold Function**: During fuzzy tracking, after compensating to a certain position based on taught weld seam, continuously track at that position.

**Positioning Hold Trigger Distance**: Compensation distance during fuzzy tracking. Suitable for short weld seams.

**Filter Method**: Filtering algorithm method for smoothing sensor data.

**Filter Level**: Lower level is smoother but more laggy.

**Scan Error Confirmation Distance**: During tracking, after sensor continuous scan failure and robot moves a certain distance, report error and stop.

**End Point Scan Period**: Scan period. Generally smaller period, less than 30ms.

**End Point Scan Interval**: Set a distance before and after taught end point as scan interval.

**Workpiece Rotation Output IO**: After welding arc start success, signal to notify third-party workpiece rotation (only exists in fixed-point incremental).

**Tracking End Input IO**: Workpiece welding complete, third-party notifies tracking system to end tracking signal (only exists in fixed-point incremental).

## Laser Calibration Zero Point

### Parameter Introduction

**Calibration**: Calibrate laser coordinate zero point. Use the relative position of laser line and weld seam as the correction reference (during calibration, welding torch aligns with weld seam for calibration).

**Run to Calibration Point**: Move robot to the calibrated point.

**Clear Calibration**: Clear calibration result.

Laser zero point calibration interface as shown:

![](assets-PositioningTrackingManual/image63.png)

## Tracking Usage Cases

### Absolute Tracking

Through teaching a straight line to determine weld seam direction, use laser device for scanning real-time tracking to ensure welding torch can maintain on the identified weld seam for welding operations. Similar to positioning, welding torch can also change attitude during tracking. If attitude change is needed, just change attitude at the taught points. Instruction interface as shown:

![](assets-PositioningTrackingManual/image64.png)

**Instruction Content Introduction**:

**Positioning Start**: Turn on laser device.

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point.

**Positioning End**: Turn off laser device. File number must be the same as start.

**Laser Tracking Start**: Turn on laser device.

**Linear**: Run to the previously positioned point.

**Linear**: GP001 is start point, P003 is end point. PL must be 5. If obvious acceleration/deceleration occurs, modify read/write cycle in laser device configuration until no pause.

**Laser Tracking End**: Turn off laser device. File number must be the same as start.

### Fixed-Point Incremental

![](assets-PositioningTrackingManual/image65.png)

**Instruction Content Introduction**:

**Linear**: Start point.

**Positioning Start**: Turn on laser device.

**Linear**: Point to be positioned (laser line roughly at weld seam start point).

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point (GP001).

**Positioning End**: Turn off laser device. File number must be the same as start.

**Linear (GP001)**: Run to the previously positioned point (weld seam start point).

**Laser Tracking Start**: Laser sensor initialization, in-place correction, and start tracking task.

**Welding Start**: Welding start, third-party gives arc start signal.

**Laser Tracking End**: Turn off laser device. File number must be the same as start.

**Welding End**: Welding end, third-party performs arc extinguishing operation.

### Walking Incremental

![](assets-PositioningTrackingManual/image66.png)

![](assets-PositioningTrackingManual/image67.png)

**Instruction Content Introduction**:

**Linear**: Start point.

**Positioning Start**: Turn on laser device.

**Linear**: Point to be positioned (laser line roughly at weld seam start point).

**Static Positioning**: Save the weld seam found by laser device to a variable for future calculation or direct movement to point (GP001).

**Positioning End**: Turn off laser device. File number must be the same as start.

**Laser Tracking Start**: Laser sensor initialization, in-place correction, and start tracking task.

**Welding Start**: Welding start, give arc start signal.

**Linear (GP001)**: Run to the previously positioned point (weld seam start point).

**Linear**: GP001 is start point, P003 is end point. PL must be 5. If obvious acceleration/deceleration occurs, modify read/write cycle in laser device configuration until no pause.

**Laser Tracking End**: Turn off laser device. File number must be the same as start.

**Welding End**: Welding end, perform arc extinguishing operation.

# Arc Tracking

Arc tracking is mainly suitable for weaving trajectory correction of fillet welds and V-groove welds. Commonly used for medium-thick plate welding in robot welding processes to correct workpiece deformation and assembly errors caused by high-current welding.

### Parameter Configuration

Enter "Craft/Positioning and Tracking/Tracking" interface, as shown below. Need to set communication parameters, left-right compensation parameters, and up-down compensation parameters sequentially.

![](assets-PositioningTrackingManual/image68.png)

### Communication Parameters

Enter "Communication Parameters" interface, as shown below. Parameter meanings:

**Sampling Period**: Time period for collecting current/voltage signals during weaving. Recommended period 2ms~20ms.

**Sampling Data Type**: During weaving, select the one with larger fluctuation between voltage/current. Aotai and Megmeet recommend selecting current.

![](assets-PositioningTrackingManual/image69.png)

### Left-Right Compensation Parameters

Left-right compensation refers to left-right compensation of weaving trajectory on the weaving plane. Enter "Left-Right Compensation Parameters" interface, as shown below. Parameter meanings:

![](assets-PositioningTrackingManual/image70.png)

**Compensation Switch**: Indicates whether to perform left-right correction during weaving. Can be closed for V-groove weld weaving with only up-down deviation.

**Deviation Extraction Type**: Currently only supports mean algorithm.

**Start Sampling Cycle Count**: Current signal has no obvious change in the first few cycles of weaving start, invalid. Generally start sampling from the 3rd~5th cycle.

**Correction Factor**: Compensation length per 1A current deviation. Generally, larger welding current and larger deviation means set this value smaller; otherwise set larger. Recommended value: 0.01~0.5.

**Compensation Threshold**: Compensate when current signal deviation exceeds threshold, otherwise no compensation. Recommended value is 10. Increase for larger welding current, decrease for smaller welding current.

**Maximum Compensation Per Cycle**: Extract deviation and compensate once per cycle. Maximum compensation length per time. This maximum compensation prevents over-compensation from super-large current during sampling.

**Compensation Acceleration Multiplier**: Left-right compensation acceleration. Compare with correction factor. Larger correction factor means set larger; smaller correction factor means set smaller. Recommended value 1.

### Up-Down Compensation Parameters

Up-down compensation refers to compensation in the weaving plane normal direction. Enter "Up-Down Compensation Parameters" interface, as shown below. Parameter meanings are the same as left-right compensation parameters. Generally, left-right compensation is larger and up-down compensation is smaller in normal working conditions, so compensation-related parameters can be appropriately reduced.

![](assets-PositioningTrackingManual/image71.png)

**Compensation Switch**: Indicates whether to perform up-down correction during weaving. Can be closed for V-groove weld weaving with only up-down deviation.

**Deviation Extraction Type**: Currently only supports mean algorithm.

**Start Sampling Cycle Count**: Current signal has no obvious change in the first few cycles of weaving start, invalid. Generally start sampling from the 3rd~5th cycle.

**Correction Factor**: Compensation length per 1A current deviation. Generally, larger welding current and larger deviation means set this value smaller; otherwise set larger. Recommended value: 0.01~0.5.

**Compensation Threshold**: Compensate when current signal deviation exceeds threshold, otherwise no compensation. Recommended value is 10. Increase for larger welding current, decrease for smaller welding current.

**Maximum Compensation Per Cycle**: Extract deviation and compensate once per cycle. Maximum compensation length per time. This maximum compensation prevents over-compensation from super-large current during sampling.

**Compensation Acceleration Multiplier**: Up-down compensation acceleration. Compare with correction factor. Larger correction factor means set larger; smaller correction factor means set smaller. Recommended value 1.

## Tracking Usage Cases

### Linear Weaving Tracking

![](assets-PositioningTrackingManual/image72.png)

### Arc Weaving Tracking

![](assets-PositioningTrackingManual/image73.png)

Note: P001, p002, P003 are three points on the arc.

# Arc Voltage Tracking

![](assets-PositioningTrackingManual/image74.png)

**Clear Parameters**: Clear the parameter values set in the current tracking file number.

**Copy Parameters**: Copy the parameter values set in the current tracking file number to the desired craft number.

## Arc Voltage Tracking Parameters

### Arc Voltage Collection

![](assets-PositioningTrackingManual/image75.png)

![](assets-PositioningTrackingManual/image76.png)

**Arc Voltage Collection Device**: Divided into welding machine and arc voltage module devices.

**Arc Voltage Collection Period**: How long to collect voltage once, unit is ms.

**Invalid Data Time**: Welding arc start has a period of super-high voltage that cannot be collected for calculation.

**Arc Voltage Analog Port**: Only present when arc voltage module is selected. Analog input port to be connected.

### Reference Voltage

![](assets-PositioningTrackingManual/image77.png)

![](assets-PositioningTrackingManual/image78.png)

**Reference Voltage Acquisition Method**: Divided into welding calculation and manual calculation. During welding calculation, after setting voltage and welding start calculation time, reference voltage is calculated. Manual calculation requires running the complete trajectory.

**Reference Voltage**: User sets the desired voltage. When welding machine voltage exceeds or is less than this set voltage value, correction is needed.

**Calculation Increment**: Voltage value to be compensated. Generally control target value is a few tenths of V less than calculated value.

**Welding Start Calculation Time**: Time needed to calculate reference voltage after welding starts. Only available for welding calculation.

**Start Collection**: Only available for manual calculation. When selecting manual calculation, the arc voltage popup interface will show. Click start collection when starting to run, click end collection when running ends.

**Calculate and Hold**: After running ends, click calculate and save. Reference voltage will be saved in controller and displayed on interface.

Note: Reference voltage calculated by welding calculation will not be displayed on teach pendant. Can only be seen from logs.

### Control Parameters

![](assets-PositioningTrackingManual/image79.png)

**Proportional Coefficient**: Proportionally reflects system deviation. Once system has deviation, proportional regulation immediately produces regulation to reduce deviation. Larger proportional action can speed up regulation and reduce error, but too large proportion reduces system stability and may cause system instability.

**Integral Coefficient**: Eliminates steady-state error and improves accuracy. Because there is deviation, integral regulation continues until no deviation, then integral regulation stops. Integral regulation output is a constant value. Strength of integral action depends on integral time constant Ti. Smaller Ti means stronger integral action. Larger Ti means weaker integral action. Adding integral regulation can reduce system stability and slow dynamic response. Integral action is often combined with other two regulation laws to form PI regulator or PID regulator.

**Derivative Coefficient**: Derivative action reflects the rate of change of system deviation signal. Has predictive ability and can predict the trend of deviation change. Therefore can produce advanced control action. Before deviation forms, it has been eliminated by derivative regulation. Therefore, can improve system dynamic performance. With appropriate derivative time selection, can reduce overshoot and regulation time. Derivative action amplifies noise interference, so excessive derivative regulation is unfavorable for system anti-interference. Additionally, derivative reflects rate of change. When input has no change, derivative action output is zero. Derivative action cannot be used alone and needs to be combined with other two regulation laws to form PD or PID controller.

**Deviation Threshold**: When controlled quantity deviation is greater than this value, proportional and integral ratios are reduced. Generally set a larger deviation.

**Integral Limit**: Prevent excessive error integration.

**Output Limit**: Prevent excessive single regulation.

### Program

![](assets-PositioningTrackingManual/image80.png)


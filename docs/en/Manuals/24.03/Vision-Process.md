---
title: "Vision Process"
description: "Introduction to Vision Process functions"
author: "zhy"
date: "2026-04-10"
tags: ["Vision Positioning", "Eye-in-Hand", "Eye-to-Hand"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---
# Vision Process

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| Start Vision | Supported | Supported | Supported |
| Trigger Vision | Supported | Supported | Supported |
| Get Vision Position Count | Supported | Supported | Supported |
| Get Vision Position | Supported | Supported | Supported |
| Clear Vision Position Info | Supported | Supported | Supported |
| End Vision | Supported | Supported | Supported |

| Instruction Type | Single Step | Reverse | Advance Execution | Trial Run | Pre-executed |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Start Vision | Supported |  |  | Supported |
| Trigger Vision | Supported |  |  | Supported |
| Get Vision Position Count | Supported |  |  | Supported |
| Get Vision Position | Supported |  |  | Supported |
| Clear Vision Position Info | Supported |  |  | Supported |
| End Vision | Supported |  |  | Supported |


# Process Introduction

Identify and locate workpieces so that the robot can perform more precise grasping operations. It features: precise positioning, easy deployment, simple and flexible parameter configuration, rich instructions, etc. It is often combined with conveyor tracking process to effectively track and grasp workpieces with simple programming.

## Parameter Settings

Click Process - Vision Process to enter the vision process parameter settings interface, as shown:

![](assets/vs8gxf99oflio002bo-9u.png)

### Vision Parameter Settings

The vision parameter settings interface is shown below:

![](assets/r1jy042xr30_7av_f3lfr.png)

1. Camera Selection:

| Parameter | Description |
| :--- | :--- |
| Process No. | Provides 1-99 process numbers, each saving all vision parameters and vision position parameters under that number. |
| Type | Currently supports custom type and delta type. Users can set parameters according to their needs. |

2. User Coordinate System:

This system supports mapping vision points to the user coordinate system, i.e., the points sent by the camera are in the vision coordinate system. Here you need to select a user coordinate system that has been matched with the camera.

![](assets/hyd4zw5hvyazzxzpdwduh.png)

As shown above, if "None" is selected, the camera defaults to sending points in the Cartesian coordinate system;

Users can also select their calibrated user coordinate system (the selected user coordinate system is calibrated in Settings - User Coordinate Calibration page).

3. Network Parameters

| Parameter | Description |
| :--- | :--- |
| Camera IP | When the camera is the server, enter the camera IP here. The camera's IP address and the controller's IP address must be in the same subnet. When the camera is the client, the IP address here is the current connected controller's IP address. If the camera is the client, the controller is the server, and the camera needs to actively connect. |
| Camera | Client, Server |
| Port Count | If the vision server uses the same port for data send/receive, the port count is 1; if different ports are used, the port count is 2. Port 1 receives data, Port 2 sends data (port numbers cannot be set the same) |
| Camera Data | Robot coordinates, pixel coordinates, conveyor pixel coordinates, conveyor robot coordinates. If robot coordinates is selected, the data sent by TCP is the robot's coordinates; if pixel coordinates is selected, the data sent by TCP is pixel coordinates in the camera coordinate system. |

4. Connection Parameters

| Parameter | Description |
| :--- | :--- |
| Frame Header | The frame header before sending position data, must match the camera's configured parameters. |
| Delimiter | The delimiter between each data when sending position data, must match the camera's configured parameters (delimiter cannot be set to empty) |
| Frame End | The end marker after sending position data. Must match the camera's configured parameters. |
| Success Send Marker | The camera sends a success marker after taking a photo and successfully recognizing the workpiece. |
| Failure Send Marker | The camera sends a failure marker after taking a photo and failing to recognize. |
| Timeout | When this time is exceeded, the controller reports an error (vision trigger timeout) and photo capture fails, range (0,5000]s. |
| Single Target | When this enable is closed, multiple target points can be recognized. Single target data format: @,x,y,Rz,$ ("@" represents frame header; "," represents delimiter; "$" represents end marker; "x,y,Rz" represents the specific position coordinate values). Multi-target data format: @,N,x,y,Rz,x,y,Rz,$ ("@" represents frame header; "N" represents the number of position data sent; "," represents delimiter; "$" represents end marker; "x,y,Rz" represents the specific position coordinate values). Note: Enabling single target will only recognize one position |
| Type | 2D, 2D+Height, 3D. Example: (frame header "!" delimiter "," frame end "$"). 2D: data format: !,X,Y,Rz,$. 2D+Height: data format: !,X,Y,Rz,h,$. 3D: data format: !,X,Y,Z,A,B,C,$ |
| Additional Data Count | Stores data sent by the camera other than position (tool number, color, position validity, etc.). User-defined additional data values are stored by default in the first variable GS001, and sequentially stored based on the additional data count. Example: custom 1 represents black, the camera sends additional data 1, after parsing to the variable, the camera captured a black workpiece, then we can use conditional judgment to define the variable value as 1, and the robot picks the black workpiece. Example: (frame header "!", delimiter ",", frame end "$"). Single target format: !,X,Y,Rz,data...,$. Multi-target format: !,N,X,Y,Rz,data...,X,Y,Rz,data...,$ |

5. Trigger Method

| Parameter | Description |
| :--- | :--- |
| IO | Give the camera a trigger signal; here you need to set the IO signal port |
| Ethernet | Generally defaults to Ethernet sending. When the camera receives "TRG" (or user-defined string), it should reply with coordinate values to the controller. |
| Trigger Condition - Single Trigger | When the condition is single trigger, only one trigger occurs when running the vision trigger instruction. |
| Trigger Condition - Continuous Trigger | When the condition is continuous trigger, continuous triggering occurs when running the vision trigger instruction. |
| Trigger Period | Time interval during continuous triggering |

6. Receive Coordinate System

| Parameter | Description |
| :--- | :--- |
| Description | The received position information is position data sent by the camera with a specific tool and specific user coordinate system |
| Tool | Enable this to include the tool used in the camera-sent positions (for multi-tool operations) |
| User | Enable this to include the user coordinate system used in the camera-sent positions (for multiple workstations) |
| Note | Before enabling user, the hand-eye calibration user coordinate system cannot be None (when closed, it needs to be set to None). User and Tool enables can be opened/closed simultaneously |

7. Radian/Degree

| Parameter | Description |
| :--- | :--- |
| Radian/Degree | The A/B/C axis unit type in vision position parameters. Radian unit is rad, degree unit is ° |
| Note | The radian/degree switching in vision parameter settings affects the parsed data content. The radian/degree settings in operation parameters only affect the teach pendant display |

### Vision Range Settings

To prevent the position parameters returned by the camera from exceeding the robot's reachable range, the maximum range the robot can reach is defined. If the camera returns out-of-range parameters, a warning is issued and the data is automatically filtered and does not take effect. The calibration method can be manual teaching or direct parameter entry.

![](assets/lq39iz9vja7k-7lhpprid.png)

Process No.: Provides 1-99 process numbers, each saving the vision range parameters under that number.

Range Calibration: Calibrate the maximum and minimum values of the X, Y, Z axes in the Cartesian coordinate system.

![](assets/17716c5a7f584ebe9f869dd9da8b8fb6.png)

Calibrate Mx: Calibrate X-axis maximum;

Calibrate mX: Calibrate X-axis minimum;

Calibrate MY: Calibrate Y-axis maximum;

Calibrate mY: Calibrate Y-axis minimum;

Calibrate MZ: Calibrate Z-axis maximum;

Calibrate mZ: Calibrate Z-axis minimum;

Calibration Complete: Records the calibrated X, Y, Z range maximum and minimum values.

### Vision Position Parameters

![](assets/1de1d02b827b457dbf53cd662b125c90.png)

Process No.: Provides 1-99 process numbers, each saving the vision position parameter settings under that number.

1. Offset Compensation: If each robot grasping position has a fixed directional offset from its actual position, enter the compensation amount here, and it will be automatically compensated to the correct position.

2. Scale Factor: If the position values sent by the camera are scaled down by a specific ratio, enter the scale factor here. For example, if the camera sends (300,200,100) but the actual position is (3,2,1), enter 0.01 here.

Compensation amount: The Cartesian coordinate value deviation between the workpiece grasping position and the actual position.

Calculation formula: Scale factor = Actual position value / Camera-sent position value.

3. Angle Direction: Whether the camera-sent position rotation angle is the same as or opposite to the robot's.

4. Receive Position Type: Point/Trajectory.

Point: Camera takes a photo and sends the position to the controller.

Trajectory: Camera identifies the trajectory and sends a series of points, running the trajectory through the external point instruction.

When the receive position type is set to Trajectory, the program job file is as follows:

![](assets/nqroaqwvvpeju5oylu9lu.png)

5. Get Camera Capture Angle
Camera captures the object and records the angle returned by the camera at that time.

6. Robot Grasping Posture
Calibrate Grasping Posture: Here you need to mark the robot's end-effector posture when grasping the object. After calibration, every grasp will use this posture (the XYZ values here do not affect the grasping position). If the target has angle changes, the final angle = calibrated C value + camera-sent C value.

Run to Reference Point: Run to the point calibrated for the grasping posture.

7. Camera Coordinates
Camera Coordinates: If the camera cannot send the grasping height, enter the grasping height Z in the table on the right. If the camera can send the grasping height, this setting is invalid. After setup, press the DEADMAN button to power on, click [Test Photo] button for a photo test. Data sent by the camera will be displayed in the camera coordinates and received data fields.

Test Photo: Servo powered on, click test photo to open network connection and receive data from the communication device. If it doesn't match the example format, a warning is triggered.

Run to This Point: After taking a photo, press DEADMAN to power on, click [Run to This Point] button to move the robot to the photo position. Verify if the converted machine coordinates after hand-eye calibration are accurate.

Example Format: Verify and arrange according to the connection parameters set in the vision parameter settings interface.

For example, 2D+Height: if the frame header is @, delimiter is ,, end marker is \$, then the format is @,x,y,Rz,h,\$.

Received Data: The position sent by the camera.

For example: if the camera sends position x=100, y=-50, Rz=1, h=1000, the received data displays as @,100,-50,1,1000,\$.

### Position Debugging

Used in conjunction with conveyor tracking for conveyor debugging. After the camera takes a photo, it sends a position data that exists in both [Original Position] and [Offset Position], but the workpiece will be moved a distance by the conveyor. Click Calculate Offset, and the calculated offset position will overwrite the [Offset Position]. Click Run to This Point, and the robot will go directly to the calculated offset position.

Enter from "Process" - "Vision Process" - "Position Debugging". Used for debugging the conveyor when using vision plus conveyor tracking.

![](assets/e3a8b70258b74d2cb67bdf9efb9183bd.png)

Process No.: The vision process number.

Conveyor Process No.: The conveyor tracking process number to debug.

Photo: Press DEADMAN to power on, then click [Photo] button for a photo test. The position data sent by the camera will be displayed in [Original Position] and [Offset Position].

Run to This Point: After taking a photo, press DEADMAN to power on, select the position and click [Run to This Point] button. The robot will move to the position sent by the camera.

Calculate Offset: After taking a photo, open the conveyor to move the workpiece a distance. Click Calculate Offset to re-display the offset workpiece position in [Offset Position] on the right.

Clear: Clear all positions.

### Vision Calibration

The purpose of vision calibration is to calibrate the transformation relationship from the camera coordinate system to the robot coordinate system, thereby determining the position coordinates of the camera-recognized target in the robot coordinate system, and ultimately enabling the robot to move to the target position.

Based on whether the camera is mounted on the robotic arm, the calibration methods are mainly divided into eye-in-hand and eye-to-hand. Detailed operation instructions are provided below.

1. Eye-in-Hand

Used when the camera is on the tool. The camera lens surface should be roughly parallel to the calibration template plane, and the relative height between the camera and the calibration template should remain unchanged throughout the calibration process. By marking the robot's current position information, these positions must include at least 3 unchanged posture points and 3 changed posture points. Run calculation, the robotic arm moves the camera to the current robot positions to obtain corresponding pixel data. After all pixel data is obtained, the transformation relationship between camera data and robot positions is calculated. Subsequently sent camera positions can be converted to actual robot motion positions through this transformation relationship.

![](assets/tzuhncfkuprv_t0k6cmy_.png)

Process No.: The vision process number.

Calibration Point Count: The number of points to teach, range (6-30).

Points: Minimum 6 points, maximum 30 points. The calibrated points require at least 3 different positions and 3 different postures. E.g., (move X-axis, Y-axis to mark 3 points, then move C-axis to calibrate 3 points).

Mark This Point: Record the current robot position data.

Move to This Point: Press DEADMAN to power on, select the sequence number and click [Run to This Point] button. The robot will move to the position marked by that sequence number.

Clear This Point: Clear the position data of the selected sequence number without clearing the pixel data. The pixel data will be recaptured after running the calculation.

Run Calculation: Click Run Calculation. The robot will automatically move to each point based on the previously taught position data. At each point, it triggers photo capture and records the current pixel data. After motion data collection is complete, automatic calibration calculation is performed and the calculation result is displayed.

2. Eye-to-Hand

The camera is fixedly mounted on a fixed bracket (photographing from top to bottom) or installed below the target (photographing from bottom to top). The camera lens surface should be roughly parallel to the calibration template, and the relative height between the camera and the calibration template should remain unchanged throughout the calibration process.

Note: The calibration template is fixed at the end of the robotic arm tool.

Method Overview: This calibration method is divided into 3 steps: hand-eye calibration, robotic arm tool calibration, and high-precision tool calibration.

Note: This method can only calibrate the tool offset on the field plane, so it is suitable for SCARA robots.

Steps:

①9-point (16-point) hand-eye calibration: Move the robotic arm to place the tool end template in the center area of the field. Click "Run Calculation", and the system will automatically calculate 9 (16) positions and move to them sequentially, collecting 9 (16) sets of position coordinates (pixel coordinates and robot no-tool coordinates). After completion, the system automatically calculates the transformation relationship from camera pixel coordinates to robot coordinates.

②Tool calibration: Move the robotic arm to the 1st marked point from step 1, then use the end flange center as the calibration plane center, rotate the tool in both positive and negative directions by a certain angle, and collect 2 sets of position coordinates (pixel coordinates and robot no-tool coordinates). After completion, the system automatically calculates the tool.

③High-precision tool calibration: Move the robotic arm to the 1st marked point from step 1, then use the tool end calculated in step 2 as the center, rotate around the center on the calibration plane by changing posture with step angles (i.e., tool position unchanged, posture changes) 6 times, recording 6 sets of position coordinates (pixel coordinates and robot no-tool coordinates). After completion, move to the 1st point again, rotate 6 times in the opposite direction. After completion, return to the 1st point again, rotate 6 times in the same direction as the first time and record coordinates. Finally, the system calculates a high-precision tool.

![](assets/cd-vg6zsa_et0-diwgpey.png)

Tool Selection: Select the tool to calibrate.

Template Selection: 9-point and 16-point.

Note: The 9-point calibration range is a 3x3 grid. You need to test whether the robot can capture images at the four corners of the robot coordinates. If not, adjust the camera capture range or reduce the step distance between each point. Same for 16-point calibration.

Step Length Setting: Based on the current robot position, automatically calculate the spacing for 9 (16) points.

Angle: After setting the angle, the robot rotates left and right by the set angle on the Cartesian coordinate system basis to preliminarily calculate the tool.

Step Angle: In step 3 high-precision tool calibration, the angle the robot rotates in one direction around the tool end along the calibration plane.

## Vision Instructions

### VISION_RUN - Start Vision

![](assets/hs-mtw1yabxwosr6hpmqq.png)

Format: VISION_RUN [Instruction Name] ID=1 [Process No.].

Function: After executing the start vision instruction, the controller connects to the camera.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface. |

### VISION_TRG - Trigger Vision

![](assets/majjgyrr9xmkt2jeebk2p.png)

Format: VISION_TRG [Instruction Name] ID=1 [Process No.].

Function: After executing the trigger vision instruction, wait for the vision server's return value (sent position data). After obtaining the position data, continue running the next instruction.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface. |

Description: The specific trigger method is set in the Vision Process - Vision Parameter Settings interface:

1. Select IO trigger, running this instruction sends the corresponding IO signal
2. Select Ethernet method, running this instruction sends a custom string to the camera.

### VISION_POSNUM - Get Vision Position Count

![](assets/8jsd4huwmrznb46mn-nvk.png)

Format: VISION_POSNUM [Instruction Name] ID=1 [Process No.] GI001 [Global Numeric Variable].

Function: Record the number of positions sent by the camera and store the position count into the selected variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface. |
| Global Numeric Variable | Store the number of positions sent by the camera into the selected variable. For example: if the camera sends three position data and the selected variable is GI001, after executing this instruction GI001=3. Note: each time the get position instruction is executed, the position count decreases by one |

### VISION_POS - Get Vision Position

![](assets/z9ske5zg6jhwzcowopzmi.png)

Format: VISION_POS [Instruction Name] ID=1 [Process No.] GP001 [Global Position Variable] I/GI/D/GD/S/GS [Additional Data Variable].

Function: Execute this instruction to store the position information sent by the camera into variables.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface |
| Global Position Variable | Camera-sent position information is sequentially buffered into the selected global position variable. For example: global position variable GP0001, camera sends two positions, executing the get vision position instruction stores the position info to variable GP0001. First run stores the first position info, second run stores the second position info |
| Additional Data First Variable | Variable types: integer, float, string. Executing this instruction stores the defined additional data sequentially into variables. The additional data count needs to be set in the Vision Process - Vision Parameter Settings interface. For example: set additional data count to 2, additional data first variable to GD001. Executing this instruction stores the defined additional data into GD001, GD002 |

### VISION_CLEAR - Clear Vision Position Info

![](assets/bic73e3f7sygdfx1dh8-l.png)

Format: VISION_CLEAR [Instruction Name] ID=1 [Process No.].

Function: Clear the camera-sent position information in the current process number.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface. |

### VISION_END - End Vision

![](assets/y6isucapzabmkqqkn0_6u.png)

Format: VISION_END [Instruction Name] ID = 1 [Process No.].

Function: End the vision process. The controller disconnects from the camera.

Parameters:

| Parameter | Description |
| :--- | :--- |
| ID | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface. |

### VISION_TRACE - Get Vision Trajectory Position

![](assets/jrnch-efwh6zj33nriosk.png)

Format: VISION_TRACE [Instruction Name] ID = 1 [Process No.];
0/1 ["0" means position storage is the external axis motion queue, "1" means position storage is variables] P/GP [First variable for position storage] I/GI [Position count];
I/GI/D/GD/S/GS [Additional data first variable].

Function: When the camera sends multiple positions, you can choose different position storage methods to run trajectories.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Process No. | Range [1,99]. The process number selected in the instruction must match the process number selected in the vision process interface |
| Position Storage | Variables, external point motion queue. Variables (sent positions stored in variables). External point queue (after camera sends positions, insert an external point instruction below the get trajectory position instruction, so the program can run external point trajectories) |
| First Variable for Position Storage (default GP0001) | When position storage is set to external point motion queue, this parameter cannot be modified. Variable types: P, GP, P[], GP[]. After camera sends positions and executes the get trajectory position instruction, positions are stored in the selected first variable, and the storage variables extend sequentially based on position count and selected first variable. For example: camera sends 3 positions, selected first variable is GP0005, position data stored in GP0005, GP0006, GP0007 |
| Position Count (default I001) | When position storage is set to external point motion queue, this parameter cannot be modified. Position count types: I, GI, I[], GI[]. The number of positions sent by the camera is stored in the selected variable. For example: camera sends 4 positions, selected position count variable is I005, when running the get trajectory instruction, I005=4 |
| Additional Data First Variable | Variable types: integer, float, string. Executing this instruction stores the defined additional data sequentially into variables. The additional data count needs to be set in Vision Process - Vision Parameter Settings interface. For example: set additional data count to 2, additional data first variable to GI001. Executing this instruction stores the defined additional data into GI001, GI002 |

### ONFLY_INIT - Start Fly Capture

Fly capture function: When the robot tool moves past the photo point, it quickly triggers the camera to capture. During capture, the object or camera is in motion.

- Fly capture trigger method: Photo point

Format: ONFLY_INIT [Instruction Name]; ID [Vision Fly Capture Process No.]; VISIONID [Vision Process No. bound to fly capture]; TYPE [Photo Point];
RADIUS [Photo point range radius]; DELAY [Coordinate recording delay]; CAMERA_TRIGGER_DELAY [Camera trigger delay].

- Fly capture trigger method: IO signal

Format: ONFLY_INIT [Instruction Name]; ID [Vision Fly Capture Process No.]; VISIONID [Vision Process No. bound to fly capture]; TYPE [IO];
VALUE [Port value]; DELAY [Coordinate recording delay]; CAMERA_TRIGGER_DELAY [Camera trigger delay].

Function: Start the fly capture task.

- Fly capture trigger method: Single axis

Format: ONFLY_INIT [Instruction Name]; ID [Vision Fly Capture Process No.]; VISIONID [Vision Process No. bound to fly capture]; TYPE [Single Axis];
TRIGGER_START_POS [Trigger start position]; TRIGGER_COUNT [Trigger count]; ANGLE_SPACING [Trigger angle interval];
DELAY [Coordinate recording delay]; CAMERA_TRIGGER_DELAY [Camera trigger delay].

Note: Photo point method only supports linear instructions and does not support smoothing.

> Single axis method does not support linear instructions.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Process No. | Each vision fly capture process number has 1-99. Supports manual process number entry and variable form. Variables only support integer variables (INT, GINT) |
| Vision Process No. | Enter the vision process number bound to fly capture here. Supports manual entry and variable form. Variables only support integer variables (INT, GINT). If vision is not connected when this instruction executes, capture will not be triggered; when vision is closed, fly capture also closes |
| Fly Capture Trigger Method | 1. Photo Point; 2. IO Signal, rising edge (1) or falling edge (0) effective |
| Photo Point | The position to capture, needs manual teaching and manual value assignment to variables |
| Photo Point Range Radius | Distance radius from the photo point; entering the capture area triggers capture |
| IO Port | Manual IO input port number and variable form (DIN, DIN[]). Triggers capture; records the robot's position after signal trigger |
| Port Value | Manual: directly define the selected port value. Range [0,1]. Variable: define IO port value through variable assignment |
| Coordinate Recording Delay | Delay time from capture trigger to recording robot coordinates, unit ms |

### ONFLY_END - End Fly Capture

Format: ONFLY_END [Instruction Name] ID=1 [Process No.].

Function: End the fly capture task.

Can be used independently; executing fly capture end before fly capture start is invalid.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Process No. | Vision fly capture process number, range [1,99]. Supports manual entry and variable (INT, GINT) form |

Description: Inserting the fly capture end instruction alone will not cause errors during program execution. Executing fly capture end before fly capture start is invalid.

### ONFLY_GET_STATUS - Get Fly Capture Open Status

Format: ONFLY_GET_STATUS [Instruction Name] ID=2 [Fly Capture Process No.] STATUS=B001 [Status].

Function: Get whether the fly capture task is open and store the obtained status into the selected variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Process No. | Vision fly capture process number, range [1,99]. Supports manual entry and variable (INT, GINT) form |
| Result | Get the fly capture task open status, store the obtained status into the variable (BOOL, GBOOL). "0" means fly capture not open, "1" means fly capture open. For example: selected variable is B001, executing the get fly capture status instruction, if fly capture is open then B001=1, if not open then B001=0 |

### ONFLY_CALC_TOOL - Fly Capture Calculate Tool

Format: ONFLY_CALC_TOOL [Instruction Name] ID=2 [] GRABTOOL=1 [Grasping Tool] NEWTOOL=2 [New Tool].

Function: Fly capture calculate tool is used when the robotic arm grips a workpiece that may be at an eccentric position with a rotation angle. Through calculation, after obtaining and switching to a new tool, the workpiece center is placed at the unloading position without eccentricity or rotation.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Process No. | Vision fly capture process number, range [1,99]. Supports manual entry and variable (INT, GINT) form |
| Grasping Tool | Supports manual tool number entry and variable (INT, GINT) form, range [1,999]. The tool used for grasping and capturing |
| New Tool | Supports manual tool number entry and variable (INT, GINT) form, range [1,999]. The new tool obtained through calculation |

## Vision Process Examples

### Example 1: Close vision after camera captures 10 times

![](assets/pwidwglwcnrqnq8i_w6lj.png)

### Example 2: Camera sends continuous trajectory positions

When the camera sends continuous trajectory positions, you can obtain positions through the get trajectory position instruction. The following example uses a network debugging assistant to send positions. Vision communication is successful and positions are sent. The sent positions are for illustration only and have no actual meaning.

![](assets/bxndsux23nmnatkluvxgc.png)

1. Get trajectory position - position storage selects external point

![](assets/_pakkosikemul_tkeaum8.png)

2. Position storage selects variables

For example: first variable selects P0001, network debugging assistant sends 5 positions, program as shown:

![](assets/ct6pfirto-nqtf_zds0gl.png)

### Example 3: Get tracking position additional data parameter description

1. Vision Process - Vision Parameter interface sets additional data count, maximum 10 supported.

![](assets/jqd_xminikqykzelg-vl-.png)

2. Click vision position parameters to enter the parameter interface and view the example format. "data" represents additional data.

![](assets/t01ym6loonp_ggeoswrqs.png)

3. External device: Network debugging assistant sends positions according to the example format in the vision position parameters interface.

![](assets/tj3gdbdps6exkvdjgvler.png)

4. Click test photo. After the network assistant sends positions, the received data line "1,2" represents additional data. Additional data is stored by default in GS001, extending sequentially based on the defined additional data count.

![](assets/djahjnjujrpvvjnj1uroh.png)

5. If the get conveyor tracking position instruction is inserted, executing the instruction stores the defined additional data values into user-selected variables (integer, float, string). Users can represent workpiece shapes and colors with numbers (e.g., GD001=1 represents red, GD002=2 represents green), then use conditional judgment to track and grasp workpieces of different colors.

![](assets/epxahwouvdjjfsysofgl3.png)

![](assets/b2mr9hjba69yftmrqvnos.png)

### Example 4: Camera captures material photo, sends data to robot, robot grasps

As shown:

![](assets/hyhy-0mg02na69d_chfxv.png)


## Q&A for Retrieval

**Q: What is the purpose of vision calibration?**
A: The purpose of vision calibration is to calibrate the transformation relationship from the camera coordinate system to the robot coordinate system, thereby determining the position coordinates of the camera-recognized target in the robot coordinate system, and ultimately enabling the robot to move to the target position.

**Q: What are the two methods of vision calibration?**
A: Vision calibration is mainly divided into two methods:
- Eye-in-Hand: Camera mounted on the tool, requires calibrating 6-30 points, including at least 3 unchanged posture points and 3 changed posture points
- Eye-to-Hand: Camera fixedly mounted, divided into three steps: 9-point (16-point) hand-eye calibration, tool calibration, high-precision tool calibration

**Q: What is the fly capture function?**
A: The fly capture function means when the robot tool moves past the photo point, it quickly triggers the camera to capture. During capture, the object or camera is in motion.

**Q: What are the fly capture trigger methods?**
A: Fly capture trigger methods include:
- Photo point: triggered when robot passes the photo point
- IO signal: triggered by rising or falling edge of IO signal
- Single axis: triggers multiple captures at angle intervals

**Q: What are the typical application scenarios for vision process?**
A: Typical application scenarios for vision process include:
- Industrial robot workpiece grasping
- Conveyor tracking and grasping
- Precision positioning tasks
- Vision-guided automation production lines
- Scenarios requiring precise identification and positioning

---
title: "Variables and String Manual"
description: "INEXBOT controller variable instruction manual."
author: "MUZI165"
date: "2026-06-22"
tags: ["INEXBOT Controller", "Variable Instructions", "String Instructions"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Variables and String
**Variables:**

"√" indicates support for this instruction.
| Instruction Type | Foreground | Global Background | Local Background |
| :---: | :---: | :---: | :---: |
| Assignment | √ | √ | √ |
| Write to File | √ | √ | √ |
---

**Strings:**

"√" indicates support for this instruction.
| Instruction Type | Foreground | Global Background | Local Background |
| :---: | :---: | :---: | :---: |
| String Append | √ | | |
| String Index Slice | √ | | |
| String Delimiter Split | √ | | |
| String Locate Query | √ | | |
| String Length | √ | | |
| String to Non-String | √ | | |
| Non-String to String | √ | | |
---

## Variables

### Variable Types

#### Numeric Variables
| Variable Type | Global Variable | Local Variable |
| :---: | :---: | :---: |
| Integer | GINT | INT |
| Floating-Point | DOUBLE | DOUBLE |
| Boolean | GBOOL | BOOL |
| String | GSTRING | STRING |
---

#### Position Variables

| Variable Type | Description |
| :---: | :---: |
| P | Local position variable that records robot position data |
| GP | Global position variable that records robot position data |
| E | 1. When robot is connected to external axes, local position variable that records external axis position data </br> 2. When dual-machine mode is set, local position variable that records two robots' position data |
| GE | 1. When robot is connected to external axes, global position variable that records external axis position data </br> 2. When dual-machine mode is set, global position variable that records two robots' position data |
---

Notes: Newly created or modified local position data is only saved in the current job file. Global position data is always saved. Different job files can call the same global position variable. When one file modifies a global position, the same global variable called in another job will also be modified.

### Global Numeric Variables

Click Variables - Global Numeric to enter the global numeric variable interface.

![](./assets/ttpovskmdaltkv6oxeysc.png)

[Modify] Select the variable name that needs to be modified, click "Modify" then assign value to the variable and add comments to the variable.

[Clear] Clear the value stored in the variable. After clicking clear, the variable value becomes 0. The clear button only clears the current interface value.

[Cancel] Do not perform any operation on the selected variable.

[Save] Save the modified variable value.

[Return] Return to the variable interface.

[Current Integer Variable] Fill in the value, click confirm on the keypad to directly navigate to the corresponding variable.

[Comment] Users can add comments to variables for easy identification of the variable's purpose.

#### Global Numeric Variable Assignment

**Manual Assignment:**

1. In the global numeric variable interface, select the variable that needs to be modified, click "Modify" then enter the value.

2. Click "Save" to successfully assign the variable.

![](./assets/-rgsknavkqrw_k2suisjr.png)

**Instruction Assignment:**

1. Create a new project, open the project file;

2. Insert instruction, select Variable type for instruction type, select assignment instruction;

3. Click [OK] to enter the instruction parameter settings interface, select variable type and fill in variable value;

4. Click [OK] to successfully insert the assignment instruction. If you need to assign values to multiple different variables, repeat the previous steps;

5. After instruction execution, you can view the variable value changes in the Monitor - Numeric Variable interface or Global Numeric Variable interface.

![](./assets/ml0plbzirvvbkm710zy-_.png)

### Local Numeric Variables

Description:

1. The value assigned to local numeric variables only applies to the current program;

For example: Create program A and program B. In program A, assign I001=10, then open program B. In the variable interface, view I001 value, the variable interface shows I001=0.

2. All defined local numeric variables generally can only be used in the current program. Other programs and background programs cannot use them.

> Note: If using instructions to call background, subprogram, declaring local numeric variable parameters allows use in the main program.

Defining local variables requires clicking [Variables] in the opened program interface to enter the local variable parameter settings interface.

![](./assets/gckmezuzp0hajmo1thx01.png)

![](./assets/w6qxolzsvc2xxh6wr_hql.png)

[Modify] Modify the value of the selected numbered variable.

[Save] After modifying the target variable value, click save to successfully modify the variable value.

[Cancel] Do not perform any operation on the selected variable.

[Return] Click the return button to return to the program interface.

[Current Integer Variable] Fill in the value, click confirm on the keypad to directly navigate to the corresponding variable.

[Comment] Users can add comments to variables for easy identification of the variable's purpose.

#### Local Numeric Variable Assignment

**Manual Assignment:**

1. In the Program - Variables - Local Variables interface, click [Modify] to input value for the variable that needs to be assigned;

2. Click [Save], variable modification successful.

![](./assets/h20lm_h6wrddshaugtyqf.png)

Notes: Values assigned to variables manually are considered the initial values of the variable. Values assigned to variables through instructions do not modify the initial values. The variable value display in the local variable interface remains unchanged unless the user manually modifies the initial value again.

For example: We assign D001=22 through instruction. After instruction execution ends, view D001=11 in this interface.

**Instruction Assignment:**

1. Create a new project, open the project file;

2. Insert instruction, select Variable type for instruction type, select assignment instruction;

3. Click [OK] to enter the instruction parameter settings interface, select variable type and fill in variable value;

4. Click [OK] to successfully insert the assignment instruction. If you need to assign values to multiple different variables, repeat the previous steps;

5. During instruction execution, you can monitor variable value changes in the Monitor - Numeric Variable interface.

![](./assets/-us75vtuiggim-tjxxl77.png)

### Application of Numeric Variables

Numeric variables are used in different processes, functions, and instructions.

1. **Process Usage**: In the palletizing process, variables are used to record the number of palletizing layers, the total palletizing count, and the current layer palletizing count.

![](./assets/izu5vdymth4mrw-meo8lr.png)

2. **Instruction Usage**:
   - Timer instruction records program runtime by binding variables. When the program is running, the timer instruction can store the program runtime into a variable.

   ![](./assets/rgbtrh3sz107udowvbzcl.png)
   
   ![](./assets/799m94ettysoipmbp9p_n.png)

3. **Conditional judgment instruction uses variable as judgment condition**

   - For example: Insert IF instruction, judgment condition is when I001<=5 execute instructions inside IF statement, when I001>5, exit IF statement and execute instructions after ENDIF.

   ![](./assets/kg1hbodqdleswnuu50s8t.png)

4. **Position variable instructions**: Point add, subtract, modify can be done by assigning values to variables. Motion control, program control, and other instruction types all use the variable binding function.

### Global Position Variables

Click Variables - Global Position to enter the global position interface.

![](./assets/2bao95byeg6chd4tivqfd.png)

[Modify] Manually modify the target variable's point position. Click modify, fill in parameters and click confirm on the keypad.

[Save] After modifying the point position, click save to successfully modify the point position.

[Clear] Clear the target variable's point position information. After clicking save, the point position data is successfully cleared.

[Cancel] Cancel the modification and clear operations on the target variable.

[Return] Return to the variable interface.

[Current GP Point/Current GE Point] After filling in the value and clicking confirm on the keypad, it will directly navigate to the corresponding variable. If you enter 100, it will directly navigate to GP0100.

[Comment] Add comment description to variables for users to know what each position variable represents.

[Variable Position] Can store point position information of different robot positions into the selected variable. When external axes are present, it will also record external axis position information. This parameter can be manually modified.

[Current Position] Robot's current position information. When external axes are present, it will also record external axis current position information. This parameter cannot be modified.

[Robot Move to This] In teach mode, enable, then click move to this, the robot moves to the target point position.

[Write Current Position] Click modify, then click write current position to store the robot's current point position information into the selected variable. If you want to write the robot's current joint coordinate point position to the variable, you need to select Joint, then click write current position. If you want to write the robot's current Cartesian coordinate point position to the variable, you need to select Cartesian, then click write current position, click save, write position successful. Writing point position under other coordinates follows the same steps.

![](./assets/wsgusunpqf65tyr3afg5g.png)

#### Global Position Variable Modification

![](./assets/fvgs7xdmqt-gtegimt0ow.png)

**Modify GP Point in Global Position Variable Interface:**

1. **Manual Modification**:
   - Click [Modify], select the variable that needs to be modified, then assign values to each axis in the variable position. If you need to modify configuration, tool hand, user parameters, fill in reasonable parameter values in the corresponding input boxes;
   - Click [Save] to successfully modify the variable position information.

2. **Write Robot Current Position Modification**:
   - In teach mode, jog the robot to move to the target position, then click [Modify];
   - Click write current position;
   - Click [Save] to successfully modify the target variable.

**Modify Global GP Point in Parameter Interface:**

![](./assets/keaqfe3dmpw5ov5nwxj8_.png)

[Move to Current Value] Move to the set target point position.

[Write Current Position] After robot moves to target point position, click "Write Current Position" to successfully write the point position. If manually writing target point position, you must first move to the set point, then click "Write Current Position" to successfully write the point position. Click "OK" to successfully modify the point position.

[OK] After parameter modification is complete, click OK to successfully modify.

[Cancel] Click cancel to not modify parameters.

Notes:

1. Global position variables can be directly called in different job files;

2. GP point position information modified in the global position variable interface and the global GP point position information modified in the parameter settings interface are synchronized. If the position is modified in the global position variable interface, the global position in the parameter settings interface will also be modified. For example: if you modify GP0001's configuration parameter to 2 in the parameter settings interface, then GP0001's configuration parameter in the global position variable interface will also be modified to 2;

3. If program A contains GP0001 and GP0002, and program B also contains GP0001 and GP0002, the point positions of GP0001 and GP0002 in both programs are the same. If you modify the two point positions in program A, the point positions in program B will also be modified, which may cause problems when program B runs;

4. It is recommended not to call the same global GP points in different job files. Otherwise, if one job file modifies the global position information, the same global GP points called in other job files will also be modified, which may cause problems when other job files run.

### Local Position Variables

Click [Project] - Select [Program] - In the program interface click [Variables] to enter the local position variable interface.

Description: Local position variable P can only be used in a single job file and cannot be called between all job files.

![](./assets/f2ni81sw5f2qlsnnim6t9.png)

![](./assets/03odmsjwzctdy4bao2ucj.png)

[Modify] Manually modify the target variable's point position. Click modify, fill in parameters and click confirm on the keypad.

[Return] Return to the program instruction interface.

[Save] After modifying the point position, click save to successfully modify the point position.

[Add] Select local P point, click add to create a new P point. Select local E point, click add to create a new E point. For example: if the current local P point count is at P0006, click add, the point count will change to P0007.

[Cancel] Do not perform any modification on the original variable's point position information.

[Current P Point/Current E Point] After filling in the value and clicking confirm on the keypad, it will directly navigate to the corresponding variable. For example, enter 5, it will directly navigate to P0005.

[Variable Position] Can store point position information of different robot positions into the selected variable. When external axes are present, it will also record external axis position information. This parameter can be manually modified.

[Current Position] Robot's current position information. When external axes are present, it will also record external axis current position information. This parameter cannot be modified.

[Robot Move to This] In teach mode, enable, then click move to this, the robot moves to the target point position.

[Write Current Position] Click modify, then click write current position to store the robot's current point position information into the selected variable. If you want to write the robot's current joint coordinate point position to the variable, you need to select Joint, then click write current position. If you want to write the robot's current Cartesian coordinate point position to the variable, you need to select Cartesian, then click write current position, click save, write position successful. Writing point position under other coordinates follows the same operation steps.

![](./assets/ahjn1lbh2k8ln4eazizyo.png)

#### Local Position Variable Modification

![](./assets/611tovoiplsfdcugv0y-a.png)

**Modify P Point in Local Position Variable Interface:**

1. **Manual Modification**:
   - Click [Modify], select the variable that needs to be modified, then assign values to each coordinate axis in the variable position. If you need to modify configuration, tool hand, user parameters, fill in reasonable parameter values in the corresponding input boxes;
   - Click [Save] to successfully modify the variable position information.

2. **Write Robot Current Position Modification**:
   - In teach mode, jog the robot to move to the target position, then click [Modify];
   - Click write current position;
   - Click [Save] to successfully modify the target variable.

**Modify Local P Point in Parameter Interface:**

![](./assets/t8eovx4xxgcmmoh0ngzvg.png)

[Move to Current Value] Move to the set target point position.

[Write Current Position] After writing target point position, you must first move to the set point, then click "Write Current Position" to successfully write the point position. Click "OK" to successfully modify the point position.

[OK] After parameter modification is complete, click OK to successfully modify.

[Cancel] Click cancel to not modify parameters.

Notes:

1. The point position information in the local position variable interface and the parameter settings interface are synchronized. If you modify P0001's point position information in the local position variable interface, P0001's point position information in the parameter settings interface will also be modified. If you modify P0001's user coordinate number to 3 in the parameter settings interface, P0001's user coordinate number in the local position variable interface will also be modified to 3.

### Point Configuration, Tool Hand, User Value Modification Methods

1. When creating a new point position, configuration, tool hand, and user coordinates default to current values.

Modify Tool Coordinate: In the dropdown box above the inserted point position, select Tool, select tool hand, click OK to successfully modify the tool hand.

![](./assets/buwjslairdfiimwpoevwp.png)

Modify User Coordinate: In the dropdown box above the inserted point position, select User, select user coordinate, click OK to successfully modify the user coordinate.

![](./assets/tmrhziitg6ffojdd83sse.png)

**Manually Set Configuration, Tool Hand, User Coordinates**

1. Create new point position: Can directly modify configuration, tool hand, user coordinates.

Modify tool hand: As shown in the figure, when inserting point position, modify coordinate to Tool, write tool hand, click OK to successfully modify the tool hand.

![](./assets/mlkfxqgvrc28fepemqby3.png)

- Modifying user coordinates and configuration follows the same method as modifying tool hand;

- Clicking [Write Current Position] will change the existing configuration, tool hand, user value of the current point position.

2. Instruction - Position Variables - Set Point Info, can modify coordinate system, configuration, etc.

![](./assets/q0_waju_ruuccys2lqqna.png)

1. Insert Set Point Info instruction.

- Position Variable: Select the target point position GP/GE/P/E you want to modify. Can only select existing point positions.

- Coordinate System: Range [0,3] or 5; where 0: Joint coordinate system; 1: Cartesian coordinate system; 2: Tool coordinate system; 3: User coordinate system.

- Angle/Radian: Optional values 0/1.

- Configuration: Range [0,8].

- Tool Number: Tool hand number [0,999].

- User Coordinate Number: User coordinate system [0,999].

2. Click OK, run the program to modify.

#### Point Coordinate System

Range [0,3], where 0: Joint coordinate; 1: Cartesian coordinate; 2: Tool coordinate; 3: User coordinate.

**How to modify the coordinate system of a position variable?**

1. Global GP point: Click Variables - Global Position, enter the global position variable interface, click modify, select coordinate system, click save to successfully modify the coordinate system.

2. Local P point: In the program instruction interface, click Variables, enter the local position variable interface, click modify, select coordinate system, click save to successfully modify the coordinate system.

3. In the program instruction interface, select the global GP point or local P point that needs to be modified, click modify, enter the parameter settings interface, select coordinate system and click OK to successfully modify the coordinate.

![](./assets/0emqw8rjq_kgvx9sykmtj.png)

#### Configuration

Range: [0,8].

1. For 6-axis serial multi-joint robots, there are configuration parameters. If configuration parameter selects Current, the control system will automatically calculate the robot's current configuration value through conversion. The configuration value is calculated through the robot's 1st, 3rd, 5th axis joint point positions. If the range is between [-90,+90], it is 1, otherwise it is 0.

2. Configuration value is the binary conversion of the robot's 1st, 3rd, 5th axis positions to decimal plus 1.

For example: A certain 6-axis robot has 1st axis at 59 degrees, 2nd axis at 69 degrees, 3rd axis at 79 degrees, 4th axis at 89 degrees, 5th axis at 99 degrees, 6th axis at 109 degrees.

Result: Binary 110 = Decimal 6, configuration value is decimal result plus 1, the point position configuration value is 7.

| Axis | Binary Value |
| --- | --- |
| 1st Axis | 1 |
| 3rd Axis | 1 |
| 5th Axis | 0 |

3. For 4-axis SCARA robots, there are left/right hand parameters.

![](./assets/yhvknugccfmwrpecsu359.png)

**How to modify the configuration of a position variable?**

1. Global GP point: Click Variables - Global Position, enter the global position variable interface, click modify, enter configuration value in the configuration column, click save to successfully modify the configuration parameter.

2. Local P point: In the program instruction interface, click Variables, enter the local position variable interface, click modify, enter configuration value in the configuration column, click save to successfully modify the configuration.

3. In the program instruction interface, select the global GP point or local P point that needs to be modified, click modify, enter the parameter settings interface, enter configuration value and click OK to successfully modify the configuration. The modification method for left/right hand parameters is the same.

![](./assets/xpsq4npz3und7vnmljqht.png)

#### Tool Hand

> Range [1,999].
>
> **How to modify the tool hand number of a position variable?**

1. Global GP point: Click Variables - Global Position, enter the global position variable interface, click modify, enter tool hand number in the tool hand column, click save to successfully modify the tool hand parameter.

2. Local P point: In the program instruction interface, click Variables, enter the local position variable interface, click modify, enter tool hand number in the tool hand column, click save to successfully modify the tool hand.

3. In the program instruction interface, select the global GP point or local P point that needs to be modified, click modify, enter the parameter settings interface, enter tool hand and click OK to successfully modify the tool hand.

![](./assets/_mah0ujznsbjrcgqiyjbp.png)

Notes: When the target point position's coordinate is Cartesian, tool, or user coordinate, if you want to bind the target point position to a tool hand, select the corresponding tool hand. If not binding, select None. If the actual tool hand during motion is different from the point position's bound tool hand, the program will report an error when running.

For example: Target point position binds tool hand 2, actual tool hand 1 is used. When running the instruction, the controller reports an error (Robot 1 tool coordinate usage error, point tool is 1, actual tool is 2).

#### User Coordinates

Range [1,999].

How to modify the user coordinate number of the target point position?

1. Global GP point: Click Variables - Global Position, enter the global position variable interface, click modify, enter user coordinate number in the user column, click save to successfully modify the user coordinate number.

2. Local P point: In the program instruction interface, click Variables, enter the local position variable interface, click modify, enter user coordinate number in the user column, click save to successfully modify the user coordinate number.

3. In the program instruction interface, select the global GP point or local P point that needs to be modified, click modify, enter the parameter settings interface, open manual modify button, select user and click OK to successfully modify the user coordinate number.

![](./assets/gvsa4jjlvhpstj6poppua.png)

Notes: When the target point position's coordinate is user coordinate, if you want to bind the target point position to a user coordinate, select the corresponding user number. If not binding, select None. If the actual user during motion is different from the point position's bound user, the program will report an error when running.

For example: Target point position binds user 1, actual user 2 is used. When running the instruction, the controller reports an error (Robot user coordinate usage error, point user is 1, actual user 2).

#### Angle/Radian

The robot has attitude axes A, B, C under Cartesian, tool, and user coordinates. The attitude values of the attitude axes can be manually modified.

**How to modify angle/radian?**

1. Click Settings - System Configuration - Maintenance Mode, click Job File, click modify, set angle system and radian system in the attitude value column.

For example: Modify attitude value to radian system. We can find in the global position variable interface that under Cartesian, tool, and user coordinates, the A, B, C axis units change to radians (rad).

![](./assets/zvi5zn0n6c2ystxdrrtgh.png)

#### Local P Point Position Information Description

![](./assets/xxoahwqnse84ujbrryicf.png)

P0002 point position data breakdown:

|P0002 | Point Parameter | Parameter Description |
| --- | --- | --- |
| 1 | Coordinate System | 0: Joint 1: Cartesian 2: Tool 3: User |
| 1 | Angle/Radian | 0: Angle (Joint point) 1: Radian (Cartesian point, Tool point, User point) |
| 8 | Configuration/Left-Right Hand | For 6-axis: configuration parameter; for 4-axis SCARA: left-right hand parameter. Current point configuration is 8 |
| 0 | Tool | Tool hand number |
| 0 | User | User coordinate number |
| 0 | Reserved | Reserved parameter |
| 0 | Reserved | Reserved parameter |
| 812.7210 | 1st Axis | 1st axis point position coordinate |
| 295.7290 | 2nd Axis | 2nd axis point position coordinate |
| 1124.9070 | 3rd Axis | 3rd axis point position coordinate |
| 3.1410 | 4th Axis | 4th axis point position coordinate |
| 0 | 5th Axis | 5th axis point position coordinate |
| -0.3490 | 6th Axis | 6th axis point position coordinate |
| 0 | 7th Axis | 7th axis point position coordinate |

#### Local E Point Position Information Description

![](./assets/bgpxidjwb-ksyzm2puzcg.png)

E0001 point position data breakdown:

|E0001 | Point Parameter | Parameter Description |
| --- | --- | --- |
| 0 | Coordinate System | 0: Joint 1: Cartesian 2: Tool 3: User |
| 0 | Angle/Radian | 0: Angle (Joint point) 1: Radian (Cartesian point, Tool point, User point) |
| 8 | Configuration/Left-Right Hand | For 6-axis: configuration parameter; for 4-axis SCARA: left-right hand parameter. Current point configuration is 8 |
| 0 | Tool | Tool hand number |
| 0 | User | User coordinate number |
| 0 | Reserved | Reserved parameter |
| 0 | Reserved | Reserved parameter |
| -2.3060 | 1st Axis | 1st axis point position coordinate |
| 3.0150 | 2nd Axis | 2nd axis point position coordinate |
| 6.4860 | 3rd Axis | 3rd axis point position coordinate |
| 4.0130 | 4th Axis | 4th axis point position coordinate |
| -4.4430 | 5th Axis | 5th axis point position coordinate |
| -13.0030 | 6th Axis | 6th axis point position coordinate |
| 0 | 7th Axis | 7th axis point position coordinate |
| 12.0 | O1 Axis | O1 axis point position coordinate |
| 58.0 | O2 Axis | O2 axis point position coordinate |
| 0 | O3 Axis | O3 axis point position coordinate |
| 0 | O4 Axis | O4 axis point position coordinate |
| 0 | O5 Axis | O5 axis point position coordinate |
| 0 | Reserved | Reserved parameter |
| 0 | Reserved | Reserved parameter |

### Reference Variables

#### Position Variable Reference Variables

Usage: When assigning a value to the local integer or global integer variable inside [], the local or global position variable represents the position indicated by that value.
| Format | Example |
| :---: | :---: |
| P[INT/GINT] | P[I001], when I001=10, P[I001] is equivalent to P0010 </br> P[GI001], when GI001=20, P[GI001] is equivalent to P0020 |
| GP[INT/GINT] | GP[I002], when I002=5, GP[I002] is equivalent to GP0005 </br> GP[GI002], when GI002=10, GP[GI002] is equivalent to GP0010 |
| E[INT/GINT] | E[I003], when I003=8, E[I003] is equivalent to E0008 </br> E[GI003], when GI003=12, E[GI003] is equivalent to E0012 |
| GE[INT/GINT] | GE[I004], when I004=15, GE[I004] is equivalent to GE0015 </br> GE[GI004], when GI004=25, GE[GI004] is equivalent to GE0025 |
---

#### Numeric Variable Reference Variables

Usage: When assigning a value to the local integer or global integer variable inside [], the local or global variable represents the variable indicated by that value.

| Format | Example |
| :---: | :---: |
| I[INT/GINT] | I[I002], when I002=12, I[I002] is equivalent to I012 </br> I[GI002], when GI002=22, I[GI002] is equivalent to I022 |
| GI[INT/GINT] | GI[I003], when I003=3, GI[I003] is equivalent to GI003 </br> GI[GI003], when GI003=5, GI[GI003] is equivalent to GI005 |
| D[INT/GINT] | D[I004], when I004=5, D[I004] is equivalent to D005 </br> D[GI004], when GI004=7, D[GI004] is equivalent to D007 |
| GD[INT/GINT] | GD[I005], when I005=8, GD[I005] is equivalent to GD008 </br> GD[GI005], when GI005=12, GD[GI005] is equivalent to GD012 |
| B[INT/GINT] | B[I006], when I006=11, B[I006] is equivalent to B011 </br> B[GI006], when GI006=9, B[GI006] is equivalent to B009 |
| GB[INT/GINT] | GB[I007], when I007=14, GB[I007] is equivalent to GB014 </br> GB[GI007], when GI007=15, GB[GI007] is equivalent to GB015 |
| S[INT/GINT] | S[I008], when I008=23, S[I008] is equivalent to S023 </br> S[GI008], when GI008=17, S[GI008] is equivalent to S017 |
| GS[INT/GINT] | GS[I009], when I009=45, GS[I009] is equivalent to GS045 </br> GS[GI009], when GI009=21, GS[GI009] is equivalent to GS021 |
---

#### IO Port Reference Variables

| Format | Example |
| :---: | :---: |
| AIN | Directly select port based on currently connected IO board |
| DIN | Directly select port based on currently connected IO board |
| DOUT | Directly select port based on currently connected IO board |
| AIN[INT/GINT] | AIN[I001], when I001=1, AIN[I001] is equivalent to AIN1-1 port </br> AIN[GI001], when GI001=2, AIN[GI001] is equivalent to AIN1-2 port |
| DIN[INT/GINT] | DIN[I010], when I010=5, DIN[I010] is equivalent to DIN1-5 port </br> DIN[GI010], when GI010=6, DIN[GI010] is equivalent to DIN1-6 port |
| DOUT[INT/GINT] | DOUT[I015], when I015=10, DOUT[I015] is equivalent to DOUT1-10 port </br> DOUT[GI016], when GI016=11, DOUT[GI016] is equivalent to DOUT1-11 port |

Notes: When using IO port reference variables, the defined variable value cannot exceed the number of ports on the currently connected IO board.


### SET - Assignment

Format: SET [Variable Name] I001 [Selected Target Variable] 3 [Value to Assign].

Function: Assign values to defined integer, floating-point, boolean, and string variables.

Parameters: Detailed introduction of reference variables can be found in the reference variables chapter.

| Parameter | Description |
| :---: | :---: |
| Variable | Click More to select the required variable type (integer, floating-point, boolean, and string) |
| Variable Value | Assign value to the above variable, can be manually filled or select variable representation |
---

Example:

1. NOP

2. SET I001=12

3. SET D001=12.21

4. SET GI012=100

5. SET GI[GI012]=999

6. END

Example Description: Lines 1 and 2 of the program directly assign values to the selected variables. Lines 4 and 5 assign values through variable form. After program execution ends, I001=12, D001=12.21, GI100=999.

If SET string type contains escape characters, if you want to avoid the impact of escape characters on the string, you can add "\\" before the escape character; strings have similar issues.

Example:

SET GS001=AS\\n: Here "\\n" is used as an escape character

![](./assets/b0p5a4cbzv664dx3_bgkj.png)

Can be modified to: SET GS001=AS\\\\n: Now it can print normally

![](./assets/pj8ipsoizcrtoxjcrxgcn.png)

[Escape Character Reference Table - TabKey9 - Blog Garden](https://www.cnblogs.com/tabkey9/p/15930390.html)

### FORCESET - Write to File

Format: FORCESET [Instruction Name] GI001 [Variable Name to Write to File].

Function: Store cached data to hard disk.

During program execution, all calculation and assignment operations only modify values in the cache and do not save to system files. If you want to force write global numeric variables in memory to files, you can use the FORCESET instruction.

| Parameter | Description |
| :---: | :---: |
| Variable Name | Click More to select the variable name to force write to file |
---

Example:

1. NOP

2. GI001=10

3. FORCESET GI001

4. END

## String

### STRING-SPELL - String Append

Format: STRING-SPELL [Instruction Name] S001 [Target Variable] S002 [Variable Value 1] S003 [Variable Value 2].

Function: Target variable value equals Variable Value 1 + Variable Value 2.

| Parameter | Description |
| :---: | :---: |
| Variable | Selected variable type and variable name: STRING, GSTRING |
| Variable Value | Variable Value 1 |
| Variable Value | Variable Value 2 |
---

Example:

1. NOP

2. SET S002=#@123#

3. SET S003=#sdv#

4. STRING_SPELL(S001=S002+S003)

5. END

Example Description: When executing line 5 instruction, S001 variable value will equal S002+S003. At this time S001=@123sdv

### STRING-SLICE - String Index Slice

Format: STRING-SLICE [Instruction Name] S001 [Index Target Variable] (I001,I001) [Start Index Position, End Index Position] S002 [Query Data Storage Variable].

Function: Slice a portion of a string variable and store the sliced portion string into the specified variable.

| Parameter | Description |
| :---: | :---: |
| Variable | Index target variable |
| Start Index | Variable, manual input, Beginning three ways to locate start index position </br> 1. Variable(INT,GINT): Assign value to variable to locate start index position </br> 2. Manual: Directly fill in value <br> 3. Beginning: Default index position is 1 </br> For example: Target variable S002=@QWEASD234, start index position 3, will start indexing from the 3rd character W |
| End Index | Variable, manual input, End three ways to locate end index position </br> 1. Variable(INT,GINT): Assign value to variable to locate start index position </br> 2. Manual: Directly fill in value </br> 3. End: Default index position is END, represents the last character of the index target variable </br> For example: Target variable S002=@QWEASD234, start index position 3, end index position 7, will start indexing from the 3rd character W and end indexing from the 7th character D |
| Data Storage Variable | Variable to store the sliced data (STRING,GSTRING) </br> For example: Target variable S002=@QWEASD234, start index position 3, end index position 7, will start indexing from the 3rd character W and end indexing from the 7th character D. Store the sliced portion characters WEAS into the selected variable |
---

Example:

1. NOP

2. SET S010 = #!@INEXBOT123#

3. SET I001 = 2

4. SET I002 = 10

5. STRING-SLICE S010(I001,I002)S011

6. END

Example Description: Index target variable S010=!@INEXBOT123, index start position I001=2, index end position I002=10, sliced portion stored in variable S011. After program execution ends, S011=@INEXBOT.

### STRING-SPLIT - String Delimiter Split

Format: STRING-SPLIT [Instruction Name] S001 [Variable Name to Split], [Delimiter] S002 [First Variable for Data Storage] I001 [Data Storage Count, "0" means not used].

Function: Split one character from a string variable and store the split characters sequentially into specified variables.

| Parameter | Description |
| :---: | :---: |
| Variable | String variable name to split (STRING,GSTRING) |
| Delimiter | Manual input and variable definition delimiter. Through the delimiter, one string can be split into several strings </br> For example: GS010=@INEXBOT@TEST!123, delimiter is @, run delimiter split instruction to split the original string into two parts INEXBOT and TEST!23 |
| First Variable for Data Storage | First position to store the characters after delimiter split </br> For example: GS010=@INEXBOT@TEST!123, delimiter is @, run delimiter split instruction to split the original string into two parts INEXBOT and TEST!23. These two string parts will be stored sequentially according to the selected first position. For example, if the first position is GS005, the split strings INEXBOT and TEST!23 will be stored sequentially into variables GS005, GS006 |
| Data Storage Count | Record the number of split completed strings. Can choose not to use (select not to use, input box grayed out) and variable (INT,GINT) to record </br> For example: GS010=@INEXBOT@TEST!123, delimiter is @, run delimiter split instruction to split the original string into two parts INEXBOT and TEST!23. If data storage count selects variable GI001, after instruction execution GI001=2 |
---
Notes: If the set delimiter does not exist in the original character variable, after running the split instruction, the split characters remain the same as the original.

Example:

1. NOP

2. SET GS010 = #@INEXBOT@TEST!123#

3. STRING_SPLIT GS010 #@# GS015 GI001

4. END

Example Description: Split target variable GS010=@INEXBOT@TEST!123, delimiter is @. After executing split instruction, GS015=INEXBOT, GS016=TEST!123, GI001=2.

### STRING_LOCATE - String Locate Query

Format: STRING_LOCATE [Instruction Name] GS001 [Locate Query Variable] #T# [Defined Index Character] GI001 [First Variable for Data Storage] GI005 [Data Storage Count].

Function: Query the position of a character in a string variable and store the position and quantity into specified variables.

| Parameter | Description |
| :---: | :---: |
| Variable | String variable for locate query (STRING,GSTRING) |
| Variable to Index | Manual: Directly fill in the character to locate query </br> Variable(STRING,GSTRING): Locate query character by assigning value to variable </br> For example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T" </br> Execute locate query instruction, will store the position of "T" in the string variable into the selected variable |
| First Variable for Data Storage | Store the queried data into the selected variable (INT,GINT) </br> For example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T" </br> Execute locate query instruction, will store the position of "T" in the string variable into the selected variable. For example, if the first variable is GI001, GI001 records the position of the first located character "T", GI002 records the position of the second character "T", and so on |
| Data Storage Count | Record the number of located characters. Can choose not to use (select not to use, input box grayed out) and variable (INT,GINT) to record </br> For example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T" </br> Execute locate query instruction, will store the number of located "T" characters in the string variable into the selected variable. For example, if the variable is GI015, after locate query instruction execution ends, the located count will be stored in GI015 |
---

Notes:

1. If the variable to index contains non-consecutive characters in a string, when executing the locate query instruction, the character positions and count cannot be read.

For example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "I@T". This parameter setting cannot be read.

2. If the variable to index contains consecutive characters in a string, when executing the locate query instruction, the read character position is the position of the first index variable, and the data storage count is 1.

For example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "BOT". This parameter setting.

Example:

1. NOP

2. SET S001 = #T#

3. SET GS010 = #@INEXBOT@TEST#

4. STRING_LOCATE GS010 S001 GI011 GI015

5. END

Example Description: Variable to index is S001. First assign string variable S001=T. First variable for data storage is GI011, data storage count is GI015. After program execution ends, the queried data is recorded into the selected variables.

### STRING_LENGTH - String Length

Format: STRING_LENGTH [Instruction Name] S001 [Variable to Calculate Length] I001 [Data Storage Count Variable].

Function: Calculate the length of a string variable and store the calculated length into a variable:

| Parameter | Description |
| :---: | :---: |
| Variable | Variable to calculate string length (STRING,GSTRING) </br> For example: S001=BIANLIANG, execute string length instruction to know how many characters S001 has |
| Data Storage Variable | Store the calculated string length into a variable (INT,GINT) </br> For example: S001=BIANLIANG, can store the character length of S001 into a variable |
---

Example:

1. NOP

2. SET S001=BIANLIANG

3. STRING_LENGTH S001 I001

4. END

Example Description: Calculate the length of variable S001, store the calculated string length into variable I001.

### STRING_TO - String to Non-String

Format: STRING_TO [Instruction Name] S001 [String to Convert] I001 [Target Variable for Conversion].

Function: Convert string variable to non-string variable.

| Parameter | Description |
| :---: | :---: |
| String Variable | String to convert (STRING,GSTRING) |
| Non-String Variable | Target variable for conversion (integer, floating-point, boolean) </br> For example: Variable to convert S005=123ZIFU35, target variable is GI001. After running instruction, string variable converts to non-string variable, GI001=123 |
---
Notes:

1. When converting string variable to non-string variable, only the numeric portion of the string variable is converted to the non-string variable. During conversion, it starts from the first character of the string variable and stops when a non-numeric character is detected. The detected numeric portion characters are converted to the non-string variable. If the first detected character is non-numeric, the string cannot be converted successfully.

For example: S005=123ZIFU35, during conversion only the characters "123" are converted to non-string variable, because the character after 3 is non-numeric, so the subsequent character portions are not converted.

For example: S005=ZI123FU35, when detecting the first character it is already non-numeric, so conversion from string to non-string is not possible.

Example:

1. NOP

2. SET S005 = #123ZIFU35#

3. STRING_TO S001 D001

4. END

Example Description: String variable S005 = 123ZIFU35. Convert string variable to non-string variable. Target variable is D001. After program execution ends, D001=123.

### TO_STRING - Non-String to String

Format: TO_STRING [Instruction Name] I001 [Variable to Convert] S001 [Target Variable for Conversion].

Function: Convert non-string variable to string variable.

| Parameter | Description |
| :---: | :---: |
| Non-String Variable | Variable to convert, manual character input or define character through variable assignment (integer, floating-point, boolean) |
| String Variable | Target variable for conversion (STRING,GSTRING) |
---
Notes:

1. If the variable to convert is a floating-point variable and you only need to convert N decimal places, in the parameter settings interface, non-string variable row input format is: $.ND001.

For example: Convert variable D001=123.1122, convert 3 decimal places. In the parameter settings interface, non-string variable row input format is: $.3D001. Target variable is S001. After program execution ends, S001=123.112.

2. Convert multiple non-strings to one string simultaneously.

For example: Convert D001=12.23, D002=23.345, D003=34.5678 non-strings to string S001 simultaneously. D001 converts 1 decimal place, D002 converts 2 decimal places, D003 converts 3 decimal places. In the parameter settings interface, non-string variable row input format is: $.1D001$.2D002$.3D003. After program execution ends, S001=12.223.3434.568.

Example:

1. NOP

2. SET GI001 = 123

3. TO_STRING GI001 S001

4. TO_STRING \# TEST# S002

5. END

Example Description: After program execution ends, S001=123, S002=TEST.

## Q&A for Retrieval

**Q: How to use the string delimiter split instruction?**

A: Use the STRING-SPLIT instruction, set the variable name to split, delimiter, first variable for data storage, and data storage count. For example: STRING_SPLIT GS010 #@# GS015 GI001, split GS010 by @, store results into variables starting from GS015, store split count into GI001.

**Q: How to calculate string length?**

A: Use the STRING_LENGTH instruction, set the variable to calculate length and the data storage count variable. For example: STRING_LENGTH S001 I001, calculate the length of S001 and store the result into I001.

**Q: How to convert a non-string variable to string?**

A: Use the TO_STRING instruction, set the variable to convert and the target variable. For example: TO_STRING GI001 S001, convert the numeric value of GI001 to string and store in S001.

**Q: How to use the string append instruction?**

A: Use the STRING-SPELL instruction, set the target variable and the value to append. For example: STRING_SPELL(S001+#!ASD234@#), append the characters !ASD234@ to the existing variable S001.

**Q: How to slice a portion of a string?**

A: Use the STRING-SLICE instruction, set the index target variable, start index, end index, and data storage variable. For example: STRING-SLICE S010(I001,I002)S011, slice the string from position I001 to I002 in S010 and store in S011.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |

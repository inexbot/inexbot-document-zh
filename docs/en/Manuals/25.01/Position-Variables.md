---
title: "Position Variables"
description: "Detailed instructions on how to use position variable methods"
author: "tongmengyuan123"
date: "2026-06-23"
tags: ["iNexBot", "Coordinate", "Point", "Position Variable"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Position Variables

"√" indicates support for this instruction.

Note: Point stretch instruction needs modification

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| User Coordinate Modification | √ | √ | √ |
| Tool Coordinate Modification | √ | √ | √ |
| Read Point | √ | √ | √ |
| Point Add | √ | √ | √ |
| Point Subtract | √ | √ | √ |
| Point Set | √ | √ | √ |
| Copy Point | √ | √ | √ |
| Point Add All | √ | √ | √ |
| Point Subtract All | √ | √ | √ |
| Point Set All | √ | √ | √ |
| Trajectory Offset Start | √ | | |
| Trajectory Offset End | √ | | |
| Read Point Info | √ | | |
| Point Stretch | √ | | |
| Set Point Info | √ | √ | √ |
| Calculate Target Configuration | √ | | |

| Instruction Type | Instruction | Single-Step | Reverse | Test Run | Pre-Execute | Pre-Executed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Position Variables | User Coordinate Modification | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Tool Coordinate Modification | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Read Point | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Add | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Subtract | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Set | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Copy Point | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Add All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Subtract All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Set All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Trajectory Offset Start | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Trajectory Offset End | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Point Stretch | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Set Point Info | Supported | Jump to first line | Supported | Not Supported | Supported |
---

## Position Variable Related Content

Note: The use of reference variables in position variable instructions can be found in the variable introduction chapter.

### USERFRAME_SET - User Coordinate Modification

Format: USERFRAME_SET [Instruction Name] MODE [Read/Write] ID=1 [User Coordinate Number] UX/UY/UZ/UA/UB/UC/Custom [User Coordinate Parameters] I001 [Variable]

Function: Modify or read the value of a specific axis in the user coordinate system

Parameters:

| Mode | Read | Write |
| :--- | :--- | :--- |
| User Coordinate Number | User coordinate number to read parameters from (range [1,999]) | User coordinate number to modify parameters (range [1,999]) |
| User Coordinate Parameters | UX,UY,UZ,UA,UB,UC: Read the value of a specific axis in the user coordinate system.<br>Custom: Check "√" in front of the coordinate axis to select, can read multiple coordinate axis values at once, the read values will be stored sequentially according to the selected variables<br>Example: If the first variable is I001 and the selected coordinate axes are UX,UY,UZ, executing this instruction will store the values sequentially to I001,I002,I003 | UX,UY,UZ,UA,UB,UC: Modify the value of a specific axis in the user coordinate system |
| Variable | Variable (INT,GINT,DOUBLE,GDOUBLE): Read the selected coordinate axis values using variables | Manual: Directly input the value to modify the coordinate axis value<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Modify the coordinate axis value using variable assignment |

Examples:

1. NOP
2. USERFRAME_SET MODE=1 ID=1 UX I002
3. USERFRAME_SET MODE=1 ID=1 UCUSTOM(UX,UY,UZ,UA) D001
4. USERFRAME_SET MODE=0 ID=1 UY -50
5. END

Example Description: Execute line 2 to read the UX axis value of user coordinate 1 through variable I002, execute line 3 to read the UX,UY,UZ,UA values of user coordinate 1 through variables D001,D002,D003,D004, execute line 4 to modify the UY axis of user coordinate 1 to -50mm.

### TOOLFRAME_SET - Tool Coordinate Modification

Format: TOOLFRAME_SET [Instruction Name] MODE [Read/Write] ID=1 [Tool Coordinate Number] TX/TY/TZ/TA/TB/TC/Custom [Tool Coordinate Parameters] I001 [Variable].

Function: Modify or read the parameters of a specific axis of the tool hand.

Parameters:

| Mode | Read | Write |
| :--- | :--- | :--- |
| Tool Coordinate Number | Read tool coordinate number (range [1,999]) | Modify tool coordinate number (range [1,999]) |
| Tool Coordinate Parameters | TX,TY,TZ,TA,TB,TC: Read the value of a specific axis of the selected tool hand number<br>Custom: Check "√" in front of the coordinate axis to select, can read multiple coordinate axis values at once, the read values will be stored sequentially according to the selected variables<br>Example: If the first variable is GI001 and the selected coordinate axes are TA,TB,TC, executing this instruction will store the values sequentially to GI001,GI002,GI003 | TX,TY,TZ,TA,TB,TC: Modify the value of a specific axis of the selected tool hand number |
| Variable | Variable (INT,GINT,DOUBLE,GDOUBLE): Read the selected coordinate axis parameters using variables | Manual: Directly input the value to modify the tool hand coordinate axis parameter<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Modify the coordinate axis parameter using variable assignment |

Examples:

1. NOP
2. TOOLFRAME_SET MODE=1 ID=2 TY GI002
3. TOOLFRAME_SET MODE=1 ID=2 TCUSTOM(TA,TB,TC) GD001
4. TOOLFRAME_SET MODE=0 ID=2 TX 100
5. END

Example Description: Execute line 2 to read the UY axis value of tool hand 2 through variable GI002, execute line 3 to read the UA,UB,UC values of tool hand 2 through variables GD001,GD002,GD003, execute line 4 to modify the X axis offset parameter of tool hand 2 to 100mm.

### READPOS - Read Point

Format: READPOS [Instruction Name] D001 [Variable Name] Current/P/GP/E/GE [Position Variable Name] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis].

Function: Read the value of a specific axis of a position variable into a floating-point variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable Name | Store the read value into a variable (DOUBLE,GDOUBLE) |
| Position Variable Name | Current: Read the current position coordinates of the robot<br>P,GP,E,GE: Store the point into a variable, just select the target variable you want to read |
| Position Variable Coordinate System | Read points from different coordinate systems<br>Joint Coordinates (RF), Cartesian Coordinates (BF), Tool Coordinates (TF), User Coordinates (UF) |
| Position Variable Axis | Robot body axes: Read the point positions of the robot's six axes, select which axis to display when executing the instruction<br>External axes: Can read up to 5 external axis point positions (O1,O2,O3,O4,O5) |

Examples:

1. NOP
2. READPOS D001 P0001 RF J1
3. READPOS D002 CURPOS BF J2
4. READPOS GD001 GP0001 TF J3
5. READPOS GD002 GE0001 RF O1
6. END

Example Description: Execute line 2 to read the value of axis 1 under joint coordinate system of P0001 into variable D001, execute line 3 to read the value of axis 2 under Cartesian coordinate system of the robot's current position into variable D002, execute line 4 to read the value of axis 3 under tool coordinate system of GP0001 into variable GD001, execute line 5 to read the value of O1 axis under joint coordinate system of external axis GE0001 into variable GD002.

### POSADD - Point Add

Format: POSADD [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Add a value to a specific variable axis of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinates (RF)<br>Example: GP0001 joint coordinates (1,2,3,4,5,6), add 10 to axis 2 of target variable GP0001 under joint coordinates, after executing point add instruction GP0001 joint coordinates (1,12,3,4,5,6)<br>Cartesian Coordinates (BF)<br>Example: GP0001 Cartesian coordinates (1.1,1.2,1.3,1.4,1.5,1.6), add 10 to axis 2 of target variable GP0001 under Cartesian coordinates, after executing point add instruction P0001 Cartesian coordinates (1.1,11.2,1.3,1.4,1.5,1.6)<br>Tool Coordinates (TF)<br>Example: GE0001 tool coordinates (1,2,3,4,5,6,1.1,1.2,1.3,1.4,1.5), add 5 to O1 axis of target variable GE0001 under tool coordinates, after executing point add instruction GE0001 tool coordinates (1,2,3,4,5,6,6.1,1.2,1.3,1.4,1.5)<br>User Coordinates (UF)<br>Example: GP0100 user coordinates (10,11,12,13,14,15), add 5 to axis 3 of target variable GP0100 under user coordinates, after executing point add instruction GP0100 user coordinates (10,11,17,13,14,15) |
| Position Variable Axis | Select the coordinate axis to modify, the point add instruction will add the entered value to the selected coordinate axis<br>Example: To add 10° to axis 1 of the position variable, select axis 1 in the position variable axis |
| Numeric Variable Name | 1. Manual: Directly input the value to add<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, then add the variable's value to the corresponding axis value of the position variable, and assign the result to the position variable<br>Example: GP0001 joint coordinates (1,2,3,4,5,6) want to add 15° to axis 2 of GP0001, after executing point add instruction GP0001 joint coordinates (1,17,3,4,5,6) |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

1. Joint limit: For example, the positive limit of robot axis 1 is 180°, the target point axis 1 coordinate is 150°, when setting parameters assign 50° to variable axis 1, when running the instruction a joint limit issue will occur

2. Coordinate conversion failure: For example, the target point is a joint point, when setting parameters select Cartesian coordinate system as the variable coordinate system, assign value to the target point position variable axis, execute point add instruction, during the calculation process a coordinate conversion failure may occur

Examples:

1. NOP
2. SET I001=10
3. POSADD P0001 RF J1 I001
4. MOVJ P0001 VJ=10% PL=0 ACC=10 DEC=10 0
5. END

Example Description: Add 50 to axis 1 of target position P0001 joint coordinates.

### POSSUB - Point Subtract

Format: POSSUB [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Subtract a value from a specific variable axis of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinates (RF)<br>Example: GP0005 joint coordinates (1,2,3,4,5,6), subtract 10 from axis 2 of target variable GP0005 under joint coordinates, after executing point subtract instruction GP0005 joint coordinates (1,-8,3,4,5,6)<br>Cartesian Coordinates (BF)<br>Example: GP0006 Cartesian coordinates (1.1,1.2,1.3,1.4,1.5,1.6), subtract 10 from axis 2 of target variable GP0006 under Cartesian coordinates, after executing point subtract instruction GP0006 Cartesian coordinates (1.1,-8.8,1.3,1.4,1.5,1.6)<br>Tool Coordinates (TF)<br>Example: GE0007 tool coordinates (1,2,3,4,5,6,10,11,12,13,14), subtract 5 from O1 axis of target variable GE0001 under tool coordinates, after executing point subtract instruction GE0007 tool coordinates (1,2,3,4,5,6,5,11,12,13,14)<br>User Coordinates (UF)<br>Example: GP0008 user coordinates (10,11,12,13,14,15), subtract 5 from axis 3 of target variable GP0008 under user coordinates, after executing point subtract instruction GP0008 user coordinates (10,11,7,13,14,15) |
| Position Variable Axis | Select the coordinate axis to modify, the point subtract instruction will subtract the entered value from the selected coordinate axis<br>Example: To subtract 5° from axis 5 of the position variable, select axis 5 in the position variable axis |
| Numeric Variable Name | 1. Manual: Directly input the value to subtract<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, will subtract the variable's value from the corresponding axis value of the position variable, and assign the result to the position variable<br>Example: GP0001 joint coordinates (1,2,3,4,5,6) want to subtract 15° from axis 3 of GP0001, after executing point subtract instruction GP0001 joint coordinates (1,2,-12,4,5,6) |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

1. Joint limit: For example, the negative limit of robot axis 2 is -50°, the target point axis 2 coordinate is 30°, when setting parameters assign 100° to variable axis 2, when running the instruction a joint limit issue will occur

2. Coordinate conversion failure: For example, the target point is a joint point, when setting parameters select Cartesian coordinate system as the variable coordinate system, assign value to the target point position variable axis, execute point subtract instruction, during the calculation process a coordinate conversion failure may occur

Examples:

1. NOP
2. POSSUB P0001 BF J2 10
3. MOVJ P0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Subtract 10 from axis 2 of target position P0001 Cartesian coordinate system.

### POSSET - Point Set

Format: POSSUB [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Directly modify the point coordinate value of a specific variable axis of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinates (RF)<br>Example: P0005 joint coordinates (1,2,3,4,5,6), set axis 2 of target variable P0005 to 10 under joint coordinates, after executing point set instruction P0005 joint coordinates (1,10,3,4,5,6)<br>Cartesian Coordinates (BF)<br>Example: P0006 Cartesian coordinates (1.1,1.2,1.3,1.4,1.5,1.6), set axis 2 of target variable P0006 to 5 under Cartesian coordinates, after executing point set instruction P0006 Cartesian coordinates (1.1,5,1.3,1.4,1.5,1.6)<br>Tool Coordinates (TF)<br>Example: E0001 tool coordinates (1,2,3,4,5,6,10,11,12,13,14), set O1 axis of target variable E0001 to 5 under tool coordinates, after executing point set instruction E0001 tool coordinates (1,2,3,4,5,6,5,11,12,13,14)<br>User Coordinates (UF)<br>Example: P0008 user coordinates (10,11,12,13,14,15), set axis 6 of target variable P0008 to 5 under user coordinates, after executing point set instruction P0008 user coordinates (10,11,7,13,14,5) |
| Position Variable Axis | Select the coordinate axis to modify, the point set instruction will set the selected coordinate axis to the configured value<br>Example: To set axis 5 of the position variable to 20°, select axis 5 in the position variable axis |
| Numeric Variable Name | 1. Manual: Directly input the value to set<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, will directly assign the variable's value to the position variable<br>Example: GP0001 joint coordinates (1,2,3,4,5,6) want to set axis 3 of GP0001 to 15°, after executing point set instruction GP0001 joint coordinates (1,2,15,4,5,6) |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

1. Joint limit: For example, the positive limit of robot axis 3 is 100°, when setting parameters assign 120° to variable axis 2, when running the instruction a joint limit issue will occur

2. Coordinate conversion failure: For example, the target point is a joint point, when setting parameters select Cartesian coordinate system as the variable coordinate system, assign value to the target point position variable axis, execute point set instruction, during the calculation process a coordinate conversion failure may occur

Examples:

1. NOP
2. POSSET GP0001 RF J5 10
3. MOVJ GP0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Set axis 5 of target position P0001 Cartesian coordinates to 10.

### COPYPOS - Copy Point

Format: COPYPOS [Instruction Name] Current/GP/P/GE/E [Source Position Variable] GP/P/GE/E [Target Position].

Function: Copy the point data from one position variable to another.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Source Position Variable | Current position: Assign the robot's current position to another position variable<br>Position Variable (P,GP,E,GE): Assign the selected source position variable's point data to the selected target position variable |
| Target Position Variable | Target variable to copy the point to |
| Coordinate Axis Selection | Select the coordinate axis data to copy, check "√" in front of the corresponding coordinate axis to select<br>![Select Coordinate Axis](assets/2mqhbogeulc9aqpcyabfm.png)|

Notes: Maximum support for connecting 5 external axes, when copying external axis points only O1, O2, O3, O4, O5 axes are supported, if O6, O7 axes are selected in parameter settings, they will not take effect when executing copy point.

Examples:

1. NOP
2. COPYPOS GE0001 TO GE0002 1 2 3 4 O1 O2
3. MOVJEXT GE0002 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Copy the point data of axes 1, 2, 3, 4, O1, O2 under Cartesian coordinates from external axis GE0001 to position variable GE0002.

### POSADDALL - Point Add All

Format: POSADDALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 I001 0 [Value to add to each coordinate].

Function: Add values to multiple variable axes of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable | Position variable to modify (P,GP,E,GE) |
| Coordinate System | Joint Coordinates (RF)<br>Example: P0001(1 2 3 4 5 6), add 10 to axis 1, 10 to axis 2, 5 to axis 6 of P0001, after executing point add all instruction P0001(11 12 3 4 5 11)<br>Cartesian Coordinates (BF)<br>Example: GP0001(1 2 3 1 1 1), add 10 to X axis, 10 to Z axis, 1 to A axis of GP0001, after executing point add all instruction GP0001(11 2 13 2 1 1)<br>Tool Coordinates (TF)<br>Example: P0002(1 2 3 2 2 2), add 10 to TX axis, 10 to TY axis, 10 to TZ axis, 1 to A axis of P0002, after executing point add all instruction P0002(11 12 13 3 1 1)<br>User Coordinates (UF)<br>Example: E0001(1 2 3 4 5 6 11 12 13 14 15), add 5 to UA axis, 5 to UB axis, 10 to UC axis, 10 to O1 axis, 10 to O2 axis of E0001, after executing point add all instruction E0001 current point(6 7 13 4 5 6 21 22 13 14 15) |
| Position Variable Axis | Enter the value on the variable axis that needs to be increased<br>1. Manual: Directly input the value to add<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, then add the variable's value to the corresponding axis value of the position variable, and assign the result to the position variable |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

Examples:

1. NOP
2. SET I001=6
3. POSADDALL GP0001 RF 1 2 3 4 5 I001
4. MOVJ GP0001 VJ=10% PL=0 ACC=10 DEC=10 0
5. END

Example Description: Add values 1,2,3,4,5,6 to axes 1,2,3,4,5,6 of position variable GP0001 under joint coordinates based on the original point.

### POSSUBALL - Point Subtract All

Format: POSSUBALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 0 [Value to subtract from each coordinate].

Function: Subtract values from multiple variable axes of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable | Position variable to modify (P,GP,E,GE) |
| Coordinate System | Joint Coordinates (RF)<br>Example: P0001(10 11 12 13 14 15), subtract 5 from axis 4, 5 from axis 5, 5 from axis 6 of P0001, after executing point subtract all instruction P0001 current point(10 11 12 8 9 10)<br>Cartesian Coordinates (BF)<br>Example: GP0001(10 11 12 13 14 15), subtract 1 from X axis, 1 from Z axis, 1 from A axis of GP0001, after executing point subtract all instruction GP0001(9 11 11 12 14 15)<br>Tool Coordinates (TF)<br>Example: P0010(11 12 13 4 5 6), subtract 10 from TX axis, 10 from TY axis, 10 from TZ axis of P0002, after executing point subtract all instruction P0010(1 2 3 4 5 6)<br>User Coordinates (UF)<br>Example: E0001(1 2 3 4 5 6 11 12 13 14 15), subtract 5 from O1 axis, 5 from O2 axis of E0001, after executing point subtract all instruction E0001 current point(1 2 3 4 5 6 6 7 13 14 15) |
| Position Variable Axis | Enter the value on the variable axis that needs to be decreased<br>1. Manual: Directly input the value to subtract<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, will subtract the variable's value from the corresponding axis value of the position variable, and assign the calculated point to the position variable |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

Examples:

1. NOP
2. POSSUBALL GE0001 BF 0 0 0 0 0 0 0 10 11 0 0 0 0 0
3. MOVJ GP0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Subtract values 10, 11 from position variable axes O1, O2 of GE0001 under Cartesian coordinates based on the original point.

### POSSETALL - Point Set All

Format: POSSETALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 0 [Value to set for each coordinate].

Function: Directly set the point coordinate values of multiple variable axes of a position variable in different coordinate systems.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable | Position variable to modify (P,GP,E,GE) |
| Coordinate System | Joint Coordinates (RF)<br>Example: P0010(1 2 3 4 5 6), set axis 1 to 10, axis 2 to 11, axis 3 to 12 of P0010 under joint coordinates, after executing point set all instruction P0010 current point(10 11 12 4 5 6)<br>Cartesian Coordinates (BF)<br>Example: P0100(1 2 3 4 5 6), set A axis to 1, B axis to 2, C axis to 3 of P0010 under Cartesian coordinates, after executing point set all instruction P0100 current point 1 2 3 1 2 3)<br>Tool Coordinates (TF)<br>Example: GE0001 tool coordinates (10 11 12 13 14 15 1 2 3), set O1 axis to 5, O3 axis to 6 of GE0001 under tool coordinates, after executing point set all instruction E0001(10 11 12 13 14 15 5 2 6)<br>User Coordinates (UF)<br>Example: GP0100 user coordinates (21 22 23 24 25 26), set UC axis to 15 of GP0100 under user coordinates, after executing point set all instruction GP0100(21 22 23 24 25 15) |
| Coordinate Axis | Enter the value on the variable axis that needs to be modified<br>1. Manual: Directly input the value to set<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign a value to the selected variable, after executing point set instruction set the position variable axis value to the assigned variable value |

Notes: When modifying target points, pay attention to limit issues and target position unreachable, coordinate conversion failure issues.

Examples:

1. NOP
2. POSSETALL GP0001 RF 12 13 14 15 16 17 0
3. MOVJ GP0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Set the coordinates of axes 1,2,3,4,5,6 of position variable GP0001 under joint coordinates to 12,13,14,15,16,17.

### TOFFSETON - Trajectory Offset Start

Format: TOFFSETON [Instruction Name] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 7 [Offset] TOOL [Tool Number] USER [User Number].

Function: This instruction can offset the robot's trajectory in real-time.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Coordinate System | Joint Coordinates (RF), Cartesian Coordinates (BF), Tool Coordinates (TF), User Coordinates (UF) |
| Coordinate Axis | Set the offset for the coordinate axis that needs to be offset, the robot's trajectory coordinates during runtime will be the original coordinates plus the input offset<br>Example: The trajectory needs to be offset under Cartesian coordinate system, the coordinate axis to offset is X axis, the set offset is 20<br>When executing the trajectory offset instruction to the trajectory offset end, each point's Cartesian coordinate X axis will have 20 added<br>Manual: Directly input the offset<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Set the offset by assigning a value to the variable<br>Example: Selected variable is I001, set I001=10 means the offset is 10 |

Notes: The first instruction of the job file cannot use the offset instruction.

Examples:

1. NOP
2. TIMER T=1
3. TOFFSETON RF 12 13 0 0 0 0 0
4. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5. MOVL GP0002 V=10mm/s PL=0 ACC=10 DEC=10 0
6. TOFFSETOFF
7. END

Example Description: After executing line 3, when the robot moves from GP0001 to GP0002, axes 1 and 2 of the joint coordinates will have offsets 12 and 13 added to the original coordinates.

### TOFFSETOFF - Trajectory Offset End

Format: TOFFSETOFF.

Function: Trajectory after the trajectory offset end instruction will no longer be offset.

Parameters: Omitted.

Examples:

1. NOP
2. TIMER T=1
3. TOFFSETON RF 12 13 0 0 0 0 0
4. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5. MOVL GP0002 V=10mm/s PL=0 ACC=10 DEC=10 0
6. TOFFSETOFF
7. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
8. MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
9. END

Example Description: After executing line 6, the robot will no longer be offset when moving from P0001 to P0002.

### READPOSMSG - Read Point Info

Format: READPOSMSG [Instruction Name] P/GP [Target Position to Read] Tool/User/Coordinate/Pose/Configuration [Information to Read] I/GI [Variable to Store Information].

Function: Read the tool number, user coordinate number, coordinate system, pose angle/radian, configuration information of the target position into an integer variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable Name | Target position to read (P,GP) |
| Information | Tool number: Read the tool hand number of the target variable<br>User coordinate number: Read the user coordinate number of the target variable<br>Coordinate system ["0" joint coordinates, "1" Cartesian coordinates, "2" tool coordinates, "3" user coordinates]<br>Pose angle/radian: Read the pose value of the target position's pose axis<br>Configuration: Read the configuration value of the target point |
| Target Variable Name | Store the read information into an integer variable (INT,GINT)<br>Example: Need to read the tool hand number of the target point, after executing the read point info instruction, the tool hand number will be stored in the selected variable |

Examples:

1. NOP
2. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
3. READPOSMSG GP0001 TCS I001
4. END

Example Description: Read the tool coordinate number of target position GP0001, store the read number into variable I001.

### POS_STRETCH - Point Stretch

Format: POS_STRETCH [Instruction Name] Line/Arc [Stretch Type] P/GP [Start Position] P/GP [End Position] 10 [Start Offset] 10 [End Offset] P/GP [Output Start Position] P/GP [Output End Position].

Function: Stretch or shorten the trajectory length and arc trajectory shape by setting the start and end offsets.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Stretch Type | Arc: Set start and end offsets to change the arc trajectory shape<br>Line: Set start and end offsets to change the line trajectory length |
| Start Point | Starting point of the trajectory to stretch |
| Arc Mid Point | Mid point of the arc trajectory |
| End Point | End point of the trajectory to stretch |
| Start Offset | Set the offset to change the starting point position |
| End Offset | Set the offset to change the ending point position |
| Output Start Position | Store the offset starting point position into the selected position variable |
| Output End Position | Store the offset ending point position into the selected position variable |

Example: Horizontal stretch of original trajectory.

![Horizontal stretch of original trajectory](assets/antsuxddzx0m1jvzmsttj.png)

1. NOP
2. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
3. MOVL GP0002 V=10mm/s PL=0 ACC=10 DEC=10 0
4. POS_STRETCH LINE GP0001 GP0002 50 70 GP0004 GP0005
5. MOVL GP0003 V=10mm/s PL=0 ACC=10 DEC=10 0
6. MOVL GP0004 V=10mm/s PL=0 ACC=10 DEC=10 0
7. END

Example Description: GP0001-GP0002 is the original trajectory length, when setting point stretch parameters, start point (GP0001) set offset parameter 50, and save the calculated offset position to variable (GP0004), end point (GP0002) set offset parameter 70, and save the calculated offset position to variable (GP0005), GP0004-GP0005 is the stretched trajectory length.

### SETPOSMSG - Set Point Info

Format: SETPOSMSG [Instruction Name] P/GP/E/GE [Position Variable] 1 [Coordinate System] 1 [Pose] 2 [Configuration] 8 [Tool Number] 9 [User Coordinate Number].

Function: Set the coordinate system, angle/radian, configuration, tool number, user coordinate number of the target point.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable | Position variable to set point info, can select P GP E GE variable types |
| Coordinate System | Set the coordinate system of the target position, range [0,3]<br>"0" joint coordinates, "1" Cartesian coordinates, "2" tool coordinates, "3" user coordinates |
| Angle/Radian | Set the pose of the target position, "0" angle, "1" radian |
| Configuration | Set the configuration parameter of the target position, range [0,8] |
| Tool Number | Set the tool number of the target position, range [0,999]<br>"0" means no tool hand |
| User Coordinate Number | Set the user number of the target position, range [0,999]<br>"0" means no user |

Examples:

1. NOP
2. SETPOSMSG GP0001 1 0 5 6 7
3. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
4. END

Example Description: Execute set point instruction, position variable GP0001 coordinate system is Cartesian coordinates, pose value is angle, configuration is 5, tool number is 5, user number is 7.

### SOLVE_CONFIGURATION - Calculate Target Configuration

Format: SOLVE_CONFIGURATION [Instruction Name] P/GP/E/GE [Target Point] I/GI [Configuration Value Count] I/GI [First Configuration Value Variable].

Function: When the robot moves from point A (current actual position) to point B, can calculate how many configurations the robot can use to move from A to B.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Target Point | Selectable position variable types (P GP E GE)<br>Example: Selected target variable is GP0001, by executing calculate target configuration can calculate how many configurations the robot can use to reach GP0001 from the current actual position |
| Configuration Value Count | Variable: INT GINT type, store the calculated configuration value count into the selected target variable<br>Example: Selected variable is GI001, after executing instruction GI001=3, means the robot has 3 configurations to reach the target point from the current actual position |
| First Configuration Value Variable | Variable: INT GINT type, store the calculated configuration values into the selected target variable, save the calculated configurations sequentially according to the selected first variable<br>Example: Robot current position has 3 configurations (configuration 2, configuration 5, configuration 6) to reach the target point, selected first variable is I001, after executing instruction I001=2, I002=5, I003=6 |

Examples:

1. NOP
2. MOVL GP0001 V=10mm/s PL=0 ACC=10 DEC=10 0
3. SOLVE_CONFIGURATION GP0003 GI001 GI002
4. END

Example Description: Execute calculate target configuration instruction to calculate how many configurations the robot can use to reach GP0003 from the current actual position, store the calculated configuration value count into variable GI001, store the calculated configurations sequentially according to the selected first configuration value variable.

---

## Q&A for Retrieval

**Q: How to modify user coordinates?**

A: Use the USERFRAME_SET instruction, set MODE parameter to 0 for direct modification, 1 for reading from variable. For example, USERFRAME_SET MODE=0 ID=1 UY -50 means modify the UY axis of user coordinate 1 to -50mm.

**Q: How to modify tool coordinates?**

A: Use the TOOLFRAME_SET instruction, set MODE parameter to 0 for direct modification, 1 for reading from variable. For example, TOOLFRAME_SET MODE=0 ID=2 TX 100 means modify the X axis offset parameter of tool hand 2 to 100mm.

**Q: How to read point information?**

A: Use the READPOS instruction, specify target variable, position variable name, coordinate system and axis. For example, READPOS D001 P0001 RF J1 means read the value of axis 1 under joint coordinate system of P0001 into variable D001.

**Q: How to use the point add instruction?**

A: Use the POSADD instruction, specify position variable, coordinate system, axis and value. For example, POSADD P0001 RF J1 I001 means add the value of variable I001 to axis 1 of P0001 joint coordinates.

**Q: How to use the point subtract instruction?**

A: Use the POSSUB instruction, specify position variable, coordinate system, axis and value. For example, POSSUB P0001 BF J2 10 means subtract 10 from axis 2 of P0001 Cartesian coordinate system.

**Q: How to use the point set instruction?**

A: Use the POSSET instruction, specify position variable, coordinate system, axis and value. For example, POSSET P0001 RF J3 15 means set axis 3 of P0001 joint coordinates to 15°.

**Q: How to copy points?**

A: Use the COPYPOS instruction, specify source position variable, target position variable and coordinate axes to copy. For example, COPYPOS GE0001 TO GE0002 1 2 3 4 O1 O2 means copy the point data of axes 1, 2, 3, 4, O1, O2 under Cartesian coordinates from external axis GE0001 to position variable GE0002.

**Q: How to use the trajectory offset function?**

A: First use the TOFFSETON instruction to start trajectory offset, set coordinate system and offset, then execute motion instructions, finally use the TOFFSETOFF instruction to end trajectory offset. For example, TOFFSETON RF 12 13 0 0 0 0 0 means axes 1 and 2 of the joint coordinates will have offsets 12 and 13 added to the original coordinates.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-23 | Initial version | tongmengyuan123 |

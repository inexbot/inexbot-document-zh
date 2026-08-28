---
title: "Position Variables"
description: "Detailed description of how to use position variable methods"
author: "tongmengyuan123"
date: "2026-04-08"
tags: ["INEXBOT", "Coordinate", "Point", "Position Variable"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Position Variables

"√" indicates support for this instruction.

Note: The point stretch instruction needs modification.

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| User Coordinate Modify | √ | √ | √ |
| Tool Coordinate Modify | √ | √ | √ |
| Read Position | √ | √ | √ |
| Position Add | √ | √ | √ |
| Position Subtract | √ | √ | √ |
| Position Set | √ | √ | √ |
| Copy Position | √ | √ | √ |
| Position Add All | √ | √ | √ |
| Position Subtract All | √ | √ | √ |
| Position Set All | √ | √ | √ |
| Trajectory Offset Start | √ | | |
| Trajectory Offset End | √ | | |
| Read Position Info | √ | | |
| Position Stretch | √ | | |
| Set Position Info | √ | √ | √ |
| Calculate Target Configuration | √ | | |

| Instruction Type | Instruction | Single Step | Reverse | Trial Run | Pre-Execute | Pre-Executed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Position Variables | User Coordinate Modify | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Tool Coordinate Modify | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Read Position | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Add | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Subtract | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Set | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Copy Position | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Add All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Subtract All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Set All | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Trajectory Offset Start | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Trajectory Offset End | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Position Stretch | Supported | Jump to first line | Supported | Not Supported | Supported |
| Position Variables | Set Position Info | Supported | Jump to first line | Supported | Not Supported | Supported |
---

## Position Variable Related Content

Note: The use of reference variables in position variable instructions can be found in the variable introduction chapter.

### USERFRAME_SET - User Coordinate Modify

Format: USERFRAME_SET [Instruction Name] MODE [Read/Write] ID=1 [User Coordinate Number] UX/UY/UZ/UA/UB/UC/Custom [User Coordinate Parameter] I001 [Variable]

Function: Modify or read a specific axis value of the user coordinate system.

| Method | Read | Write |
| :--- | :--- | :--- |
| User Coordinate Number | User coordinate number to read (range [1,999]) | User coordinate number to modify (range [1,999]) |
| User Coordinate Parameter | UX,UY,UZ,UA,UB,UC: Read specific axis value of user coordinate system.<br>Custom: Check the checkbox before coordinate axes to select. Can read multiple coordinate axes at once. Read values are stored sequentially in selected variables.<br>Example: First read variable is I001, read axes are UX,UY,UZ. Executing this instruction reads values sequentially to I001,I002,I003 | UX,UY,UZ,UA,UB,UC: Modify specific axis value of user coordinate system |
| Variable | Variable (INT,GINT,DOUBLE,GDOUBLE): Read selected coordinate axis values in variable form | Manual: Directly enter values to modify coordinate axis values<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Modify coordinate axis values by variable assignment |

Example:

1. NOP
2. USERFRAME_SET MODE=1 ID=1 UX I002
3. USERFRAME_SET MODE=1 ID=1 UCUSTOM(UX,UY,UZ,UA) D001
4. USERFRAME_SET MODE=0 ID=1 UY -50
5. END

Example Description: Execute line 2 to read user coordinate 1's UX axis value through variable I002. Execute line 3 to read user coordinate 1's UX,UY,UZ,UA values through variables D001,D002,D003,D004. Execute line 4 to modify user coordinate 1's UY axis to -50mm.

### TOOLFRAME_SET - Tool Coordinate Modify

Format: TOOLFRAME_SET [Instruction Name] MODE [Read/Write] ID=1 [Tool Coordinate Number] TX/TY/TZ/TA/TB/TC/Custom [Tool Coordinate Parameter] I001 [Variable].

Function: Modify or read a specific axis parameter of the tool.

| Method | Read | Write |
| :--- | :--- | :--- |
| Tool Coordinate Number | Tool coordinate number to read (range [1,999]) | Tool coordinate number to modify (range [1,999]) |
| Tool Coordinate Parameter | TX,TY,TZ,TA,TB,TC: Read specific axis value of selected tool number<br>Custom: Check checkbox before coordinate axes to select. Can read multiple coordinate axes at once. Read values are stored sequentially in selected variables.<br>Example: First read variable is GI001, read axes are TA,TB,TC. Executing this instruction reads values sequentially to GI001,GI002,GI003 | TX,TY,TZ,TA,TB,TC: Modify specific axis value of selected tool number |
| Variable | Variable (INT,GINT,DOUBLE,GDOUBLE): Read selected coordinate axis parameters in variable form | Manual: Directly enter values to modify specific tool coordinate axis parameters<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Modify coordinate axis parameters by variable assignment |

Example:

1. NOP
2. TOOLFRAME_SET MODE=1 ID=2 TY GI002
3. TOOLFRAME_SET MODE=1 ID=2 TCUSTOM(TA,TB,TC) GD001
4. TOOLFRAME_SET MODE=0 ID=2 TX 100
5. END

Example Description: Execute line 2 to read tool 2's TY axis value through variable GI002. Execute line 3 to read tool 2's TA,TB,TC values through variables GD001,GD002,GD003. Execute line 4 to modify tool 2's X axis offset parameter to 100mm.

### READPOS - Read Position

Format: READPOS [Instruction Name] D001 [Variable Name] Current/P/GP/E/GE [Position Variable Name] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis].

Function: Read a specific axis value of a position variable into a floating-point variable.

| Parameter | Description |
| :--- | :--- |
| Variable Name | Store read value into variable (DOUBLE,GDOUBLE) |
| Position Variable Name | Current: Read current robot position coordinates<br>P,GP,E,GE: Store point into variable. Only need to select the target variable to read |
| Position Variable Coordinate System | Read position in different coordinate systems<br>Joint Coordinate (RF), Cartesian Coordinate (BF), Tool Coordinate (TF), User Coordinate (UF) |
| Position Variable Axis | Robot body axis: Read robot six-axis position. Selecting which axis displays which axis position during instruction execution<br>External axis: Can read up to 5 external axis positions (O1,O2,O3,O4,O5) |

Example:

1. NOP
2. READPOS D001 P0001 RF J1
3. READPOS D002 CURPOS BF J2
4. READPOS GD001 GP0001 TF J3
5. READPOS GD002 GE0001 RF O1
6. END

Example Description: Execute line 2 to read P0001's joint coordinate system axis 1 value to variable D001. Execute line 3 to read the robot's current position Cartesian coordinate system axis 2 value to variable D002. Execute line 4 to read GP0001's tool coordinate system axis 3 value to variable GD001. Execute line 5 to read external axis GE0001's joint coordinate system O1 axis value to variable GD002.

### POSADD - Position Add

Format: POSADD [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Add a value to a specific axis of a position variable in different coordinate systems.

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinate (RF)<br>Example: GP0001 joint coordinate (1,2,3,4,5,6). Add 10 to axis 2 in joint coordinate. After executing position add, GP0001 joint coordinate becomes (1,12,3,4,5,6)<br>Cartesian Coordinate (BF)<br>Example: GP0001 Cartesian coordinate (1.1,1.2,1.3,1.4,1.5,1.6). Add 10 to axis 2 in Cartesian coordinate. After executing position add, GP0001 Cartesian coordinate becomes (1.1,11.2,1.3,1.4,1.5,1.6)<br>Tool Coordinate (TF)<br>User Coordinate (UF) |
| Position Variable Axis | Select the coordinate axis to modify. The position add instruction adds the entered value to the selected axis |
| Numeric Variable Name | 1. Manual: Directly enter the value to add<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign value to variable. The variable's value is added to the position variable's corresponding axis value, then assigned back to the position variable |

Note: When modifying target positions, pay attention to limit issues and target position unreachable, coordinate conversion problems.

Example:

1. NOP
2. SET I001=10
3. POSADD P0001 RF J1 I001
4. MOVJ P0001 VJ=10% PL=0 ACC=10 DEC=10 0
5. END

Example Description: Add 50 to target position P0001's joint coordinate axis 1.

### POSSUB - Position Subtract

Format: POSSUB [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Subtract a value from a specific axis of a position variable in different coordinate systems.

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinate (RF), Cartesian Coordinate (BF), Tool Coordinate (TF), User Coordinate (UF) |
| Position Variable Axis | Select the coordinate axis to modify. The position subtract instruction subtracts the entered value from the selected axis |
| Numeric Variable Name | 1. Manual: Directly enter the value to subtract<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign value to variable. The position variable's corresponding axis value minus this value is assigned back to the position variable |

Note: When modifying target positions, pay attention to limit issues and target position unreachable, coordinate conversion problems.

Example:

1. NOP
2. POSSUB P0001 BF J2 10
3. MOVJ P0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Subtract 10 from target position P0001's Cartesian coordinate axis 2.

### POSSET - Position Set

Format: POSSET [Instruction Name] GP/P/GE/E [Position Variable] RF/BF/TF/UF [Position Variable Coordinate System] 1/2/3/4/5/6 [Position Variable Axis] Manual/I/GI/D/GD [Numeric Variable Name].

Function: Directly set a specific axis value of a position variable in different coordinate systems.

| Parameter | Description |
| :--- | :--- |
| Position Variable Name | Position variable to modify (P,GP,E,GE) |
| Position Variable Coordinate System | Joint Coordinate (RF), Cartesian Coordinate (BF), Tool Coordinate (TF), User Coordinate (UF) |
| Position Variable Axis | Select the coordinate axis to modify. The position set instruction sets the selected axis coordinate to the configured value |
| Numeric Variable Name | 1. Manual: Directly enter the value to set<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign value to variable. The variable's value is directly assigned to the position variable |

Note: When modifying target positions, pay attention to limit issues and target position unreachable, coordinate conversion problems.

Example:

1. NOP
2. POSSET GP0001 RF J5 10
3. MOVJ GP0001 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Set target position P0001's Cartesian coordinate axis 5 to 10.

### COPYPOS - Copy Position

Format: COPYPOS [Instruction Name] Current/GP/P/GE/E [Source Position Variable] GP/P/GE/E [Target Position].

Function: Copy position data from one position variable to another.

| Parameter | Description |
| :--- | :--- |
| Source Position Variable | Current Position: Assign robot's current position to another position variable<br>Position Variable (P,GP,E,GE): Assign selected source position variable's point data to the currently selected target position variable |
| Target Position Variable | Target variable to copy position to |
| Coordinate Axis Selection | Select coordinate axis data to copy. Check the checkbox before corresponding coordinate axes to select<br>![Select Coordinate Axis](assets/o90gt8ja6fzvkuqb9nhfd.png)|

Note: Maximum support for connecting 5 external axes. When copying external axis positions, only O1, O2, O3, O4, O5 axes are supported. If O6, O7 axes are checked in parameter settings, they will not take effect during position copying.

Example:

1. NOP
2. COPYPOS GE0001 TO GE0002 1 2 3 4 O1 O2
3. MOVJEXT GE0002 VJ=10% PL=0 ACC=10 DEC=10 0
4. END

Example Description: Copy external axis GE0001's Cartesian coordinate axes 1, 2, 3, 4, O1, O2 position data to position variable GE0002.

### POSADDALL - Position Add All

Format: POSADDALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 I001 0 [Values to add to each coordinate].

Function: Add values to multiple axes of a position variable in different coordinate systems.

| Parameter | Description |
| :--- | :--- |
| Position Variable | Position variable to modify (P,GP,E,GE) |
| Coordinate System | Joint Coordinate (RF), Cartesian Coordinate (BF), Tool Coordinate (TF), User Coordinate (UF) |
| Position Variable Axis | Enter values on axes that need to be increased<br>1. Manual: Directly enter the value to add<br>2. Variable (INT,GINT,DOUBLE,GDOUBLE): Assign value to variable. The variable's value is added to the position variable's corresponding axis value, then assigned back to the position variable |

Note: When modifying target positions, pay attention to limit issues and target position unreachable, coordinate conversion problems.

### POSSUBALL - Position Subtract All

Format: POSSUBALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 0 [Values to subtract from each coordinate].

Function: Subtract values from multiple axes of a position variable in different coordinate systems.

### POSSETALL - Position Set All

Format: POSSETALL [Instruction Name] GP/P/GE/E [Position Variable] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 0 [Values to set for each coordinate].

Function: Directly set values for multiple axes of a position variable in different coordinate systems.

### TOFFSETON - Trajectory Offset Start

Format: TOFFSETON [Instruction Name] RF BF TF UF [Coordinate System] 1 2 3 4 5 6 7 [Offset] TOOL [Tool Number] USER [User Number].

Function: This instruction can perform real-time offset of the robot's motion trajectory.

| Parameter | Description |
| :--- | :--- |
| Coordinate System | Joint Coordinate (RF), Cartesian Coordinate (BF), Tool Coordinate (TF), User Coordinate (UF) |
| Coordinate Axis | Set offset for axes that need offset. Robot motion trajectory coordinates are original coordinates plus entered offset<br>Manual: Directly enter offset<br>Variable (INT,GINT,DOUBLE,GDOUBLE): Set offset by variable assignment |

Note: The first instruction of a job file cannot use the offset instruction.

### TOFFSETOFF - Trajectory Offset End

Format: TOFFSETOFF.

Function: Motion trajectories after the trajectory offset end instruction are no longer offset.

### READPOSMSG - Read Position Info

Format: READPOSMSG [Instruction Name] P/GP [Target Position to Read] Tool/User/Coordinate/Posture/Configuration [Info to Read] I/GI [Variable to Store Info].

Function: Read the tool number, user coordinate number, coordinate system, posture angle/radian, and configuration value of the target position into an integer variable.

### POS_STRETCH - Position Stretch

Format: POS_STRETCH [Instruction Name] Line/Arc [Stretch Type] P/GP [Start Position] P/GP [End Position] 10 [Start Offset] 10 [End Offset] P/GP [Output Start Position] P/GP [Output End Position].

Function: Stretch or shorten the trajectory length and arc trajectory shape by setting start and end offsets.

### SETPOSMSG - Set Position Info

Format: SETPOSMSG [Instruction Name] P/GP/E/GE [Position Variable] 1 [Coordinate System] 1 [Posture] 2 [Configuration] 8 [Tool Number] 9 [User Coordinate Number].

Function: Set the coordinate system, angle/radian, configuration, tool number, and user coordinate number of the target position.

### SOLVE_CONFIGURATION - Calculate Target Configuration

Format: SOLVE_CONFIGURATION [Instruction Name] P/GP/E/GE [Target Position] I/GI [Configuration Value Count] I/GI [Configuration Value First Variable].

Function: When the robot moves from point A (current actual position) to point B, this calculates how many configurations the robot can use to move from A to B.

---

## AI Retrieval Q&A Pairs

**Q: How to modify user coordinates?**

A: Use the USERFRAME_SET instruction. Set MODE parameter to 0 for direct modification, 1 for reading from variable. For example, USERFRAME_SET MODE=0 ID=1 UY -50 modifies user coordinate 1's UY axis to -50mm.

**Q: How to modify tool coordinates?**

A: Use the TOOLFRAME_SET instruction. Set MODE parameter to 0 for direct modification, 1 for reading from variable. For example, TOOLFRAME_SET MODE=0 ID=2 TX 100 modifies tool 2's X axis offset parameter to 100mm.

**Q: How to read position info?**

A: Use the READPOS instruction. Specify target variable, position variable name, coordinate system, and axis. For example, READPOS D001 P0001 RF J1 reads P0001's joint coordinate system axis 1 value to variable D001.

**Q: How to use the position add instruction?**

A: Use the POSADD instruction. Specify position variable, coordinate system, axis, and value. For example, POSADD P0001 RF J1 I001 adds variable I001's value to P0001's joint coordinate axis 1.

**Q: How to use the position subtract instruction?**

A: Use the POSSUB instruction. Specify position variable, coordinate system, axis, and value. For example, POSSUB P0001 BF J2 10 subtracts 10 from P0001's Cartesian coordinate axis 2.

**Q: How to use the position set instruction?**

A: Use the POSSET instruction. Specify position variable, coordinate system, axis, and value. For example, POSSET P0001 RF J3 15 sets P0001's joint coordinate axis 3 to 15°.

**Q: How to copy positions?**

A: Use the COPYPOS instruction. Specify source position variable, target position variable, and coordinate axes to copy. For example, COPYPOS GE0001 TO GE0002 1 2 3 4 O1 O2 copies external axis GE0001's Cartesian coordinate axes 1, 2, 3, 4, O1, O2 position data to position variable GE0002.

**Q: How to use the trajectory offset function?**

A: First use the TOFFSETON instruction to start trajectory offset, set coordinate system and offset, then execute motion instructions, and finally use the TOFFSETOFF instruction to end trajectory offset. For example, TOFFSETON RF 12 13 0 0 0 0 0 means joint coordinate axes 1 and 2 will add offsets 12 and 13 to the original coordinates.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-08 | Initial version | tongmengyuan123 |

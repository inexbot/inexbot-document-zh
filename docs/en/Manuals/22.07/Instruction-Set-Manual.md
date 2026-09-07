---

title: "Instruction Set Manual"

description: "机器人编程Instruction Set Manual，涵盖运动控制、IO操作、条件判断、变量运算、网络通讯、字符串处理与位置变量使用。"

author: "iNexBot"

date: "2026-04-16"

tags: ["Motion Control", "IO Operations", "Conditional Control", "Variable Operations", "Network Communication", "String Processing", "Position Variables", "Program Control"]

category: "Manuals"

version: "1.0.0"

language: "en"

---

## 1. Binding Variable Parameter Description

The following instructions add binding variables to the position variable types:

- **P $ INT**: When a local integer variable (INT) is assigned a value, the local position P represents the position indicated by that value.<br>
  Usage example:I001 = 2  P$I001is equivalent toP0002。

- **P $ GINT**: When a global integer variable (GINT) is assigned a value, the local position P represents the position indicated by that value.<br>
  Usage example:GI001 =3  P$GI001is equivalent toP0003。

- **GP $ INT**: When a local integer variable (INT) is assigned a value, the global position GP represents the position indicated by that value.<br>
  Usage example:I001 = 4  GP$I001is equivalent toGP004。

- **GP $ GINT**: When a global integer variable (GINT) is assigned a value, the global position GP represents the position indicated by that value.<br>
  Usage example:GI001 = 5  GP$GI001is equivalent toGP0005。

- **E $ INT**: When a local integer variable (INT) is assigned a value, the local position E represents the position indicated by that value.<br>
  Usage example:I001 = 6  E$I001is equivalent toE0006。

- **E $ GINT**: When a global integer variable (GINT) is assigned a value, the local position E represents the position indicated by that value.<br>
  Usage example:I001 = 7  E$GI001is equivalent toE0007。

- **GE $ INT**: When a local integer variable (INT) is assigned a value, the global position GE represents the position indicated by that value.<br>
  Usage example:I001 = 8  GE$I001is equivalent toGE0008。

- **GE $ GINT**: When a global integer variable (GINT) is assigned a value, the global position GE represents the position indicated by that value.<br>
  Usage example:GI001 = 9  GE$GI001is equivalent toGE0009。

---

## 2. Motion Control Instructions

### > 2.1 MOVJ - Point to Point

**Function**: Moves to the target point using joint interpolation. Used in sections where trajectory constraints do not apply when the robot moves to the target point. The robot operates at maximum speed in space.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| P/GP | Use local position variable (P) or global position variable (GP). When the value is "New", inserting this instruction creates a new P variable and records the robot's current position to that P variable. |
| VJ | Joint interpolation speed, range 1-100, unit is percentage. Actual motion speed is the maximum axis speed in robot joint parameters multiplied by this percentage. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set equal to VJ value. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set equal to VJ value. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of a point-to-point instruction, acceleration and deceleration will automatically display at a 1:1 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:


MOVJ P0001 VJ = 10 % PL = 1 ACC = 10 DEC = 10 0

MOVJ GP0002 VJ = 10 % PL = 0 ACC = 7 DEC = 11 0

---

### > 2.2 MOVL - Linear

**Function**: Moves to the target point using linear interpolation. During the robot's movement to the target point, the trajectory of the robot end-effector is a straight line.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| P/GP | Use local position variable (P) or global position variable (GP). When the value is "New", inserting this instruction creates a new P variable and records the robot's current position to that P variable. |
| V | Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of a linear instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:


MOVL P0003 V = 200 mm/s PL = 2 ACC = 20 DEC = 20 0


---

### > 2.3 MOVC - Arc

**Note**: Motion instructions containing arcs and full circles, including arc, full circle, dual-robot full circle, curve, and external axis arc, cannot be used independently. Their speed, PL, and other parameters for early execution are all affected by the first (arc/full circle) instruction.

**Function**: The robot draws a circle by moving through 3 taught points using arc interpolation. If robot axes are taught with arc interpolation, the motion command is MOVC (Note: a complete arc curve requires one MOVJ or MOVL instruction plus two MOVC instructions). The starting point of a single arc and the first arc of a continuous arc can only be MOVJ or MOVL.

**Single Arc**
When there is only one arc, teach 3 points P0001-P0003 using arc interpolation. If P0001 before the arc is taught using joint or linear interpolation, the trajectory from P0001 to P0002 automatically becomes a straight line.

![](assets-Instructions/image3.png)

**Continuous Arc**
When there are 2 or more consecutive arcs with changing curvature, the arcs will ultimately separate. Therefore, please insert a joint or linear interpolation point at the connection point between the previous arc and the next arc.

![](assets-Instructions/image4.png)


#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| P/GP | Use local position variable (P) or global position variable (GP). When the value is "New", inserting this instruction creates a new P variable and records the robot's current position to that P variable. |
| V | Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an arc instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:


MOVJ P0001 VJ = 10 % PL = 0 ACC = 1 DEC = 1 0

MOVC P0002 V = 100 mm/s PL = 0 ACC = 10 DEC = 10 0

MOVC P0003 V = 100mm/s PL = 0 ACC = 5 DEC = 8 0


---

### > 2.4 MOVCA - Full Circle

**Function**: By teaching the starting point of the circle (MOVJ or MOVL) and two passing points (MOVCA), the robot draws a complete circle.

Instruction insertion prerequisite: Click the "Tool" button in the upper status bar and select the previously calibrated tool hand.

![](assets-Instructions/image5.png)


**Insertion Steps - Four Instructions Total**:
1. Click Insert, click Coordinate Switch category, select SWITCHTOOL instruction, and select the previously calibrated tool hand number.
2. Move to any point on the desired circle as shown P1, click Insert, click Motion Control category, select MOVJ or MOVL.
3. Move to another point on the desired circle as shown P2 (different from step 2), click the "Coordinate System" button in the upper status bar, select "Tool" coordinate system, click Insert, click Motion Control category, select MOVCA.
4. Move to another point on the desired circle as shown P3 (different from steps 2 and 3), click the "Coordinate System" button in the upper status bar, select "Tool" coordinate system, click Insert, click Motion Control category, select MOVCA.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| P/GP | Use local position variable (P) or global position variable (G). When the value is "New", inserting this instruction creates a new P variable and records the robot's current position to that P variable. |
| V | Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |
| SPIN | Orientation unchanged: full circle runs with the same orientation as the calibrated P001 orientation, completing the circle trajectory with this orientation.<br>Six-axis fixed: full circle runs according to the calibrated orientation, while the six-axis remains stationary.<br>Six-axis rotating: full circle runs according to the calibrated state, while the six-axis rotates 360 degrees during operation. |

**Note**: When modifying the speed of an arc instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

MOVJ P0001 VJ = 10 % PL = 0 ACC = 10 DEC = 10 SPIN=1 0

MOVCA P0002 V = 100 mm/s PL = 0 ACC = 10 DEC = 10 SPIN=1 0

MOVCA P0003 V = 100mm/s PL = 0 ACC = 10 DEC = 10 SPIN=1 0

---

### > 2.5 MOVS - Curve Interpolation

**Function**: In operations such as welding, cutting, fusion, and priming, using free curve interpolation makes it easier to teach irregular curve workpieces. The trajectory is a spline curve passing through 4 points. If robot axes are taught with free curve interpolation, the motion command is MOVS.

**Single MOVS**
Teach 4 points P1-P4 to form a spline curve. P0 - Joint/Linear (first motion instruction in program cannot be MOVS). P1-P4 - Curve interpolation. P5 - Joint/Linear.

![](assets-Instructions/image6.png)


**Continuous MOVS**
A spline curve composed of more than 4 points. P1-P5 form one spline curve. P0 - Joint/Linear. P1-P5 - Curve interpolation. P6 - Joint/Linear.

![](assets-Instructions/image7.png)

**Note**: A curve requires a minimum of four curve points.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| P/G | Use local position variable (P) or global position variable (G). When the value is "New", inserting this instruction creates a new P variable and records the robot's current position to that P variable. |
| V | Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an arc instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

MOVJ P0001 VJ = 10 % PL = 0 ACC = 10 DEC = 10 0

MOVS P0002 V = 100 mm/s PL = 0 ACC = 10 DEC = 10 0

MOVS P0003 V = 100mm/s PL = 0 ACC = 10 DEC = 10 0

MOVS P0004 V = 100 mm/s PL = 0 ACC = 10 DEC = 10 0

MOVS P0005 V = 100mm/s PL = 0 ACC = 10 DEC = 10 0


---

### > 2.6 IMOV - Incremental

**Function**: Moves from the current position by the set incremental distance using joint or linear interpolation.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| RP | Incremental variable, can select from joint, Cartesian, tool, or user coordinate systems. Positive values for forward direction, negative for reverse. Fill 0 if no movement. |
| V/VJ | 当RP为关节Coordinate system下的值时，该处为VJ，Joint interpolation speed, range 1-100, unit is percentage. Actual motion speed is the maximum axis speed in robot joint parameters multiplied by this percentage.当RP为直角、工具、User coordinate系下的值时，该处为V，Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10% or VJ. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10% or VJ. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an arc instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

IMOV RP0001 V=10mm/s BF PL=0 ACC=0 DEC=0


---

### > 2.7 MOVJEXT - External Axis Point to Point

**Function**: The robot moves to the taught position using joint interpolation, while the external axis moves using joint interpolation.

![](assets-Instructions/image8.png)

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| E | Variable that simultaneously records robot and external axis position data. When the value is "New", inserting this instruction creates a new E variable and records the current positions of the robot and external axis to that E variable. |
| VJ | Joint interpolation speed, range 1-100, unit is percentage. Actual motion speed is the maximum axis speed in robot joint parameters multiplied by this percentage.外部轴速度随机器人速度改变。 |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set equal to VJ value. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set equal to VJ value. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an external axis point-to-point instruction, acceleration and deceleration will automatically display at a 1:1 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

MOVJEXT E0001 VJ = 10 % PL = 0 ACC= 10 DEC = 10 0


---

### > 2.8 MOVLEXT - External Axis Linear

**Function**: The robot moves to the taught position using linear interpolation, while the external axis moves using joint interpolation.

![](assets-Instructions/image9.png)

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| E | Variable that simultaneously records robot and external axis position data. When the value is "New", inserting this instruction creates a new E variable and records the current positions of the robot and external axis to that E variable. |
| V | 机器人Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s.外部轴速度随机器人速度改变。 |
| PL | Smooth transition level, range 0-5. |
| SYNC | Whether the robot and external axis move synchronously. When set to Yes, the robot and external axis cooperate to move in a straight line. When set to No, the robot moves in a straight line in space while the external axis moves independently to the target angle. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |

**Note**: When modifying the speed of an external axis linear instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

MOVLEXT E0002 V = 10 mm/s PL = 0 ACC = 1 DEC = 1 SYNC = 0 0

---

### > 2.9 MOVCEXT - External Axis Arc

**Function**: The robot moves to the taught position using arc interpolation, while the external axis moves using joint interpolation.

![](assets-Instructions/image10.png)

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| E | Variable that simultaneously records robot and external axis position data. When the value is "New", inserting this instruction creates a new E variable and records the current positions of the robot and external axis to that E variable. |
| V | Robot motion speed, range 2-2000, unit is mm/s. External axis speed changes with robot speed. |
| PL | Smooth transition level, range 0-5. |
| SYNC | Whether the robot and external axis move synchronously. When set to Yes, the robot and external axis cooperate to move in an arc. When set to No, the robot moves in an arc in space while the external axis moves independently to the target angle. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10%. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an external axis arc instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

MOVLEXT E0002 V = 10 mm/s PL = 0 ACC = 1 DEC = 1 SYNC = 1 0

MOVCEXT E0003 V = 10 mm/s PL = 0 ACC = 1 DEC = 1 SYNC = 1 0

MOVCEXT E0004 V = 10 mm/s PL = 0 ACC = 1 DEC = 1 SYNC = 1 0

---

### > 2.10 SPEED - Global Speed

**Function**: The motion speed of all motion instructions below the SPEED instruction is: instruction speed * status bar speed * SPEED percentage.

**Parameter Description**: 全局速度（%）：速度百分比：1-200。

**Usage example**:

SPEED = 9 %

---

### > 2.11 SAMOV - Absolute Position Move

**Function**: The robot moves to a set absolute position using joint interpolation. If you do not want to move a certain axis, leave the coordinate for that axis blank (do not fill 0!).

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| AP | Absolute position, can select from joint, Cartesian, tool, or user coordinate systems. If the corresponding axis is not filled, that axis will not move. |
| V/VJ | 当AP为关节Coordinate system下的值时，该处为VJ，Joint interpolation speed, range 1-100, unit is percentage. Actual motion speed is the maximum axis speed in robot joint parameters multiplied by this percentage.当AP为直角、工具、User coordinate系下的值时，该处为V，Motion speed, range 1-1000 (default Cartesian parameter maximum speed is 1000, range varies based on actual Cartesian parameters), unit is mm/s. |
| PL | Smooth transition level, range 0-5. |
| ACC | Acceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10% or equal to VJ. |
| DEC | Deceleration ratio, range 1-100, unit is percentage. Recommended to set to V*10% or equal to VJ. |
| TIME | Time, range is non-negative integer, unit is ms. Executes the next instruction ahead of time. |

**Note**: When modifying the speed of an absolute position move instruction, acceleration and deceleration will automatically display at a 1:10 ratio with the speed. To modify acceleration or deceleration, do so manually.

#### Usage example:

SAMOV AP0001 VJ= 10 % PL= 2 ACC= 10 DEC= 10

---

### > 2.12 MOVJDOUBLE - Dual Robot Point to Point

**Function**: When configured for two robots, both robots sim

... [OUTPUT TRUNCATED - 1,949 chars omitted out of 51,877 total] ...

es not affect program execution, but must follow program rules. For example, cannot be inserted above MOVC instruction or above local variable definition instruction.
- JUMP now supports multi-condition evaluation in sequence. Parentheses are evaluated first, then expressions outside parentheses. Maximum 5 conditions supported.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Label name | 已插入LABEL指令的Label name，选项。 |
| Condition | 选项，若选中则可以设置Condition。<br>If not selected, jumps directly when reaching JUMP. |
| 参数Type | Type of comparand 1: variable, number, or analog input value. |
| 参数名 | 若参数Type选择的Type为变量（INT、DOUBLE、BOOL、GINT、GDOUBLE、GBOOL），则此处为比较数1的Variable name<br>If parameter type selects input value (DIN, AIN), this is the port number of digital input or analog input |
| Comparison method | == Equal to<br>< Less than<br>> Greater than<br><= Less than或Equal to<br>>= Greater than或Equal to<br>!= 不Equal to |
| Variable value source | Type of comparand 2: custom, variable, or analog input value. |
| New parameter | 若Variable value source选择的Type为自定义，则此处不可选<br>若Variable value source选择的Type为变量（INT、DOUBLE、BOOL、GINT、GDOUBLE、GBOOL），则此处为比较数1的Variable name<br>若Variable value source选择的Type为输入值（DIN、AIN），则此处为数字输入或模拟输入的端口号 |
| Source parameter | 若Variable value source处选择的为自定义，则在此处直接填写比较数2的值。 |

#### Usage example:


MOVJ

LABEL *C1

Other instructions 1, MOVJ, etc.

JUMP *C1 WHEN (I001==0)

Other instructions2

---

### > 6.10 UNTIL - Until

**Function**: UNTIL instruction is used to break out during a motion process. That is, pause during the robot's motion process and start the next process. When condition is met, regardless of whether the robot is currently running, immediately pause and start the instruction below ENDUNTIL.

UNTIL的Condition为（比较数1 Comparison method 比较数2），例如比较数1为2，比较数2为1，Comparison method为">"，则2>1，Condition成立；若Comparison method为"<"或"=="，则Condition不成立。

Note: ENDUNTIL instruction is inserted simultaneously with UNTIL instruction. To delete UNTIL instruction, also delete its corresponding ENDUNTIL instruction, otherwise the program will not run.

现在UNTIL支持多条件判断按顺序判断，有括号的优先判断括号内的再于括号外的进行判断，最多支持5个Condition。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 参数Type | Type of comparand 1: variable, number, or analog input value. |
| 参数名 | 若参数Type选择的Type为变量（INT、DOUBLE、BOOL、GINT、GDOUBLE、GBOOL），则此处为比较数1的Variable name。<br>If parameter type selects input value (DIN, AIN), this is the port number of digital input or analog input。 |
| Comparison method | == Equal to<br>< Less than<br>> Greater than<br><= Less than或Equal to<br>>= Greater than或Equal to<br>!= 不Equal to |
| Variable value source | Type of comparand 2: custom, variable, or analog input value. |
| New parameter | 若Variable value source选择的Type为自定义，则此处不可选；<br>若Variable value source选择的Type为变量（INT、DOUBLE、BOOL、GINT、GDOUBLE、GBOOL），则此处为比较数1的Variable name；<br>若Variable value source选择的Type为输入值（DIN、AIN），则此处为数字输入或模拟输入的端口号。 |
| Source parameter | 若Variable value source处选择的为自定义，则在此处直接填写比较数2的值。 |

#### Usage example:

UNTIL (GI001<2)

Other instructions

ENDUNTIL

MOVJ 


---

### > 6.11 CRAFTLINE - Craft Line Skip

**Function**: Special craft instruction. After running this instruction in the program, the special craft interface will jump to the corresponding line number.

**Parameter Description**: New parameter：专用工艺界面中对应的行数。

**Usage example**:


CRAFTLINE 22

---

### > 6.12 CMDNOTE - Comment Instruction

**Function**: Instruction comment. Can use this instruction to add comments at appropriate positions in the program for easier debugging.

If a comment instruction is inserted, when single-stepping this instruction, it jumps to the next line without error messages.

**Parameter Description**: Comment content: supports Chinese and English, case sensitive, supports numeric input and symbol input.

**Usage example**:


##iINEXBOT$$；Meaning：注释内容为"INEXBOT"。


---

### > 6.13 POS_REACHABLE - Position Reachable Check

**Function**: Reachability check instruction. Used to determine if a target point can be reached. If reachable, variable is set to 1; if not reachable, set to 0.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable name | Can select P point or G point. |
| Motion type | Can select MOVJ or MOVL. |
| 状态存入Variable type | Can store in BOOL or GBOOL. |
| 状态存入Variable name | BOOL、GBOOLVariable name称。 |

#### Usage example:


POS_REACHABLE MOVJ P001 B001；Meaning：计算能否使用MOVJ插补运行到P001位置，可以到达B001值为1，不可以到达B001值为0。


---

### > 6.14 CLKSTART - Start Timer

**Function**: CLKSTART指令用于计时。运行该指令开始计时，并将Time记录到一个局部或者全局DOUBLE变量中。计时指令的Accuracy为小数点后两位（即10ms，误差±2ms）。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Sequence number | 计时器的Sequence number，可以同时使用32个计时器分别计时。 |
| 存入Variable type | 将计时的Time存入到局部DOUBLE变量或者全局的GDOUBLE变量。 |
| 存入Variable name | 将Time存入的变量的Variable name。 |

#### Usage example:


CLKSTART ID = 1 D001；（Meaning：Craft number 1 starts timing, timing result stored in D001）


---

### > 6.15 CLKSTOP - Stop Timer

**Function**: CLKSTOP指令用于停止对应Sequence number的计时器计时。停止后已存入变量的值不会归零。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Sequence number | 要停止计时的计时器的Sequence number。 |

**Usage example**:


CLKSTOP ID=1；（Meaning：Craft number 1 timing stopped）


---

### > 6.16 CLKRESET - Reset Timer

**Function**: CLKRESET指令用于将对应Sequence number的计时器归零。若没有使用该指令，下次运行CLKSTART指令会累积计时。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Sequence number | 要归零计时的计时器的Sequence number。 |

**Usage example**:


CLKRESET ID=1；Meaning：Reset craft number 1 timing result。


---

### > 6.17 READLINEAR - Read Linear Speed

**Function**: Reads the robot's linear speed in real-time into a variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Variable type | Variable type to store, can select GINT/GDOUBLE. |
| Variable name | Variable name to store. |

**Usage example**:


READLINEAR GDOO1


---

### > 6.18 CALL_LUASTRING - Call Lua Statement

**Function**: Implements corresponding functions or operations by calling Lua statements.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Statement | 要输入的LuaStatement。 |
| 更多 | Manual input and variable<br>• 手填：自己输入相应且正确的LuaStatement可以直接单步或运行<br>• 变量：把LuaStatement写到字符串(string)变量中，通过调用相应的字符串变量来实现其功能 |

**Usage example**:


CALL_LUASTRING [Statement]

或者 CALL_LUASTRING 字符串变量


---

### > 6.19 WAIT_POS - Wait for Position

**Function**: MOV instruction completion does not mean servo operation is complete, only that position command has been sent. This instruction waits for the servo motor to reach the precise position before executing the next instruction.

**Parameter Description**:

| Parameter | Description |
| :--- | :--- |
| Position/Speed | Parameters for waiting until reaching position. |
| Accuracy | 判断是否到点的参考；例：数值为0.1，只要点位下发完成等待【设定的Time】开始判断是否到点。 |
| 最小等待Time | 不管有没有运动到指定点位，这个Time都要等待。 |
| 最大等待Time | 如果等待Time超过了此Time，机器人还没有运动到点的话，就会报错。 |

**Usage example**:


1.  NOP 

2.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

3.  MOVL P0002 V=10mm/s PL=0 ACC=1 DEC=1 0

4.  MOVL P0003 V=10mm/s PL=0 ACC=1 DEC=1 0

5.  WAIT_POS

6.  TIMER T=2

7.  END



Example explanation: When line 4 instruction completes, position operation is complete. When line 5 instruction completes, servo operation is complete. After servo reaches position, delay instruction begins.

---

## 7. Variable Instructions

### > 7.1 SET - Assign

**Note**: To define this variable, go directly to the local variable interface. This instruction has been deprecated.

**Function**: Defines local integer, floating-point, and boolean variables and assigns values simultaneously.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | 点击更多可以选择需要的Variable type。 |
| Variable value source | 给上面的变量赋值，可以手填可以选择更多中的Variable type。 |

#### Usage example:


INT I001 = 11

INT I002 = GI003


---

### > 7.2 FORCESET - Force Write to File

**Function**: During program execution, all calculations and assignments modify values in cache, not stored in system files. That is, when program stops, all global variable values will revert. To force global numeric variables to be written to files, use FORCESET instruction.

**Parameter Description**:

| Parameter | Description |
| :--- | :--- |
| Variable name | 点击更多选择要强制写入文件的Variable name。 |

**Usage example**:


FORCESET GI001


---

## 8. String Instructions

### > 8.1 STRING_SPELL - String Append

**Function**: Adding required characters to an existing string variable or empty string variable creates a new string variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | Variable type及名称。 |
| 变量值 | Constant or bound to another variable. |

**Usage example**:


STRING_SPELL [S001 + S002]


---

### > 8.2 STRING_SLICE - String Slice

**Function**: Extracts a portion of a string variable and stores it in the specified variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | 被提取的字符串Variable name。 |
| Start index | Start index的位置。 |
| End index | End index的位置。 |
| 变量值 | Location to store the extracted data. |

**Usage example**:


STRING_SLICE S001 (I001，I001) S001 I001


---

### > 8.3 STRING_SPLIT - String Split

**Function**: Splits the string in a variable using one of its characters and stores the split characters sequentially in specified variables.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | Parameter containing the string to search. |
| Delimiter | Delimiter的Type。 |
| First variable to store data | First position to store queried data sequentially. |
| Data storage count | Records the quantity of extracted data. |

**Usage example**:


STRING_SPLIT S001 (I001，I001) S001 I001


---

### > 8.4 STRING_LOCATE - String Locate

**Function**: Queries the position of a character in a string variable and stores the position and count sequentially in specified variables.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | Parameter containing the string to search. |
| Variable to be indexed | The character to search for. |
| First variable to store data | First position to store queried data sequentially. |
| Data storage count | Records the quantity of extracted data. |

**Usage example**:


STRING_LOCATE S001 S002 I001 0


---

### > 8.5 STRING_LENGTH - String Length

**Function**: Calculates the length of a string in a string variable and stores the calculated length in the specified variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 变量 | Variable whose length to be calculated. |
| Variable to store data | Records the quantity of extracted data. |

**Usage example**:


STRING_LENGTH S001 I001


---

### > 8.6 STRING_TO - String to Non-string

**Function**: Converts a string in a string variable to a non-string.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 字符串变量 | The string to be converted. |
| 非字符串变量 | Target variable for conversion. |

**Usage example**:


STRING_TO S001 I001


---

### > 8.7 TO_STRING - Non-string to String

**Function**: Converts a variable in a non-string variable to a string.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 非字符串变量 | The variable to be converted. |
| 字符串变量 | Target variable for conversion. |

**Usage example**:


TO_STRING I001 S001


---

## 9. Coordinate Switch Instructions

### > 9.1 SWITCHTOOL - Switch Tool

**Function**: Switches the currently used tool coordinate system during program execution.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Tool coordinate | Tool number of the tool coordinate system to switch to. |

**Usage example**:


SWITCHTOOL (3)


---

### > 9.2 SWITCHUSER - Switch User Coordinate

**Function**: Switches the currently used user coordinate system during program execution.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| User coordinate | 要切换到的User coordinate系的Sequence number。 |

**Usage example**:


SWITCHUSER (3)


---

### > 9.3 USERCOORD_TRANS - User Coordinate Transform

**Function**: 将B、CUser coordinate系叠加（×），结果置入AUser coordinate系。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| User coordinateA | 结果存入该User coordinate系，这里是User coordinate系Sequence number。 |
| User coordinateB | User coordinate系Sequence number。 |
| User coordinateC | User coordinate系Sequence number。 |

**Usage example**:


USERCOORD_TRANS (1) (2) (3)


---

### > 9.4 SWITCHSYNC - Switch External Axis

**Function**: Switches the currently used external axis during program execution.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| External axis group number | Group number of the external axis to switch to. |

**Usage example**:


SWITCHSYNC 1


---

## 10. Network Communication Instructions

### > 10.1 SENDMSG - Send Message

**Function**: Sends string information to another network device.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| ID | Craft number in Settings - Network Settings interface. |
| Send characters | 要发送的字符串。若要发送变量，则在变量前加入$。若要Send characters，则需要两个$。支持转义符与格式化输出。 |

**Usage example**:


SENDMSG ID = 1 #$D001#


---

### > 10.2 PARSEMSG - Parse Message

**Function**: Parses data sent by another network device via TCP and stores the data in multiple variables.

当有TCP接收到多位数值时，会将数值分别存入多个变量中，所使用的变量分别为第一位变量、第一位变量往下顺延。即，若发来3位数值，A、B、C，设置的第一位Variable name为GI006，则将A存入GI006，B存入GI007，C存入GI008。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| ID | Craft number in Settings - Network Settings interface. |
| First variable to store data（第一位Variable type） | 存入第一位变量的Type，点击更多选择Variable type。 |
| Clear buffer after parsing | Clears buffered data after parsing. |
| Data storage count | 通过变量Records the quantity of extracted data. |
| 第一位Variable name | 存入第一位变量的Variable name。 |

**Usage example**:


PARSEMSG ID = 1 GI006 CLEARCAHE = 0；Meaning：Stores received data in variable GI001, clears buffered data after parsing


---

### > 10.3 READCOMM - Read Communication

**Function**: 读取以太网或Modbus发送的点位存到位置变量中、Count存到数值变量中。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Craft number | 要打开通讯的网络通讯的Craft number。 |
| Communication method | Use Ethernet communication or Modbus communication. |
| 位置Variable type | Can select global position variable or local position variable. |
| 位置Variable name | 位置Variable name；存接收到的点位，多个点位位置变量顺延，例如指令位置变量填GP003，接收3个点位，则分别存到GP003、GP004、GP005。 |
| Variable type | Can select global integer or local integer. |
| Variable name | Variable name；存接收到点位的数量。<br>Note: Currently only available for Modbus. |

**Usage example**:


READCOOM ID=1 EHTERNET TO G001 I001


---

### > 10.4 OPENMSG - Open Message

**Function**: Opens network communication.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| ID | Craft number in Settings - Network Settings interface. |

**Usage example**:


OPENMSG ID = 1


---

### > 10.5 CLOSEMSG - Close Message

**Function**: Closes network communication.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| ID | Craft number in Settings - Network Settings interface. |

**Usage example**:


CLOSEMSG ID = 2


---

### > 10.6 PRINTMSG - Print Message

**Function**: Prints a string via notification bar.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Output characters | String to print. To print a variable, add $ before the variable. To print a character, use two $. Supports escape characters and formatted output. |

**Usage example**:


PRINTMSG #this is $D001#


---

### > 10.7 MSG_CONNECTION_STATUS - Get Message Connection Status

**Function**: 获取网络设置里某个Craft number的连接状态。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Craft number | 需要知道的网络设置的Craft number。 |
| 状态存入Variable name | Click More to select BOOL/GBOOL type to store. |

**Usage example**:


MSG_CONN_ST 1 B001


---

## 11. Position Variable Instructions

**Note**: 以下指令中位置Variable type新增的变量可参考运动控制类部分的绑定变量说明。

---

### > 11.1 USERFRAME_SET - Modify User Coordinate

**Function**: 改变User coordinate系某一轴的值。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| User coordinate编号 | 要改变值的User coordinate编号。 |
| User coordinate参数 | 要改变值的User coordinate轴。 |
| Variable type | Can select manual value or other variable. |
| Variable name | 当选择其他变量时，在这里选择Variable name，会将该变量的值赋给User coordinate对应的坐标轴。 |
| Manual value | 当Variable type选择Manual value时，在这里直接填入要改变的目标值。 |

**Usage example**:

USERFRAME_SET ID = 1 UX GI001

USERFRAME_SET ID = 2 UY 99


---

### > 11.2 TOOLFRAME_SET - Modify Tool Coordinate

**Function**: 改变Tool coordinate系某一轴的值。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Tool coordinate编号 | 要改变值的Tool coordinate编号。 |
| Tool coordinate参数 | 要改变值的Tool coordinate轴。 |
| Variable type | Can select manual value or other variable. |
| Variable name | 当选择其他变量时，在这里选择Variable name，会将该变量的值赋给User coordinate对应的坐标轴。 |
| Manual value | 当Variable type选择Manual value时，在这里直接填入要改变的目标值。 |

**Usage example**:


TOOLFRAME_SET ID = 1 TX GI001；Meaning：Change tool hand 1's X-axis offset parameter to GI001's variable value

TOOLFRAME_SET ID = 2 TY 99；Meaning：Change tool hand 2's X-axis offset parameter to 99


---

### > 11.3 READPOS - Read Position

**Function**: Reads the value of an axis of a position variable into a floating-point variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Variable type | 要读入的浮点型Variable type，局部或全局。 |
| Variable name | 要读入的浮点型变量的Variable name。 |
| 位置Variable type | 要读取的位置Variable type，当前位置、局部位置变量或全局位置变量。 |
| 位置Variable name | 当位置Variable type选择局部位置变量或全局位置变量，这里选择对应的Variable name。若选择P$INT、P$GINT、G$INT、G$GINT，在这里选择对应的整型Variable name。例选择P$INT，Variable nameI001，I001=33，则得到的位置变量为P033。 |
| Position variable coordinate system | Coordinate system of the position variable value to read. |
| Position variable axis | Axis of the position value to read in the corresponding coordinate system. |

**Usage example**:


READPOS GD004 P$GI003 RF 1


---

### > 11.4 POSADD - Position Add

**Function**: Position variable addition operation (+). This instruction can perform addition on a single axis value of a position variable (global or local), then assign the result to that axis.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| Position variable axis | Axis of the position variable to change in the corresponding coordinate system. |
| Variable type | Can select manual value or other variable. |
| 数值Variable name | 当选择其他变量时，在这里选择Variable name，会将该变量的值加上位置变量对应轴的值，再赋值给该位置变量。 |
| Manual value | 当Variable type选择Manual value时，在这里直接填入目标值，会将该值加上位置变量对应轴的值，再赋值给该位置变量。 |

**Usage example**:


POSADD P0001 RF 1 788


---

### > 11.5 POSSUB - Position Subtract

**Function**: Position variable subtraction operation (-). This instruction can perform subtraction on a single axis value of a position variable (global or local), then assign the result to that axis.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| Position variable axis | Axis of the position variable to change in the corresponding coordinate system. |
| Variable type | Can select manual value or other variable. |
| 数值Variable name | 当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值减去该变量的值，再赋值给该位置变量。 |
| Manual value | 当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值减去该值，再赋值给该位置变量。 |

**Usage example**:


POSSUB P0001 RF 1 88


---

### > 11.6 POSSET - Position Set

**Function**: This instruction can modify the value of a single axis of a position variable (global or local).

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| Position variable axis | Axis of the position variable to change in the corresponding coordinate system. |
| Variable type | Can select manual value or other variable. |
| 数值Variable name | 当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值赋值给该位置变量。 |
| Manual value | 当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值赋值给该位置变量。 |

**Usage example**:


POSSET P0001 RF 1 88


---

### > 11.7 COPYPOS - Copy Position

**Function**: Copies all axis values of one position variable to another position variable.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 源位置Variable type | Type of position variable to read. Can select current position, which assigns the current robot position to another position variable. |
| 源位置Variable name | 要读取值的位置变量的Variable name。 |
| 目标位置Variable type | 被赋值的位置变量的Variable type。 |
| 目标位置Variable name | 被赋值的位置变量的Variable name。 |

**Usage example**:


COPYPOS G003 TO P001

COPYPOS CURPOST TO P002

---

### > 11.8 POSADDALL - Position Add All

**Function**: Position variable addition operation (+). This instruction can perform addition on multiple axis values of a position variable (global or local), then assign the result to those axes.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| 更多 | Can select manual value or other variable.<br>1. 数值Variable name：当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值加上该变量的值，再赋值给该位置变量。<br>2. Manual value：当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值加上该值，再赋值给该位置变量。 |

**Usage example**:


POSADDALL GP0001 RF I001 GI001 D001 GD001 10.1 10


---

### > 11.9 POSSUBALL - Position Subtract All

**Function**: Position variable subtraction operation (-). This instruction can perform subtraction on multiple axis values of a position variable (global or local), then assign the result to those axes.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| 更多 | Can select manual value or other variable.<br>1. 数值Variable name：当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值减去该变量的值，再赋值给该位置变量。<br>2. Manual value：当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值减去该值，再赋值给该位置变量。 |

**Usage example**:


POSSUBALL GP0001 RF I001 GI001 D001 GD001 10.1 10


---

### > 11.10 POSSETALL - Position Set All

**Function**: This instruction can modify multiple axis values of a position variable (global or local).

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| 位置Variable type | Type of position variable to change, local or global. |
| 位置Variable name | 要改变的位置变量的Variable name。 |
| Position variable coordinate system | 要改变Position variable axis所对应的的Coordinate system。 |
| 更多 | Can select manual value or other variable.<br>1. 数值Variable name：当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值赋值给该位置变量。<br>2. Manual value：当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值赋值给该位置变量。 |

**Usage example**:


POSSETALL GP0001 RF I001 GI001 D001 GD001 10.1 10


---

### > 11.11 TOFFSETON - Trajectory Offset Start

**Function**: This instruction can perform real-time offset on the robot's running trajectory.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Offset coordinate system | Coordinate system corresponding to the trajectory to change. |
| Offset type | 可以选择Manual value或其他Variable type。 |
| Offset | 当Variable type选择Manual value时，在这里直接填入目标值，会将机器人的轨迹坐标加上这个Manual value。 |
| 更多 | Can select manual value or other variable.<br>1. 数值Variable name：当选择其他变量时，在这里选择Variable name，会将位置变量对应轴的值赋值给该位置变量。<br>2. Manual value：当Variable type选择Manual value时，在这里直接填入目标值，会将位置变量对应轴的值赋值给该位置变量。 |

**Usage example**:


TOFFSETON RF GI001 I002 2 3 4 5


---

### > 11.12 TOFFSETOFF - Trajectory Offset End

**Function**: Trajectory offset ends. Subsequent motion trajectories will no longer be offset.

**Usage example**:


TOFFSETOFF


---

### > 11.13 READPOSMSG - Read Position Message

**Function**: 将点位Tool number、User coordinate号、Coordinate system、姿态Angle/Radian、Configuration信息的值读入到一个整型变量中。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Variable type | Can select global position variable and local position variable. |
| Variable name | Name of the position variable. |
| 信息 | Tool number/User coordinate号/Coordinate system/Angle/Radian/Configuration。 |
| 更多（目标Variable type） | 被读取的位置变量的Variable type。 |
| 目标Variable name | 被读取的位置变量的Variable name称。 |

**Usage example**:


READPOSMSG P0001 TOOL I001


---

### > 11.14 POS_STRETCH - Position Stretch

**Function**: Shortens or lengthens the ends of a line or arc. Changing the arc midpoint can alter the arc trajectory.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Stretch type | Supports line or arc instruction stretching. |
| Start point | 直线或圆弧指令的Start point。 |
| Arc midpoint | Midpoint of arc instruction. |
| End point | 直线或圆弧指令的End point。 |
| Start point偏移 | Start point点位缩短或拉伸的距离。 |
| End point偏移 | End point点位缩短或拉伸的距离。 |
| 输出Start point位置 | 将拉伸后的Start point点位保存在局部点位或全局点位中。 |
| 输出End point位置 | 将拉伸后的End point点位保存在局部点位或全局点位中。 |

**Usage example**:


POS_STRETCH LINE P0001 P0002 10 10 P0004 P0005


---

### > 11.15 SETPOSMSG - Set Position Message

**Function**: 设置点位的Coordinate system、Angle/Radian、Configuration、Tool number、User coordinate号。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Variable type | Can select global position variable and local position variable. |
| Coordinate system | 通过局部整型变量、全局整型变量、不变设值Coordinate system号。 |
| Angle/Radian | 通过局部整型变量、全局整型变量、不变设置Angle/Radian。 |
| Configuration | 通过局部整型变量、全局整型变量、不变设置Configuration。 |
| Tool number | 通过局部整型变量、全局整型变量、不变设置Tool number。 |
| User coordinate号 | 通过局部整型变量、全局整型变量、不变设置User coordinate号。 |

**Usage example**:


SETPOSMSG P0001 1 1 1 1 1 1


---

## 12. Program Control Instructions

### > 12.1 PTHREAD_START - Start Thread

**Function**: Starts a background task. Background task executes once and ends. To edit background tasks, go to Settings - Background Tasks interface. Local background tasks synchronize with the main program's stop and run, global background tasks do not.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Type | Select local background or global background |
| Background task | Background task名。 |

**Usage example**:


PTHREAD_START [TTT]


---

### > 12.2 PTHREAD_END - End Thread

**Function**: 关闭已开启的Background task。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Type | Select local background or global background。 |
| Background task | Background task名。 |

**Usage example**:


PTHREAD_END [TTT]


---

### > 12.3 PAUSERUN - Pause Run

**Function**: Pauses program execution.

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Type | 要暂停的ProgramType，包括全部、主Program、后台Program。 |
| Program | 要暂停的Program名。 |

**Usage example**:


PAUSERUN [TTT]

PAUSERUN MAIN

PAUSERUN ALL


---

### > 12.4 CONTINUERUN - Continue Run

**Function**: 继续运行已暂停的Program（已停止的Program不能继续）。

#### Parameter Description:

| Parameter | Description |
| :--- | :--- |
| Type | 要继续运行的ProgramType，包括主Program、局部后台Program。 |
| Program | 要继续运行的Program名。 |

**Usage example**:

CONTINUERUN [TTT]

CONTINUERUN MAIN

---

### > 12.5 STOPRUN - Stop Run

**Function**: 停止运行所有Program。

---

# Q&A

**Q: What are binding variables?**

A: 绑定变量是将位置变量与整型变量关联起来的方法。通过将整型变量赋值，可以动态引用不同的位置变量。例如当I001=2时，P$I001is equivalent toP0002。


**Q: What is the difference between MOVJ and MOVL instructions?**

A: MOVJ uses joint interpolation, the robot runs at maximum speed in space, not constrained by trajectory. MOVL uses linear interpolation, the robot end-effector moves in a straight line to the target point.


**Q: 如何在Program中实现条件判断？**

A: Use IF instruction to implement conditional control. When IF condition is met, instructions between IF and ENDIF are executed, otherwise jumps to ENDIF to continue. Can be used with ELSEIF and ELSE instructions.


**Q: Can IF instruction perform multi-condition evaluation?**

A: 可以，IF指令支持多条件判断按顺序判断。有括号的优先判断括号内的再于括号外的进行判断，最多支持5个Condition。


**Q: Program的开头为IF且最后一行为ENDIF时需要注意什么？**

A: 请在IF指令上方或ENDIF下方插入一条0.1秒的TIMER（延时）指令，否则当IF指令的条件不满足时会导致Program陷入死机状态。


**Q: What is the function of the CALL instruction?**

A: CALL指令用于调用另一个Program。被调用的Program运行完后则返回原ProgramCALL指令的下一行继续运行。


**Q: How to call a Lua file?**

A: 使用CALL_LUAFILE指令Calls a Lua file uploaded from upgrade.需要指定Lua文件名称、传入参数和输出参数。


**Q: Are there any limitations with the WHILE loop instruction?**

A: 使用WHILE指令进行循环时，循环条件必须在事件发生时才会真正改变，否则会陷入死循环。需要避免Program陷入死机状态。

**Q: How to use TIMER instruction to implement delay?**

A: TIMER指令可以实现Program的延时功能。参数值为整数，单位为秒。例如TIMER 2表示延时2秒。


**Q: 位置变量的Coordinate system有哪些选项？**

A: 位置变量的Coordinate system包括基座Coordinate system（RF）、Tool coordinate系（TF）、User coordinate系（UF）、沿着视线方向的Coordinate system（VF）等多种选项。


**Q: What is the purpose of the READPOS instruction?**

A: READPOS指令用于Reads the value of an axis of a position variable into a floating-point variable.需要指定源位置变量和目标变量。


**Q: How to modify the value of a position variable?**

A: Use POSSET instruction to modify a single axis value of a position variable, or use POSSETALL instruction to modify multiple axis values of a position variable.


**Q: What is the difference between POSADD and POSSUB instructions?**

A: POSADD instruction performs addition on position variables, POSSUB instruction performs subtraction on position variables. Both can operate on a single axis of a position variable.


**Q: How to use the trajectory offset function?**

A: 使用TOFFSETON指令开始轨迹偏移，指定Offset coordinate system和Offset。使用TOFFSETOFF指令结束轨迹偏移，结束后的运动轨迹不再偏移。


**Q: 什么是INT和DOUBLEType变量？**

A: INT is an integer variable that can store integer values. DOUBLE is a floating-point variable that can store decimal values. Global versions GINT and GDOUBLE are also available.


**Q: What instructions are included in IO operations?**

A: IO operations include DOUT (digital output), AOUT (analog output), POUT (pulse output) instructions for output, and DIN, AIN, PIN for reading input status.
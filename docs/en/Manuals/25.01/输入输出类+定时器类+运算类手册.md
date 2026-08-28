---
title: "I/O + Timer + Arithmetic Instructions Manual"
description: "INEXBOT controller I/O, timer, and arithmetic instruction manual."
author: "MUZI165"
date: "2026-06-18"
tags: ["INEXBOT Controller", "I/O Instructions", "Timer Instructions", "Arithmetic Instructions"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# I/O + Timer + Arithmetic Instructions

**I/O Instructions:**

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background |
| :---: | :---: | :---: | :---: |
| IO Input | **√** | **√** | **√** |
| IO Output | **√** | **√** | **√** |
| Analog Input | **√** | **√** | **√** |
| Analog Output | **√** | **√** | **√** |
| Read Output | **√** | **√** | **√** |
| Rising Edge Detection | **√** | **√** | **√** |
| Falling Edge Detection | **√** | **√** | **√** |
  --------------- ------------------ 

**Timer Instructions:**

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background |
| :---: | :---: | :---: | :---: |
| Delay | **√** | **√** | **√** |
  --------------- ------------------ ------------------ ------------------

**Arithmetic Instructions:**

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background |
| :---: | :---: | :---: | :---: |
| Add | **√** | **√** | **√** |
| Subtract | **√** | **√** | **√** |
| Multiply | **√** | **√** | **√** |
| Divide | **√** | **√** | **√** |
| Modulo | **√** | **√** | **√** |
| Sine | **√** | **√** | **√** |
| Cosine | **√** | **√** | **√** |
| Arctangent | **√** | **√** | **√** |
| Logical Operation | **√** | **√** | **√** |
| Composite Operation | **√** | **√** | **√** |
  --------------- ------------------ ------------------ ------------------

## I/O Instructions

### DIN — Digital Input

Format: DIN [instruction name] I001 [variable to store port value] IGH [input channels] 1 [input group number].

Function: Digital input converts external signals into high or low voltage/current levels and passes them to the control system. Used to receive external digital signals, typically for detecting switch states, sensor signals, etc.

| Parameter | Description |
| :---: | :---: |
| Input IO Board | If multiple IO boards are connected, select which IO board receives the signal |
| Input Channels (supports manual entry and variable form) | 1-channel input, 4-channel input, 8-channel input |
| Input Group Number | 1-16: One IO board is divided into 16 signal channels; 1-channel input means each of the 16 channels is one group. </br> 1-4: One IO board is divided into 16 signal channels; 4-channel input means every 4 channels form one group [1-4, 5-8, 9-12, 13-16]. </br> 1-2: One IO board is divided into 16 signal channels; 8-channel input means every 8 channels form one group [1-8, 9-16]. |
| Store Port Value | The received signal is converted from binary to decimal and stored in the variable |

Example:

Parameter settings: IO board 1, input channels set to 4-channel input, input group number set to 1, port value stored in GI001. These parameter settings are for illustration purposes only.

1.  NOP

2.  DIN GI001 IGH#(1)

3.  PRINTMSG 0 #\$GI001#

4.  END

Example explanation: 4 channels per group. Assuming ports 1-4 have values 0101, converted to decimal equals 5. When executing the print message instruction, the status bar outputs GI001=5.

### DOUT — Digital Output

Format: DOUT [instruction name] OT [output channels] (DOUT1-1) [output group number] 1 [output port]
T=1 [time] 1 [error stop handling, "0" means output value holds, "1" means stop when timer ends].

Function: Digital output is used to control external devices without accepting feedback signals, such as relays, switches, etc.

| Parameter | Description |
| :---: | :---: |
| Output IO Board | If multiple IO boards are connected, select which IO board controls the signal |
| Output Channels | 1-channel output, 4-channel output, 8-channel output |
| Output Group Number (supports manual entry and variable form) | When output channels is 1-channel: output group number is 1-16, each of the 16 channels is one group. </br> When output channels is 4-channel: output group number is 1-4, every 4 channels form one group [1-4, 5-8, 9-12, 13-16]. </br> When output channels is 8-channel: output group number is 1-2, every 8 channels form one group [1-8, 9-16]. |
| Output Value | Manual: directly select ports; selected ports output high level, unselected ports output low level. </br> Variable: assign a variable value to change output ports from low to high level. |
| Time | When T is 0, continuous high-level output. </br> When T is 2, the output signal remains high for 2 seconds then switches to low. |
| Error Stop Handling | 1. Output value holds: After program pause, stop, or error, the output value continues. For example: output port is 1-1, set time is 3 seconds. If the output instruction has been running for only 2 seconds when paused, port 1-1 continues outputting high level. When the program resumes, it runs for 1 more second before port 1-1 resets. </br> 2. Stop when timer ends: The IO port resets when the set time is reached. For example: output port is 1-2, set time is 2 seconds, meaning port 1-2 outputs high for 2 seconds then resets. |

Example:

1.  NOP

2.  DOUT OGH#(DOUT)15 T=1 1

3.  END

Example explanation: Ports 1-1 to 1-4 output for 1 second then reset.

### AIN — Analog Input

Format: AIN [instruction name] D001 [variable value] AIN1-1 [analog input port].

Function: Can receive continuously varying signals. Common analog input signals include voltage, current, etc.

| Parameter | Description |
| :---: | :---: |
| Analog Input Port | Receives analog values through the selected analog input port |
| Variable Value | Stores the collected analog value into the selected variable; only floating-point variables are supported |

Example:

4.  NOP

5.  AIN D001 AIN1-1

6.  END

Example explanation: Reads the value from analog input port AIN1-1 into variable D0001.

### AOUT — Analog Output

Format: AOUT [instruction name] AOUT1-1 [analog output port] GD001/D001 [variable value source].

Function: Can output continuously varying signals. Common analog output signals include voltage, current, etc.

| Parameter | Description |
| :---: | :---: |
| Analog Output Port | Outputs analog values through the selected analog output port |
| Variable Value Source | Outputs a value to the selected analog output port by assigning a variable or entering a custom value, range [0,10] |

Example:

1.  NOP

2.  GD001=5

3.  AOUT AOUT1-1 GD001

4.  END

Example explanation: Assigns a value to variable GD001. When executing the analog output instruction, the value is output to the selected AOUT1-1 port.

### PULSEOUT — Pulse Output

Format: PULSEOUT [instruction name] RATE [frequency] SUM [count].

Function: Outputs pulses at the specified frequency and count on pin 4 (PWM+) of the DB9 connector on the R1 PWM IO board.

| Parameter | Description |
| :---: | :---: |
| Count | Number of pulses |
| Frequency | Pulse frequency |

Example:

1.  NOP

2.  PULSEOUT RATE = 100 SUM = 100

3.  END

### READ_DOUT — Read Output

Format: READ_DOUT [instruction name] GI001 [variable type] OT [output channels] (DOUT1-1) [output group number].

Function: Reads the digital output port status through a variable, then converts the binary value to decimal and stores it in the target variable.

| Parameter | Description |
| :---: | :---: |
| IO Board | If multiple IO boards are connected, select which IO board's value to read |
| Variable Type | The read value is stored in the selected target variable |
| Output Channels | 1-channel output (16 groups); 4-channel output (4 groups); 8-channel output (2 groups) |
| Output Group Number | 1-16; 1-4, 5-8, 9-12, 13-16; 1-8, 9-16 |

Example:

1.  NOP

2.  DOUT OGH#(1) 11 T=0 0

3.  READ_DOUT GI001 OGH#(1)

4.  END

Example explanation: After executing the first output instruction, ports 1-4 of IO board 1 have the value 1011. The read output instruction converts the port value 1011 from binary to decimal, so the selected variable GI001=11.

### RISING_EDGE_TRIGGER — Rising Edge Detection

Format: RISING_EDGE_TRIGGER [instruction name] GI001 [detection port] GI001 [previous result] GI001 [detection result]

Function: Compares the current port value with the last executed port value. If a rising edge is detected, outputs 1; otherwise outputs 0.

| Parameter | Description |
| :---: | :---: |
| Parameter | Value |
| Detection Port | 1. Supports variable detection: INT, BOOL, GINT, GBOOL. </br> 2. Supports IO board input/output port detection: DIN, DOUT. |
| Previous Result (last detection result) | Supports INT, BOOL, GINT, GBOOL variables. </br> Not used: When the second parameter is unused, the first execution stores the port value in memory. Subsequent executions perform normal comparison. If breakpoints are cleared, the memory value resets and the next execution follows first-execution logic. |
| Detection Result | INT, BOOL, GINT, GBOOL. </br> Stores the detection result. If the previous result is 0 and the current result is 1, the detection result is 1; otherwise it is 0. |

If both the detection port and previous result are INT, it checks for a rising trend. If rising, the result is 1; otherwise it is 0.

Example:

1.  NOP

2.  TIMER T = 2

3.  RaisingEdgeCheck CheckPort=DIN1 LastValue=I001 ResultValue=I002

4.  TIMER T = 2

5.  RaisingEdgeCheck CheckPort=DIN1 LastValue=I001 ResultValue=I002

6.  END

Example explanation: Assume port DIN1 is in a triggered state (0→1). At line 3, if the previous detection result is 0 and the current result is 1, then I001=1 and detection result I002=1. At line 5, monitoring of DIN1 continues. If DIN1 is still in the triggered state, the current result is compared with the previous one — no rising edge change is detected, so I002=0.

### FALLING_EDGE_TRIGGER — Falling Edge Detection

Format: FALLING_EDGE_TRIGGER [instruction name] DIN [detection port] GI001 [previous result] GI001 [detection result]

Function: Compares the current port value with the last executed port value. If a falling edge is detected, outputs 1; otherwise outputs 0.

| Parameter | Description |
| :---: | :---: |
| Parameter | Value |
| Detection Port | 1. Supports variable detection: INT, BOOL, GINT, GBOOL. </br> 2. Supports IO board input/output port detection: DIN, DOUT. |
| Previous Result (last detection result) | Supports INT, BOOL, GINT, GBOOL variables. </br> Not used: When the second parameter is unused, the first execution stores the port value in memory. Subsequent executions perform normal comparison. If breakpoints are cleared, the memory value resets and the next execution follows first-execution logic. |
| Detection Result | INT, BOOL, GINT, GBOOL. </br> Stores the detection result. If the previous result is 0 and the current result is 1, the detection result is 1; otherwise it is 0. |

If both the detection port and previous result are INT, it checks for a falling trend. If falling, the result is 1; otherwise it is 0.

Example:

1.  NOP

2.  FallingEdgeCheck CheckPort=DIN1 LastValue=I002 ResultValue=I003

3.  TIMER T = 2

4.  FallingEdgeCheck CheckPort=DIN1 LastValue=I002 ResultValue=I003

5.  TIMER T = 2

6.  END

Example explanation: Assume port DIN1 is in a triggered state (0→1). At line 2, if the previous detection result is 0 and the current result is 1, then I002=1 and detection result I003=0. At line 5, monitoring continues. If DIN1's triggered state is released (1→0), the current result is compared with the previous one — a falling edge change is detected, so I002=0 and I003=1.

## Timer Instructions

### TIMER — Delay

Format: TIMER [instruction name] T=2 [delay time].

Function: Delays for the set value. After the set time elapses, the program continues execution.

| Parameter | Value |
| :---: | :---: |
| Variable | Delay time supports manual entry and variable form |

Example:

1.  NOP

2.  MOVJ P0001 VJ=10% PL=0 ACC=5 DEC=5 0

3.  TIMER T=2

4.  DOUT OT#(DOUT1-1)1 T=1 0

5.  END

Example explanation: After the point-to-point instruction completes, the program delays for 2 seconds before continuing to execute the output instruction.

## Arithmetic Instructions

### ADD — Addition

Format: ADD [instruction name] I001 [result variable] I002 [parameter 1] 1 [parameter 2].

Function: Stores the sum of parameter 1 and parameter 2 into the result variable.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Stores the calculation result of parameter 1 and parameter 2 into the target variable |
| Parameter 1 | Example: I001=3+4, "3" is parameter 1 |
| Parameter 2 | Example: I001=3+4, "4" is parameter 2 |

Example:

1.  NOP

2.  SET I002=3

3.  ADD GI002 I002 3

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (add instruction), GI002=6.

### SUB — Subtraction

Format: SUB [instruction name] I001 [result variable] I002 [parameter 1] 1 [parameter 2].

Function: Stores the difference of parameter 1 minus parameter 2 into the result variable.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Stores the calculation result of parameter 1 and parameter 2 into the target variable |
| Parameter 1 | Example: I001=10-2, "10" is parameter 1 |
| Parameter 2 | Example: I001=10-2, "2" is parameter 2 |

Example:

1.  NOP

2.  SET GI002=5

3.  SUB GI001 10 GI002

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (subtract instruction), GI001=5.

### MUL — Multiplication

Format: MUL [instruction name] I001 [result variable] I002 [parameter 1] 1 [parameter 2].

Function: Stores the product of parameter 1 and parameter 2 into the result variable.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Stores the calculation result of parameter 1 and parameter 2 into the target variable |
| Parameter 1 | Example: I001=3\*4, "3" is parameter 1 |
| Parameter 2 | Example: I001=3\*4, "4" is parameter 2 |

Example:

1.  NOP

2.  SET I002=5

3.  SET I003=3

4.  MUL I001 I002 I003

5.  TIMER T=2

6.  END

Example explanation: When the program executes line 4 (multiply instruction), I001=15.

### DIV — Division

Format: DIV [instruction name] I001 [result variable] I002 [parameter 1] 1 [parameter 2].

Function: Stores the quotient of parameter 1 divided by parameter 2 into the result variable.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Stores the calculation result of parameter 1 and parameter 2 into the target variable |
| Parameter 1 | Example: I001=6/2, "6" is parameter 1 |
| Parameter 2 | Example: I001=6/2, "2" is parameter 2 |

Example:

1.  NOP

2.  SET D003=10

3.  DIV GD001 D003 4

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (divide instruction), GD001=2.5.

### MOD — Modulo

Format: MOD [instruction name] I001 [result variable] I002 [parameter].

Function: Performs modulo operation (remainder), stores the result into the selected result variable.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Variable to store the calculation result |
| Parameter | Example: I001 mod 9, "9" is the parameter |

Example:

1.  NOP

2.  SET GI001=11

3.  MOD GI001 7

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (modulo instruction), result variable G001=4.

### SIN — Sine

Format: SIN [instruction name] I001 [result variable] I002 [parameter].

Function: Sine operation (sin), A=sin(B), B is in radians.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Variable to store the calculation result |
| Parameter | The value entered is in radians; entering 1 means 1 rad |

Example:

1.  NOP

2.  SET GD001=0.5

3.  SIN GD001 1

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (sine instruction), result variable GD001=0.8415.

### COS — Cosine

Format: COS [instruction name] I001 [result variable] I002 [parameter]

Function: Cosine operation (cos), A=cos(B), B is in radians.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Variable to store the calculation result |
| Parameter | The value entered is in radians; entering 1 means 1 rad |

Example:

1.  NOP

2.  SET D002=2

3.  COS D002 1

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (cosine instruction), result variable D002=0.5403.

#### ATAN — Arctangent

Format: ATAN [instruction name] I001 [result variable] I002 [parameter].

Function: Arctangent operation (arctan), A=arctan(B), B is in radians.

| Parameter | Value |
| :---: | :---: |
| Result Variable | Variable to store the calculation result |
| Parameter | The value entered is in radians; entering 1 means 1 rad |

Example:

1.  NOP

2.  SET GD002 = 2

3.  ATAN GD002 1

4.  TIMER T=2

5.  END

Example explanation: When the program executes line 3 (arctangent instruction), result variable GD002=0.7854.

### LOGICAL_OP — Logical Operation

Format: LOGICAL_OP [instruction name] B001 [result variable] =
I001 [parameter 1] AND/OR/NOT [operation type] GI001 [parameter 2].

Function: Logical operations (AND, OR, NOT).

| Parameter | Value |
| :---: | :---: |
| Result Variable | Stores the logical operation result into the selected target variable |
| Parameter 1 | First parameter participating in the logical operation |
| Operation Type | AND (&&AND), OR (\|\|OR), NOT (!NOT). Note: When NOT is selected, the variable type for parameter 2 cannot be selected. |
| Parameter 2 | Second parameter participating in the logical operation |

Example:

1.  NOP

2.  SET I001 = 1

3.  SET I002 = 0

4.  LOGICAL_OP B001 = I001 AND I002

5.  SET GI001 = 10

6.  SET GI002 = 1

7.  LOGICAL_OP B002 = GI001 OR GI002

8.  LOGICAL_OP B003 = NOT GI002

9.  TIMER T=2

10. END

Example explanation: After executing the AND, OR, and NOT operations, B001=0, B002=1, B003=0.

### FORMULA — Composite Operation

Format: COMPOSITE_COMPUTING [instruction name] #GI001=GI002+GI003# [composite operation]

Function: Composite operation.

Parameter: None

Example:

1.  NOP

2.  SET D001 = 1

3.  SET B001 = 1

4.  COMPOSITE_COMPUTING #D001=B001+D001#

5.  COMPOSITE_COMPUTING #GD002=tan(30)#

6.  COMPOSITE_COMPUTING #GD003=log(10)#

7.  COMPOSITE_COMPUTING #GD004=GD002+GD003#

8.  END

Example explanation: During program execution, composite operations are performed in instruction order, and the results are stored in the target variable.

Note: The input format must be A=B+C. Input formats such as A+C=B are invalid.

## Q&A for Retrieval

**Q: How to use the digital input instruction?**

A: Use the DIN instruction, setting the input IO board, input channels, input group number, and the variable to store the port value. Example: DIN IGH#(1) reads the input signal from IO board 1 and stores it in a variable.

**Q: How to use the digital output instruction?**

A: Use the DOUT instruction, setting the output IO board, output channels, output group number, output value, time, and error stop handling. Example: DOUT OGH#(DOUT)15 T=1 1 controls the specified port to output for 1 second then reset.

**Q: How to read analog input values?**

A: Use the AIN instruction, setting the analog input port and variable value. Example: AIN D001 AIN1-1 reads the analog value from port AIN1-1 and stores it in D001.

**Q: How to use the analog output instruction?**

A: Use the AOUT instruction, setting the analog output port and variable value source. Example: AOUT AOUT1-1 GD001 outputs the value of GD001 to port AOUT1-1.

**Q: How to use the pulse output instruction?**

A: Use the PULSEOUT instruction, setting the pulse frequency and count. Example: PULSEOUT RATE = 100 SUM = 100 outputs 100 pulses at 100Hz.

**Q: How to set a delay?**

A: Use the TIMER instruction, setting the delay time. Example: TIMER T=2 pauses the program for 2 seconds before continuing.

**Q: What forms does the delay time support?**

A: The delay time supports both manual entry and variable form. You can enter a numeric value directly or use a variable.

**Q: How to perform addition?**

A: Use the ADD instruction, setting the result variable, parameter 1, and parameter 2. Example: ADD GI002 I002 3 adds I002 and 3, storing the result in GI002.

**Q: How to perform logical operations?**

A: Use the LOGICAL_OP instruction, setting the result variable, parameter 1, operation type, and parameter 2. Example: LOGICAL_OP B001 = I001 AND I002 performs an AND operation and stores the result in B001.

**Q: What unit do trigonometric functions use?**

A: Trigonometric functions (SIN, COS, ATAN) use radians (rad). Entering 1 means 1 rad.

**Q: How to perform division?**

A: Use the DIV instruction, setting the result variable, parameter 1, and parameter 2. Example: DIV GD001 D003 4 divides D003 by 4 and stores the result in GD001.

**Q: How to perform modulo operation?**

A: Use the MOD instruction, setting the result variable and parameter. Example: MOD GI001 7 stores the remainder of GI001 modulo 7 in GI001.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-18 | Initial version | MUZI165 |

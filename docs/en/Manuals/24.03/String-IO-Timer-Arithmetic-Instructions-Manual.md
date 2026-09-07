---
title: "String/IO/Timer/Arithmetic Instructions Manual"
description: "INEXBOT controller string, I/O, timer, and arithmetic instruction manual."
author: "MUZI165"
date: "2026-04-20"
tags: ["INEXBOT Controller", "String Instructions", "IO Instructions", "Timer Instructions", "Arithmetic Instructions"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# String/IO/Timer/Arithmetic Instructions Manual

## String Instructions

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| String Append | √ |  |  |
| String Index Slice | √ |  |  |
| String Split by Delimiter | √ |  |  |
| String Locate Query | √ |  |  |
| String Length | √ |  |  |
| String to Non-String | √ |  |  |
| Non-String to String | √ |  |  |

### STRING-SPELL - String Append

Format: STRING-SPELL [Instruction Name] S001 [Target Variable] S002 [Value to Append to Target Variable].

Function: Append the desired characters to an existing string variable or a new character variable to form a new string variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | Selected variable type and variable name: STRING, GSTRING |
| Variable Value | Assign a value to the selected target variable through a constant or bound variable |

Example:

1.  NOP
2.  SET S001=#@QWE123#
3.  STRING_SPELL(S001+#!ASD234@#)
4.  STRING_SPELL(GS001+#INEXBOT#)
5.  END

Example: Executing line 3 appends the characters !ASD234@ to the existing variable S001. At this point, S001=@QWE123!ASD234@. Executing line 4 appends the characters INEXBOT to the new character variable GS001. At this point, GS001=INEXBOT.

### STRING-SLICE - String Index Slice

Format: STRING-SLICE [Instruction Name] S001 [Index Target Variable] (I001,I001) [Start Index Position, End Index Position] S002 [Data Storage Variable].

Function: Extract a portion of a string variable and store the extracted part into a specified variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | Index target variable |
| Start Index | Variable, manual entry, or beginning to locate the start index position<br>1. Variable (INT, GINT): Assign a variable to locate the start index position<br>2. Manual entry: Directly enter a value<br>3. Beginning: Default index position is 1<br>Example: Target variable S002=@QWEASD234, start index position 3, indexing starts from the 3rd character W |
| End Index | Variable (INT, GINT): Assign a variable to locate the end index position<br>1. Manual entry: Directly enter a value<br>2. Beginning: Default index position is END, representing the last character of the index target variable<br>Example: Target variable S002=@QWEASD234, start index position 3, end index position 7, indexing starts from the 3rd character W and ends at the 7th character D |
| Data Storage Variable | Variable to store the extracted data (STRING, GSTRING)<br>Example: Target variable S002=@QWEASD234, start index position 3, end index position 7, the extracted characters WEAS are stored into the selected variable |

Example:

1.  NOP
2.  SET S010 = #!@INEXBOT123#
3.  SET I001 = 2
4.  SET I002 = 10
5.  STRING-SLICE S010(I001,I002)S011
6.  END

Example: The index target variable S010=!@INEXBOT123, index start position I001=2, index end position I002=10, extracted portion stored in variable S011. After the program finishes running, S011=@INEXBOT.

### STRING-SPLIT - String Split by Delimiter

Format: STRING-SPLIT [Instruction Name] S001 [Variable to Split], [Delimiter] S002 [First Data Storage Variable] I001 [Data Storage Count, "0" means not used].

Function: Split a character in a string variable and store the split characters sequentially into specified variables.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | String variable to split (STRING, GSTRING) |
| Delimiter | Manual entry or variable to define the delimiter. The delimiter splits the original string into several strings<br>Example: GS010=@INEXBOT@TEST!123, delimiter is @. Running the split instruction splits the original string into two parts: INEXBOT and TEST!23 |
| First Data Storage Variable | The starting position where the split characters are stored<br>Example: GS010=@INEXBOT@TEST!123, delimiter is @. Running the split instruction splits the original string into two parts: INEXBOT and TEST!23. These two parts are stored sequentially starting from the selected first position. If the first position is GS005, the split strings INEXBOT and TEST!23 are stored sequentially into variables GS005, GS006 |
| Data Storage Count | Records the number of split strings. Can be set to Not Used (input field grayed out) or a variable (INT, GINT) to record<br>Example: GS010=@INEXBOT@TEST!123, delimiter is @. Running the split instruction splits the original string into two parts: INEXBOT and TEST!23. If the data storage count variable is GI001, after instruction execution GI001=2 |

Note: If the set delimiter does not exist in the original character variable, the split characters remain unchanged after running the split instruction.

Example:

1.  NOP
2.  SET GS010 = #@INEXBOT@TEST!123#
3.  STRING_SPLIT GS010 #@# GS015 GI001
4.  END

Example: The split target variable GS010=@INEXBOT@TEST!123, delimiter is @. After executing the split instruction, GS015=INEXBOT, GS016=TEST!123, GI001=2.

### STRING_LOCATE - String Locate Query

Format: STRING_LOCATE [Instruction Name] GS001 [Locate Query Variable] #T# [Defined Index Character] GI001 [First Data Storage Variable] GI005 [Data Storage Count].

Function: Query the position of a character in a string variable and store the position and count into specified variables.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | String variable for locate query (STRING, GSTRING) |
| Variable to Index | Manual entry: Directly enter the character to locate<br>Variable (STRING, GSTRING): Assign a variable to define the character to locate<br>Example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T"<br>Executing the locate query instruction stores the positions of "T" in the string variable into the selected variable |
| First Data Storage Variable | Store the queried data into the selected variable (INT, GINT)<br>Example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T"<br>Executing the locate query instruction stores the positions of "T" in the string variable into the selected variable. If the first variable is GI001, GI001 records the position of the first "T" found, GI002 records the position of the second "T", and so on |
| Data Storage Count | Records the count of located characters. Can be set to Not Used (input field grayed out) or a variable (INT, GINT) to record<br>Example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "T"<br>Executing the locate query instruction stores the count of "T" characters found into the selected variable. If the variable is GI015, after the locate query instruction completes, the located count is stored in GI015 |

Notes:

1.  If the variable to index consists of non-consecutive characters in a string, the position and count of the characters cannot be read when executing the locate query instruction.

Example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "I@T". This parameter setting cannot be read.

2.  If the variable to index consists of consecutive characters in a string, the read character position is the position of the first indexed variable, and the data storage count is 1.

Example: Locate query variable GS001=@INEXBOT@TEST, variable to index is "BOT".

Example:

1.  NOP
2.  SET S001 = #T#
3.  SET GS010 = #@INEXBOT@TEST#
4.  STRING_LOCATE GS010 S001 GI011 GI015
5.  END

Example: The variable to index is S001. First assign S001=T to the string variable. The first data storage variable is GI011, and the data storage count is GI015. After the program finishes running, the queried data is recorded into the selected variable.

### STRING_LENGTH - String Length

Format: STRING_LENGTH [Instruction Name] S001 [Variable to Calculate Length] I001 [Data Storage Count Variable].

Function: Calculate the length of a string variable and store the calculated length into a variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | Variable to calculate string length (STRING, GSTRING)<br>Example: S001=BIANLIANG. Executing the string length instruction tells you how many characters S001 has |
| Data Storage Variable | Store the calculated string length into the variable (INT, GINT)<br>Example: S001=BIANLIANG. The character length of S001 can be stored into a variable |

Example:

1.  NOP
2.  SET S001=BIANLIANG
3.  STRING_LENGTH S001 I001
4.  END

Example: Calculate the length of variable S001 and store the calculated string length into variable I001.

### STRING_TO - String to Non-String

Format: STRING_TO [Instruction Name] S001 [String to Convert] I001 [Target Variable].

Function: Convert a string variable to a non-string variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| String Variable | String to convert (STRING, GSTRING) |
| Non-String Variable | Target variable to convert to (integer, float, boolean)<br>Example: Variable to convert S005=123ZIFU35, target variable GI001. After running the instruction, the string variable is converted to a non-string variable, GI001=123 |

Notes:

1.  When converting a string variable to a non-string variable, only the numeric portion of the string variable is converted to the non-string variable. During conversion, it starts from the first character of the string variable and stops when a non-numeric character is detected. The detected numeric portion is converted to the non-string variable. If the first character detected is non-numeric, the string cannot be converted.

Example: S005=123ZIFU35. During conversion, only "123" is converted to the non-string variable, because the character after 3 is non-numeric, so the remaining characters are not converted.

Example: S005=ZI123FU35. The first character detected is already non-numeric, so conversion from string to non-string is not possible.

Example:

1.  NOP
2.  SET S005 = #123ZIFU35#
3.  STRING_TO S001 D001
4.  END

Example: String variable S005 = 123ZIFU35. Convert the string variable to a non-string variable. The target variable is D001. After the program finishes running, D001=123.

### TO_STRING - Non-String to String

Format: TO_STRING [Instruction Name] I001 [Variable to Convert] S001 [Target Variable].

Function: Convert a non-string variable to a string variable.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Non-String Variable | Variable to convert, manual entry or variable assignment (integer, float, boolean) |
| String Variable | Target variable to convert to (STRING, GSTRING) |

Notes:

1.  If the variable to convert is a float variable and you only need to convert N decimal places, enter the format in the non-string variable row of the parameter setting interface: $.ND001.

Example: Convert variable D001=123.1122, convert 3 decimal places. Enter $.3D001 in the non-string variable row. The target variable is S001. After the program finishes running, S001=123.112.

2.  Convert multiple non-string variables to a single string simultaneously.

Example: Convert D001=12.23, D002=23.345, D003=34.5678 to string S001. D001 converts 1 decimal place, D002 converts 2 decimal places, D003 converts 3 decimal places. Enter $.1D001$.2D002$.3D003 in the non-string variable row. After the program finishes running, S001=12.223.3434.568.

Example:

1.  NOP
2.  SET GI001 = 123
3.  TO_STRING GI001 S001
4.  TO_STRING \# TEST# S002
5.  END

Example: After the program finishes running, S001=123, S002=TEST.

## IO Instructions

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| IO Input | √ | √ | √ |
| IO Output | √ | √ | √ |
| Analog Input | √ | √ | √ |
| Analog Output | √ | √ | √ |
| Read Output | √ | √ | √ |

### DIN - IO Input

Format: DIN [Instruction Name] I001 [Variable to Store Port Value] IGH [Input Channels] 1 [Input Group Number].

Function: Digital input converts external signals to high or low voltage/current levels and transmits them to the control system. Used to receive external digital signals, typically for detecting switch states, sensor signals, etc.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Input IO Board | If multiple IO boards are connected, select which IO board receives the signal |
| Input Channels | Supports manual entry and variable form<br>1-channel input, 4-channel input, 8-channel input |
| Input Group Number | 1-16: One IO board is divided into 16 signal channels. 1-channel input means each of the 16 signal channels is one group<br>1-4: One IO board is divided into 16 signal channels. 4-channel input means every 4 of the 16 signal channels is one group. [1-4, 5-8, 9-12, 13-16]<br>1-2: One IO board is divided into 16 signal channels. 8-channel input means every 8 of the 16 signal channels is one group. [1-8, 9-16] |
| Port Value Storage | The received signal is converted from binary to decimal and stored in the variable |

### DOUT - IO Output

Format: DOUT [Instruction Name] OT [Output Channels] (DOUT1-1) [Output Group Number] 1 [Output Port] T=1 [Time] 1 [Error Stop Handling, "0" means output value holds, "1" means stop after timer ends].

Function: Digital output is used to control external devices without accepting feedback signals, such as relays, switches, etc.

### AIN - Analog Input

Format: AIN [Instruction Name] D001 [Variable Value] AIN1-1 [Analog Input Port].

Function: Can receive continuously changing signals. Common analog input signals include voltage, current, etc.

### AOUT - Analog Output

Format: AOUT [Instruction Name] AOUT1-1 [Analog Output Port] GD001/D001 [Variable Value Source].

Function: Can output continuously changing signals. Common analog output signals include voltage, current, etc.

### PULSEOUT - Pulse Output

Format: PULSEOUT [Instruction Name] RATE [Frequency] SUM [Count].

Function: Output pulses at the set frequency and count on pin 4 (PWM+) of the DB9 terminal on the R1 PWM IO board.

### READ_DOUT - Read Output

Format: READ_DOUT [Instruction Name] GI001 [Variable Type] OT [Output Channels] (DOUT1-1) [Output Group Number].

Function: Read the status of digital output ports through variables, then convert from binary to decimal and store in the target variable.

## Timer Instructions

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| Delay | √ | √ | √ |

### TIMER - Delay

Format: TIMER [Instruction Name] T=2 [Delay Time].

Function: Delay for the set value. After the set time is reached, the program continues running.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable | Delay time supports manual entry and variable form |

Example:

1.  NOP
2.  MOVJ P0001 VJ=10% PL=0 ACC=5 DEC=5 0
3.  TIMER T=2
4.  DOUT OT#(DOUT1-1)1 T=1 0
5.  END

Example: After the point-to-point instruction finishes running, the program continues running the output instruction after a 2-second delay.

## Arithmetic Instructions

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| Add | √ | √ | √ |
| Subtract | √ | √ | √ |
| Multiply | √ | √ | √ |
| Divide | √ | √ | √ |
| Modulo | √ | √ | √ |
| Sine | √ | √ | √ |
| Cosine | √ | √ | √ |
| Arctangent | √ | √ | √ |
| Logical Operation | √ | √ | √ |

### ADD - Add

Format: ADD [Instruction Name] I001 [Result Variable] I002 [Parameter 1] 1 [Parameter 2].

Function: The sum of Parameter 1 and Parameter 2 is stored in the result variable.

### SUB - Subtract

Format: SUB [Instruction Name] I001 [Result Variable] I002 [Parameter 1] 1 [Parameter 2].

Function: The difference of Parameter 1 and Parameter 2 is stored in the result variable.

### MUL - Multiply

Format: MUL [Instruction Name] I001 [Result Variable] I002 [Parameter 1] 1 [Parameter 2].

Function: The product of Parameter 1 and Parameter 2 is stored in the result variable.

### DIV - Divide

Format: DIV [Instruction Name] I001 [Result Variable] I002 [Parameter 1] 1 [Parameter 2].

Function: The quotient of Parameter 1 and Parameter 2 is stored in the result variable.

### MOD - Modulo

Format: MOD [Instruction Name] I001 [Result Variable] I002 [Parameter].

Function: Perform modulo operation and store the result into the selected result variable.

### SIN - Sine

Format: SIN [Instruction Name] I001 [Result Variable] I002 [Parameter].

Function: Sine operation (sin), A=sin(B), B is in radians.

### COS - Cosine

Format: COS [Instruction Name] I001 [Result Variable] I002 [Parameter].

Function: Cosine operation (cos), A=cos(B), B is in radians.

### ATAN - Arctangent

Format: ATAN [Instruction Name] I001 [Result Variable] I002 [Parameter].

Function: Arctangent operation (arctan), A=arctan(B), B is in radians.

### LOGICAL_OP - Logical Operation

Format: LOGICAL_OP [Instruction Name] B001 [Result Variable] = I001 [Parameter 1] AND/OR/NOT [Operation Type] GI001 [Parameter 2].

Function: Logical operations (AND, OR, NOT).

Parameters:

| Parameter | Description |
| :--- | :--- |
| Result Variable | Store the logical operation result into the selected target variable |
| Parameter 1 | Parameter 1 participating in the logical operation |
| Operation Type | AND: && AND<br>OR: \|\| OR<br>NOT: ! NOT<br>Note: When NOT operation is selected, the variable type for Parameter 2 cannot be selected |
| Parameter 2 | Parameter 2 participating in the logical operation |

### FORMULA - Compound Operation

Format: COMPOSITE_COMPUTING [Instruction Name] #GI001=GI002+GI003# [Compound Operation]

Function: Compound operation

Parameters: None

Example:

1. NOP
2. SET D001 = 1
3. SET B001 = 1
4. COMPOSITE_COMPUTING #D001=B001+D001#
5. COMPOSITE_COMPUTING #GD002=tan(30)#
6. COMPOSITE_COMPUTING #GD003=log(10)#
7. COMPOSITE_COMPUTING #GD004=GD002+GD003#
8. END

Example: During program execution, compound operations are performed according to the instruction order, and the results are stored in the target variable.

Note: The input format must be A=B+C. Input formats like A+C=B are invalid.

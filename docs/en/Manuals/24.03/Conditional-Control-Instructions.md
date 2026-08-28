---
title: "Conditional Control Instructions"
description: "How to use conditional control instructions, supported job file types, detailed description of each instruction"
author: "MUZI165"
date: "2026-04-13"
tags: ["INEXBOT", "conditional control", "instructions", "24.03"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# Conditional Control

## Conditional Control

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| Exit | Supported | Supported | Supported |
| Call Subroutine | Supported |  |  |
| Call Lua File | Supported | Supported | Supported |
| If | Supported | Supported | Supported |
| Else If | Supported | Supported | Supported |
| Else | Supported | Supported | Supported |
| Wait | Supported | Supported | Supported |
| Loop | Supported | Supported | Supported |
| Label | Supported | Supported | Supported |
| Jump | Supported | Supported | Supported |
| Until | Supported |  |  |
| Process Skip | Supported |  |  |
| Instruction Comment | Supported | Supported | Supported |
| Reachability Check | Supported | Supported | Supported |
| Timer Start | Supported | Supported | Supported |
| Timer End | Supported | Supported | Supported |
| Timer Reset | Supported | Supported | Supported |
| Read Linear Speed | Supported |  |  |
| Call Lua Statement | Supported | Supported | Supported |
| Parameter Declaration | Supported |  |  |
| Wait Motion to Point | Supported |  |  |
| Collision Detection Setting | Supported |  |  |
| Collision Detection Parameter Reset | Supported |  |  |
| Switch | Supported | Supported | Supported |
| Case | Supported | Supported | Supported |
| Default | Supported | Supported | Supported |

| Instruction Type | Instruction | Step | Reverse | Test Run | Early Execution | Be Early Executed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Conditional Control | Call Subroutine | Supported | Jump to First | Not Supported | Not Supported | Not Supported |
| Conditional Control | Call Lua File | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | If | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Else If | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Else | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Wait | Supported | Jump to First | Not Supported | Not Supported | Not Supported |
| Conditional Control | Loop | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Label | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Jump | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Until | Supported | Jump to First | Not Supported | Not Supported | Not Supported |
| Conditional Control | Process Skip | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Instruction Comment | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Reachability Check | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Timer Start | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Timer End | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Timer Reset | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Read Linear Speed | Supported | Jump to First | Not Supported | Not Supported | Supported |
| Conditional Control | Call Lua Statement | Supported | Jump to First | Not Supported | Not Supported |  |
| Conditional Control | Parameter Declaration |  |  |  |  |  |
| Conditional Control | Wait Motion to Point |  |  |  |  |  |
| Conditional Control | Collision Detection Setting |  |  |  |  |  |
| Conditional Control | Collision Detection Parameter Reset |  |  |  |  |  |
| Conditional Control | Switch |  |  |  |  |  |
| Conditional Control | Case |  |  |  |  |  |
| Conditional Control | Default |  |  |  |  |  |

## Conditional Control Parameter Description

1.  Description of AND, OR logical operations for conditional judgment instructions.

| AND Operation (&&) |
| :--- |
| The two data items are subjected to bitwise "AND" operation. |
| Rule: 0&&0=0; 0&&1=0; 1&&0=0; 1&&1=1; |
| That is: Both bits must be "1" for the result to be "1", otherwise 0 |
| Example: IF(I001=2)AND(GI001=1) |
| The instructions inside IF will only be executed when both set conditions are satisfied. |

| OR Operation (\|\|) |
| :--- |
| The two data items are subjected to bitwise "OR" operation. |
| Operation rule: 0\|\|0=0; 0\|\|1=1; 1\|\|0=1; 1\|\|1=1; |
| That is: As long as one of the two objects participating in the operation is 1, the value is 1. |
| Example: IF(I001=2)OR(GI001=1) |
| The instructions inside IF will be executed when only one of the two set conditions is satisfied. |

2.  Description of comparison methods for judgment instructions

Using IF instruction as an example:

| Comparison Method | Description |
| :--- | :--- |
| == Equal to | Example: IF(GI001=3)<br>Instructions between IF and ENDIF are executed only when variable GI001=3 |
| \< Less than | Example: IF(D001\<3)<br>Instructions between IF and ENDIF are executed when variable D001\<3 |
| \> Greater than | Example: IF(I001\>11)<br>Instructions between IF and ENDIF are executed when variable I001\>11 |
| \<= Less than or equal to | Example: IF(DOUT1-1\<=10)<br>Instructions between IF and ENDIF are executed when DOUT1-1 port is low level |
| \>= Greater than or equal to | Example: IF(DIN1-1\>=12)<br>Instructions between IF and ENDIF are executed when DIN1-1 port is high level |
| != Not equal to | Example: IF(GS001!=AAA)<br>Instructions between IF and ENDIF are executed when GS001!=AAA |

3.  Multiple condition judgment description

IF, ELSEIF, WAIT, WHILE, JUMP, UNTIL instructions support multiple condition judgment, supporting up to 5 groups of conditions.

Using IF instruction as an example:

![](assets/-uzr3h1q9zmqwh3y1yy8p.png)

As shown in Figure 1, set 5 groups of judgment conditions:

![](assets/pps3xyercatamchg4risa.png)

Judgment logic: First judge {(GI001=0)OR(GD001=0)}, {(B001=0)AND(GS001=QWE)} parts in parentheses, then perform AND operation between {(GI001=0)OR(GD001=0)} judgment result and (I001=0), finally perform OR operation between (I001=0)AND{(GI001=0)OR(GD001=0)} judgment result and {(B001=0)AND(GS001=QWE)} result. If the judgment result is true, instructions between IF and ENDIF are executed.

Note: Judgment order [items in parentheses are judged first (from left to right), then judged with items outside parentheses].

### CALL - Call Subroutine

Format: CALL [Instruction Name] [\$Subroutine\$] [Called Program File Name] IN(12) [Input Parameters] OUT(GI001) [Output Parameters].

Function: Call another program. After the called program finishes running, return to the main program's CALL instruction next line to continue running.

If you need to use input and output parameter functions, the called subroutine must have "PARAM_DECLARATION" (Parameter Declaration) instruction to read the number of inputs and outputs. "PARAM_DECLARATION" instruction must be inserted at the first line of the subroutine.

**Parameters:**

- CALL
  - Select subroutine (called program name)

- Input parameter count
  - Displayed from the parameter count set in the subroutine parameter declaration instruction
  - This parameter cannot be modified

- Input parameter selection
  - After selecting the subroutine, cannot be clicked when input parameters are 0

![](assets/mwdex6cbkjc5c1xwpijym.png)

- Input parameter selection interface:
  - Input parameter count
    - Displayed from the parameter count set in the subroutine parameter declaration instruction
    - This parameter cannot be modified
    - The number of rows displayed in the table below matches the count
  - Input parameter column
    - Displays parameter sequence number
  - Remark column
    - Remark displays the variable from PARAM_DECLARATION (Parameter Declaration) input variable
  - Value column
    - Value type can be: not used, manual input, variable; variable must be assignable to the subroutine's corresponding variable. For example, if the subroutine is I001, only int, bool, double, manual input value types can be selected. String type cannot be assigned to I001.
    - When the default value of the corresponding input parameter in PARAM_DECLARATION is
      - Manual input or variable, the [More] option of input parameter value can select not used
      - When not used, the [More] option of input parameter value cannot select not used
  - Comment column

    - Displays the comment text filled in PARAM_DECLARATION + the corresponding variable in PARAM_DECLARATION

    - Example: AA(INT)

**The input values in the CALL instruction can be assigned to the variables bound to the input parameters in the subroutine's PARAM_DECLARATION (Parameter Declaration).**

- Output parameter count
  - Obtained from the subroutine and displayed here
  - This parameter cannot be modified

- Output parameter selection
  - After selecting the subroutine, cannot be clicked when output parameters are 0

![](assets/lylj9getizyxepmpm_ru5.png)

- Output parameter selection interface
  - Output parameter count
    - Obtained from the subroutine and displayed here
    - This parameter cannot be modified
    - The number of rows displayed in the table below matches the count
  - Output parameter column
    - Displays parameter sequence number
  - Value column
    - Value type can be variable; variable must be assignable to the subroutine's corresponding variable. For example, if the subroutine is I001, only int, bool, double types can be selected. String type cannot be assigned to I001.
  - Remark
    - Remark displays the variable bound to the output parameter in PARAM_DECLARATION (Parameter Declaration) or manual input value
  - Comment column
    - Displays the comment text filled in PARAM_DECLARATION + the corresponding variable in PARAM_DECLARATION
    - Example: AA(INT)

**The output values in the subroutine's PARAM_DECLARATION (Parameter Declaration) can be assigned to the variables bound to the output parameters in the CALL instruction.**

Note: Main program A calls program B, and program B calls program A, causing an infinite loop.

Example: Main program:

1.  NOP

2.  SET I001=12

3.  SET I002=22

4.  CALL[\$Q11\$]IN(I001,I002)OUT(D006,D007)

5.  TIMER T=1

6.  END

Example: Subroutine Q11:

1.  NOP

2.  PARAM_DECLARATION IN(D001=[-],D002=[-])OUT(10.0,11.0)

3.  TIMER T=0.5

4.  END

Example description: Main program runs the call subroutine instruction. Input parameters I001 and I002 values are received and used by the subroutine. When running to subroutine Q11, I001=12, I002=22. Output parameters will be returned to the main program for use. After subroutine finishes, enter main program D006=10, D007=11.

### PARAM_DECLARATION - Parameter Declaration

Format: PARAM_DECLARATION [Instruction Name] IN(I001=1,[Variable1]) [Input Parameter Info] OUT(1,[Output Parameter]) [Output Parameter Info].

Function: Declare parameters to be input or output. Input parameters will be received and used by the subroutine. Output parameters will be returned to the main program for use.

![](assets/c-41wgf0o8ppv0s0kshpb.png)

**Parameters**

- Input parameter count
  - Define the number of input parameters. The number defined here determines the number of input parameters in the call subroutine instruction parameter interface.

- Input parameter selection
  - Can be clicked when input parameter count is 0

![](assets/fdy9lsotepx0ulmkrtczn.png)

- Parameter selection interface
  - Input parameter count
    - This parameter can be modified. Define the number of input parameters.
    - The number of rows displayed in the table below matches the count
  - Variable column
    - Select the variable to store the input parameter
    - Default is I001
  - Default value column
    - Select the parameter's default value. Default is not used.
    - More types include: manual input, not used, variable
  - Comment column
    - Can customize comment content
    - Comment content cannot exceed 20 characters
    - Example: AA

**If the PARAM_DECLARATION input parameter variable value selects not used, it will be obtained from the CALL instruction input parameter manual input. If the PARAM_DECLARATION input parameter variable value selects manual input, the CALL instruction input parameter needs to select not used.**

- Output parameter count
  - Define the number of output parameters. The number defined here determines the number of output parameters in the call subroutine instruction parameter interface.

- Output parameter selection
  - Can be clicked when output parameter count is 0

![](assets/aechdj40xu2drs2t4hbyp.png)

- Parameter selection interface
  - Output parameter count
    - This parameter can be modified. Define the number of output parameters.
    - The number of rows displayed in the table below matches the count
  - Output parameter column
    - Displays parameter sequence number
  - Value column
    - Value type can be manual input or variable; variable must be assignable to the main program's corresponding variable. For example, if CALL is I001, only int, bool, double, manual input value types can be selected. String type cannot be assigned to I001.
  - Comment column
    - Can customize comment content
    - Comment content cannot exceed 20 characters
    - Example: AA

**The PARAM_DECLARATION output parameter value will be returned to the variable bound to the output parameter in the main program's CALL instruction. Note that the variable must be assignable to the main program's corresponding variable.**

**Description**

> Parameter definition, all foreground programs can use this instruction to define.
>
> This instruction must be inserted at the first line of the program, otherwise an error will be reported.
>
> Background programs are not added for now, but this instruction will be added later.

**Note**

> Input parameter receive type cannot be manual input value. Input parameters must be received into variables. Output parameters can be manual input values.

Notes:

1.  If the PARAM_DECLARATION input parameter variable value selects not used, it will be obtained from the CALL instruction input parameter manual input. If the PARAM_DECLARATION input parameter variable value selects manual input, the CALL instruction input parameter needs to select not used.

2.  The PARAM_DECLARATION output parameter value will be returned to the variable bound to the output parameter in the main program's CALL instruction. Note that the variable must be assignable to the main program's corresponding variable.

Example: Main program

1.  NOP

2.  SET I001=12

3.  SET I002=22

4.  CALL[\$Q11\$]IN(I001,I002)OUT(D006,D007)

5.  TIMER T=1

6.  END

Example: Subroutine Q11

1.  NOP

2.  PARAM_DECLARATION IN(D001=[-],D002=[-])OUT(10.0,11.0)

3.  TIMER T=0.5

4.  END

After executing the subroutine, variables can be monitored. GI009 and GI010 received the main program's values, and GI001 received the value returned by the subroutine.

Execution effect: Subroutine Q11 parameter declaration input parameter variable value selects not used ([-] means: not used). Input parameters are obtained from the CALL instruction input parameter manual input. Main program runs the call subroutine instruction. Input parameters I001 and I002 values are received and used by the subroutine. When running to subroutine Q11, I001=12, I002=22. Output parameters will be returned to the main program for use. After subroutine finishes, enter main program D006=10, D007=11.

#### Example

![](assets/gco7qysf2fcqmvzqnaafb.png)

Main program KKK selects subroutine QQQ and reads 2 input parameters and 1 output parameter. In the main program, set input parameters 222, 333, and set output parameter GI001.

![](assets/cms34zrefp5g_g5th2z6g.png)

Subroutine parameter declaration: 2 input parameters receiving variables are GI009, GI010, values are not used, received from main program. 1 output parameter returns value 555 to main program.

![](assets/1hdhwcsu_wwjr85739dqj.png)

After executing the subroutine, variables can be monitored. GI009 and GI010 received the main program's values, and GI001 received the value returned by the subroutine.

### RETURN - Exit

Format: RETURN [Instruction Name].

Function: For faster exit from subroutine and return to main program. This instruction can be used in subroutines, main programs, reset programs, global background and local background in background tasks. Compared to previous subroutine ending and jumping to main program interface, the exit instruction is faster.

RETURN does not require instruction parameter input, so this type of instruction will not jump to the instruction parameter interface when clicking insert instruction. Clicking insert instruction directly adds the instruction to the job file. Since this instruction has no instruction parameter interface, the modify control is grayed out when the cursor is on the instruction.

Difference between exit thread instruction and exit instruction: Exit thread instruction is closed by the main program thread, while exit instruction is closed by the thread itself internally. If the exit instruction is executed in the main program, it has the same effect as stopping the run instruction.

**Usage Example**

1.  Used in main program.

![](assets/typagdnt3jescubbibx3s.png)

When the program runs to the exit instruction, the program stops. The servo changes from running state to ready state. The program stops running, and instructions after the exit instruction are no longer executed. The reset program effect is the same as the main program effect.

2.  Used in subroutine.

![](assets/w7thjyagbglcr4abiuhjx.png)

![](assets/guoe7vtr3vfn66i3irivv.png)

Main program calls subroutine. When the subroutine runs to the exit instruction, it jumps from the subroutine to the main program and continues running.

3.  Used in background tasks.

![](assets/ms6bvdxc8sllostt99-a6.png)

![](assets/aw3gzxvugoeg5loxz0my6.png)

![](assets/wcjl4vyjcuivgftwv7g5t.png)

Main program calls global background and local background. When global background and local background run to the exit instruction, the global and local threads are exited.

### CALL_LUAFILE - Call Lua File

Format: CALL_LUAFILE [Instruction Name] [\$name\$] [Uploaded Lua File Name] IN[1001,I002] [Input Parameter Count] OUT[G1001,GI002] [Output Parameter Count].

Function: After parameter definition, directly upload the Lua file, then insert the call Lua file instruction. After the instruction finishes running, all defined parameter variables will be passed in and out.

Parameters:

| Parameter | Description |
| :--- | :--- |
| CALL_LUAFILE | Select to call the uploaded Lua file |
| Input parameter count | Number of input parameters for the Lua file |
| Input parameter selection | Select the number and type of input parameters needed |
| Output parameter count | Number of output parameters for the Lua file |
| Output parameter selection | Select the number and type of output parameters needed |

Notes:

1.  The number of input parameters must match the number in the called Lua file.

2.  The number of output parameters can be less than the number in the called Lua file.

3.  The types of input and output parameters should be unified. Otherwise, an error will occur when executing the CALL_LUAFILE instruction (Lua script output parameter error).

The called [demo.lua] file defines 5 parameters (I002, GI002, GD002, GP0001, GE0005):

nex.I[2]=200 -- Modify global numeric variable I002 to 200

nex.GI[2]=100 -- Modify global numeric variable GI002 to 100

nex.GD[2]=11.22 -- Modify global numeric variable GD002 to 11.22

GP1 = nex.GP[1]

GP1.coord, GP1.unit, GP1.configuration, GP1.tool, GP1.user = 0,2,4,6,1

pos1=GP1:pos()

pos1.x,pos1.y,pos1.z,pos1.a,pos1.b,pos1.c = 1,2,3,4,5,6

nex.GP[1]=GP1

GE5 = nex.GE[5]

GE5.coord, GE5.unit, GE5.configuration, GE5.tool, GE5.user = 2,1,3,4,5

pos1=GE5:pos()

pos1.x,pos1.y,pos1.z,pos1.a,pos1.b,pos1.c,GE5.E1,GE5.E2 =
1,2,3,4,5,6,7,8

nex.GE[5]=GE5

n1,n2,n3,GP1,GE5 = nex.get_param() -- Get parameters passed from job file

nex.set_param(n1,n2,n3,GP1,GE5) -- Pass parameters back to job file

Example: Insert call Lua file instruction

1.  NOP

2.  CALL_LUAFILE[demo.lua]IN(GI002,I002,GD002,GP0001,GE0005)OUT(I003,GI003,GD003,GP0002,GE0001)

3.  TIMER T=5

4.  END

Example description: Running the call Lua file instruction I002=200, GI002=100, GD002=11.22, GP0001(1,2,3,4,5,6) GE0005(1,2,3,4,5,6,7,8).

I003=100, GI003=200, GD003=11.22, GP0002(1,2,3,4,5,6) GE0001(1,2,3,4,5,6,7,8).

### IF - If

Format: IF [Instruction Name] I001 [Parameter 1] = [Comparison Method] D001 [Parameter 2].

Function: Execute the next target instruction by judging whether the condition is satisfied.

![](assets/7z9_xpms1ovoqev_zpan9.png)

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable 1 | Variable 1 type, can select numeric variable, digital input/output, analog input variable, position variable type<br>1. If parameter type selects numeric variable (INT, DOUBLE, BOOL, GINT, GDOUBLE, GBOOL), this is the variable name of variable 1<br>2. If parameter type selects digital/analog variable (DIN, DOUT, AIN), this is the digital input/output or analog input port number<br>3. If parameter type selects position variable (P, GP, E, GE), after selecting position variable, the variable format is the selected position variable plus position variable coordinate axis. When the selected variable coordinate axis point satisfies the condition, instructions inside IF are executed |
| Comparison Method | == Equal to<br>\< Less than<br>\> Greater than<br>\<= Less than or equal to<br>\>= Greater than or equal to<br>!= Not equal to |
| Variable 2 | Variable 2 selected variable type: manual input, variable<br>If variable value source selects manual input, directly fill in parameter 2's value here |

Notes:

1.  IF instruction can be used alone or with ELSEIF and ELSE instructions. Note: ELSEIF and ELSE instructions cannot be used alone without IF instruction.

2.  When the program starts with IF and the last line is ENDIF instruction, please insert a 0.1 second TIMER (delay) instruction above IF or below ENDIF. Otherwise, when IF condition is not satisfied, the program will enter a dead state.

3.  When inserting IF instruction, ENDIF instruction is also inserted. When deleting IF instruction, please also delete the corresponding ENDIF instruction, otherwise the program cannot execute.

Example:

1.  NOP

2.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

3.  IF (GI001>5)AND{(GI002=5)OR(D001!=3)}

4.  TIMER T=2

5.  ENDIF

6.  END

Example description: When the program runs to line 3, the IF instruction is judged. If true, the delay instruction is executed. Otherwise, the program directly runs to line 6.

### ELSEIF - Else If

Format: ELSEIF [Instruction Name] I001 [Parameter 1] = [Comparison Method] D001 [Parameter 2].

Function: When IF instruction's condition is not satisfied, execute ELSEIF statement.

![](assets/a41ms8ocgmla1axoma6l2.png)

Parameters:

| Parameter | Description |
| :--- | :--- |
| Variable 1 | Variable 1 type, can select numeric variable, digital input/output, analog input, position variable type<br>1. If parameter type selects numeric variable (INT, DOUBLE, BOOL, GINT, GDOUBLE, GBOOL), this is the variable name of variable 1<br>2. If parameter type selects digital/analog variable (DIN, DOUT, AIN), this is the digital input/output or analog input port number<br>3. If parameter type selects position variable (P, GP, E, GE), after selecting position variable, the variable format is the selected position variable plus position variable coordinate axis. When the selected variable coordinate axis point satisfies the condition, instructions inside ELSEIF are executed |
| Comparison Method | == Equal to<br>\< Less than<br>\> Greater than<br>\<= Less than or equal to<br>\>= Greater than or equal to<br>!= Not equal to |
| Variable 2 | Variable 2 selected variable type<br>Parameter 2 supports customization. If variable value source selects manual input, directly fill in parameter 2's value here |

Notes:

1.  When IF condition is satisfied, instructions inside IF are executed, ignoring instructions between ELSEIF and ENDIF.

2.  When IF condition is not satisfied, jump to ELSEIF instruction. Judge ELSEIF's condition. If satisfied, run instructions between ELSEIF and ENDIF, then continue running instructions below ENDIF. If not satisfied, directly jump to the line below ENDIF to continue running.

3.  If multiple ELSEIF instructions are nested between IF and ENDIF, when IF condition is not satisfied, first judge the first ELSEIF's condition. If satisfied, run instructions between the first and second ELSEIF. If not satisfied, judge the second ELSEIF's condition, and so on.

4.  When deleting IF instruction, delete the corresponding ELSEIF and ENDIF instructions, otherwise the program cannot run.

Example:

1.  NOP

2.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

3.  IF(I001=5)

4.  TIMER T=1

5.  ELSEIF(I001!=0)AND(GI001=2)

6.  TIMER T=2

7.  ENDIF

8.  END

Example description: When running to line 3, the IF instruction is judged. If true, execute line 4 delay instruction. Otherwise, judge the ELSEIF statement. If ELSEIF condition is satisfied, execute line 6 delay instruction. Otherwise, the program directly runs to line 8.

### ELSE - Else

Format: ELSE [Instruction Name].

Function: When IF and ELSEIF instruction conditions are not satisfied, execute ELSE statement.

![](assets/2qg7czpl9r214innup277.png)

Parameters: Omitted.

Notes:

1.  ELSE instruction must be inserted between IF and ENDIF, but only one ELSE instruction can be inserted per IF instruction.

2.  When IF condition is satisfied, instructions between IF and ELSE are executed, then jump to the line below ENDIF to continue running.

3.  When IF condition is not satisfied, jump to instructions between ELSE and ENDIF to run.

4.  When deleting IF instruction, delete the corresponding ELSE and ENDIF instructions, otherwise the program cannot run.

Example:

1.  NOP

2.  ADD D001 1

3.  IF (I001<10)

4.  TIMER T=1

5.  ELSEIF (GI001!=5)

6.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

7.  ELSE

8.  TIMER T=1

9.  ENDIF

10. END

Example description: When IF and ELSEIF conditions are not satisfied, judge ELSE. If ELSE is satisfied, execute line 8. Otherwise, directly run to line 10.

### WAIT - Wait

Format: WAIT [Instruction Name] GI001 [Parameter 1] == [Comparison Method] 2 [Parameter 2] T=2 [Wait Time] F=1 [Filter Time] Return=B001 [Wait Result Stored in Variable].

Function: Program is in wait state before condition is satisfied. After condition is satisfied, continue executing instructions after the wait instruction.

Description: WAIT means waiting. You can choose whether to have a wait time. When the "TIME" option is not checked, the program stays at the WAIT instruction waiting until the condition is satisfied. If the "TIME" option is checked, after waiting for the set time, the program continues to run the next instruction regardless of whether the condition is satisfied. If the condition becomes satisfied during waiting, the next instruction runs immediately.

Now WAIT supports multiple condition judgment with sequential judgment. Items in parentheses are judged first, then judged with items outside parentheses. Supports up to 5 judgment conditions.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Parameter 1 | Parameter 1 type, can select numeric variable, digital input/output, analog input, position variable type<br>1. If parameter type selects numeric variable (INT, DOUBLE, BOOL, GINT, GDOUBLE, GBOOL), this is the variable name of parameter 1<br>2. If parameter type selects digital/analog variable (DIN, DOUT, AIN), this is the digital input/output or analog input port number<br>3. If parameter type selects position variable (P, GP, E, GE), after selecting position variable, the variable format is the selected position variable plus position variable coordinate axis. When the selected variable coordinate axis point satisfies the condition, instructions inside WAIT are executed |
| Comparison Method | == Equal to<br>\< Less than<br>\> Greater than<br>\<= Less than or equal to<br>\>= Greater than or equal to<br>!= Not equal to |
| Parameter 2 | Parameter 2 selected variable type<br>Parameter 2 supports customization. If variable value source selects manual input, directly fill in parameter 2's value here |
| Time Wait Time | 1. When "TIME" option is not checked, the program stays at the WAIT instruction waiting until the condition is satisfied<br>2. When "TIME" option is checked, after reaching the wait time, the next instruction runs regardless of condition. If the condition becomes satisfied during waiting, the next instruction runs immediately |
| Filter Time | 1. Input signal time satisfies filter time: (no need to wait for TIME) directly continue to next line<br>2. When filter time is not satisfied: after reaching wait TIME time, continue to next line |
| Wait Result | Store wait result in boolean variable. If wait time exceeded, wait result returns 1. If wait time not exceeded, wait result returns 0 |

Example:

1.  NOP

2.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

3.  WAIT (GI001<5) T=1 Return=GB001

4.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

5.  END

Example description: The program runs to line 3 wait instruction and judges whether the condition is satisfied. If satisfied, directly run instructions below wait. If not satisfied, after reaching the wait time, run instructions below wait. Store wait result in variable GB001.

### WHILE - Loop

Format: WHILE [Instruction Name] I001 [Parameter 1] = [Comparison Method] D001 [Parameter 2].

Function: When condition is true, repeatedly execute instructions inside the loop statement.

![](assets/lbhkaajqqmmpgk4tqnazk.png)

Parameters:

| Parameter | Description |
| :--- | :--- |
| Parameter 1 | Parameter 1 type, can select numeric variable, digital input/output, analog input, position variable type<br>1. If parameter type selects numeric variable (INT, DOUBLE, BOOL, GINT, GDOUBLE, GBOOL), this is the variable name of parameter 1<br>2. If parameter type selects digital/analog variable (DIN, DOUT, AIN), this is the digital input/output or analog input port number<br>3. If parameter type selects position variable (P, GP, E, GE), after selecting position variable, the variable format is the selected position variable plus position variable coordinate axis. When the selected variable coordinate axis point satisfies the condition, instructions inside WHILE are executed |
| Comparison Method | == Equal to<br>\< Less than<br>\> Greater than<br>\<= Less than or equal to<br>\>= Greater than or equal to<br>!= Not equal to |
| Parameter 2 | Parameter 2 selected variable type. Supports customization. If variable value source selects manual input, directly fill in parameter 2's value here |

Notes:

1.  When inserting WHILE instruction, ENDWHILE instruction is also inserted. When deleting WHILE instruction, also delete the corresponding ENDWHILE instruction, otherwise the program cannot run.

2.  When the program starts with WHILE and the last instruction is ENDWHILE, please insert a TIMER (delay) instruction at the beginning or end of the program. Otherwise, when WHILE condition is not satisfied, the program will enter a dead state.

3.  When instructions inside WHILE have no motion instructions or may enter an infinite loop in certain situations, please insert a TIMER (delay) instruction between WHILE and ENDWHILE. Otherwise, when WHILE condition is satisfied, the program may enter a dead state.

4.  When WHILE condition is satisfied, instructions between WHILE and ENDWHILE are looped. Before running to WHILE, if the condition is not satisfied, when running to WHILE, it directly jumps to ENDWHILE without running instructions between WHILE and ENDWHILE. If during running instructions between WHILE and ENDWHILE, the condition becomes not satisfied, it continues running until reaching ENDWHILE line, then continues running instructions below ENDWHILE without looping.

Example:

1.  NOP

2.  CALL[\$Z Subroutine\$]

3.  WHILE(DIN1-1=1)OR(GI001=1)

4.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

5.  MOVL P0002 V=10mm/s PL=0 ACC=1 DEC=1 0

6.  ENDWHILE

7.  TIMER T=1

8.  END

Example description: The program judges whether the loop condition is satisfied before running to WHILE. If satisfied, loop run motion instructions between WHILE and ENDWHILE. If not satisfied, execute instructions outside the loop.

### LABEL - Label

Format: LABEL [Instruction Name] [\$name\$] [Label Name].

Function: Specify the label for the jump target line.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Label Name | The label name for instruction jump. For example, if the label name is [Q1] and the label name selected in the jump instruction parameter setting interface is [Q1], the program will continuously run instructions between the label and jump instruction |

Notes:

1.  Two label instructions with the same label name cannot be inserted in the same program.

2.  Label instructions do not support move up/down operations.

Example:

1.  NOP

2.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

3.  LABEL [\$Q1\$]

4.  MOVL P0002 V=10mm/s PL=0 ACC=1 DEC=1 0

5.  MOVL P0003 V=10mm/s PL=0 ACC=1 DEC=1 0

6.  JUMP [\$Q1\$]

7.  TIMER T=1

8.  END

Example description: Continuously loop run instructions between LABEL and JUMP.

### JUMP - Jump

Format: JUMP [Instruction Name] [\$name\$] [Label Name].

Function: Jump to the specified label line to continue running.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Label Name | Select the label name to jump to |

Notes:

1.  JUMP instruction must be used with LABEL instruction. The label name in JUMP must match the label name in LABEL.

2.  When using JUMP instruction, be careful to avoid infinite loops.

Example:

1.  NOP

2.  LABEL [\$Q1\$]

3.  MOVL P0001 V=10mm/s PL=0 ACC=1 DEC=1 0

4.  IF (I001<5)

5.  JUMP [\$Q1\$]

6.  ENDIF

7.  END

Example description: When I001<5, the program jumps to label Q1 and continues running, forming a loop. When I001>=5, the program continues running to END.

### UNTIL - Until

Format: UNTIL [Instruction Name] I001 [Parameter 1] = [Comparison Method] D001 [Parameter 2].

Function: Execute instructions between UNTIL and ENDUNTIL until the condition is satisfied.

Parameters: Same as IF instruction.

Notes:

1.  UNTIL instruction must be used with ENDUNTIL instruction.

2.  Instructions between UNTIL and ENDUNTIL are executed first, then the condition is judged. If not satisfied, continue looping. If satisfied, exit the loop.

### PROCESS SKIP - Process Skip

Format: PROCESS_SKIP [Instruction Name] [Line Number].

Function: Skip to the specified line number to continue running.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Line Number | The line number to skip to |

### INSTRUCTION COMMENT - Instruction Comment

Format: INSTRUCTION_COMMENT [Comment Content].

Function: Add a comment to the program. The comment does not affect program execution.

### REACHABILITY CHECK - Reachability Check

Format: REACHABILITY_CHECK [Instruction Name] P0001 [Position Variable] Return=B001 [Result Variable].

Function: Check whether the specified position is reachable by the robot.

Parameters:

| Parameter | Description |
| :--- | :--- |
| Position Variable | The position variable to check |
| Result Variable | Store the check result. True if reachable, false if not |

### TIMER START - Timer Start

Format: TIMER_START [Instruction Name] T001 [Timer Variable].

Function: Start the specified timer.

### TIMER END - Timer End

Format: TIMER_END [Instruction Name] T001 [Timer Variable] Return=D001 [Result Variable].

Function: Stop the specified timer and store the elapsed time in the result variable.

### TIMER RESET - Timer Reset

Format: TIMER_RESET [Instruction Name] T001 [Timer Variable].

Function: Reset the specified timer to zero.

### READ LINEAR SPEED - Read Linear Speed

Format: READ_LINEAR_SPEED [Instruction Name] Return=D001 [Result Variable].

Function: Read the current robot linear speed and store it in the result variable.

### CALL LUA STATEMENT - Call Lua Statement

Format: CALL_LUA_STATEMENT [Lua Code].

Function: Execute a single Lua statement.

### SWITCH

Format: SWITCH [Variable].

Function: Start a switch-case block. Compare the variable with case values.

### CASE

Format: CASE [Value].

Function: Define a case in the switch block. If the switch variable matches the case value, execute instructions until the next case, default, or endswitch.

### DEFAULT

Format: DEFAULT.

Function: Define the default case in the switch block. Executed when no case matches the switch variable.

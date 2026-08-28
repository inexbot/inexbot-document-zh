---
title: "Program Control"
description: "Program control function user manual, including thread management, background task creation, operation instructions and other detailed descriptions."
author: "FDJAK"
date: "2026-06-25"
tags: ["Teach Pendant", "Program Control", "Background Tasks"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Program Control

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :---: | :----: | :----: |
| Start Thread | **√** | **√** | <br /> |
| Exit Thread | **√** | **√** | <br /> |
| Pause Run | **√** | **√** | **√** |
| Continue Run | **√** | **√** | **√** |
| Stop Run | **√** | **√** | **√** |
| Restart Run | **√** | **√** | **√** |
| Window Instruction | **√** | <br /> | <br /> |
| Thread State | **√** | **√** | **√** |

## Program Control Related Content

How to create background tasks?

Click Settings — Function Parameters — Background Tasks to enter the background task interface:

Global Background:

1. Click [Global] to enter the global background task interface.
2. Click [New] to create a global background job file.
3. Click [Operations] to copy, delete, rename, and set auto-start for the currently selected job file.
4. Click [Start] to run the selected auto-start program in the background.
5. Set Auto-start: Execute the auto-start program at boot. Click [Start] on the global background interface to execute the auto-start program.
6. Note: Only global background tasks can set auto-start.

Local Background:

1. Click [Local] to enter the local background task interface.
2. Click [New] to create a local background job file.
3. Click [Operations] to copy, delete, and rename the currently selected job file.

### PTHREAD\_START - Start Thread

Format: PTHREAD\_START [Instruction Name] [$TEST$] [Background Job File to Start] GLOBAL, LOCAL [Global Background, Local Background].

Function: Start a global background or local background task.

Parameters:

| Parameter | Description |
| :------- | :----------------------------------------------------------- |
| Type | Global background, local background |
| Background Task | When global background type is selected, the job files created in global background can be selected. When local background type is selected, the job files created in local background can be selected. |

Example:

1. NOP
2. TIMER T=1
3. PTHREAD\_START [TEST] GLOBAL
4. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5. END

Example description: Start the global background job file TEST in the foreground.

### PTHREAD\_END - Exit Thread

Format: PTHREAD\_END [Instruction Name] [$TEST$] [Job File Name to Exit] GLOBAL, LOCAL [Global Background, Local Background].

Function: Close an already started background task.

Parameters:

| Parameter | Description |
| :--- | :------------------- |
| Type | Global background, local background |
| Background Task | Exit the already started local or global background job file |

Note: The exit thread instruction can only exit job files that have been started in the foreground.

For example: If the started global background job task is [TEST], and the exit thread instruction selects global background job task [TEST1], then the global background job task [TEST] cannot be exited when executing the exit thread instruction.

Example:

1. NOP
2. TIMER T=1
3. PTHREAD\_START [TEST] GLOBAL
4. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5. PTHREAD\_END [TEST] GLOBAL
6. END

Example description:

When the program runs to line 1, it starts the global background job file TEST. When it runs to line 5, it exits the global background job file TEST.

### PAUSERUN - Pause Run

Format: PAUSERUN [Instruction Name] ALL, MAIN [Type of Run to Pause].

Function: Pause the main program and local background program execution.

| Parameter | Description |
| :- | :-------------- |
| Type | All: Pause started local background tasks and the main program. Started global background tasks will not pause. For example: When a global background task is running and the pause instruction is reached, the global background task continues to run normally without pausing. Main program: Pause the running main program. Started background tasks will not pause. Local background: Pause started local background tasks. The running main program will not pause. |
| Program | When All or Main Program is selected, the input box is grayed out. When the type is Local Background, select the background program to pause. |

Example:

1. NOP
2. TIMER T=1
3. PTHREAD\_START [TEST] LOCAL
4. PTHREAD\_START [TEST1] GLOBAL
5. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
6. PAUSERUN ALL
7. END

Example description: When the program runs to lines 3 and 4, it starts local and global background tasks. When it runs to line 6 (pause instruction), the started local background task and main program pause execution, while the global background task continues running normally.

### CONTINUERUN - Continue Run

Format: CONTINUERUN [Instruction Name] MAIN, LOCAL [Type of Paused Program].

Function: Continue running a paused main program or local background program.

Parameters:

| Parameter | Description |
| :- | :---------------------------------------------- |
| Type | Main program: Continue running the paused main program. Already paused background programs will not continue. Local background: Run the paused local background program. |
| Program | When Main Program is selected, the input box is grayed out. When Local Background is selected, you can choose the background program to continue. |

Example:

1. NOP
2. TIMER T=1
3. PTHREAD\_START [TEST] LOCAL
4. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5. PAUSERUN ALL
6. TIMER T=1
7. CONTINUERUN MAIN
8. MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
9. END

Example description: The program starts a local background program during execution. When it runs to line 4, the main program and local background program are paused. When it runs to line 7, the paused main program continues running, while the local background program remains paused.

![](./assets/-qlrznt5zh-2htkmjdwau.png)

Special note: If the continue run instruction selects the Local Background program type, and a pause instruction has been inserted, when the program reaches the pause instruction the servo status will be paused. Then clicking [Start] on the teach pendant will execute the continue run instruction. The current execution logic is that both the main program and local background program will continue running.

### STOPRUN - Stop Run

Format: STOPRUN [Instruction Name].

Function: Stop the running program. When the program reaches the stop run instruction, the servo powers off.

Parameters: Omitted.

1. NOP
2. PTHREAD\_START [TEST] LOCAL
3. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
4. PAUSERUN ALL
5. CONTINUERUN MAIN
6. STOPRUN
7. MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
8. END

Example description: When the program runs to line 6, the servo powers off and the program stops running.

### RESTARTRUN - Restart Run

Format: RESTARTRUN [Instruction Name].

Function: Re-run the program above this instruction.

Parameters: Omitted.

Example:

1. NOP
2. PTHREAD\_START [TEST] LOCAL
3. MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
4. PAUSERUN ALL
5. RESTARTRUN
6. TIMER T=1
7. MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
8. END

Example description: Each time the program runs to line 5, it re-runs the program above this instruction.

### WINDOW - Window Instruction

Format: WINDOW [Instruction Name] Variable I001 assignment [Prompt Content] 1,2,3 [Number of Options] INT, GINT [Bound Variable] 11 [Option 1 Content] 1 [Option 1 Variable Value] 22 [Option 2 Content] 2 [Option 2 Variable Value] 33 [Option 3 Content] 3 [Option 3 Variable Value].

Function: When the instruction is executed, a window with the specified prompt content pops up. The number of buttons equals the number of options. Clicking a button stores the corresponding variable value into the bound variable.

Parameters:

| Parameter | Description |
| :--------------- | :------------------------------ |
| | ![](./assets/6odwzo316dhqz_fgtcq1e.png) |
| Prompt Content | Content displayed in the prompt window when the window instruction is executed. For example: If the prompt content is "Assign value to variable I001", as shown. <br>![](./assets/63a5jnpoznczphkm0vbl4.png) |
| Number of Options | Set the number of options. When the window instruction is executed, the prompt window displays the corresponding number of buttons. For example: If the number of options is 3, as shown. <br>![](./assets/nputezqeyxdyyzruei8fz.png) |
| Bound Variable | Supports INT, GINT. When the window instruction is executed, the variable value corresponding to the selected option is stored in this variable. |
| Option Content | Fill in the corresponding content based on the number of options. The window will display these options. For example: Setting 3 options with content 11, 22, 33, as shown. <br>![](./assets/rciq8ns5tda1gig5kkwkl.png) |
| Option Variable Value | Clicking a window option writes the bound value to the bound variable. For example: If the option content is 11 and the corresponding variable value is 1, clicking it assigns 1 to the variable. |

Example:

1. NOP
2. WINDOW [$Assign value to variable I001$] GI001 3 [$11$] 1 [$22$] 2 [$33$] 3
3. END

Example description: Execute the window instruction. Click button 1 — GI001=1; click button 2 — GI001=2; click button 3 — GI001=3.

### PTHREAD\_STATE - Thread State

Format: PTHREAD\_STATE [Instruction Name] MAIN, LOCAL, GLOBAL [Main Program, Local Background, Global Background] I/GI [Variable Type].

Function: View the current state of the executed thread program. Stopped = 1, Paused = 2, Running = 3.

Parameters:

| Parameter | Description |
| :------ | :--------------------------------------- |
| Type | View the thread state of main program, local background, or global background |
| Background Task | Main program: When Main Program is selected, the input box is grayed out. Local/Global background: View the state of the selected background task. |
| Variable Type | Store the read state into a variable |

Notes:

The thread state instruction can read the current state of the program. When the main program is stopped or paused, the program cannot reach the thread state instruction, so the foreground cannot read the stopped or paused state of the main program. When the program starts normally, the main program is in running state. Therefore, when you need to read the main program state, you can insert the read thread state instruction in the background and then start this thread from the foreground.

Example:

1. NOP
2. PTHREAD\_START [$TEST$] LOCAL
3. TIMER T=1
4. PTHREAD\_STATE [$TEST$] LOCAL I002
5. PAUSERUN [$TEST$]
6. TIMER T=1
7. PTHREAD\_STATE [$TEST$] LOCAL I002
8. PTHREAD\_END [$TEST$] LOCAL
9. TIMER T=1
10. PTHREAD\_STATE [$TEST$] LOCAL I002
11. END

Example description: Line 2 starts the local background thread. When the program runs to line 4, the thread state is read and stored in variable I002=3 (running). When it runs to line 5, the background thread is paused. At line 7, the thread state is read and I002=2 (paused). At line 8, the background thread is exited. At line 10, the thread state is read and I002=1 (stopped).

## Q&A for Retrieval

**Q: What is the PTHREAD\_START instruction?**

A: PTHREAD\_START is the start thread instruction, used to start a global background or local background task.

**Q: What is the PTHREAD\_END instruction?**

A: PTHREAD\_END is the exit thread instruction, used to close an already started background task.

**Q: What is the PAUSERUN instruction?**

A: PAUSERUN is the pause run instruction, used to pause the main program and local background program execution.

**Q: What is the CONTINUERUN instruction?**

A: CONTINUERUN is the continue run instruction, used to continue running a paused main program or local background program.

**Q: What is the STOPRUN instruction?**

A: STOPRUN is the stop run instruction, used to stop the running program. When the program reaches this instruction, the servo powers off.

**Q: What is the RESTARTRUN instruction?**

A: RESTARTRUN is the restart run instruction, used to re-run the program above this instruction.

**Q: What is the WINDOW instruction?**

A: WINDOW is the window instruction. When executed, it displays a prompt content window. Clicking a button stores the variable value into the bound variable.

**Q: What is the PTHREAD\_STATE instruction?**

A: PTHREAD\_STATE is the thread state instruction, used to view the current state of the executed thread program. Stopped = 1, Paused = 2, Running = 3.

**Q: How do I create a background task?**

A: Click Settings — Function Parameters — Background Tasks to enter the background task interface. Click [Global] or [Local], then click [New] to create a background job file.

**Q: What is the difference between global background and local background?**

A: Global background tasks can set auto-start, executing automatically at boot. Local background tasks cannot set auto-start. Global background tasks do not pause when a pause run instruction is executed, while local background tasks do.

**Q: What are the limitations of the exit thread instruction?**

A: The exit thread instruction can only exit job files that have been started in the foreground.

**Q: What do thread state values represent?**

A: In thread state, Stopped = 1, Paused = 2, Running = 3.

## Version History

| Version | Date | Changes | Author |
| :---- | :--------- | :--- | :---- |
| 1.0.0 | 2026-06-25 | Initial version | FDJAK |

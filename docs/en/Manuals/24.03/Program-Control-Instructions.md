---
title: "Program Control Instructions"
description: "How to use program control instructions, supported job file types, and detailed description of each instruction"
author: "MUZI165"
date: "2026-04-09"
tags: ["INEXBOT", "Program Control", "Instruction", "Thread", "Background Task"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Program Control Instructions

| Instruction Type | Foreground | Global Background | Local Background |
| :--- | :--- | :--- | :--- |
| Start Thread | Supported | Supported |  |
| Exit Thread | Supported | Supported |  |
| Pause Run | Supported | Supported | Supported |
| Continue Run | Supported | Supported | Supported |
| Stop Run | Supported | Supported | Supported |
| Restart Run | Supported | Supported | Supported |
| Popup Instruction | Supported |  |  |
| Thread Status | Supported | Supported | Supported |

| Instruction Type | Instruction | Single Step | Reverse | Trial Run | Early Execute | Be Early Executed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Program Control | Start Thread | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Exit Thread | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Pause Run | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Continue Run | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Stop Run | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Restart Run | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Popup Instruction | Supported | Not Supported | Supported | Not Supported | Supported |
| Program Control | Thread Status | Supported | Not Supported | Supported | Not Supported | Supported |

---

## Program Control Related Content

How to create background tasks?

Click Settings > Background Tasks to enter the background task interface:

Global Background:

1. Click [Global] to enter the global background task interface.
2. Click [New] to create a global background job file.
3. Click [Operation] to copy, delete, rename, and set auto-start for the currently selected job file.
4. Click [Start] to run the selected auto-start program in the background.
5. Set Auto-Start: Execute the auto-start program at boot time. Click [Start] on the global background interface to execute the auto-start program.
6. Note: Only global background tasks can be set for auto-start.

Local Background:

7. Click [Local] to enter the local background task interface.
8. Click [New] to create a local background job file.
9. Click [Operation] to copy, delete, and rename the currently selected job file.

### PTHREAD_START - Start Thread

Format: PTHREAD_START [Instruction Name] [\$TEST\$] [Background Job File to Start] GLOBAL, LOCAL [Global Background, Local Background].

Function: Start a global or local background task.

Parameters:

| Type | Global Background, Local Background |
| :--- | :--- |
| Background Task | When global background type is selected, you can choose the job file created in global background. When local background type is selected, you can choose the job file created in local background. |

Example:

1.  NOP
2.  TIMER T=1
3.  PTHREAD_START[TEST]GLOBAL
4.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5.  END

Example Description: Start the global background job file TEST in the foreground.

### PTHREAD_END - Exit Thread

Format: PTHREAD_END [Instruction Name] [\$TEST\$] [Job File Name to Exit] GLOBAL, LOCAL [Global Background, Local Background].

Function: Close an already started background task.

Parameters:
| Type | Global Background, Local Background |
| :--- | :--- |
| Background Task | Exit the already started local or global background job file |

Note: The exit thread instruction can only exit job files that have been started in the foreground.

For example: If the started global background job task is [TEST], then when exiting the thread, selecting the global background job task as [TEST1] will not be able to exit the running [TEST].

Example:

1.  NOP
2.  TIMER T=1
3.  PTHREAD_START[TEST]GLOBAL
4.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5.  PTHREAD_END[TEST]GLOBAL
6.  END

Example Description: When the program reaches line 1, it starts the global background job file TEST. When it reaches line 5, it exits the running global background job file TEST.

### PAUSERUN - Pause Run

Format: PAUSERUN [Instruction Name] ALL, MAIN [Type of Program to Pause].

Function: Pause the main program and local background program.

Parameters:

| Type | ALL: Pauses started local background tasks and the main program. Started global background tasks will not pause. MAIN: Pauses the running main program. Started background tasks will not pause. LOCAL: Pauses started local background tasks. The running main program will not pause. |
| :--- | :--- |
| Program | When ALL or MAIN is selected, the input box is grayed out. When type is LOCAL, select the background program to pause. |

Example:

1.  NOP
2.  TIMER T=1
3.  PTHREAD_START[TEST]LOCAL
4.  PTHREAD_START[TEST1]GLOBAL
5.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
6.  PAUSERUN ALL
7.  END

Example Description: When the program reaches lines 3 and 4, it starts local and global background tasks. When it reaches the pause run instruction at line 6, the started local background task and main program pause, while the global background task continues normally.

### CONTINUERUN - Continue Run

Format: CONTINUERUN [Instruction Name] MAIN, LOCAL [Type of Paused Program].

Function: Continue running a paused main program or local background program.

Parameters:

| Type | MAIN: Continue running the paused main program. Already paused background programs will not continue. LOCAL: Run the paused local background program. |
| :--- | :--- |
| Program | When MAIN is selected, the input box is grayed out. When LOCAL is selected, you can choose which background program to continue running. |

Example:

1.  NOP
2.  TIMER T=1
3.  PTHREAD_START[TEST]LOCAL
4.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
5.  PAUSERUN ALL
6.  TIMER T=1
7.  CONTINUERUN MAIN
8.  MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
9.  END

Example Description: When the program starts a local background program during execution, at line 5, both the main program and local background program are paused. At line 7, the paused main program continues running, while the local background program remains paused.

![](assets/xmzceleyhqygfrbv_jjw3.png)

Special Note: If the Continue Run instruction selects the LOCAL program type, and a Pause Run instruction has been inserted, when the program reaches the Pause Run instruction, the servo status will be paused. Then clicking [Start] on the teach pendant will execute the Continue Run instruction. The current execution logic is that both the main program and local background program will continue running.

### STOPRUN - Stop Run

Format: STOPRUN [Instruction Name].

Function: Stop the running program. When the program reaches the stop run instruction, the servo powers off.

1.  NOP
2.  PTHREAD_START[TEST]LOCAL
3.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
4.  PAUSERUN ALL
5.  CONTINUERUN MAIN
6.  STOPRUN
7.  MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
8.  END

Example Description: When the program reaches line 6, the servo powers off and the program stops running.

### RESTARTRUN - Restart Run

Format: RESTARTRUN [Instruction Name].

Function: Restart the program above this instruction.

Example:

1.  NOP
2.  PTHREAD_START[TEST]LOCAL
3.  MOVL P0001 V=10mm/s PL=0 ACC=10 DEC=10 0
4.  PAUSERUN ALL
5.  RESTARTRUN
6.  TIMER T=1
7.  MOVL P0002 V=10mm/s PL=0 ACC=10 DEC=10 0
8.  END

Example Description: Each time the program reaches line 5, it restarts the program above this instruction.

### WINDOW - Popup Instruction

Format: WINDOW [Instruction Name] Variable I001 Assignment [Prompt Content] 1,2,3 [Number of Options] INT, GINT [Bound Variable] 11 [Option 1 Content] 1 [Option 1 Variable Value] 22 [Option 2 Content] 2 [Option 2 Variable Value] 33 [Option 3 Content] 3 [Option 3 Variable Value].

Function: When the instruction is executed, a popup window displays the entered prompt content. The number of buttons equals the number of options. Clicking a button stores the variable value into the bound variable.

Parameters:

![](assets/wxp49nlzwonwcwkpbee6m.png) 

| Parameter | Parameter Value |
| :--- | :--- |
| Prompt Content | Content displayed in the prompt box when executing the popup instruction. For example: Prompt content is "Assign value to variable I001", as shown. ![](assets/q8gujgyxnjcw9ytgx0mwv.png) |
| Number of Options | Set the number of options. When executing the popup instruction, the prompt box will display that many buttons. For example: Number of options is 3, as shown. ![](assets/swu8ochvw2sisvjdv4ouz.png) |
| Bound Variable | INT, GINT. Executing the popup instruction will store the corresponding variable value from the option box into the selected variable. |
| Option Content | Based on the set number of options and content, the popup instruction will display the content in the option boxes. For example: Set three options with content 11, 22, and 33, as shown. ![](assets/-hoyt1tjrxyyazbwrgalg.png) |
| Option Variable Value | When executing the popup instruction, clicking the corresponding option box will write the variable value into the selected variable. For example: Option 1 content 11, Option 1 variable value 1. When executing the popup instruction and clicking the 11 button, the selected variable will change to 1. |

Example:

1.  NOP
2.  WINDOW[\$Assign value to variable I001\$] GI001 3 [\$11\$]1 [\$22\$] 2
    [\$33\$] 3
3.  END

Example Description: Execute the popup instruction. Click button 1, GI001=1; click button 2, GI001=2; click button 3, GI001=3.

### PTHREAD_STATE - Thread Status

Format: PTHREAD_STATE [Instruction Name] MAIN, LOCAL, GLOBAL [Main Program, Local Background, Global Background] I/GI [Variable Type].

Function: Check the status of the currently executing thread program. Stopped equals 1, Paused equals 2, Running equals 3.

Parameters:

| Type | View the thread status of main program, local background, global background |
| :--- | :--- |
| Background Task | Main Program: When main program is selected, the input box is grayed out. Local Background, Global Background: View the status of the selected background task. |
| Variable Type to Store | Store the read status into a variable. |

Notes:

Thread status can read the current program status. When the main program is stopped or paused, the program cannot reach the thread status instruction, so the foreground cannot read the stopped or paused status of the main program. When the program starts normally, the main program status is running. Therefore, to read the main program status, insert the read thread status instruction in the background, then start this thread in the foreground.

Example:

1.  NOP
2.  PTHREAD_START[\$TEST\$]LOCAL
3.  TIMER T=1
4.  PTHREAD_STATE[\$TEST\$]LOCAL I002
5.  PAUSERUN[\$TEST\$]
6.  TIMER T=1
7.  PTHREAD_STATE[\$TEST\$]LOCAL I002
8.  PTHREAD_END[\$TEST\$]LOCAL
9.  TIMER T=1
10. PTHREAD_STATE[\$TEST\$]LOCAL I002
11. END

Example Description: Line 2 starts the local background thread. When the program reaches line 4, the thread status is read and stored in variable I002=3. At line 5, the started background thread is paused. At line 7, the thread status is read and stored in variable I002=2. At line 8, the started background thread is exited. At line 10, the thread status is read and stored in variable I002=1.

---

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: How to create a global background task?**

A: Steps to create a global background task:

1. Click Settings > Background Tasks to enter the background task interface.
2. Click [Global] to enter the global background task interface.
3. Click [New] to create a global background job file.
4. Click [Operation] to copy, delete, rename, and set auto-start for the currently selected job file.
5. Click [Start] to run the selected auto-start program in the background.
6. Set Auto-Start: Execute the auto-start program at boot time. Click [Start] on the global background interface to execute the auto-start program.

**Q: How to create a local background task?**

A: Steps to create a local background task:

1. Click Settings > Background Tasks to enter the background task interface.
2. Click [Local] to enter the local background task interface.
3. Click [New] to create a local background job file.
4. Click [Operation] to copy, delete, rename, and set auto-start for the currently selected job file.
5. Click [Start] to run the selected auto-start program in the background.
6. Set Auto-Start: Execute the auto-start program at boot time. Click [Start] on the local background interface to execute the auto-start program.

**Q: What precautions are there for the thread status instruction?**

A: Thread status can read the current program status. When the main program is stopped or paused, the program cannot reach the thread status instruction, so the foreground cannot read the stopped or paused status of the main program. When the program starts normally, the main program status is running. Therefore, to read the main program status, insert the read thread status instruction in the background, then start this thread in the foreground.

**Q: How to set auto-start for background tasks?**

A: Only global background tasks can be set for auto-start.

Setting method: On the global background interface, click [Operation], perform auto-start operation on the selected job file. This way, the auto-start program will be executed at boot time.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-09 | Initial version | MUZI165 |

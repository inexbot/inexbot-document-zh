---
title: "Special Process"
description: "INEXBOT controller special process operation manual."
author: "MUZI165"
date: "2026-07-06"
tags: ["INEXBOT Controller", "Special Process"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Special Process

## Usage Steps

1.  Click Settings → System Settings → Maintenance Mode to enter the maintenance mode parameter interface, then click Process Selection to select General Process. The interface is shown below.

![](./assets/wyiotrn9ps2dhrmhozcir.png)

![](./assets/zmjkaqalkned2dl3thaee.png)

2.  Write job files in General Process mode, as shown:

![](./assets/ev2hb2g5owzwsdqt08abn.png)

3.  Write the XML file and save the modified parameters.

The following example is for illustration only and has no practical meaning.

![](./assets/rotlsqvtn0_m1grt8-pda.png)

4.  Switch the process selection on the maintenance mode interface to Special Process.

5.  Click Process → Special Process → Import (import the XML file; the XML file must be placed in the importxml folder on the USB drive), select the file to import, and click "OK" (the XML file only stores point positions — which point is obtained, e.g., P0001, but does not store the actual position values; actual positions are stored by program instructions).

![](./assets/nrhzjp52ax-ynupgfni4z.png)

6.  After the job file is successfully imported, open the imported job file, as shown below:

![](./assets/vslbhvidf_eqn8gsqtqvo.png)

## Special Process Interface Description

![](./assets/w27xszighmsa-lh4hspaw.png)

1.  Import: Import XML file. The file format will be introduced later in this chapter.

2.  Open: Open the imported file, as shown below:

![](./assets/ruwzwzebolird-ecn2d-k.png)

- Return: Exit the current interface.

- Modify: Modify the defined position variable points. As shown below, move the robot to the target position and click [Assign Current Position to This Point] to successfully modify the point.

![](./assets/dhsqwk1tjvxh9veeoev1k.png)

- Fixture 1 Open: Controls global variable GB005. Press the Fixture 1 Open button to set GB005=1, release to set GB005=0.

- Fixture 2 Open: Controls global variable GB006. Press the Fixture 2 Open button to set GB006=1, release to set GB006=0.

- Local Variables: View position information of defined local variables. In teach mode, click [Local Variables] to modify target position points.

![](./assets/eeizj_jp7sh4zzke2c90g.png)

3.  Delete: Delete the selected special process program. Click [Delete], then click [OK] in the prompt dialog to delete the program. As shown:

![](./assets/bguhlylo8hj0qdktkynke.png)

4.  Return: Return to the process interface.

5.  Operations: Click [Operations] to copy or rename the currently selected program.

## Special Process XML File Format

The following figure shows the XML file format:

![](./assets/aa00d941666946cf8fff345232c78780.png) 

**Notes**  
- The red text portions are user-modifiable. When writing, `<operation>` and `</operation>` constitute one process skip.
- Motion instructions correspond to this type of code.


## Example Description

### Writing the Program

1.  The program is written in General mode. Create a new program (the program name must match the program name in the XML file code and the job file name. For example: if the new job name is "Special Process Program", then RelationJobName=\"Special Process Program\" in the XML file).

<!-- -->

2.  Open the "Special Process Program" job file and insert a process skip instruction, as shown below. (Process skip is only used for program cursor jumping in the Special Process interface; actual program execution follows the sequence defined in the program.)

![](./assets/pyy-7oehk7nakk1htiev4.png)

3.  When inserting motion instructions, the selected points should correspond to the points in the XML file.

### Writing the XML File

1.  Create a new XML file and edit it with Notepad++. As shown below:

![](./assets/ybw_vzetmofwnyii39jxi.png)

2.  After importing the XML file, switch the teach pendant from General Process mode to Special Process mode, then click "Project", select the "Special Process Program" job file, switch to Run mode, and click Start to run.

![](./assets/ma3geniakzqqlwdsftysj.png)

First line: As shown above, the Special Process Program interface displays as sequence number 1.

Corresponds to the first process skip in General Process mode: Instructions 1 and 2, robot moves to point P0001 (above the pickup point).

Second line: Displays as sequence number 2.

Corresponds to the second process skip in General Process mode: Runs instructions 3 and 4, robot moves to point P0002 (auxiliary point).

Third line: Displays as sequence number 3.

Corresponds to the third process skip in General Process mode: Runs instructions 6 and 7, robot moves to point P0003 (workpiece point).

Fourth line: Displays as sequence number 4.

Corresponds to the fourth process skip in General Process mode: Runs instructions 7 and 8, robot moves to P0004 (above the workpiece point).

## Program Execution

Switch the operation mode to Run mode, then press the "Start" key on the teach pendant to begin program execution.

![](./assets/q0aamfm7nxyc1fa24z2h0.png)

Set Count: The number of program execution cycles. The program stops after completing the set number of cycles.

Single Run: The program runs only once.

Loop Run: The program runs in an infinite loop.

Local Variables: During program execution, you can only view target point information but cannot modify points.

Note: The process skip instruction line numbers correspond to the sequence numbers in the Special Process Program interface. As shown below, the first instruction corresponds to line 3. When running the Special Process Program, it first skips to sequence number 3, then jumps to the first line to begin execution.

When process skips are not continuous, single-step execution of the Special Process Program is not possible.

![](./assets/3udzandhsmi6lzejatktu.png)

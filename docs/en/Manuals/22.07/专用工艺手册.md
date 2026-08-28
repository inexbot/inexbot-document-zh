---
title: "Dedicated Process Manual"
description: "Dedicated process operation and XML configuration guide, covering job file authoring, import flow and program run conventions."
author: "iNexBot"
date: "2026-04-16"
tags: ["Dedicated Process", "XML Configuration", "Job File", "Program Run", "Import Flow"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---


# Dedicated Process

## 1 Usage Steps

1.  Click Settings - Operation Parameters to enter the operation parameters screen, and select General Process as the process selection. The screen is shown below:

![](assets-Customed/veuhf5oaodedqo5w63xoz.png)

2.  Write the job file in general process mode, as shown:

![](assets-Customed/jau-ly8ceej7eqti58qnf.png)
3.  Write the XML file, modify the parameters and save;

The following example is for illustration only and has no actual meaning:

![](assets-Customed/h-wkxbvxox4uqtvr_0uyn.png)

4.  In the operation parameters screen, switch the process selection to Dedicated Process.

5.  Click Process - Dedicated Process - Import (import the xml file; the xml file must be placed in the importxml folder on the USB drive), select the file to import, and click "OK" (the XML file only stores points; the point obtained, such as P0001, is stored, but not the actual position of the point — the actual position of the point is stored by the program instructions).

![](assets-Customed/oqydqswhvpfs5udvxccsr.png)

6.  After the job file is imported successfully, open the imported job file, as shown below:

![](assets-Customed/ea9fdtlkyt51kh-ziucpy.png)

## 2 Screen Description

![](assets-Customed/wj1nqjmyb_ctpotfybg92.png)

### 2.1 **Import**

Import the xml file. The file format will be introduced later in this manual.

### 2.2 **Open**

Open the imported file, as shown below:

![](assets-Customed/wj5hh7rdykzaehb6v7kgm.png)

**Return**: Exit the current screen.

**Modify**: Modify the defined position variable points. As shown below, when the robot is moved to the target position, click [Assign Current Position to This Point] and the point is modified successfully.

**Fixture 1 Open**: Controls global variable GB005. While the Fixture 1 Open button is pressed, GB005=1; when released, GB005=0.

**Fixture 2 Open**: Controls global variable GB006. While the Fixture 2 Open button is pressed, GB006=1; when released, GB006=0.

**Local variables**: View the point information of the defined local variables. In teach mode, clicking [Local Variables] allows modifying the target position points.

![](assets-Customed/nadgoq5ec2nhflb66-7j1.png)

### 2.3 Delete

Delete the selected dedicated process program. Click [Delete], then click [OK] in the prompt box, and the program is deleted. As shown:

![](assets-Customed/vvut7lfkpsk8qyzo47jt3.png)

### 2.4 Return

Return to the process screen.

### 2.5 Operate

Click [Operate] to copy or rename the currently selected program.

## 3 Dedicated Process XML File Format

The figure below shows the XML file format:                                              

| ![](assets-Customed/hfvx52e9g3b6qttddtypm.png)      

| - The red text is the user-modifiable part. When writing, \<operation\> and \</operation\> form one process skip. |

| - Motion instructions correspond to this type of code. |

## 4 Example Description

### 4.1 Writing the Program

(1) The program is written in general mode. Create a new program (the program name of the new program must be consistent with the program name in the XML file code and the job file name. For example: if the new job name is "Dedicated Process Program", then RelationJobName=\"Dedicated Process Program\" in the XML file).

(2) Open the "Dedicated Process Program" job file and insert the process skip instruction, as shown below (the process skip is only used for cursor skipping on the program page in the dedicated process screen; the actual program run order is based on the order of instructions in the program).

![](assets-Customed/fdpkpglwhcvqodtmkogt4.png)

(3) When inserting motion instructions, the points selected should correspond to the points in the XML file.

### 4.2 Writing the XML File

(1) Create a new xml file and edit it with Notepad++. As shown below:

![](assets-Customed/hfvx52e9g3b6qttddtypm.png)
(2) After importing the XML file, switch the teach pendant from general process mode to dedicated process mode, then click "Project", select the "Dedicated Process Program" job file, switch to run mode, and click Start to run.

![](assets-Customed/fszz2ttevnkuluuuegpmy.png)

First line: As shown above, the dedicated process program screen displays it as sequence number 1.

Corresponds to the first process skip of the general process mode: instructions 1 and 2, the robot moves to point P0001 (above the pickup point).

Second line: Displays as sequence number 2.

Corresponds to the second process skip of the general process mode: runs instructions 3 and 4, the robot moves to point P0002 (auxiliary point).

Third line: Displays as sequence number 3.

Corresponds to the third process skip of the general process mode: runs instructions 6 and 7, the robot moves to point P0003 (workpiece point).

Fourth line: Displays as sequence number 4.

Corresponds to the fourth process skip of the general process mode: runs instructions 7 and 8, the robot moves to P0004 (above the workpiece point).

## 5 Program Run

Switch the operation mode to run mode and press the "Start" key on the teach pendant to start the program.

![](assets-Customed/n2kqbpor5diqz-zlela62.png)
**Set Count**: The number of times the program runs. After running the set number of times, the program stops running.

**Run Once**: The program runs only once.

**Loop Run**: The program runs in an infinite loop.

**Local variables**: While the program is running, the target point information can only be viewed and cannot be modified.

Precautions: The line numbers of the process skip instructions correspond to the sequence numbers on the dedicated process program screen. As shown below, the first instruction corresponds to line 3. When running the dedicated process program, it will first skip to line 3, then skip to the first line to start running the program.

If the process skips are not consecutive, the dedicated process program cannot be stepped through.

![](assets-Customed/h8e43tyivlyzd-e5cbynd.png)

## 6 Q&A

### Q1: What is the difference between dedicated process mode and general process mode?

A1: In general process mode, users can directly write and edit job files, while dedicated process mode configures process parameters and points by importing an XML file, which is suitable for standardized and batch production scenarios. In dedicated process mode, the program executes sequentially according to the process skips defined in the XML when running.

### Q2: How do I import an XML file?

A2: Place the XML file in the importxml folder on the USB drive, then click the "Import" button on the dedicated process screen, select the file and confirm the import. After import, the point information in the XML file is loaded into the system.

### Q3: How do I modify points while the program is running?

A3: In teach mode, the current robot position can be assigned to the target point via the "Modify" button. In run mode, only local variables can be viewed; points cannot be modified.

### Q4: What is the purpose of the process skip instruction?

A4: The process skip instruction is used to mark the execution order points of the program on the dedicated process program screen. In actual operation, the robot executes according to the instruction order in the program, not strictly according to the skip sequence numbers.

### Q5: What might be the reasons if the XML file import fails?

A5: Possible reasons include an incorrect XML file format, an incorrect file path (it must be in the importxml folder on the USB drive), a program name mismatch (RelationJobName in the XML must match the job file name), or system permission issues. It is recommended to check the file format and path and then re-import.

### Q6: Can the dedicated process program be stepped through?

A6: If the process skips are not consecutive, the dedicated process program cannot be stepped through. Ensure the process skip instructions are arranged consecutively to support the single-step debugging function.

### Q7: How do I delete an imported dedicated process program?

A7: On the dedicated process screen, select the program to delete, click the "Delete" button, then confirm the deletion in the prompt box. After deletion, the program is removed from the system.

### Q8: What is the role of global variables in the dedicated process?

A8: Global variables such as GB005 and GB006 are used to control external devices, such as fixture switches. On the dedicated process screen, pressing the corresponding button sets the variable value to 1 (open) or 0 (close) to control external IO.

### Q9: How is the number of program runs set?

A9: In run mode, you can set "Set Count" (specified number of runs), "Run Once", or "Loop Run" (infinite loop). The program stops automatically after running the specified number of times.

### Q10: What should I do if the robot cannot reach the target point?

A10: Check whether the point coordinates are correct. The point can be re-taught in teach mode. Ensure the robot safety zone settings are correct to avoid collisions. If necessary, contact technical support for debugging.

---
title: "Subprogram Functions"
description: "Subprogram function usage manual, including subprogram calls, parameter passing, and other detailed instructions."
author: "FDJAK"
date: "2026-06-29"
tags: ["Teach Pendant", "Subprogram", "Parameter Passing"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Subprogram Functions

"√" indicates support for this instruction.

| Instruction Type | Foreground | Global Background | Local Background | Subprogram |
| :--- | :---: | :----: | :----: | :----: |
| Subprogram | **√** | <br /> | <br /> | **√** |

### SUB_CALL — Subprogram Call Instruction

Format: SUB_CALL [Instruction Name] [$Subprogram$] [Called Program File Name] IN(12) [Input Parameters] OUT(GI001) [Output Parameters].

Function: Calls a subprogram project file. After the called subprogram finishes execution, it returns to the next line of the CALL instruction in the main program and continues execution.

To use the input and output parameter functions, the called subprogram must contain the "PARAM_DECLARATION" (parameter declaration) instruction to read the number of inputs and outputs. The "PARAM_DECLARATION" instruction must be inserted at the first line of the subprogram.

| Parameter | Description |
| :----------- | :----------- |
| CALL | Name of the called subprogram |
| Input Parameter Count | Obtains the input parameter count from the subprogram and displays it here<br>This parameter cannot be modified |
| Input Parameter Selection | Not clickable when input parameter count is 0<br><br>1. Input Parameter Count<br><br>- Based on the parameter count set in the subprogram's parameter declaration instruction, displayed here<br><br>- This parameter cannot be modified<br><br>- The table below displays the same number of rows as the count<br><br>2. Input Parameter Column<br><br>Displays parameter sequence numbers<br><br>3. Variable Column<br><br>- Value type can be: Not Used, Manual Entry, or Variable. Variables must be assignable to the corresponding subprogram variable. For example, if the subprogram variable is I001, only int, bool, double, manual entry, etc. types can be selected; string type cannot be assigned to I001<br><br>- When the default value of the corresponding input parameter in the PARAM_DECLARATION interface is Manual Entry or Variable, the [More] option in the CALL instruction's input parameter selection can choose "Not Used"<br><br>- When the default value is "Not Used", the [More] option cannot select "Not Used"<br><br>4. Notes Column<br><br>Displays the comment text entered in PARAM_DECLARATION + the corresponding variable in PARAM_DECLARATION |
| Output Parameter Count | Obtains the output parameter count from the subprogram and displays it here<br>This parameter cannot be modified |
| Output Parameter Selection | Not clickable when output parameter count is 0<br><br>1. Output Parameter Count<br><br>- Based on the parameter count set in the subprogram's parameter declaration instruction, displayed here<br><br>- This parameter cannot be modified<br><br>- The table below displays the same number of rows as the count<br><br>2. Output Parameter Column<br><br>Displays parameter sequence numbers<br><br>3. Variable Column<br><br>Value type can only be Variable. Variables must be assignable to the corresponding subprogram variable. For example, if the subprogram variable is I001, only int, bool, double types can be selected; string type cannot be assigned to I001<br><br>4. Notes Column<br><br>Displays the comment text entered in PARAM_DECLARATION + the corresponding variable in PARAM_DECLARATION |

Note: For main program A to call subprogram project file B, you must create subprogram project file B in [Settings] → [Function Parameters] → [Subprogram] → [New].

Example: Main program:

1.  NOP
2.  SET I001=12
3.  SET I002=22
4.  SUB_CALL[$Q11$]IN(I001,I002)OUT(D006,D007)
5.  TIMER T=1
6.  END

Example: Subprogram Q11:

1.  NOP
2.  PARAM_DECLARATION IN(D001=[-],D002=[-])OUT(10.0,11.0)
3.  TIMER T=0.5
4.  END

Example explanation: When the main program runs the subprogram call instruction, the values of input parameters I001 and I002 are received and used by the subprogram. When subprogram Q11 executes, I001=12 and I002=22. The output parameters are returned to the main program. After the subprogram finishes, D006=10 and D007=11 in the main program.

## AI Q&A for Retrieval

**Q: What is the SUB_CALL instruction?**

A: SUB_CALL is a subprogram call instruction used to call a subprogram project file. After the called subprogram finishes execution, it returns to the next line of the CALL instruction in the main program and continues execution.

**Q: What is the PARAM_DECLARATION instruction?**

A: PARAM_DECLARATION is a parameter declaration instruction used to declare the input and output parameters of a subprogram. It must be inserted at the first line of the subprogram.

**Q: How do I create a subprogram project file?**

A: Create the subprogram project file in [Settings] → [Function Parameters] → [Subprogram] → [New].

**Q: What types are available for input parameters?**

A: Input parameter value types can be: Not Used, Manual Entry, or Variable.

**Q: What types are available for output parameters?**

A: Output parameter value types can only be Variable.

**Q: What are the restrictions on variable assignment?**

A: Variables must be assignable to the corresponding subprogram variable type. For example, if the subprogram variable is I001, only int, bool, double, manual entry, etc. types can be selected; string type cannot be assigned to I001.

**Q: What are the restrictions on the [More] option for input parameter selection?**

A: When the default value of the corresponding input parameter in the PARAM_DECLARATION interface is Manual Entry or Variable, the [More] option in the CALL instruction's input parameter selection can choose "Not Used". When the default value is "Not Used", "Not Used" cannot be selected.

**Q: Can the input parameter count be modified?**

A: The input parameter count is obtained from the subprogram and cannot be modified.

**Q: Can the output parameter count be modified?**

A: The output parameter count is obtained from the subprogram and cannot be modified.

**Q: What content does the Notes column display?**

A: The Notes column displays the comment text entered in PARAM_DECLARATION + the corresponding variable in PARAM_DECLARATION.

**Q: Which run modes support subprogram functions?**

A: Subprogram instructions support Foreground and Subprogram run modes, but not Global Background or Local Background.

## Version History

| Version | Date | Changes | Author |
| :---- | :--------- | :--- | :------- |
| 1.0.0 | 2026-06-29 | Initial version | FDJAK |

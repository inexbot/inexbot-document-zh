---
title: "Syntax Check Function"
description: "Detect and locate syntax errors in teach pendant programming"
author: "jmz-09"
date: "2026-04-09"
tags: ["Syntax Check", "Programming", "Robot", "Operation"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Syntax Check Function

## Function Introduction

Function: Detects syntax errors. When an error is detected, the system locates the position of the error.

For example: Click Syntax Check, if only a palletizing start instruction is inserted without a corresponding end instruction, an error will be reported indicating a missing palletizing end instruction.

![](assets/-rnkxt0t70o3rfgincj4y.png)

Note: Does not check runtime errors.

All prompt messages are displayed as error messages.

## Operation Steps

1. In teach mode, open the job file to be checked.
2. Click the [Operation] button.
3. Select the [Syntax Check] option.
4. The system will automatically check for syntax errors in the job file.
5. If errors are found, the system will locate the error position and display the error message.
6. Modify the code based on the error message, then recheck until there are no errors.

## Testing Tips: How to Distinguish Runtime Errors from Syntax Errors

Add a delay instruction to the section being tested, switch to run mode, and run. Errors reported immediately are syntax errors. If the delay instruction executes before the error, it is a runtime error.

## Syntax Check Rules

### Check Order

- When the main program does not call threads, normal sequential checking is performed.
- When the main program calls background programs, normal sequential checking is performed. That is: Main program -> encounter background (enter background check) -> Main program.
- When the main program calls subprograms, the main program is checked first. After the main program has no errors, subprograms are checked sequentially. That is: Main program -> First called subprogram -> Second called subprogram -> ...
- Clicking syntax check on a background program checks the corresponding background program normally.

### Common Syntax Error Types

1. **Instruction Mismatch**: Such as missing palletizing end instruction, loop end instruction, etc.
2. **Parameter Error**: Instruction parameter format is incorrect or out of range.
3. **Undefined Variable**: Using a variable that has not been declared.
4. **Program Structure Error**: Such as excessive subprogram call nesting depth, loop nesting errors, etc.
5. **Syntax Format Error**: Instruction format does not conform to specifications.

## Precautions

1. Syntax check only verifies the syntactic correctness of the code, not the logical correctness.
2. Syntax check does not verify runtime errors, such as sensor signal anomalies, motion trajectory collisions, etc.
3. Check results are for reference only. The final program correctness still needs to be verified through actual operation.
4. For complex programs, it is recommended to perform syntax checks in modules to locate errors more quickly.

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: Syntax check failed but the program can run normally, why?**

A: Syntax check is based on static analysis and may produce false positives for issues that do not actually affect runtime. If the program runs normally, these false positives can be ignored.

**Q: Syntax check passed but the program errors during runtime, why?**

A: Syntax check only verifies the syntactic correctness of the code, not runtime errors. Runtime errors may be caused by external factors, such as sensor signal anomalies, motion trajectory collisions, etc.

**Q: How to quickly locate syntax errors?**

A: Syntax check will automatically locate the error position and display the error message. After modifying the code based on the error message, re-run the syntax check until there are no errors.

**Q: Does syntax check support all instructions?**

A: Syntax check supports all standard instructions, but may have limited support for custom instructions.

**Q: How fast is the syntax check?**

A: Syntax check is very fast. For programs of typical size, the check process usually completes within a few seconds.

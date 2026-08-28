---
title: "Instruction Execution Logic"
description: "Description of the execution logic and usage limitations of INEXBOT controller's trial run, single-step run, and reverse run modes."
author: "zhujintai"
date: "2026-04-14"
tags: ["INEXBOT Controller", "Teach Mode", "Trial Run", "Single-Step Run", "Reverse Run", "Instruction Execution Logic"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Instruction Execution Logic

## Trial Run Logic

1. While continuously holding the enable button, if the cursor is moved to another line during a trial run (without releasing the enable button), the program will not continue.
2. While continuously holding the enable button, if the cursor is moved to another line during a trial run (and the enable button is released), the program will continue from the line where the cursor is located.
3. Trial run is only available in teach mode.
4. Process trial run only moves to positions without actually executing the process; palletizing will be recorded.
5. When the robot needs to move from P001 to P002, the cursor will first jump to P002, then the robot will move to P002.

## Single-Step Logic

1. While continuously holding the enable button, if the cursor is moved to another line during single-step execution (without releasing the enable button), the program will continue from the line where the cursor is located.
2. While continuously holding the enable button, if the cursor is moved to another line during single-step execution (and the enable button is released), the program will continue from the line where the cursor is located.
3. Single-step is only available in teach mode.
4. Process single-step only moves to positions without actually executing the process.

## Reverse Logic

1. Reverse only supports motion instructions; unexecuted instructions will be skipped directly.
2. Reverse only supports single-step reverse; trial run cannot be reversed.
3. Reverse is only supported in teach mode.
4. When the robot needs to move from P002 to P001, the cursor will wait for the robot to move to P001, then jump to P001.

---

## Q&A

**Q: What are the usage limitations for trial run, single-step, and reverse?**

A:
- **Trial Run**: Only supports teach mode; process trial run only moves to positions without actually executing the process (except palletizing)
- **Single-Step**: Only supports teach mode; process single-step only moves to positions without actually executing the process
- **Reverse**: Only supports teach mode; only supports motion instructions, unexecuted instructions are skipped directly; only supports single-step reverse, trial run cannot be reversed

**Q: During trial run and reverse, what is the sequence between cursor movement and robot motion?**

A:
- **Trial Run**: If the robot is currently at P001 and the target is P002, the cursor will first jump to P002, then the robot will move to P002
- **Reverse**: If the robot is currently at P002 and the target is P001, the robot will first move to P001, then the cursor will jump to P001

**Q: What happens if the cursor is moved during a trial run without releasing the enable button?**

A: The program will not continue. You need to release the enable button, and then the program will continue from the line where the cursor is located.

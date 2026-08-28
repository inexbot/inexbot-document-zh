---
title: "Multi-Machine Coordination Instructions"
description: "How to use multi-machine coordination instructions, detailed description of each instruction"
author: "MUZI165"
date: "2026-04-13"
tags: ["INEXBOT", "multi-machine coordination", "instructions", "24.03"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# Multi-Machine Coordination Instructions

**Environment:** Synchronization between robots in multi-machine mode.

## task Instruction (Declare Coordination Parameters)

**Parameters:**

![](assets/hjzmoyvss0bced4vfkqkg.png)

**Coordination Task Number:** Range 1-999, can bind integer variables or select manual input.

**Axis Group:** Can select manual selection or bind integer variables.

1. Manual selection: Click the small checkbox in front of Robot 1, 2, 3, 4 below to select the corresponding robots.

2. Bind variable: Select Robot 1, variable value is 1; Select Robot 1 and 2, variable value is 3; Select Robot 1, 2, and 3, variable value is 7; Select Robot 1, 2, 3, and 4, variable value is 15. (Note: If the variable value is incorrect, running the instruction will cause an error.)

---

## wait_sync_task Instruction (Wait for Task Synchronization Point)

![](assets/2sd5ey0ijbxpwq8eqq-mx.png)

**Coordination Task Number:** Range 1-999, can bind integer variables or select manual input.

**Synchronization Semaphore:** Manual input only. Range: All keyboard characters.

## Example:

1. Robot 1 and 2 instruction parameters are consistent

![](assets/im7b1onmzt3x-wmrezxt5.png)

![](assets/czzgtfhsvvr2bx-pnglpo.png)

In multi-machine mode, when running the job files shown in the images for Robot 1 and 2, when Robot 1 reaches the wait for task synchronization point instruction and Robot 2 has not yet reached the wait for task synchronization point, Robot 1 will stay at the wait for task synchronization point instruction position until Robot 2 also reaches the wait for task synchronization point instruction. Only then will Robot 1 and 2 continue to the next instruction. Otherwise, they will remain at the wait for task synchronization point instruction.

2. Robot 1 and 2 instruction parameters are inconsistent

![](assets/gl8cp-yvh5tid8008x0mt.png)

![](assets/wi26cyy5yuivddy9i-6ho.png)

The synchronization semaphore in Robot 1's wait for task synchronization point instruction is T1, and the synchronization semaphore in Robot 2's wait for task synchronization point instruction is T2. When Robot 1 and 2 reach the wait for task synchronization point instruction simultaneously or sequentially, **because the synchronization semaphores are inconsistent,** Robot 1 and 2 will remain at the wait for task synchronization point instruction and will not continue.

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What is the purpose of the task instruction?**

A: The task instruction is used to declare coordination parameters, enabling synchronization between robots in multi-machine mode.

**Q: What is the purpose of the wait_sync_task instruction?**

A: The wait_sync_task instruction is used to wait for task synchronization points, enabling synchronous waiting between robots in multi-machine mode.

**Q: What are the requirements for the synchronization semaphore in the wait_sync_task instruction?**

A: The synchronization semaphore can only be manually entered, and the range is all keyboard characters.

**Q: What is the usage environment for multi-machine coordination instructions?**

A: Multi-machine coordination instructions need to be used in multi-machine mode, for synchronization and coordination between robots.

## Related Resources

- [Multi-Machine and Dual-Robot Collaboration](Multi-Machine-and-Dual-Robot-Collaboration.md)

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-13 | Initial version | MUZI165 |

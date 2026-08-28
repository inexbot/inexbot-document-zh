---
title: "New Dual-Robot Function"
description: "New dual-robot function"
author: "liweiqi"
date: "2026-07-06"
tags: ["New Dual-Robot Function"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# New Dual-Robot Function

**First set up two robots (different types are also acceptable)**

## Dual-Robot Coordinated Mode Configuration

1.  Coordinated mode requires Robot 1 and Robot 2 to each calibrate their tools

2.  Settings / Robot Parameters / Calibrate World Coordinate System

![](assets/11wgjttggjn9aoniol3wa.png)

Reference Robot: Used as the reference, generally the master.

Calibration Robot: Calibrated relative to the reference robot, generally the slave.

Error: Error should generally not exceed 10; otherwise, recalibration is required.

3.  Click [Calibrate] to enter the calibration interface

![](assets/1xc8mzaskbmxweenetxb7.png)

Modify: Click Modify to calibrate

Clear: Clear calibration parameters

Calculate: Calculate calibration results

Note: Calibration points are generally 6 or 9, using x, y, z averages. For example, moving x 3 times, y 3 times, z 3 times equals 9 points. Theoretically, more points yield more accurate results.

4.  After calibration is complete, in the Calibration Robot's Settings / User Coordinate Calibration interface, select [Coordinated Coordinate System] for [Type], [Robot] for [Robot], and [1] for the number

User coordinates set as coordinated coordinate system operate in coordinated mode; selecting other settings for static coordinate system operates in single-robot mode.

![](assets/xvpcuo6lcelqvadfpyblc.png)

5.  After setup, switch to Robot 1, power on and jog Robot 1. Robot 2 will then follow Robot 1's motion.

> In coordinated mode, Robot 2 follows Robot 1's trajectory direction while executing its own taught path.
>
> Robot operation effect in coordinated mode is shown below.

![](assets/ij6phhmbrs6mzed1ksym6.png)

## Run Mode Coordinated Operation

> Prerequisites: Robot 1 is the reference robot, Robot 2 is the calibration robot.

1.  Create Robot1 and Robot2 job files.

2.  Insert motion instructions in Robot 1.

3.  Insert switch user coordinate instruction in Robot 2 (the coordinate to switch to is the coordinated user coordinate).

> Because the user coordinate switch in Robot 2 executes immediately, Robot 2 will end its program. Three methods can be used to maintain coordination with Robot 1.

a.  Enable loop mode for Robot 2.

b.  Estimate Robot 1's motion time and add a delay instruction.

c.  Use multi-robot coordination instructions — insert wait-for-sync points in both Robot 1 and Robot 2.

![](assets/mex8lbdv33wc3pghazewg.png)

![](assets/qs6-u_49eg4bdgmi5d1sf.png)

![](assets/b5qukrwtn_it5prucjwpv.png)

4.  Robot1 and Robot2 servo ready.

5.  Switch to Run mode and select RobotAll.

6.  This enters the multi-robot dedicated interface. Click Start to run.

![](assets/0-bum7v9zopulmeoom1tt.png)

Interface Button Functions

**Select Program**: Select the job files for Robot 1 and Robot 2 to run.

**Start**: Start running the programs selected for Robot 1/Robot 2.

**Stop**: Stop Robot 1 / Stop Robot 2.

**Servo Stop / Servo Ready**: Stop or ready the servo for Robot 1 / Robot 2.

**Clear Error**: Clear errors for Robot 1 / Robot 2.

To start both robots simultaneously, press [Start] on the teach pendant.

To pause both robots simultaneously, press [Stop] on the teach pendant.

To start only Robot 1, click [Robot 1], then click [Start] as shown. Robot 1 begins working; click [Stop] to pause Robot 1.

To start only Robot 2, first click [Robot 2], then click [Start]. Robot 2 begins working; click [Stop] to pause Robot 2.

## Single-Robot → Coordinated → Single-Robot

> Prerequisites: Robot 1 is the reference robot, Robot 2 is the calibration robot.

1.  Create Robot1 and Robot2 job files.

2.  Insert the required motion instructions for single-robot operation on each side. Ensure the last instruction on both sides is the dual-robot start point. Robot 2 must ensure the coordinated user coordinate system is not active during operation.

3.  Due to speed differences, Robot 1 and Robot 2 may not reach the dual-robot start point simultaneously. Insert multi-robot coordination instructions — add wait-for-sync points in both Robot 1 and Robot 2 to ensure both machines start the coordinated state simultaneously.

4.  Insert motion instructions in Robot 1.

5.  Insert switch user coordinate instruction in Robot 2 (the coordinate to switch to is the coordinated user coordinate).

6.  After the coordinated section ends, insert multi-robot coordination instructions — add wait-for-sync points in both Robot 1 and Robot 2. Everything before the sync point is coordinated motion.

7.  Switch to single-robot: Robot 1 inserts instructions normally; Robot 2 inserts a switch user coordinate instruction (this must be a static user coordinate system), then continues with normal motion instructions.

8.  Robot1 and Robot2 servo ready.

9.  Switch to Run mode and select RobotAll.

10. This enters the multi-robot dedicated interface. Click Start to run.

Reference job file examples are shown below:

![](assets/ccib1oixvhcfzyi3_evzg.png)

![](assets/5ufsl-oodabbxch2w01zk.png)

Robot 1:

![](assets/evrhwcifjoh5scsrmjqz1.png)

![](assets/zfdhwmodr_sdllrs0atux.png)

Robot 2:

![](assets/76b_pkjin-g7jiks2aeeb.png)

![](assets/wsqmfed-jfv_s7xznss1k.png)

## Dual-Robot with External Axis Motion

![](assets/vwh8a96ax4dgdxkn2bxph.png)

![](assets/djo684zcbtffb1jkubemj.png)

## AI Q&A for Retrieval

**Q: What is the first step in dual-robot coordinated mode configuration?**

A: First, calibrate the tools for Robot 1 and Robot 2 separately, then enter the Settings / Robot Parameters / Calibrate World Coordinate System interface. Identify the reference robot (master) and calibration robot (slave), and calibrate the world coordinate system. The calibration error must be within 10; otherwise, recalibration is required.

**Q: How do I switch from dual-robot coordinated mode to single-robot mode?**

A: In the calibration robot's (usually Robot 2) Settings / User Coordinate Calibration interface, switch [Type] from [Coordinated Coordinate System] to another static coordinate system to switch to single-robot mode. To reconnect, switch back to [Coordinated Coordinate System] and complete the related configuration.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-07-06 | Initial version | liweiqi |

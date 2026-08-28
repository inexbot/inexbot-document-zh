---
title: Programming-Free Teaching System Spraying Industry Solution
category: Spraying
language: en-US
---

## Pain Points of Traditional Spraying Applications

In spraying applications, traditional industrial robots rely on offline programming and manual teach pendant teaching, which has the following core pain points:

### High Initial Investment and Entry Barrier

High capital cost: professional offline programming software must be purchased or leased, which is expensive.

High personnel barrier: operators must simultaneously possess robot programming knowledge, CAD model processing capabilities, and spraying process experience. Such compound talent is scarce and highly paid. The training cycle is long, and ordinary workers cannot get started quickly.

### Long Development Cycles and Slow Response

Cumbersome process: every step from obtaining accurate 3D models, importing software, trajectory planning, collision detection, to process simulation is time-consuming. For simple or one-off tasks, programming time can far exceed actual spraying time.

No "what you see is what you get": the program is entirely generated in a virtual environment. Any minor on-site difference (such as fixture wear, workpiece tolerance) may cause the spraying result to fail to meet standards, requiring re-adjustment and creating debugging cycles.

### Poor Flexibility and Weak Adaptability

Difficult to modify: when product design changes or model changeover occurs, even small changes often require reprogramming, unlike programming-free teaching where the robot can simply be "guided through the path again".

Dependence on precise initial conditions: heavily dependent on the absolute positioning accuracy of workpieces, fixtures, and robots. If cumulative errors exist in on-site positioning, the perfect offline-generated program may be completely unusable.

### Unfriendly to Small-Batch/Customized Production

For one-off, small-batch, or highly customized products, the total time cost of programming and debugging may exceed manual spraying, losing the meaning of automation. Programming-free teaching can respond quickly.

## Current Situation and Trends of the Spraying Industry

Spraying is an essential process across all industries, widely used in automotive parts, home appliances, 3C electronics, hardware, ceramics, and other industries.

In recent years, with accelerated consumption upgrading and branding trends, the market has placed higher demands on spraying appearance quality, production efficiency, and flexibility. Therefore, "multi-variety, small-batch, fast delivery" is gradually becoming the mainstream production model.

Traditional spraying processes mainly rely on manual experience and manual programming/teaching of industrial robots, which are prone to problems such as poor consistency, difficult programming, and low efficiency, and can no longer meet market demand.

## INEXBOT Programming-Free Teaching System

In response to the pain points of the spraying industry, INEXBOT has launched a programming-free teaching system. Based on the Linux + C/C++ + Qt technology stack, the system is equipped with a high-performance motion controller and industrial touchscreen integrated hardware, supports EtherCAT bus communication, and has millisecond-level real-time response capability.

The system uses a "hand-by-hand guided teaching" approach to replace traditional programming. The operator only needs to hold the robot end-effector and walk through the actual spraying path once; the system automatically records the trajectory, speed, and posture without writing any code, truly achieving zero programming threshold.

The system adapts to multiple industrial robot brands and models, covering process scenarios such as spraying, glue coating, and oil coating, and is widely used in hardware part spraying, toy spraying, and electronic product coating.

### System Architecture

The system adopts a modular architecture of motion controller + touchscreen + robot + sensor. The controller serves as the core hub, communicating in real time with robot joints, I/O modules, and sensors via the EtherCAT bus, while connecting to the industrial touchscreen to provide a human-machine interaction interface. It supports connecting external devices such as conveyors, spray gun control, and vision positioning to build a complete automated spraying workstation.

## Core Software Functions

### Trajectory Recording and Playback

![Home screen](https://api.inexbot.com/uploads/194a718526ba3ce2_pdf_0005_01_8da8b7cbf2.png)

The system home screen integrates trajectory recording, playback, and selection functions. Users can directly create a new trajectory or select an existing one, enter teaching mode via the "Record" button, guide the robot by hand through the spraying path, and save it. During playback, the running data of each axis and trajectory duration can be monitored in real time.

The system supports one-click import and export of trajectories. After completing a perfect trajectory, it can be quickly copied to all similar devices, greatly simplifying batch deployment and production line changeover.

### Quick Calibration

![Calibration screen](https://api.inexbot.com/uploads/194a718526ba3ce2_pdf_0005_00_eba3bca402.png)

The system provides multiple calibration methods from 1-point to 4-point, supporting tool coordinate system (TCP) calibration and workpiece coordinate system calibration. It automatically calculates linear error and angular error to ensure precise alignment of spraying paths between different workpieces. Combined with the automatic positioning function, calibration can be completed within minutes.

### Trajectory Management

![Trajectory management screen](https://api.inexbot.com/uploads/194a718526ba3ce2_pdf_0005_03_5aa2aa36b9.png)

The trajectory management module supports search by trajectory name, multi-select batch operations, deletion, import/export, and other functions. Each trajectory record includes trajectory duration and creation time, with paginated browsing. For multi-variety production scenarios, a trajectory recipe library can be pre-established and called with one click during product changeover.

### S-Curve Velocity Planning

![S-curve algorithm](https://api.inexbot.com/uploads/194a718526ba3ce2_pdf_0005_04_fbf2629d02.png)

The system has a built-in S-curve velocity planning algorithm. Through precise control of jerk, the motion process is divided into seven stages: increasing acceleration, constant acceleration, decreasing acceleration, constant velocity, increasing deceleration, constant deceleration, and decreasing deceleration, achieving smooth velocity transitions. Compared with trapezoidal velocity curves, the S-curve can significantly reduce mechanical impact and vibration, improving the smoothness of spraying trajectories and coating thickness uniformity.

It also supports multiple trajectory interpolation methods such as linear, circular arc, NURBS, and B-spline, and has corner rounding transition and adaptive interpolation sampling functions. In areas with high curvature, sampling points are automatically densified to ensure the accuracy and efficiency of complex surface spraying.

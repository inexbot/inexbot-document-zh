# INEXBOT Robot Automatic Calibration System NexAutoCali

NexAutoCali is an automatic robot calibration system independently developed by INEXBOT. It integrates laser tracker measurement, robot motion control, automatic calibration-point planning, and algorithm computation into one, achieving end-to-end automation from measurement-point auto-planning to automatic operation and automatic measurement.

![NexAutoCali Product Image](assets/标定系统界面1.png)

## Product Features

### Full-Parameter Calibration

Full-parameter calibration is currently the optimal solution for high-fidelity alignment of the robot's theoretical model with the physical entity, unlocking the accuracy limits inherent in the equipment itself.

In a flexible-arm test case, full-parameter calibration with the INEXBOT automatic calibration system improved TCP accuracy from 3mm to 0.5mm — a **500%** improvement.

### Fast

- Simplified operation logic reduces training and usage effort
- Quick-mount structural design: software and hardware environment preparation in just **5 minutes**
- Optimized calibration workflow: a standard **50-point calibration** typically takes **<5 minutes**

### Visualized

Multiple chart types display real-time coordinate positions, trajectory positions, and repeatability errors across test rounds, improving ease of use.

### Fully Automatic

Leveraging INEXBOT's integrated drive-control advantages, the system connects the entire automated workflow — measurement-point auto-planning, automatic operation, and automatic measurement — greatly improving convenience and reliability.

### Highly Integrated

The system integrates measurement-point planning, trajectory planning, motion control, and robot parameter read/write into one suite, so a single software package can complete all calibration and measurement work.

### Full Featured

- Built-in robot calibration modules: gear ratio calibration, zero-point calibration, link length calibration, and full-parameter calibration
- Built-in **14-item** robot performance indicator test module
- Fully compliant with the national standard **GB/T 12642—2013 / ISO 9283:1998** (version-independent), with a full package provided

### High Compatibility with Robots / Trackers

Adapted to important industrial robot models including seven-axis collaborative, six-axis industrial, and six-axis collaborative robots, with custom adaptation available per user requirements. It is also adapted to multiple laser tracker models from API and Sinowon (Zhongtu).

### High Measurement Accuracy

By combining high-precision laser trackers such as API and Sinowon, the system accurately measures the robot body's actual errors. After calibration, the round-point accuracy error can be **improved by 3 times**.

## Main Functions

### Highly Integrated All-in-One System

The system integrates laser tracker measurement, robot motion control, calibration/measurement-point auto-planning, fully automatic calibration/test process control, and algorithm computation into one. Combined with the laser tracker's lightweight design, built-in power supply, and built-in WiFi, it enables rapid operation, greatly improving work efficiency and lowering the usage threshold.

![Calibration Device Test Environment](assets/标定仪测试环境.png)

### High Flexibility

While remaining easy to use, the system allows free configuration of calibration point count, test rounds, load, speed, dwell time, and other parameters to suit on-site testing needs.

### Motion Control Module

The system integrates robot position planning and motion control modules. During testing, no user programming is required — all operations can be completed within the laser calibration system, reducing the user's learning curve and commissioning cycle while greatly improving test stability and efficiency.

### Measurement-Point Generation and Test Environment Management

The system can automatically connect to the robot, read robot parameter information, and automatically plan the measurement points needed for calibration. It also has a built-in test environment management module for unified management of robot information, control system information, test environments, test instrument information, load information, and speed information. Test reports support exporting of the test environment.

## Adapted Tracker Manufacturers

| Manufacturer | Model |
|------|------|
| API  | Radian Plus |
| API  | Radian Pro   |
| API  | Radian Core  |

> More tracker brands and models are continuously being adapted. If needed, please contact INEXBOT technical support.

## Calibration Workflow Overview

```
Connect robot → Read parameters → Auto-plan measurement points → Run test automatically → Data acquisition → Algorithm computation → Generate calibration results
```

1. **Connection and configuration**: The system automatically connects to the robot controller and reads the robot model parameters
2. **Measurement planning**: Automatically generates the measurement point positions and motion trajectories needed for calibration
3. **Automatic execution**: The laser tracker automatically tracks the target sphere, and the system automatically drives the robot to each measurement point
4. **Data processing**: Acquires actual position data and computes error compensation values via the full-parameter calibration algorithm
5. **Result output**: Generates a calibration report containing accuracy improvement data and before/after calibration comparison

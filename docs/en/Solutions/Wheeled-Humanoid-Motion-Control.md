---
title: Wheeled Humanoid Robot Motion Control System
category: Embodied Humanoid
language: en-US
---

**Open · Efficient · Intelligent**

**Document version**: V1.0
**Hardware platform**: INEXBOT industrial robot controller (RK3588 platform)
**Application fields**: dual-arm collaboration, human-robot collaboration, robot algorithm verification, multi-machine coordinated control, advanced control theory research, industrial manufacturing, medical care, commercial services, logistics and warehousing, education and scientific research

---

## 1. Company Profile

INEXBOT Technology is a technology company focused on the R&D of robot motion control systems, with self-developed advanced control algorithms and rich industry experience, committed to promoting the application and implementation of wheeled humanoid robot technology in industrial and service fields. The INEXBOT motion control system can achieve precise control of key parts such as dual arms, waist, and neck, endowing robots with excellent flexibility and adaptability.

---

## 2. Product Overview

The INEXBOT wheeled humanoid robot motion control system is designed for complex scenarios, supporting multiple configuration types to meet different application needs. The platform is based on the **ABOX-6116 industrial controller (Rockchip RK3588 + Debian 11 / Ubuntu 20.04)** as the hardware foundation, standardly equipped with dual robot control engines (total capacity of 14 axes or 12 axes, expandable up to 32 axes), opening the full-chain NexDroid OpenAPI interfaces, supporting users' complete autonomous algorithm development from the joint control layer to the trajectory planning layer. The system adopts a modular design philosophy with strong compatibility, and can seamlessly interface with third-party wheel bases, dexterous hands, and vision systems.

The platform is oriented toward universities, research institutes, and enterprise laboratories, providing a highly real-time, highly open hardware foundation and software ecosystem for scientific research scenarios such as dual-arm coordinated motion control, advanced dynamics algorithms, and intelligent control strategies, as well as practical implementation in industrial and service fields.

---

## 3. Product Features

### 3.1 Dual-Arm Collaborative Control System

- Supports two dual-arm configuration schemes:
  - Dual six-axis collaborative robots (2×6 axes) configuration
  - Dual seven-axis collaborative robots (2×7 axes) configuration
- **Seven-axis configuration**: the wrist supports SRS structure (spherical joint - revolute joint - spherical joint) or cross-cross structure, flexibly selectable according to operational requirements
- Equipped with high-precision trajectory planning and collision detection functions
- Supports dual-arm collaborative operation modes, enabling:
  - Symmetric synchronized motion
  - Asymmetric collaborative operation
  - Object handover and transfer
  - Force-position hybrid control

### 3.2 Waist Control System

- Provides multiple configuration options:
  - 1 axis (rotation)
  - 3 axes (X/Y/Z translation)
  - 4 axes (4 serial joints)
  - 6 axes (3 translation + 3 rotation)
- Supports dynamic balance compensation
- Has load-adaptive capability

### 3.3 Neck Control System

- Single-axis rotation design
- Expandable to multi-DOF configurations
- Supports vision following function

### 3.4 Chassis Control System

| Item | Description |
|------|------|
| Chassis structure | Dual differential wheels + auxiliary caster wheels |
| Communication protocol | CAN bus, directly controls the differential wheels |

---

## 4. Application Scenarios

The INEXBOT wheeled humanoid robot motion control system is widely used in the following fields:

### 4.1 Industrial Manufacturing

- **Automotive assembly lines**: can complete precision operations requiring dual-arm collaboration such as door installation and dashboard assembly
- **Electronics manufacturing**: suitable for fine operations such as circuit board assembly and component welding
- **Machining**: can perform auxiliary work such as tool change and part handling

### 4.2 Medical Care

- **Surgical assistance**: high-precision dual arms can assist doctors in precision operations
- **Rehabilitation training**: can provide stable support and assistance
- **Medicine dispensing**: precise operations in sterile environments

### 4.3 Commercial Services

- **Catering service**: completes tasks such as tableware placement and beverage preparation
- **Hotel reception**: provides luggage handling and guidance services
- **Retail display**: product display and interactive demonstrations

### 4.4 Logistics and Warehousing

- **Shelf restocking**: dual arms collaboratively complete cargo grasping and placement
- **Package sorting**: cooperates with vision systems for efficient sorting
- **Heavy material handling**: the waist support system can bear larger loads

### 4.5 Education and Scientific Research

- As a teaching and research platform, the robot can be used for experiments and development in fields such as artificial intelligence and robotics

### 4.6 Dual-Arm Assembly

- Master arm holds the workpiece, slave arm holds the tool
- Compliant assembly strategy based on torque sensing
- Force-position hybrid control

### 4.7 Dual-Arm Handling

- Collaborative grasping of large-size/irregular workpieces
- Master-slave posture-constrained motion
- Dual-arm load distribution optimization

### 4.8 Dual-Arm Polishing/Buffing

- Master arm positions the workpiece, slave arm performs polishing
- Constant force tracking control
- Trajectory coordination compensation

### 4.9 Algorithm Verification Platform

- Rapid deployment of new control laws (MPC/RL/adaptive)
- Dynamics parameter identification
- Dual-arm impedance/admittance control
- Human-robot physical interaction (pHRI) algorithms

---

## 5. Product Advantages

### 5.1 High-Performance Processing Platform

- Equipped with **Rockchip RK3588** processor (8 cores, 4×Cortex-A76 + 4×Cortex-A55, up to 2.4GHz, built-in 6 TOPS NPU, expandable to 20 TOPS), see [Section 7: Hardware Specifications](#7-hardware-specifications)
- Onboard LPDDR5 8GB memory + 64GB eMMC storage
- Fanless aluminum-magnesium alloy body, operating temperature -20°C ~ 70°C

### 5.2 Real-Time Motion Control

- Uses EtherCAT communication, high speed and high precision, slave station synchronization jitter <20μs
- Control cycle up to 1ms (position loop/speed loop), minimum 250μs
- Self-developed motion control algorithm, supports dual-arm collaboration

### 5.3 Flexible Configuration

- Waist supports multiple axis configurations (1-6 axes) to suit different task needs
- Dual arms compatible with six-axis and seven-axis robots, enhancing operational diversity
- Dual arms with independent configurations, supporting serial multi-joint, SCARA, and custom configurations
- DH parameters open and configurable, supporting online modification

### 5.4 Excellent Openness and Compatibility

**Communication protocols:**

- EtherCAT (master/slave)
- PROFINET RT/IRT
- Ethernet/IP
- Modbus TCP/RTU
- CANopen
- OPC-UA

> Physical interfaces are detailed in [Section 7.2](#72-communication-and-control-interfaces), and software protocols in [Section 8.3](#83-communication-protocols).

**Third-party device access support:**

- Wheeled chassis (via CAN bus)
- Dexterous hands (supporting Modbus/TCP, Modbus/RTU protocols)
- Vision systems (EtherNet)

**Standard API interfaces provided:**

- ROS/ROS2 support
- Python, C#, C++ SDK

---

## 6. Motion Control System Specifications

### 6.1 Basic Parameters

| Item | Specification |
|------|------|
| Dual-arm axes | Dual arms total 14 axes (left arm 7 axes + right arm 7 axes), or dual arms total 12 axes (left arm 6 axes + right arm 6 axes) |
| Maximum axes | 32 axes (total system capacity, including external axes) |
| Control cycle | 1ms (position loop/speed loop), minimum 250μs |
| EtherCAT synchronization | Distributed clock (DC), slave station synchronization jitter 20μs |
| Multi-axis synchronization error | < 50μs |
| Interpolation methods | PTP / Linear / Arc / Spline curve / FLYBY |
| Coordinate systems | Joint coordinate system, robot coordinate system, tool coordinate system, user coordinate system |
| Robot configuration | Dual arms with independent configurations, supporting serial multi-joint, SCARA, custom configurations; seven-axis wrist supports SRS / cross-cross structures |
| DH parameters | Open and configurable, supporting online modification |
| Repeat positioning accuracy | ±0.005mm |
| Maximum motion speed | 2m/s |
| Maximum acceleration | 5m/s² |
| Force control resolution | 0.1N |
| Torque control accuracy | ±0.5% FS |

### 6.2 Dual-Arm Collaboration Modes

| Feature | Description |
|------|------|
| Collaboration modes | Dual robot coordination (master-slave/loose coupling/tight coupling) |
| Synchronization accuracy | Fully synchronized start/stop of both robots, based on EtherCAT distributed clock |
| Interference zones | Supports dual-arm interference area setting and collision protection |
| Coordinate system association | Supports defining slave arm workspace under master arm base coordinate system |
| Coordination instructions | Dual-robot point-to-point (CoordPTP), dual-robot linear (CoordLine), dual-robot arc |
| Independent operation | Each robot's parameters/programs/variables are independent, and synchronized start/stop is also supported |

### 6.3 Control Modes

| Mode | Support Level | Description |
|------|----------|------|
| Joint position mode | Position loop | Given joint angle target, the controller plans the trajectory and executes it |
| Joint velocity mode | Speed loop | Directly issues joint velocity commands, open-loop or closed-loop both supported |
| Joint torque/current mode | Current loop | Directly issues joint torque commands (requires matching servo support) |

---

## 7. Hardware Specifications

### 7.1 Controller

| Item | Parameter |
|------|------|
| Model | ABOX-6116 industrial controller |
| CPU | Rockchip RK3588 8-core (4×Cortex-A76 + 4×Cortex-A55, up to 2.4GHz) |
| GPU | Mali-G610 MC4 |
| NPU | 6 TOPS (INT8); optional M.2 RK1820 compute card expansion to 20 TOPS |
| Memory | Onboard LPDDR5 8GB |
| Storage | Onboard 64GB eMMC; optional M.2 2280 SATA3 SSD |
| Network | 5× Gigabit Ethernet (4× Intel i210 + 1× RTL8211F) |
| Wi-Fi / BT | Onboard 2.4G/5G dual-band Wi-Fi 6 + Bluetooth 5.0 |
| 4G LTE | 1× Mini-PCIe, supports LTE 4G module (optional) |
| Operating system | Ubuntu + INEXBOT control system |
| Power supply | DC 12~24V ±10%, power consumption ≤20W, overcurrent/overvoltage/reverse connection protection |
| Cooling method | Fanless design, aluminum-magnesium alloy shell + aluminum profile heat dissipation |
| Dimensions | 170mm × 112mm × 48mm (excluding bracket) |
| Weight | 1.5kg |
| Mounting method | Wall mount / DIN-Rail guide rail mounting |
| Operating temperature | -20°C ~ 70°C |

### 7.2 Communication and Control Interfaces

| Interface | Quantity | Description |
|------|------|------|
| Gigabit Ethernet | 5 ports | 4× Intel i210 + 1× RTL8211F, 1 port used as EtherCAT master station, supporting distributed clock (DC) synchronization |
| USB 3.0 | 2 ports | 1 port multiplexed as OTG, single port supports 5V@2A |
| USB 2.0 | 1 port | Peripheral access |
| HDMI | 1 port | Supports up to 8K (7680×4320) output |
| RS232 | 2 channels | Isolated, 3.5mm Phoenix terminals |
| RS485 | 2 channels | Isolated, 3.5mm Phoenix terminals, supports Modbus RTU |
| Isolated DI | 8 channels | Dry/wet contact auto-switching, isolation voltage 2500Vrms |
| Isolated DO | 8 channels | NPN/PNP switchable (DIP switch), isolation voltage 2500Vrms |
| PWM output | 4 channels | Light source control, supports external hardware trigger (DC 5~24V), single channel max 1A (optional) |
| Micro SIM | 1 port | 4G LTE module SIM card |

### 7.3 Servo Drive System (Selection Recommendation)

| Solution | Recommended Model | Description |
|------|----------|------|
| EtherCAT servo | EtherCAT joint modules compliant with CIA402 standard | - |
| Encoder type | Supports absolute encoders | — |

### 7.4 Teach Pendant (Optional)

| Item | Parameter |
|------|------|
| Model | T30 robot-dedicated teach pendant |
| Screen | 8-inch TFT full touchscreen, 1024×600 |
| Operating system | Linux + QT |
| Functions | Teach programming, parameter configuration, status monitoring, program debugging |

### 7.5 Environmental Requirements

| Item | Requirement |
|------|------|
| Power supply | DC 12~24V ±10% (≤20W, 12V 40W adapter recommended) |
| Operating temperature | -20°C ~ 70°C |
| Servo rated current | Selected according to the manipulator arm specifications |
| Host computer | Windows / Linux workstation, Gigabit Ethernet port |

---

## 8. Software Platform Specifications

### 8.1 System Architecture

![System architecture diagram](https://api.inexbot.com/uploads/architecture_9fead7c487.png)

### 8.2 Secondary Development Interfaces (NexDroid OpenAPI)

**Dual-arm control:**

| Interface Category | Content | Development Language |
|----------|------|----------|
| Joint control | Joint position/velocity/torque command issuance | C#, Python, TCP Socket |
| Kinematics interfaces | Forward kinematics (FK) input/output access | C#, Python, TCP Socket |
| Trajectory planning | Custom trajectory generation and download path | C#, Python, TCP Socket |
| Admittance control | Simultaneously issue target position + stiffness parameters (K) + damping parameters (D) for compliant interaction | C#, Python, TCP Socket |
| Status feedback | Real-time joint position, velocity, torque, IO status reading | C#, Python, TCP Socket |
| Variable system | Global/local variable read/write | C#, Python, TCP Socket |
| Servo control | Servo power on/off, alarm clearing | C#, Python, TCP Socket |
| DH parameters | Online modification of robot DH parameters | Teach pendant / configuration file |
| Configuration management | Controller configuration import/export | File system |

**Chassis control:**

| Category | Interface | Description |
|------|------|------|
| Chassis management | Enable | Enable the chassis and enter the controllable state |
| | Emergency stop | Immediately stop chassis motion |
| | Clear error | Clear chassis fault/alarm states |
| | Control mode switching | Supports remote control mode, navigation mode, idle mode |
| Direct control | Velocity/angular velocity issuance | Issue linear velocity and angular velocity via protocol to control chassis forward, backward, turning, and in-place rotation |
| Navigation control | Path tracking | Issue path point sequences for tracking, supporting forward and reverse paths |
| | Path replacement | Replace current path points during operation |
| | Replanning | Trigger path replanning |
| | In-place rotation | Rotate in place to a specified heading in navigation mode |
| | Stop navigation | Abort the current navigation task |
| Status and configuration | Current status query | Query the chassis real-time status (position, velocity, mode, etc.) |
| | Set odometry parameters | Configure odometry resolution, wheelbase, and other parameters |
| | Set heading angle | Set/correct the chassis current heading angle |

### 8.3 Communication Protocols

| Protocol | Purpose | Features |
|------|------|------|
| Port 7000 protocol | Core control protocol (JSON over TCP) | Query/issue joint coordinates, variables, IO, supports single-point and continuous trajectories |
| TCP custom communication | Host computer ↔ controller | Server/Client mode, supports 9 process numbers concurrently |
| Modbus TCP/RTU | PLC/sensor integration | Flexible master/slave configuration |
| OPC-UA | Data acquisition/monitoring systems | Standardized industrial interconnection |
| EtherNet/IP | Allen-Bradley PLC | CIP protocol support |
| FinsTCP | Omron PLC | Command/response format |

> Physical layer communication performance: EtherCAT minimum cycle 100μs, PROFINET IRT minimum cycle 250μs, communication jitter 20μs, see [Section 7.2](#72-communication-and-control-interfaces).

### 8.4 ROS / ROS2 Ecosystem Support

| Module | Status | Description |
|------|------|------|
| ROS driver node | Integrable | Encapsulates ROS joint_state_publisher / trajectory_msgs via the port 7000 protocol |
| ROS2 driver node | Integrable | Builds ROS2 nodes based on NexDroid OpenAPI, supporting lifecycle management |
| URDF model | Available | Automatically generates URDF description based on DH parameters |
| TF tree | Integrable | Publishes joint transforms in real time → builds complete TF tree |
| MoveIt adaptation | Integrable | Exposes joint_trajectory_action / follow_joint_trajectory |
| ROS2 Control | Integrable | Interfaces with the ros2_control framework through the hardware interface layer |

> **Note**: ROS/ROS2 drivers require secondary development integration based on NexDroid OpenAPI. INEXBOT provides interface documentation and example code.

### 8.5 Recommended Development Toolchain

| Tool | Purpose |
|------|------|
| Visual Studio / VS Code | C# host computer development |
| Python 3.8+ | Algorithm prototyping and verification |
| ROS / ROS2 | Robot software ecosystem integration |
| Lua scripts | Rapid logic writing on the teach pendant side |
| TCP/UDP debugging tools | Communication protocol verification |

---

## 9. Dynamics Interface Open Specifications

### 9.1 Open Interfaces

| Interface | Access Method | Description |
|------|----------|------|
| Joint angle θ | Real-time read (1ms) | Current joint angle of 7 axes |
| Joint velocity θ̇ | Real-time read (1ms) | Current joint angular velocity of 7 axes |
| Joint torque τ | Real-time read (1ms) | Current joint torque of 7 axes (requires servo feedback) |
| Joint command τ_cmd | Write | Directly issue joint torque commands in torque mode |
| DH parameter table | Read/Write | Standard DH / modified DH parameters, supporting runtime modification |
| Mass/inertia parameters | Read/Write | Mass, center of mass, inertia tensor of each link |
| Forward kinematics | Call | θ → TCP pose, built-in/user-defined |
| Inverse kinematics | Call | TCP pose → θ, built-in/user-defined |
| Jacobian matrix J(q) | Calculate | Geometric Jacobian / analytical Jacobian |

### 9.2 User-Defined Algorithm Entry Points

| Replacement Point | Replaceable Function | Interface Form |
|--------|------------|----------|
| Joint control law | PID → sliding mode/adaptive/MPC/RL | Joint position/velocity/torque commands |
| Forward kinematics | Default algorithm → custom | θ → XYZ+RPY |
| Inverse kinematics | Default algorithm → custom | XYZ+RPY → θ |
| Trajectory planning | Trapezoidal/S-curve → custom | Path point sequence → time-parameterized trajectory |
| Dynamics feedforward | Add gravity/Coriolis compensation | τ_ff = M(q)q̈ + C(q,q̇) + G(q) |

### 9.3 Data Acquisition and Recording

| Function | Support Level |
|------|----------|
| High-frequency status recording | Joint position/velocity/torque, 1ms sampling period |
| Host computer data stream | Port 7000 real-time push (1ms level) |
| Offline logs | Controller local logs, exportable for analysis, format compatible with .csv |

---

## 10. Accuracy Calibration Solution — NexAutoCali Automatic Calibration System

The INEXBOT wheeled humanoid robot solution integrates the self-developed **NexAutoCali robot automatic calibration system**, providing full-parameter accuracy calibration solutions for seven-axis humanoid arms and six-axis humanoid arms, ensuring that dual arms achieve sub-millimeter repeat positioning accuracy in collaborative operations.

> Detailed documentation: see [NexAutoCali Automatic Calibration System](https://doc.inexbot.com/%E4%BA%A7%E5%93%81%E8%B5%84%E6%96%99/%E7%B2%BE%E5%BA%A6%E6%A0%87%E5%AE%9A/%E8%87%AA%E5%8A%A8%E6%A0%87%E5%AE%9A%E7%B3%BB%E7%BB%9FNexAutoCali.html).

### 10.1 Full-Parameter Calibration

Full-parameter calibration is currently the optimal solution for high-fidelity alignment between the robot's theoretical model and the physical entity. It supports reduction ratio calibration, zero point calibration, link length calibration, and full-parameter calibration, uncovering the equipment's own precision limits. After full-parameter calibration, TCP accuracy can be improved from 3mm to 0.5mm, with an accuracy improvement of up to **500%**.

### 10.2 Full Coverage of Seven-Axis / Six-Axis

Adapts to seven-axis collaborative arms (SRS structure / cross-cross structure) and six-axis collaborative/industrial arms, compatible with the dual-arm independent configuration of wheeled humanoid robots, and can provide customized adaptation models according to user needs.

### 10.3 Full-Process Automation

Leveraging INEXBOT's drive-control advantages, the entire process from **automatic measurement point planning → automatic operation → automatic laser tracker measurement → algorithm calculation → calibration result output** is automated, greatly improving convenience and reliability.

### 10.4 Efficient and Fast

- Simplified operation logic, reducing training and usage difficulty
- Quick-mount structure design, software/hardware environment ready in **5 minutes**
- Optimized calibration process, standard 50-point full-parameter calibration takes **< 5 minutes**

### 10.5 Highly Integrated All-in-One Machine

The system integrates laser tracker measurement, robot motion control, automatic calibration point/measurement point planning, fully automatic control of calibration/testing processes, and algorithm calculation into one unit. A single software can complete all calibration and measurement work without additional programming.

### 10.6 Full-Function Testing

- Built-in robot calibration module: reduction ratio calibration, zero point calibration, link length calibration, full-parameter calibration
- Built-in **14-item** robot performance index testing module
- Fully compliant with national standard **GB/T 12642—2013 / ISO 9283:1998**

### 10.7 Multi-Brand Tracker Adaptation

Already adapted to multiple high-precision laser trackers such as API Radian Core, with more brands being continuously adapted.

### 10.8 Calibration Process Overview

```
Connect robot → Read parameters → Automatically plan measurement points → Automatically run tests → Data acquisition → Algorithm calculation → Generate calibration results
```

---

## 11. Product Packaging List

| No. | Component | Quantity | Remarks |
|------|------|------|------|
| 1 | Controller host | 1 unit | ABOX-6116, including Debian 11 / Ubuntu 20.04 |
| 2 | T30 teach pendant (optional) | 1 unit | Including 5m connection cable |
| 3 | Power cable | 1 piece | DC 12~24V terminal interface |
| 4 | EtherCAT network cable | 2 pieces | CAT5e or above |
| 5 | Technical documentation USB drive | 1 piece | Including development manual SDK protocol documentation |
| 6 | NexDroid OpenAPI development kit | 1 set | C# / Python example code |

---

## 12. Related Document Public Links

The following are public access links for related documents in the INEXBOT Technology knowledge base (doc.inexbot.com):

### 12.1 Product Documentation

| Document | Link |
|------|------|
| INEXBOT industrial robot controller specification | https://doc.inexbot.com/产品资料/控制系统/工业机器人控制器C1201 |
| INEXBOT industrial robot controller (compact) specification | https://doc.inexbot.com/产品资料/控制系统/工业机器人控制器C1102 |
| INEXBOT industrial robot controller (multi-axis) series specification | https://doc.inexbot.com/产品资料/控制系统/工业机器人控制器C2200系列 |
| T30 teach pendant specification | https://doc.inexbot.com/产品资料/控制系统/T30示教器 |
| **NexAutoCali automatic calibration system** | https://doc.inexbot.com/产品资料/精度标定/自动标定系统NexAutoCali |
| Supported servo models | https://doc.inexbot.com/技术资料/支持的伺服型号 |
| Supported robot types | https://doc.inexbot.com/技术资料/支持的机器人类型 |
| Supported external axis types | https://doc.inexbot.com/技术资料/支持的外部轴类型 |

### 12.2 Operation Manuals

| Document | Link |
|------|------|
| Motion control instructions | https://doc.inexbot.com/操作手册/24.03版本/运动控制类指令 |
| Robot DH parameter description | https://doc.inexbot.com/操作手册/24.03版本/机器人DH参数说明 |
| Multi-robot and dual-robot collaboration | https://doc.inexbot.com/操作手册/24.03版本/多机与双机协作 |
| New dual-robot functions | https://doc.inexbot.com/操作手册/24.03版本/新双机功能 |
| Multi-robot coordination instructions | https://doc.inexbot.com/操作手册/24.03版本/多机协调类指令 |
| Interference zones | https://doc.inexbot.com/操作手册/24.03版本/干涉区 |
| External axis user manual | https://doc.inexbot.com/操作手册/24.03版本/外部轴使用手册 |
| Independent axis control | https://doc.inexbot.com/操作手册/24.03版本/独立轴控制 |
| Servo response time | https://doc.inexbot.com/操作手册/24.03版本/伺服响应时间 |
| System function debugging manual | https://doc.inexbot.com/操作手册/24.03版本/系统功能调试手册 |
| Calculate target pose instructions | https://doc.inexbot.com/操作手册/24.03版本/计算目标形态指令 |
| Tool hand calibration manual | https://doc.inexbot.com/操作手册/24.03版本/工具手标定手册 |
| User coordinate calibration manual | https://doc.inexbot.com/操作手册/24.03版本/用户坐标标定手册 |

### 12.3 Secondary Development and Communication Protocols

| Document | Link |
|------|------|
| Port 7000 user manual | https://doc.inexbot.com/操作手册/24.03版本/7000端口 |
| TCP communication function manual | https://doc.inexbot.com/操作手册/24.03版本/TCP通讯功能手册 |
| Modbus function user manual | https://doc.inexbot.com/操作手册/24.03版本/Modbus功能使用手册 |
| OPC-UA parameters | https://doc.inexbot.com/操作手册/24.03版本/OPC-UA参数 |
| EIP function operation instructions | https://doc.inexbot.com/操作手册/24.03版本/EIP功能操作说明 |
| FINSTCP user manual | https://doc.inexbot.com/操作手册/24.03版本/FINSTCP使用手册 |
| Lua tutorial | https://doc.inexbot.com/操作手册/24.03版本/Lua教程 |
| PC simulation software tutorial | https://doc.inexbot.com/操作手册/24.03版本/PC支持仿真软件使用教程 |

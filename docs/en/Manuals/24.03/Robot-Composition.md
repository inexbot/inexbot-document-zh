---
title: "Robot Composition"
description: "Introduction to the composition of industrial robots"
author: "tongmengyuan123"
date: "2026-04-16"
tags: ["robot", "servo motor", "controller", "IO", "reducer", "servo driver"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# Robot Composition

Industrial robots are composed of the robot body, servo motors, reducers, servo drivers, controllers, IO, and other components.

## Robot Body

The robot body is mainly the mechanical structure of the robot. As shown in the figure, it includes the robot's hand, wrist, arm, and base.

![Robot Body Structure](assets/as-r7hmjdtplqft5vxpyq.png)

![Robot Body Diagram](assets/0ecu8hw16lisspoliyrz4.png)

## Servo Motor (Each axis of the robot has a servo motor)

![Servo Motor Structure](assets/tnglagasak7xvkotmor_t.png)

![Servo Motor Composition](assets/cucze7gdiqcjd886i8xld.png)

The servo motor consists of multiple parts, each with different functions and roles. Each part works collaboratively to achieve motor control and adjustment, as well as position, speed, and torque control.

Composition:

- Motor part: Generally composed of rotor, stator, winding, magnetic poles, etc. Motor types include DC servo motors, AC servo motors, stepper servo motors, etc.

- Sensor part: The sensor part of the servo motor usually includes position sensors, speed sensors, torque sensors, etc., used to detect the motor's position, speed, torque, and other parameters, and feed the results back to the control system.

- Controller part: The controller part of the servo motor is usually composed of control chips, encoders, etc., used to receive sensor feedback parameters and output control signals to the motor, achieving adjustment of motor position, speed, and other parameters.

- Power supply part: The power supply part of the servo motor is usually composed of power transformers, rectifiers, filters, etc., used to provide stable power voltage and current to ensure the motor's normal operation.    

Functions:

- Position control function: Servo motors can achieve high-precision position control and can accurately control the motor's position and motion trajectory based on input signals.

- Speed control function: Servo motors can achieve precise speed control based on input signals, controlling the motor's rotation speed and direction.

- Torque control function: Servo motors can achieve precise torque control based on input signals, controlling the motor's output torque magnitude and direction.

- Smooth motion function: Servo motors can achieve smooth motion control, avoiding vibration during mechanical motion and improving precision and stability.

## Reducer (Each axis of the robot has a reducer)

Functions:

- Precise positioning: Industrial robots typically perform repetitive actions to complete the same process. To ensure that industrial robots can reliably complete process tasks in production and ensure process quality, high requirements are placed on the positioning accuracy and repeat positioning accuracy of industrial robots.

- Increase torque: The reducer's function is to reduce speed while increasing output torque.

- Reduce load inertia: During deceleration, it can effectively reduce the host's load inertia, thereby reducing noise and vibration and improving work efficiency and operational stability.

- Protect the motor: By adjusting the motor load to reduce its burden, making work smoother.

- Reduce motor load: By adjusting the motor load to reduce its burden, making work smoother.

- Protect equipment: Reducing the rotation speed of external equipment and increasing torque reduces equipment wear and damage, extending equipment service life. At the same time, the reducer can stably control the speed and torque of mechanical equipment, ensuring equipment safety and stability.  

- Improve inertial load stability and reduce vibration: The reducer reduces inertial impact by changing speed, thereby avoiding large impacts on the servo motor. At the same time, by setting appropriate rotation speed and torque, the reducer can control the motor's speed, thereby reducing vibration impact on other equipment.

![Reducer Connection](assets/7btkysvpbe5nu9oww4maq.png)

![Reducer Working Principle](assets/zfkvgaco7h72svwdjkqz9.png)

## Servo Driver

The servo driver is used to control the motion of the servo motor to achieve high-precision, high-performance position control.

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What are the components of an industrial robot?**

A: Industrial robots are composed of the robot body, servo motors, reducers, servo drivers, controllers, IO, and other components.

**Q: What parts does the robot body include?**

A: The robot body is mainly the mechanical structure of the robot, including the robot's hand, wrist, arm, and base.

**Q: What are the components of a servo motor?**

A: A servo motor consists of the following parts: 1. Motor part: including rotor, stator, winding, magnetic poles, etc.; 2. Sensor part: including position sensors, speed sensors, torque sensors, etc.; 3. Controller part: composed of control chips, encoders, etc.; 4. Power supply part: composed of power transformers, rectifiers, filters, etc.

**Q: What functions does a servo motor have?**

A: Servo motors have the following functions: 1. Position control function: capable of high-precision position control; 2. Speed control function: capable of precise speed control, controlling motor rotation speed and direction; 3. Torque control function: capable of precise torque control; 4. Smooth motion function: capable of smooth motion control, avoiding vibration, improving precision and stability.

**Q: What is the function of a reducer?**

A: The functions of a reducer include: 1. Precise positioning: ensuring industrial robot positioning accuracy and repeat positioning accuracy; 2. Increasing torque: reducing speed while increasing output torque; 3. Reducing load inertia: reducing noise and vibration, improving work efficiency and operational stability; 4. Protecting the motor and reducing motor load; 5. Protecting equipment: reducing equipment wear and damage, extending service life; 6. Improving inertial load stability and reducing vibration.

**Q: What is the function of a servo driver?**

A: The servo driver is used to control the motion of the servo motor to achieve high-precision, high-performance position control.

**Q: What sensors does a servo motor have?**

A: The sensor part of a servo motor usually includes position sensors, speed sensors, torque sensors, etc., used to detect the motor's position, speed, torque, and other parameters, and feed the results back to the control system.

**Q: Why can a reducer improve positioning accuracy?**

A: Industrial robots typically perform repetitive actions to complete the same process. To ensure that industrial robots can reliably complete process tasks in production and ensure process quality, the reducer improves the robot's positioning accuracy and repeat positioning accuracy through precise transmission ratios.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-04-16 | Initial version | tongmengyuan123 |

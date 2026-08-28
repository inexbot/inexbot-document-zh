---
title: "System Maintenance"
description: "System Maintenance Operation Tutorial"
author: "YU-caibin"
date: "2026-04-13"
tags: ["System Maintenance", "Status", "Controller"]
category: "Operation Tutorial"
version: "1.0.0"
language: "en-US"
---

# System Maintenance Function Tutorial

The system maintenance function performs maintenance and servicing on the robot and controller when they reach the set time.

![System Maintenance Page](assets/SystemMaintenance-1.png)


## System Maintenance Parameter Description

1. Controller Power-on Time: This time starts recording from the first maintenance key update. This is the total duration and will not be reset after updating the maintenance key.

2. Controller Time Since Last Maintenance: This time starts recording from the maintenance key update. This is the interval time between key updates. It will be reset after updating the controller maintenance key.

3. Controller Maintenance Interval: The interval period of the maintenance key generator. When the default checkbox is selected, it is 8760 hours. Unchecking and entering a value allows a custom time.

4. Robot Total Power-on Time: This time starts recording from the first maintenance key update. This is the total duration and will not be reset after updating the maintenance key.

5. Robot Time Since Last Maintenance: This time starts recording from the maintenance key update. This is the interval time between key updates. It will be reset after updating the robot maintenance key.

6. Robot Maintenance Interval: The interval period of the maintenance key generator. When the default checkbox is selected, it is 8760 hours. Unchecking and entering a value allows a custom time!

### System Maintenance Usage Instructions

1. For first-time use, you need to use the Windows key generator software to generate the maintenance key.

2. Enter the Controller ID and select the key type and period to generate.
  *Controller ID: Click the Update Key button to display the Controller ID.

  ![System Maintenance Tool](assets/SystemMaintenance-2.png)

3. Click Generate Maintenance Ciphertext, and the software will generate a key file named maintenance.

4. Copy the file to the root directory of the USB drive.

5. Insert the USB drive, click the Update Key button, and upload the key file.

 ![Upload Page](assets/SystemMaintenance-3.png)
 
6. The teach pendant and controller will automatically restart, and the changes will take effect after boot-up.

#### Notes

After successful import, the maintenance key file is stored in the controller directory /home/inexbot/robot/ and renamed to maintenanceLicense. If you need to reset the total power-on time, simply delete this file and restart.

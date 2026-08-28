---
title: "Water Cooler"
description: "INEXBOT controller water cooler function description, covering temperature settings, flow monitoring, water cooler and robot linkage control and other operation guides."
author: "iNexBot"
date: "2026-04-15"
tags: ["INEXBOT controller", "water cooler", "temperature control", "laser cutting", "cooling system"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# Water Cooler

## Main Function

The water cooler is an important auxiliary equipment for laser cutting systems, used to cool the laser cutting head and laser to prevent overheating damage. The INEXBOT controller supports linkage control with the water cooler, enabling automatic start/stop and status monitoring.

## Main Features

### Temperature Settings

The target temperature of the water cooler can be set through the controller. The system automatically adjusts cooling power to maintain the set temperature.

- **Target Temperature**: Recommended operating temperature range for laser cutting head (refer to laser manual)
- **Temperature Deviation Alarm**: Triggers an alarm when the actual temperature exceeds the set range

### Flow Monitoring

The controller can monitor water cooler flow and pressure parameters in real-time:

- **Coolant Flow**: Ensures normal coolant circulation
- **Pressure Monitoring**: Detects pipeline blockage or leakage
- **Flow Alarm**: Triggers protective shutdown when flow falls below threshold

### Linkage Control

When the water cooler is linked with robot motion:

1. When the laser is turned on, the controller automatically starts the water cooler for cooling
2. After the laser is turned off, the water cooler shuts down after a set delay
3. When the water cooler fails, the controller automatically stops laser output and triggers an alarm

## Operation Instructions

### Starting the Water Cooler

When water cooler control is enabled, the water cooler temperature can be preset through the bottom setting button.

### Monitoring Status

The water cooler's current temperature, flow rate, and pressure drop motor speed are all refreshed in real-time. When leaving this interface, this data is no longer updated.

## Parameter Description

| Parameter | Value | Description |
| :--- | :--- | :--- |
| Temperature Setting | User-set | Target cooling temperature (°C) |
| Flow Monitoring | Real-time display | Current coolant flow (L/min) |
| Pressure Monitoring | Real-time display | Current system pressure (bar) |

---

## Q&A

**Q: What is the main function of the water cooler?**

A: The water cooler is used to cool the laser cutting head and laser to prevent overheating damage. During laser cutting, both the laser and cutting head generate a large amount of heat, requiring a cooling system to maintain normal operating temperature.

**Q: How does the INEXBOT controller link with the water cooler?**

A: The controller connects to the water cooler through IO signals or communication protocols. When the laser starts, the controller automatically starts the water cooler; when the water cooler fails, the controller automatically stops laser output and triggers an alarm, achieving interlock protection.

**Q: What is the appropriate temperature setting for the water cooler?**

A: The specific temperature setting should refer to the laser user manual. The recommended operating temperature for common fiber lasers is in the range of 20-30°C, and the temperature should remain stable, avoiding frequent fluctuations.

**Q: What causes a flow alarm?**

A: Flow below the set threshold is usually caused by the following reasons: insufficient coolant (needs refilling), pipeline blockage (needs pipeline cleaning), water pump failure (needs repair or replacement), or filter blockage (needs filter replacement). After a flow alarm, the machine should be stopped immediately for inspection to avoid overheating damage to the laser.

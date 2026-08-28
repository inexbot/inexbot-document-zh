---
title: "Tianji Requirements: Optimizing Conveyor Site Functions"
description: "Tutorial for testing optimized conveyor site functions"
author: "wuxuan"
date: "2026-04-14"
tags: ["Static Pickup Switch", "Static Pickup IO Port", "Minimum Conveyor Tracking Speed"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Tianji Requirements: Optimizing Conveyor Site Functions

## Document Purpose

Introduce the static pickup function added to the conveyor.

## Document Structure

Parameter definitions for the static pickup function added to the conveyor.

## Static Pickup Function

### Function Description

The static pickup function allows the robot to pick up workpieces from a stationary conveyor belt. This is useful when the conveyor is stopped or when the workpiece position is fixed.

### Parameter Settings

| Parameter | Description | Range |
| :--- | :--- | :--- |
| Static Pickup Switch | Enable or disable the static pickup function | ON/OFF |
| Static Pickup IO Port | IO port for static pickup signal | DI0–DI15 |
| Minimum Conveyor Tracking Speed | Minimum conveyor speed for tracking to take effect | [0.1, 100] mm/s |

### Usage Steps

1. Navigate to **Settings > Process Parameters > Conveyor Tracking**.
2. Enable the **Static Pickup Switch**.
3. Set the **Static Pickup IO Port** to the appropriate DI port.
4. Set the **Minimum Conveyor Tracking Speed**.
5. Configure the conveyor tracking parameters as needed.

### Notes

- When the static pickup function is enabled, the robot will pick up workpieces even when the conveyor is stationary.
- The minimum conveyor tracking speed determines the threshold below which the robot treats the conveyor as stationary.

---
title: "Fish-Scale Welding First Segment Welding and Air Run"
description: "Explanation of the first segment welding and air run parameters added for fish-scale welding"
author: "iNexBot"
date: "2026-04-15"
tags: ["Parameter Description", "First Segment Welding", "First Segment Air Run"]
category: "Category Name"
version: "1.0.0"
language: "en-US"
---
# Parameter Description

First Segment Welding: Only the first segment of welding is fixed as the welding segment, and the length of the first welding segment is fixed. The air run distance is also set to a fixed value.

The robot welding trajectory is: Welding - Air Run - Welding

Note: Only the first segment welding distance is fixed.
- [Parameter Diagram](assets/rgMS_Cr3AIFKn_KpRGFPBrn2wjcbH4sXFIzsg4WSBbA.png)

When the total welding trajectory length is 200, the first segment welding distance is set to 80, and the air run distance is also set to 80, then the remaining welding segment distance is 40.
- [As Shown](assets/FSmuDDNdqJVIRTH_0CGVr4xjfwf9hSDN9ArPZW5WGRA.png)

# First Segment Welding

Write the program, enter the data. By setting different welding and air run speeds, observe whether the robot trajectory follows the welding-air run-welding sequence, and check whether the welding segment length and air run length match the settings.
- [As Shown](assets/fggEYJIvMLlwPWm3LKvmCybFwIdNWpt7xEtnDMimCK0.png)

# First Segment Air Run

Only the first segment of welding is fixed as the air run segment, and the length of the first air run segment is fixed. The welding distance is also set to a fixed value.

The robot welding trajectory is: Air Run - Welding - Air Run.

- [As Shown](assets/fqscXhmKoej198z9LyPnK_wuC3whgwB5hi4-IdaeSVY.png)

Note: Only the first segment air run distance is fixed.

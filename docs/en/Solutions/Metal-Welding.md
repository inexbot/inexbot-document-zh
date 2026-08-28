---
title: Metal Welding
category: Metal Welding & Cutting
language: en-US
---

Metal welding is mainly divided into gas shielded welding, argon arc welding, and laser welding.

## Laser Welding
For laser welding related content, please click the link below to view.

[Laser Welding Industry Solution](https://www.inexbot.com/solution/content/121)

## Argon Arc Welding

Argon arc welding is suitable for carbon steel, alloy steel, stainless steel, refractory metals, aluminum and aluminum-magnesium alloys, copper and copper alloys, titanium and titanium alloys, as well as ultra-thin plates of 0.1mm. It can perform all-position welding, especially for inaccessible parts of complex weldments.

Advantages of argon arc welding:

1. Except for aluminum and tin, which have very low melting points, it can weld most metals and alloys.
2. AC argon arc welding can weld aluminum and aluminum-magnesium alloys, which are relatively chemically active and prone to forming oxide films.
3. No slag and no spatter during welding.
4. All-position welding is possible. Pulsed argon arc welding reduces heat input. It is suitable for welding 0.1mm stainless steel where arc temperature is high. It has the advantages of small heat input, fast speed, small heated area, and small welding deformation.
5. The filler metal and its addition amount are not affected by the welding current.

## Gas Shielded Welding

Gas shielded welding refers to a welding method shielded by carbon dioxide or argon gas, using welding wire instead of electrodes. CO2 welding has high efficiency; argon shielded welding is mainly used for welding materials such as aluminum, titanium, and stainless steel.

![Gas shielded welding](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901160743.png)

### Advantages

The INEXBOT control system enables the robot to move smoothly and at constant speed during welding, completing welding work faster with more beautiful welds.

![Welding result 1](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901160821.png) ![Welding result 2](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901160822.png)

Multiple weld seam types can be welded through the multiple interpolation methods built into the INEXBOT control system.

The INEXBOT control system has built-in multiple welding-related instructions, allowing complete customization of the entire welding process.

![Welding instructions](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901160908.png)

Users can customize welding parameters with flexible parameter configuration and an intuitive, concise interface.

It can be used for welding various materials with only simple configuration.

The INEXBOT control system has market-verified welding processes; no additional process package purchase is needed, only simple configuration to use.

- Faster, more stable, more intelligent
- Complete functions, supporting multiple weld seam types
- Diverse instructions, supporting multiple customized processes
- Simple and easy to use, flexible parameter configuration methods
- Suitable for sheet metal, aluminum, alloys and other materials


## Multi-Layer Multi-Pass Welding

Multi-layer multi-pass welding divides the weld into multiple layers, and each layer into multiple passes, welding layer by layer and pass by pass in a set order.
The multi-layer multi-pass welding function is for welding larger and deeper welds. Its benefits include reducing heat input and deformation, and lowering defect generation rates; it is suitable for various weld types such as butt, fillet, and plug welds.
INEXBOT stores multi-layer multi-pass welding parameters by adding a multi-layer multi-pass welding function module to the process section, adding new instructions: multi-layer multi-pass welding offset start instruction and multi-layer multi-pass welding offset end instruction. Multi-layer multi-pass welding is realized through configured multi-layer multi-pass welding process parameters and preset job files.
At the same time, the new version of the control system has improved the multi-layer multi-pass welding process by adding head/tail indentation, push angle, and tilt angle settings to make multi-layer multi-pass welding more flexible and convenient to use (this feature is subject to the specific release version).

![Multi-layer multi-pass welding principle](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901170540.png)

![Multi-layer multi-pass welding operation interface](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E5%A4%9A%E5%B1%82%E5%A4%9A%E9%81%93%E7%84%8A%E7%95%8C%E9%9D%A2.png)

## Weave Welding

During welding, the robot weaves regularly, which can control the weld width and improve the inter-layer and surface welding quality of the weld.
In the 2024 update of the INEXBOT control system, in addition to the original sine weave, triangle weave, and arc weave, L-shape weave, Z-shape weave, and figure-eight weave trajectories were added, making welding trajectory selection more diverse.

![Weave welding operation interface](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E6%91%86%E7%84%8A%E6%93%8D%E4%BD%9C%E7%95%8C%E9%9D%A2.png)


### External Axis Collaborative Weave Welding
External axis collaborative weave welding means that when the robot performs welding operations, with the collaborative assistance of the external axis, the workpiece is repositioned or shifted so that the welding robot can weld at the optimal angle and posture.
The new version of the control system performs collaborative weave welding between the external axis and the robot by adjusting external axis parameters and enabling collaboration. Through precise external axis control, the welding robot can be ensured to weld at the optimal position and posture, thereby improving welding precision.

![External axis collaborative weave welding](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E5%A4%96%E9%83%A8%E8%BD%B4%E5%8D%8F%E5%90%8C%E6%91%86%E7%84%8A.png)

## Arc Start Principle
The principle of electric welding arc start is to use the high temperature and intense light radiation generated by arc discharge to melt the surface of the welding material and form an arc. The arc is a high-temperature plasma whose temperature can reach over 5000°C, capable of melting metal materials, forming a liquid pool and fusing them, thereby achieving welding.



## Arc Start Gradual Change Optimization
Arc start gradual change refers to the process in which parameters such as welding current and voltage gradually adjust from the initial state to a stable welding state at the beginning of welding. This process helps the stable formation of the welding arc and the smooth progress of the welding process.
In the new version of the INEXBOT control system, arc start gradual change has been optimized: by setting arc start parameters, enabling arc start gradual change, and setting the arc start gradual change time, the current, voltage, and time parameters can be precisely adjusted. This helps ensure smooth welding startup, reduce impact/damage to the weldment caused by sudden parameter changes, and effectively improve welding stability.

![Arc start gradual change optimization](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E8%B5%B7%E5%BC%A7%E6%B8%90%E5%8F%98%E4%BC%98%E5%8C%96.png)

### Re-Arc Start

When there is rust, oil, or other debris at the arc start point of the workpiece, arc start may fail. Using the re-arc start function to repeatedly strike the arc can effectively prevent this situation.

![Re-arc start](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901161101.png)

### Arc Extinguishing Restart

When the robot stops due to arc extinguishing or other reasons, starting directly again will cause missed welding. Using the arc extinguishing restart function, after arc extinguishing the robot returns a specified distance at a specified speed, then continues with normal welding conditions.

### Scratch Start

When scratch start is enabled, motion begins even after arc start failure; during motion, if arc start succeeds, it returns a specified distance and then continues normal welding.

### Flying Arc Start/Arc Extinguishing

Before the robot reaches the arc start point, the arc start instruction is executed to begin slow wire feeding. When the arc start point is reached, the wire contacts the workpiece and strikes the arc, improving welding efficiency.

![Flying arc start/arc extinguishing](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E9%A3%9E%E8%A1%8C%E8%B5%B7%E5%BC%A7%E7%81%AD%E5%BC%A7.png)

### Anti-Wire-Sticking Treatment

Before welding ends, anti-wire-sticking current and voltage are output to prevent the wire from sticking.

### Automatic Wire Sticking Release

Wire sticking sometimes occurs when the arc is extinguished. To prevent this, at the end of welding, a transient relatively high voltage is output for anti-wire-sticking treatment.

## Laser Tracking

Using a laser sensor to obtain the accurate weld seam position, the robot can adjust the end position during welding so that the torch end always moves along the weld seam. This ensures perfect weld formation, reduces heat load, increases productivity, keeps the torch in the ideal position, compensates for production, equipment, and operator tolerances, reduces programming work for complex weldments, and achieves consistent, reproducible connections.

## Arc Voltage Tracking Welding

The arc voltage tracking function is a technology that keeps the welding arc length stable. Its basic principle is to collect arc voltage data in real time during welding, perform data processing such as filtering and arc length conversion, and finally adjust the torch position in real time based on the processed data, thereby achieving stable arc length control and ensuring welding consistency.
With this function, there is no need to worry about arc breaking during welding caused by uneven weld seams due to pipe ovality. The arc voltage tracking system automatically adjusts the torch height through automatic arc height control.
The INEXBOT control system's arc voltage data acquisition is more refined; through settings for arc voltage acquisition cycle, reference voltage, and invalid data time, real-time arc voltage detection and feedback are achieved, thereby realizing high-precision arc length control and ensuring welding quality.


![Arc voltage tracking welding interface](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E5%BC%A7%E5%8E%8B%E8%B7%9F%E8%B8%AA%E7%84%8A%E6%8E%A5%E7%95%8C%E9%9D%A2.png)

<iframe src="//player.bilibili.com/player.html?aid=345013722&bvid=BV1cd4y1G7WT&cid=821029546&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>


## Arc Tracking Welding

Arc tracking is used when the workpiece is thicker; the current and voltage fluctuations are measured through weave welding and compensated to ensure weld quality, while also saving the cost of a laser.

![Arc tracking welding](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/%E7%94%B5%E5%BC%A7%E8%B7%9F%E8%B8%AA%E7%84%8A%E6%8E%A5.png)

## Intelligent Programming-Free Teaching Welding

INEXBOT supports drag welding. After teaching, the robot can be manually dragged; drag the robot to the required point and press the corresponding IO signal to record the point. Finally, welding starts according to the recorded trajectory.

Compared with traditional manual teaching welding, dragging is more flexible; there is no need to insert instructions one by one, only triggering IO signals is required. Both welding speed and non-welding speed can be customized. This function can only be used after dynamics identification is completed.

![Intelligent programming-free teaching welding](https://inexbot.com/api/cms-assets/assets/image/solutions/welding/20220901170803.png)

## Download Links
Click here to start downloading [materials](https://inexbot.com/api/cms-assets/downloads/%E6%89%8B%E5%86%8C%E4%B8%AD%E6%96%87%E7%89%88/3.%20%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88/%E9%87%91%E5%B1%9E%E7%84%8A%E6%8E%A5%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88/%E9%87%91%E5%B1%9E%E7%84%8A%E6%8E%A5%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88.pdf)

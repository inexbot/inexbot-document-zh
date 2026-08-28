---
title: Laser Position Search / Tracking
category: Metal Welding & Cutting
language: en-US
---

Laser position search and laser tracking give the robot a pair of "eyes", using a laser to identify the weld seam for welding instead of manually teaching the weld trajectory.

During manual teaching welding, the weld seam is easily affected by deformation, gap changes, and assembly errors, causing large deviations in the weld seam during welding. To improve welding quality, the welding robot needs real-time control to correct weld seam deviations.

## Laser Weld Seam Detection Principle

![Laser weld seam detection principle](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901152854.png)

The laser diode emits a laser onto the workpiece surface. After surface reflection, an image is formed on the CCD or CMOS sensor. The controller then processes the image position through communication with the controller to determine the weld seam position, thereby controlling the robot to track or search for position.

In fact, most of the welding robots currently in service on the market work in "teach and playback" mode, and a few work in trajectory planning mode. That is, no matter what product is being welded, it must be processed according to the design data: a predetermined theoretical program is written and then welding is performed. If there are large batches of identical workpieces, laser position search or tracking is needed to determine the trajectory. Large-batch workpieces will inevitably have errors, so the laser is needed to compensate for the errors, and the welding pass rate can be controlled above 90%.

## Laser Calibration

The calibration steps include illustrations and text descriptions, and are relatively simple to get started with; as long as you can read the weld seam recognition image on the host computer, you can calibrate.

![Laser calibration screen](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901152938.png)

## Laser Position Search

You can refer to the following video

<iframe src="//player.bilibili.com/player.html?aid=627653881&bvid=BV1nt4y1e74d&cid=253420490&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>

Or the INEXBOT Technology demonstration video

<iframe src="//player.bilibili.com/player.html?aid=203864027&bvid=BV13h41117U5&cid=288260488&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>

### Dedicated Instructions for Laser Position Search

INEXBOT laser position search is mainly divided into static and dynamic position search, position search offset, and the most important position search calculation. Programming is relatively simple for users and does not require complex logic; one set of algorithms can serve an entire production line of identical workpieces.

![Dedicated instructions for laser position search](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901153119.png)

### Laser Position Search Algorithm

Laser position search can be used for position search correction of identical workpieces on a production line or for determining the welding start and end points. Since position search detects first and welds later, it cannot be used for weld seams that deform severely due to heat during welding or irregular weld seams.

INEXBOT has multiple position search and tracking algorithms supporting arc position search for irregular shapes, and can complete weld seam recognition under various working conditions, according to the weld seam types recognizable by the laser manufacturer: inner fillet, outer fillet, left lap, right lap, butt, etc.

![Laser position search calculation instruction](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901153148.png)

When using the laser, as long as <font color="#FF0000">the tool hand accuracy is guaranteed to be <2mm, the laser position search accuracy can be as precise as ±0.5mm</font>, ensuring the accuracy of the calculated points.

Position search is usually used to determine the starting point when it is unknown, or when large batches of regular workpieces need welding. Position search ensures that as long as the workpiece is within the laser's recognizable range, no matter in which direction it is offset or rotated, the offset weld seam can be calculated through the user coordinate system or offset values.

### Dedicated Parameters

The INEXBOT system supports up to 99 sets of process parameters, which can be freely switched and copied between each other. The laser task number corresponds to the laser manufacturer's parameter number. There are few parameters and they are simple, and parameters can be fully customized as needed.

![Line laser position search parameters](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901153313.png)

## Laser Tracking

Laser tracking uses a laser vision sensor to detect ahead of the welding torch, and calculates the position coordinates of the sensor measurement point through the pre-calibrated positional relationship between the laser vision sensor and the welding torch.

During welding, the robot's taught position and the sensor's detection position are compared, and the position deviation of the corresponding point is calculated; when the welding torch lagging behind the laser line reaches the corresponding detection position, the deviation is compensated into the current welding trajectory, achieving the purpose of correcting the welding trajectory.

<iframe src="//player.bilibili.com/player.html?aid=713490328&bvid=BV1gX4y1M7Pi&cid=275970280&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>

<iframe src="//player.bilibili.com/player.html?aid=203864027&bvid=BV13h41117U5&cid=288260488&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>

### Dedicated Instructions for Laser Tracking

There are very few laser tracking instructions. You only need to determine the starting point through linear or point-to-point instructions, then insert the trajectory to be tracked between the laser tracking start and end. It supports linear tracking, irregular trajectory tracking, curve, and arc tracking. As long as it is within the laser's recognition range, tracking is possible with high tracking accuracy of ±0.5mm.

![Dedicated instructions for laser tracking](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901153456.png)

Position search and tracking can also be combined, using position search to determine an accurate tracking starting point.

Laser tracking is generally used when the weld seam is irregular and not a complete straight line. Linear instructions can be used to determine the start and end points. During the process, as long as the laser can recognize it, tracking continues; if it cannot be recognized, the robot pauses.

### Dedicated Parameters for Laser Tracking

Laser tracking also has its own independent parameters. It supports 99 sets, freely switchable and copyable between each set, including all commonly used parameters. Offset values, scanning parameters, etc. can be customized to ensure tracking stability.

![Line laser tracking parameters](https://inexbot.com/api/cms-assets/assets/image/solutions/laser/20220901153546.png)

## Download Links
Click here to start downloading [materials](https://inexbot.com/api/cms-assets/downloads/%E6%89%8B%E5%86%8C%E4%B8%AD%E6%96%87%E7%89%88/3.%20%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88/%E6%BF%80%E5%85%89%E5%AF%BB%E4%BD%8D%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88/%E6%BF%80%E5%85%89%E5%AF%BB%E4%BD%8D%E8%B7%9F%E8%B8%AA%E8%A1%8C%E4%B8%9A%E6%96%B9%E6%A1%88.pdf)

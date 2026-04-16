---
title: "PC支持仿真软件使用教程"
description: "PC支持仿真软件使用教程"
author: "wuxuan"
date: "2026-04-15"
tags: ["PC", "仿真软件", "拔出示教器"]
category: "操作手册"
version: "1.0.0"
language: "zh-CN"
---

# PC支持仿真软件使用教程

## 注意事项

1、【#71620 需求：PC示教器增加仿真器启动按钮】需求合入后的PC版本支持；

2、目前做的是仿真软件与控制器的通讯，
例如，当在PC上点击【拔出示教】，使用T30示教器对机器人进行运动轨迹的规划，仿真软件同步轨迹；

3、当点击【仿真】按钮出现如下消息条，则证明仿真软件放置的路径不对；

![图片](assets/PCfangzheng-1.png)

4、3D模型一般都是整体step格式，需要拆分成单个关节的obj格式，可使用【CAD Assistant】软件

[安装包](assets/cad_assistant_1.6.1_2022-01-16_win64.exe)

5、配置config.json机器人模型坐标值，可使用【unity】软件

## 准备工作

1、打开PC，确保机器人当前状态可以正常使用

2、将仿真软件【virtualSimulation.zip】文件解压缩后放至PC的根目录下，即与pc的exe文件同级

## 配置模型

以inexbot公司的1400型号的机器人为例：

1.在【virtualSimulation\UnityApp\UnityRobot_Data\StreamingAssets\Mods】目录下新建文件夹（厂家名即可）-【inexbot

2.在【inexbot】目录下新建文件夹（机器人型号即可）-【1400】

3.在【1400】目录下新建文件夹(用于存放3D模型，该文件需要机器人厂家提供)-【model】

4.在【1400】目录下放置文件【config.json】，是用于定义机器人模型结构的配置文件，程序会根据该文件自动在 Unity 场景中加载模型、建立关节层级关系、设置旋转轴与末端工具点

[配置文件](assets/config.json)

文件节点介绍如下：

| 字段名 | 类型 | 说明 | 示例 | 
| :--- | :--- | :--- | :--- |
| robotName | string | 机器人型号 | 1400 |
| modelPath | string | 模型文件夹路径（相对于Mods目录） | inexbot/1400/model |
| scale | float | 机器人整体缩放系,可根据实际需求自行调整 | 0.007 |
| defaultRotation | float | 根节点X、Y、Z初始旋转角度（单位：度） | [-90, 0, 0] |
| joints | 数组 | 各个关节的定义 | [ {...}, {...}, ... ] |
| endEffector | 对象 | 定义末端执行器（末端工具点） | { "name": "joint6", "offset": [600, 0, 862] } |

joints（关节定义）

程序会自动将 pivot 位置设置为旋转中心；

模型会被实例化到该 pivot 的 _mesh 子节点下；

如果未指定 parent，该关节直接挂在机器人根节点下。

| 字段名 | 类型 | 说明 | 示例 | 
| :--- | :--- | :--- | :--- |
| name | string | 关节名称，必须唯一 | "joint3" |
| parent | string | 父关节名称（为空表示根节点） | "joint2" |
| mesh | string | 模型文件名（必须位于 modelPath 文件夹下） | "joint3.obj" |
| pivot | [x, y, z] | 关节旋转中心相对父节点的偏移位置，机器人厂家提供 | [54, 0, 838] |
| axis | string | 旋转轴方向，可选值："X", "Y", "Z"，可以添加”-“号来控制默认的初始旋转方向 | "Y" |
| color | [r, g, b] (可选) | 模型初始颜色，范围 0~1，可根据需求自行调整 | [1, 0.5, 0.5] |
| isLastRotJoint | bool (可选) | 是否标记为最后一个旋转关节，用于加载姿态（例如 EndToolDown90 模式） |

endEffector（末端定义）

末端执行器用于指定机器人末端工具（例如焊枪、吸盘等）的位置偏移

程序会自动在该位置创建一个虚拟节点 VirtualEndEffector，用于记录末端位置或绘制轨迹

| 字段名 | 类型 | 说明 | 示例 | 
| :--- | :--- | :--- | :--- |
| name | string | 所依附的关节名（通常是最后一个关节） | "joint6" |
| offset | [x, y, z] | 从该关节末端到工具点的偏移距离，机器人厂家提供 | [600, 0, 862] |

5.在【virtualSimulation】目录下放置文件【robot_config.json】

[配置文件](assets/robot_config.json)

文件节点介绍如下：

| 字段名 | 类型 | 说明 | 示例 | 
| :--- | :--- | :--- | :--- |
| robotName | string | 机器人型号路径 | inexbot/1400 |
| LoadMode | string | 零点位置时，5轴方向
EndToolDown90或EndToolDown0，二选一
需要与PC版上设置/机器人参/DH参数页面的5轴方向设置的保持一致 | EndToolDown90 |
| RobotIndex | float | 切换机器人 |

6.打开PC，点击【仿真】按钮，等待仿真软件启动即可

![alt text](assets/PCfangzheng-2.png)

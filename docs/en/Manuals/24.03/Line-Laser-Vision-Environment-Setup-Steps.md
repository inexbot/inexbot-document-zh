---
title: "Line Laser Vision Environment Setup Steps"
description: "Line laser vision environment setup instructions"
author: "zhujintai"
date: "2026-04-08"
tags: ["INEXBOT Controller", "Line Laser", "Operation Manual"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Line Laser Vision Environment Setup Steps

## Environment Setup

The teach pendant first uploads the pkg file, then uploads the other two files. After upload, a wk/vision directory is created under /home/.

## Upload Line Laser Program

The teach pendant directly uploads the VSensorLaser3DPointCloud file.

3. Auto-start on Boot

Currently, to auto-start the line laser on boot, insert the following into runEcMaster.sh:
```bash
(

cd /home/wk/vision || {

echo "fail in /home/wk/vision folder."

false

}

chmod +x ./runVision3D.sh

bash ./runVision3D.sh &

) || echo "vision part failed, but continue"
```

The auto-start script needs to be written into the image in the future.

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What is the first step in setting up the line laser vision environment?**  

A: Environment setup, including the teach pendant uploading the pkg file, runVision3D.sh, and deploy.sh. After upload, a wk/vision directory is generated under /home/.

**Q: How to upload the line laser program?**  

A: The teach pendant directly uploads the VSensorLaser3DPointCloud file.

**Q: What is the current implementation method for auto-starting the line laser on boot?**  

A: Insert a script into runEcMaster.sh that enters the /home/wk/vision directory, sets permissions, and runs runVision3D.sh. The auto-start script needs to be written into the image in the future.

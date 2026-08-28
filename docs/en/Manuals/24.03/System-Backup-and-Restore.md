---
title: "System Auto Backup and Restore"
description: "System Backup and Restore"
author: "wlh"
date: "2026-04-10"
tags: ["Teach Pendant", "Controller Configuration", "Backup Restore"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

---

# System Auto Backup and Restore

**Open Settings > System Settings > Auto Backup interface to back up system files.**

**Controller Auto Backup Function:**
- Backup Content: Programs, Parameters.
- Maximum Backup Count: 10.
- Backup Naming: Named by type, version, and time. For example, if parameters were modified on December 9, 2024 at 10:36, the backup name is "Parameters-22.08-5.8.0-20241209103650".
- Backup Triggers: Boot-up, parameter modification, program modification, upgrade.

**Backup Frequency:**
- One backup after boot-up once version and parameters are confirmed normal;
- One backup if no further parameter modifications within 5 minutes of modifying parameters;
- One backup if no further modifications within 5 minutes of modifying programs (inserting/modifying instructions); one backup before upgrade.

**Restore Selected Backup:** Select the backup parameters, click Restore Selected Backup to restore the selected backup parameter configuration.

**USB Drive Backup:** Insert the USB drive into the teach pendant USB port, click USB Backup. The SystemBackup filename prefix is defined as 'T30-2-SystemBackup04-10-13-08' based on the currently running system program at backup time.

**USB Drive Restore:** Insert the USB drive into the teach pendant USB port, click USB Backup, select the backup file to restore. After upload, related parameters are restored to the values in the backup file.

**Backed Up Files:**
- Teach Pendant Backup Files: config.db; Pinyin.db; ServoError.db; TColor.db; Userdata.db; T31_ARM_Linux_Teach-pendant (teach pendant program).

- Controller Backup Files: Controller configuration file config; process file craft; eni file; job file job; lua file; multilingual file msg_languages; preset parameters preset; variables variant; controller program C1102_X86_Linux-RT_Robot-controller; userDefinedProfile.json file.

**Backup Process:**

All backup files are exported and stored in T30-1/T30-2-SystemBackup. The SystemBackup filename prefix (T30-1 or T30-2) is defined based on the currently running system program at backup time. nrc corresponds to T30-1-SystemBackup, nrc2 corresponds to T30-2-SystemBackup.

**Backup Path:** USB drive root directory.

**Restore Process:**

First, the system obtains the currently running program information and compares it with the backup system file names. That is, nrc corresponds to T30-1, nrc2 corresponds to T30-2. System restore is allowed only when the currently running system matches the backup system file name; otherwise, restore is not permitted.

The restore logic is to first delete the original files, then upload the backup files.

---

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What content does the controller auto backup include?**

A: Programs and parameters.

**Q: USB drive restore caused the controller to crash**

A: Before restoring, verify that the backup parameters match the current version, the hardware devices are the same, and the robot model is the same.

# System Upgrade and File Management FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 21 entries -->

## Q1: Palletizing workstation upgrade: after connecting to a PC and using the PC teach pendant to select the robot model, when connecting to the integrated display-control unit, it prompts that the model does not exist

Check whether the upgrade file contains the QT file for the integrated display-control unit

## Q2: "Version mismatch" is displayed at startup

1. Upgrade to the matching software version. (If the version is not available, contact the manufacturer.)

## Q3: How to upload the servo identification file slaveTypeLib

Create an upgrade folder on a USB drive (FAT32 format) and place the file in the upgrade folder. Insert the USB drive into the teach pendant USB port. On the teach pendant screen, click Settings, System Settings, Version Upgrade at the top left, then click Upload File below, select the file to upload; after successful upload, power off and restart.

## Q4: Changed the teach pendant language to English, but English still cannot be displayed after the change.

1. Check whether the controller has an English pack; if not, the English pack needs to be uploaded before English can be displayed. (Note that English packs differ between versions)

## Q5: After upgrading the controller version via USB and restarting after power off, the teach pendant is stuck on the boot screen with no response.

1. This generally happens after a major version upgrade; the teach pendant is stuck on the small sun boot screen. 2. Contact after-sales personnel for remote operation.

## Q6: At startup, "monitor program monitor missing" is reported

Upgrade the corresponding monitor program

## Q7: Upgrading from a low version to 2403 reports "library file mismatch"

Upgrade the corresponding library file

## Q8: After selecting the upgrade file and clicking the [OK] button, the upgrading screen appears but flashes away instantly, and neither the teach pendant nor the controller restarts automatically.

1. Confirm whether the controller and teach pendant are connected properly. Check whether the top left of the teach pendant shows "connection lost"; if the connection is lost, upgrade is not possible. 2. Confirm that the selected upgrade file name has no special characters such as "", (), &, %, etc. 3. Insert the USB drive into a computer and open the ".zip" upgrade file with a decompression tool such as WinRAR; check whether the content is the two files Qt-tp and nrc.out; if not, check whether the wrong file was copied.

## Q9: How do versions 21.05, 22.07, and 24.03 upload the eni file into the controller respectively?

1. Version 21.05: place the eni file in the upgrade folder on the USB drive (note the USB drive must be FAT32 format), insert the USB drive into the teach pendant USB port, on the Settings - System Settings - Version Upgrade screen, click Upload File below; after successful upload, power off and restart. 2. Version 22.07: place the eni file in the upgrade folder on the USB drive (note the USB drive must be FAT32 format), insert the USB drive into the teach pendant USB port, on the Settings - Robot Parameters - Slave Configuration screen, click Import ENI below; after successful import, power off and restart. 3. Version 24.03: place the file in the eni****** folder; the folder can be obtained by exporting the eni from the slave configuration screen; delete the files inside, put the new eni file in the folder, on the Settings - Robot Parameters - Slave Configuration screen, click Import ENI below; after successful import, power off and restart.

## Q10: How to upgrade the version

Place the version package archive provided by technical personnel in the root directory of a USB drive, insert it into the teach pendant, and upgrade with that file

## Q11: Bottom right of the teach pendant: "current monitor program monitor unavailable"

Contact technical personnel to obtain the monitor file and upgrade

## Q12: The teach pendant is black-screened or stuck showing two screens

The background monitor program is abnormal; delete it directly or replace it with the corresponding version of the monitor program.

## Q13: After a version upgrade, residual pages on the teach pendant cannot be removed

Caused by a monitor file version mismatch; enter the backend to replace or delete the current monitor file to resolve it

## Q14: Uploaded the identification file/ENI, but the problem still exists?

Check whether the file path meets the requirements, and check that the file name has no special symbols such as (1). After upload, power off and restart.

## Q15: After uploading the identification file provided, it still cannot be identified

Check whether the ENI file has problems; remake the ENI file and upload it. Confirm the USB drive is FAT32 format and the file is placed in the upgrade folder.

## Q16: Control system encryption/decryption does not take effect

The controller ID is hexadecimal 0-F, and the key is all English letters. Check whether the given and entered information is correct.

## Q17: The controller quickly disconnects within a certain time after power-on, and the backend cannot be accessed

First troubleshoot based on the logs; if the logs stop printing new logs at the disconnect time, it may be a circuit problem.

## Q18: How to modify the controller subnet mask

The controller subnet mask cannot be modified on the teach pendant; it must be modified by connecting to the controller via a PC.

## Q19: At startup, "not in OP state" is reported and the error cannot be cleared

1. Check whether the ENI is missing keywords 2. Replace the ENI and power off and restart

## Q20: Bottom right of the teach pendant prompts "monitor program unavailable"

The monitor program is missing or does not match the current version; contact technical support to upgrade the corresponding version of the monitor program.

## Q21: After power-on, "not in OP state" is reported

Check whether the ENI file is complete; replace the ENI and power off and restart.

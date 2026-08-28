# Communication and Bus FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 41 entries -->

## Q1: The X01 control cabinet can normally connect to the robot, but after switching to dual master stations, no servo can be read

1. Dual master stations require both Ec ports to communicate with slave stations simultaneously; check whether the second servo port is not properly connected to the slave station device 2. Dual master stations require importing new driver files and library files, and the startup script needs to be modified; contact manufacturer support 3. Check whether the slave station device is damaged, causing the robot servos to be unreadable

## Q2: During Modbus communication, the communication status keeps flashing between connected and disconnected

Modify the scan cycle so the master and slave scan cycles are consistent

## Q3: Modbus can read float data normally, but the read data information is wrong

Check whether the data endianness of both sides is consistent

## Q4: At startup, "not in OP state" is reported and the error cannot be cleared

1. Check whether the eni is missing keywords 2. Replace the eni and restart

## Q5: Multiple robots are connected in series on the same controller; the servos can be recognized, but one or two show as unknown slave stations

Check the eni; when multiple robots are connected in series, the unknown slave station is most likely a switch. In this case, the eni needs to be reconfigured; when configuring the switch position, parameters like 6040 are not needed.

## Q6: CANopen bus reports master station startup failure

1. Check whether the CANopen wiring is correct 2. Check whether the baud rate and communication cycle are correct 3. Check the eni file 4. Check whether both ends have 120Ω termination resistors connected

## Q7: Error "corresponding ENI file not found"

Upload the ENI file required by the system (if there is no ENI file, contact technical support for assistance). Place the ENI file in the upgrade folder on the USB drive (note the USB drive must be FAT32 format), on the Settings - System Settings - Version Upgrade screen, click Upload File below; after successful upload, power off and restart. (Create a new upgrade folder if there is none)

## Q8: At startup, the bottom right shows warning: "the servo ENI file of connected Robot 1 is missing the basic PDO (603F)"

Insert the USB drive into the teach pendant, export the communication file from the slave station list, add the 603F control word, and re-import

## Q9: The customer wrote 1 to address 4X501 via the debugging software and found that GI001 did not change, but GI002 actually changed

Different Modbus devices have different starting addresses when reading/writing; some devices' Modbus starting address is 0 or 1.

## Q10: Unknown slave station appears when adapting a robot

1. The SlaveTypeLib.json file is not configured

## Q11: ModbusRTU connection failure

1. Check the wiring 2. Check parameters such as baud rate, parity, and data bits 3. A host computer can be used for testing and troubleshooting

## Q12: Servo mapping does not exist

1. This means a slave station was adapted before; first check whether there is an adapted servo slave station in the robot slave stations. 2. If a servo was adapted before, check whether the servo network cable is loose

## Q13: The servo slave station page shows the servo name as unusable and displays it as IO

1. The slaveTypeLib servo identification needs to be configured 2. The controller's servo port is not connected to the slave station's IN port 3. The servo may be damaged 4. Finally, the ENI file may be wrong; ask the manufacturer to adapt it

## Q14: Error "Modbus address mismatch"

The custom address code has a problem, or the low-version address code does not match the high version; enter the backend and delete the modbus folder

## Q15: PN first connection shows connection lost

The PLC side needs to assign the IP address first

## Q16: Modbus frame loss issue

Check whether the scan cycle is consistent with the host computer

## Q17: Slave station list shows unknown slave station

1. Contact technical support to make a servo identification file. 2. If the servo identification file has been uploaded, check whether the servo file name is slaveTypeLib.json, and whether it was uploaded and then power cycled.

## Q18: After upgrading to a higher version, the "not in OP" error may appear

Delete the eni and regenerate it

## Q19: TCPIP communication reports connection failure

Check whether the IP is the host computer's IP, and the port number must be consistent with the host computer port number

## Q20: Modbus address code does not match; no response after entering the address code

1. The PLC address code needs -1 2. Export the modbusaddr file to check whether the address is correct

## Q21: PN communication frequently drops

1. Increase the communication cycle 2. Check the network cable connection, whether shielding is added, or whether the cable quality is poor

## Q22: Aotai welder CAN communication failure

1. Check that the welder baud rate is set to 500K and the welder ID is 8 2. Export the controller configuration; AOTAI communication may not have CAN communication and needs to be manually changed 3. Set the welder T22 parameter to CAN communication 4. The welder internal communication cable is the CAN communication cable 5. Check whether the CAN communication cable connected to the welder is properly connected

## Q23: The Motong MR1616 IO board is recognized normally, but there are no inputs/outputs in the IO monitor

The IO board eni has a problem; contact technical support to modify the eni

## Q24: 0

Modify the startup script and check the auto-generated eni

## Q25: After Modbus connection, IO start has no response

Change the priority of Modbus and IO

## Q26: The global point Modbus address write format is correct, but the actual value is abnormal or does not change

Enter the backend and check whether the global point file generation is corrupted; if so, find a good one to replace it

## Q27: Modbus connection status keeps jumping between connected and disconnected

Caused by the PLC communication cycle differing from the teach pendant

## Q28: Using the eni exported by TwinCAT and the eni exported by EC

It only takes effect when the library version is higher than 2.0.17

## Q29: Master station startup failure

Check for library issues, or issues with the auto-generated eni

## Q30: IGH master station eni modification method

It is best to modify the #1600 and #1A00 groups as custom groups.

## Q31: PN cannot connect

2207 has a PN switch screen; 2403 has no switch screen, connect directly.

## Q32: Troubleshooting C1102 PN connection loss

First check whether PN is connected; PN connection failure will cause connection loss.

## Q33: When adapting a Hanslaser body, the auto-generated eni causes the robot to be unable to power on

Empty PDOs and the PDO ports 3001-3005 and 2201-2202 need to be deleted from the eni

## Q34: Running linear instructions on the PN version disconnects the connection

It is related to the PN communication cycle; try increasing the PN communication cycle

## Q35: Network communication receives data format error

The parameter header/tail separator format is wrong

## Q36: Modbus float reading is garbled

Data exchange is required; select floatCDAB

## Q37: Why does network communication prompt a data format error?

The frame header/frame tail separators differ from the host computer; pay attention to the difference between Chinese and English characters.

## Q38: Modifying the communication cycle

Find the Settings - Robot Parameters - Slave Configuration screen, modify the communication cycle at the top right, then power off and restart.

## Q39: The teach pendant shows connection lost during new machine configuration

Check whether the network cable has problems; if the cable checks out fine, contact technical personnel.

## Q40: X02 communication port cannot be pinged

Check whether the corresponding IP is connected. The hardware teach pendant factory default IP is 192.168.1.13; the cabinet LAN1 port default is 192.168.2.14, and the LAN2 port default is 192.168.3.15.

## Q41: Teach pendant administrator password forgotten

Prepare a laptop and network cable, and contact technical personnel for remote handling.

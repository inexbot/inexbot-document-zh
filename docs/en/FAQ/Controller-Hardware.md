# Controller Hardware FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 11 entries -->

## Q1: The system time or date frequently resets, and the recorded time is inaccurate

1. The backup battery on the controller mainboard is depleted

## Q2: The C2200-A01 controller needs to wait more than 15 seconds after shutdown before powering on

This controller has capacitors; you need to wait for the capacitors to fully discharge

## Q3: A 2207 version C2200-A01 controller upgraded to the RTL1 program, the controller connection is lost

Network port 1 cannot be pinged; use network port 2 to replace the controller program from the backend

## Q4: When running on a computer with a virtual machine, the PC side shows "connection lost" even with the corresponding IP set

1. Check whether the virtual machine IP subnet on the computer's network connection page is consistent 2. Check whether the virtual machine is running normally

## Q5: How to use the X02 integrated drive cabinet without a teach pendant?

The teach pendant emergency stop needs to be bypassed; refer to the X02 specification wiring diagram or contact technical personnel for consultation.

## Q6: Short-circuiting the emergency stop without a teach pendant

For the T01 integrated drive cabinet, short pins 5 and 16 of the teach pendant port; for a normal split type, short pins 15 and 16 of the teach pendant port

## Q7: How to modify the controller IP

Set the network port to the desired IP, set the teach pendant IP to the same subnet, set the connection IP to the modified network port IP; multiple network port subnets cannot be set the same

## Q8: Recovering the IP of the integrated drive cabinet

Plug a network cable into the LAN port of the integrated cabinet with IP 192.168.2.13, modify the IP in the run.sh file under the g folder. If it cannot be pinged, you need to use the serial port to access the backend.

## Q9: X02-arm mainboard: flashing an image causes the network port to fail to connect

Delete the test script in the controller, delete rcS, and rename rcS-bak to rcS

## Q10: Multi-network-port controller: after modifying the IP, you forgot what it was changed to, causing the connection to be lost

Connect to another network port; after successful connection, the IP of the network port just modified can be viewed on the IP modification screen.

## Q11: The system time or date frequently resets, and the recorded time is inaccurate

The backup battery on the controller mainboard is depleted; replace the backup battery.

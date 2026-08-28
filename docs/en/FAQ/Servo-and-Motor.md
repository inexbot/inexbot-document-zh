# Servo and Motor FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 44 entries -->

## Q1: Enabling the robot reports "servo status word inconsistent"

1. First ask the servo manufacturer to adjust the response time to be consistent; 2. On the teach pendant - Settings/Operation Parameters, change the servo response time to 200 and increase it gradually until the error no longer appears

## Q2: Pressing enable on the robot has no response, the servo cannot power on

1. Check whether the eni file is correct 2. Check whether IO - Enable IO - Enable Hardwiring is turned on 3. Check whether the servo power input is closed; sometimes a relay is added to the servo power supply, and if the relay does not pull in, the servo will not power on 4. Check the servo communication data to see whether the PDO data sent by our controller is blocked

## Q3: Using the X01 control cabinet, the robot is not connected to the servo

1. The emergency stop button is pressed 2. The communication cable is not connected properly; check the communication 3. Check the power supply 4. eni configuration error; contact the manufacturer

## Q4: When configuring the Hechuan Y7 series servo, after pressing and releasing the enable button, there is a delay in power-off

Contact the Hechuan servo manufacturer to determine the number of encoder bits

## Q5: The current master station library file version does not match the driver file, and the servo is identified incorrectly

The corresponding driver file needs to be replaced

## Q6: The servo could be recognized before, but now it cannot be recognized

1. Check whether the emergency stop is engaged 2. Check whether the servo has power 3. Check whether the network cable is normal

## Q7: The teach pendant monitoring screen cannot display real-time speed or torque.

1. Check whether the eni file includes the 606c and 6077 PDO groups. 2. If not, add these two PDO groups, with speed corresponding to 606c and torque corresponding to 6077.

## Q8: When adapting the Tsino-Dynatron joint module, the controller reports "torque compensation value not configured" when torque feedforward is enabled

1. Check whether the rxpdo group in the eni file has 60b2 configured; if not, add it.

## Q9: Pressing the teach pendant enable button, the robot cannot be enabled

1. Check whether an enable IO has been set; after setting an enable IO, the enable button on the teach pendant becomes invalid; 2. Check whether the robot is set to virtual servo operation. 3. Check whether the eni file is correct and whether the PDO is missing

## Q10: The servo produces a brake release sound when enabled, but the teach pendant does not show running status

The running status only turns green after all servos are enabled; check that the control right of all servos is switched to external

## Q11: X02 reports overvoltage alarm 3210 during operation, how to handle it?

If the problem cannot be solved after checking according to the fault manual, check C00-12 bleed resistor power and increase it appropriately (max 200W), and increase C00-13 bleed resistor heat dissipation coefficient appropriately (default value is 30)

## Q12: X02 reports communication fault 7500 during operation, position loop timeout

Use the servo software to capture the waveform position loop interrupt scheduling time; if it is too large, increase R21-07 position loop scheduling division coefficient (default value is 4) appropriately, and after increasing, check whether the waveform position loop interrupt scheduling time increases.

## Q13: The servo drive displays an alarm, but the teach pendant does not show the servo alarm code

Contact the supplier to check whether the servo uploads the corresponding code into the 603F PDO

## Q14: Unit of motor speed in the motor status monitored by the teach pendant

Read as inc/s and convert to rpm

## Q15: The load rate in the motor status on the monitoring screen is 0

The system reads the servo's 20a1 PDO channel by default; first confirm with the servo manufacturer whether it is supported

## Q16: Robot servo error, axes 1 to 6 all show 0000

Check whether the network cable is loose, has poor contact, or has excessive noise interference

## Q17: Alarm "Motor exceeds the set torque range"

Check on the teach pendant whether the robot parameter / motor overload protection switch is turned on or whether the current torque value exceeds the set value

## Q18: X02 control cabinet: unplugging/reinserting the battery or encoder cable triggers servo alarm

Find servo parameter F3_10, change the current value to 4, save, restart and reset

## Q19: Robot "runs away" on enable

1. Motor parameters set incorrectly 2. Encoder zero point set incorrectly 3. UVW phase sequence connected incorrectly

## Q20: Servo alarm torque overload

1. Check whether the motor brake opens normally 2. Mechanical jam 3. Motor hardware problem

## Q21: Slight axis drop at the moment of disable

Find the corresponding servo parameter and set the enable-off waiting time when the motor is stationary to a longer value

## Q22: Jogging the robot has no response, but the teach pendant display changes

Check whether it is set to virtual servo; check whether the reducer is damaged

## Q23: Integrated drive cabinet alarms "encoder battery undervoltage"

If the alarm persists after replacing the battery, write 1 to pa80 on stp to reset the encoder, then recalibrate the zero point

## Q24: Qingneng servo cannot be enabled, both control right and eni are normal

Connect the servo debugging software to check the DC bus voltage; if it is incorrect, the servo main power is not supplied

## Q25: After replacing the servo motor, the encoder reports an error

Check whether the encoder wiring is correct

## Q26: X02 new unit slave station ID is wrong, causing the slave station list to be empty

Caused by incorrect entries in servo parameters F34.20 / F34.21

## Q27: X02 reports an encoder error under normal wiring conditions

Try clearing the multiturn value to restore the encoder

## Q28: X02 slave station list is empty after power-on, but modules are actually connected

1. Check whether the emergency stop terminals on the X02 cabinet are short-circuited. 2. Check whether the teach pendant emergency stop is reset. 3. After the module is powered on normally, check the communication cable plug definition

## Q29: 5-axis palletizing, the 5th axis cannot rotate

1. Check whether the power cable, encoder cable, brake, and servo have problems

## Q30: Why does connecting a new servo prompt "there is a slave station that cannot be adapted"

Contact technical support to provide the servo XML file, and have the servo technician make the identification file.

## Q31: Switching to drag mode reports "the current servo does not support torque mode"

Ask the manufacturer to add the corresponding drag parameter to the identification file.

## Q32: T01 emergency stop is not pressed, but error 005F emergency stop input alarm occurs during operation

Open monitoring and check whether inputs 51 and 53 change to 0; if they change to 0, it means they are being triggered falsely; contact the servo manufacturer.

## Q33: Servo error exits drag mode

Because OP is not in state during drag mode, check the network cables to confirm that all servo network cables are connected properly and OP is in state.

## Q34: How to adapt stepper motors

The system currently only supports motors driven via EtherCAT communication and CANopen communication.

## Q35: Alarm code is not displayed

The system reads the servo's PDO 603F; if it is not displayed, the servo manufacturer has not uploaded the corresponding alarm code.

## Q36: Servo alarm is displayed on the teach pendant, but pressing clear error cannot clear it

First contact servo technical support to determine the solution for the error and confirm the fault is eliminated, then try clearing the error with the teach pendant. If it still cannot be cleared, reset the fault on the servo software.

## Q37: Robot jitter

Increase the servo parameter rigidity and speed proportional gain.

## Q38: Motor vibration

The speed proportional parameter and rigidity are too high and need to be reduced.

## Q39: Cannot enable after using for a while

On the teach pendant screen, Settings/IO/Enable IO, check whether the enable hardwiring switch is turned on.

## Q40: Motor torque and speed cannot be monitored on the teach pendant

Check whether the ENI is missing the 6077 and 606C control words.

## Q41: Palletizing process position debugging, the screen shows red unreachable

You need to check whether the actual program run is reachable; the screen showing unreachable is only calculated from the robot's zero point position, not from the robot's current position.

## Q42: How to clear the servo multiturn value on the teach pendant

For brands such as Tsino-Dynatron, set 21D9 to 0x01 on the servo software.

## Q43: How to make dragging smoother?

1. First check whether it is a mechanical jam; after the servo releases the brake, check whether it can be pulled by hand. 2. Check whether the dynamics identification was completed correctly. 3. Check whether the load parameters match the actual situation.

## Q44: The machine cannot power on

First check whether the control right on the servo side has been given to the host computer; if power cannot be turned on after permission is given, contact technical personnel.

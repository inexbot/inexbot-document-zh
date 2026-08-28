# IO and Safety FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 11 entries -->

## Q1: X01, X02, C1201 IO signals have no response

1. Use a multimeter to measure whether the voltage is present (24V); 2. Upgrade the firmware package and confirm the voltage is normal after upgrade; 3. Contact the manufacturer to re-flash the firmware; 4. IO hardware is damaged

## Q2: The collision detection switch was turned on by mistake, error "Joint 1 collision" (or another joint)

1. Go to Settings - Human-Robot Collaboration - Mechanics function page and turn off the collision detection switch.

## Q3: Error "Robot 1 Emergency Stop 1 triggered"

1. Check the Settings - IO - Safety Settings page to make sure the DIN number for Emergency Stop 1 is set correctly. 2. Check the Settings - IO - Safety Settings page to confirm whether the enable switch needs to be on; if not used, it can be turned off. 3. Check whether the corresponding input IO line is triggered.

## Q4: Pressing the teach pendant emergency stop button has no response.

1. Check whether the emergency stop wiring of the teach pendant adapter board is connected; if not, connect it first. 2. Route 24V from the switching power supply to st1, and connect st2 to the input port of the IO board. 3. If the wiring is done, check whether the IO is configured. 4. Go to Settings → IO → IO Functions → Safety Settings and set the corresponding port to Emergency Stop.

## Q5: Cannot enable when using the enable hardwiring function

Check whether the enable hardwiring IO port is set correctly, or whether the wiring is abnormal.

## Q6: The teach pendant "Status - IO - Digital Input / Digital Output" screen displays "None"

1. Check whether the IO board network cable is plugged in; 2. In the "Settings - IO Settings - IO Configuration" screen, check whether the IO type and model are filled in correctly; 3. Check whether the IO wiring is correct.

## Q7: Fenglei IO cannot be used due to configuration

The input mode must be changed in the configuration, NPN or PNP, otherwise it cannot be used.

## Q8: In the stamping site, the press signal interference is severe and interferes with IO signal triggering

On the hardware side, add relay filtering when wiring IO signals; you can also increase the IO signal filtering parameters in the parameters.

## Q9: IO cannot be turned off under certain conditions

Check Settings - IO - Status Prompt Settings to see whether the IO has been configured to force output under certain conditions.

## Q10: How to determine whether an IO line is triggered?

Check on the teach pendant screen (most intuitive): Settings - IO - Status, and view the input/output status of the corresponding IO.

## Q11: X01, X02, C1201 IO signals have no response

1. Use a multimeter to measure whether the voltage is present (24V) 2. Check whether the IO board network cable is plugged in 3. Check whether the IO wiring is correct.

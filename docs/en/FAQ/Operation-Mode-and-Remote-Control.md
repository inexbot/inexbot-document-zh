# Operation Mode and Remote Control FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 9 entries -->

## Q1: IO works normally, but in remote mode running a program with IO reservation fails

1) Check Settings/Remote Program Settings/Remote Program Settings: whether the program is set correctly 2) Check Settings/Remote Program Settings/Remote IO Functions: whether the IO is set correctly 3) Check in Settings/Operation Parameters: whether the reservation mode modification is enabled

## Q2: Why does the system automatically power on when switching operation modes?

Check whether the auto power-on switch is enabled on the Settings - Operation Parameters page

## Q3: When running a program in operation mode, it prompts that the robot is not in a safe position

1. Manually return to the reset point and then start the program. 2. Turn off safety enable on the Settings - Reset Point Settings screen

## Q4: In remote mode, pressing the start button of the reservation box has no response

1. The start confirmation time is set too long. 2. There is a problem with the hardwiring of the start button.

## Q5: Before shutdown the teach pendant was switched to remote mode; after power-on, how to set it to remote mode?

Change the synchronous operation mode in the operation parameters to follow the teach pendant rotary switch.

## Q6: After reserving a program in remote mode, it stops after running only once.

Go to the "Settings - Remote Program Settings" screen and set the program run count to "0" for continuous looping; to set other counts, just fill in the value.

## Q7: Power-on can automatically be in remote mode

Set "follow the rotary switch" in the operation parameters

## Q8: Before shutdown it was remote mode; after power-on, how to set it to still be remote mode?

Change the synchronous operation mode in the operation parameters to follow the teach pendant rotary switch.

## Q9: The teach pendant rotary switch has been switched to remote mode, but after restart it prompts that it is in teach mode

The Settings/Operation Parameters on the teach pendant screen are not set to follow the rotary switch.

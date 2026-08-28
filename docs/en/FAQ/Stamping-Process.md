# Stamping Process FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 8 entries -->

## Q1: Press mode error

Check whether the X02 press mode signal is set to 1, or whether the press is in emergency stop state.

## Q2: Press signal abnormal, press execution cycle is less than the minimum stamping cycle

The press stamping time is less than the minimum stamping cycle; this may be because the minimum cycle time is not set properly, or the press top-dead-center signal is interfered with. Add the minimum stamping cycle time in the process parameters

## Q3: Press safety signal abnormal

The press safety signal function is enabled; when running the program to start the press, the press safety signal X07 is not set to 1.

## Q4: Press not at top dead center during material pick-up; press not at top dead center during material placement

Check whether the press is at top dead center

## Q5: Press signal abnormal, stamping process not executed

After outputting the press start signal, the press top-dead-center time does not change, or the press does not start.

## Q6: The distance between the placement standby point and the placement upper point is too small; the distance between the pick-up standby point and the pick-up upper point is too small

The distance from the placement standby point to the upper placement point and the distance from the pick-up standby point to the upper pick-up point are less than the minimum point interval set in the stamping parameters; reduce the point interval parameter or increase the distance from the upper point to the pick-up point

## Q7: Press safety signal abnormal

The press safety signal function is enabled; when running the program to start the press, the press safety signal X07 is not set to 1. Check whether signal X07 is set to 1, or whether interference is causing signal interference

## Q8: Placement-allowed signal abnormal

During placement, the placement-allowed signal changes; check whether the placement-allowed signal is being interfered with

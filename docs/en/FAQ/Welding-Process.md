# Welding Process FAQ

<!-- This page is auto-generated from the field FAQ knowledge base, 25 entries -->

## Q1: In manual operation of the welding process, the test current works, but the test voltage data is wrong or ineffective

Check whether the welder working mode in the welder settings is set to "separate"; the welder side also needs to be switched to "separate"

## Q2: During robot welding, the arc is unstable and the arc breaks frequently

1. Check the welding parameters and arc-start conditions 2. Check the cable and grounding 3. Check the TCP accuracy

## Q3: The weaving direction of welding is not parallel to the weld groove

1. Check the tool hand accuracy and TZ direction 2. A reference point can be used 3. The horizontal or vertical angle in the weaving parameters can be adjusted

## Q4: The weld head is large

Reduce the arc-start current and voltage, and enable the gradual change function

## Q5: Speed up welding

1. Reduce the arc detection confirmation time. 2. Control the wire stick-out so that it just touches the base material at the welding point. 3. Enable flying arc start

## Q6: Difference between left welding and right welding methods

When other welding conditions remain unchanged, when the wire changes from vertical to left welding, the penetration depth decreases and the weld bead becomes wider and flatter. In the flat position using right welding, the weld pool is blown backward by the arc force, so the arc can act directly on the base material, obtaining greater penetration depth, the weld bead becomes narrow and convex, the arc is more stable, and spatter is smaller

## Q7: Slow wire feed speed

The slow wire feed speed and the length of the wire from the base material at the start of arc start directly affect how fast the arc starts; the default value is generally 1.4m/min~3.6m/min

## Q8: Wire stick-out

Generally, the stick-out length is 10 to 15 times the wire diameter

## Q9: Large spatter during welding

1. Carefully adjust the voltage according to the welding current; use a one-knob (synergic) welding machine. 2. Clean the metal surface before welding.

## Q10: Porosity in the weld

1. Increase the shielding gas flow rate. 2. Reduce the arc voltage. 3. Reduce the wire extension length.

## Q11: Undercut in the weld

1. Slow down the welding speed and reduce the voltage. 2. Reduce the wire feed speed. 3. Change the torch angle so the arc force pushes the metal to flow.

## Q12: Wire sticking at welding end

Adjust the burnback time parameter inside the welder

## Q13: Welding arc start timeout

Increase the arc detection time

## Q14: The robot welds in place after arc start

Check whether flying arc start is enabled and turn it off.

## Q15: Megmeet welder EtherCAT communication: manual operation test of current and voltage does not match

The voltage needs to be set to the corresponding 0-50V or 10-50V in the teach pendant welding process - welding settings screen; the current system default is 0-550A, and the welder needs to be set to the corresponding current range

## Q16: Switching the welder working mode

Call the welder built-in process instructions

## Q17: Weaving gradually goes crooked

Check the tool hand direction, switch the tool coordinate system, jog X, Y, Z to see whether it is perpendicular to the torch; if not perpendicular, recalibrate the tool hand.

## Q18: After calling the welder's built-in process, the welder switches back to the previous mode after shutdown and restart

Do not turn off the welder, or call the built-in process again.

## Q19: Arc tracking has no effect

1. The current should be around 200A 2. In the program, first execute weaving start, then write tracking start

## Q20: Arc tracking weld bead is crooked

The tracking proportional coefficient is too large; reduce the proportional coefficient.

## Q21: Welding process: large arc-start head problem in the weld

Welding Process - Welding Parameter Settings - Arc Start Parameters: set the arc start current as small as possible, just enough to strike the arc. Enable the gradual change function.

## Q22: Arc position search with Megmeet welder, position search in reverse

During arc position search, the search direction goes in reverse because the Megmeet welder parameter FA4 - position search success polarity switch is off; set this parameter to ON.

## Q23: The welder is set up properly, but running the program does not strike the arc

The welding enable is not turned on.

## Q24: What to do if arc position search is unsuccessful?

1. Check whether the welder has a position search function, or whether the welder parameters are set accurately 2. Check whether the return distance is set

## Q25: External axis fixed-point weaving has pauses

This is a known issue; submit a requirement to upgrade the version to resolve it.

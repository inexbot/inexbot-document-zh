---
title: "Teach Pendant Image Replacement"
description: "Guide for replacing images on the teach pendant"
author: "qiuzegai"
date: "2026-07-1"
tags: ["Teach Pendant", "Image Replacement"]
category: "Manuals"
version: "1.0.0"
language: "en-US"
---

# Teach Pendant Image Replacement

Notes:

1. T20 teach pendant only supports replacing the boot image
2. Images must be in PNG format, except T20 boot image replacement which uses BMP format
3. Info text encoding must be UTF-8
4. Replacing left-side icons: This feature only supports version 22.07 and above
5. PC version does not need an upgrade; copy files to the change/img folder under the program installation directory
6. T30, T20 operation: To replace all content at once, compress all mentioned files into a single .zip archive and upgrade that file
7. Pay attention to English letter case when naming images

Special note: When saving an image as PNG format, the image filename must not include the extension suffix

![](./assets/ibhnzdniii7hhdm0bpqfg.png)

When file extension display is turned on, the image appears as:

![](./assets/e7qk9wrzug8k1vdrjafbg.png)

When file extension display is turned off, the image appears as:

![](./assets/i7iau0z0frlouy40ruave.png)

If the image shows as Logo.png.png when file extension display is on, it means the image name is Logo.png. Rename it by removing the .png suffix

## Replacing LOGO (Top-Left Corner Icon)

1. Prepare a logo image file with the following requirements: 145\*60 pixels, PNG format, named Logo.png (pay attention to English letter case);
2. Compress the image file into a .zip archive, e.g., logo.zip;
3. **T30, T20 operation:** Place the .zip archive in the root directory of a USB drive, plug it into the teach pendant, and upgrade the file.
4. **PC version operation:** Copy to the change/img folder under the program installation directory.

## T20 Replacing Boot Images (Power-On and Progress Bar Images)

1. Prepare two images: htq\_logo.bmp and htq\_logo\_sys.bmp, both with a resolution of 800\*600, recommended 24-bit color;
2. Compress the two images into a .zip archive, e.g., open.zip;
3. Place the .zip archive in the root directory of a USB drive, plug it into the teach pendant, and upgrade the file;
4. While restarting, hold down the second button from the top on the left side of the teach pendant, along with the START and STOP buttons. When four lines of text appear on the teach pendant, with the fourth line showing in red text "please manual restart your system", power off and restart the teach pendant.

## T20, T30 Replacing Program Startup Image Steps:

Note: StartImage.png is the image shown after the progress bar completes. SoftwareUpdatingBackground.png is the background image during program upgrade.

1. Prepare two images, both with a resolution of 800\*600, PNG format, named StartImage.png and SoftwareUpdatingBackground.png respectively (pay attention to English letter case), where the latter is the background image during program upgrade;
2. Compress the two files into a .zip archive, e.g., background.zip;
3. **T30, T20 operation:** Place the .zip archive in the root directory of a USB drive, plug it into the teach pendant, and upgrade the file.

(Note: StartImage.png is the image shown after the progress bar completes. SoftwareUpdatingBackground.png is the background image during program upgrade.)

## PC Replacing Program Startup Image

Note: WindowsStartImage.png is the image shown after the progress bar completes. SoftUpdatingBackgroundWindows.png is the background image during program upgrade.

1. Prepare two images, both with a resolution of 800\*600, PNG format, named WindowsStartImage.png and SoftUpdatingBackgroundWindows.png respectively (pay attention to letter case), where the latter is the background image during program upgrade;
2. Compress the two files into a .zip archive, e.g., background.zip;
3. **PC version operation:** Copy to the change/img folder under the program installation directory.

(Note: windowsStartImage.png is the image shown after the progress bar completes. SoftUpdatingBackgroundWindows.png is the background image during program upgrade.)

## Replacing Text Description

The text description is the company introduction text that appears in the "About" interface after clicking the logo on the teach pendant. The replacement method is as follows:

1. Prepare a txt document with content of 9

---

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: What image formats are supported for teach pendant image replacement?**

A: Images must be in PNG format, except for T20 boot image replacement which uses BMP format.

**Q: What is the resolution requirement for boot images?**

A: Boot images require a resolution of 800\*600, with 24-bit color recommended.

**Q: How do you replace the LOGO on the teach pendant?**

A: Prepare a 145\*60 pixel PNG image named Logo.png, compress it into a .zip archive, place it on a USB drive root directory, plug it into the teach pendant, and upgrade the file. For PC version, copy to the change/img folder under the program installation directory.

**Q: What should I do if the image shows double extensions like Logo.png.png?**

A: This means the image filename already includes .png. Rename the file by removing the extra .png suffix.

**Q: Can I replace multiple images at once?**

A: Yes, on T30 and T20, you can compress all image files into a single .zip archive and upgrade that file to replace all content at once.

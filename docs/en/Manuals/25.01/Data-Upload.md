---
title: "Data Upload"
description: "Data upload function usage manual, including FTP server configuration, data upload parameter settings, data format configuration, and other detailed instructions."
author: "jmz-09"
date: "2026-06-24"
tags: ["Teach Pendant", "Data Upload", "FTP"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Data Upload

The data upload function can automatically collect and upload the robot's current operating status and parameters at set intervals, and compile the data into CSV or TXT files for upload to a specified server.

## Environment Preparation

| Step | Operation Description |
| :--- | :--- |
| Install FTP Server | Install FTP server software |
| Log in to FTP Server | Log in to the FTP server with an administrator account |
| Create a Domain | Create a new domain. The domain ID is created by the user, and the bound IP address is the local IPv4 address |

![](./assets/_qbo5cdg4xv4jruoatkqg.png)

![](./assets/ciff_jtpokrfj0gq4nwtn.png)

## Create User

![](./assets/vtdxpf-fbvwfqiatwnmsy.png)

![](./assets/t76vfpxrhxog1atdxxblu.png)

| Parameter | Description |
| :--- | :--- |
| Username | Name defined by the user |
| Password | Password defined by the user |
| Home Directory | Click to select. The physical path is the directory where uploaded files are stored. Click to select the desired storage path. Below, select permissions (it is recommended to select all for full permissions), then click OK to complete configuration |

## Set Data Upload Parameters

Server IP, port, username, and password must match.

Path refers to creating a directory within the selected FTP path. For example: if the FTP home directory is D:// and the teach pendant data upload path is /robot/, the file storage path is D://robot/.

![](./assets/su7qnspfmdwdgfqzmdycu.png)

| Parameter | Description |
| :--- | :--- |
| Data Transfer Switch | Once enabled, the controller connects to the FTP server and uploads data. Enable this switch only after all parameters are filled in. When enabled, data collection and upload begins automatically on boot |
| Upload Method | Currently only supports FTP protocol. Please have an FTP server ready before using this function |
| File Format | Currently supports CSV and TXT formats. File content is the same; only the file format differs. CSV format is more convenient for data analysis |
| Server IP | The FTP server's IP address. Ensure the controller and FTP server are on the same network with the same gateway (controller gateway can be viewed/modified in Settings → System Settings → IP Settings) |
| Port | The port used by the FTP server's FTP protocol. The default port for FTP is 21 |
| Username | The username used to log in to the FTP server. A user must be created on the FTP server first |
| Password | The password used to log in to the FTP server |
| Path | The path where files are uploaded on the FTP server. This path is relative to the FTP root directory |
| Data Collection Period | Based on the set time, the controller collects current data at regular intervals and stores it in the file to be sent |
| Data Upload Period | Based on the set time, the controller sends the collected data files to the specified directory on the FTP server at regular intervals |
| Send Description File | The description file is sent before the first data file after boot or enabling [Data Transfer Switch]. Content can be customized, generally used to describe the current robot serial number and other information. If this switch is off, no description file is sent |

After configuration is complete, configure the data format for sending. After data format configuration is complete, enable the data transfer switch for automatic transmission.

After successful connection, the current connection count changes to 1.

![](./assets/gb-oxe1yqugidjl2lznol.png)

## Data Format

After configuring the FTP connection parameters, you need to configure the data format in the data file to be sent. When setting the data format, use special strings to represent the parameters to be sent. For example, to send the current date in the format "2024-01-01", enter the following in the data format: `$Y%-$m%-$d%` (without quotes).

### Special String Description

| Special String | Description |
| :--- | :--- |
| $Y% | Year |
| $m% | Month |
| $d% | Day |
| $H% | Hour |
| $M% | Minute |
| $S% | Second |
| $IP% | Local IP address |
| $MAC% | Local MAC address |
| $RPM_J1% | Axis 1 motor speed |
| $RPM_J2% | Axis 2 motor speed |
| $RPM_J3% | Axis 3 motor speed |
| $RPM_J4% | Axis 4 motor speed |
| $RPM_J5% | Axis 5 motor speed |
| $RPM_J6% | Axis 6 motor speed |
| $Torsion_J1% | Axis 1 motor torque |
| $Torsion_J2% | Axis 2 motor torque |
| $Torsion_J3% | Axis 3 motor torque |
| $Torsion_J4% | Axis 4 motor torque |
| $Torsion_J5% | Axis 5 motor torque |
| $Torsion_J6% | Axis 6 motor torque |
| $Load_J1% | Axis 1 motor load |
| $Load_J2% | Axis 2 motor load |
| $Load_J3% | Axis 3 motor load |
| $Load_J4% | Axis 4 motor load |
| $Load_J5% | Axis 5 motor load |
| $Load_J6% | Axis 6 motor load |

### Example Configuration

Desired results:

Description file name: Robot-R1_Year-Month-Day_Hour-Minute-Second

Description file content: Robot-R1, Year-Month-Day, Hour:Minute:Second, Local IP, Local MAC, Axis 1–6 motor speed, Axis 1–6 motor torque, Axis 1–6 motor load

Data file name: Robot-R1_Year-Month-Day_Hour-Minute-Second

Data content: Robot-R1, Year-Month-Day, Hour:Minute:Second, Local IP, Local MAC, Axis 1–6 motor speed, Axis 1–6 motor torque, Axis 1–6 motor load

Data format configuration:

Description file name: `Robot-R1_$Y%-$m%-$d%_$H%-$M%-$S%`

Description content:

```
Robot-R1,$Y%-$m%-$d%,$H%:$M%:$S%,$IP%,$MAC%,$RPM_J1%,$RPM_J2%,$RPM_J3%,$RPM_J4%,$RPM_J5%,$RPM_J6%,$Torsion_J1%,$Torsion_J2%,$Torsion_J3%,$Torsion_J4%,$Torsion_J5%,$Torsion_J6%,$Load_J1%,$Load_J2%,$Load_J3%,$Load_J4%,$Load_J5%,$Load_J6%
```

Data file name: `Robot-R1_$Y%-$m%-$d%_$H%-$M%-$S%`

Data content:

```
Robot-R1,$Y%-$m%-$d%,$H%:$M%:$S%,$IP%,$MAC%,$RPM_J1%,$RPM_J2%,$RPM_J3%,$RPM_J4%,$RPM_J5%,$RPM_J6%,$Torsion_J1%,$Torsion_J2%,$Torsion_J3%,$Torsion_J4%,$Torsion_J5%,$Torsion_J6%,$Load_J1%,$Load_J2%,$Load_J3%,$Load_J4%,$Load_J5%,$Load_J6%
```

## Notes

| No. | Description |
| :--- | :--- |
| 1 | Axis-related parameters require manual input of the axis number. For example, axis 1 speed: $RPM_J% requires writing 1 after J, i.e., $RPM_J1% |
| 2 | File naming rules: File names cannot contain these 9 special characters: \ / : * ? " < > \| |
| 3 | If uploading in CSV format, each item must be separated by an English comma "," |

Generated files are saved according to the created path.

![](./assets/ricfnffcq-gr0bmappri9.png)

## AI Q&A for Retrieval

**Q: What is the purpose of the data upload function?**

A: The data upload function can automatically collect and upload the robot's current operating status and parameters at set intervals, and compile the data into CSV or TXT files for upload to a specified server.

**Q: What upload method does the data upload function support?**

A: Currently only supports FTP protocol. Please have an FTP server ready before using this function.

**Q: What file formats does the data upload function support?**

A: Currently supports CSV and TXT formats. File content is the same; only the file format differs. CSV format is more convenient for data analysis.

**Q: What is the default port for FTP servers?**

A: The default port for FTP is 21.

**Q: How do I ensure the controller can connect to the FTP server?**

A: Ensure the controller and FTP server are on the same network with the same gateway (controller gateway can be viewed/modified in Settings → System Settings → IP Settings).

**Q: What is the difference between data collection period and data upload period?**

A: Data collection period refers to the controller collecting current data at regular intervals and storing it in the file to be sent. Data upload period refers to the controller sending the collected data files to the specified FTP server directory at regular intervals.

**Q: When is the description file sent?**

A: The description file is sent before the first data file after boot or enabling [Data Transfer Switch]. Content can be customized, generally used to describe the current robot serial number and other information.

**Q: How do I configure the date in the data format?**

A: Use special strings for dates. For example, to send the current date in the format "2024-01-01", enter `$Y%-$m%-$d%` in the data format (without quotes).

**Q: How do I configure the data format for axis parameters?**

A: Axis-related parameters require manual input of the axis number. For example, axis 1 speed uses $RPM_J1%, axis 2 speed uses $RPM_J2%, and so on.

**Q: What are the file naming restrictions?**

A: File names cannot contain these 9 special characters: \ / : * ? " < > \|

**Q: How are data items separated in CSV format?**

A: If uploading in CSV format, each item must be separated by an English comma ",".

**Q: What happens when the data transfer switch is enabled?**

A: When the data transfer switch is enabled, data collection and upload begins automatically on boot.

**Q: What is the FTP path configuration rule?**

A: Path refers to creating a directory within the selected FTP path. For example: if the FTP home directory is D:// and the teach pendant data upload path is /robot/, the file storage path is D://robot/.

**Q: How do I know the connection was successful?**

A: After successful connection, the current connection count changes to 1.

**Q: What should I pay attention to regarding the username and password in data upload parameters?**

A: Server IP, port, username, and password must match the configuration on the FTP server.

## Version History

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-24 | Initial version | jmz-09 |

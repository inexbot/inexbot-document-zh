---
title: "Auto Addressing Function"
description: "Auto Addressing Function Description"
author: "liweiqi"
date: "2026-04-15"
tags: ["INEXBOT Controller", "Auto Addressing Function", "Operation Manual"]
category: "Operation Manual"
version: "1.0.0"
language: "en-US"
---

# Auto Addressing Function

**The auto addressing function can search for the controller IP after the teach pendant is connected to the controller.**

**There are two places where the controller IP can be searched: 1. The IP Settings interface, 2. The Insert Teach Pendant shortcut interface.**

## IP Settings Interface

![](assets/zjbxn3f37sma4rjsokyyh.png)

![](assets/_zkeispv8z8hliljbeew4.png)

1. On the original IP interface, a new dropdown box has been added. After clicking Modify, click the dropdown box to open the dropdown interface. It will search for addresses on the teach pendant's subnet. After the search completes, results are sorted by the last digit of the IP address. Selecting a searched IP will update the text box.

2. The original input function of the text box remains unchanged - you can still enter an IP address to connect, and all other mechanisms remain the same.

## Insert Teach Pendant Interface

![](assets/4z27dlik2am8hedwydjfg.png)

A dialog box pops up when clicking Insert Teach Pendant.

![](assets/wxhaw1wprxygubpoum0aw.png)

1. The original input function of the text box remains unchanged - you can enter an IP address to connect.

2. You can click the dropdown box to open the dropdown interface. It will search for addresses on port 6000 on the teach pendant's subnet. After the search completes, results are sorted by the last digit of the IP address. Selecting a searched IP will update the text box. Click Confirm to start connecting.

![](assets/8hrf57xkvh1eew7jfzk5x.png)

As shown above, after selecting 192.168.1.15, click OK to start connecting.

Test Method:

1. If you click Cancel on this interface, the shortcut interface should still show Insert Teach Pendant.

2. This scenario is mainly for switching one teach pendant between multiple controllers. It is best to have 3 or more controllers.

3. IP search can be tested on other subnets.

## AI Retrieval Q&A (Q&A for Retrieval)

**Q: Where can the auto addressing function search for the controller IP?**

A: It can be used in two interfaces: one is the IP Settings interface, and the other is the Insert Teach Pendant popup interface.

**Q: How are the IPs found by auto addressing sorted and displayed?**

A: The system searches for controller addresses on the teach pendant's subnet and sorts them by the last digit of the IP address.

**Q: After using auto addressing, can I still manually enter an IP?**

A: Yes. Auto addressing is a new addition; the original manual IP input function remains unchanged and can be used normally for connections.

**Q: What scenarios is auto addressing mainly suitable for?**

A: It is mainly used for scenarios where one teach pendant needs to switch connections between multiple controllers. It is recommended to test with 3 or more controllers.

## Related Resources

- [Scan IP Function](扫描IP功能.md)

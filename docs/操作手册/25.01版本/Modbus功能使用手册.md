---
title: "Modbus功能使用手册"
description: "Modbus功能使用手册，包含Modbus指令、从站、主站等功能的详细说明。"
author: "jmz-09"
date: "2026-06-24"
tags: ["示教器", "Modbus", "通讯"]
category: "操作手册"
version: "1.0.0"
language: "zh-CN"
---

# Modbus功能使用手册

## Modbus指令

### MODBUS_OPEN---打开MODBUS连接

![](./assets/c3p2aseuki54i9nx_6yyk.png)

格式：MODBUS_OPEN【指令名称】Type=Master、Slave【主站、从站】ID【工艺号】。

功能：打开Modbus通讯连接。

参数：

| 参数 | 说明 |
| :--- | :--- |
| 主站/从站 | 选择主站，执行打开MODBUS连接指令，MODBUS主站连接成功<br><br>选择从站，执行打开MODBUS连接指令，MODBUS从站连接成功 |
| 工艺号 | 选择从站时工艺号无法修改，选择主站工艺号支持1---9 |

### MODBUS_CLOSE---断开MODBUS连接

![](./assets/2o5_ga8-mztzbwn_uwszq.png)

格式：MODBUS_CLOSE【指令名称】Type=Master、Slave【主站、从站】ID【工艺号】。

功能：断开Modbus通讯连接。

参数：

| 参数 | 说明 |
| :--- | :--- |
| 主站/从站 | 选择主站，执行MODBUS断开指令，MODBUS主站通讯断开<br><br>选择从站，执行MODBUS断开指令，MODBUS从站通讯断开 |
| 工艺号 | 选择从站时无工艺号，选择主站时工艺号支持1---9 |

### MODBUS_CONNECTION_STATUS---获取MODBUS连接状态

格式：MODBUS_CONNECTION_STATUS【指令名称】Type=Master、Slave【主站、从站】ID【工艺号】B/GB【状态存入的变量】。

功能：将Modbus通讯连接的状态存入变量，连接成功该变量值被赋值为1，连接失败选择的该变量被赋值为0。

![](./assets/rkigzqfoeiaigrry5zm5f.png)

参数：

| 参数 | 说明 |
| :--- | :--- |
| 主站/从站 | 选择主站，执行指令后将获取主站的连接状态<br><br>选择从站，执行指令后将获取从站的连接状态 |
| 工艺号 | 选择从站时无工艺号<br><br>选择主站工艺号支持1---9 |
| 状态存入变量名 | 将获取到的状态存入到变量<br><br>例如：Modbus从站连接，选择的变量是GB001，首先执行打开Modbus连接指令，再执行获取Modbus连接指令，如果Modbus从站连接成功的话GB001=1，连接失败GB001=0 |

### MODBUS_READ---MODBUS读指令

格式：MODBUS_READ【指令名称】ID【工艺号】4X /3X/ 4X-bit/ 3X-bit/ 0X/ 1X【地址类型】5【从站寄存器首地址】1【读从站地址个数】B001【数据存放首个变量】。

功能：读取Modbus中对应地址的数值。

参数：

| 参数 | 说明 |
| :--- | :--- |
| 工艺号 | 范围[1,9]指令里面选择的工艺号需要和Modbus参数界面选择的工艺号保持一致 |
| 地址类型 | 3X:读取Modbus中对应地址的值<br>4X：同3X<br>3X-bit：读取所选地址中所存值得任一bit的状态<br>4X-bit：同3X-bit<br>0X：可读可写的设备类型，相当于操作PLC的输出点<br>1X：只读设备类型，相当于操作PLC的输入点 |
| 数据类型 | 当数据存放的首个变量选I或GI时，从站的数据类型可选short和ushort（分别对应短整型和无符号短整型，前者范围为[-32768,32767]后者的范围为[0,65535]）<br><br>注意：数据存放首个变量选I或GI数据类型时需要和从站的数据类型一致，否则可能导致数据出错 |
| 从站寄存器首地址 | 根据指令参数里面设置的首地址读取参数值，如果参数里面设置的首地址是5，在执行读指令后会从Modbus第5个地址开始读 |
| 读从站地址个数 | 读取的地址个数，如果设置的读从站地址个数为3，执行读指令后会从Modbus首地址开始读取3个地址（包含首地址一共读3个） |
| 数据存放的首个变量 | 将读取到的参数存放到变量，如果选择的首个变量为I001,读取的地址个数为3，执行读指令会把参数值依次存入到I001、I002、I003 |

**示例说明1：**地址类型4X，数据存放的首个变量为GI001从站首地址1，读从站地址个数10。

例如：如下图执行Modbus读指令，将Modbus地址1---地址10的值读取到变量GI001-GI010。

![](./assets/k2nwywgnlapjsvcbbydrx.png)

![](./assets/vnstomuk3bsy-pbkfxn5o.png)

![](./assets/97ouvkdn7ygwko0w0oe1g.png)

**示例说明2:**地址类型3X-bit，数据存放的首个变量为GI001从站首地址1，读从站地址个数16。

例如：Modbus地址1中所存值为259，一个地址16位，则用二进制表示为0000 0001 0000 0011，将16位值按顺序存入16个变量（从选择的首个变量开始按从右往左的顺序依次将16位原码存入）。

数据存放的首个变量为GI001,则将259转为二进制码后按从右往左的顺序将每个数存入GI001---GI016中。

![](./assets/hpzisywoj04h_qic8earw.png)

![](./assets/ydb04rfo-gqla9dtkfwsc.png)

![](./assets/szqxnfbkuzurhgtf1zmnj.png)

**示例说明3:**地址类型3X-bit，数据存放的首个变量为I001从站首地址1，读从站地址个数8。

Modbus地址1中所存值为259，则用二进制16位表示为0000 0001 0000 0011，因为选择的读从站地址个数为8，执行Modbus读指令，按顺序存入8个变量（从选择的首个变量开始按从右往左的顺序）。

数据存放的首个变量为I001,则将259转为二进制码后按从右往左的顺序将读取到的8个值（0000 0011）存入I001---I008中。

![](./assets/-wgtju0s1fx05s7s7imsl.png)

![](./assets/svrv5zak1mpmeo_mphjq4.png)

注意事项：

1. 地址类型为3X-bit时从站地址个数范围是[0,16]。

2. 地址类型为3X-bit，存到变量时候的17位为符号位，0表示正数，1表示负数。

**示例说明4：**地址类型1X，数据存放的首个变量为I001，从站首地址1，读从站地址个数1。

例：如下图所示0X和1X只有"0"，"1"两种状态，Value选择On时表示1，选择Off时表示0，执行modbus读指令后将读取的对应地址状态存入到变量。

![](./assets/nsduvusapmk-5rgusi0wq.png)

![](./assets/nbc1q09jtbcvluwzktdew.png)

**示例说明5：**地址类型3X，数据存放的首个变量为S001，从站首地址1，读从站地址个数5。

![](./assets/dcc6bwqrtju9vt716qor0.png)

![](./assets/79qqmzzhkenztc51ra1eb.png)

![](./assets/ocovhter9-a_ch9okezgo.png)

执行效果：执行指令后将读取到的主站地址1-地址5的值存入变量S001，超过读取地址个位数的地址是无法读取。

注意事项：

1. 读取字符时会将读取到的所有值存入到一个变量，它跟整型、浮点型、布尔型变量不一样，不会根据设置的首地址，读从站地址个数顺延存入其它变量。

例如：如果设置的首变量是S001会将读取到的所有值存入S001。

2. 选择读取字符型变量时地址的Format改成十六进制Hex。

3. 两个16进制数表示ASCII一个字符，例如上图所示的0X2156、21代表一个字符，56代表一个字符。具体读取的字符可查看ASCII码表。

[ASCII码对照表](https://blog.csdn.net/sunyctf/article/details/131397591)

**示例说明6：**地址类型3X，数据存放的首个变量为D001，从站首地址1，读从站地址个数10。

![](./assets/xr2cpsjvcx3tzmxng6hgz.png)

![](./assets/uwwpzjagdqi3icbcowqjh.png)

![](./assets/9ia6frq-tlm_y1-qrpidk.png)

执行效果：执行Modbus读指令将读取到的浮点型数字存入D001-D005。

注意事项：由于寄存器中2个地址码表示一个浮点数，所以"读从站地址个数"应当是偶数，且读取浮点型变量时需要将地址的Format改成Float CD AB。

### MODBUS_WRITE---MODBUS写指令

格式：MODBUS_WRITE【指令名称】ID【工艺号】4X /4X-bit/ 0X【地址类型】B001【数据存放首个变量】1【从站寄存器首地址】5【写从站地址个数】。

功能：该指令用于通过Modbus将变量写入从站寄存器中对应位置的地址中。

参数：

| 参数 | 说明 |
| :--- | :--- |
| 工艺号 | 范围[1,9]指令里面选择的工艺号需要和modbus参数界面选择的工艺号保持一致 |
| 地址类型 | 4X:将变量里的值写入地址码<br>4X-bit：将变量组成16位二进制码写入地址码中<br>0X：将变量值写入地址码，只有"0"，"1"两种状态，变量有值的话写入1，变量没值写入0 |
| 数据存放的首个变量 | 写入的变量类型 |
| 从站寄存器首地址 | 开始写入的第一个地址，如果首地址为5，执行写指令会从modbus第5个地址开始写入 |
| 写从站地址个数 | 写入的地址个数，如果写入的地址个数为3，表示从首地址开始写入3个地址（包括首地址） |

**示例说明1：**地址类型4X，数据存放的首个变量为GI001从站首地址1，写从站地址个数5。

执行modbus写指令，会将以及被赋值的变量的变量值写入到对应的modbus地址码---GI001的值写入modbus地址1、GI002的值写入modbus地址2、依次写入，直到modbus地址5写入完成。

注意事项：当MODBUS_WRITE指令"数据存放的首个变量"。

![](./assets/vvob8ri4leee32trm9x-d.png)

![](./assets/rdab3-dyrr7voy79mg69t.png)

**示例说明2：**地址类型4X-bit，数据存放的首个变量为I001,从站首地址1，写从站地址个数10。

如下图所示I001=1对应地址1、I002=2对应地址2、I003=0对应地址3、I004=4对应地址4、I005=5对应地址5、I006=6对应地址6、I007=1对应地址7，依次排列I008、I009、I010分别对应的是地址8、地址9、地址10，因为I008、I009、I010没有赋值默认0表示。

因此I001-I010所赋的值用二进制表示（从左往右）为00 0111 1011，00 0111 1011转为十进制为123。

![](./assets/iya02hxu6qsvkvih8j5r-.png)

![](./assets/bq5do4-t1de779ufpnose.png)

注意事项：

1. 地址类型4X-bit时地址个数范围为[0,16]。

2. 地址类型为4X-bit时存到变量时候的17位为符号位，0表示正数，1表示负数。

**示例说明3：**地址类型4X，数据存放的首个变量为GS001,从站首地址1，写从站地址个数5。

![](./assets/up1tcksa7mvruz8dzmtbg.png)

![](./assets/usm9vtbk7frsm-52x8m-g.png)

执行效果：执行Modbus写指令将字符变量GS001的值写入到地址。

注意事项：

字符变量只能写入到一个地址，不会顺延写入。

例如：如果设置的首变量是GS001,写入个数为5，在程序里面给变量GS001、GS002、GS003、GS004、GS005都赋值，执行modbus写指令只会将变量GS001的值写入到地址，GS002-GS005的值无法写入。

4. 地址的Format改成十六进制Hex。

5. 一个地址码对应两个字符，一个字符对应两位16进制数。

例如上图所示GS001=QWET452,Q转十六进制是51，W转十六进制是57，字符QW转十六进制后写入地址1，字符ET写入地址2，字符45写入地址3，字符2写入地址4的第一位。写入进去的数值是否正确可对照ASCII码表。

[ASCII码对照表](https://blog.csdn.net/sunyctf/article/details/131397591)

## Modbus从站

![](./assets/jdqrtrqslhvbek9nnjbb8.png)

| 参数 | 说明 |
| :--- | :--- |
| 连接 | 打开连接使能开关后连接Modbus，不打开使能Modbus无法连接成功 |
| Modbus | 监测Modbus连接状态 |
| 心跳检测 | 打开后用于检测Modbus与控制器之间的收发频率，断开Modbus连接后心跳检测显示数据收发关闭 |
| 通讯断开时-停机 | Modbus通讯断开时，机器人下电 |
| 通讯断开时-不停机 | Modbus通讯断开时，机器人不下电 |
| 协议-RTU | 串口232、485通讯 |
| 协议-TCP | TCP协议 |
| 扫描周期 | 指系统扫描Modbus中范围内的数据的周期 |

***系统默认的超时时间为500ms，500ms没有收到数据的话默认自动断开。***

### Modbus poll从站连接

#### TCP协议

![](./assets/cgszx26s2dejvsj08j04o.png)

1. 点击设置-Modbus设置-Modbus参数，进入Modbus参数界面，打开连接开关。

2. 打开ModbusPoll软件。

3. 打开软件后点击 Connection，选择Connect,进入Concection Setup 界面。

![](./assets/piy3xrlaapse6ffunihpk.png)

4. connection选择ModbusTCP/IP，IP Address为当前连接的控制器IP。

设置好参数（图片填写参数仅为示例），点击ok。

注：IP地址是当前连接控制器的IP,选择TCP协议时主机的IP网段需要和控制IP网段一致。

![](./assets/pxewmc2si1qu4svj-g5yw.png)

5. 示教器页面显示已连接，如在Modbus参数界面显示已连接和未连接闪烁画面，需要在Setup------Read/Write Definition将Scan Rate参数的1000ms改为100ms。

6. Modbus 连接成功后就可以通过地址码控制机器人。

**示例说明1**：Modbus切换伺服状态；

4X类型地址码29写2，伺服停止；

4X类型地址码29写1，伺服就绪。

**操作方式**：

1. 点击Setup-Read/Write Definition。

![](./assets/eeq7t9h5kwiglkuzl-yrd.png)

2. 进入Read/Write Definition界面，选择地址类型为4X，设置起始地址Address、地址个数Quantity，勾选PLC Addresses （Base 1），设置好参数之后点击OK就可以在对应的地址码输入数值。

![](./assets/89rskv6aa1drekvnezpk6.png)

3. 双击对应的地址，填写相关地址码：

地址码29，Value写1，伺服状态切换为就绪；

地址码29，Value写2，伺服状态切换为伺服停止。

![](./assets/ydiazftuixzb5nvcwnuc3.png)

#### RTU协议

**232通讯**

![](./assets/tjxyuk479pnm9lgmenllt.png)

232通讯接线：

232串口线的引脚2接控制器COM2_RS-232端口的引脚3；

232串口线的引脚3接控制器COM2_RS-232端口的引脚2；

232串口线的引脚5接控制器COM2_RS-232端口的引脚5。

接线完成后打开ModbusPoll软件：

点击 Connection，选择Connect,进入Concection Setup 界面，如下图所示：

![](./assets/k0jdjukoaeetynxalgwmj.png)

7. connection选择Serial Port，Serial Setting 选择识别到的串口号，设置好参数（图片填写参数仅为示例），点击ok。

![](./assets/_uwvottv7dweuysl39p3n.png)

8. Modbus连接成功。

![](./assets/m8-esyty2xsqek0b70_jq.png)

9. Modbus连接成功后就可以通过地址码控制机器人，具体功能的地址码可以在《Modbus地址码列表》查看。

**485通讯**

485通讯接线：

485串口线的引脚1接控制器COM1_RS-485端口的引脚2；

485串口线的引脚2接控制器COM1_RS-485端口的引脚1。

1. 接线完成后打开ModbusPoll软件。

2. 点击 Connection，选择Connect,进入Concection Setup 界面。

![](./assets/_kkztpwnmpq5jycl9t6yc.png)

3. connection选择Serial Port，Serial Setting 选择识别到的串口号，设置好参数（图片填写参数仅为示例），点击ok。

![](./assets/hsgqqzfz0kl1adkzoftkp.png)

4. Modbus连接成功。

![](./assets/kwby9cl9xpjuszrgf3guw.png)

说明：

1. 232、485通讯时端口号要注意填写正确。

## Modbus主站

| 参数 | 说明 |
| :--- | :--- |
| 工艺号 | 主站连接时的工艺号，支持1-9个工艺号 |
| 协议 | TCP、RTU(232、485通讯) |
| Modbus | 监测Modbus主站连接状态 |
| 地址偏移-地址自动-1 | 起始地址为1 |
| 地址偏移-地址不变 | 起始地址为0 |
| Float大小端-ABCD | 顺序排序，按照字节的自然顺序存储数据。例如，32位整数0x12345678，存储顺序为12 34 56 78 |
| Float大小端-BADC | 单字反转，每个字（2字节）内部的字节顺序反转。32位整数0x12345678的存储顺序变为34 12 78 56 |
| Float大小端-CDAB | 双字反转，将数据按照两个字为单位进行反转。32位整数0x12345678的存储顺序变为56 78 12 34 |
| Float大小端-DCBA | 倒序排序，将整个数据的字节顺序完全颠倒。32位整数0x12345678的存储顺序变为78 56 34 12 |

### Modbus slave主站连接

#### TCP协议

如下图所示，TCP通讯时的IP地址为当前主机地址，不是当前所连接的控制器IP。

![](./assets/2z3exq8cf0yssxszp7ogx.png)

1. Modbus主站参数界面设置参数。

2. 新建工程，插入modbus指令。

![](./assets/dyr8hsg4ecuygb0heltu-.png)

3. 打开Modbus Slave软件。

4. 打开软件后点击 Connection，选择Connect,进入Concection Setup 界面。

![](./assets/cz1m3c9hj8ony-drmpa-e.png)

5. Connection选择ModbusTCP/IP，Port端口号需要和Modbus参数界面设置的端口号一致，点击ok。

![](./assets/cwr5z1topy9r3afp0qxic.png)

6. 执行第2步工程界面打开MODBUS连接指令,Modbus主站连接成功。

![](./assets/bl1k7azrq5z8q6n2jnmoj.png)

#### RTU协议

232、485通讯时接线方法可查看Modbus poll从站连接部分。

#### EC-RTU

使用方式与Modbus-RTU一致。

端口固定，不开放端口设置，目前仅适配特定机器人的末端IO

### Modbus 主站读取参数

功能：将Modbus地址里的参数读取到变量。

![](./assets/rnjczjgfb4_ss-ktsshxf.png)

![](./assets/zi0zqm_x8zdjctznbwqhw.png)

![](./assets/dbiqfcudlwiyq8y9mupi2.png)

示例说明：

1. 打开Modbus主站通讯；

2. Modbus主站连接成功的话变量GB001=1,否则GB001=0；

3. 执行Modbus读指令将Modbus slave对应地址的值读取到变量，首变量I001,读地址个数为10执行指令后将主站地址1-地址10的值读取到变量I001-I010；

4. 断开Modbus主站连接。

### Modbus 主站写入参数

功能：将赋值的变量值写入到对应的地址，如下为示意图。

![](./assets/nyjahto-xtwkkr9o_pnxt.png)

![](./assets/0sbp-oqqsu5b9e6ghuqni.png)

示例说明：

1. 打开Modbus主站通讯；

2. Modbus主站连接成功的话变量GB001=1,否则GB001=0；

3. 3-8行指令给写入的变量赋值；

4. 执行Modbus写指令将GI001-GI005的值写入到主站地址1-地址5;

5. 断开Modbus主站连接。

### Modbus修改地址码

1. 插入u盘，导出控制器配置。

2. 在导出的配置文件中找到modbusAddr.json文件。

![](./assets/doupxwswtxjxiy49wzmup.png)

3. 使用Notepad++等文本编辑软件打开

![](./assets/ro6pxvm2naolk_zldoxsn.png)

4. 打开后可以看到一个{}中包含一组地址码参数（系统会自动生成一份原始地址码）。

![](./assets/aacad3rpgcb6m2digup23.png)

5. 修改地址直接更改addr后的数字，数字为0时，该地址码功能无效。

![](./assets/lbwjemq3vd7ulszvaewtb.png)

注意事项：修改的地址码不能和其它地址码一样，否则会影响其它功能的使用。

6. 修改完成后点击保存。

![](./assets/mlmivti09sfz8-dr-in8r.png)

7. 然后重新导入修改完参数的配置文件，重启生效。

![](./assets/cotxusv8wuklpvmos3wfp.png)

### Modbus的使用

#### Modbus远程运行程序

Modbus程序如何运行请看《示教与运行》手册。

#### Modbus修改全局位置变量

1. 4X类型2004地址码写0，表示GP点。

2. 4X类型2004地址码写1，表示GE点。

如下图2004地址码写0，变量类型为GP。

![](./assets/4s46lsn-sl2mgv_hzxtaw.png)

3. 4X类型2000地址码写的数值表示选中的变量编号，编号为1-9999。

如下图2000地址码写1，选中GP0001变量：

![](./assets/o2f9fkmf5bskgsqgpaisp.png)

4. 修改机器人点位：地址码2017-2028。

2017-2028的Format改为FloatCD AB，输入参数值。

如图修改GP0001变量机器人点位为（34，45，23，23，34，56），地址码从2017开始包括2017，每2个地址码代表机器人一个轴的值，即2017、2018表示1轴坐标，2019、2020表示2轴坐标，2021、2022表示3轴坐标，2023、2024表示4轴坐标，2025、2026表示5轴坐标，2027、2028表示6轴坐标。

![](./assets/f82rgppq8bdu5jjtbrrvw.png)

5. 修改外部轴点位：地址码2031-2036，且仅支持3个外部轴。

2031-2036的Format改为FloatCD AB，然后输入数值。

Modbus地址码从2031开始，包括2031。2031、2032表示O1坐标、2033、2034表示O2坐标、2035、2036表示O3坐标。

![](./assets/k2itonu_rsmdkzzxiixqr.png)

6. 修改完参数后地址码2003写1，表示将修改完的值写入变量，即保存。

![](./assets/yiaxq75zufcvxghznea-h.png)

![](./assets/avwc_96ckkz2-rj9nqgg3.png)

#### Modbus写入读取100个位置

起始地址3000,每个GP点坐标系占一位，形态占一位。每个轴位置占两位。

起始变量：GP0001。

如图所示：地址码3000表示GP0001的坐标系，地址码3001表示GP0001的形态，

地址码3002、3003表示一轴点位，地址码3004、3005表示二轴点位，地址码3006、3007表示三轴点位，地址码3008、3009表示四轴点位，地址码3010、3011表示五轴点位，地址码3012、3013表示六轴点位。

地址码3014、3015表示GP0002的坐标，形态，地址码3016-3027表示GP0002坐标轴点位，依次类推。

![](./assets/ksj2l8wvlm3j1pae29u6m.png)

说明：每个轴位置的地址码Format为FloatCD AB。

### Modbus多主站连接

1. 将电脑与一个或多个触摸板通过交换机连接到控制器上。

2. 控制器作为从站，Modbus poll和触摸板作为主站，Modbus poll可以多开作为多个主站，目前最多支持同时连接9个主站。

![](./assets/kmu6tmfvfel0wgdpe3hml.png)

3. Modbus poll点击connection选择connect，连接类型选TCP,IP地址与端口号与示教盒保持一致，扫描周期与示教盒一致。

4. Modbus Poll与触摸板可以同时控制机器人。

### Modbus与IO优先级

1. 通过显示器进入控制器在robot/config/目录下找到ModbusAddr.json，或者导出配置后修改ModbusAddr.json文件。

2. 打开ModbusAddr.json。

![](./assets/5qqkfldogdp1rjhc0kcu1.png)

3. coexistIOControl：false表示Modbus与IO不共用；Modbus连接上时IO不能控制机器人。

4. coexistIOControl：true表示Modbus与IO共用，Modbus和IO可以同时控制机器人。

当modbus与IO共用时，此时调取作业文件调取的是【远程程序设置】中的作业文件，同时【操作参数中-预约模式】必须打开。

5. coexistIOControl：false，ModbusPriorityHigh：false/true都无影响。

Modbus默认优先级高且Modbus连接上时IO不能控制。

6. coexistIOControl：true，ModbusPriorityHigh：false。

表示modbus和IO共用且IO优先级高，即Modbus和IO可以同时控制机器人，modbus和IO的断点与当前行运行逻辑根据示教盒上设置的执行。

![](./assets/qnvhqf30klsnsncghae0i.png)

7. 当coexistIOControl：true，modbusPriorityHigh：true。

表示IO不能运行自己的程序，而是IO(在示教器上的设置）控制modbus选择的程序以及运行次数和总次数。

且在共用时，只要优先级高的那一方未连接，另一方功能不可用。

### Modbus触摸屏使用流程

本节使用威纶通触摸屏、modbusTCP协议为例；触摸屏型号为MT6071iP。

编写程序------设置Modbus程序------设置Modbus参数------切换到远程模式------触摸屏准备------选择程序------运行。

1. 编写程序

用示教器编写程序，要保证能正常运行。

2. 设置Modbus程序

在"设置-Modbus设置-Modbus程序"中设置好程序，设置成功会已选程序列表会显示该程序名称，共可以设置1000个程序。

3. 设置Modbus参数

在"设置-Modbus设置-Modbus参数"中设置协议为TCP，控制器作为主/从站设置为从站，IP不修改，端口设置为502，打开连接使能；重启控制器后生效。

![](./assets/0aabuobilgntmj58tfkar.png)

![](./assets/zknob_jfwaathw3muqf58.png)

Modbus参数说明：

| 参数 | 说明 |
| :--- | :--- |
| 连接 | Modbus设置完成需打开连接按钮，右侧可查看连接状态 |
| 心跳检测 | 打开后用于检测Modbus与控制器之间的收发频率，断开Modbus连接后心跳检测显示数据收发关闭 |
| 协议 | 分为TCP协议、RTU协议 |
| 主/从站 | 主站、从站 |
| TCP参数-IP | Modbus设备IP地址，仅设置为主站时有效 |
| TCP参数-端口 | Modbus设备端口 |
| RTU参数-从站ID | 默认为1即可 |
| RTU参数-端口 | 控制器串口号 |
| RTU参数-波特率 | 填触摸屏对应的波特率 |

1. 切换到远程模式

将模式选择钥匙旋转到远程模式位置或点击程序中的模式状态，选择远程模式。

注：当控制器同时连接IO、Modbus设备、示教器时，三个设备的优先级为示教器>Modbus设备>IO设备。当切换到远程模式后，以Modbus设备有效，IO设备无效，此时关闭Modbus设备中的使能按钮，则IO有效。

2. 触摸屏准备

将触摸屏RJ45网口、示教器网口、控制器"示教盒"网口连接到同一交换机上。

触摸屏连接控制器IP：192.168.1.13，端口：502。

![](./assets/-m5ekfrrb0tlc1-yfrjiq.png)

触摸屏程序编辑好后运行，示教盒远程界面Modbus未连接变为Modbus已连接。如图：

![](./assets/xltsnwftxlsqrf5qa3nph.png)

3. 选择程序

使用触摸屏向4x类型地址码45写1，机器人1选中演示程序1；

使用触摸屏向4x类型地址码61写5，机器人1设置运行次数为5（不生效），使用触摸屏向4x类型地址码71写1，确认修改运行次数（运行次数5生效）。

4. 运行

使用触摸屏向4x类型地址码29写1，切至伺服就绪；

使用触摸屏向4x类型地址码19写1，运行作业文件。

## AI 检索专用问答对 (Q&A for Retrieval)

**Q: MODBUS_OPEN指令的功能是什么？**

A: MODBUS_OPEN指令用于打开Modbus通讯连接。

**Q: MODBUS_CLOSE指令的功能是什么？**

A: MODBUS_CLOSE指令用于断开Modbus通讯连接。

**Q: MODBUS_CONNECTION_STATUS指令的功能是什么？**

A: MODBUS_CONNECTION_STATUS指令用于获取Modbus通讯连接的状态，连接成功变量值为1，连接失败变量值为0。

**Q: MODBUS_READ指令支持哪些地址类型？**

A: MODBUS_READ指令支持的地址类型包括：4X、3X、4X-bit、3X-bit、0X、1X。

**Q: MODBUS_WRITE指令支持哪些地址类型？**

A: MODBUS_WRITE指令支持的地址类型包括：4X、4X-bit、0X。

**Q: Modbus从站支持哪些通讯协议？**

A: Modbus从站支持RTU（串口232、485通讯）和TCP协议。

**Q: Modbus主站支持哪些通讯协议？**

A: Modbus主站支持TCP和RTU(232、485通讯)协议。

**Q: Float大小端有哪些选项？**

A: Float大小端有四个选项：ABCD（顺序排序）、BADC（单字反转）、CDAB（双字反转）、DCBA（倒序排序）。

**Q: 如何修改Modbus地址码？**

A: 修改Modbus地址码的步骤：1.插入U盘导出控制器配置；2.在导出的配置文件中找到modbusAddr.json文件；3.使用文本编辑软件打开并修改addr后的数字；4.保存并重新导入配置文件，重启生效。

**Q: Modbus与IO优先级如何设置？**

A: 通过修改ModbusAddr.json文件中的coexistIOControl和ModbusPriorityHigh参数来设置优先级。coexistIOControl为false时Modbus与IO不共用；为true时可以共用，此时ModbusPriorityHigh决定哪方优先级更高。

**Q: 如何使用触摸屏控制机器人？**

A: 使用触摸屏控制机器人的流程：编写程序→设置Modbus程序→设置Modbus参数→切换到远程模式→触摸屏准备→选择程序→运行。

**Q: 读取字符型变量时需要注意什么？**

A: 读取字符型变量时需要注意：1.所有值存入一个变量，不会顺延存入其他变量；2.地址的Format需改成十六进制Hex；3.两个16进制数表示ASCII一个字符。

**Q: 读取浮点型变量时需要注意什么？**

A: 读取浮点型变量时需要注意：1."读从站地址个数"应当是偶数；2.地址的Format需改成Float CD AB。

**Q: 地址类型为3X-bit时地址个数范围是多少？**

A: 地址类型为3X-bit时地址个数范围是[0,16]。

**Q: 地址类型为4X-bit时地址个数范围是多少？**

A: 地址类型为4X-bit时地址个数范围是[0,16]。

## 版本历史

| 版本 | 日期 | 变更内容 | 作者 |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-24 | 初始版本 | jmz |

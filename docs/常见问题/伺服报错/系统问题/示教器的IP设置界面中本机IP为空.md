# 示教器的IP设置界面中本机IP为空

## “设置-系统设置-IP设置”中的示教器IP为空。

通过电脑连接控制器或者用键盘调试示教器； - 输入指令“cd空格/etc/network”，回车，“cp空格interfaces_bak空格interfaces”，回车，“vi空格interfaces”，回车； - 在新弹出的界面中，按键盘的“INS”按键，修改其中的IP为192.168.1.235，之后按下“ESC”按键，输入“:wq”，回车，重启示教器。







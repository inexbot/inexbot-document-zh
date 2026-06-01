# 0xFF0C -清能德创

## EtherCAT总线通讯异常

a. 可能原因
i. EtherCAT通讯受到干扰
ii. EtherCAT网线断开或接触不良
iii. 上位机实时性不够
iv. 上位机EtherCAT主站底层DC同步机制与驱动器需求不匹配
v. 驱动器内部电路异常
b. 处理措施
i. 优化EtherCAT通讯布线，加强抗干扰措施，比如使用超5类屏蔽网线，控制器保证可靠接地等
ii. 检查EtherCAT网线连接确保连接可靠
iii. 更换实时性更强的上位机，或延长EtherCAT通讯周期
iv. 适当增大伺服参数0x20D3设定值
v. 修改上位机EtherCAT主站底层DC同步机制，确保上位机下发RxPDO数据比DC同步信号至少提前100us
vi. 更换驱动器
c. DriveStarter波形分析







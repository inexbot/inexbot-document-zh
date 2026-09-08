# 0xFF0C - EtherCAT总线通讯异常

- 优化EtherCAT通讯布线，加强抗干扰措施，比如使用超5类屏蔽网线，控制器保证可靠接地等
- 检查EtherCAT网线连接确保连接可靠
- 更换实时性更强的上位机，或延长EtherCAT通讯周期
- 适当增大伺服参数0x20D3设定值
- 修改上位机EtherCAT主站底层DC同步机制，确保上位机下发RxPDO数据比DC同步信号至少提前100us
- 更换驱动器
- 使用DriveStarter波形分析

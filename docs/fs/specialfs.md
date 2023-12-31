# 特殊文件系统

## sysfs 文件系统

<div id="sysfs"/>
sysfs 文件系统是一种特殊的文件系统, 与 /proc 类似, 通常被安装与 /sys 目录. sysfs 文件系统的目标是要展现设备驱动程序模型组件之间的层次关系, sysfs 文件系统中普通文件的主要作用是表示驱动程序和设备的属性

该文件系统相应的高层目录如下

1. block

块设备，它们独立于所连接的总线

2. devices

所有被内核识别的硬件[设备](../driver/device.md), 依照连接它们的[总线](../driver/bus_type.md)对其进行组织

3. bus

系统中用于连接设备的[总线](../driver/bus_type.md)

4. class

系统中[设备的类型](../driver/class.md)(声卡、网卡、显卡等), 同一类型可能包含由不同总线连接的设备, 于是由不同的驱动程序驱动

5. power

处理一些硬件设备电源状态的文件


6. firmware

处理一些硬件设备的固件的文件


sysfs 文件系统中所表示的设备驱动模型组件之间的关系就像目录和文件之间的符号链接的关系一样, 比如, 文件`/sys/block/sda/device`可以是一个符号链接, 指向`/sys/devices/pci0000:00`, 即 `/sys/block/sda/device` 表示`block`(块设备)下的`sda`设备, 这个设备具体对应的硬件设备就是`/sys/devices/pci0000:00`, 所以这里就建立一个符号链接, 然后, `/sys/block/sda/device/block` 是到目录 `/sys/block/sda` 的一个符号链接, 这表明这个`PCI`设备是`SCSI`磁盘的控制器


[kobject](../driver/kobject.md) 是隐藏在 sysfs 虚拟文件系统后的机制, 对于 sysfs 中的每个目录, 内核中都会存在一个对应的 kobject, 每个 kobject 都输出一个或多个属性, 它们在kobject 的sysfs目录中表现为文件, 其中的内容由内核生成

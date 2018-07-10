---
layout: post
title: 18年第27周：git上传速度只有10kb每秒怎么解决？
description: 对于夹杂着图片的大文件，动辄十几兆上百兆，速度10Kb每秒能忍受？
# categories: [01-Essays, 02-Habit, 03-EnglishStudy, 04-PythonStudy, 05-PythonLib, 06-MachineLearn, 07-RandomRearch, 08-Tools]
# tags: [Demo]
categories: [08-RandomRearch]

---

## 能解决的方案：
> - 利用科学上网，我用的是灯笼，设置全局代理。
> - [CSDN-git clone 过慢科学加快速度](https://blog.csdn.net/initialdmg/article/details/74999176)
> - 注意：因为我科学上网软件管理的http(s)端口是50599, 因此，我的全局代理设置将文章中介绍的34828改为50599。
> - 结果：10kb变700kb, 有时达到一千多K.

---

# 试过但没解决的方案：
> - 方法1： 修改hosts表：
  > - https://blog.csdn.net/tsq292978891/article/details/78260066
  > - https://blog.csdn.net/qq_21004057/article/details/53168659
  > - https://blog.csdn.net/wynter_/article/details/64572012
> - 方法2： 修改git的ssh认证：
  > -  https://blog.csdn.net/Edin_BlackPoint/article/details/73090922
> - 方法3： 修改防火墙设置：
  > - https://blog.csdn.net/sw277378347/article/details/44947013

---

---
layout: default_md
title: 18年第24周：Python下使用MongoDB详解（pymongo库）
---
# 使用步骤：
>- 1、前提：已准备好的环境
>- 2、MongoDB：下载-安装-配置MongoDB
>- 3、PyMongo：安装Pymongo第三方库
>- 4、Python：编写测试MongoDB的.py文件

![image.png](https://upload-images.jianshu.io/upload_images/4769551-092d727b42ca6c62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/480)

-------------------------------------------------------------------------------------------------
# 具体详解：
##1、前提：已准备好的环境
>系统（Windows 10）、
>解释器（Python3.6）、
>编译器（Atom）、

##2、MongoDB：下载-安装-配置MongoDB
- **下载**
>- 下载链接：[亲测可用于Windows10的MongDB3.4](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.4.15-signed.msi)
>- 更多下载链接：[亲测有些安装不成功](https://www.mongodb.com/download-center#community)

- **安装：**类似安装软件
>- 双击.msi文件
>- ![image.png](https://upload-images.jianshu.io/upload_images/4769551-b889015d7bcd3022.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>- ![image.png](https://upload-images.jianshu.io/upload_images/4769551-04a0a00e749fcf1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- **配置：**
>- 配置文件夹：一是要新建一个存放数据.db的文件夹，二是要新建一个存放配置信息（类似身份证）的文件夹。
>比如：
>D:\MongoDB\mydata\db 用于存放以后新建的各种db数据
>D:\MongoDB\mydata\log 用于存放mongod.log文件（配置文件）
>![成功后显示](https://upload-images.jianshu.io/upload_images/4769551-64b375190631dfe4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
以后每次启动MongoDB的时候都需要从cmd命令行模式下运行下面这个：
![运行MongoDB服务](https://upload-images.jianshu.io/upload_images/4769551-fad26890f96dbab2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>![image.png](https://upload-images.jianshu.io/upload_images/4769551-9c51cb4d1f38bc14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##3、PyMongo：安装Pymongo
>![pip 按照第三方库pymongo](https://upload-images.jianshu.io/upload_images/4769551-a9add75d4d1902b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>![image.png](https://upload-images.jianshu.io/upload_images/4769551-4a59c01699536fee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##4、Python：编写测试MongoDB的.py文件
>- ![image.png](https://upload-images.jianshu.io/upload_images/4769551-c96d3f08d31f63cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>- 由上图可知：首先，我们得把MongoDB运行起来，再导入pymongo模块，最后编写python文件
>- 运行MongoDB服务
>- ![image.png](https://upload-images.jianshu.io/upload_images/4769551-c0bd00f930b1982a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>- 导入pymongo库
>- ![](https://upload-images.jianshu.io/upload_images/4769551-4813741ce3671891.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>- 编写测试MongoDB代码
>- ![image.png](https://upload-images.jianshu.io/upload_images/4769551-a6724fbb3c305c8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>- 具体可参考：[菜鸟教程：Python MongoDB](http://www.runoob.com/python3/python-mongodb.html)

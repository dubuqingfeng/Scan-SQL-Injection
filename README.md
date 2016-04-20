##这是一只README

###说好的项目简介

一个用于SQL注入检测的chrome扩展。Developing。

在2016年的某一天(2016年4月18日)晚上，在浏览网页的时候在想，有时候手动sqlmap检测(sqlmap判断是否可以注入利用)效率有点低，可不可以一边浏览网页，一边进行一些SQL注入的测试呢，虽然乌云上好多人都已经做过类似的东西了，有些是通过tornado的写代理服务器，通过代理服务器去请求sqlmapapi，现在是通过chrome扩展，进行自动化的检测。

###Server(sqlmap)配置

```
python sqlmapapi.py -s
```

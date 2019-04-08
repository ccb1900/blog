# 命名

包应当以小写的单个单词来命名，且不应使用下划线或驼峰记法。

按照约定，只包含一个方法的接口应当以该方法的名称加上-er后缀来命名，如 Reader、Writer、 Formatter、CloseNotifier 等。

最后，Go中约定使用驼峰记法 MixedCaps 或 mixedCaps。

# 类型与变量
变量分为包变量和函数变量

零值，默认初始化

debug时为何看不到包变量

常量不能简化声明

类型推断

类型转换

浮点数选择

包变量必须使用var关键字，不可使用简化声明

各种运算符

# 控制流
for，switch，if，defer（使用场景）的用法

break是可以被省略的

switch可以用表达式

defer是在函数返回之后执行，对应的数据结构是栈。
```go
defer println("hello1",a)
defer println("hello2",a)
defer println("hello3",a)
```
按照321的顺序执行

defer 可以用来关闭文件

# 并发
- channel的用法

- go的用法
- [go的内存模型-中文](https://go-zh.org/ref/mem)
- [go的内存模型-英文](https://golang.org/ref/mem)


# 其他

go程序的生命周期，内存分配

测试

错误处理

## 日志
- 日志记录
- 日志驱动

## json解析
- 解析json字符串
- 数据库数据输出为json

## sql
- 读取方式
- 驱动
- 例子1 
- 例子2 

## 文件操作
- 读写
- 权限
- 模式
- 关闭
## 切片操作
## map操作
## 数组操作
## 包
#### 包管理
#### 常用包
- io
- os
- log
- sql
- strings
- bytes
- bufio
- context
- unicode
- sync
- builtin https://golang.org/pkg/builtin/#append
	- make可以创建slice，channel，map
## 面向对象
go没有类，但是可以为类型定义方法

方法是具有特殊接收器参数的函数

接收器出现在func关键字和方法名称之间的自己的参数列表中

方法只是一个带有receiver参数的函数

非结构体类型一样可以拥有方法

# 扩展类型
### 指针
go的指针没有指针运算，这点和c语言不一样
### 结构体
结构体是字段的集合。

结构体指针

通过结构体指针访问成员变量

结构体占用空间

### 数组
数组的程度是固定的

数组声明中不可使用变量（non-constant array bound n）

### 切片
包含第一个元素，不包含最后一个。半闭半开区间

切片不存储任何数据，它只描述底层数组的一部分。

更改切片的元素会修改其基础数组的相应元素。

共享相同底层数组的其他切片将看到这些更改。

如果省略切片的最小值，则默认为0。省略最大值，默认为数组长度

切片的切片也是有意义的

切片有长度和容量两个属性，切片的长度是它所包含元素的数量，切片的容量是基础数组中元素的数量，从切片中的第一个元素开始计算。（数组长度-切片起点的值）

nil slice 没有底层数组；slice默认值是nil。

使用make创建切片make([]int,len,cap)

[了解更多关于切片的信息](https://blog.golang.org/go-slices-usage-and-internals)

range 类似php和java的foreach结构

### map

map默认值是nil
索引不存在的key，不回报错，只会返回零值
### 函数
函数也是值，可以像其他值一样传递。可以作为函数参数和返回值

# 使用mod
- 设置代理
- 搭建私服
# 文档

每个文件都有init函数，注意 不是包。一个包可以有多个init函数

# 反射
# 测试
https://github.com/Unknwon/the-way-to-go_ZH_CN/blob/master/eBook/13.9.md

# session
# socket
# channel
针对channel没有缓冲区的操作，无论是读还是写，都是阻塞的操作，所以需要多个携程配合操作，有读有写。
可以在主线程用time.Sleep(time.Duration(100*time.Millisecond))阻塞，等待携程调度。
```
go func(ch chan int) {
		fmt.Println("x")
		inOut<-2
		fmt.Println(2,"y")
		inOut<-3
		fmt.Println("3","z")
	}(inOut)
	go func(ch chan int) {
		fmt.Println("x1")
		inOut<-4
		fmt.Println("4","y1")
		inOut<-5
		fmt.Println("5","z1")
	}(inOut)
	go func(ch chan int) {
		fmt.Println("x2")
		inOut<-6
		fmt.Println("4","y2")
		inOut<-7
		fmt.Println("5","z2")
	}(inOut)
```
每一个都会被阻塞。必须先准备好读 才可以接受写。

如果有缓冲区就不一样了，可以往里面一直放东西，只要不超过容量。

```
inOut = make(chan int,100)
```
# orm

# 缓存区与无缓存
channel 是同步的，或者说是无缓存的。一个任务向channel写入消息的操作会一直阻塞，直到另一个任务从channel中读取消息。
 如果创建channel时，指定了大小，有足够的空间时，写入操作会立刻完成，不会阻塞

# 关闭channel
 从已经关闭的channel中读取消息，会得到nil
 向已经关闭的channel中写入消息，消息将被放弃

 向channel中写入nil会发生错误

 # 缓存区已满的策略
- 后续写入会阻塞 阻塞型
- 后续写入被放弃 弃用信值
- 后续写入覆盖之前的写入 移除旧值

之所以没有容量自动增大的缓冲区，是因为缓冲区无论分配多少  都有可能不够用
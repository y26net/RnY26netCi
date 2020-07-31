# RnY26netCi

测试

````
蒲公英上传ipa指令
打包出来的ipa配合下面的上传指令，可以把ipa包直接发到蒲公英上。
curl -F "file=@Live.ipa" -F "uKey=key12345" -F "_api_key=key54321" http://www.pgyer.com/apiv1/app/upload
```

### 查看生成key
```
<!-- 生成 -->
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
<!-- 查看 -->
keytool -list -v -keystore my-release-key.keystore


# RN Android 打包 APK
//1-：生成一个签名密钥
你可以用keytool命令生成一个私有密钥。在Windows上keytool命令放在JDK的bin目录中（比如C:\Program Files\Java\jdkx.x.x_x\bin），你可能需要在命令行中先进入那个目录才能执行此命令。在mac上，直接进入项目根目录输入一下命令：
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

这条命令会要求你输入密钥库（keystore）和对应密钥的密码，然后设置一些发行相关的信息。最后它会生成一个叫做my-release-key.keystore的密钥库文件。
在运行上面这条语句之后，密钥库里应该已经生成了一个单独的密钥，有效期为10000天。--alias参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名。
注意：请记得妥善地保管好你的密钥库文件，不要上传到版本库或者其它的地方。

//2-：设置gradle变量
把my-release-key.keystore文件放到你工程中的android/app文件夹下。
编辑~/.gradle/gradle.properties（没有这个文件你就创建一个），添加如下的代码（注意把其中的**替换为相应密码）
注意：~表示用户目录，比如windows上可能是C:\Users\用户名，而mac上可能是/Users/用户名。
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*
MYAPP_RELEASE_KEY_PASSWORD=*
上面的这些会作为全局的gradle变量
关于密钥库的注意事项:
一旦你在应用市场（应用宝，360等）发布了你的应用，如果想修改签名，就必须用一个不同的包名来重新发布你的应用（这样也会丢失所有的下载数和评分）。所以请务必备份好你的密钥库和密码。

//3-：添加签名到项目的gradle配置文件
编辑你项目目录下的android/app/build.gradle，添加如下的签名配置：
android {
...
defaultConfig { ... }
signingConfigs {
  release {
    storeFile file(MYAPP_RELEASE_STORE_FILE)
    storePassword MYAPP_RELEASE_STORE_PASSWORD
    keyAlias MYAPP_RELEASE_KEY_ALIAS
    keyPassword MYAPP_RELEASE_KEY_PASSWORD
  }
}
buildTypes {
  release {
    ...
    signingConfig signingConfigs.release
  }
}
}

// 4-：生成发行APK包
只需在终端中运行以下命令：
$ cd android && ./gradlew assembleRelease
译注：cd android表示进入android目录（如果你已经在android目录中了那就不用输入了）。
./gradlew assembleRelease在macOS、Linux或是windows的PowerShell环境中表示执行当前目录下的名为gradlew的脚本文件，且其运行参数为assembleRelease，注意这个./不可省略；而在windows的传统CMD命令行下则需要去掉./。
Gradle的assembleRelease参数会把所有用到的JavaScript代码都打包到一起，然后内置到APK包中。如果你想调整下这个行为（比如js代码以及静态资源打包的默认文件名或是目录结构等），可以看看android/app/build.gradle文件。
生成的APK文件位于android/app/build/outputs/apk/app-release.apk，它已经可以用来发布了。

//5-：测试应用的发行版本
$ cd android && ./gradlew installRelease
注意installRelease参数只能在你完成了上面的签名配置之后才可以使用。 你现在可以关掉运行中的packager了，因为你所有的代码和框架依赖已经都被打包到apk包中，可以离线运行了。
在debug和release版本间来回切换安装时可能会报错签名不匹配，此时需要先卸载前一个版本再尝试安装。

//6-：启用Proguard代码混淆来缩小APK文件的大小（可选）
Proguard是一个Java字节码混淆压缩工具，它可以移除掉React Native Java（和它的依赖库中）中没有被使用到的部分，最终有效的减少APK的大小。
重要：启用Proguard之后，你必须再次全面地测试你的应用。Proguard有时候需要为你引入的每个原生库做一些额外的配置。参见app/proguard-rules.pro文件。
要启用Proguard，设置minifyEnabled选项为true：

/**
* 在release发行版中启用Proguard来减小 to shrink the Java  bytecode in release builds.
*/

def enableProguardInReleaseBuilds = true
```


### 问题
```
//-------------------------------
//Delete 'CR' ...
解决：yarn lint --fix

//-------------------------------
//react-native-camera 异常（Could not resolve project :react-native-camera.）
解决方法：
android/app/build.gradle中添加这句然后再编译即可
missingDimensionStrategy 'react-native-camera', 'general'
//-------------------------------
Error: Cannot fit requested classes in a single dex file
主要原因：项目貌似有点大，已经超过65k个方法。一个dex已经装不下了，需要个多个dex，也就是multidex ，因为Android系统定义总方法数是一个short int，short int 最大值为65536。
在 app 的 build.gradle 文件中
android {
    defaultConfig {
        // 这里添加
        multiDexEnabled true
    }
}
dependencies {
    // 引入multidex库
    implementation 'com.android.support:multidex:1.0.3'
}
在自定义的 application 中初始化 MultiDex
@Override
public void onCreate() {
    super.onCreate();
    // 初始化MultiDex
    MultiDex.install(this);
}
//-------------------------------
Error type 3 类型错误,Error: Activity class {} does not exist.Error while Launching activity解决方法

//执行:
adb uninstall 错误包名

````

### 片段

```
<!-- 纵向布局 -->
<View style={{flex: 1, height: 300}}>
    <View style={{flex: 2, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
<!-- 横向布局 -->
<View style={{flex: 1, height: 300, flexDirection: 'row'}}>
    <View style={{flex: 2, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
```

### 真机调试

```
//使用ADB无线连接Android真机进行调试

//前提条件#
//手机和电脑处于同一个局域网内
//电脑上已经安装好ADB工具

步骤#
1、打开手机#
让手机在指定的端口可以接收到TCP/IP连接。

确保手机开启了usb调试
用usb线把手机和电脑连接起来
执行命令：adb tcpip 5555
执行成功后就可以把usb线拔掉了，端口可以不是5555，这个官方默认使用的。

2、找到手机的的IP地址#
执行命令

Copy
adb connect 192.168.1.100:5555
如果提示：

connected to 192.160.1.100:5555

则表示连接成功，如果端口号是5555可以省略，直接：

Copy
db connect 192.168.1.100
如果没有连接成功#
如果确定你的网络和端口都没问题，可以尝试重启一下adb服务：

adb kill-server

然后再进行连接，实在还是不行就Google吧。

连接成功#
如果连接成功的话，执行以下命令查看当前连接的设备列表：

Copy
adb devices
可以看到连接的设备，像这样

$ adb devices
List of devices attached
192.168.1.100:5555 device

以后没有数据线也可以调试手机或者在上面运行自动化测试了。

注意事项#
更换一个网络环境需要使用新IP重新connect即可。
但是如果手机重启了，就需要重新连接数据线再次开启端口。
开启端口可以通过adb，也可以直接在手机上打开，但一般需要root权限和特殊软件。
```

# Could not find com.android.tools.build:gradle:xxx
https://stackoverflow.com/questions/71508591/gradle-doesnt-sync-in-android-studio

https://stackoverflow.com/questions/50384733/react-native-could-not-resolve-all-dependencies-for-configuration-classpath

使用 Android Studio 裡面的 File > Project Structure > Project 設定 gradle 版本
Set gradle plugin to 7.1.2 and gradle version to 7.4.1

如果還是不行，就 rm -rf node_modules 重新 yarn, npx react-native link

# Android allow clear text http

add `android:usesCleartextTraffic="true"` to AndroidManifest.xml <application>

# fake GPS
1. 先安裝 Fake GPS location
2. 使用開發者工具模擬位置，選用這個 App： Fake GPS location 

# sample AndroidManifest.xml

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

    <uses-feature android:name="android.hardware.camera" />
    <uses-feature android:name="android.hardware.location.gps" />


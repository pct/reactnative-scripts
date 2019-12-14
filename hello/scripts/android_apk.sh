#!/bin/sh
#https://facebook.github.io/react-native/docs/signed-apk-android
#https://ithelp.ithome.com.tw/articles/10188858

# old apk
#cd android && ./gradlew assembleRelease

# new build
cd android && ./gradlew bundleRelease


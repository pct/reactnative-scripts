#!/bin/sh

APP_ID='com.sample'

if [ $APP_ID == 'com.sample' ] ; then
  echo '需替換 <APP_ID>'
  exit
fi

adb logcat | grep -F "`adb shell ps | grep $APP_ID | tr -s [:space:] ' ' | cut -d' ' -f2`"

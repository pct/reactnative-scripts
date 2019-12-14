#!/bin/sh
PROJECT_NAME='appbase'
keytool -genkey -v -keystore $PROJECT_NAME.keystore -alias $PROJECT_NAME -keyalg RSA -keysize 2048 -validity 10000

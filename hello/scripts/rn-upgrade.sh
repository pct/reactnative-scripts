#!/bin/sh
ncu -ua
yarn

react-native-git-upgrade
react-native link

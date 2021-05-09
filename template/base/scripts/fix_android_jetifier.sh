#!/bin/sh
yarn add jetifier --dev
npx jetify
npx react-native run-android
npx jetify

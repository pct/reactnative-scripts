#!/bin/sh

if [ $# -eq 0 ]; then
  echo 'Please input <project-name>'
  exit
fi

PROJECT_NAME=$1
BASEDIR=$(dirname "$0")

echo 'create project:' $PROJECT_NAME '...'

# === init ===
npx react-native@latest init $PROJECT_NAME
echo "# Vim\n*~\n*swp" >> $PROJECT_NAME/.gitignore
cp -rpf $BASEDIR/template/base/* $PROJECT_NAME

mkdir -p $PROJECT_NAME/src
cp -rpf $BASEDIR/template/macos_src/* $PROJECT_NAME/src

cd $PROJECT_NAME

# === clean files ===
rm -f App.js


# === yarn ===
yarn add lodash \
  axios \
  @react-navigation/native \
  @react-navigation/stack \
  react-router-native \
  react-navigation-header-buttons \
  react-native-storage \
  react-native-keyboard-aware-scroll-view \
  styled-components --save

## install macos
cd ios; pod install; cd -
npx react-native-macos-init

## 目前不支援 
#react-native-elements \
#react-native-vector-icons \
#react-native-screens \
#react-native-reanimated \
#react-native-gesture-handler \
#@react-native-community/masked-view \
#@react-native-community/geolocation \

# === rm Base.lproj ===
# 先不移除，可自己決定是否移除 LaunchScreen
# rm -rf ios/$PROJECT_NAME/Base.lproj

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

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
cp -rpf $BASEDIR/template/default_src/* $PROJECT_NAME/src

cd $PROJECT_NAME

# === clean files ===
rm -f App.js


# === yarn ===
yarn add lodash \
  axios \
  rxjs \
  rxjs-hooks \
  @react-navigation/native \
  @react-navigation/stack \
  react-native-config \
  react-native-eject \
  react-native-permissions \
  react-native-gesture-handler \
  react-native-reanimated \
  react-native-screens \
  react-native-elements \
  react-native-vector-icons \
  react-navigation-header-buttons \
  react-native-storage \
  react-native-keyboard-aware-scroll-view \
  react-native-safe-area-view \
  react-native-safe-area-context \
  @react-native-community/geolocation \
  @react-native-community/masked-view \
  react-native-device-info \
  styled-components

# === install pod (RN > 0.60) ===
cd ios; pod install; cd -

# === rm Base.lproj ===
# 先不移除，可自己決定是否移除 LaunchScreen
# rm -rf ios/$PROJECT_NAME/Base.lproj

# setting react-native-config
echo 'MESSAGE=Hello, 4Point' > .env

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

echo 'NOTICE!! Please add permission settings to iOS / Android'
echo 'https://github.com/zoontek/react-native-permissions'

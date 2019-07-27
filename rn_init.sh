#!/bin/sh

if [ $# -eq 0 ]; then
  echo 'Please input <project-name>'
  exit
fi

PROJECT_NAME=$1
BASEDIR=$(dirname "$0")

echo 'create project:' $PROJECT_NAME '...'

# === init ===
react-native init $PROJECT_NAME
echo "# Vim\n*~\n*swp" >> $PROJECT_NAME/.gitignore
cp -rpf $BASEDIR/template/* $PROJECT_NAME

cd $PROJECT_NAME

# === clean files ===
rm -f App.js


# === npm ===
npm i lodash \
  axios \
  react-navigation \
  react-native-elements \
  react-native-vector-icons \
  react-native-gesture-handler \
  react-navigation-header-buttons \
  react-native-storage \
  react-native-keyboard-aware-scroll-view \
  @react-native-community/geolocation \
  styled-components --save

# react native > 0.60 will auto link
#react-native link 

# === debugger ===
brew update && brew cask install react-native-debugger

# === install pod (RN > 0.60) ===
cd ios; pod install; cd -

# === rm Base.lproj ===
rm -rf ios/$PROJECT_NAME/Base.lproj

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

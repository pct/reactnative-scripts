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

# === npm ===
# lodash
yarn add lodash

# navigation
yarn add react-navigation

# react-native-elements
yarn add react-native-elements react-native-vector-icons

# [react-native-safari-view]
yarn add react-native-safari-view

react-native link 
# [realm]
#npm i -g rnpm
#npm i realm --save
#rnpm link realm

# === replace ===
sed -e "s|__PROJECT_NAME__|$PROJECT_NAME|" index.ios.tpl > index.ios.js
cp index.ios.js index.android.js
rm -f index.ios.tpl

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

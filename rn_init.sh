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
cp -rpf $BASEDIR/scripts $PROJECT_NAME

# === npm ===

# [webpack]
npm i -g webpack
npm i webpack --save

# [realm]
npm i -g rnpm
npm i realm --save
rnpm link realm

# [route]
npm i react-native-router-flux --save

# === git ===
cd $PROJECT_NAME
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

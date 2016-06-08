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

# === npm ===

# [realm]
#npm i -g rnpm
#npm i realm --save
#rnpm link realm

# === replace ===
cd $PROJECT_NAME
sed -e "s|__PROJECT_NAME__|$PROJECT_NAME|" index.ios.template > index.ios.js
rm -f index.ios.template

# === git ===
cd $PROJECT_NAME
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

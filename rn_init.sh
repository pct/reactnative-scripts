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

# [native-base]
yarn add native-base
react-native link react-native-vector-icons

# [realm]
#npm i -g rnpm
#npm i realm --save
#rnpm link realm

# [router]
yarn add react-native-router-flux

# === replace ===
sed -e "s|__PROJECT_NAME__|$PROJECT_NAME|" index.ios.template > index.ios.js
rm -f index.ios.template

sed -e "s|__PROJECT_NAME__|$PROJECT_NAME|" scripts/device_ios.sh.template > scripts/device_ios.sh
chmod +x scripts/device_ios.sh
rm -f scripts/device_ios.sh.template

# === git ===
git init; git add .; git commit -m 'init'

# === done ===
echo "\n\ndone!"

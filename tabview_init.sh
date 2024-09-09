#!/bin/sh

if [ $# -eq 0 ]; then
  echo 'Please input <project-name>'
  exit
fi

PROJECT_NAME=$1
BASEDIR=$(dirname "$0")

echo 'create project:' $PROJECT_NAME '...'

# === init ===
npx @react-native-community/cli init $PROJECT_NAME
echo "# Vim\n*~\n*swp" >> $PROJECT_NAME/.gitignore
cp -rpf $BASEDIR/template/base/* $PROJECT_NAME

mkdir -p $PROJECT_NAME/src
cp -rpf $BASEDIR/template/tabview_src/* $PROJECT_NAME/src
cp $BASEDIR/base.sh $PROJECT_NAME

cd $PROJECT_NAME

./base.sh && rm -f base.sh

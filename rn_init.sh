#!/bin/sh

if [ $# -eq 0 ]; then
  echo 'Please input <project-name>'
  exit
fi

PROJECT_NAME=$1
BASEDIR=$(dirname "$0")

echo 'create project:' $PROJECT_NAME '...'

# new
react-native init $PROJECT_NAME
echo "# Vim\n*~\n*swp" >> $PROJECT_NAME/.gitignore
cp -rpf $BASEDIR/scripts $PROJECT_NAME

# npm
# npm [realm]
npm i -g rnpm
npm i realm --save
rnpm link realm

# npm [jade]
npm i react-jade --save

# use coffeescript and jade
cd $PROJECT_NAME
git init; git add .; git commit -m 'init'


# done
echo "\n\ndone!"

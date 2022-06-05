# react-native upgrade

## 1. 升級

    npx react-native upgrade 0.68.2

## 2. 查看 diff, 再 commit

## 3. 使用

    yarn add react-native-eject

再刪除 ios, android, 再使用 eject 產回 ios, android

    rm -rf ios android
    npx react-native eject

## 4. 查看、比對原本要加回的 code

## 5. build 測試，結束 

## 6. 使用  ncu -u 比對 package.json，最後重新 yarn

    cp package.json package.json.old
    ncu -u
    vim -d package.json package.json.old
    yarn


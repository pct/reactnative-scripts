快速升級 RN 的方式
1. npx react-native upgrade

2. 如果上述不行，則跑完上述步驟後，再來安裝 react-native-eject，其步驟：

        $ yarn add react-native-eject
        $ rm -rf ios android
        $ npx react-native-eject

3. 比對 ios android 資料夾的變更

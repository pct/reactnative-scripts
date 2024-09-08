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
  react-native-paper \
  react-native-tab-view \
  react-native-permissions \
  react-native-gesture-handler \
  react-native-reanimated \
  react-native-screens \
  react-native-elements \
  react-native-vector-icons \
  react-navigation-header-buttons \
  react-native-mmkv \
  react-native-keyboard-aware-scroll-view \
  react-native-safe-area-context \
  react-native-inappbrowser-reborn \
  react-native-geolocation-service \
  @react-native-community/masked-view \
  react-native-device-info \
  styled-components

# === install pod (RN > 0.60) ===
cd ios; pod install; cd -

# setting react-native-config
cat <<EOF > .env.production
API_URL=https://prod.api.example.com
API_KEY=prod-api-key
EOF

cat <<EOF > .env.staging
API_URL=https://staging.api.example.com
API_KEY=staging-api-key
EOF

ln -s .env.staging .env

# === git ===
git init; git add .; git commit -m 'init'; git branch -m master

# === done ===
echo "\n\ndone!"

echo 'NOTICE!! Please add permission settings to iOS / Android'
echo 'https://github.com/zoontek/react-native-permissions'

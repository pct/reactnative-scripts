import { Platform } from 'react-native'
import { checkMultiple, requestMultiple, PERMISSIONS } from 'react-native-permissions'

export const checkPermissions = () => {
  if (Platform.OS === 'ios') {
    // PERMISSIONS.IOS.CAMERA
    // PERMISSIONS.IOS.LOCATION_ALWAYS
    // PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    // PERMISSIONS.IOS.MEDIA_LIBRARY
    // PERMISSIONS.IOS.MICROPHONE
    // PERMISSIONS.IOS.PHOTO_LIBRARY

    let permissions = [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.MICROPHONE, PERMISSIONS.IOS.PHOTO_LIBRARY]

    requestMultiple(permissions).then((statuses) => {
    })

    checkMultiple(permissions).then((statuses) => {
      if (statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.DENIED || statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED) {
        Alert.alert('請務必允許拍照功能，才能正常使用！')
      }

      if (statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === RESULTS.DENIED || statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === RESULTS.BLOCKED) {
        Alert.alert('請務必允許使用相簿，才能正常使用！')
      }
    })

  } else {
    // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    // PERMISSIONS.ANDROID.CAMERA
    // PERMISSIONS.ANDROID.RECORD_AUDIO
    // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE

    let permissions = [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]

    requestMultiple(permissions).then((statuses) => {
    })

    checkMultiple(permissions).then((statuses) => {
      if (statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.DENIED || statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED) {
        Alert.alert('請務必允許拍照功能，才能正常使用！')
      }

    })
  }
}

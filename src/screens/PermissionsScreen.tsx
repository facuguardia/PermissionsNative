import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions';

export const PermissionsScreen = () => {

  let permissionStatus: PermissionStatus = 'unavailable';

  const checkLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
  } else {
      // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  }
  console.log({ permissionStatus })
  }



  return (
    <View style={styles.container}>
      <Text>PermissionsScreen</Text>
      <Button title="Permissions" onPress={checkLocationPermission} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
})
import React, { useContext } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


import { PermissionsContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

  const {askLocationPermission, permissions} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>This app requires authorization for the use of GPS</Text>
      <BlackButton title="Permissions" onPress={askLocationPermission} />
      <Text style={styles.textDetailsPermission}>{ JSON.stringify(permissions, null, 5) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textTitle: {
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  textDetailsPermission: {
    color: 'black',
    fontSize: 16,
    marginTop: 20
  }
})
'use strict';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Text, StyleSheet } from 'react-native';
import RegularButton from '../components/Buttons/RegularButton';
export interface IQRCodePayload {
  name: string;
  number: string;
}

import { Navigation } from '../src/types';
import Background from '../components/Background/Background';
import RegularText from '../components/Texts/RegularText';

type Props = {
  navigation: Navigation;
};
const ScanScreen = ({ navigation }: Props) =>{
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData] = useState<IQRCodePayload>();
  const [permission, setPermission] = useState(true);

  useEffect(() => {
      requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
      try {
          const { status, granted } = await BarCodeScanner.requestPermissionsAsync();
          console.log(`Status: ${status}, Granted: ${granted}`);

          if (status === 'granted') {
              console.log('Access granted');
              setPermission(true);
          } else {
              setPermission(false);
          }
      } catch (error) {
          console.error(error);
          setPermission(false);
      } finally {
          setLoading(false);
      }
  };

  if (loading) return <Text>Requesting permission ...</Text>;

  if (scanData) {
      return (
          <Background>
              <RegularText textStyles={styles.text}>Nom: {scanData.name}</RegularText>
              <RegularText textStyles={styles.text}>Numero: {scanData.number}</RegularText>
              <RegularButton mode="outlined" onPress={() => setScanData(undefined)}>
                  Scan Again
              </RegularButton>
          </Background>
      );
  }

  if (permission) {
      return (
          <BarCodeScanner
              style={[styles.container]}
              onBarCodeScanned={({ type, data }) => {
                  try {
                      console.log(type);
                      let _data = JSON.parse(JSON.stringify(data));
                      console.log(_data);

                      setScanData(_data);
                  } catch (error) {
                      console.error('Unable to parse string: ', error);
                  }
              }}
          >
              <Text style={styles.text}>Scanne le QR code.</Text>
          </BarCodeScanner>
      );
  } else {
      return <Text style={styles.textError}>Permission rejected.</Text>;
  }
}


export default (ScanScreen);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      marginTop: 15,
      color: 'black',
      backgroundColor: 'white'
  },
  textError: {
      color: 'red'
  }
});
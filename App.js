import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Manager from './components/Manager.jsx';
import BlockChain from './components/BlockChain.jsx';
import Icon from './components/Icon.jsx';


import { StoresProvider, stores } from './stores'

export default function App() {
  return (
    <StoresProvider value={stores} >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}><Icon /></Text>
          <BlockChain></BlockChain>
          <Manager></Manager>
        </View>
      </View>
    </StoresProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex'
  }
});

import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import AddAccount  from './components/AddAccount';
//import Account from './components/Account';
import BlockChain from './components/BlockChain';
import Icon from './components/Icon';
//<Account stakeAddress="stake1u8a7w862g9g35vgpnzfvk299zlvjy26xp2w8c3dkjlfgzyc3vgu24"></Account>

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}><Icon/></Text>
        <BlockChain></BlockChain>
        <AddAccount></AddAccount>
      </View>
    </View>
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

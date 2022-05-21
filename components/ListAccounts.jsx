import React, { useEffect } from 'react';
import Account from './Account.jsx';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

const ListAccounts = observer(() => {
  
  const accountsStore = useStore('accountsStore');
  
  useEffect(async () => {
    await accountsStore.initAccounts();
  }, [])
  
  return (
      (accountsStore.accounts.length <= 0) ?  <View/> :
      <View>
          <Text style={styles.sectionTitle}>Addresses </Text>
          <View style={styles.items}>
              {
              accountsStore.accounts?.map((item) => {
                  return (
                  <View key={`${item.id}${item.stakeAddress}`} style={styles.item}>
                      <Account stakeAddress={item.stakeAddress} index={item.id}></Account>
                  </View>
                  )
              })
              }
          </View>
      </View>
  )
})


const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center',
        margin: 'auto',
        marginTop: 30
    },
    item: {
      margin: 'auto',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      paddingTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'white',
      marginTop: 15,
      marginBottom: 15
    },
    items: {
      marginTop: 30,
    }
  });

export default ListAccounts;
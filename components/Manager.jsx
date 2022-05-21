import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import AddAccount from './AddAccount';
import ListAccounts from './ListAccounts';
const Manager = () => {

  useEffect(() => {
  }, [])


  return (
    <View style={styles.tasksWrapper}>
      <AddAccount></AddAccount>
      <ListAccounts></ListAccounts>
    </View>
  )

}

const styles = StyleSheet.create({
  tasksWrapper: {},
});

export default Manager;
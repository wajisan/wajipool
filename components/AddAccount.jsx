import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useStore } from '../hooks/useStore'

const AddAccount = (props) => {
    
  const accountsStore = useStore('accountsStore');
    const [stakeText, setStakeText] = useState("");

    const sendAccount = (value) => {
        try {
          const obj = {stakeAddress: value, id: accountsStore.accounts.length}
          accountsStore.addAccount(obj);
          setStakeText("");
        } catch (e) {
          console.error('Cant add address: ', e);
        }
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addStakeContainer}>
        <TextInput style={styles.input} placeholder={'Write a stake address'} value={stakeText} onChangeText={stakeText => setStakeText(stakeText)} />
        <TouchableOpacity style={styles.addWrapper} onPress={() => { sendAccount(stakeText) }}>
          <View >
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    addStakeContainer: {
      display: 'block',
      textAlign: 'center',
      margin: 'auto'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 7,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 'fit-content',
      padding: 8,
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: 'grey',
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 15,
  
      width: 'max-content',
      textAlign: 'center',
      margin: 'auto'
    },
    addText: {
      textAlign: 'center',
      margin: 'auto',
      color: 'white',
      fontWeight: 'bold'
    },
  });

  export default AddAccount;
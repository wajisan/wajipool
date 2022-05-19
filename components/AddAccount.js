import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import Account from './Account';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddAccount = (props) => {
    const [stakeText, setStakeText] = useState("");
    const [storeItems, setStoreItems] = useState([]);
 
    const getData = () => {
        try {
          AsyncStorage.getItem('test-stakeAdress')
          .then(value => {
            const jsonObj = (value != null) ? JSON.parse(value) : null;
            if(value !== null) {
              setStoreItems(jsonObj);
              console.log(storeItems);
            }
          });
          
        } catch(e) {
            console.error('Cant read saved address: ', e);
          // error reading value
        }
      }

    const storeAddress = (value) => {
        try {
            let tmpStorage = storeItems != null ? storeItems : [];
            tmpStorage.unshift(value);
            setStoreItems(tmpStorage);
            setStakeText("");
            AsyncStorage.setItem('test-stakeAdress', JSON.stringify(tmpStorage)).then(data => {
              getData();
            });
            
        } catch (e) {
            console.error('Cant save address: ', e);
          // saving error
        }
    }
  
    const removeAccount = (value) => {
        try {
            let tmpItems = storeItems;
            tmpItems.splice(tmpItems.indexOf(value), 1);
            //setStoreItems(tmpItems);
            AsyncStorage.setItem('test-stakeAdress', JSON.stringify(tmpItems)).then(data => {
              getData();
            });
        }
        catch(e) {
            console.error('Cant remove address: ', e);
        }
    }

    useEffect(() => {
        getData();
    }, []);

  
    return (
    <View style={styles.tasksWrapper}>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addStakeContainer}>
          <TextInput style={styles.input} placeholder={'Write a stake address'} value={stakeText} onChangeText={ stakeText => setStakeText(stakeText)} />
          <TouchableOpacity style={styles.addWrapper} onPress={() =>  {storeAddress(stakeText)}}>
              <View >
                  <Text style={styles.addText}>Add</Text>
              </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={styles.sectionTitle}>Addresses :</Text>

        <View style={styles.items}>
          {
            storeItems.map((item, index) => {
              return (
                <View key={'view'+index} style={styles.item}>
                    <Account stakeAddress={item} ></Account>
                    <TouchableOpacity style={styles.removeContainer} key={index} onPress={() => removeAccount(item)}>
                        <Text style={styles.removeButton}>Remove</Text>
                    </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
        
</View>
)

}

const styles = StyleSheet.create({
  addStakeContainer: {
    display: 'block',
    textAlign: 'center',
    margin: 'auto'
  },
  removeContainer: {
    width: 'fit-content',
    margin: 'auto'
  },
  removeButton: {
    width: 'fit-content',
    padding: 8,
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
  },
  item : {
    margin: 'auto',
    //border: 'solid',
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
  },
  /*writeTaskWrapper: {
    //position: 'absolute',
    //bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },*/
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
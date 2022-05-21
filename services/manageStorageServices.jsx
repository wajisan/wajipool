//local storage functions
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addAda = async (value) => { 
    let curr = await AsyncStorage.getItem('total-ada');
    if (curr === null) {
        curr = 0
    }
    const newValue = parseFloat(curr) + parseFloat(value);
    await AsyncStorage.setItem('total-ada', newValue);
}

export const subAda = async (value) => {
    let curr = await AsyncStorage.getItem('total-ada');
    if (curr === null) {
        curr = 0;
    }
    else {
        let newValue = parseFloat(curr) - parseFloat(value);
        if (newValue < 0) {
            newValue = 0;
        }
        await AsyncStorage.setItem('total-ada', newValue);
    }
}

export const setAda = async (value) => {
    await AsyncStorage.setItem('total-ada', value);
}

export const getAda = async () => {
    const ada = await AsyncStorage.getItem('total-ada');
    return ada;
}
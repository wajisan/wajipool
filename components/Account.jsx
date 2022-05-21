import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getStake } from '../services';
import { useStore } from '../hooks/useStore'

const Account = (props) => {
    const rewardStore = useStore('rewardStore');
    const accountsStore = useStore('accountsStore');
    const [dataStake, setDataStake] = useState([]);
    const [totalAda, setTotalAda] = useState(0);
    const [messageError, setMessageError] = useState("");


    const removeAccount = () => {
        rewardStore.subRewards(totalAda);
        accountsStore.removeAccount(props.index);
    }

    const callStake = async () => {
        let json = await getStake(props.stakeAddress);
        if (json.totalAda > 0) {
            rewardStore.addRewards(json.totalAda);
            setTotalAda(json.totalAda);
        }
        setMessageError(json.message);
        setDataStake(json.data);
    };

    useEffect(() => {
        callStake();
    }, []);

    return (
        <View style={styles.item}>
            {
                <View>
                    <Text>{messageError}</Text>
                </View>
            }
            {
                <View>
                    {
                        <View>
                            <View>
                                {
                                (totalAda <= 0) ? <View/> :
                                <Text style={styles.itemTitle}>{totalAda} ₳</Text>
                                }
                            </View>
                            <View>
                                {dataStake?.map((stake) => (
                                    <Text key={stake.pool_id + 'reward' + stake.epoch}> {stake.epoch} : {stake.rewardAda} </Text>
                                ))}
                            </View>
                        </View>
                    }
                </View>
            }
            {
                <TouchableOpacity style={styles.removeContainer} key={props.index} onPress={() => removeAccount()}>
                    <Text style={styles.removeButton}>Remove</Text>
                </TouchableOpacity>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        textAlign: 'center'
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        display: 'flex'
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
});

export default Account;

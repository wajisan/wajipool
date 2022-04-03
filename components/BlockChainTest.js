import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BlockChainTest = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    const handleRefresh = async () => {
        getLatestEpoch();
    }

    const getLatestEpoch = async () => {
        try {
          const response = await fetch(
            process.env.API + '/epochs/latest', {
                method: 'GET',
                //mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    project_id : process.env.PROJECT_ID
                },
            }
          );
          const json = await response.json();
          setDataSource(json);
          setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log(process.env);
        console.log("id : " + process.env.PROJECT_ID);
        //getLatestEpoch();
    }, []);

    return (
        <View style={styles.item}>
            { 
                isLoading ? <View /> : 
                <View style={styles.itemLeft}>
                    <Text style={styles.itemText}> Epoch : {dataSource.epoch} </Text>
                    <Text style={styles.itemText}> Block_count : {dataSource.block_count} </Text>
                    <Text style={styles.itemText}> Tx_count : {dataSource.tx_count} </Text>

                </View>
            }

            <TouchableOpacity onPress={() => handleRefresh()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>Refresh</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    item : {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap : 'wrap'
    },
    itemText: {
        maxWidth: '80%'
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {},
});

export default BlockChainTest;

import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BlockChain = (props) => {

    const [isLoadingData, setLoadingData] = useState(true);
    const [dataSource, setDataSource] = useState([]);
    const [totalAda, setTotalAda] = useState(0);

    const handleRefresh = async () => {
        setTotalAda(0);
        getLatestEpoch();
    }

    const countAda = async (addAda) => {
        setTotalAda(addAda);
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
            setLoadingData(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setTotalAda(0);
        //getLatestEpoch();
        //console.log(process.env);
        //console.log("id : " + process.env.PROJECT_ID);
        //getLatestEpoch();
    }, []);

    return (
        <View style={styles.item}>
            { 
                <View>
                    {
                    <View>
                        <Text style={styles.itemText}>All my rewards ada: {totalAda} </Text>
                    </View>
                    }
                    {
                    isLoadingData ? <View /> :
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}> Epoch : {dataSource.epoch} </Text>
                        <Text style={styles.itemText}> Block_count : {dataSource.block_count} </Text>
                    </View>
                    }
                </View>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    /*item : {
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
      addText: {},*/
});

export default BlockChain;

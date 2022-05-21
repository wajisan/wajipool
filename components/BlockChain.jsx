import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TotalRewards from './TotalRewards';

const BlockChain = () => {
    const [isLoadingData, setLoadingData] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    const getLatestEpoch = async () => {
        try {
            const response = await fetch(
                process.env.API + '/epochs/latest', {
                method: 'GET',
                //mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    project_id: process.env.PROJECT_ID
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
        //getLatestEpoch();///////////////////////////////////////
    }, []);

    return (
        <View style={styles.item}>
            <TotalRewards></TotalRewards>
            {isLoadingData ? <View /> :
                <View style={styles.itemLeft}>
                    <Text style={styles.itemText}> Epoch : {dataSource.epoch} </Text>
                    <Text style={styles.itemText}> Block_count : {dataSource.block_count} </Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({

});

export default BlockChain;

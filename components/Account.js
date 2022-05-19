import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Account = (props) => {
    const [isLoadingStake, setLoadingStake] = useState(true);
    const [dataStake, setDataStake] = useState([]);
    const [totalAda, setTotalAda] = useState(0);
    const [messageError, setMessageError] = useState("");


    const setMessage = async (msg) => {
        setMessageError(msg);
        setLoadingStake(true);
    }

    const countAda = async (addAda) => {
        setTotalAda(addAda);
    }

    const getStack = async () => {
        let stackaddress = props.stakeAddress;
        try {
            const response = await fetch(
                process.env.API + '/accounts/'+ stackaddress +'/rewards', {
                    method: 'GET',
                    //mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        project_id : process.env.PROJECT_ID
                    },
                }
            );
            if (response.status == 200) {
                const json = await response.json();
                if (json != null && json.length > 0) {
                    let tmpAda = 0;
                    json.forEach(element => {
                        element.rewardAda = element.amount / 1000000;
                        tmpAda += element.rewardAda;
                    });
                    countAda(tmpAda);
                }
                
                setDataStake(json);
                setLoadingStake(false);
            }
            else if (response.status == 400){
                setMessage("Invalid stake address : "+ props.stakeAddress);
            }
            else {
                setMessage("Error while reading blockchain");
            }
        } catch (error) {
            console.error(error);
        }
    };
    


    useEffect(() => {
        getStack();
        //console.log("id : " + process.env.PROJECT_ID);
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
                        isLoadingStake ? <View /> :
                        <View>
                            <View>
                                <Text style={styles.itemTitle}>{totalAda} ₳</Text>
                            </View>
                            <View style={styles.itemLeft}>
                                {
                                    dataStake.map((stake) => (
                                        <Text style={styles.itemText} key={stake.pool_id + 'reward' + stake.epoch}> {stake.epoch} : {stake.rewardAda} </Text>
                                    ))
                                }
                            </View>
                        </View>
                    }  
                </View>
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
    }
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

export default Account;

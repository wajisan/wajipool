import {View, Text, StyleSheet} from 'react-native'
import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react-lite'

const TotalRewards = observer(() => {
    const rewardStore = useStore('rewardStore');
    return (
        <View>
            {
                (rewardStore.rewards <= 0) ? <View/> : 
                <Text style={styles.rewards}> {rewardStore.rewards} ₳</Text>
            }
        </View>
    )
})

const styles = StyleSheet.create({
    rewards : {
        margin: 'auto',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 27,
        textAlign: 'center'
      },
})

export default TotalRewards;


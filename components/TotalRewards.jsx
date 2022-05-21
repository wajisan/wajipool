import {View, Text, StyleSheet} from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react-lite'

const TotalRewards = observer(() => {
    const rewardStore = useStore('rewardStore');
    return (
        <View>
            <Text style={styles.itemText}>All my rewards ada: {rewardStore.rewards} </Text>
        </View>
    )
})

const styles = StyleSheet.create({

})

export default TotalRewards;


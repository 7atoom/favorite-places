import {View , Text , StyleSheet} from 'react-native';

export default function PlaceDetails() {
    return (
        <View style={styles.container}>
            <Text> Place Details </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


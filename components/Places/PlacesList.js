import {View , Text , StyleSheet, FlatList} from 'react-native';
import PlaceItem from './PlaceItem';

function PlacesList({ places }) {

    function renderItem({ item }) {
      return <PlaceItem place={item} />;
    }

    if (!places || places.length === 0) {
      return (
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>
            No places added yet - start adding some!
          </Text>
        </View>
      );
    }
  
    return (
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    );
  }
  
  export default PlacesList;
  
  const styles = StyleSheet.create({
    fallbackContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fallbackText: {
      fontSize: 16,
    },
  });
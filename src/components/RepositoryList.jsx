import React from 'react'
import { View, Text, FlatList, Image, StyleSheet} from 'react-native'
import data from '../data/data'

const styles = StyleSheet.create({
  strong: {
    fontSize:20,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const RepositoryList = () => {
  return (
    <View>
        <Text style={styles.strong}>Lista de perritos jeje</Text>
        <FlatList
        data={data}
        ItemSeparatorComponent={()=><Text> </Text>}
        renderItem={({item}) => (
            <View key={item.id}>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.image,
                  }}
                />
            </View>
        )}
        />
    </View>
  )
}

export default RepositoryList
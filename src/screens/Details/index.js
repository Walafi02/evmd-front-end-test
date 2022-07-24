import React from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import * as SQLite from 'expo-sqlite';


const Details = ({route}) => {
  const {item} = route.params;
  const handleFavorite = () => {
    const DatabaseConnection = {
      getConnection: () => SQLite.openDatabase('front-end-test.db'),
    };
    const db = DatabaseConnection.getConnection();
    return new Promise((resolve, reject) =>db.transaction(tx => {
      tx.executeSql(`update users set favorite = ? where _id = ?;`, [1, item._id], () => {
        console.log('sucesso', item._id);
      }), (sqlError) => {
          console.log(sqlError);
      }}, (txError) => {
      console.log(txError);
  }));
  }
  return (
  <View style={styles.container}>
    <View>
      <Image
        source={{
          uri: 'http://placehold.it/1024x1024',
        }}
        style={styles.image}
      />
    </View>
    <View
      style={styles.detailsContainer}
    >
      <Text>Nome: {item.name}</Text>
      <Text>E-mail: {item.email}</Text>
      <Text>Idade: {item.age}</Text>
      <Text>Salário: {item.balance}</Text>
      <Text>Latitude: {item.latitude}</Text>
      <Text>Longitude: {item.longitude}</Text>
      <Text>Favorito: {item.favorite}</Text>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={handleFavorite}
    >
      <Text>
        Favorito
      </Text>
    </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f3f3f3',
  },
  detailsContainer: {
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#b1b1b1',
    backgroundColor: '#e5e5e5',
  },
});

export default Details;

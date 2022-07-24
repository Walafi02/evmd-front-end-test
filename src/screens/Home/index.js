import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { UserCard } from '../../components';
import Constants from "expo-constants";
import * as SQLite from 'expo-sqlite';



export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase('front-end-test.db'),
};
const db = DatabaseConnection.getConnection();

const Home = ({ navigation }) => {
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from users`, [], (_, { rows }) => {
          resolve(rows)
          console.log('entrou ', rows);
          setFlatListItems(rows._array);
          console.log('flatListItems', flatListItems);
      }), (sqlError) => {
          console.log(sqlError);
      }}, (txError) => {
      console.log('txError: ', txError);
  }))
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.flatListItem}>
      <UserCard
        style={styles.flatListText}
        name={item.name}
        age={item.age}
        email={item.email}
        picture={item.picture}
        onPress={() => {
          navigation.navigate('Details', {item});
        }}
      />
    </View>
  );
  return (
  <View style={styles.container}>
    <FlatList
    contentContainerStyle = {{marginHorizontal: 20}}
    data = {flatListItems}
    renderItem = {renderItem}
    keyExtractor = {item => item.name}
    />
  </View>

  )
};

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    borderColor: '#e9e9e9',
    marginTop: 20,
  },
  flatListText: {
    alignItems:'center',
  }

});

export default Home;

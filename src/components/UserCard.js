import React, {useState} from 'react';
import {
  View, FlatList, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('../assets/front-end-test.db');

const UserCard = ({name, email, age, picture, onPress,}) => {
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users ORDER BY name ASC',
        [],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          for(i=0; i<results.rows.length; i++){
            let data = results.rows._array;
            let name = data.name;
            let age = data.age;
            let email = data.email;
            let onPress = data.onPress;
        }
        }
      );
    });
  };

  return (

    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={{ uri: picture }}
          style={styles.image}
        />
      </View>
      <View>
        <Text>{name}, {age}</Text>
        <Text>{email}</Text>
      </View>
    </TouchableOpacity>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    borderColor: '#e9e9e9',
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
});


export default UserCard;

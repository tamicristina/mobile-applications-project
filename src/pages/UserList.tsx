import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserList'>;

const users = [
  { id: '1', name: 'João Silva', username: 'joao.silva' },
  { id: '2', name: 'Maria Oliveira', username: 'maria.oliveira' },
];

export function UserListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: { item: { id: string; name: string; username: string } }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.username}>{item.username}</Text>
  </View>
);


  return (
    <View style={styles.container}>
      <Header
        title="Usuários"
        rightIcon="user-plus"
        onRightPress={() => navigation.navigate('UserForm')}
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Feather name="log-out" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  list: {
    padding: 20,
  },
  item: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    color: '#fff',
    fontSize: 18,
  },
  username: {
    color: '#ccc',
    fontSize: 14,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 50,
  },
});

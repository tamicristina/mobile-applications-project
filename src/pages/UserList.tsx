import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "UserList">;


const UserList = () => {

    const navigation = useNavigation<NavigationProp>();
    
    const users = [
    { id: '1', name: 'João Silva'},
    { id: '2', name: 'Luiz Souza'},
    { id: '3', name: 'Sergio Silva'}
    ];

    const renderItem = ({ item }: { item: { id: string; name: string } }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    return (
    <View style={styles.container}>
      <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Button title="Voltar para Login" onPress={() => navigation.navigate("Login")} />
        
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 18,
  },
});

export default UserList;

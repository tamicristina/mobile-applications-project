import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Header from "../components/Header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "UserList">;

export function UserListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [users, setUsers] = useState<{ id: string; name: string; username: string }[]>([]);
  const isFocused = useIsFocused();

  const loadUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem("@users");
      const parsed = storedUsers ? JSON.parse(storedUsers) : [];
      setUsers(parsed);
    } catch (error) {
      console.error("Erro ao carregar usuários", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadUsers();
    }
  }, [isFocused]);

  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; username: string };
  }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.username}>{item.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ padding: 0 }} edges={["top"]}>
        <Header
          title="Usuários"
          FirstrightIcon="user-plus"
          SecondrightIcon="log-out"
          onFirstIconRightPress={() => navigation.navigate("UserForm")}
          onSecondIconRightPress={() => navigation.navigate("Login")}
        />
      </SafeAreaView>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  list: {
    padding: 20,
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#333",
  },
  name: {
    color: "#fff",
    fontSize: 18,
  },
  username: {
    color: "#ccc",
    fontSize: 14,
  },
});

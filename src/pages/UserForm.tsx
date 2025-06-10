import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "UserForm">;

export function UserFormScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = async () => {
    if (!name || !login || !password || !confirmPassword) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      const newUser = {
        id: uuid.v4().toString(),
        name,
        username: login,
      };

      const storedUsers = await AsyncStorage.getItem("@users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      users.push(newUser);
      await AsyncStorage.setItem("@users", JSON.stringify(users));

      navigation.navigate("UserList");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]}>
        <Header title="Novo Usuário" showBack />
      </SafeAreaView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor="#fff"
            value={login}
            onChangeText={setLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Feather name="save" size={20} color="#fff" />
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  form: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 12,
    marginBottom: 20,
    fontFamily: "Arial",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Arial",
  },
});

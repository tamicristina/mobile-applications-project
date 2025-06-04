import { View, Text, StyleSheet } from "react-native";

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login Works !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

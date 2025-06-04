import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import AppRoutes from "./src/routes/app.routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

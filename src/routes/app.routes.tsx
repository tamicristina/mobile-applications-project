import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/Login";

function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        title: "",
        headerBackVisible: false,
      }}
      initialRouteName="login"
    >
      <Screen name="login" component={LoginScreen} />
    </Navigator>
  );
}

export default AppRoutes;

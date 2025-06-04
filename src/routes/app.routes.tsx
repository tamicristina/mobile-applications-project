import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/Login";
import UserList from "../pages/UserList";
import { RootStackParamList } from "../../src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        title: "",
        headerBackVisible: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UserList" component={UserList} />
    </Stack.Navigator>
  );
}

export default AppRoutes;

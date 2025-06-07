import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../pages/Login";
import { UserListScreen } from "../pages/UserList";
import { UserFormScreen } from "../pages/UserForm";
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
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserForm" component={UserFormScreen} />
    </Stack.Navigator>
  );
}

export default AppRoutes;

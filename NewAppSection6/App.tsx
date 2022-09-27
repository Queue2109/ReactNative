import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#3c0a6b" },
                    headerTintColor: "white",
                    tabBarActiveTintColor: "#3c0a6b",
                }}
            >
                <BottomTab.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }: any) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="User"
                    component={UserScreen}
                    options={{}}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

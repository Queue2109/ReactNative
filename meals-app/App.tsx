import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import { RootStackParamList, IDrawer } from "./interfaces/Interfaces";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer: any = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#351401" },
                        headerTintColor: "white",
                        contentStyle: { backgroundColor: "#3f2f25" },
                    }}
                >
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverview}
                    />
                    {/* options={({ route, navigation }: IMealItem | any) => {
                            const catId = route.params.categoryId;
                            return {
                                title: catId,
                            };
                        }} 
                      */}
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                        options={{
                            title: "About the meal",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    rootContainer: {},
});

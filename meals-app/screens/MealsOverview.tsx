import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";
const MealsOverview = () => {
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
        </View>
    );
};
export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

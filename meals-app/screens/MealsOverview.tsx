import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";
const MealsOverview = ({ route }: any) => {
    // params are things you added to navigation prop
    const catId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {catId}</Text>
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

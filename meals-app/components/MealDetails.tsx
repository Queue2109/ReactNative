import { Text, View, StyleSheet } from "react-native";
import { IMealItemComponent } from "../interfaces/Interfaces";

const MealDetails = ({
    duration,
    complexity,
    affordability,
}: IMealItemComponent) => {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
};
export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});

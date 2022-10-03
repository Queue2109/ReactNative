import { View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { FlatList } from "react-native-gesture-handler";

const MealsList = ({ items }: any) => {
    const renderMealItem = (itemData: any) => {
        const item: any = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};
export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

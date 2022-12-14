import React from "react";
import {
    Text,
    View,
    Pressable,
    Image,
    StyleSheet,
    Platform,
} from "react-native";

import { IMealItemView } from "../../interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = (mealItem: IMealItemView) => {
    // type!!!!!!!!
    const navigation: any = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate("MealDetail", {
            mealId: mealItem.id,
        });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: mealItem.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{mealItem.title}</Text>
                    </View>
                </View>
                <MealDetails
                    duration={mealItem.duration}
                    affordability={mealItem.affordability}
                    complexity={mealItem.complexity}
                />
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },

    buttonPressed: {
        opacity: 0.5,
    },
});

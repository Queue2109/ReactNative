import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

interface Iprops {
    children: React.ReactNode;
}

const Card = ({ children }: Iprops) => {
    return <View style={styles.card}>{children}</View>;
};
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        //adding a shadow... elevation has levels, the higher level, the more shadow
        //it's an android only
        elevation: 4,
        //this works for iOS too
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});

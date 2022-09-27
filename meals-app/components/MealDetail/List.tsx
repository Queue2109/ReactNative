import { Text, View, StyleSheet } from "react-native";
import { IList } from "../../interfaces/Interfaces";

const List = ({ data }: IList) => {
    return data.map((dataPoint: string) => (
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText} key={dataPoint}>
                {dataPoint}
            </Text>
        </View>
    ));
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },
    itemText: {
        color: "351401",
        textAlign: "center",
    },
});

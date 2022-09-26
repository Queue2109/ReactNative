import { Pressable, View, Text } from "react-native";

interface IProps {
    title: string;
    color: string;
}

const CategoryGridTile = ({ title, color }: IProps) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

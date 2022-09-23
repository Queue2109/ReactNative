import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }: any) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    // use Platform API to use a platform specific code
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    // this is really useful - not all phones have a big screen and this maxWidth makes sure that the title component doesn't overflow
    maxWidth: '80%'
  },
});

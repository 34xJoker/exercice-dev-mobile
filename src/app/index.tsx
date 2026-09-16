import { StyleSheet, Text, View } from "react-native";
import WelcomeMessage from "./components/WelcomeMessage";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>
        <WelcomeMessage name="Jayden" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06402B",
  },
});

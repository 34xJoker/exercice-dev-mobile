import { StyleSheet, Text, View } from "react-native";

//Contrat qui peut être aussi une interface
type WelcomeMessageProps = {
  name: string;
};
// export default function WelcomeMessage(props: { name: string }) {
// export default function WelcomeMessage({ name }: { name: string }) {

export default function WelcomeMessage({ name }: WelcomeMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello World {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 44,
  },
});

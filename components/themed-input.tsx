import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  placeholder?: string;
};

const ThemedInput = ({ placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  container: {
    width: "100%", // fill parent width
    marginVertical: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

import { ColorVariant, colorPalette } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  colorVariant?: ColorVariant;
  customColor?: string;
  variant?: "default" | "rounded";
  onPress?: () => void;
};

const ThemedBtn = ({
  title,
  colorVariant = "primary",
  customColor,
  variant = "default",
  onPress,
}: Props) => {
  const backgroundColor =
    colorVariant === "custom" && customColor
      ? customColor
      : colorPalette[colorVariant];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, styles[variant], { backgroundColor }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ThemedBtn;

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    borderRadius: 6,
  },
  rounded: {
    borderRadius: 999,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

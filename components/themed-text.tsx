import { StyleSheet, Text, type TextProps } from "react-native";

import { colorPalette, ColorVariant } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  colorVariant?: ColorVariant;
  customColor?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  colorVariant,
  customColor,
  ...rest
}: ThemedTextProps) {
  let color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  if (colorVariant) {
    if (colorVariant === "custom" && customColor) {
      color = customColor;
    } else {
      color = colorPalette[colorVariant];
    }
  } else {
    color = colorPalette.white;
  }
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: scale(48),
    width: scale(48),
    backgroundColor: theme.colors.primary,
    borderRadius: scale(8),
    alignItems: "center",
    justifyContent: "center",
  },
});

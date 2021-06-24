import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(95),
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: scale(8),
    fontFamily: theme.fonts.text400,
    fontSize: scale(13),
    marginRight: scale(4),
    textAlign: "center",
  },
});

import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(24),
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: scale(18),
    marginBottom: scale(11),
  },
  type: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: scale(13),
    marginBottom: scale(24),
  },
});

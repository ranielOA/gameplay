import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: scale(18),
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: scale(13),
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    marginRight: scale(9),
  },
});

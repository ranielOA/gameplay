import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(56),
    backgroundColor: theme.colors.primary,
    borderRadius: scale(8),
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: scale(15),
    textAlign: "center",
  },
  iconWrapper: {
    width: scale(56),
    height: scale(56),
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: scale(1),
    borderColor: theme.colors.line,
  },
  icon: {
    width: scale(24),
    height: scale(18),
  },
});

import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: scale(104),
    height: scale(120),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(8),
    marginRight: scale(8),
  },
  content: {
    width: scale(100),
    height: scale(116),
    backgroundColor: theme.colors.secondary40,
    borderRadius: scale(8),
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(7),
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: scale(15),
  },
  check: {
    width: scale(12),
    height: scale(12),
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    marginRight: scale(7),
    borderColor: theme.colors.secondary50,
    borderWidth: scale(2),
    borderRadius: scale(3),
  },
  checked: {
    width: scale(10),
    height: scale(10),
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
    marginRight: scale(7),
    borderRadius: scale(3),
  },
});

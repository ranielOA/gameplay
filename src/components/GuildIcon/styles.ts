import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: scale(62),
    height: scale(66),
    borderRadius: scale(8),
    backgroundColor: theme.colors.discord,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: scale(62),
    height: scale(66),
  },
});

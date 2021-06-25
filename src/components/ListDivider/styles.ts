import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: scale(1),
    backgroundColor: theme.colors.secondary40,
    alignSelf: "flex-end",
    width: "78%",
  },
});

import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: scale(1),
    backgroundColor: theme.colors.secondary40,
    marginVertical: scale(21),
    alignSelf: "flex-end",
  },
});

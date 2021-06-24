import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: scale(1),
    backgroundColor: theme.colors.secondary40,
    marginVertical: scale(31),
    alignSelf: "flex-end",
    width: "75%",
    marginTop: scale(2),
  },
});

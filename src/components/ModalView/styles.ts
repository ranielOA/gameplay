import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: theme.colors.overlay,
  },
  insideContainer: {
    flex: 1,
    marginTop: scale(100),
  },
  overlay: {
    flex: 1,
  },
  bar: {
    width: scale(39),
    height: scale(2),
    borderRadius: scale(2),
    backgroundColor: theme.colors.secondary30,
    alignSelf: "center",
    marginTop: scale(13),
  },
});

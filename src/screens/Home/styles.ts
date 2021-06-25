import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { scale } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: scale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + scale(26),
    marginBottom: scale(42),
  },
  matches: {
    marginTop: scale(24),
    marginLeft: scale(24),
  },
});

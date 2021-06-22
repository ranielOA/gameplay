import { StyleSheet } from "react-native";
import { scale } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: scale(49),
    height: scale(49),
    borderRadius: scale(8),
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(22),
  },
  avatar: {
    width: scale(46),
    height: scale(46),
    borderRadius: scale(8),
  },
});

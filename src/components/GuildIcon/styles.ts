import { StyleSheet } from "react-native";
import { scale } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  image: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(8),
    marginRight: scale(20),
  },
});

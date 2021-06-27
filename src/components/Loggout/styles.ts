import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: getBottomSpace(),
  },
  titleContainer: {
    flexDirection: "row",
    padding: scale(25),
  },
  titleLeft: {
    color: "#fff",
    fontFamily: theme.fonts.title500,
    fontSize: scale(24),
  },
  titleMiddle: {
    color: "#fff",
    fontFamily: theme.fonts.title700,
    fontSize: scale(24),
  },
  titleRight: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    fontSize: scale(24),
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: scale(20),
  },
  buttons: {
    flex: 1,
  },
  buttonNo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    padding: scale(27),
    borderRadius: scale(8),
    marginRight: scale(5),
  },
  buttonYes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    padding: scale(27),
    backgroundColor: theme.colors.primary,
    borderRadius: scale(8),
    marginLeft: scale(5),
  },
  textNo: {
    color: "#fff",
    fontFamily: theme.fonts.text500,
    fontSize: scale(15),
  },
  textYes: {
    color: "#fff",
    fontFamily: theme.fonts.text500,
    fontSize: scale(15),
  },
});

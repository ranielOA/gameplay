import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: scale(234),
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: scale(24),
    marginBottom: scale(30),
  },
  title: {
    fontSize: scale(28),
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: scale(13),
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: scale(21),
  },
  members: {
    marginLeft: scale(24),
    marginTop: scale(27),
  },
  footer: {
    paddingHorizontal: scale(24),
    paddingVertical: scale(20),
    marginBottom: getBottomSpace(),
  },
});

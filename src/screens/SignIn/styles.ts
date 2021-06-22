import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary100,
  },
  image: {
    width: "100%",
    height: scale(360),
  },
  content: {
    marginTop: scale(-40),
    paddingHorizontal: scale(50),
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: scale(40),
    marginBottom: scale(16),
    fontFamily: theme.fonts.title700,
    lineHeight: scale(40),
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: scale(15),
    textAlign: "center",
    marginBottom: scale(64),
    fontFamily: theme.fonts.title500,
    lineHeight: scale(25),
  },
});

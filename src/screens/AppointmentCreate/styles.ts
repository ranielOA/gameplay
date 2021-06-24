import { StyleSheet } from "react-native";
import { scale, theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: scale(18),
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: scale(24),
    marginTop: scale(32),
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: scale(68),
    borderColor: theme.colors.secondary50,
    borderWidth: scale(1),
    borderRadius: scale(8),
    alignItems: "center",
    paddingRight: scale(25),
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: scale(64),
    height: scale(68),
    backgroundColor: theme.colors.secondary50,
    borderWidth: scale(1),
    borderRadius: scale(8),
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(30),
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: scale(4),
    fontSize: scale(15),
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: scale(13),
    color: theme.colors.highlight,
  },
  footer: {
    marginVertical: scale(20),
    marginBottom: scale(56),
  },
});

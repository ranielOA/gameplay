import React from "react";
import { View } from "react-native";
import { scale } from "../../global/styles/theme";

import { styles } from "./styles";

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered }: Props) {
  return (
    <View
      style={[
        styles.container,
        isCentered
          ? { marginVertical: scale(12) }
          : { marginTop: scale(2), marginBottom: scale(31) },
      ]}
    />
  );
}

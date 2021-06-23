import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { scale, theme } from "../../global/styles/theme";

// interface lgprops extends React.Component<LinearGradientProps> {
//   numberTextIncrease: number;
// }

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  // lgp: React.FC<lgprops>;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  // lgp,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
        // {...lgp}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={scale(48)} height={scale(48)} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}

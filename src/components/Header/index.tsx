import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { scale, theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={scale(24)} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      <View style={action ? null : { width: scale(24) }}>{action}</View>
    </LinearGradient>
  );
}

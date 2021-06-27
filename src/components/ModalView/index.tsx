import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from "react-native";

import { styles } from "./styles";

import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  insideContainerStyle?: StyleProp<ViewStyle>;
  showBar?: boolean;
};

export function ModalView({
  children,
  closeModal,
  insideContainerStyle,
  showBar = true,
  ...rest
}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={closeModal}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal} style={styles.overlay}>
        <View style={styles.container}>
          <View style={[styles.insideContainer, insideContainerStyle]}>
            <Background>
              {showBar && <View style={styles.bar} />}
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

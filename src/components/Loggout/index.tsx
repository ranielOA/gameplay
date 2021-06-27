import React from "react";

import { View, Text, ModalProps, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/auth";

import { ModalView } from "../ModalView";

import { styles } from "./styles";

type LoggoutProps = ModalProps & {
  openLogoutModal: boolean;
  handleCloseLogout: () => void;
};

export function Loggout({ openLogoutModal, handleCloseLogout }: LoggoutProps) {
  const { singOut } = useAuth();

  function handleYes() {
    singOut();
    handleCloseLogout();
  }

  function handleNo() {
    handleCloseLogout();
  }

  return (
    <ModalView
      insideContainerStyle={{ flex: 0, height: 170 }}
      visible={openLogoutModal}
      closeModal={handleCloseLogout}
      showBar={false}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLeft}>Deseja sair do </Text>
          <Text style={styles.titleMiddle}>Game</Text>
          <Text style={styles.titleRight}>Play</Text>
          <Text style={styles.titleMiddle}>?</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={handleNo}
            activeOpacity={0.7}
          >
            <View style={styles.buttonNo}>
              <Text style={styles.textNo}>Não</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={handleYes}
            activeOpacity={0.7}
          >
            <View style={styles.buttonYes}>
              <Text style={styles.textYes}>Sim</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ModalView>
  );
}

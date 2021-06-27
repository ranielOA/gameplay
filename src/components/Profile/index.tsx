import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";
import { Loggout } from "../Loggout";
import { styles } from "./styles";

export function Profile() {
  const { user } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogout() {
    setOpenLogoutModal(true);
  }

  function handleCloseLogout() {
    setOpenLogoutModal(false);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenLogout}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>

          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>

      <Loggout
        openLogoutModal={openLogoutModal}
        handleCloseLogout={handleCloseLogout}
      />
    </View>
  );
}

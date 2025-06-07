import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  FirstrightIcon?: "user-plus" | "log-in";
  SecondrightIcon?: "log-out";
  onFirstIconRightPress?: () => void;
  onSecondIconRightPress?: () => void;
}

const Header = ({
  title,
  showBack,
  FirstrightIcon,
  onFirstIconRightPress,
  onSecondIconRightPress,
  SecondrightIcon,
}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBack && (
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>
      )}

      <Text style={[styles.title, showBack && { marginLeft: 10 }]}>
        {title}
      </Text>

      {FirstrightIcon && (
        <TouchableOpacity
          onPress={onSecondIconRightPress}
          style={styles.iconRight}
        >
          <Feather name={SecondrightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      )}
      {SecondrightIcon && (
        <TouchableOpacity
          onPress={onFirstIconRightPress}
          style={styles.iconRight}
        >
          <Feather name={FirstrightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  IconsContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Arial",
    flex: 1,
  },
  iconRight: {
    paddingLeft: 30,
    borderRadius: 20,
    marginLeft: "auto",
  },
});

export default Header;

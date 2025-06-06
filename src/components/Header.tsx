import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightIcon?: 'user-plus' | 'log-in';
  onRightPress?: () => void;
}

const Header = ({ title, showBack, rightIcon, onRightPress }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconLeft}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      <Text style={[styles.title, showBack && { marginLeft: 10 }]}>{title}</Text>

      {rightIcon && (
        <TouchableOpacity onPress={onRightPress} style={styles.iconRight}>
          <Feather name={rightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40, // deixa espaço para a barra de status do celular
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconLeft: {
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Arial',
    flex: 1,
  },
  iconRight: {
    marginLeft: 'auto',
  },
});

export default Header;

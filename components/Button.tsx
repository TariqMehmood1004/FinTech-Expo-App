import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  isLoading?: boolean;
  disabled?: boolean;
  loadingColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  isLoading = false,
  disabled = false,
  loadingColor = '#fff',
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        style,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingColor} />

      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.colors.blue, // Blue background color
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: Colors.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: Colors.colors.blue, // Grey background color for disabled state
  },
});

export default Button;

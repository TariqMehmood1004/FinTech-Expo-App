import { Colors } from '@/constants/Colors';
import React from 'react';
import {hp, wp} from '@/helpers/common';
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({
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
              <ActivityIndicator color={loadingColor} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.colors.blue,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: Colors.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: Colors.colors.blue,
  },
});

export default Button;

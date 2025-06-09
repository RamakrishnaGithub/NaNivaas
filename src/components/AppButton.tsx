import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  GestureResponderEvent,
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';

type AppButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  backgroundColor = colors.buttonPrimary, 
  textColor = colors.textLightWhite,
  icon,
  loading = false,
  disabled = false,
  fullWidth = true,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.buttonDisabled : backgroundColor },
        fullWidth && { width: '100%' },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <View style={styles.content}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical:verticalScale(6),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(6),
  },
  text: {
    fontSize:moderateScale(16),
    fontFamily: 'Poppins-Bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight:scale(8),
  },
});

export default AppButton;

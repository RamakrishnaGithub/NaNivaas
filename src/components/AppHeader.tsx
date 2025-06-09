import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
interface AppHeaderProps {
  title?: string;
  containerStyle?: ViewStyle;
  fromSearchScreen?: boolean; 
}

const AppHeader: React.FC<AppHeaderProps> = ({ title = 'NaNivaas', containerStyle, fromSearchScreen}) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      {/* Left: Logo + App Name */}
      <View style={styles.leftSection}>
        {/* <Image
          source={require('@/assets/images/logo.png')} // Replace with your actual logo path
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Right: Placeholder for future icons */}
      <View style={styles.rightSection} />
      {fromSearchScreen && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(20) }}>
          <TouchableOpacity>
            <Feather name="filter" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="sliders" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:moderateScale(16),
    paddingVertical:moderateVerticalScale(12),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width:scale(32),
    height:verticalScale(32),
    marginRight:scale(8),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  rightSection: {
    backgroundColor:"red"
    // width:scale(60), // Reserve space for future icons
  },
});

export default AppHeader;

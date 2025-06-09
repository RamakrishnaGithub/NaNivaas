import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';

type CityCardProps = {
  name: string;
  count: number;
  image: string;
  onPress?: () => void;
};

const CitiesCard: React.FC<CityCardProps> = ({ name, count, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <Text style={styles.cityName}>{name}</Text>
          <Text style={styles.count}>{count} properties</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CitiesCard;
const styles = StyleSheet.create({
    card: {
      width: '48%',
      height:verticalScale(160),
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom:verticalScale(16),
      backgroundColor: colors.backgroundDark,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      borderRadius: 10,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      padding:moderateScale(8),
    },
    cityName: {
      color: colors.textWhite,
      fontSize:moderateScale(14),
      fontWeight: 'bold',
    },
    count: {
      color: colors.textLightWhite,
      fontSize:moderateScale(12),
      marginTop:verticalScale(2),
    },
  });
  
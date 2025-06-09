import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppButton from './AppButton';
import DropDown from './DropDown';
import HomeSerach from './HomeSerach';
import FeaturedCities from './FeaturedCities';

const HomeCard = () => {
  return (
    <LinearGradient
      colors={[colors.brandPrimary, colors.brandSecondary]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.cardContainer}>
      <Text style={styles.title}>Find Your Perfect Stay</Text>
      <Text style={styles.subtitle}>
        Search for PGs, hostels, and co-living bed availability
      </Text>
      <View style={styles.searchContainer}>
        <HomeSerach/>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  title: {
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    color: colors.textWhite,
    marginVertical: verticalScale(10),
  },
  subtitle: {
    fontFamily: 'Nunito-Bold',
    margin: moderateScale(10),
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: colors.textLightWhite,
  },
  searchContainer: {
    marginHorizontal:scale(14),
    marginVertical:verticalScale(14),
    backgroundColor: colors.backgroundCard, 
    borderRadius: 12,
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.border,
  },
  
});

export default HomeCard;

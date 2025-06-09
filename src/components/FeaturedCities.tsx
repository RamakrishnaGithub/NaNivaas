import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { featuredCities } from '../data/mockData';
import CitiesCard from './CitiesCard';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';

const FeaturedCities = () => {
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null); 
  console.log(`Selected City: ${selectedCity}`);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Cities</Text>
        <Text style={styles.subtitle}>Explore popular destinations</Text>
      </View>

      <View style={styles.cardContainer}>
        {featuredCities.map((city, index) => (
           <CitiesCard
           key={index}
           name={city.name}
           count={city.count}
           image={city.image}
           onPress={() => setSelectedCity(city.name)}
         />
        ))}
      </View>
    </View>
  );
};

export default FeaturedCities;

const styles = StyleSheet.create({
  container: {
    paddingVertical:verticalScale(5),
    paddingHorizontal:moderateScale(16),
    backgroundColor: colors.backgroundDark,
    flex: 1,
  },
  header: {
    marginBottom:verticalScale(16),
  },
  title: {
    textAlign: 'center',
    fontSize:moderateScale(20),
    fontWeight: '600',
    color: colors.textPrimary,
    fontFamily: 'Nunito-Bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize:moderateScale(14),
    color: colors.textSecondary,
    fontFamily: 'Nunito-Regular',
    marginTop:verticalScale(4),
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },});

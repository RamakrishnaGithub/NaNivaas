import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../constants/colors';

const steps = [
  {
    icon: <Ionicons name="search" size={28} color="#007bff" />,
    title: 'Search Properties',
    description:
      'Enter your location, accommodation type, and budget to find options.',
  },
  {
    icon: <MaterialCommunityIcons name="select-compare" size={28} color="#007bff" />,
    title: 'Compare Properties',
    description:
      'Compare accommodations by amenities, reviews, and bed availability.',
  },
  {
    icon: <Ionicons name="call" size={28} color="#007bff" />,
    title: 'Contact Owner',
    description:
      'Call the accommodation owner directly or request a visit.',
  },
];

const HowItWorks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How it works</Text>
        <Text style={styles.subtitle}>A simple guide to get you started</Text>
        <Text style={styles.subtitle}>
          Finding your ideal accommodation is easy with NaNivaas
        </Text>
      </View>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconWrapper}>{step.icon}</View>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDesc}>{step.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HowItWorks;
const styles = StyleSheet.create({
    container: {
      padding:moderateScale(16),
      backgroundColor:colors.backgroundCard,
      flex: 1,
    },
    header: {
      marginBottom: 20,
    },
    title: {
      textAlign: 'center',
      fontSize:moderateScale(26),
      fontWeight: '700',
      color: colors.textPrimary,
      fontFamily: 'Nunito-Bold',
    },
    subtitle: {
      textAlign: 'center',
      fontSize:moderateScale(13),
      color: '#6c757d',
      fontFamily: 'Nunito-Regular',
      marginTop: 4,
    },
    stepsContainer: {
      flexDirection: 'column',
      gap: 16,
      marginTop: 10,
    },
    card: {
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: colors.backgroundCard,
      borderRadius: 10,
      padding:moderateScale(16),
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    iconWrapper: {
      width:scale(44),
      height:verticalScale(44),
      borderRadius: 22,
      backgroundColor: '#e7f1ff',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(10),
    },
    stepTitle: {
      fontSize:moderateScale(16),
      fontWeight: '600',
      color: '#333',
      fontFamily: 'Nunito-SemiBold',
      marginBottom:verticalScale(4),
    },
    stepDesc: {
      textAlign: 'center',
      fontSize:moderateScale(14),
      color: '#555',
      fontFamily: 'Nunito-Regular',
    },
  });
  
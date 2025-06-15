import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface AvailabilityBarProp {
  available: Number;
  total: Number;
}
const AvailabilityBar: FC<AvailabilityBarProp> = ({available, total}: any) => {
  const percentage = (available / total) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${available} out of ${total}`}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, {width: `${percentage}%`}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', marginVertical:verticalScale(6)},
  label: {marginBottom:verticalScale(5), fontSize:moderateScale(14)},
  barBackground: {
    height: verticalScale(6),
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    height: 10,
    backgroundColor: '#4caf50',
  },
});

export default AvailabilityBar;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface OverviewProps {
  item: any; // Replace 'any' with the actual type if known
}

const Overview = ({item}: OverviewProps) => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins-bold',
            fontSize:moderateScale(20),
            fontWeight: 'bold',
          }}>
          About
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Regular', marginTop:verticalScale(4), fontSize:moderateScale(12)}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({});

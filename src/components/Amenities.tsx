import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

interface OverviewProps {
  item: any; // Replace 'any' with the actual type if known
}
const Amenities = ({item}: OverviewProps) => {
  const amenities = item?.amenities;
  return (
    <View>
      <FlatList
        data={amenities}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
        }}
        renderItem={({item}) => (
          <View
            style={{
              width: '48%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: verticalScale(2),
            }}>
            <MaterialCommunityIcons
              name="check-decagram"
              size={20}
              color={colors.brandPrimary}
            />
            <Text style={{fontFamily:"Poppins-Regular",fontWeight:500,paddingLeft:scale(5),fontSize:moderateScale(12)}}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center', marginTop: 20}}>
            No amenities available
          </Text>
        )}
        ListHeaderComponent={() => (
          <Text style={{fontFamily:'Poppins-bold',fontSize: moderateScale(20), fontWeight: 'bold', marginBottom: 10}}>
            Amenities
          </Text>
        )}
        ListFooterComponent={() => <View style={{height: 20}} />}
      />
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});

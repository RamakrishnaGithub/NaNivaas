import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

interface ReviewsProps {
  item: any; // Replace 'any' with the actual type if known
}
const Reviews = ({item}: ReviewsProps) => {
  const rating = item?.rating;
  const reviews = item?.reviews;
  const color =
    rating <= 2 ? colors.error : rating < 4 ? colors.warning : colors.success;
  return (
    <View>
      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: verticalScale(20),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-bold',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Reviews
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-bold',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              <Ionicons name="star" size={16} color={color} /> {rating}{' '}
              <Text style={{color: colors.textSecondary}}>
                ({reviews.length} reviews)
              </Text>
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <View style={{marginBottom: verticalScale(10)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: scale(35),
                    height: verticalScale(30),
                    borderRadius: '50%',
                    backgroundColor: 'lightblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(16),
                      fontWeight: 'bold',
                      color: colors.brandPrimary,
                    }}>
                    {item?.userName[0]}
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: scale(10),
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-bold',
                      fontSize: moderateScale(16),
                      fontWeight: 800,
                    }}>
                    {item?.userName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-regular',
                      fontSize: moderateScale(12),
                      color: colors.textSecondary,
                    }}>
                    {item?.date}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-bold',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  <Ionicons name="star" size={16} color={color} /> {rating}
                </Text>
              </View>
            </View>
            <View style={{marginVertical: verticalScale(10)}}>
              <Text
                style={{
                  fontFamily: 'Nunito-Medium',
                  fontSize: moderateScale(14),
                  color: colors.textPrimary,
                  fontWeight: '600',
                  
                }}>
                {item?.comment}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                marginVertical: verticalScale(5),
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({});

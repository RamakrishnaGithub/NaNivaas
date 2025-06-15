import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Listing } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  ProductScreen: { item: Listing }; // Add other screens and their params here if needed
};

type RoomCardProps = {
  item:  Listing; 
};

const RoomCard: FC<RoomCardProps> = ({item}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ProductScreen'>>();
  const availalbleBedOptions = item?.bedOptions?.reduce(
    (sum: number, option: {available: number}) => sum + option.available,
    0,
  );
  const color =
    item?.rating <= 2
      ? colors.error
      : item?.rating < 4
      ? colors.warning
      : colors.success;
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductScreen",{item})}>
        {/* image */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: item?.images[0]}}
            style={{width: '100%', height: 200}}>
            <View style={styles.imagetext}>
              <Text style={styles.type}>{item?.type.toUpperCase()}</Text>
              <Text style={styles.genderText}>
                {item?.gender.charAt(0).toUpperCase() +
                  item?.gender.slice(1)}
              </Text>
            </View>
            <View style={styles.ratingcontainer}>
              <Text style={styles.ratingText}>
                <Entypo name="star" size={13} color={color} /> {item?.rating}
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* body */}
        <View style={styles.body}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.address}>
            {item?.location.address}, {item?.location.city},
            {item?.location.state}
          </Text>
          <View style={styles.bedAvailability}>
            <Text style={styles.bedAvailabilityText}>Bed Availability</Text>
            <Text style={styles.bedCount}>
              {availalbleBedOptions} <FontAwesome name="bed" size={16} />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: verticalScale(10),
    shadowColor: colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: verticalScale(10),
    borderTopRightRadius: verticalScale(10),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagetext: {
    flexDirection: 'row',
    position: 'absolute',
  },
  type: {
    top: verticalScale(8),
    left: scale(8),
    backgroundColor: colors.brandPrimary,
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(10),
    borderRadius: 10,
    color: colors.textWhite,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  genderText: {
    top: verticalScale(8),
    left: scale(20),
    backgroundColor: colors.textSecondary,
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(10),
    borderRadius: 10,
    color: colors.textWhite,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  ratingcontainer: {
    position: 'absolute',
    bottom: verticalScale(10),
    right: scale(10),
    backgroundColor: colors.backgroundDark,
    padding: moderateScale(5),
    borderRadius: 5,
    shadowColor: '#000',
    zIndex: 2,
  },
  ratingText: {
    color: colors.textPrimary,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    zIndex: 1,
  },
  body: {
    padding: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    margin: moderateScale(6),
  },
  address: {color: colors.textSecondary, marginHorizontal: scale(8)},
  bedAvailability: {
    padding: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bedAvailabilityText: {fontSize: moderateScale(16), fontWeight: 'bold'},
  bedCount: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(10),
    backgroundColor: colors.brandPrimary,
    borderRadius: 14,
    color: colors.textWhite,
  },
});

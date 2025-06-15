import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { mockListings } from '../../data/mockData';
import RoomCard from '../../components/RoomCard';

const LikedScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop:
          Platform.OS === 'android'
            ? StatusBar.currentHeight ?? 0
            : StatusBar.currentHeight ?? 0,
      }}>
      <AppHeader />
      <View style={{marginHorizontal: moderateScale(10)}}>
        <FlatList
          data={mockListings}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RoomCard
              item={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: verticalScale(400),
              }}>
              <Text style={{fontSize: moderateScale(16), color: '#888'}}>
                No listings found
              </Text>
            </View>
          }
          ListHeaderComponent={
            <View style={{paddingVertical: verticalScale(10)}}>
              <Text style={{fontSize: moderateScale(18), fontWeight: 'bold'}}>
                Search Results
              </Text>
            </View>
          }
          ListFooterComponent={<View style={{height: verticalScale(100)}} />}
          ItemSeparatorComponent={() => (
            <View style={{height: verticalScale(1)}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({});

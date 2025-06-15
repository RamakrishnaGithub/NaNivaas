import {
  Button,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import RoomCard from '../../components/RoomCard';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {mockListings, Listing} from '../../data/mockData';
import ReactNativeModal from 'react-native-modal';

const SearchScreen = () => {

  return (
    <SafeAreaView style={{flex:1,marginTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : StatusBar.currentHeight ?? 0}}>
      <AppHeader fromSearchScreen={true}/>
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

export default SearchScreen;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
  },
});

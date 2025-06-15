import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Overview from './Overview';
import Amenities from './Amenities';
import Rules from './Rules';
import Reviews from './Reviews';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AvailabilityBar from './AvailabilityBar';

const ProductScreen = ({route}: {route: any}) => {
  const item = route?.params?.item;
  const tabs = [
    {tab: 1, title: 'Overview'},
    {tab: 2, title: 'Amenities'},
    {tab: 3, title: 'Rules'},
    {tab: 4, title: 'Reviews'},
  ];
  const [activeTab, setActiveTab] = useState(1);

  const renderTabComponent = () => {
    switch (activeTab) {
      case 1:
        return <Overview item={item} />;
      case 2:
        return <Amenities item={item} />;
      case 3:
        return <Rules item={item} />;
      case 4:
        return <Reviews item={item} />;
      default:
        return null;
    }
  };
  const address =
    item?.location.address +
    ',' +
    item?.location.city +
    ',' +
    item?.location.state;
  const latitude = item?.location?.coordinates?.lat;
  const longitude = item?.location?.coordinates?.lng;
  const openMaps = () => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}?q=${latitude},${longitude}(${encodeURIComponent(
        address,
      )})`,
    });

    Linking.openURL(url as any).catch(err =>
      console.error('Error opening maps:', err),
    );
  };
  const phoneNumber = item?.contactInfo?.phone; // Your phone number

const handleCallPress = () => {
  Linking.openURL(`tel:${phoneNumber}`).catch(err =>
    Alert.alert('Error', 'Failed to open dialer')
  );
};
  console.log(item);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.imagetext}>
            <Text style={styles.type}>{item?.type.toUpperCase()}</Text>
            <Text style={styles.genderText}>
              {item?.gender.charAt(0).toUpperCase() + item?.gender.slice(1)}
            </Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <AntDesign
                name="heart"
                size={24}
                color={'red'}
                style={{marginRight: scale(10)}}
              />
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.name}>{item?.name}</Text>
            <TouchableOpacity onPress={openMaps}>
              <Text style={styles.address}>
                {item?.location.address}, {item?.location.city},
                {item?.location.state}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Carousel
              loop
              width={scale(400)}
              height={200}
              autoPlay={true}
              autoPlayInterval={3000}
              data={item?.images}
              scrollAnimationDuration={1000}
              renderItem={({item}) => (
                <Image source={{uri: item as string}} style={styles.image} />
              )}
            />
          </View>
          <View>
            <FlatList
              data={tabs}
              horizontal
              keyExtractor={item => item.tab.toString()}
              contentContainerStyle={styles.tabList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item: tabItem}) => (
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === tabItem.tab && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveTab(tabItem.tab)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tabItem.tab && styles.activeTabText,
                    ]}>
                    {tabItem.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          
          <View style={styles.tabContent}>{renderTabComponent()}</View>
          <View
            style={{
              width: '100%',
              height: 'auto',
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 10,
              marginBottom:verticalScale(20)
            }}>
            <View style={{padding: moderateScale(20)}}>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  fontSize: moderateScale(20),
                }}>
                Bed Options
              </Text>
              {item?.bedOptions.map((item: any, index: any) => (
                <TouchableOpacity key={index}>
                  <View
                style={{
                  padding: moderateScale(16),
                  width: '100%',
                  height: 'auto',
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 10,
                  marginVertical: verticalScale(10),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: moderateScale(14),
                    }}>
                    {item?.type}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: moderateScale(12),
                      color: colors.brandPrimary,
                      paddingVertical: verticalScale(2),
                      paddingHorizontal: scale(8),
                      borderRadius: 10,
                      borderColor: colors.border,
                      borderWidth: 1,
                    }}>
                    {item?.available} Available
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    fontSize: moderateScale(18),
                  }}>
                  $ {item?.price}
                  <Text style={{color: colors.buttonDisabled}}> /month</Text>
                </Text>
                <AvailabilityBar
                  available={item?.available}
                  total={item?.total}
                />
              </View>
                </TouchableOpacity>
              ))}
              <View>
                <Text style={{fontSize:moderateScale(20),fontFamily:"Nunito-Bold"}}>Contact</Text>
                <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center",}}>
                  <Text style={{fontSize:moderateScale(16),fontFamily:"Nunito-Bold"}}>{item?.contactInfo?.name}</Text>
                  <TouchableOpacity onPress={handleCallPress}>

                  <Text style={{fontFamily: 'Poppins-Medium',
                      fontSize: moderateScale(12),
                      color: colors.brandPrimary,
                      paddingVertical: verticalScale(6),
                      paddingHorizontal: scale(20),
                      borderRadius: 10,
                      borderColor: colors.border,
                      borderWidth: 1,
                      backgroundColor:colors.divider}}>Call</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0,
    backgroundColor: '#fff',
    padding: scale(10),
  },
  innerContainer: {
    flex: 1,
  },
  imagetext: {
    flexDirection: 'row',
    paddingTop:verticalScale(10)
  },
  type: {
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
    left: scale(20),
    backgroundColor: colors.textSecondary,
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(10),
    borderRadius: 10,
    color: colors.textWhite,
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: verticalScale(4),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    margin: moderateScale(6),
  },
  address: {color: colors.brandPrimary, marginHorizontal: scale(8)},
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: verticalScale(10),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  tabList: {
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(12),
    backgroundColor: '#f9f9f9',
  },
  tabButton: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(12),
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: scale(10),
  },
  activeTabButton: {
    backgroundColor: colors.brandPrimary,
  },
  tabText: {
    fontSize: moderateScale(12),
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabContent: {
    padding: moderateScale(10),
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

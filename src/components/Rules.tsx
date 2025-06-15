import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants/colors';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


interface OverviewProps {
  item: any; // Replace 'any' with the actual type if known
}
const Rules = ({item}:  OverviewProps) => {
  const rules = item?.rules;
  return (
    <View>
     <FlatList
     keyExtractor={(item, index) => index.toString()}
     showsVerticalScrollIndicator={false}
     data={rules}
     renderItem={({item}) => (
        <View style={{marginVertical:verticalScale(4),flexDirection:'row',}} >
          <FontAwesome5 name='receipt'size={18}
                        color={colors.brandPrimary}/>
          <Text style={{fontFamily:"Poppins-Regular",fontSize:moderateScale(12),paddingLeft:scale(10),fontWeight:500}}>{item}</Text>
        </View>
     )}
     />
    </View>
  )
}

export default Rules

const styles = StyleSheet.create({})
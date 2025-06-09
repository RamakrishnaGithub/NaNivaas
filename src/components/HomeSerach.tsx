import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDown from './DropDown';
import AppButton from './AppButton';
import {moderateScale} from 'react-native-size-matters';
import {cities, ListingGender, ListingType} from '../data/mockData';

const HomeSerach = () => {
  const [selectedCity, setSelectedCity] = React.useState(cities[0].id);
  const [selectedType, setSelectedType] = React.useState(ListingType[0].value);
  const [selectedGender, setSelectedGender] = React.useState(
    ListingGender[0].value,
  );
  const hadleSearch = () => {
    const formData = {
      city: selectedCity,
      type: selectedType,
      gender: selectedGender,
    };
    console.log('Search Form Data:', formData);
  };
  return (
    <View style={styles.container}>
      <DropDown
        items={cities.map(city => ({label: city.name, value: city.id}))}
        placeholder="All Cities"
        defaultValue={cities[0].id}
        onChange={val => setSelectedCity(val)}
        searchable={true}
        zIndex={3000}
      />
      <DropDown
        items={ListingType.map(ListingType => ({
          label: ListingType.label,
          value: ListingType.value,
        }))}
        placeholder="All Types"
        onChange={val => setSelectedType(val)}
        defaultValue={ListingType[0].value}
        zIndex={2000}
      />
      <DropDown
        items={ListingGender.map(gender => ({
          label: gender.label,
          value: gender.value,
        }))}
        placeholder="Any Gender"
        onChange={val => setSelectedGender(val)}
        defaultValue={ListingGender[0].value}
        zIndex={1000}
      />
      <AppButton title="Search" onPress={hadleSearch} />
    </View>
  );
};

export default HomeSerach;

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(10),
  },
});

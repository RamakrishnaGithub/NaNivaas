import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

type DropDownOption = {
  label: string;
  value: string | number;
};

type DropDownProps = {
  items: DropDownOption[];
  placeholder?: string;
  multiple?: boolean;
  onChange: (value: any) => void;
  defaultValue?: any;
  zIndex?: number;
  disabled?: boolean;
  searchable?: boolean;
};

const DropDown: React.FC<DropDownProps> = ({
  items,
  placeholder = 'Select an option',
  multiple = false,
  onChange,
  defaultValue = multiple ? [] : null,
  zIndex = 1000,
  disabled = false,
  searchable = false,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(defaultValue);
  const [dropdownItems, setDropdownItems] = useState(items);

  return (
    <View style={{ zIndex }}>
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={(callback) => {
          const val = callback(value);
          setValue(val);
          onChange(val);
        }}
        setItems={setDropdownItems}
        multiple={multiple}
        placeholder={placeholder}
        mode="BADGE" // for multi-select badges
        disabled={disabled}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        placeholderStyle={styles.placeholder}
        labelStyle={styles.label}
        listMode="SCROLLVIEW"
        scrollViewProps={{
            nestedScrollEnabled: true,
          }}
        badgeColors="#8A2BE2"
        badgeDotColors="#800000"
        ArrowDownIconComponent={() => (
            <Ionicons name="chevron-down" size={18} color="#000" />
          )}
        ArrowUpIconComponent={() => (
            <Ionicons name="chevron-up" size={18} color="#000" />
          )}    
        searchable={searchable}
        searchPlaceholder="Search..."
        searchTextInputStyle={styles.searchInput} 
         />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    minHeight:verticalScale(35),
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
  },
  placeholder: {
    color: '#999',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize:moderateScale(14),
    color: '#333',
  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal:scale(10),
    fontFamily: 'Poppins-Regular',
    fontSize:moderateScale(14),
    color: '#333',
  },
});

export default DropDown;

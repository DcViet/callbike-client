
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination, setPickupLocation } from '../../../redux/action/mapSlice';


import styled from 'styled-components/native';


const API_KEY = 'cd65eb49c25a4ace9e8555b1cca95c33';

const SearchBar = ({ onSearch, isPickupLocation }) => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = async (text) => {
    setInputText(text);

    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(text)}&key=${API_KEY}&language=vi&pretty=1`);
      const data = await response.json();

      if (data.results) {
        const newSuggestions = data.results.map(result => ({
          formatted: result.formatted,
          geometry: result.geometry,
        }));
        setSuggestions(newSuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
      setSuggestions([]);
    }
  };

  const handleItemPress = (item) => {
    setInputText(item.formatted);
    setSuggestions([]);
    const locationData = {
      formattedAddress: item.formatted,
      latitude: item.geometry.lat,
      longitude: item.geometry.lng,
    };
    // Gửi dữ liệu lên Redux
    if (isPickupLocation) {
      dispatch(setPickupLocation(locationData));
    } else {
      dispatch(setDestination(locationData));
    }
    onSearch({ latitude: item.geometry.lat, longitude: item.geometry.lng });
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      {/* <Text style={styles.suggestionItem}>{item.formatted}</Text> */}
      <SuggestionItemText>{item.formatted} </SuggestionItemText>
    </TouchableOpacity>
  );

  return (
    <SearchContainer>
      <SearchInput>
        <InputBox>
        <TextInput
          placeholder=" Nhập vào đây .."
          placeholderTextColor="#888"
          onChangeText={handleInputChange}
          value={inputText}
        />
        <FlatList
          data={suggestions}
          renderItem={renderSuggestionItem}
          keyExtractor={(item, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
        />
        </InputBox>
        
      </SearchInput>
    </SearchContainer>

  );
};

const styles = StyleSheet.create({
  suggestionsList: {
    maxHeight: 200,
    backgroundColor: '#FFF',
  },
  suggestionItem: {
    padding: 10,
  },
});

export default SearchBar;


const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchInput = styled.View`
  width: 93%;
  flex-direction: row;
  align-items: center;
`;
const InputBox = styled.View`
  max-height: 200px;
`;

const SearchTextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  margin-left: 10px;
  padding: 0 10px;
  font-size: 16px;
  border: 2px solid #BF4F74;
  border-radius: 10px;
`;

const SuggestionItemText = styled.Text`
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
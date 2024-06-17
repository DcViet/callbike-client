
import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { router } from 'expo-router';

function AddAddressButton() {
    return (
        <AddAddressPress>
            <AntDesign name="staro" size={24} color="black" />
            <AddAddressText>Add your address</AddAddressText>
        </AddAddressPress>
    );
}

export default AddAddressButton;

const AddAddressPress = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const AddAddressText = styled.Text`
  font-size: 14px;
  color: black;
  margin-left: 5px;
`;
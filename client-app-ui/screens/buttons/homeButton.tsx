
//BEM (Block Element Modifier)
import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { router } from 'expo-router';

function HomeButton() {
  return (
    <HomePress>
      <Ionicons name="home-outline" size={24} color="black" />
      <HomeText>Home</HomeText>
    </HomePress>
  );
}

export default HomeButton;

const HomePress = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const HomeText = styled.Text`
  font-size: 14px;
  color: black;
  margin-left: 5px;
`;
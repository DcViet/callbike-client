
//BEM (Block Element Modifier)
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Divider, Input, InputField, Icon, MenuIcon } from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';

import adsImage from '../../assets/images/adaptive-icon.png';

import { router } from 'expo-router';

function AdsFrame() {
  return (
    <AdsContent>
      <AdsImage source={adsImage} />
      <AdsInfo>
        <AdsTitle> Adversiting area
        </AdsTitle>
        <AdsSub>
          Subtitle text can be a bit longer
        </AdsSub>
      </AdsInfo>

      <MaterialIcons name="navigate-next" size={24} color="black" />

    </AdsContent>
  );
}

export default AdsFrame;


const AdsContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  background-color: #f9f9f9;
  opacity: 0.7;
  border-radius: 15px;
`;

const AdsImage = styled(Image)`
  width: 45px;
  height: 45px;
  background-color: #ccc;
  border-radius: 25px;
  margin-right: 20px;
`;

const AdsInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const AdsTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const AdsSub = styled.Text`
  font-size: 12px;
  color: #666;
`;

const NextButton = styled.View`
  width: 24px;
  height: 24px;
  background-color: #888;
  border-radius: 12px;
`;
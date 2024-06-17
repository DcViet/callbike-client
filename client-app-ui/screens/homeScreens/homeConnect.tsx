import React from 'react';
import styled from 'styled-components/native';

import GuestLayout from '../../layouts/GuestLayout';

import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { router } from 'expo-router';
import AdsFrame from '../adversiting/adsFrame';
import SearchFrame from '../frames/searchFrame';
import HomeButton from '../buttons/homeButton';
import RecentsFrame from '../frames/recentsFrame';
import AddAddressButton from '../buttons/addAddressButton';
import PickedFrame from '../frames/pickedFrame';
import RidesFrame from '../frames/ridesFrame';
import ConnectFrame from '../frames/connectFrame';

function HomeConnect() {
  return (
    <GuestLayout>
      <HomeContainer>
        <NavMenu>
          <Feather name="menu" size={24} color="black" />
        </NavMenu>
        <MapContainer>

        </MapContainer>

        <MainContent>
          <ConnectFrame />

          <ButtonContainer>
            <HomeButton />
          </ButtonContainer>
        </MainContent>
      </HomeContainer>
    </GuestLayout>

  );
}

export default HomeConnect;
const HomeContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;
const NavMenu = styled(View)`
  height: 30px;
  justify-content: center;
  align-items: left;
  margin-bottom: 5px;
`;
const MapContainer = styled(View)`
  height: 370px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
`;

const AdsContainer = styled(View)`
  margin-bottom: 20px;
`;

const MainContent = styled(View)`
  flex: 1;
`;

const MainTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SearchContainer = styled(View)`
  margin-bottom: 20px;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const RecentsContainer = styled(View)`
  flex: 1;
`;


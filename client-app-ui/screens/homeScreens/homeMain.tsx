import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import GuestLayout from '../../layouts/GuestLayout';
import AdsFrame from '../adversiting/adsFrame';
import SearchFrame from '../frames/searchFrame';
import HomeButton from '../buttons/homeButton';
import RecentsFrame from '../frames/recentsFrame';
import AddAddressButton from '../buttons/addAddressButton';
import Map from '../frames/mapFrame';
import RidesFrame from '../frames/ridesFrame';
import ConnectFrame from '../frames/connectFrame';

import { RootState } from '../../redux/store/index';
import { requestRideAction } from '../../redux/action/requestSlice';

const HomeMain: React.FC = () => {
  const dispatch = useDispatch();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDriverFound, setIsDriverFound] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const { pickupLocation } = useSelector((state: RootState) => state.map);

  const handleSelectCarButton = () => {
    setIsConfirmed(true);
  };

  const handleFindDriverButton = async () => {
    if (!user) {
      console.error('Không có thông tin người dùng');
      return;
    }

    if (!pickupLocation || !pickupLocation.latitude || !pickupLocation.longitude) {
      console.error('Vị trí đón chưa được thiết lập');
      return;
    }

    try {
      const requestData = {
        customer_id: user.id,
        pickup_location: pickupLocation,
      };

      console.log('Request data:', requestData);

      // Gọi action đã được định nghĩa từ slice
      dispatch(requestRideAction(requestData));

    } catch (error) {
      console.error('Error finding driver:', error);
    }
  };
  
  return (
    <GuestLayout>
      <HomeContainer>
        <NavMenu>
          <Feather name="menu" size={24} color="black" />
        </NavMenu>
        {/* <AdsContainer>
          <AdsFrame />
        </AdsContainer> */}

        <MapContainer>
          <Map />
        </MapContainer>

        <MainContent>
          {isDriverFound ? (
            <ConnectFrame />
          ) : isConfirmed ? (
            <>
              <RidesFrame />
              <FindDriverButton onPress={handleFindDriverButton}>
                <Text>Find Driver</Text>
              </FindDriverButton>
            </>
          ) : (
            <>
              <MainTitle>Where do you want to go?</MainTitle>
              <ButtonContainer>
                <HomeButton />
                <AddAddressButton />
              </ButtonContainer>
              <RecentsContainer>
                <RecentsFrame />
              </RecentsContainer>
              <SelectCarButton onPress={handleSelectCarButton}>
                <Text>Select Car</Text>
              </SelectCarButton>
            </>
          )}
        </MainContent>


      </HomeContainer>
    </GuestLayout>
  );
}

export default HomeMain;

const HomeContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  position: relative; 
`;
const NavMenu = styled(View)`
  height: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5px;
`;
const MapContainer = styled(View)`
  height: 350px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
`;
const AdsContainer = styled(View)`
  position: absolute;
  top: 55px;
  left: 20px; 
  right: 20px; 
  z-index: 1; 
`;
const MainContent = styled(View)`
  flex: 1;
`;
const MainTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const SearchContainer = styled(View)`
  margin-bottom: 15px;
`;
const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
const RecentsContainer = styled(View)`
  flex: 1;
`;
const SelectCarButton = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #555;
  border-radius: 5px;
  margin-top: 10px;
`;
const FindDriverButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;
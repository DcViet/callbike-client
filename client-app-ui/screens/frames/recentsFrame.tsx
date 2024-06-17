
import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { router } from 'expo-router';

function RecentsFrame() {
    return (
        <RecentsList>
            <RecentTitle>Recents Location</RecentTitle>
            <RecentItem>
                <Entypo name="location-pin" size={24} color="black" />
                <RecentAddress>
                    <AddressTitle>Address 1</AddressTitle>
                    <AddressSubText>Subtitle text can be a bit longer</AddressSubText>
                </RecentAddress>
            </RecentItem>
            <RecentItem>
                <Entypo name="location-pin" size={24} color="black" />
                <RecentAddress>
                    <AddressTitle>Address 1</AddressTitle>
                    <AddressSubText>Subtitle text can be a bit longer</AddressSubText>
                </RecentAddress>
            </RecentItem>
        </RecentsList>
    );
}

export default RecentsFrame;


const RecentsList = styled.View`
    padding: 5px;
`;

const RecentTitle = styled.Text`
    font-size: 14px;
    font-weight: lighter;
    color: #333;
    margin-bottom: 12px;
`;

const RecentItem = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
`;

const RecentAddress = styled.View`
    margin-left: 12px;
`;

const AddressTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const AddressSubText = styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 4px;
`;
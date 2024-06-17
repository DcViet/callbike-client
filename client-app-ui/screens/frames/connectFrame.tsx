
import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import driverImage from '../../assets/images/adaptive-icon.png';
import { router } from 'expo-router';

function ConnectFrame() {
    return (
        <ConnectContainer>
            <ConnectTitle>Connecting to your driver</ConnectTitle>
            <ConnectSubText>The driver will be on their way as soon as they confirmed</ConnectSubText>
            <ConnectDriverInfo>
                <DriverAvatar source={driverImage} />
                <DriverInfo>
                    <DriverLicence>51A-123.45</DriverLicence>
                    <DriverName>Tran Hao Nam</DriverName>
                    <DriverJoin>Participated: 1 year</DriverJoin>
                </DriverInfo>
                <Entypo name="chat" size={24} color="black" />
            </ConnectDriverInfo>
            <ConnectInfo>
                <ConnectDistance>1 km</ConnectDistance>
                <ConnectTime>2 min</ConnectTime>
            </ConnectInfo>
            <ConnectPick>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Driver location</PickupTitle>
                        <PickupLocation>location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Your location</PickupTitle>
                        <PickupLocation>location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
            </ConnectPick>
        </ConnectContainer>
    );
}

export default ConnectFrame;


const ConnectContainer = styled.View`
    padding: 16px;
    background-color: #f5f5f5;
`;

const ConnectTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
`;

const ConnectSubText = styled.Text`
    font-size: 16px;
    color: #666;
    margin-bottom: 16px;
`;

const ConnectDriverInfo = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
`;

const DriverAvatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 12px;
`;

const DriverInfo = styled.View`
    flex: 1;
`;

const DriverLicence = styled.Text`
    font-size: 16px;
    color: #333;
`;

const DriverName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-top: 4px;
`;

const DriverJoin = styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 2px;
`;

const ConnectInfo = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 16px;
`;

const ConnectDistance = styled.Text`
    font-size: 16px;
    color: #666;
`;

const ConnectTime = styled.Text`
    font-size: 16px;
    color: #666;
`;

const ConnectPick = styled.View`
    padding: 12px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const PickDrop = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`;

const PickupInfo = styled.View`
    margin-left: 12px;
`;

const PickupTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const PickupLocation = styled.Text`
    font-size: 14px;
    color: #666;
    margin-top: 4px;
`;
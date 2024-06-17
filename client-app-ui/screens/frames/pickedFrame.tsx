
import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { router } from 'expo-router';

function PickedFrame() {
    return (
        <PickedContainer>
            <PickedItem>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Pick-up</PickupTitle>
                        <PickupLocation>My current location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
                <PickDrop></PickDrop>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Drop-off</PickupTitle>
                        <PickupLocation>Picked location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
            </PickedItem>
        </PickedContainer>
    );
}

export default PickedFrame;

const PickedContainer = styled.View`
    padding: 5px;
    
`;

const PickedItem = styled.View`
    background-color: #fff;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
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
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

const PickupLocation = styled.Text`
    font-size: 12px;
    color: #666;
    margin-top: 4px;
`;
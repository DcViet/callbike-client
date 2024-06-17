
import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

function ProgressFrame() {
    return (
        <ProgresContainer>
            <ProgressTitle>The Trip progress</ProgressTitle>
            <ProgreeSchedule>
                <AntDesign name="car" size={24} color="black" /> .....
                <AntDesign name="user" size={24} color="black" />
            </ProgreeSchedule>
            <ProgressInfo>
                <ProgressDistance>1 km</ProgressDistance>
                <ProgressTime>2 min</ProgressTime>
            </ProgressInfo>
            <ProgressPick>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Pick up</PickupTitle>
                        <PickupLocation>location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
                <PickDrop>
                    <Entypo name="location-pin" size={24} color="black" />
                    <PickupInfo>
                        <PickupTitle>Drop off</PickupTitle>
                        <PickupLocation>location</PickupLocation>
                    </PickupInfo>
                </PickDrop>
            </ProgressPick>
        </ProgresContainer>
    );
}

export default ProgressFrame;

const ProgresContainer = styled.View`
    padding: 16px;
    background-color: #f5f5f5;
`;

const ProgressTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
`;

const ProgreeSchedule = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

const ProgressInfo = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 16px;
`;

const ProgressDistance = styled.Text`
    font-size: 16px;
    color: #666;
`;

const ProgressTime = styled.Text`
    font-size: 16px;
    color: #666;
`;

const ProgressPick = styled.View`
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
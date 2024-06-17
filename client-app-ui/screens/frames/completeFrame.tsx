
import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import driverImage from '../../assets/images/adaptive-icon.png';

import { Entypo } from '@expo/vector-icons';

function CompleteFrame() {
    return (
        <CompleteContainer>
            <CompleteDriverInfo>
                <DriverAvatar source={driverImage} />
                <DriverInfo>
                    <DriverLicence>51A-123.45</DriverLicence>
                    <DriverName>Tran Hao Nam</DriverName>
                    <DriverJoin>Participated: 1 year</DriverJoin>
                </DriverInfo>
                <Entypo name="chat" size={24} color="black" />
            </CompleteDriverInfo>
            <CompleteTitle>The Trip Complete</CompleteTitle>
            <CompleteFeedback>Feedback your trip</CompleteFeedback>
            <AntDesign name="staro" size={24} color="black" />
        </CompleteContainer>
    );
}

export default CompleteFrame;

const CompleteContainer = styled.View`
    padding: 16px;
    background-color: #f5f5f5;
    align-items: center;
`;

const CompleteDriverInfo = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
    width: 100%;
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

const CompleteTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 16px 0;
`;

const CompleteFeedback = styled.Text`
    font-size: 16px;
    color: #666;
    margin-bottom: 12px;
`;

const StarContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;
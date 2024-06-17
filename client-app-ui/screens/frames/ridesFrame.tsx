
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import carItem from '../../assets/images/adaptive-icon.png';
import { router } from 'expo-router';
import CarButton from '../buttons/carButton';

import { useDispatch } from 'react-redux';

import { setSelectedCarType } from '../../redux/action/carSlice';

function RidesFrame() {
    const [selected, setSelected] = useState<'Economy' | 'Luxury' | 'Family'>('Economy');
    const dispatch = useDispatch();

    //chon mac dinh là Economy len redux
    useEffect(() => {
        dispatch(setSelectedCarType('Economy'));
    }, [dispatch]);

    const handleCarSelect = (carType: 'Economy' | 'Luxury' | 'Family') => {
        setSelected(carType);
        dispatch(setSelectedCarType(carType));
    };

    return (
        <RideContainer>


            <CarButton text="Economy" active={selected === 'Economy'} onPress={() => handleCarSelect('Economy')} />
            <CarButton text="Luxury" active={selected === 'Luxury'} onPress={() => handleCarSelect('Luxury')} />
            <CarButton text="Family" active={selected === 'Family'} onPress={() => handleCarSelect('Family')} />

            {/* <RideItem>
                <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
                <RideInfo active={selected === 'Family'} onPress={() => handleCarSelect('Economy')} >
                    <CarImage source={carItem} />
                    <RideType>
                        <RideTypeTitle>Family</RideTypeTitle>
                        <RideTypeInfo>
                            <RideTime>5 minnute</RideTime>
                            <RideSeat> 6 seats</RideSeat>
                        </RideTypeInfo>
                    </RideType>
                    <RidePrice>
                        <RideCost>99 000</RideCost>
                        <RideUnit>vnd</RideUnit>
                    </RidePrice>
                </RideInfo>
            </RideItem> */}
            
        </RideContainer>
    );
}

export default RidesFrame;


const RideContainer = styled.View`
    padding: 16px;
    background-color: #f5f5f5;
`;

const RideItem = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
`;

const RideCheckbox = styled.View`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 2px solid #000;
    margin-right: 12px;
`;

const RideInfo = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const CarImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-right: 12px;
    margin-left: 12px;
`;

const RideType = styled.View`
    flex: 1;
`;

const RideTypeTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const RideTypeInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 4px;
`;

const RideTime = styled.Text`
    font-size: 14px;
    color: #666;
    margin-right: 12px;
`;

const RideSeat = styled.Text`
    font-size: 14px;
    color: #666;
`;

const RidePrice = styled.View`
    align-items: flex-end;
`;

const RideCost = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`;

const RideUnit = styled.Text`
    font-size: 14px;
    color: #666;
`;

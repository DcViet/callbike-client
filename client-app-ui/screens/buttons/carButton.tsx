
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

// Import images for car types
import economy from '../../assets/images/adaptive-icon.png';
import luxury from '../../assets/images/adaptive-icon.png';
import family from '../../assets/images/adaptive-icon.png';

interface CarButtonProps extends TouchableOpacityProps {
    text: 'Economy' | 'Luxury' | 'Family';
    active?: boolean;
}

const carType: Record<string, ImageSourcePropType> = {
    Economy: economy,
    Luxury: luxury,
    Family: family,
};

const CarButton: React.FC<CarButtonProps> = ({ text, active = false, ...props }) => {
    return (
        <Container active={active} {...props}>
            <CarImage source={carType[text]} />
            <RideType>
                <RideTypeTitle active={active}>{text}</RideTypeTitle>
                <RideTypeInfo>
                    <RideTime>5 minutes</RideTime>
                    <RideSeat>3 seats</RideSeat>
                </RideTypeInfo>
            </RideType>
            <RidePrice>
                <RideCost>100,000</RideCost>
                <RideUnit>VND</RideUnit>
            </RidePrice>
        </Container>
    );
};

interface ContainerProps {
    active: boolean;
}

const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ active }) => (active ? '#007BFF' : '#FFFFFF')};
  border: ${({ active }) => (active ? '2px solid #0056b3' : '2px solid #FFFFFF')};
  border-radius: 8px;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin: 5px;
`;

const CarImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

interface TitleProps {
    active: boolean;
}

const RideTypeTitle = styled.Text<TitleProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#FFFFFF' : '#333333')};
`;

const RideType = styled.View`
    flex: 1;
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

export default CarButton;

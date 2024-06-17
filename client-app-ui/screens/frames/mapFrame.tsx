
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import DirectionsMap from './directionMap/index'; 

import SearchBar from './searchBar/index';
import { setRouteInfo } from '../../redux/action/mapSlice';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

class Map extends Component {
  state = {
    userRegion: null,
    predefinedRegion: null,
    routeDuration: null,
    routeDistance: null,
    useDeviceLocation: true,
  };

  async componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Quyền truy cập vị trí bị từ chối!');
      return;
    }

    this.updateDeviceLocation();
  };

  updateDeviceLocation = async () => {
    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    this.setState({
      userRegion: {
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
    });
  };

  handleRouteReady = (result) => {
    this.setState({
      routeDuration: Math.floor(result.duration / 60),
      routeDistance: (result.distance / 1000).toFixed(2),
    });

    // Update Redux store with route info
    this.props.setRouteInfo({
      duration: Math.floor(result.duration / 60),
      distance: (result.distance / 1000).toFixed(2),
    });
  };

  handleSearch = (destination) => {
    this.setState({ predefinedRegion: destination });
  };

  toggleLocationMethod = () => {
    this.setState(prevState => ({
      useDeviceLocation: !prevState.useDeviceLocation,
    }), () => {
      if (this.state.useDeviceLocation) {
        this.updateDeviceLocation();
      }
    });
  };

  render() {
    const { userRegion, predefinedRegion, useDeviceLocation } = this.state;

    return (
      <View style={{ flex : 1}}>
        
        <TouchableOpacity onPress={this.toggleLocationMethod} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {useDeviceLocation ? 'Chọn điểm đón' : 'Dùng vị trí hiện tại'}
          </Text>
        </TouchableOpacity>

        {!useDeviceLocation && (
          <View>
            <Text>Nhập điểm đón</Text>
            <SearchBar onSearch={(region) => this.setState({ userRegion: region })} isPickupLocation={true} />
          </View>
        )}

        {userRegion && predefinedRegion ? (
          <Fragment>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
                longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
                latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
                longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
              }}
              showsUserLocation={useDeviceLocation}
              loadingEnabled
            >
              <Marker
                coordinate={userRegion}
                anchor={{ x: 0.5, y: 0.5 }}
                
              />
              <Marker
                coordinate={predefinedRegion}
                anchor={{ x: 0.5, y: 0.5 }}
                
              />
              <DirectionsMap
                origin={userRegion}
                destination={predefinedRegion}
                onReady={this.handleRouteReady}
              />
            </MapView>
          </Fragment>
        ) : (
          userRegion && (
            <MapView
              style={styles.map}
              region={userRegion}
              showsUserLocation
              loadingEnabled
            >
              <Marker
                coordinate={userRegion}
                anchor={{ x: 0.5, y: 0.5 }}
              />
            </MapView>
          )
        )}
        <Text style={{ marginBottom: 5}}> <AntDesign name="search1" size={24} color="black" /> Nhập điểm đến:</Text>
        <SearchBar onSearch={this.handleSearch} isPickupLocation={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginBottom: 10,
  },
  toggleButton: {
    position: 'absolute',
    bottom: 40,
    left: 200,
    borderWidth: 1,
    // backgroundColor: '#000',
    borderRadius: 30,
    width: 90,
  },
  toggleButtonText: {
    color: '#000',
    textAlign: 'center',
    width: 80,
  },
  infoBox: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  infoText: {
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  setRouteInfo,
};

export default connect(null, mapDispatchToProps)(Map);
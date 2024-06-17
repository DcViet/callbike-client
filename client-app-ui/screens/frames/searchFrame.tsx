// import React, { useState } from 'react';
// import styled from 'styled-components/native';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
// import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { setDestination, setPickupLocation } from '../../redux/action/mapSlice';

// const API_KEY = 'cd65eb49c25a4ace9e8555b1cca95c33';

// interface SearchFrameProps {
//   onSearch: (location: { latitude: number; longitude: number }) => void;
//   isPickupLocation: boolean;
// }

// interface Suggestion {
//   formatted: string;
//   geometry: {
//     lat: number;
//     lng: number;
//   };
// }

// const SearchFrame: React.FC<SearchFrameProps> = ({ onSearch, isPickupLocation }) => {
//   const [inputText, setInputText] = useState<string>('');
//   const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
//   const dispatch = useDispatch();

//   const handleInputChange = async (text: string) => {
//     setInputText(text);

//     if (text.length < 3) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(text)}&key=${API_KEY}&language=vi&pretty=1`);
//       const data = await response.json();

//       if (data.results) {
//         const newSuggestions = data.results.map((result: any) => ({
//           formatted: result.formatted,
//           geometry: result.geometry,
//         }));
//         setSuggestions(newSuggestions);
//       } else {
//         setSuggestions([]);
//       }
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//       setSuggestions([]);
//     }
//   };

//   const handleItemPress = (item: Suggestion) => {
//     setInputText(item.formatted);
//     setSuggestions([]);
//     const locationData = {
//       formattedAddress: item.formatted,
//       latitude: item.geometry.lat,
//       longitude: item.geometry.lng,
//     };
//     // Dispatching data to Redux
//     if (isPickupLocation) {
//       dispatch(setPickupLocation(locationData));
//     } else {
//       dispatch(setDestination(locationData));
//     }
//     onSearch({ latitude: item.geometry.lat, longitude: item.geometry.lng });
//   };

//   const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
//     <TouchableOpacity onPress={() => handleItemPress(item)}>
//       <SuggestionItemText>{item.formatted}</SuggestionItemText>
//     </TouchableOpacity>
//   );

//   return (
//     <SearchContainer>
//       <SearchInput>
//         <AntDesign name="search1" size={24} color="black" />
//         <SearchTextInput
//           placeholder="Search here..."
//           placeholderTextColor="#888"
//           onChangeText={handleInputChange}
//           value={inputText}
//         />
//       </SearchInput>
//       <TouchableOpacity onPress={() => {/* Handle more options */}}>
//         <MaterialIcons name="more-vert" size={24} color="black" />
//       </TouchableOpacity>
//       <FlatList
//         data={suggestions}
//         renderItem={renderSuggestionItem}
//         keyExtractor={(item, index) => index.toString()}
//         keyboardShouldPersistTaps="handled"
//       />
//     </SearchContainer>
//   );
// };

// export default SearchFrame;

// const SearchContainer = styled.View`
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SearchInput = styled.View`
//   width: 93%;
//   flex-direction: row;
//   align-items: center;
// `;

// const SearchTextInput = styled.TextInput`
//   flex: 1;
//   height: 40px;
//   margin-left: 10px;
//   padding: 0 10px;
//   font-size: 16px;
//   border: 2px solid #BF4F74;
//   border-radius: 10px;
// `;

// const SuggestionItemText = styled.Text`
//   padding: 10px;
//   border-bottom-width: 1px;
//   border-bottom-color: #ccc;
// `;



// import React, { Component, Fragment } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { connect } from 'react-redux';

// import DirectionsMap from './directionMap/index'; 

// import SearchBar from './searchBar/index';
// import { setRouteInfo } from '../../redux/action/mapSlice';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// class MapDirection extends Component {
//   state = {
//     userRegion: null,
//     predefinedRegion: null,
//     routeDuration: null,
//     routeDistance: null,
//     useDeviceLocation: true,
//   };

//   async componentDidMount() {
//     this.requestLocationPermission();
//   }

//   requestLocationPermission = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Quyền truy cập vị trí bị từ chối!');
//       return;
//     }

//     this.updateDeviceLocation();
//   };

//   updateDeviceLocation = async () => {
//     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
//       accuracy: Location.Accuracy.High,
//     });

//     this.setState({
//       userRegion: {
//         latitude,
//         longitude,
//         latitudeDelta: 0.0143,
//         longitudeDelta: 0.0134,
//       },
//     });
//   };

//   handleRouteReady = (result) => {
//     this.setState({
//       routeDuration: Math.floor(result.duration / 60),
//       routeDistance: (result.distance / 1000).toFixed(2),
//     });

//     // Update Redux store with route info
//     this.props.setRouteInfo({
//       duration: Math.floor(result.duration / 60),
//       distance: (result.distance / 1000).toFixed(2),
//     });
//   };

//   handleSearch = (destination) => {
//     this.setState({ predefinedRegion: destination });
//   };

//   toggleLocationMethod = () => {
//     this.setState(prevState => ({
//       useDeviceLocation: !prevState.useDeviceLocation,
//     }), () => {
//       if (this.state.useDeviceLocation) {
//         this.updateDeviceLocation();
//       }
//     });
//   };

//   render() {
//     const { userRegion, predefinedRegion, useDeviceLocation } = this.state;

//     return (
//       <View style={{ }}>
        

//         <TouchableOpacity onPress={this.toggleLocationMethod} style={styles.toggleButton}>
//           <Text style={styles.toggleButtonText}>
//             {useDeviceLocation ? 'Chọn điểm đón' : 'Dùng vị trí hiện tại'}
//           </Text>
//         </TouchableOpacity>

//         {!useDeviceLocation && (
//           <View>
//             <Text>Nhập điểm đón</Text>
//             <SearchBar onSearch={(region) => this.setState({ userRegion: region })} isPickupLocation={true} />
//           </View>
//         )}

//         {userRegion && predefinedRegion ? (
//           <Fragment>
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
//                 longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
//                 latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
//                 longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
//               }}
//               showsUserLocation={useDeviceLocation}
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
                
//               />
//               <Marker
//                 coordinate={predefinedRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
                
//               />
//               <DirectionsMap
//                 origin={userRegion}
//                 destination={predefinedRegion}
//                 onReady={this.handleRouteReady}
//               />
//             </MapView>
//           </Fragment>
//         ) : (
//           userRegion && (
//             <MapView
//               style={styles.map}
//               region={userRegion}
//               showsUserLocation
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//               />
//             </MapView>
//           )
//         )}
//         <Text style={{ marginBottom: 5}}> <AntDesign name="search1" size={24} color="black" /> Nhập điểm đến:</Text>
//         <SearchBar onSearch={this.handleSearch} isPickupLocation={false} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   toggleButton: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//   },
//   toggleButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });

// const mapDispatchToProps = {
//   setRouteInfo,
// };

// export default connect(null, mapDispatchToProps)(MapDirection);



import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import DirectionsMap from './directionMap/index'; 

import SearchBar from './searchBar/index';
import { setRouteInfo } from '../../redux/action/mapSlice';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

class MapDirection extends Component {
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
      <View style={{ flex: 1, marginTop: 20 }}>
        
        <SearchBar onSearch={this.handleSearch} isPickupLocation={false} />

        <TouchableOpacity onPress={this.toggleLocationMethod} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {useDeviceLocation ? 'Chọn điểm đón' : 'Dùng vị trí hiện tại'}
          </Text>
        </TouchableOpacity>

        {!useDeviceLocation && (
          <View>
            
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
    margin: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
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

export default connect(null, mapDispatchToProps)(MapDirection);
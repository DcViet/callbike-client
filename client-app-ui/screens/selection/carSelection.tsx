import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Divider, Input, InputField, Icon, MenuIcon } from '@gluestack-ui/themed';

import { router } from 'expo-router'; // Đảm bảo bạn đã cài đặt expo-router
import CarType from './carType';
import SearchLocation from './searchLocation';

function Car() {
  return (
    <View style={styles.container}>
      {/* menu */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.button}>
          <Icon as={MenuIcon} size="xl" />
        </Pressable>
      </View>
      {/* map */}
      <View style={styles.mapsContainer}>
        <View style={styles.mapView}>
          <Text style={styles.buttonText}>map</Text>
        </View>
      </View>
      {/* adversiting */}
      <View style={styles.advertisingContainer}>
        <Text style={styles.buttonText}>adver</Text>
      </View>
      {/* contents */}
      <View style={styles.contentsContainer}>
        {/* <View style={styles.searchContainer}>
          <View style={styles.pickup}>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Nhap diem don" />
            </Input>
          </View>
          <View style={styles.dropdown}>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Nhap diem den" />
            </Input>
          </View>
        </View> */}
        <SearchLocation />

        <View style={styles.recentsContainer}>
          <View style={styles.homePick}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>homepick</Text>
            </Pressable>
          </View>

          <View style={styles.recentPlace}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>dropdown</Text>
            </Pressable>
          </View>
        </View>

        {/* <View style={styles.cartypeContainer}>
          <View style={styles.selectionCar}>
            <Text style={styles.buttonText}>cartype</Text>
          </View>
        </View> */}

        <CarType />
        <View style={styles.buttonCenter}>
          <Pressable style={styles.submitButton}>
            <Text style={styles.buttonText}>sub</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Car;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },

  headerContainer: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },

  mapsContainer: {
    flex: 0.4,
    backgroundColor: '#0891b2',
  },

  mapView: {
    flex: 1,
    backgroundColor: 'blue',
  },

  advertisingContainer: {
    flex: 0.05,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  contentsContainer: {
    flex: 0.5,
    backgroundColor: '#22d3ee',
    padding: 5,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  button: {
    backgroundColor: '#0891b2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },

  searchContainer: {
    // flexDirection: 'column',
    marginTop: 10,
    marginBottom: 20,
  },

  pickup: {
    margin: 10,
  },

  dropdown: {
    margin: 10,
  },

  recentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },

  homePick: {
    flex: 1,
    marginRight: 5,
  },

  recentPlace: {
    flex: 1,
    marginLeft: 5,
  },

  cartypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selectionCar: {
    flex: 1,
    backgroundColor: 'green',
    padding: 50,
    borderRadius: 5,
  },

  buttonCenter: {
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    height: 40,
    alignItems: 'center',
  },
});

import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Divider, Input, InputField, Icon, MenuIcon, Checkbox, CheckboxIndicator, CheckboxIcon, Box, Image, Heading, HStack, VStack } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function MyTrip() {

    return (
        <View style={styles.yourRideContainer}>
            <VStack>

                <View style={styles.nowTime}>
                    <HStack style={styles.nowTime} reversed={false}>
                        <Text>Time</Text>
                        <Text>icon</Text>
                    </HStack>
                </View>

                <View style={styles.driverInfo}>
                    <HStack space="md" p="$1">
                        <Text> driver avatar</Text>
                        <VStack>
                            <Heading>Driver name</Heading>
                            <Text>bien so, rate,..</Text>
                        </VStack>
                    </HStack>
                </View>

                <View style={styles.pickupInfo}>
                    <View></View>
                    <View style={styles.frame133}>
                        <View style={styles.frame131}>
                            <VStack style={styles.frame130}>
                                <Text>pickup</Text>
                                <Text>Location pick</Text>
                            </VStack>
                        </View>


                        <View style={styles.frame131}>
                            <VStack style={styles.frame130}>
                                <Text>dropoff</Text>
                                <Text>Location drop</Text>
                            </VStack>
                        </View>

                    </View>

                </View>

                <View style={styles.dropInfo}>
                    <HStack>
                        <Text>cost</Text>
                        <Text>Confirm button</Text>
                    </HStack>
                </View>
            </VStack>

        </View>
    )
}
export default MyTrip;

const styles = StyleSheet.create({
    yourRideContainer: {
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
    },
    nowTime: {
        marginBottom: 10,
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
    },
    driverInfo: {
        marginBottom: 10,
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
    },
    pickupInfo: {
        display: 'flex',
        flexDirection: 'column',
        margin: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
    },
    dropInfo: {
        marginBottom: 10,
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
    },
    pickdrop: {
        display: 'flex',
        flexDirection: 'column',
        margin: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        flexShrink: 0,
        position: 'relative',
    },
    frame133: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative',
      },
      frame131: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        flexShrink: 0,
        position: 'relative',
      },
      frame130: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexShrink: 0,
        position: 'relative',
      },
});
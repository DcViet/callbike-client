import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Divider, Input, InputField, Icon, MenuIcon, Checkbox, CheckboxIndicator, CheckboxIcon, CheckIcon, Box, Image, Heading, HStack, VStack } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function CarType() {

    const carTypesSchema = z.object({
        carchoice: z.boolean().optional(),
    });

    type CarTypeSchemaType = z.infer<typeof carTypesSchema>;

    const {
        control,
    } = useForm<CarTypeSchemaType>({
        resolver: zodResolver(carTypesSchema),
    });
    ;
    return (
        <View style={styles.typeContainer}>
            {/* <View style={styles.selectionBox}>
                <Pressable>
                    <Box>
                        <HStack space="md" reversed={false} justifyContent="center">
                            <Box bg="$primary500" p="$1" >
                                <Controller
                                    name="carchoice"
                                    defaultValue={false}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <Checkbox
                                            my="$5"
                                            size="sm"
                                            value="CarChoice"
                                            isChecked={value}
                                            onChange={onChange}
                                            alignSelf="flex-start"
                                        >
                                            <CheckboxIndicator mr="$2">
                                                <CheckboxIcon as={CheckIcon} />
                                            </CheckboxIndicator>
                                        </Checkbox>
                                    )}
                                />


                            </Box>
                            <Box bg="$primary500" p="$1" >
                                <Image
                                    size="sm" borderRadius="$xl"
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                                    }}
                                />
                            </Box>
                            <Box bg="$primary500" p="$1" >
                                <VStack space="sm" reversed={false}>
                                    <Heading mb="$1" size="md">Economy</Heading>
                                    <HStack space="md" p="$1">
                                        <Text>Time</Text>
                                        <Text>Destination</Text>
                                    </HStack>
                                </VStack>

                            </Box>
                            <Box bg="$primary500" p="$1" >
                                <VStack space="sm" reversed={false}>
                                    <Heading mb="$1" size="md">100.000</Heading>
                                    <HStack space="md" p="$1">
                                        <Text>VND</Text>
                                    </HStack>
                                </VStack>

                            </Box>
                        </HStack>
                    </Box>
                </Pressable>
            </View> */}

            <View>
                <Controller
                    name="carchoice"
                    defaultValue={false}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Checkbox
                            my="$5"
                            size="sm"
                            value="CarChoice"
                            isChecked={value}
                            onChange={onChange}
                            alignSelf="flex-start"
                        >
                            <Box >
                                <HStack space="md" reversed={false} justifyContent="center">
                                    <View style={styles.boxalignSelf}>
                                    <Box p="$1" >
                                        <CheckboxIndicator mr="$2">
                                            <CheckboxIcon as={CheckIcon} />
                                        </CheckboxIndicator>
                                    </Box>
                                    </View>
                                    <Box p="$1" >
                                        <Image
                                            size="sm" borderRadius="$xl"
                                            source={{
                                                uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                                            }}
                                        />
                                    </Box>
                                    <Box p="$1" >
                                        <VStack space="sm" reversed={false}>
                                            <Heading mb="$1" size="md">Economy</Heading>
                                            <HStack space="md" p="$1">
                                                <Text>Time</Text>
                                                <Text>Destination</Text>
                                            </HStack>
                                        </VStack>

                                    </Box>
                                    <Box p="$1" >
                                        <VStack space="sm" reversed={false}>
                                            <Heading mb="$1" size="md">100.000</Heading>
                                            <HStack space="md" p="$1">
                                                <Text>VND</Text>
                                            </HStack>
                                        </VStack>

                                    </Box>
                                </HStack>
                            </Box>
                        </Checkbox>
                    )}
                />
            </View>
        </View>
    )
}
export default CarType;

const styles = StyleSheet.create({
    typeContainer: {
        backgroundColor: "red",
        borderRadius: 10,
        alignItems: 'center',
    },
    boxalignSelf: {
        alignSelf: 'center',
    }
})
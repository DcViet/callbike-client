import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Divider, Input, InputField, Icon, MenuIcon, Checkbox, CheckboxIndicator, CheckboxIcon, Box, Image, Heading, HStack, VStack } from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function SearchLocation() {

    return (
        <View style={styles.typeContainer}>
            <View style={styles.searchInput}>
                <Box bg="$primary500" p="$1" >
                    <HStack space="md" p="$1">
                        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField
                                placeholder='Enter Text here'
                            />
                        </Input>
                        <Text>icon</Text>
                    </HStack>
                </Box>
            </View>

            <View style={styles.searchInput}>
                <Box bg="$primary500" p="$1" >
                    <HStack space="md" p="$1">
                        <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField
                                placeholder='Enter Text here'
                            />
                        </Input>
                        <Text>icon</Text>
                    </HStack>
                </Box>
            </View>
        </View>
    )
}
export default SearchLocation;

const styles = StyleSheet.create({
    typeContainer: {
        flex: 1,
        backgroundColor: "red",
        borderRadius: 10,
        // alignItems: 'center',
    },
    searchInput: {
        padding: 10,
    },
})
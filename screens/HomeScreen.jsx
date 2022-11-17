import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            <View>
                {/* Header */}
                <View className="flex-row pb-3 pt-0 my-0 items-center mx-4 space-x-2 px-4 self-start">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                    <View className="flex">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>

                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB" />
                </View>

                {/* Search */}
                <View className="flex-row items-center space-x-2 pb-2 my-0 pt-0 mx-4 px-2">
                    <View className="flex-row space-2 flex-1 space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color="grey" size={20} />
                        <TextInput placeholder="Enter some text" keyboardType="default" />
                    </View>

                    <AdjustmentsHorizontalIcon color="#00CCBB" />
                </View>

                {/* Scroll View */}
                <ScrollView className="bg-gray-100 pt-3 px-6">
                    <Categories />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

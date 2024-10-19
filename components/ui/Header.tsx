import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons } from "~/constants";

const Header = () => (
  <View className="flex flex-row items-center justify-between my-5 mx-3">
    <View className="flex">
      <Text className="text-xl font-JakartaExtraBold">Welcome</Text>
      <Text>Patient Name</Text>
    </View>
    <TouchableOpacity
      onPress={() => {}}
      className="flex w-10 h-10 items-center justify-center rounded-full bg-white"
    >
      <Image source={icons.out} className="w-5 h-5" />
    </TouchableOpacity>
  </View>
);

export default Header;
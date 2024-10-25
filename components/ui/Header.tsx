import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons } from "~/constants";

const Header = () => (
  <View className="flex flex-row items-center justify-between my-5 mx-3">
    <View className="flex">
      <Text className="text-xl font-JakartaExtraBold">Welcome</Text>
      <Text>Patient Name</Text>
    </View>

  </View>
);

export default Header;
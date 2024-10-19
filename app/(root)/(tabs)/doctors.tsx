import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllDoctors } from "~/lib/api";

import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  ScrollViewBase,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons, images } from "~/constants";
import DoctorCard from "~/components/ui/DoctorCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "~/components/ui/Header";
import Slider from "~/components/ui/Slider";
import DoctorList from "~/components/ui/DoctorList";

const Doctors = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-200">
      <View>
        <Header />
        <View className="ml-3 flex flex-row items-center justify-center">
          <Slider />
        </View>
      </View>
      <DoctorList />
    </SafeAreaView>
  );
};

export default Doctors;

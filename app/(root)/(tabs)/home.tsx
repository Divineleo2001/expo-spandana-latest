import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllDoctors } from "~/lib/api";

import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "~/constants";
import DoctorCard from "~/components/ui/DoctorCard";

const Home = () => {
  const {
    data: doctorData,
    error,
    isError: doctorIsError,
    isLoading: doctorIsLoading,
  } = useGetAllDoctors({
    variables: {
      tenantId: "spandana",
    },
  });
  const doctors = doctorData?.data || [];

  if (doctorIsLoading) {
    return (
      <SafeAreaView className="h-screen items-center justify-center">
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }

  if (doctorIsError)
    return (
      <SafeAreaView className="h-screen items-center justify-center">
        <Text>Somethings went wrong while fetching the Doctor </Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView className="bg-blue-200">
      <FlatList
        className="px-5"
        data={doctors}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => <DoctorCard doctor={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={(item) => (
          <View className=" items-center justify-center h-[670px]">
            <>
              <Image
                source={images.noResult}
                className="h-64 w-64"
                alt="No Recent Rides Found"
                resizeMode="contain"
              />
              <Text className="text-sm">No Doctors or has not been loaded</Text>
            </>
          </View>
        )}
        ListHeaderComponent={() => (
          <Text className="text-3xl font-JakartaBold">Home</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

import { View, Text, SafeAreaView, ActivityIndicator, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useGetAllDoctors } from '~/lib/api';
import { images } from '~/constants';
import DoctorCard from './DoctorCard';
import Ionicons from '@expo/vector-icons/Ionicons';

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");

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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (specialty === "" ||
        doctor.specialty.toLowerCase() === specialty.toLowerCase())
  );

  const specialties = [...new Set(doctors.map((doctor) => doctor.specialty))];

  return (
    <View>
         <View className=" ">
          <View className="p-2 bg-blue-300/50">
            <View className="">
              <View className="mt-1 ">
                <View className="flex flex-row items-center gap-5 border-[1px] border-gray-500 rounded-lg p-3 mb-2 w-full">
                  <Ionicons name="search-outline" size={24} color="black" />
                  <TextInput
                    placeholder="Search"
                    onChangeText={(value) => setSearchTerm(value)}
                    className="text-lg font-JakartaMedium w-full"
                  />
                </View>
              </View>
            </View>
            <FlatList
              className="px-2 mb-[150px]"
              data={filteredDoctors}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => <DoctorCard doctor={item} />}
              contentContainerStyle={{ paddingBottom: 100 }}
              ListEmptyComponent={() => (
                <View className=" items-center justify-center h-[670px]">
                  <>
                    <Image
                      source={images.noResult}
                      className="h-64 w-64"
                      alt="No Recent Rides Found"
                      resizeMode="contain"
                    />
                    <Text className="text-sm">
                      No Doctors or has not been loaded
                    </Text>
                  </>
                </View>
              )}
            />
          </View>
        </View>
    </View>
  )
}

export default DoctorList
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DoctorProfile } from "~/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { icons } from "~/constants";
import { Button } from "./button";

const DoctorCard = ({ doctor }: { doctor: DoctorProfile }) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-col items-start justify-center p-3">
        <View className="pb-3">
          <Text className="text-2xl font-JakartaExtraBold capitalize" numberOfLines={1}>
            {doctor.firstName + " " + doctor.lastName}
          </Text>
        </View>
        <View className="flex flex-row w-full justify-between items-start">
          <Image
            source={{ uri: doctor.iconImgUrl }}
            className="w-[100px] h-[200px] rounded-lg"
          />

          <View className="flex-1 flex gap-10 p-2  w-full justify-end">
            {/* Additional Button would be added here */}
            <View>
              <Text className="font-JakartaExtraBold text-sm">
                {doctor.specialty}
              </Text>
              <Text className="font-JakartaExtraLight">{doctor.qualification}</Text>
            </View>

            <View className="">
              <Button
                variant="default"
                className="bg-blue-500  rounded-lg"
                onPress={() => {
                  console.log("PressedUpdate");
                }}
              >
                <Text className="text-white">Book Appointment</Text>
              </Button>
            </View>
          </View>
        </View>
        <View className="flex flex-col w-full mt-1 bg-general-500 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center w-full  mb-1">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Years of Experience :
            </Text>
            <Text className="text-md font-JakartaBold" numberOfLines={1}>
              {doctor.experienceYears}
            </Text>
          </View>
          <View className="flex  flex-col items-start w-full justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Doctor Address :
            </Text>
            <Text className="text-md font-JakartaBold text-wrap">
              {doctor.address}
            </Text>
          </View>
          <View className="flex  flex-col items-start w-full justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Availability and Charges
            </Text>
            <Text className="text-md font-JakartaBold text-wrap">
              {doctor.availableTimeInterval} Minutes | Rs.{" "}
              {doctor.chargesPerTimeInterval} /-
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

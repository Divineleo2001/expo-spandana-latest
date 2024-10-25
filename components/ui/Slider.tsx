import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import { images } from "~/constants";

const SliderList = [
  {
    id: 1,
    title: "Slider 1",
    imageUrl: images.exit,
  },
  {
    id: 2,
    title: "Slider 2",
    imageUrl: images.exit,
  },
  {
    id: 3,
    title: "Slider 3",
    imageUrl: images.exit,
  },
];

const Slider = () => {
  return (
    <View className="mt-2 ">
      <FlatList
        data={SliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={item.imageUrl}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
              borderRadius: 10,
              margin: 10,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;

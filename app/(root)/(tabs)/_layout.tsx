import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';
import { icons } from '~/constants';

const TabIcon = ({ source, focused }: { source: ImageSourcePropType; focused: boolean }) => (
  <View
    className={`flex flex-row items-center justify-center rounded-full ${focused ? 'bg-blue-300' : ''}`}>
    <View
      className={`h-12 w-12 items-center justify-center rounded-xl ${focused ? 'w-16 bg-blue-400' : ''}`}>
      <Image source={source} tintColor={'white'} resizeMode="contain" className="h-7 w-7" />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#1E3A8A",
        borderRadius: 20,
        paddingBottom: 0,
        overflow: "hidden",
        marginHorizontal: 20,
        marginBottom: 20,
        height: 78,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      }
    }}

    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.home} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="departments"
        options={{
          title: 'Departments',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.list} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Appointments',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.calendar} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon source={icons.profile} focused={focused} />,
        }}
      />
    </Tabs>
  );
}

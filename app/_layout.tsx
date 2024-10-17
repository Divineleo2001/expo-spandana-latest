import '../global.css';

import { SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { APIProvider } from '~/utils/api-provider';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    'Jakarta-Bold': require('~/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Jakarta-ExtraBold': require('~/assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'Jakarta-ExtraLight': require('~/assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    'Jakarta-Light': require('~/assets/fonts/PlusJakartaSans-Light.ttf'),
    'Jakarta-Medium': require('~/assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-Regular': require('~/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Jakarta-SemiBold': require('~/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });
  // useeffect to hide splash screen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
function RootLayoutNav() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}


function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


      <APIProvider>{children}</APIProvider>

    </GestureHandlerRootView>
  );
}

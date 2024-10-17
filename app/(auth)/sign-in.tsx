import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In


const SignIn = () => {
  // useEffect(() => {
  //   configureGoogleSignIn();
  // }, []);

  const signIn = async () => {
    console.log('PressedSignIn');
    // try {
    //   // const result = await GoogleSignin.signIn();
    //   console.log("sigin");
    // } catch (error) {
    //   console.log(error);
    // }

  };

  return (
    <View className="flex h-screen items-center justify-center">
      <TouchableOpacity onPress={signIn}>
        <Text>SignIn</Text>
      </TouchableOpacity>
      {/* <GoogleSigninButton size={GoogleSigninButton.Size.Standard} onPress={signIn} /> */}
    </View>
  );
};

export default SignIn;

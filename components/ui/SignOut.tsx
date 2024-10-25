import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '~/constants'

const SignOut = () => {
  return (
    <View>
      <TouchableOpacity
      onPress={() => {}}
      className="flex w-10 h-10 items-center justify-center rounded-full bg-white"
    >
      <Image source={icons.out} className="w-5 h-5" />
    </TouchableOpacity>
    </View>
  )
}

export default SignOut